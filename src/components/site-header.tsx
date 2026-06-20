"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AccentBar } from "@/components/accent-bar";
import { site } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-background">
      <div className="chrome-rule" />
      <div className="border-b border-border">
        <div className="shell flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <AccentBar />
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
              <span className="sm:hidden">Crespo</span>
              <span className="hidden sm:inline">Jonathan Crespo</span>
            </span>
          </Link>
          <nav className="flex items-center gap-x-3.5 text-[0.75rem] sm:gap-x-5 sm:text-[0.8rem]">
            {site.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active}
                  className="nav-link whitespace-nowrap"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
