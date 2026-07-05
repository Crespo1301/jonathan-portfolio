# Claude Track Record

## 2026-06-24 , Mobile pass + accessibility + SEO

- **SEO/AEO:** Person JSON-LD (personal brand, not local business), full metadata
  (title template, keywords, canonical, OG profile + Twitter), per-page metadata,
  dynamic `next/og` share image, `sitemap.ts`, `robots.ts`. Form now posts to
  `NEXT_PUBLIC_FORM_ENDPOINT` (Formspree/Web3Forms) with mailto fallback.
- **Navbar:** removed the azure accent bar next to the wordmark; tightened the
  nav for small screens and hid the redundant "Home" item on mobile (logo links
  home).
- **Mobile:** `overflow-x: hidden` guard; smaller `.display` floor (2.35rem) so
  hero/finale headings fit small phones; calmer `.stat-numeral` on mobile.
- **Accessibility:** index numbers moved off low-contrast gold to an accessible
  slate (gold stays decorative on the aria-hidden wheel marks + brand dots);
  dark-section index set to chrome; added a skip-to-content link and `id="main"`.
  Wheel already aria-hidden; MapEmbed already titled.

Note: Lighthouse could not be run in-tool; this is a code-level a11y/perf pass.
Run Lighthouse / PageSpeed on the deployed URL to confirm scores.

**Verification:** lint clean, build green (11 static routes), zero em dashes.

## 2026-06-24 , Jonathan's real brief threaded through the site

His intake answers arrived, which corrected the positioning: he is a high-end
refinisher spanning collision repair to full restoration (not narrowly
European/exotic), works on million-dollar cars, holds work to an OEM standard or
better, runs a shop and prep team, and is the first painter in the PNW on
Glasurit 100 Line. Rewrote all copy in `site.ts` around his own words (identity,
hero, capabilities, process, about bio, experience) and reconciled tenure to 14
years in the trade / painting since 2016 (home numeral now "14").

- **New content:** a career `timeline` and a `knownFor` list; the `/resume` page
  rebuilt to surface both plus a Glasurit 100 Line materials panel (replacing the
  generic WESCO framing, since Glasurit is his stated specialty).
- **Brand carousel:** new `BrandMarquee`, a slow trademark-safe wordmark strip
  (Lamborghini, Porsche, Glasurit 100 Line, BASF) on the home page. Real logos
  can be dropped into `public/logos` later if authorized. (magic MCP had no logos
  for these marques; hotlinking trademarked logos is a risk anyway.)
- **Metadata + work copy** updated to the new positioning.
- Contact email/phone/socials remain placeholders (still pending from Jonathan).

**Verification:** lint clean, build green (6 routes), zero em dashes.

## 2026-06-22 , Premium-color direction + outreach + content passes

Large client-driven round (Carlos, live on the Vercel preview):

- **New design direction: less gray, more premium.** Added a bronze-gold second
  accent (sampled from the Revuelto wheels), depth tokens + `.lift` hover,
  glossy gradient primary buttons, and an azure radial glow on dark sections
  (`.glow-steel`/`.glow-black`, applied to capabilities, contact, discover,
  footer, resume panels). Gold now colors the index numbers and `Wheel` marks.
  Updated `DESIGN.md` to supersede the old no-gradient/no-shadow rules.
- **Hero:** worked through image quality. `white-profile` was 983x562 (too soft
  full-bleed). His only high-res, premium photography is the blue Revuelto, so
  per his OK the hero is now the satin-blue Revuelto *detail* macro, and the
  featured section was switched to the red Porsche 911 so the next section is a
  different car. Experience image moved to the teal Huracan for spread.
- **Resume (/resume):** rebuilt from 5 identical SectionShells into distinct
  layout families on alternating surfaces (white/silver/steel/black), with a
  WESCO-informed "Materials & systems" panel.
- **Work (/work):** kept the car grouping but gave each group its own band with
  alternating surfaces, gold index, a featured first tile, and alternating
  column counts, so it stops feeling like one repeated grid.
- **Outreach:** new `ContactForm` (mailto, no backend yet), `QuickActions`
  (call/text/email via tel/sms/mailto), and `Socials` (placeholder links, easy
  to replace). Wired into /contact (rebuilt), the home contact section, and the
  footer. Added `phone` + `socials` placeholders to `site.ts`.
- **Maps now colored** (removed the grayscale filter). **Skyline** opacity
  lowered so text reads over it. **Home experience** section slimmed + heading
  downsized so each snap section fits one viewport.
- **Writing rule:** removed all em dashes site-wide and banned them in
  `MASTER_RULES.md` + `DESIGN.md`.

