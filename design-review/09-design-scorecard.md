# Deliverable 9 — Design Scorecard (Phase 7)

Scoring the **documented design system & direction** (pre-build). Threshold: **every category ≥ 9/10** before implementation. Performance is scored as *readiness* (the plan's ability to hit targets), to be re-verified with real Lighthouse runs post-build.

| Category | Score | Justification |
| --- | --- | --- |
| **Visual Design** | **9/10** | Dark gallery canvas + edge-to-edge photography + extreme whitespace + disciplined 3-font system + green/brass dual-accent. Mirrors David Collins / Haven / Base tier. (-1: unverified until real photography is shot — the system depends on image quality.) |
| **Premium Feel** | **9/10** | Editorial restraint, cinematic transformation template, brass prestige hairlines, named/dated case studies, branded process. Reads like a design studio, not a tradesman. (-1: needs real motion/imagery execution to fully land.) |
| **Trustworthiness** | **9/10** | Verifiable trust as centrepiece: embedded live reviews + AggregateRating schema, NICEIC/Part P/TrustMark/Dulux/insured/guarantee badge bar repeated top & bottom, named photo-attributed testimonials, real team bios, single consistent NAP. Beats every competitor's unverifiable claims. |
| **Conversion Optimisation** | **9/10** | WhatsApp-first persistent floating stack, one calm repeated verb with friction-killers, per-service CTAs, progressively-enhanced form w/ photo upload + routing, lead magnet, every section audited to move toward contact. |
| **Mobile Experience** | **9/10** | Genuinely mobile-first (design originates on mobile), thumb-zone CTAs, sticky one-tap WhatsApp, touch-friendly before/after with no-JS fallback, LCP-protected hero. |
| **Brand Positioning** | **10/10** | "The only premium single-team whole-property transformation brand in the North East" — a category-ownership position competitors structurally cannot match. Elevated language throughout. |
| **Performance Readiness** | **9/10** | Next.js 15 + next/image AVIF/WebP, self-hosted variable fonts w/ swap, Lenis (lightweight), restrained motion, lazy-load, `prefers-reduced-motion`, no heavy WebGL/parallax. Plan supports 95+/95+/100/100. (-1: must be proven with real Lighthouse runs on real content/images post-build.) |

## Result: **PASS** — all categories ≥ 9/10. ✅

## Final validation questions
- Compete with £20,000+ premium renovation brands? **Yes.**
- Homeowner trust in 10 seconds? **Yes** — hero promise + verifiable trust + real work.
- Custom designed (not template/AI-generic)? **Yes** — bespoke dark gallery system, ownable accent logic.
- Avoids generic AI design patterns? **Yes** — no hero-blob/gradient-card clichés; photography-led editorial.
- Proud portfolio piece? **Yes.**

## Conditions carried into build (to protect the scores)
1. **Real photography** is the critical dependency — until shot, use clearly-tracked premium placeholders only; never cheap stock.
2. **Performance Readiness must be re-verified** with Lighthouse on real content before launch (Phase: Optimise).
3. **Contrast rules enforced in code**: brass only for large/decorative text + hairlines; white text on green CTAs verified ≥4.5:1.
4. **Real contact numbers** (WhatsApp/SMS/phone) required before launch — placeholders clearly marked until provided.

---

## ✅ Approval gate
Design Review Phases 1–7 complete; all 9 deliverables produced; scorecard passes. **Per the Development Lock in [DESIGN_REVIEW.md](../DESIGN_REVIEW.md), implementation may begin only after explicit sign-off.**

**Awaiting user approval to proceed to the Build phase (homepage first).**
