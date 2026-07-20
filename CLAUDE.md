# CLAUDE.md

Repo role: Jonathan Crespo personal portfolio client project, scaffolded by CSolutions.

## Business Context

- Jonathan is Carlos's brother and a real client inside the CSolutions system.
- Hosting and support are fully comped for him.
- There is no custom domain yet, the site should be prepared for a Vercel preview launch first.
- The site should feel like Jonathan's voice and goals, not Carlos's.

## Current Mission

Get the repo into a clean, reusable portfolio state, gather the brief, and avoid inventing Jonathan's story before his content arrives.

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
- Treat the current build as an intake-ready shell, not a final identity.
- If a meaningful design pass happens, update `docs/claude-track-record.md`.

## Visual QA

Use the workspace runner at `/home/cresp3/scripts/visual-check.sh` after any layout, responsive, spacing, animation, or visual-polish change. Start the local dev server, capture mobile and desktop screenshots into `.visual-checks/`, and inspect the rendered pixels before calling the work done. See `VISUAL-QA.md`.
