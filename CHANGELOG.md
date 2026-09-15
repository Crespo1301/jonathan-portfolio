# Changelog

## Unreleased

- hardened `/api/contact` with an explicit supported content-type policy and an actual received-body byte limit while preserving the existing validation, honeypot, rate-limit, and Resend flow
- replaced the optional public form endpoint / mailto submission behavior with a
  same-origin `/api/contact` route that validates inquiries and sends them
  through Resend using private `RESEND_API_KEY`, `CONTACT_TO`, and `CONTACT_FROM`
  environment variables
- added `/privacy` and `/thank-you`, updated the contact form language so success
  is only shown after the delivery provider accepts the message, and documented
  the name, email, phone, vehicle, and message fields
- reconciled README, CLAUDE, PRODUCT, HANDOFF, and CODEX-HANDOFF around the live
  automotive portfolio state, owner-confirmed interchangeable domains, remaining
  content approvals, and Resend/CSP implications

## 1.0.0 - 2026-06-20

- scaffolded the repo as a Next.js App Router project
- applied the shared CSolutions AI tooling standard
- added an intake-ready portfolio shell without inventing Jonathan's content
- first real design pass: rebuilt the site as a premium monochrome + chrome
  brand for Jonathan as a European automotive paint specialist in Bellevue, WA
  (light gallery base, solid colors, sharp corners, hairline borders, no
  gradients/glass/pills/eyebrows); rewrote content data around confirmed facts
- integrated Jonathan's real photography (exotics + European cars): converted
  the source HEIC/PNG set to optimized WebP in public/images, wired through
  next/image across home/work/about, and added restrained motion (hover zoom +
  reduced-motion-safe scroll reveal)
- editorial redesign: expanded to a 23-image set; rebuilt home as six full-screen
  scroll-snap sections with distinct layouts (split hero, kinetic marquee,
  featured build, steel capabilities panel, Porsche respray sequence, bento
  gallery, contact finale), a scroll-spy rail, oversized type, and metallic
  silver/steel surfaces
- added blur placeholders (placeholder="blur") for skeletal image loading,
  grayscale Google Maps embeds (contact/about/home), and security response
  headers (CSP, HSTS, nosniff, frame-options, referrer-policy, permissions-policy)
- introduced a single controlled performance-red accent (CTAs, active nav, active
  scroll-rail tick, focus rings, marquee separator); reframed the featured section
  to showcase the refinish work rather than the car; fixed hover-zoom overflow
  spilling over the scroll rail and moved the rail to xl with hero right-clearance
- added a BMW-M-inspired tricolor (blue/navy/red) M-stripe motif used structurally
  (header mark, hero signature + seam ribbon, section-divider bookmarks, image edge
  ribbons) via a reusable MStripe component; this brings blue into the palette
- expanded the image set to 44 WebP (from the 46-file source) and rebuilt the
  /work gallery to showcase 43; added a dedicated Bellevue/experience credibility
  section to the home (now seven full-screen sections); rebuilt the code-review
  graph via CLI
- removed the home side scroll-rail (kept snap headless); recolored the accent
  triad off exact BMW M hues to custom colors pulled from Jonathan's Revuelto
  (azure, bronze, clay red-orange); hardened button/link contrast (dark-safe
  variant, footer links) to remove white-on-white risk
- included the pickup truck (45 images) to signal range beyond European cars;
  added car-info captions to the gallery (make + work); added a wheel-mark easter
  egg used as bullets/markers (spins on hover); added a Mount Rainier silhouette
  backdrop and a Bellevue coordinate detail; added labeled placeholder slots
  (headshot) with ideal dimensions for Jonathan to supply
- removed the stacked tricolor (read as a staircase) for a single azure accent
  sampled from the car images, expressed as a clean accent bar; grouped the /work
  gallery by category; redrew the Mount Rainier silhouette from its NW-side
  profile and gave it a scroll-driven parallax; redesigned the footer (dark
  brushed-steel, oversized tonal wordmark); made every section fit the viewport
  via calc(100svh - header) and rebuilt the header as a compact adaptive height
