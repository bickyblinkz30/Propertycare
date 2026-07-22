# PropertyCare Paints and Electrics Ltd — Website

Live site: **https://www.propertycarepro.co.uk**
Repository: `bickyblinkz30/Propertycare` (branch: `main`)
Hosting: Vercel (auto-deploys on every push to `main`)

This README is the handoff document for the site. It covers the tech stack,
how to run and deploy the project, the two external services it depends on
(hosting DNS and the contact-form mailer), and a punch list of items to close
out before the handoff is fully complete.

---

## 1. Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16.2.9 (App Router) |
| UI | React 19.2.4, inline styles (no Tailwind utility classes in JSX — Tailwind is installed but used only for base resets) |
| Animation | Framer Motion, Lenis (smooth scroll) |
| Language | TypeScript |
| Styling tokens | `src/app/globals.css` — colour variables, hover/animation classes |
| Fonts | Inter (body) + Playfair Display (headings), loaded via `next/font/google` |

Source: `package.json` in the repo root.

## 2. Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## 3. Repository structure — read this before editing

The live site is **`src/app/**` only**. Every route is its own page file:

```
src/app/page.tsx              Home
src/app/about/page.tsx        About
src/app/services/page.tsx     Services
src/app/portfolio/page.tsx    Portfolio
src/app/why-choose-us/page.tsx
src/app/contact/page.tsx      Contact + quote form
src/app/components/           Nav, FloatingContacts, FooterLinks, BeforeAfterSlider, etc. — actually used
src/app/api/contact/route.ts  Contact form → Microsoft Graph email send
src/lib/site.ts               Single source of truth: brand name, contact details, service areas, testimonials
src/lib/images.ts             Central image registry — every page pulls image URLs from here
```

**Important:** there is no shared `<Footer>` component. All six page files carry
their own full footer markup, so any footer edit has to be applied to each
page individually.

**Dead code:** `src/components/` (a separate, older `Navbar.tsx`/`Footer.tsx`/`FloatingContact.tsx`)
is present in the repo but not imported anywhere in the live app. It's
harmless to leave in place, but if you're hunting for "where does X text
live on the site," search `src/app/**` first — `src/components/` won't
affect what's rendered.

## 4. Company name

The registered legal name — confirmed against the Companies House
registration confirmation the client provided — is:

> **PropertyCare Paints and Electrics Ltd**

This is defined once, as the single source of truth, in `src/lib/site.ts`:

```ts
export const brand = {
  name: "PropertyCare",
  full: "PropertyCare Paints and Electrics Ltd",
  ...
}
```

Every page, the SEO metadata/JSON-LD in `src/app/layout.tsx`, and the
contact-form email template reference `brand.full` — so a future name change
only needs to happen in this one file. Two hardcoded mismatches (a typo in
the homepage hero heading, and shortened alt text on the mobile nav logo)
were found and corrected to match this name.

**One intentional exception:** the logo *image* (`propertycare-logo-*.png`)
reads "PAINT" (singular), not "Paints." This was a deliberate client
decision on the graphic wordmark and is separate from the legal-name text
used everywhere else on the site — it is not a bug and should not be
"fixed" to match the text.

## 5. Domain & DNS

- Domain `propertycarepro.co.uk` was purchased on **Namecheap** by the
  developer (Bicky) during the build.
- DNS is pointed at Vercel for the production deployment.
- **Not yet decided/confirmed:** whether domain and Vercel/GitHub account
  ownership transfers to the client, or the developer continues to host it.
  Per earlier project notes, no Vercel or GitHub account access has been
  transferred as of this handoff — flagging this so it's explicitly agreed
  with the client rather than assumed.

## 6. Contact form — Microsoft 365 Graph API

The quote-request form (`/contact`) sends email via Microsoft Graph
`sendMail`, using app-only (client credentials) OAuth2 — see
`src/app/api/contact/route.ts`.

**Required environment variables (set in Vercel → Project → Settings →
Environment Variables, not committed to the repo):**

| Variable | Purpose |
| --- | --- |
| `MS_TENANT_ID` | Azure AD tenant/directory ID |
| `MS_CLIENT_ID` | App registration client ID |
| `MS_CLIENT_SECRET` | App registration client secret |
| `CONTACT_FROM` | Mailbox the app sends as (e.g. `info@propertycarepro.co.uk`) |
| `CONTACT_TO` | Recipient address for quote requests |

