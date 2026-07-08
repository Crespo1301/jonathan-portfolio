import type { Metadata } from "next";
import { MapEmbed } from "@/components/map-embed";
import { ContactForm } from "@/components/contact-form";
import { QuickActions } from "@/components/quick-actions";
import { Socials } from "@/components/socials";
import { AccentBar } from "@/components/accent-bar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jonathan Crespo, automotive paint specialist in Bellevue, WA. Email or send a message about the car and finish you have in mind.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Intro + form / details */}
      <section className="border-t border-border">
        <div className="shell py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <AccentBar className="mb-7" />
              <h1 className="display">{site.contact.title}</h1>
              <p className="lead measure mt-6">{site.contact.copy}</p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <aside className="lg:border-l lg:border-border lg:pl-12">
              <p className="label">Reach Jonathan directly</p>
              <div className="mt-5">
                <QuickActions />
              </div>

              <dl className="mt-10 space-y-6 border-t border-border pt-8">
                <div>
                  <dt className="label">Email</dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="text-lg text-foreground underline-offset-4 transition-colors hover:text-accent"
                    >
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label">Location</dt>
                  <dd className="mt-2 text-lg text-foreground">{site.contact.location}</dd>
                </div>
                <div>
                  <dt className="label">Service area</dt>
                  <dd className="mt-2 text-lg text-foreground">Greater Seattle</dd>
                </div>
              </dl>

              <div className="mt-10 border-t border-border pt-8">
                <p className="label">Follow the work</p>
                <div className="mt-4">
                  <Socials />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border bg-silver">
        <div className="shell py-16 sm:py-20">
          <div className="flex items-baseline gap-4">
            <span className="index">02</span>
            <div>
              <h2 className="h2">Based in Bellevue.</h2>
              <p className="lead mt-4 max-w-md">{site.contact.note}</p>
            </div>
          </div>
          <div className="mt-10">
            <MapEmbed className="aspect-[16/9] w-full lift" zoom={11} />
          </div>
        </div>
      </section>
    </>
  );
}
