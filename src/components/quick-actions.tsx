import { site } from "@/data/site";

const tel = site.contact.phone.replace(/[^+\d]/g, "");

const PhoneIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" />
  </svg>
);

const ChatIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1z" />
  </svg>
);

const MailIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" />
    <path d="m3 6 9 6 9-6" />
  </svg>
);

// Call / Text / Email quick actions. Uses tel:, sms: and mailto: so they work
// with no backend. (Phone + email are placeholders in site.ts until confirmed.)
export function QuickActions({ variant = "light" }: { variant?: "light" | "dark" }) {
  const secondary = variant === "dark" ? "btn-on-dark" : "btn-secondary";
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a href={`tel:${tel}`} className="btn btn-primary gap-2">
        {PhoneIcon} Call
      </a>
      <a href={`sms:${tel}`} className={`btn gap-2 ${secondary}`}>
        {ChatIcon} Text
      </a>
      <a href={`mailto:${site.contact.email}`} className={`btn gap-2 ${secondary}`}>
        {MailIcon} Email
      </a>
    </div>
  );
}
