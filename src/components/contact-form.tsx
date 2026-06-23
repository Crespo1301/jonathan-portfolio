"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

// Lightweight contact form. With no backend wired yet, submitting composes an
// email in the visitor's mail app (mailto). Swap to a form endpoint (Formspree /
// Web3Forms) once Jonathan's real inbox is confirmed. See HANDOFF.md.
const inputClass =
  "mt-2 w-full border border-line-strong bg-surface px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-accent";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Phone: ${f.get("phone")}`,
      `Vehicle: ${f.get("vehicle")}`,
      "",
      String(f.get("message") ?? ""),
    ].join("\n");
    const subject = `Website inquiry from ${f.get("name") || "a visitor"}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
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
        <button type="submit" className="btn btn-primary">
          Send message
        </button>
        {sent && (
          <p className="text-sm text-muted">
            Opening your email app. If nothing happens, email {site.contact.email} directly.
          </p>
        )}
      </div>
    </form>
  );
}
