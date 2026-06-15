# Deliverable 3 — Moodboard Direction (Phase 3)

## Design direction (one line)
**"The art gallery of property transformation."** A near-black, cinematic canvas where real before/after work hangs like exhibited pieces — quiet, confident, crafted — with green for action and brass for prestige.

## Visual style

- **Atmosphere:** dark, cinematic, gallery-like. Edge-to-edge photography on `#0A0A0A` with generous vertical whitespace so each image gets isolated "gallery wall" breathing room. Zero decorative chrome — the photography supplies all the colour and texture.
- **Emotional response:** *"These people are serious craftspeople I can trust with my home and my money."* Calm assurance over hype; the opposite of a busy, shouty contractor template.
- **Brand personality:** Premium · Confident · Meticulous · Warm-but-professional · Locally rooted, nationally polished. Speaks like a design studio, delivers like a certified trade.

## Layout direction
Mobile-first single-column scroll-stack. Each section is its own breathing "screen" (generous vertical padding, one idea in view at a time). Content max-width ~1160px; text columns clamped ~640–700px for editorial measure. Sections on `#111111`, cards on `#181818` (no borders/shadows — separation by space and a brass hairline). Persistent floating contact stack (WhatsApp/SMS/phone) bottom-right, thumb-reachable, on every page.

**Homepage flow** (inherits to all pages):
Hero (ambient finished-room video or before/after wipe) → trust badge bar → Transformations grid → stacked service rail (brass hairlines between) → numbered process module → embedded live reviews → why-choose/credentials → B2B band (landlords/agents/developers) → FAQ accordion → final green CTA band → footer.

**Transformation detail template:** brass meta-line (location + year + property type) → title → one-line sensory intro → before/after slider → full-bleed image stack → one centred pull-quote → "Discover more" sector cross-sell.

## Typography approach
*(full detail in [04-typography-review.md](04-typography-review.md))*
Three-family system, disciplined: **Plus Jakarta Sans** for oversized display headlines and Transformation titles · **Manrope** for the wordmark and section H2/H3 · **Inter** for body, UI, metadata and forms. Hierarchy from weight + whitespace, not fireworks. Brass reserved for letterspaced ALL-CAPS micro-eyebrows and "Transformations" labels only.

## Colour validation
*(full detail in [05-colour-validation.md](05-colour-validation.md))*
Approved palette **confirmed, no change justified.** Dark gallery canvas makes before/after photography pop and reads instantly more premium than the white templated competitor sites. The dual-accent split is the strategic engine: **GREEN `#1D8F5A` owns all action** (CTAs, WhatsApp, links — forward/go connotation, distinct from cold trade-site blue); **BRASS `#C9A86A` owns prestige** (hairlines, eyebrows, "Transformations" labels — warm metallic = craft, luxury interiors, bespoke joinery). Brass stays strictly off buttons to preserve one unambiguous action colour.

## Imagery strategy
*(see also [skill.md](../skill.md) Imagery Standards)*
- **Real on-site before/after and finished-work photography only** — never stock (David Smith's Unsplash and GMW's filler are the cautionary tales from competitor research).
- Commission one cohesive professional shoot: finished media walls (fire/lighting *on*), premium paint finishes, decorative work, electrical/lighting installs, plus genuine "before" states for the wipe sliders.
- Warm, well-lit, materially-specific scenes; photography supplies the colour against the dark UI.
- Serve via a focal-point responsive pipeline (AVIF/WebP, fixed display widths, lazy-load + soft fade).
- Uniform square crops for the grid; full-bleed landscape for hero + detail stacks.
- Every image gets descriptive, locally-anchored alt text (e.g. *"Bespoke media wall with electric fire, Concord, Washington NE37"*) for a11y + image SEO.
- Real team/electrician portraits with names, qualifications, years of experience to humanise.
- **Until real photography exists:** premium AI-generated / high-end architectural-quality placeholders only, clearly tracked for replacement. No cheap stock, no generic tradesman imagery.

## Animation philosophy
*(see also [skill.md](../skill.md) Animation Standards)*
Restrained, cinematic, comprehension-first — luxury through calm, not spectacle.
- **Lenis** smooth scroll; the long vertical image stack is the primary motion device (slow, film-like reveal).
- **One** signature first-impression moment on the hero (before/after wipe or short muted ambient video), then motion calms.
- Soft opacity/translate fade-ins on scroll; staggered reveals on process numerals and portfolio tiles; subtle hover lifts (green deepening to `#29B070`); accordion FAQ expand/collapse.
- The **drag-wipe before/after slider** is the one interactive flourish.
- Honour `prefers-reduced-motion`. No parallax gimmicks, no heavy WebGL, no autoplay-with-sound. Motion must never delay content or hurt Core Web Vitals.

## Brand alignment check
✅ Reads like a luxury interior/renovation/architecture brand. ✅ Never handyman/budget/template. ✅ Transformations are the hero. ✅ WhatsApp-first conversion. ✅ Mobile-first. ✅ Premium imagery only. ✅ Aligns with the Propertycare Paints & Electrics luxury property-transformation positioning.
