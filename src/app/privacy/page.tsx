import type { Metadata } from "next";
import Link from "next/link";
import { AccentBar } from "@/components/accent-bar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Jonathan Crespo's portfolio contact form handles name, email, phone, vehicle, and message details.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="border-t border-border">
      <div className="shell py-16 sm:py-24">
        <div className="max-w-3xl">
          <AccentBar className="mb-7" />
          <p className="label">Privacy</p>
          <h1 className="display mt-4">Privacy policy.</h1>
          <p className="lead measure mt-6">
            A plain-language note about what the contact form collects and how it is used.
          </p>
          <p className="mt-6 text-sm text-muted">Last updated: August 4, 2026</p>
        </div>

        <article className="mt-14 max-w-3xl space-y-10 text-base leading-8 text-muted">
          <Section title="Information collected">
            <p>
              The contact form asks for your name, email address, phone number,
              vehicle details, and message. Vehicle details may include the year,
              make, model, finish, repair need, or other information you choose to
              include.
            </p>
          </Section>

          <Section title="How the information is used">
            <p>
              Jonathan uses the information you submit to understand the inquiry,
              reply to you, discuss timing, and coordinate next steps. The site does
              not sell, rent, or share your contact details for third-party
              marketing.
            </p>
          </Section>

          <Section title="Contact form delivery">
            <p>
              Website inquiries are sent through a server-side email delivery
              provider. The provider processes the submitted fields only for email
              delivery, logging, abuse prevention, and related service operations.
              The site only shows success after the delivery provider accepts the
              message.
            </p>
          </Section>

          <Section title="Direct email">
            <p>
              If you use a direct email link instead of the form, your message is
              handled by your email app and email provider. Opening a mail client is
              not the same as delivering a message; the message is sent only after
              you send it from that app.
            </p>
          </Section>

          <Section title="Maps and basic site data">
            <p>
              The site includes a Google Maps embed centered on Bellevue, Washington.
              Google may process technical information when that map loads. The
              site also receives basic technical request information needed to load
              pages, protect the contact form from abuse, and troubleshoot delivery
              issues.
            </p>
          </Section>

          <Section title="Your choices">
            <p>
              To ask about a prior message or request deletion of contact details,
              email{" "}
              <a href={`mailto:${site.contact.email}`} className="underline underline-offset-4 hover:text-accent">
                {site.contact.email}
              </a>
              .
            </p>
          </Section>
        </article>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contact" className="btn btn-primary">
            Contact Jonathan
          </Link>
          <Link href="/" className="btn btn-secondary">
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="h3 text-foreground">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
