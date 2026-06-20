import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SnapMode } from "@/components/snap-mode";
import { Marquee } from "@/components/marquee";
import { MapEmbed } from "@/components/map-embed";
import { AccentBar } from "@/components/accent-bar";
import { Wheel } from "@/components/wheel";
import { RainierBackdrop } from "@/components/rainier-backdrop";
import { site } from "@/data/site";
import { blur } from "@/data/blur";

export default function HomePage() {
  return (
    <>
      <SnapMode />

      {/* Hero: asymmetric split, oversized type, full-height image */}
      <section id="hero" className="snap-section screen relative overflow-hidden xl:pr-14">
        <RainierBackdrop />
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
          <div className="order-2 flex flex-col justify-center px-6 py-12 sm:px-10 lg:order-1 lg:px-16">
            <AccentBar className="mb-8" />
            <h1 className="display-xl">{site.hero.headline}</h1>
            <p className="lead measure mt-8">{site.hero.supporting}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href={site.hero.primaryCta.href} className="btn btn-primary">
                {site.hero.primaryCta.label}
              </Link>
              <Link href={site.hero.secondaryCta.href} className="btn btn-secondary">
                {site.hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative order-1 min-h-[44svh] border-b border-border lg:order-2 lg:min-h-0 lg:border-b-0 lg:border-l">
            <AccentBar
              orientation="vertical"
              className="absolute left-0 top-10 z-10 lg:-translate-x-1/2"
            />
            <Image
              src={site.hero.image.src}
              alt={site.hero.image.alt}
              fill
              priority
              placeholder="blur"
              blurDataURL={blur[site.hero.image.src]}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Kinetic marquee transition */}
      <Marquee
        items={[
          "European cars & exotics",
          "Bellevue, Washington",
          "Ten years refinishing",
          "Color-matched finishes",
        ]}
      />

      {/* Featured build: image-dominant editorial, inline attributes */}
      <section
        id="featured"
        className="snap-section screen relative border-t border-border bg-silver"
      >
        <AccentBar className="absolute left-6 top-0 z-10 -translate-y-1/2 sm:left-10" />
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-[1.55fr_1fr]">
          <Reveal dir="none" className="zoom relative min-h-[42svh] lg:min-h-0">
            <AccentBar orientation="vertical" className="absolute left-0 top-8 z-10" />
            <Image
              src={site.featured.lead.src}
              alt={site.featured.lead.alt}
              fill
              placeholder="blur"
              blurDataURL={blur[site.featured.lead.src]}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="flex flex-col justify-center gap-9 border-t border-border px-6 py-12 sm:px-10 lg:border-l lg:border-t-0 lg:px-14">
            <Reveal dir="right">
              <h2 className="h2">{site.featured.title}</h2>
              <p className="lead mt-5">{site.featured.summary}</p>
            </Reveal>

            <Reveal dir="right" delay={90}>
              <dl className="flex flex-wrap gap-x-12 gap-y-5 border-t border-line-strong pt-6">
                {site.featured.attributes.map((attr) => (
                  <div key={attr.label}>
                    <dt className="label">{attr.label}</dt>
                    <dd className="mt-1 text-base text-foreground">{attr.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal dir="right" delay={170} className="grid grid-cols-2 gap-4">
              {site.featured.thumbs.map((thumb) => (
                <div key={thumb.src} className="zoom frame relative aspect-[4/3]">
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    fill
                    placeholder="blur"
                    blurDataURL={blur[thumb.src]}
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities: steel panel, statement + editorial list (no card grid) */}
      <section
        id="capabilities"
        className="snap-section screen relative border-t border-border bg-steel text-background"
      >
        <AccentBar className="absolute left-6 top-0 z-10 -translate-y-1/2 sm:left-10" />
        <div className="shell flex flex-1 flex-col justify-center py-10 sm:py-14 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <Reveal>
            <div>
              <h2 className="h2 text-background">
                Specialist paintwork, from a single panel to a full respray.
              </h2>
              <p className="lead mt-6 max-w-sm text-chrome">
                Color matched, cleanly edged, and checked under proper light before it
                leaves the booth.
              </p>
              <AccentBar className="mt-8" />
            </div>
          </Reveal>
          <div className="mt-10 lg:mt-0">
            {site.capabilities.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className={i > 0 ? "mt-9 border-t border-steel-line pt-9" : ""}>
                  <h3 className="text-2xl font-semibold tracking-tight text-background sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-7 text-chrome">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process: silver panel, three-image sequence with captions below */}
      <section
        id="process"
        className="snap-section screen relative border-t border-border bg-silver"
      >
        <AccentBar className="absolute left-6 top-0 z-10 -translate-y-1/2 sm:left-10" />
        <div className="shell flex flex-1 flex-col justify-center py-10 sm:py-14">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="h2">{site.process.title}</h2>
              <p className="lead mt-5">{site.process.summary}</p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            {site.process.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 110}>
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
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery: bento mosaic */}
      <section id="gallery" className="snap-section screen relative border-t border-border">
        <AccentBar className="absolute left-6 top-0 z-10 -translate-y-1/2 sm:left-10" />
        <div className="shell flex flex-1 flex-col justify-center py-10 sm:py-14">
          <div className="flex items-end justify-between gap-6">
            <h2 className="h2">Selected work.</h2>
            <Link href="/work" className="btn btn-secondary shrink-0">
              View all
            </Link>
          </div>
          <Reveal dir="none" className="mt-8">
            <div className="grid grid-cols-2 gap-px border border-border bg-border md:h-[50svh] md:grid-cols-4 md:grid-rows-2">
              {site.gallery.map((item, i) => {
                const span = i === 0 || i === 3 ? "md:col-span-2" : "";
                return (
                  <div
                    key={item.src}
                    className={`zoom group relative aspect-[4/3] bg-background md:aspect-auto ${span}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      placeholder="blur"
                      blurDataURL={blur[item.src]}
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center gap-2 bg-foreground px-3 py-2 text-xs text-background transition-transform duration-300 ease-out group-hover:translate-y-0">
                      <Wheel className="h-3 w-3 text-background" />
                      <span className="font-semibold">{item.make}</span>
                      <span className="text-chrome">/</span>
                      <span className="text-chrome">{item.work}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience: Bellevue credibility */}
      <section
        id="experience"
        className="snap-section screen relative overflow-hidden border-t border-border"
      >
        <AccentBar className="absolute left-6 top-0 z-10 -translate-y-1/2 sm:left-10" />
        <RainierBackdrop />
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-6 py-12 sm:px-10 lg:order-1 lg:px-16">
            <h2 className="display">{site.experience.statement}</h2>
            <p className="lead measure mt-6">{site.experience.credibility}</p>
            <dl className="mt-10 grid grid-cols-1 gap-x-10 gap-y-3 border-t border-line-strong pt-6 sm:grid-cols-2">
              {site.experience.skills.map((skill) => (
                <div key={skill} className="group flex items-center gap-2.5 text-sm text-foreground">
                  <Wheel className="h-4 w-4" />
                  {skill}
                </div>
              ))}
            </dl>
          </div>
          <div className="zoom relative order-1 min-h-[40svh] border-b border-border lg:order-2 lg:min-h-0 lg:border-b-0 lg:border-l">
            <Image
              src={site.experience.image.src}
              alt={site.experience.image.alt}
              fill
              placeholder="blur"
              blurDataURL={blur[site.experience.image.src]}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact: inverse near-black finale with map */}
      <section
        id="contact"
        className="snap-section screen relative border-t border-border bg-foreground text-background"
      >
        <AccentBar className="absolute left-6 top-0 z-10 -translate-y-1/2 sm:left-10" />
        <div className="shell flex flex-1 flex-col justify-center py-10 sm:py-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal dir="none">
              <h2 className="display text-background">Start a conversation.</h2>
              <p className="lead mt-6 max-w-md text-chrome">{site.contact.copy}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={`mailto:${site.contact.email}`} className="btn btn-primary">
                  Email Jonathan
                </a>
                <Link href="/work" className="btn btn-on-dark">
                  See the work
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-12 gap-y-5 border-t border-steel-line pt-6">
                <div>
                  <p className="label !text-chrome">Location</p>
                  <p className="mt-1 text-base text-background">{site.contact.location}</p>
                </div>
                <div>
                  <p className="label !text-chrome">Service area</p>
                  <p className="mt-1 text-base text-background">Greater Seattle</p>
                </div>
                <div>
                  <p className="label !text-chrome">Experience</p>
                  <p className="mt-1 text-base text-background">{site.tenure}</p>
                </div>
              </div>
            </Reveal>

            <Reveal dir="none">
              <MapEmbed className="aspect-[4/3] w-full lg:aspect-[5/4]" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
