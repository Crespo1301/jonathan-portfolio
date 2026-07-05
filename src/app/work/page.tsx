import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { Reveal } from "@/components/reveal";
import { AccentBar } from "@/components/accent-bar";
import { Wheel } from "@/components/wheel";
import { site } from "@/data/site";
import { blur } from "@/data/blur";

type Item = (typeof site.workGallery)[number];

function groupOf(make: string): string {
  if (make.startsWith("Lamborghini")) return "Lamborghini";
  if (make.startsWith("Porsche")) return "Porsche 911";
  if (make === "Pickup truck") return "Beyond European";
  if (make.includes("Wheel") || make.includes("caliper")) return "Wheels & details";
  return "In the booth";
}

const GROUP_ORDER = [
  "Lamborghini",
  "Porsche 911",
  "In the booth",
  "Wheels & details",
  "Beyond European",
];

function Caption({ make, work }: { make: string; work: string }) {
  return (
    <div className="mt-3 flex items-center gap-2 text-xs">
      <Wheel className="h-3.5 w-3.5" />
      <span className="font-semibold text-foreground">{make}</span>
      <span className="text-chrome">/</span>
      <span className="text-muted">{work}</span>
    </div>
  );
}

function Tile({ item, delay, feature }: { item: Item; delay: number; feature?: boolean }) {
  return (
    <Reveal delay={delay} dir="none" className={`group ${feature ? "col-span-2" : ""}`}>
      <div className={`zoom frame relative ${feature ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          placeholder="blur"
          blurDataURL={blur[item.src]}
          sizes={feature ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
          className="object-cover"
        />
      </div>
      <Caption make={item.make} work={item.work} />
    </Reveal>
  );
}

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected refinishing work by Jonathan Crespo: collision repair to full restoration on exotic and high-end cars, custom color, correction, and detail, finished in Glasurit 100 Line.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const [lead, ...rest] = site.workGallery;
  const groups = GROUP_ORDER.map((name) => ({
    name,
    items: rest.filter((item) => groupOf(item.make) === name),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      {/* Intro + full-width lead */}
      <SectionShell
        index="01"
        title="Selected work."
        copy="From everyday collision repair to full restoration, on high-end and exotic cars. Resprays, custom color, correction, and fine detail across more than forty jobs, finished in Glasurit 100 Line."
      >
        <Reveal dir="none" className="group">
          <div className="zoom frame relative aspect-[16/9] sm:aspect-[21/9]">
            <AccentBar orientation="vertical" className="absolute left-0 top-8 z-10" />
            <Image
              src={lead.src}
              alt={lead.alt}
              fill
              priority
              placeholder="blur"
              blurDataURL={blur[lead.src]}
              sizes="(min-width: 1200px) 1136px, 100vw"
              className="object-cover"
            />
          </div>
          <Caption make={lead.make} work={lead.work} />
        </Reveal>
      </SectionShell>

      {/* Grouped gallery, alternating bands + varied grids */}
      {groups.map((group, gi) => {
        const silver = gi % 2 === 1;
        const cols = gi % 2 === 0 ? "md:grid-cols-3" : "md:grid-cols-4";
        return (
          <section
            key={group.name}
            className={`border-t border-border ${silver ? "bg-silver" : ""}`}
          >
            <div className="shell py-14 sm:py-20">
              <div className="flex items-end justify-between gap-4 border-b border-line-strong pb-5">
                <div className="flex items-baseline gap-4">
                  <span className="index text-base">{String(gi + 2).padStart(2, "0")}</span>
                  <h2 className="h2">{group.name}</h2>
                </div>
                <span className="label whitespace-nowrap">
                  {group.items.length} {group.items.length === 1 ? "piece" : "pieces"}
                </span>
              </div>
              <div className={`mt-8 grid grid-cols-2 gap-5 ${cols}`}>
                {group.items.map((item, i) => (
                  <Tile key={item.src} item={item} delay={(i % 4) * 60} feature={i === 0} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="glow-black relative border-t border-border text-background">
        <AccentBar className="absolute left-6 top-0 z-10 -translate-y-1/2 sm:left-10" />
        <div className="shell py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="display text-background">Bring yours in.</h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Get in touch
              </Link>
              <Link href="/about" className="btn btn-on-dark">
                About Jonathan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
