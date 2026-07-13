import type { Metadata } from "next";
import { designs } from "./designs";

export const metadata: Metadata = {
  title: "Icon lab",
  robots: { index: false, follow: false },
};

// Internal review gallery for the JCZ favicon candidates. Not linked in nav and
// noindex'd. Delete once an icon is chosen and promoted into app/icon.tsx.
export default function IconLabPage() {
  return (
    <section className="border-t border-border">
      <div className="shell py-16 sm:py-20">
        <h1 className="display">Icon lab</h1>
        <p className="lead measure mt-5">
          Four candidates for the JCZ browser + app icon, shown at real favicon sizes on
          light and dark. Pick a number and I&apos;ll promote it site-wide.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          {designs.map((d) => (
            <div key={d.id} className="bg-background p-8">
              <div className="flex items-baseline gap-3">
                <span className="index text-lg">{d.id}</span>
                <h2 className="text-xl font-semibold tracking-tight">{d.name}</h2>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">{d.note}</p>

              <div className="mt-6 flex flex-wrap items-end gap-8">
                {/* large on light */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/icon-lab/${d.id}`} alt={d.name} width={96} height={96} />

                {/* real favicon sizes on a dark chip (tab-like) */}
                <div className="flex items-end gap-4 rounded-md bg-[#111418] px-5 py-4">
                  {[16, 32, 48].map((s) => (
                    <div key={s} className="flex flex-col items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/icon-lab/${d.id}`} alt="" width={s} height={s} />
                      <span className="text-[10px] text-chrome">{s}px</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
