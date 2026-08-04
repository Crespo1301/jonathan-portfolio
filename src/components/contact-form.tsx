"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

const inputClass =
  "mt-2 w-full border border-line-strong bg-surface px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-accent";

type Status = "idle" | "sending" | "error";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await res.json()) as {
        ok?: boolean;
        redirect?: string;
        message?: string;
      };

      if (!res.ok || !result.ok) {
        throw new Error(result.message || "We couldn't send your message just now.");
      }

      form.reset();
      router.push(result.redirect || "/thank-you");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : `We couldn't send your message just now. Please email ${site.contact.email} directly.`,
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" maxLength={120} className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" maxLength={254} className={inputClass} />
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
            maxLength={160}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label">
          What do you have in mind?
        </label>
        <textarea id="message" name="message" rows={5} required maxLength={3000} className={inputClass} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending" : "Send message"}
        </button>
        {status === "error" && (
          <p className="text-sm text-muted">
            {message}{" "}
            <a href={`mailto:${site.contact.email}`} className="underline underline-offset-4">
              Email Jonathan directly.
            </a>
          </p>
        )}
      </div>

      <p className="text-sm leading-6 text-muted">
        This form sends your name, email, phone, vehicle, and message to Jonathan
        through a server-side email provider. See the{" "}
        <Link href="/privacy" className="underline underline-offset-4 hover:text-accent">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
