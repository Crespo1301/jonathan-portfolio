# CLAUDE.md

Repo role: Jonathan Crespo personal portfolio client project, scaffolded by CSolutions.

## Business Context

- Jonathan is Carlos's brother and a real client inside the CSolutions system.
- Hosting and support are fully comped for him.
- Carlos confirmed `https://jczdripp.com` and `https://www.jczdripp.com` both work and are interchangeable; keep code metadata on the apex unless Carlos changes the canonical preference.
- The site should feel like Jonathan's voice and goals, not Carlos's.

## Current Mission

Maintain the real automotive portfolio while keeping unapproved biography,
resume, social, photography, shop-name, and metrics claims clearly pending.

## Claude Role Here

- Claude should help shape the design once Jonathan's actual direction is known.
- Codex handles setup, structure, docs, verification, and Git closeout.

## Canonical Files To Read First

- `README.md`
- `PRODUCT.md`
- `DESIGN.md`
- `HANDOFF.md`
- `src/data/site.ts`

## Working Notes

- Do not invent Jonathan's career story, metrics, or niche.
- Treat the current build as a real client portfolio with some content approvals
  still pending, not as a generic intake shell.
- Contact delivery uses a same-origin `/api/contact` route backed by Resend.
  Required production env vars are `RESEND_API_KEY`, `CONTACT_TO`, and
  `CONTACT_FROM`. Do not expose Resend credentials client-side.
- If a meaningful design pass happens, update `docs/claude-track-record.md`.

## Visual QA

Use the workspace runner at `/home/cresp3/scripts/visual-check.sh` after any layout, responsive, spacing, animation, or visual-polish change. Start the local dev server, capture mobile and desktop screenshots into `.visual-checks/`, and inspect the rendered pixels before calling the work done. See `VISUAL-QA.md`.
