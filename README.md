# Jonathan Portfolio

Personal portfolio for Jonathan Crespo, built as a CSolutions client project.

## Current State

This is Jonathan's real family-comp client portfolio. The site is no longer just
an intake placeholder: it presents Jonathan as an automotive paint specialist in
Bellevue, Washington, with confirmed positioning, work photography, experience
content, contact flow, and production-domain metadata.

Some content still needs owner approval before it should be treated as final:
social links beyond TikTok, higher-resolution photography, brand-logo usage, map
precision, and any future biography/resume revisions. Do not invent Jonathan's
story, credentials, shop name, client names, or metrics.

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
- `/privacy`
- `/thank-you` (noindex confirmation page)

## Contact Form

The public form posts to `/api/contact` on this site. That server-side route
validates the request, checks a honeypot field, applies a best-effort rate limit,
and sends the inquiry through [Resend](https://resend.com). The browser never
talks directly to Resend, so `next.config.ts` can keep `connect-src 'self'`.

Required Vercel Production environment variables:

- `RESEND_API_KEY` — API key from the Resend dashboard
- `CONTACT_TO` — inbox that receives inquiries, currently expected to be `jczdripp@gmail.com`
- `CONTACT_FROM` — sender on a Resend-verified domain, currently expected to be `Jonathan Crespo <jczdripp-inquiries@carloscrespo.info>`

Direct `mailto:` links remain available as a fallback contact method. Opening a
mail client is not treated as message delivery; the form only routes to
`/thank-you` after the delivery provider accepts the message.

## Content Still Pending Review

- biography and resume/experience revisions from Jonathan
- professional positioning changes beyond the current automotive paint specialist direction
- social links beyond confirmed TikTok `@jczdrip`
- higher-resolution photography and headshot assets
- permission for any additional brand-logo SVGs
- public shop name or precise map pin, if Jonathan wants those exposed

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

Deploy on Vercel with `jczdripp.com` and `www.jczdripp.com` aligned. Carlos
confirmed both public domains work and can be treated as interchangeable. The
code currently uses the apex `https://jczdripp.com` for metadata, canonicals,
sitemap, robots, OG, and JSON-LD.
