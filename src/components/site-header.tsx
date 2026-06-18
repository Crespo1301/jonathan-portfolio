import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background">
      <div className="shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="min-w-0">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Jonathan Crespo
          </div>
          <div className="mt-1 text-sm text-muted">Portfolio starter by CSolutions</div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
