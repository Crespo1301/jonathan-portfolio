import Link from "next/link";
import { AccentBar } from "@/components/accent-bar";
import { site } from "@/data/site";

// Rolls-Royce-style three-up teaser strip: a near-black band of linked teasers
// with a sliding arrow on hover. Solid surfaces only; sharp corners; hairline
// separators via gap-px (consistent with the locked system).
export function DiscoverStrip() {
  return (
    <section
      id="discover"
      className="glow-steel relative border-t border-border text-background"
    >
      <AccentBar className="absolute left-6 top-0 z-10 -translate-y-1/2 sm:left-10" />
      <div className="shell py-14 sm:py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="h2 text-background">Keep looking.</h2>
          <span className="label !text-chrome hidden sm:block">Explore</span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px border border-steel-line bg-steel-line md:grid-cols-3">
          {site.discover.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="discover-cell group flex flex-col gap-5 bg-steel p-7 sm:p-9"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-background">
                {item.title}
              </span>
              <p className="max-w-xs text-base leading-7 text-chrome">{item.copy}</p>
              <span className="mt-auto flex items-center gap-2 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-background">
                Discover
                <svg
                  className="discover-arrow h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="square" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
