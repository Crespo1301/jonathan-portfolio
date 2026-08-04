import type { Metadata } from "next";
import Link from "next/link";
import { AccentBar } from "@/components/accent-bar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Message Sent",
  description: "Confirmation that Jonathan Crespo's portfolio contact form accepted your message.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="border-t border-border">
      <div className="shell py-16 sm:py-24">
        <div className="max-w-2xl">
          <AccentBar className="mb-7" />
          <p className="label">Message sent</p>
          <h1 className="display mt-4">Thanks for reaching out.</h1>
          <p className="lead mt-6">
            Your message was accepted by the site&apos;s delivery provider and sent
            to Jonathan&apos;s inquiry inbox. He can follow up from there.
          </p>
          <p className="mt-6 text-base leading-7 text-muted">
            If you need to add anything, you can also email{" "}
            <a href={`mailto:${site.contact.email}`} className="underline underline-offset-4 hover:text-accent">
              {site.contact.email}
            </a>
            .
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/work" className="btn btn-primary">
              View the work
            </Link>
            <Link href="/" className="btn btn-secondary">
              Back home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
