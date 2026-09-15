# Handoff

## Current State

The site is Jonathan's brand as an **automotive paint specialist in Bellevue, WA,
specializing in European cars and exotics (10+ years)**. It is a cinematic,
photography-led portfolio, not an intake shell.

- **Design language:** light gallery-white base with solid metallic surfaces
  (silver `#E4E6EA`, steel/graphite `#25272B`) and near-black. Sharp 0-radius
  corners, hairline borders, flat panels. No gradients, glass, translucency,
  orbs, pills/chips, or eyebrow labels.
- **Home:** seven full-screen (`100svh`) scroll-snap sections, each a distinct
  layout family so no two repeat: split hero (oversized type), kinetic marquee,
  featured build, steel capabilities panel, three-step Porsche respray sequence,
  bento gallery, Bellevue/experience credibility split, inverse contact finale
  with a map.
- **Accent:** one color only, a deep **azure `#2353A4`** sampled from Jonathan's
  satin-blue Revuelto (the dominant color across his images). Drives CTAs, active
  nav, focus, marquee separator. The structural device is a single **accent bar**
  (`AccentBar`, horizontal/vertical) used as header mark, hero signature,
  section-divider bookmarks, and image ribbons. The earlier stacked tricolor was
  removed (read as a staircase).
- **Layout fit:** sections are sized `calc(100svh - var(--header-h))` so each
  panel fits any viewport (not hardcoded). Header is a compact, consistent
  single-row height (`--header-h`, responsive brand: "Crespo" on mobile).
- **Footer:** redesigned as a dark brushed-steel panel with a tonal oversized
  "CRESPO" wordmark, navigation, studio + Bellevue coordinates, and an accent CTA.
- **Car easter eggs:** a `Wheel` SVG mark replaces plain bullets in skills lists
  and gallery captions, and spins on hover; gallery tiles carry car info (make +
  work) and the `/work` gallery is grouped (Lamborghini, Porsche 911, In the
  booth, Wheels & details, Beyond European). A faint **Mount Rainier** silhouette
  (`RainierBackdrop`, redrawn from the NW-side profile) sits in white sections
  with a CSS scroll-driven parallax drift, plus a Bellevue coordinate detail.
- **No side rail:** the home scroll-rail was removed; scroll-snap is kept via a
  headless `SnapMode` enabler.
- **Placeholders:** a `Placeholder` component marks content-pending slots with
  ideal dimensions (e.g. the About headshot, 1200x1500) for Jonathan to supply.
- Buttons hardened: `.btn-on-dark` variant for dark sections, higher-contrast
  footer links, no white-on-white states.
- **Scroll-spy rail** (right side, desktop) tracks the active section; snap is
  desktop-only and disabled under `prefers-reduced-motion`.
- **Motion:** IntersectionObserver reveals (directional + staggered), image
  hover zoom, CSS marquee. All `prefers-reduced-motion` safe. No JS scroll
  listeners, no added animation dependencies.
- **Imagery:** 45 WebP in `public/images/` (~8.4 MB) from the 46-file source set
  (only one unclear frame skipped; the pickup truck is now included to show range
  beyond European cars), served via `next/image` with `placeholder="blur"`
  (base64 placeholders in `src/data/blur.ts`). The `/work` gallery showcases 44.
- **Maps:** grayscale-filtered Google Maps embed (no API key) of Bellevue on the
  contact page, About page, and home contact finale (`MapEmbed` component).
- **Routes:** `/`, `/work` (full gallery), `/about`, `/resume` (labelled
  "Experience"), `/contact`, `/privacy`, and noindex `/thank-you`. Most public
  content flows from `src/data/site.ts`.
