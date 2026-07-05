"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

// If NEXT_PUBLIC_FORM_ENDPOINT is set (a Formspree/Web3Forms URL), the form POSTs
// there. Otherwise it falls back to composing an email (mailto), so it works with
// no backend today. See HANDOFF.md to wire the real endpoint once Jonathan's inbox
// is confirmed.
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const inputClass =
  "mt-2 w-full border border-line-strong bg-surface px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-accent";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const payload = Object.fromEntries(f.entries());

    if (ENDPOINT) {
      try {
        setStatus("sending");
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...payload, _subject: `Website inquiry from ${payload.name || "a visitor"}` }),
        });
        if (!res.ok) throw new Error("Request failed");
        form.reset();
        setStatus("sent");
      } catch {
        setStatus("error");
      }
      return;
    }

    // No backend: compose an email instead.
    const body = [
      `Name: ${payload.name ?? ""}`,
      `Email: ${payload.email ?? ""}`,
      `Phone: ${payload.phone ?? ""}`,
      `Vehicle: ${payload.vehicle ?? ""}`,
      "",
      String(payload.message ?? ""),
    ].join("\n");
    const subject = `Website inquiry from ${payload.name || "a visitor"}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-line-strong bg-surface p-8">
        <p className="text-lg font-semibold text-foreground">Thanks, message sent.</p>
        <p className="mt-2 text-base text-muted">
          Jonathan will get back to you shortly. Prefer to talk now? Call or text using the
          buttons on this page.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="vehicle" className="label">
            Vehicle
          </label>
          <input
            id="vehicle"
            name="vehicle"
            type="text"
            placeholder="Year, make, model"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label">
          What do you have in mind?
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClass} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending" : "Send message"}
        </button>
        {status === "error" && (
          <p className="text-sm text-muted">
            Something went wrong. Please email {site.contact.email} directly.
          </p>
        )}
      </div>
    </form>
  );
}
