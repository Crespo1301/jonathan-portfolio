import { NextRequest, NextResponse } from "next/server";
import { site } from "@/data/site";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MAX_BODY_BYTES = 16 * 1024;
const RATE_LIMIT_WINDOW_MS = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_SECONDS ?? 900) * 1000;
const RATE_LIMIT_MAX = Number(process.env.CONTACT_RATE_LIMIT_MAX ?? 5);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  vehicle?: unknown;
  message?: unknown;
  website?: unknown;
};

type RateEntry = {
  count: number;
  resetAt: number;
};

const rateBucket = new Map<string, RateEntry>();

function cleanEnv(value: string | undefined) {
  return (value ?? "").trim().replace(/^["']|["']$/g, "").trim();
}

function normalize(value: unknown, maxLength: number, { multiline = false } = {}) {
  if (typeof value !== "string") return "";

  let normalized = value
    .normalize("NFKC")
    .replace(/\u0000/g, "")
    .replace(/[\u0001-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim();

  if (!multiline) {
    normalized = normalized.replace(/[\r\n]+/g, " ");
  }

  return normalized.slice(0, maxLength);
}

function json(status: number, message: string) {
  return NextResponse.json({ ok: false, message }, { status });
}

function clientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  return forwardedFor || realIp || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = rateBucket.get(key);

  if (!current || current.resetAt <= now) {
    rateBucket.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX;
}

function isValidOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const allowed = new Set([
    request.nextUrl.origin,
    "https://jczdripp.com",
    "https://www.jczdripp.com",
    "http://localhost:3003",
    "http://127.0.0.1:3003",
  ]);

  return allowed.has(origin);
}

function validate(payload: ContactPayload) {
  const name = normalize(payload.name, 120);
  const email = normalize(payload.email, 254).toLowerCase();
  const phone = normalize(payload.phone, 40);
  const vehicle = normalize(payload.vehicle, 160);
  const message = normalize(payload.message, 3000, { multiline: true });
  const honeypot = normalize(payload.website, 120);
  const errors: string[] = [];

  if (!name) errors.push("Please add your name.");
  if (!email || !EMAIL_PATTERN.test(email)) errors.push("Please add a valid email address.");
  if (!message) errors.push("Please add a short message.");

  return {
    errors,
    fields: {
      name,
      email,
      phone: phone || "Not provided",
      vehicle: vehicle || "Not provided",
      message,
      honeypot,
    },
  };
}

async function parsePayload(request: NextRequest): Promise<ContactPayload> {
  const rawBody = await request.text();
  if (!rawBody.trim()) return {};

  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(new URLSearchParams(rawBody).entries());
  }

  return JSON.parse(rawBody) as ContactPayload;
}

export async function POST(request: NextRequest) {
  if (!isValidOrigin(request)) {
    return json(403, "We couldn't verify this request. Please use the contact form on this site.");
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json(413, "That message is a little too long. Please shorten it and try again.");
  }

  if (isRateLimited(clientKey(request))) {
    return json(429, "Too many attempts came through at once. Please wait a few minutes and try again.");
  }

  let payload: ContactPayload;

  try {
    payload = await parsePayload(request);
  } catch (error) {
    console.error("contact.parse_failed", error);
    return json(400, "Please check the form and try again.");
  }

  const { fields, errors } = validate(payload);

  if (fields.honeypot) {
    return NextResponse.json({ ok: true, redirect: "/thank-you" }, { status: 200 });
  }

  if (errors.length > 0) {
    return NextResponse.json({ ok: false, message: errors[0], errors }, { status: 422 });
  }

  const resendApiKey = cleanEnv(process.env.RESEND_API_KEY);
  const contactTo = cleanEnv(process.env.CONTACT_TO);
  const contactFrom = cleanEnv(process.env.CONTACT_FROM);

  if (!resendApiKey || !contactTo || !contactFrom) {
    console.error("contact.misconfigured", "missing RESEND_API_KEY, CONTACT_TO, or CONTACT_FROM");
    return json(500, `The contact form is not configured yet. Please email ${site.contact.email} directly.`);
  }

  const subject = `Jonathan Crespo website inquiry: ${fields.name}`;
  const text = [
    "New inquiry from the Jonathan Crespo portfolio website.",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Vehicle: ${fields.vehicle}`,
    "",
    "Message:",
    fields.message,
    "",
    "Site: https://jczdripp.com / https://www.jczdripp.com",
  ].join("\n");

  try {
    const upstream = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactFrom,
        to: contactTo,
        reply_to: fields.email,
        subject,
        text,
      }),
    });

    if (!upstream.ok) {
      const details = await upstream.text();
      console.error("contact.send_failed", upstream.status, details);
      return json(502, `We couldn't send your message just now. Please email ${site.contact.email} directly.`);
    }
  } catch (error) {
    console.error("contact.request_failed", error);
    return json(502, `We couldn't send your message just now. Please email ${site.contact.email} directly.`);
  }

  return NextResponse.json({ ok: true, redirect: "/thank-you" }, { status: 200 });
}
