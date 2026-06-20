import Image from "next/image";
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

function Tile({ item, delay }: { item: Item; delay: number }) {
  return (
    <Reveal delay={delay} dir="none" className="group">
      <div className="zoom frame relative aspect-[4/3]">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          placeholder="blur"
          blurDataURL={blur[item.src]}
          sizes="(min-width: 768px) 33vw, 50vw"
          className="object-cover"
        />
      </div>
      <Caption make={item.make} work={item.work} />
    </Reveal>
  );
}

export default function WorkPage() {
  const [lead, ...rest] = site.workGallery;
  const groups = GROUP_ORDER.map((name) => ({
    name,
    items: rest.filter((item) => groupOf(item.make) === name),
  })).filter((g) => g.items.length > 0);

  return (
    <SectionShell
      index="01"
      title="Selected work."
      copy="European cars and exotics are the focus, and the work goes further. Full resprays, panel repair, custom finishes, and fine detail across more than forty jobs."
    >
      {/* Full-width lead with caption */}
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

      {/* Grouped gallery */}
      {groups.map((group) => (
        <section key={group.name} className="mt-16">
          <div className="flex items-center gap-3 border-b border-line-strong pb-4">
            <Wheel className="h-4 w-4 text-foreground" />
            <h2 className="h3">{group.name}</h2>
            <span className="text-xs text-chrome">{group.items.length}</span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
            {group.items.map((item, i) => (
              <Tile key={item.src} item={item} delay={(i % 3) * 60} />
            ))}
          </div>
        </section>
      ))}
    </SectionShell>
  );
}
