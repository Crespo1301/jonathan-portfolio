import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Wheel } from "@/components/wheel";
import { AccentBar } from "@/components/accent-bar";
import { site } from "@/data/site";
import { blur } from "@/data/blur";

const glance = [
  { label: "In the trade", value: site.tenure },
  { label: "Painting since", value: "2016" },
  { label: "Based in", value: site.location },
  { label: "Service area", value: "Greater Seattle" },
];

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Jonathan Crespo's experience: fourteen years in automotive refinishing, painting since 2016, first painter in the PNW on Glasurit 100 Line, holding every car to an OEM standard or better.",
  alternates: { canonical: "/resume" },
};

export default function ExperiencePage() {
  return (
    <>
      {/* 01 , Intro: statement + narrative + at-a-glance + known for */}
      <section className="border-t border-border">
        <div className="shell py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <div>
              <AccentBar className="mb-7" />
              <h1 className="display">{site.experience.statement}</h1>
              <div className="measure mt-8 space-y-6">
                {site.experience.narrative.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-8 text-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <aside className="lg:border-l lg:border-border lg:pl-10">
              <p className="label">At a glance</p>
              <dl className="mt-5 border-t border-border">
                {glance.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-6 border-b border-border py-4"
                  >
                    <dt className="label">{row.label}</dt>
                    <dd className="text-right text-base text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <p className="label">Known for</p>
                <ul className="mt-4 space-y-3.5">
                  {site.experience.knownFor.map((item) => (
                    <li key={item} className="group flex items-start gap-3 text-base leading-6 text-foreground">
                      <Wheel className="mt-0.5 h-4 w-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 02 , The path: career timeline */}
      <section className="border-t border-border bg-silver">
        <div className="shell py-16 sm:py-20">
          <div className="flex items-baseline gap-4">
            <span className="index text-base">02</span>
            <h2 className="h2">The path.</h2>
          </div>
          <ol className="mt-10 border-t border-line-strong">
            {site.experience.timeline.map((t) => (
              <li
                key={t.year}
                className="grid gap-2 border-b border-line-strong py-7 sm:grid-cols-[9rem_1fr] sm:gap-8"
              >
                <div className="index text-lg">{t.year}</div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{t.title}</h3>
                  <p className="measure mt-2 text-base leading-7 text-muted">{t.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 03 , What I do: capability spec-row */}
      <section className="border-t border-border">
        <div className="shell py-16 sm:py-20">
          <div className="flex items-baseline gap-4">
            <span className="index text-base">03</span>
            <h2 className="h2">What I do.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {site.capabilities.map((item) => (
              <div key={item.title} className="bg-background p-7">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 , Process: image-led sequence */}
      <section className="border-t border-border bg-silver">
        <div className="shell py-16 sm:py-20">
          <div className="flex items-baseline gap-4">
            <span className="index text-base">04</span>
            <div className="max-w-2xl">
              <h2 className="h2">{site.process.title}</h2>
              <p className="lead mt-4">{site.process.summary}</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            {site.process.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="zoom frame relative aspect-[4/3]">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    placeholder="blur"
                    blurDataURL={blur[step.image.src]}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="index">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted">{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 , Materials & systems: Glasurit 100 Line (steel panel) */}
      <section className="glow-steel relative border-t border-border text-background">
        <AccentBar className="absolute left-6 top-0 z-10 -translate-y-1/2 sm:left-10" />
        <div className="shell py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <span className="index !text-chrome">05</span>
              <h2 className="h2 mt-3 text-background">{site.materials.title}</h2>
              <p className="lead mt-5 text-chrome">{site.materials.copy}</p>
            </div>
            <ul className="grid list-none grid-cols-1 gap-px border border-steel-line bg-steel-line sm:grid-cols-2">
              {site.materials.points.map((point) => (
                <li
                  key={point}
                  className="group flex items-center gap-3 bg-steel p-6 text-base text-background"
                >
                  <Wheel className="h-4 w-4" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 06 , Specialties + hands-on skills */}
      <section className="border-t border-border bg-silver">
        <div className="shell py-16 sm:py-20">
          <div className="flex items-baseline gap-4">
            <span className="index text-base">06</span>
            <h2 className="h2">What comes through the booth.</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <p className="label">Specialties</p>
              <ul className="mt-5 border-t border-line-strong">
                {site.experience.specialties.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-line-strong py-4 text-lg text-foreground"
                  >
                    <span className="index">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">Hands-on skills</p>
              <ul className="mt-5 grid list-none grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                {site.experience.skills.map((skill) => (
                  <li
                    key={skill}
                    className="group flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <Wheel className="h-4 w-4" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="glow-black relative border-t border-border text-background">
        <AccentBar className="absolute left-6 top-0 z-10 -translate-y-1/2 sm:left-10" />
        <div className="shell py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="display text-background">Have a car in mind?</h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Get in touch
              </Link>
              <Link href="/work" className="btn btn-on-dark">
                See the work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
