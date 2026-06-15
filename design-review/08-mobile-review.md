# Deliverable 8 — Mobile Experience Review (Phase 5)

Mobile is **the primary experience** ([skill.md](../skill.md)) — most visitors arrive from Google, GBP, WhatsApp, Facebook, Instagram. Desktop is adapted *up* from these mobile decisions.

## The five mandated questions

**1. Can users contact immediately?**
✅ Floating WhatsApp/SMS/Call stack pinned bottom-right, thumb-reachable, persistent at every scroll depth. Hero CTAs above the fold. Contact is never more than one tap away.

**2. Can users understand services quickly?**
✅ Single-column scroll-stack — one idea in view at a time. Outcome-led service cards ("Modern electrical upgrades that improve safety, convenience and ambience") readable in a glance; tap → full service page.

**3. Does the site feel premium on mobile?**
✅ Full-bleed photography on the `#0A0A0A` canvas, generous vertical rhythm, large confident type, brass hairlines. The gallery feel survives the small screen because it was *designed* for it.

**4. Are CTAs visible without excessive scrolling?**
✅ Primary CTA in the hero (above fold); floating stack always visible; CTA repeated at every major section so a tap target is always near the thumb.

**5. Would it outperform local competitors on mobile?**
✅ Decisively. Competitors offer dated templates, tiny logos, off-site form redirects, single mobile numbers and **no WhatsApp/sticky contact**. Propertycare ships sticky one-tap WhatsApp, before/after sliders and a fast, modern, schema-rich mobile experience.

## Mobile-specific design rules
- **Touch targets ≥ 44×44px**, generous spacing between tappable items.
- **Before/after slider** → drag-wipe on touch; **paired stacked stills** as the no-JS / reduced-motion fallback so it never breaks.
- **Thumb zone:** primary actions in the lower third; floating stack bottom-right.
- **Hero video:** mobile gets a lightweight poster image first (or a static before/after) to protect LCP; video lazy-loads, muted, `playsinline`, never autoplay-with-sound.
- **Type:** fluid scale (H1 40px mobile), body ≥16px (no zoom-on-focus), measure naturally clamped by viewport.
- **Navigation:** compact bar with persistent WhatsApp CTA; full menu in an accessible slide-over with focus trapping.
- **Forms:** correct `inputmode`/`autocomplete`/`type` (tel, email) for native keyboards; photo upload uses the device camera/gallery.
- **Performance:** responsive AVIF/WebP at device widths, lazy-load below the fold, defer non-critical JS — protects mobile Core Web Vitals (see [09-design-scorecard.md](09-design-scorecard.md)).
- **Reduced motion:** `prefers-reduced-motion` disables wipes/reveals gracefully.

## Verdict
Mobile-first is satisfied structurally (the design *originates* on mobile) and experientially (premium feel + frictionless contact). ✅
