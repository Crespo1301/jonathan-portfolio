import { site } from "@/data/site";

const MailIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" />
    <path d="m3 6 9 6 9-6" />
  </svg>
);

// Email quick action. Uses mailto: so it works with no backend.
// (Email is a placeholder in site.ts until Jonathan confirms his address.)
export function QuickActions({ variant = "light" }: { variant?: "light" | "dark" }) {
  void variant;
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a href={`mailto:${site.contact.email}`} className="btn btn-primary gap-2">
        {MailIcon} Email me
      </a>
    </div>
  );
}
