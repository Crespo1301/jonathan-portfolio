# Design Direction

Jonathan Crespo is an automotive paint specialist in Bellevue, WA, focused on
European vehicles (10+ years). The site should feel expensive, controlled,
refined, and highly specialized, the confidence of someone who works on serious
cars, with restraint rather than hype.

## Palette (locked)

Solid colors only. Black, white, and metallic/chrome greys, plus a single
controlled azure accent used sparingly (restrained strategy, well under 10%
coverage).

| Token            | Value     | Use                          |
| ---------------- | --------- | ---------------------------- |
| `background`     | `#F4F5F6` | gallery-white canvas         |
| `surface`        | `#FFFFFF` | panels                       |
| `surface-strong` | `#ECEDEF` | media slots                  |
| `silver`         | `#E4E6EA` | light brushed-metal section surface |
| `foreground`     | `#0B0B0C` | text, primary buttons, inverse band |
| `steel`          | `#25272B` | dark brushed-graphite section surface |
| `steel-line`     | `#3A3D44` | hairline on steel            |
| `muted`          | `#6B7078` | secondary text               |
| `border`         | `#DCDEE2` | hairline borders / grid lines |
| `line-strong`    | `#C4C7CD` | secondary-button border, stronger hairlines |
| `chrome`         | `#9AA0A8` | thin metal accents, wheel marks |
| `accent`         | `#2353A4` | single azure accent: primary CTAs, active nav underline, focus rings, marquee separator, accent bars |
| `accent-strong`  | `#1B4083` | accent hover                 |

### Accent + structural mark

One accent only: a deep **azure** sampled from Jonathan's satin-blue Revuelto,
the dominant color across his work (chosen by sampling the images, not a brand
copy). The structural device is a **single solid accent bar** (`AccentBar`
component, horizontal or vertical) used as the header mark, hero signature,
section-divider bookmarks, and image edge ribbons. (An earlier stacked tricolor
"M-stripe" was removed; the staircase read poorly.)

### Premium direction (updated 2026-06-22)

The client asked for a richer, more premium feel: less flat gray, real color, and
depth. This supersedes the earlier monochrome-restraint rules:

- **Second accent: bronze-gold** (`--gold #b9863c`), sampled from the Revuelto's
  wheels. Pairs warm/cool with the azure. Used on index numbers, the `Wheel`
  marks, and social hovers. Azure stays the primary action color.
- **Depth and 3D via solid shadows only:** soft shadows (`--shadow-card`,
  `--shadow-lift`) and hover lift (`.lift`). Buttons get a flat drop shadow.
  Use tastefully, not everywhere.
- **No gradients anywhere** (client rule). No glossy button sheens, no glow
  backgrounds. Depth comes from solid shadows and the gold/azure accents only.

### Car easter eggs

A `Wheel` SVG mark (now gold) replaces plain bullets in skills lists and gallery
captions and spins on hover. A faint **downtown Bellevue skyline** silhouette
(`SkylineBackdrop`, with a faint Rainier dome behind) sits in white sections with
a CSS scroll-driven parallax drift.

The metallics are used as real section surfaces (not just lines): a value rhythm
of white, silver, steel, and near-black down the page.

## System

- Sharp 0-radius corners everywhere (precision over softness).
- Hairline borders and `gap-px` grid lines instead of cards-with-shadows.
- Flat panels, no shadows, no glass, no translucency.
- Rectangular, uppercase, letter-spaced buttons. Solid black primary; outlined
  secondary that inverts to black on hover.
- Home: six full-screen (`100svh`) scroll-snap sections, each a distinct layout
  family (no repeated skeleton). Desktop scroll-spy rail is ticks-only (no
  decorative section numbers, per taste-skill). Snap is desktop-only and off
  under reduced motion.
- Motion: dependency-free IntersectionObserver reveals (directional + stagger),
  image hover zoom, CSS marquee. All `prefers-reduced-motion` safe. No JS scroll
  listeners.
- Images: `next/image` with `placeholder="blur"` (placeholders in
  `src/data/blur.ts`). Maps: grayscale-filtered Google embed via `MapEmbed`.
- Type: tight, slightly negative tracking on headings; `.display` / `.display-xl`
  for oversized hero/finale moments; generous line-height and `~58ch` body measure.

## Hard Rules (do not break)

- No floating orbs or pills/chips. Subtle gradients, shadows, and depth are now
  allowed (see Premium direction) but keep them controlled and purposeful.
- No eyebrow/category labels stacked above section titles. (Uppercase is allowed
  only for functional UI: nav, field labels, buttons, footer meta, index numbers.)
- No trendy SaaS / soft-startup styling.
- Copy: no dual-tone hero text; avoid "not x but y", "no x. no y. no z.", and
  "x, and that's y" constructions. Write plain, confident, declarative lines.
- **Never use em dashes (the long U+2014 dash) anywhere** (copy, comments, or
  docs). Use a period, comma, or rewrite. (See `docs/MASTER_RULES.md`.)

## Content

All copy flows from `src/data/site.ts` and uses confirmed facts only. Do not
invent metrics, client names, shop names, or specific vehicles. See HANDOFF.md
for what is still pending from Jonathan.
