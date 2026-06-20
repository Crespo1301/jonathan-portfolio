import Link from "next/link";
import { AccentBar } from "@/components/accent-bar";
import { site } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-steel text-background">
      <AccentBar className="absolute left-6 top-0 z-10 -translate-y-1/2 sm:left-10" />
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand + pitch */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-background">
              Jonathan Crespo
            </p>
            <p className="mt-5 max-w-sm text-2xl font-semibold leading-tight tracking-tight text-background">
              European and exotic automotive paint, finished to standard.
            </p>
            <a
              href={`mailto:${site.contact.email}`}
              className="btn btn-primary mt-7"
            >
              Email Jonathan
            </a>
          </div>

          {/* Navigate */}
          <div>
            <p className="label !text-chrome">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {site.nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-background underline-offset-4 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <p className="label !text-chrome">Studio</p>
            <p className="mt-4 text-base text-background">{site.location}</p>
            <p className="mt-1 font-mono text-xs tracking-tight text-chrome">
              47.6101&deg; N, 122.2015&deg; W
            </p>
            <p className="mt-4 text-sm text-chrome">{site.contact.note}</p>
          </div>
        </div>

        {/* Oversized tonal wordmark */}
        <div className="mt-16 border-t border-steel-line pt-8">
          <p
            className="select-none font-semibold leading-[0.8] tracking-tight text-steel-line"
            style={{ fontSize: "clamp(3.5rem, 16vw, 13rem)" }}
            aria-hidden="true"
          >
            CRESPO
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-2 text-xs text-chrome sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Jonathan Crespo. All rights reserved.</p>
          <p>Automotive paint specialist, Bellevue WA.</p>
          <p>Built and maintained by CSolutions.</p>
        </div>
      </div>
    </footer>
  );
}
