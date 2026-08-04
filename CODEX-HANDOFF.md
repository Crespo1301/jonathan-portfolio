# Codex Handoff, Jonathan Portfolio

Created 2026-06-18 by Claude (in the Portfolio repo session). This repo is brand
new (was just `.git`, remote `git@github.com:Crespo1301/jonathan-portfolio.git`).
The job in the next Codex conversation: set up this workspace and start building
Jonathan Crespo's personal portfolio website.

## Who this is for

Jonathan Crespo is Carlos's brother. He is onboarded as a **client** of
CSolutions (the Portfolio business hub), with a **100% free comp** for hosting
and support. Carlos confirmed on 2026-08-04 that `https://jczdripp.com` and
`https://www.jczdripp.com` both work and are interchangeable.

## What is already done (in the CSolutions / Portfolio Supabase, project `txzpxkepoeaqdmjxoags`)

- **Client account:** `kingsales92@gmail.com`, profile id
  `b8ad4b16-04f1-4f1b-8ee0-0a47cbaf691d`, role `client`. He was invited via the
  branded set-password email (he creates his own password). If he did not get it,
  re-invite from the admin/partner console or re-run the invite.
- **Project:** "Jonathan Portfolio", id `bc51da6e-4b21-41a6-968f-8b7427900916`,
  slug `jonathan-portfolio`, `project_status = active`, `hosting_plan_key = basic`,
  `support_tier = growth`.
- **Comp / billing:** `subscription_discount_percent = 100`,
  `subscription_discount_duration_months = null` (forever),
  `subscription_discount_label = "Family comp - 100% free"`,
  `subscription_discount_consumed_at = null`. He has **no Stripe subscription**
  (`stripe_subscription_id` is null) but `stripe_subscription_status` was set to
  `active` so his client portal reads as a real, active client instead of a cold
  "please subscribe" lead.
- **Membership:** Jonathan is the project `manager`.

### Billing follow-up to verify (Portfolio repo, not here)

Because he is `active` with no real Stripe sub, double-check he does **not**
inflate MRR at full price. `src/lib/admin/mrr.ts` should net the 100% discount to
$0; if it counts him at the basic price instead, either apply the discount in the
MRR math or exclude him the way `isInternalProject` excludes the owner Main Site
(see the `owner-site-mrr-exclusion` note). The discount-ending reminder cron
already skips him (it filters on `stripe_subscription_id is not null`).

## What to do in this repo (the next conversation)

1. **Maintain the live portfolio.** The site now presents Jonathan as an
   automotive paint specialist in Bellevue, WA. Keep pending approvals explicit
   and do not invent biography, credentials, shop names, metrics, or social links.
2. **Keep contact delivery configured.** `/api/contact` uses Resend server-side
   with `RESEND_API_KEY`, `CONTACT_TO`, and `CONTACT_FROM`; direct mailto links
   are fallback contact methods only.
3. **Custom domain connected.** Keep Vercel/DNS aligned for `jczdripp.com` and
   `www.jczdripp.com`; hosting is free to him (the comp).
4. **Link back to the portal.** The project already exists in the CSolutions portal,
   so once the site is live, update the project row (website_url, launch_date) and
   optionally add it to `Portfolio/src/data/projects.ts` / showcase if Carlos wants
   it featured.

## Voice / standards

Jonathan's site copy is his, not Carlos's. For any CSolutions-voice copy, follow
`Portfolio/docs/voice/` and `Portfolio/docs/reference/MASTER_RULES_AI.md` (run-on
sentences via commas, exclamations, no em dashes, no "homework"/academia framing).

## Quick references

- CSolutions Supabase project id: `txzpxkepoeaqdmjxoags`
- Jonathan profile id: `b8ad4b16-04f1-4f1b-8ee0-0a47cbaf691d`
- Jonathan project id: `bc51da6e-4b21-41a6-968f-8b7427900916`
- This repo remote: `git@github.com:Crespo1301/jonathan-portfolio.git`
