import type { ReactNode } from "react";
import { site } from "@/data/site";

// Minimal, easily-recognizable brand glyphs (replace links in site.ts).
const ICONS: Record<string, ReactNode> = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </>
  ),
  Facebook: (
    <path
      fill="currentColor"
      d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.5 1.6-1.5h1.4V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7.6v3h2.5v7h3.4z"
    />
  ),
  TikTok: (
    <path
      fill="currentColor"
      d="M16.5 3c.4 2 1.7 3.6 3.5 3.9v2.8c-1.3 0-2.5-.4-3.5-1.1v5.9a5.3 5.3 0 1 1-5.3-5.3c.3 0 .6 0 .9.1v2.9a2.4 2.4 0 1 0 1.7 2.3V3h2.7z"
    />
  ),
  YouTube: (
    <>
      <rect x="3" y="6.5" width="18" height="11" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path fill="currentColor" d="M11 9.6 15 12l-4 2.4z" />
    </>
  ),
};

export function Socials({ variant = "light" }: { variant?: "light" | "dark" }) {
  const cls =
    variant === "dark"
      ? "border-steel-line text-chrome hover:border-gold hover:text-background"
      : "border-border text-muted hover:border-gold hover:text-gold";

  return (
    <ul className="flex flex-wrap items-center gap-3">
      {site.socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label}, ${s.handle}`}
            className={`flex h-11 w-11 items-center justify-center border transition-colors duration-200 ${cls}`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              {ICONS[s.label] ?? null}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
