# Jonathan Portfolio

Personal portfolio starter for Jonathan Crespo, built as a CSolutions client project.

## Current State

This repo is intentionally in the intake-ready stage.

The structure is live, the shared AI tooling is in place, the Next.js app is running, and the routes are ready, but the real content brief has not been gathered yet. The current copy is placeholder guidance only, it exists to keep the site organized until Jonathan confirms his story, sections, links, images, and public goals.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind 4
- Vercel-ready App Router setup

## Routes

- `/`
- `/about`
- `/work`
- `/resume`
- `/contact`

## Content Needed Before Final Design

- professional headline or role
- short and long bio
- headshot or preferred hero image
- resume or experience timeline
- featured work or measurable proof
- public links and contact details
- visual preferences and references

## Shared AI Tooling

This repo includes the CSolutions shared AI surface:

- `CLAUDE.md`
- `AGENTS.md`
- `AI-WORKFLOW.md`
- `.env.ai.example`
- `.mcp.example.json`
- `scripts/stitch-doctor.sh`
- `scripts/stitch-proxy.sh`
- `scripts/magic-mcp.sh`

Local-only files:

- `.env.ai.local`
- `.mcp.json`

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

AI tooling commands:

```bash
npm run stitch:init
npm run stitch:doctor
npm run stitch:proxy
npm run magic
```

## Deployment

Launch on Vercel preview / `*.vercel.app` first. Add the custom domain later once Jonathan buys one.
