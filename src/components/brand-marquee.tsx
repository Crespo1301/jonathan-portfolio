import { site } from "@/data/site";

// Slow, continuous wordmark carousel of the marques Jonathan refinishes plus his
// signature paint system. Wordmarks are trademark-safe; swap to <img> from
// public/logos if real logos are authorized. Duplicated once for a seamless loop.
export function BrandMarquee() {
  const loop = [...site.brands, ...site.brands];

  return (
    <section aria-label="Marques and materials in the booth" className="border-y border-border bg-surface">
      <div className="shell flex items-center gap-8 py-6">
        <span className="label hidden shrink-0 sm:block">In the booth</span>
        <div className="brand-marquee">
          <div className="brand-track">
            {loop.map((brand, i) => (
              <span key={i} className="flex items-center gap-8" aria-hidden={i >= site.brands.length}>
                {brand.file ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={brand.file} alt={brand.name} className="brand-logo" />
                ) : (
                  <span className="brand-word">{brand.name}</span>
                )}
                <span className="brand-dot" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