### ⚠️ Client secret expiry — self-service renewal

Azure AD app registration secrets expire on a fixed schedule set when
they're created (commonly 6, 12, or 24 months). This repo has no record of
that expiry date, so check it and put a calendar reminder ahead of it. The
site's contact form will **fail silently** for visitors once the secret
lapses, until a new one is generated and updated in Vercel.

**How to check the expiry date:**

1. Sign in to [portal.azure.com](https://portal.azure.com) with the
   Microsoft 365 admin account for `propertycarepro.co.uk`.
2. Go to **Azure Active Directory → App registrations**, and open the app
   registration used for this site's email sending.
3. Go to **Certificates & secrets**. The **Expires** column shows the
   current secret's expiry date.

**How to renew it when it's approaching expiry (or has lapsed):**

1. In the same **Certificates & secrets** screen, click **New client
   secret**, give it a description (e.g. "propertycarepro.co.uk contact
   form — renewed [date]") and a duration.
2. Click **Add**, then **copy the secret's Value immediately** — Azure only
   shows it once.
3. Go to [vercel.com](https://vercel.com), open this project → **Settings →
   Environment Variables**, and update `MS_CLIENT_SECRET` with the new
   value (for the Production environment).
4. Redeploy (Vercel usually redeploys automatically on an env var change;
   if not, trigger a redeploy from the Deployments tab).
5. Delete the old secret from **Certificates & secrets** once you've
   confirmed the new one works (send a test quote request through the live
   contact form).

This is a self-service process the client can complete without developer
involvement — steps 1–5 above are all that's needed. Any support requested
from the developer for this (or other maintenance) after handoff is billable
separately and not covered by the original project scope.

**Honeypot fix:** confirmed resolved and live on `main`.

## 7. Images — what's real vs. temporary

Most portfolio/before-after and service photography is now the client's
real project photos. The following **8 placeholders are still licensed
Unsplash stock** (per `TEMPORARY-IMAGES.md`) and should be swapped for real
photography when available:

| File | Used as |
| --- | --- |
| `home-hero.jpg` | Homepage hero background |
| `about-hero.jpg` | About page hero background |
| `services-hero.jpg` | Services page hero background |
| `portfolio-hero.jpg` | Portfolio page hero background |
| `contact-hero.jpg` | Contact page hero background |
| `why-choose-us-hero.jpg` | Why Choose Us hero background |
| `home-footer-cta.jpg` | Homepage pre-footer CTA background |
| `services-footer-cta.jpg` | Services pre-footer CTA background |

All eight live under `/public/images/hero/`. To swap: overwrite the file
(landscape, ~1920px wide, ≤200KB) or repoint the entry in
`src/lib/images.ts`. Full detail and Unsplash source IDs are in
`TEMPORARY-IMAGES.md` in the repo root.

## 8. Design system quick reference

- Colours: black `#0A0908`, orange accent `#F58220`, charcoal `#1A1917`, warm whites
- Display font: Cormorant Garamond / Playfair Display (headings); Inter (body)
- Motion: `cubic-bezier(0.16,1,0.3,1)` easing throughout
- All styling is inline (`style={{...}}`) in JSX, not Tailwind utility classes — CSS classes in `globals.css` are used only for hover states and scroll-reveal animations

## 9. Post-handoff support

The steps in this README (secret renewal, image swaps, general content
edits) are written so the client can carry them out without developer
involvement. Any support requested from the developer after handoff —
including help with the above — is **out of scope of the original project
and billable separately.**

## 10. Handoff checklist

- [x] Registered company name verified against Companies House confirmation and corrected sitewide
- [x] Contact-form honeypot fix confirmed live on `main`
- [ ] Client to check the Microsoft Graph client secret's expiry date (see §6) and set a renewal reminder
- [ ] Replace the 8 remaining Unsplash placeholder images with real client photography
- [ ] Agree and document domain/Vercel/GitHub account ownership going forward
- [ ] Deliver source code (ZIP or repo transfer, per what's agreed above)

---
*This document reflects the state of the repo and project notes at the time it was written. Items still unconfirmed above should be verified directly against the Azure Portal, Vercel dashboard, and a live test of the contact form before treating handoff as complete.*
