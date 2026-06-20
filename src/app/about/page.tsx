import Image from "next/image";
import { SectionShell } from "@/components/section-shell";
import { Reveal } from "@/components/reveal";
import { MapEmbed } from "@/components/map-embed";
import { Placeholder } from "@/components/placeholder";
import { site } from "@/data/site";
import { blur } from "@/data/blur";

export default function AboutPage() {
  return (
    <>
      <SectionShell index="01" title={site.about.title}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <Reveal dir="left">
            <Placeholder
              label="Headshot of Jonathan"
              dims="Portrait, 1200 x 1500"
              className="aspect-[4/5]"
            />
          </Reveal>

          <div>
            <div className="space-y-6">
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-5 border-t border-line-strong pt-6">
              <div>
                <dt className="label">Based in</dt>
                <dd className="mt-1 text-base text-foreground">{site.location}</dd>
              </div>
              <div>
                <dt className="label">Specialty</dt>
                <dd className="mt-1 text-base text-foreground">{site.focus}</dd>
              </div>
              <div>
                <dt className="label">Experience</dt>
                <dd className="mt-1 text-base text-foreground">{site.tenure}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Real work, in his hands */}
        <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
          {site.about.images.map((img) => (
            <div key={img.src} className="zoom relative aspect-[4/3] bg-background">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                placeholder="blur"
                blurDataURL={blur[img.src]}
                sizes="(min-width: 1024px) 360px, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Where Jonathan works */}
      <section className="border-t border-border">
        <div className="shell py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <h2 className="h2">Based in Bellevue.</h2>
              <p className="lead mt-5 max-w-md">
                Working out of Bellevue and serving the greater Seattle area.
              </p>
            </div>
            <MapEmbed className="aspect-[16/9] w-full" zoom={11} />
          </div>
        </div>
      </section>
    </>
  );
}