**Still pending from Jonathan:** real email/phone, social handles, hi-res photos
+ a headshot, and confirmation of the WESCO/brand specifics. **Verification:**
lint clean, build green (6 routes), zero em dashes.

## 2026-06-22, Feedback round: header, marquee, skyline, footer, focus

Same-day client feedback:

- **Header.** Tried a single-button overlay "MENU" navbar; client rejected it.
  Reverted to a refined visible inline nav (wordmark left, links right, active
  underline). Header z-index back to 30.
- **Side scroller removed.** Deleted the kinetic marquee strip under the hero
  (component, usage, and CSS), it read as too busy.
- **Bellevue skyline backdrop.** Replaced the Mount Rainier silhouette with a
  downtown Bellevue skyline (`SkylineBackdrop`): varied towers + tall center
  spire, low treeline, and a faint Rainier dome behind for the PNW nod. Kept the
  scroll-driven parallax (`.skyline-parallax`, reduced-motion safe). Used in the
  hero and experience sections.
- **Footer.** Removed the oversized tonal "CRESPO" wordmark (client disliked it);
  tightened the closeout bar.
- **De-emphasize the blue Lambo.** Client wants the focus on Jonathan, not one
  car. Swapped the experience image off the satin-blue Revuelto to the classic
  red Porsche 911 (range contrast). Blue hero kept per his choice.
- **Experience expanded.** Felt short, added a spec strip (experience / focus /
  based-in) and a labeled "Capabilities" group above the skills, layered over the
  oversized "10". All from confirmed facts only.
- **Intake email drafted** at `docs/outreach/jonathan-intake-email.md`, numbered
  questions to gather his story, work, photos, real contact info, and the
  direction he wants; includes the Vercel preview link for review.

