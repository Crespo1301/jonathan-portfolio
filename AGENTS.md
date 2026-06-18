# AGENTS.md

Repo-local guidance for Codex and other implementation agents. Pair this with `/home/cresp3/AGENTS.md`, `AI-WORKFLOW.md`, and `docs/MASTER_RULES.md`.

## Repo Role

Jonathan Crespo's personal portfolio website. This is a real client repo, not a generic template, but the current stage is still intake-first because Jonathan's actual content and public positioning are not locked yet.

## Canonical Files

- `PRODUCT.md` for goals, audience, and open questions
- `DESIGN.md` for current visual direction and what is still intentionally undecided
- `HANDOFF.md` for catch-up and next steps
- `src/data/site.ts` for placeholder structure and content inputs
- `docs/MASTER_RULES.md` for writing and repo conventions

## Implementation Rules

- Do not invent Jonathan's biography, project history, or personal brand voice.
- Keep the current route structure flexible until the brief is confirmed.
- Preserve clean Vercel-ready Next.js defaults.
- Avoid gradients, translucent surfaces, and trend-chasing polish unless the real brief calls for it later.
- Keep secrets and environment-specific values out of committed files.

## Closeout Rule

When a meaningful slice ends:

1. Update `CHANGELOG.md`.
2. Update `HANDOFF.md`.
3. If Claude materially shaped the design, update `docs/claude-track-record.md`.
