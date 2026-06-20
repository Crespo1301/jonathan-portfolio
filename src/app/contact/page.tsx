import { SectionShell } from "@/components/section-shell";
import { MapEmbed } from "@/components/map-embed";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <SectionShell index="01" title={site.contact.title} copy={site.contact.copy}>
        <dl className="flex flex-wrap gap-x-12 gap-y-6 border-t border-line-strong pt-8">
          <div>
            <dt className="label">Email</dt>
            <dd className="mt-2">
              <a
                href={`mailto:${site.contact.email}`}
                className="text-lg text-foreground underline-offset-4 hover:underline"
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

        <a href={`mailto:${site.contact.email}`} className="btn btn-primary mt-10">
          Email Jonathan
        </a>

        <div className="mt-14">
          <MapEmbed className="aspect-[16/9] w-full" zoom={11} />
          <p className="mt-3 text-sm text-muted">{site.contact.note}</p>
        </div>
      </SectionShell>
    </>
  );
}