- **Contact delivery:** `/api/contact` is a same-origin Next route backed by
  Resend. It accepts JSON or URL-encoded browser submissions, enforces the
  received-body limit, filters a honeypot, rate-limits per IP on a
  best-effort in-memory bucket, and only redirects to `/thank-you` after Resend
  accepts the message. Browser CSP stays `connect-src 'self'`; Resend is called
  server-side only. Required Vercel Production env vars: `RESEND_API_KEY`,
  `CONTACT_TO` (`jczdripp@gmail.com` expected), and `CONTACT_FROM` (`Jonathan
  Crespo <jczdripp-inquiries@carloscrespo.info>` expected, on a Resend-verified
  domain).
- **Security headers** in `next.config.ts`: CSP (permits the maps embed only),
  `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`,
  `Permissions-Policy`, HSTS. CSP drops `unsafe-eval` in production.
- `npm run lint` clean, `npm run build` green (8/8 static). Dev runs on `:3003`.

## Image Source Pipeline

Source HEIC/PNG ("JC's work", 46 files) live only in the Downloads zip, NOT in
the repo. This libheif build lacks the HEVC decoder, so conversion used
`pillow-heif` in a venv. To regenerate or add images, re-run conversion from the
zip and re-run the blur generator to refresh `src/data/blur.ts`.

## Optional Follow-Up From Jonathan

Brief confirmed 2026-06-24 (his story, services, Glasurit 100 Line, timeline are
now live in `site.ts`). Still open:

1. **Form backend env.** Confirm Vercel Production has `RESEND_API_KEY`,
   `CONTACT_TO`, and `CONTACT_FROM`. Direct email links still resolve to
   `jczdripp@gmail.com`, but opening a mail client should never be described as
   a delivered message.
2. **Socials.** Only TikTok (`@jczdrip`) is confirmed and live. Add Instagram /
   YouTube to `site.socials` when he sends handles; the component renders the list.
3. **Photos.** Hi-res work photos beyond the two he sent (`jonathan-portrait`,
   `jonathan-painting`). Current photography caps hero quality.
4. **Brand logos.** `BrandMarquee` uses real logo SVGs for Lamborghini + Porsche
   (`public/logos`, from Simple Icons) and text wordmarks for Glasurit 100 Line +
   BASF (no clean SVGs sourced). Add BASF/Glasurit SVGs to `public/logos` and give
   them a `file` in `site.ts` `brands` if desired. Confirm logo use is authorized.
5. **Confirm claims.** "Million-dollar cars", "first in the PNW on Glasurit 100
   Line", and "OEM standard or better" are his own words; keep as-is unless he
   revises. Do not name the shop until he says it is public.
6. **Map precision.** Embed centered on "Bellevue, WA"; swap to a pin once the
   shop address is public.

## Weak Spots To Review

- `wheel-detail` / `wheel-2` / `caliper` came from phone screenshots (lower res);
  fine at tile size, swap if higher-res originals exist.
- No mobile hamburger; nav is a compact horizontal row (fine for 5 links).
- Third-party Google Maps iframe is the only external resource; CSP scopes it.

## Launch

Domain `jczdripp.com` is registered (Porkbun, 2026-07). Carlos confirmed on
2026-08-04 that both `https://jczdripp.com` and `https://www.jczdripp.com` work
and are interchangeable. The code targets the apex: `SITE_URL` is
`https://jczdripp.com` in `layout.tsx`, `sitemap.ts`, and `robots.ts`, so
metadata, canonicals, OG, sitemap, and JSON-LD are aligned with the custom
domain.

Resolved launch item:

1. Custom domain connection for `jczdripp.com` / `www.jczdripp.com`.

Remaining launch QA is verification-only: periodically recheck both hostnames and
check a shared link preview after DNS/cache propagation.

Icon: chrome JCZ roundel (`src/lib/icon-mark.tsx`), confirmed by Jonathan
2026-07. The `/icon-lab` candidate gallery has been removed.

## Closeout Checklist (per AGENTS.md)

- [x] CHANGELOG.md updated
- [x] HANDOFF.md updated
- [x] docs/claude-track-record.md updated
