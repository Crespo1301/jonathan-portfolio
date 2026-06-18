# AI Workflow

This repo follows the shared CSolutions AI workflow.

## Role Split

- Claude is the main designer, planner, and concept partner.
- Codex is the daily worker, organizer, maintainer, verifier, and GitHub-side closer.

## Default Flow

1. Use Claude when the task is visual, fuzzy, copy-heavy, or needs premium design judgment.
2. Ask Claude for a short implementation brief with the target repo, page or feature, direction, and acceptance criteria.
3. Move to Codex for implementation, maintenance, cleanup, testing, documentation, and release prep.
4. Go back to Claude when the built result needs design critique or another major creative leap.

## Handoff Rule

Every Claude design or planning pass should leave a short record in `docs/claude-track-record.md`.

Record:

- the date
- the target surface
- the Claude recommendation
- whether CSolutions accepted, changed, or rejected it
- what Codex implemented from it
- the release or commit where the work landed

If Codex works directly from an already-approved project doc, log that as `Source: Docs`.

## Repo-Local AI Files

Use these local files in every repo:

- `.env.ai.example`
- `.env.ai.local`
- `.mcp.example.json`
- `.mcp.json`
- `scripts/stitch-doctor.sh`
- `scripts/stitch-proxy.sh`
- `scripts/magic-mcp.sh`

`.env.ai.local` and `.mcp.json` stay local-only and should not be committed.

For 21st.dev in Claude, prefer this pattern:

1. Keep shared AI keys in `$HOME/.env.ai.local`.
2. Use repo-local `.env.ai.local` only when the repo needs an override.
3. Copy `.mcp.example.json` to `.mcp.json`.
4. Let `scripts/magic-mcp.sh` map `TWENTYFIRST_API_KEY` into the `API_KEY` env expected by `@21st-dev/magic`.

## Local Commands

If the repo has `package.json`, prefer:

```bash
npm run stitch:init
npm run stitch:doctor
npm run stitch:proxy
npm run magic
```

## Tool Rules

- Use Stitch when a section needs stronger layout exploration or UI concepting.
- Use 21st.dev for inspiration and component benchmarking.
- Use `ui-ux-pro-max` for typography, layout, spacing, and premium polish direction.
- Do not hardcode AI keys in committed files.

## Shared AI Skill Stack

Use these across active repos so Claude and Codex spend fewer tokens and work from the same operating system:

- `code-review-graph`
- `Impeccable`
- `OpenSpec`
- `mattpocock/skills`

## Token Efficiency Rule

- Prefer `code-review-graph` plus targeted skills before broad file reads.
- Use Claude for visual, copy, and critique-heavy work.
- Use Codex for implementation, verification, cleanup, and Git closeout.

## GitHub Closeout

Codex should usually leave one of these behind at the end of an active slice:

- a focused commit
- a push to the active branch
- a version or release note update
- a short handoff note if the work is intentionally left uncommitted
