import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="card-surface rounded-[28px] p-8 sm:p-12">
            <p className="eyebrow">{site.intro.eyebrow}</p>
            <h1 className="section-title mt-4">{site.intro.headline}</h1>
            <p className="copy-balance mt-6 text-lg leading-8 muted-copy">
              {site.intro.supportingCopy}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={site.intro.primaryCta.href} className="button-primary">
                {site.intro.primaryCta.label}
              </Link>
              <Link href={site.intro.secondaryCta.href} className="button-secondary">
                {site.intro.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="card-surface rounded-[28px] p-6 sm:p-8">
            <div className="placeholder-box flex min-h-[360px] flex-col justify-between rounded-[24px] p-6">
              <div>
                <p className="text-sm font-semibold text-foreground">Hero image placeholder</p>
                <p className="mt-3 text-sm leading-6 text-muted">{site.placeholders.headshot}</p>
              </div>
              <div className="rounded-[20px] bg-white/70 p-5">
                <p className="text-sm font-semibold text-foreground">Current build status</p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Structure first, real content next, design pass after Jonathan&apos;s brief.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Project intent"
        title="This repo is set up to be useful before the final design even starts."
        copy={site.sitePurpose}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {site.plannedSections.map((item) => (
            <article key={item.title} className="card-surface rounded-[24px] p-6">
              <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Needed next"
        title="The best next step is gathering Jonathan's real content, links, and preferences."
        copy="We can make this site genuinely strong once the real story, proof, and visual direction are in place. Until then, the structure stays honest and easy to swap."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {site.contentNeeds.map((item) => (
            <div key={item} className="card-surface rounded-[22px] px-5 py-4 text-sm leading-6 text-muted">
              {item}
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