- **Hero rebuilt → full-bleed cinematic** (client's pick). The blue Revuelto now
  fills the viewport edge-to-edge with a solid near-black signature bar anchored
  at the bottom: AccentBar + "Jonathan Crespo" + role/location, the headline, a
  short supporting line, and the two CTAs (`btn-on-dark` for the secondary).
  No scrim/gradient, solid bar per the locked rules. Skyline dropped from the
  hero (a full-bleed image hides it); it stays in the experience section.

**Verification:** lint clean, build green (8/8), no stale refs.

## 2026-06-22, Luxury-brand cues (Rolls-Royce + West Coast Customs)

Carlos brought reference screenshots of the Rolls-Royce and West Coast Customs
sites and asked to replicate high-end elements in our style. Since Jonathan is a
European/exotic paint specialist, the auto-luxury references are on-niche, not
borrowed glamour. Translated three signatures *through* the locked system (no
gradients/glass/translucency, single azure accent, sharp corners, reduced-motion
safe) rather than copying them:

- **`Unveil` cinematic "sheet-pull" reveal** (Rolls-Royce car-under-fabric): a
  solid `steel` panel slides off an image as it scrolls into view. JS-driven via
  `data-shown`, gated to `prefers-reduced-motion: no-preference` so non-JS /
  reduced-motion users always see the image. Applied to the featured lead and
  the experience image (not the LCP hero, to protect load). New
  `src/components/unveil.tsx` + `.unveil`/`.unveil-cover` CSS.
- **`DiscoverStrip` three-up teaser finale** (Rolls-Royce bottom nav strip):
  near-black `steel` band with three linked teasers (Work / Craft / Shop), each
  with a sliding arrow on hover. Recolored to graphite so the page darkens
  white → graphite → black into the contact finale. New
  `src/components/discover-strip.tsx` + `discover` data in `site.ts`.
- **Oversized "10" statement** (West Coast Customs "32 YEARS"): a giant tonal
  silver numeral behind the Experience copy, Jonathan's confirmed decade at WCC
  scale, kept monochrome and as a watermark so the heading stays full-contrast.
  `.stat-numeral` CSS.

No copy invented; all teaser/statement text uses confirmed facts. Palette and
hard rules untouched.

**Verification:** `npm run lint` clean, `npm run build` green (8/8 static), home
route 200 with all three elements present in served HTML. Push/versioning left to
Codex per the role split.

## 2026-06-18, First real design pass (European auto-paint brand)

**Trigger:** Jonathan's real direction landed. He is an automotive paint
specialist in Bellevue, Washington, with 10+ years refinishing European
vehicles. Brief called for a slick, restrained, premium feel in the spirit of
European performance branding, without copying any one marque.

**Direction locked with the user:**

- Light gallery-white base.
- Monochrome palette: solid black, white, and metallic/chrome greys. No
  chromatic accent, no tricolor, no literal brand references.
- Hard visual rules: solid colors only; no gradients, glass, translucency,
  floating orbs, pills/chips, eyebrow labels above sections, or SaaS polish.
- Copy rules: no dual-tone hero text; avoid "not x but y", "no x. no y. no z.",
  and "x, and that's y" constructions.

**What changed:**

- `globals.css` rebuilt as a light monochrome+chrome system: sharp (0-radius)
  corners, hairline borders, flat panels (no shadows), rectangular uppercase
  buttons, precision type scale, chrome hairline rule.
- `src/data/site.ts` rewritten around confirmed facts only. Structure:
  identity, hero, capabilities, approach, work, about, experience, contact.
- Header: wordmark + role, chrome top rule, active-state nav (client component).
- Footer: real location, nav, CSolutions credit, dynamic year.
- `SectionShell`: dropped eyebrow; spec-sheet layout with structural index
  numbers (01/02/03), not category kickers.
- All five pages redesigned. Routes unchanged; `/resume` is now labelled
  "Experience" to fit a craftsman, not an office resume.
- Closing CTA band uses a solid near-black inverse section (no gradient).

**Verification:** `npm run lint` clean, `npm run build` green (8/8 static).

**Still pending from Jonathan before public launch (see HANDOFF.md):**

- Confirmation/adjustment of the capability list and work-image captions.
- Real contact email (placeholder `hello@example.com` in `site.ts`).
- Fuller personal voice for About, and any timeline/certifications for Experience.

## 2026-06-18, Imagery pass (same day)

Jonathan's real "JC's work" photo set landed. The cars are exotics and European
marques, Lamborghini Revuelto (satin blue + white), classic air-cooled Porsche
911 mid-respray, custom satin finishes, wheel/caliper detail, booth process
shots. This raised the bar: the brand is a genuine high-end European/exotic
paint specialist, and copy was updated from "European vehicles" to "European
cars and exotics."

**What changed:** converted the source HEIC/PNG (libheif lacked HEVC, so used
`pillow-heif` in a venv) to optimized WebP in `public/images/` (~2.8 MB). Wired
real images through `next/image`: photo-led home hero, a six-tile work grid, an
About booth shot (no headshot existed in the set), and a process image in the
approach block. Added restrained motion, hover zoom on image tiles and a
`prefers-reduced-motion`-safe scroll reveal, consistent with the brand's
precision/restraint. Originals and the full 46-image set were not committed.

**Inspiration referenced:** BMW M / Porsche / Ferrari / Tesla configurator comps
(car-photo-led heroes, big confident type, spec strips with index numbers,
metallic/grey cars on clean backgrounds), already matched by the existing
structure, so imagery slotted in cleanly.

**Verification:** lint clean, build green (8/8), dev server returns 200 on all
five routes, every image and the `next/image` optimizer resolve.

## 2026-06-18, Editorial redesign (de-template) + full-screen experience

Client feedback across the session: the site felt sparse, then "like a barebones
template," and the metallic palette was underused. Reworked into a cinematic,
photography-led experience. Consulted `impeccable` (context loader + design laws)
and `taste-skill` (anti-template); both confirmed the template tells, several of
which were self-inflicted (decorative section-number eyebrows, `border` on every
list row, repeated hairline-box grids).

**Changes:**

- Expanded the image set to 23 curated WebP (featured-build angles, Porsche
  respray sequence, white Revuelto, teal Huracan, detail shots).
- Home rebuilt as six full-screen (`100svh`) scroll-snap sections, each a
  distinct layout family: oversized split hero, kinetic CSS marquee, image-led
  featured build, steel/graphite capabilities panel (editorial list, not a card
  grid), three-step Porsche respray sequence (captioned image row), bento
  gallery, inverse near-black contact finale with a map.
- Removed the decorative index-number eyebrows (per taste-skill); section rail is
  now ticks-only scroll-spy. Reduced hairline-box repetition.
- Brought the metallic palette in as real surfaces: silver and steel section
  backgrounds, silver footer, for a brushed-metal value rhythm.
- Added `placeholder="blur"` skeletal loading (`src/data/blur.ts`), grayscale
  Google Maps embeds (contact/about/home), and security headers in
  `next.config.ts` (CSP scoped to the maps embed, HSTS, nosniff, etc.).
- Motion stays dependency-free (IntersectionObserver + CSS), reduced-motion safe.

**Verification:** lint clean, build green (8/8 static), all routes 200, security
headers present, image optimizer + maps embed load under CSP. Dev live on `:3003`.

## 2026-06-18, M-stripe accent system + imagery scale-up

Two client asks: bring blue in as a structural BMW-M-style accent (not just color
on buttons), and showcase a much larger share of the photography.

- **Accent / M-stripe:** introduced a single controlled red (`#C81E1E`) for CTAs,
  active nav underline, active scroll-rail tick, focus rings, and marquee
  separators. Then added an `MStripe` component (BMW-M tricolor: blue/navy/red)
  used structurally as a header brand mark, a hero signature + panel-seam ribbon,
  bookmarks straddling each section's top divider, and edge ribbons on featured
  and gallery images. This is how blue enters the locked palette.
- **Imagery scale-up:** converted the source set up to 44 WebP (skipped only the
  pickup truck and one unclear frame), regenerated blur placeholders, and rebuilt
  the `/work` gallery to showcase 43 images. Added a dedicated Bellevue/experience
  credibility section to the home (now seven full-screen sections).
- **Other fixes:** reframed the featured section to read as Jonathan's work rather
  than a car listing; fixed hover-zoom overflow spilling over the scroll rail
  (clipped `.zoom`), moved the rail to `xl` with hero right-clearance.
- Rebuilt the code-review graph via CLI (1216 nodes, 70 files).

**Verification:** lint clean, build green (8/8), all routes 200, 44 images on
disk, experience section live. Dev on `:3003`.

## 2026-06-18, Car-DNA pass: custom accent, easter eggs, Rainier, placeholders

Client feedback round focused on identity and craft. Skills consulted again
(impeccable, taste-skill, ui-ux-pro-max); magic/stitch MCPs were erroring and
treated as stale per instruction; graph rebuilt via CLI.

- **Removed the home side scroll-rail** (client disliked it); scroll-snap kept
  via a headless `SnapMode` component.
- **Recolored off BMW M's exact hues.** The stripe/accent triad is now custom,
  pulled from Jonathan's satin-blue Revuelto: azure `#1F6FB2`, bronze `#A9772F`,
  clay red-orange `#C2452A` (clay is the single primary accent). Authentic to his
  work, not a brand copy.
- **Pickup truck included** (45 images total) to show he does more than European
  cars; `/work` gallery now shows 44 with **car-info captions** (make + work).
- **Car easter eggs:** a `Wheel` SVG mark replaces plain bullets in skills lists
  and gallery captions and spins on hover; gallery hover reveals a solid info bar.
- **Mount Rainier silhouette**: a faint fixed backdrop that shows through the
  transparent sections (hero/gallery/Bellevue) for a parallax PNW nod; plus a
  Bellevue coordinate detail in the footer.
- **Placeholders**: a `Placeholder` component marks content-pending slots with
  ideal dimensions (About headshot 1200x1500) for Jonathan to supply.
- **Button/link contrast hardened**: `.btn-on-dark` variant, higher-contrast
  footer links, verbose contact buttons replaced; no white-on-white states.

**Verification:** lint clean, build green (8/8 static), all routes 200, graph
rebuilt (1217 nodes). Dev on `:3003`. magic/stitch MCPs unavailable this session.

## 2026-06-18, Refinement round: accent, fit, footer, Rainier

Iterative client feedback, all addressed:

- **Single azure accent.** Removed the stacked tricolor (it read as a staircase).
  Sampled the car images (dominant color is the satin-blue Revuelto) and set one
  accent `#2353A4`, expressed as a clean single `AccentBar` (header mark, hero
  signature, divider bookmarks, image ribbons). Deleted `MStripe`.
- **Viewport fit.** Sections now size `calc(100svh - var(--header-h))` so each
  panel fits any screen; reduced section padding and bento height to match.
- **Header.** Rebuilt as a compact, consistent single-row height driven by
  `--header-h`, responsive brand ("Crespo" on mobile). No more oversized header.
- **Footer.** Redesigned: dark brushed-steel, oversized tonal "CRESPO" wordmark,
  navigation, studio + Bellevue coordinates, accent CTA. (Was generic.)
- **Mount Rainier.** Redrew the silhouette from the NW-side profile (Liberty Cap
  shoulder, saddle, Columbia Crest, long concave flanks, smooth curves), scoped
  to white sections only, with a CSS scroll-driven parallax drift.
- **Gallery grouping.** `/work` now groups by Lamborghini / Porsche 911 / In the
  booth / Wheels & details / Beyond European.
- **Capabilities spacing.** Vertically centered the statement column and added a
  supporting line so it no longer has dead space below the heading.
- **Contrast.** Single-azure accent, dark-safe buttons, forced chrome labels on
  dark surfaces (Tailwind utility lost to plain `.label`, so used `!`).

**Verification:** lint clean, build green (8/8), all routes 200, azure compiled,
accent bars + parallax + grouped gallery render. Dev on `:3003`.
