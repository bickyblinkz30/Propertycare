# Deliverable 5 — Colour Validation (Phase 3)

**Verdict: approved palette confirmed and retained — no change justified** (plus the agreed brass accent addition).

## Final palette

| Token | Hex | Role |
| --- | --- | --- |
| Background | `#0A0A0A` | Page canvas (near-black gallery wall) |
| Surface | `#111111` | Section backgrounds |
| Cards | `#181818` | Cards / panels (no border/shadow) |
| **Primary (green)** | `#1D8F5A` | **All action:** CTAs, WhatsApp, form submit, links, active states |
| Primary hover | `#29B070` | Hover / active |
| **Accent (brass)** | `#C9A86A` | **Prestige only:** hairlines, eyebrows, "Transformations" labels, dividers |
| Text | `#FFFFFF` | Primary text |
| Muted | `#B3B3B3` | Secondary text, captions, metadata |

## Why the dark scheme is right
A near-black gallery canvas makes high-resolution before/after photography *pop* and reads instantly more premium than the white templated competitor sites (all 21 competitors use light templates). The work becomes the colour.

## Why the dual-accent split is the strategic engine
- **Green = action.** `#1D8F5A` (hover `#29B070`) carries every interaction. Its forward, growth/"go" connotation drives conversion and feels approachable — deliberately distinct from the cold clinical blue most trade sites default to.
- **Brass = prestige.** `#C9A86A` is the warm metallic luxury layer (the velvet/marble/brass cue the David Collins tier uses). Reserved for hairlines, eyebrows, labels and dividers.
- **Brass strictly off buttons** preserves a single unambiguous action colour, avoiding the multi-CTA confusion seen at NE Electrical, while brass does the quiet luxury signalling.

## How it reinforces trust *and* luxury
Green-for-action = clear, confident, certified (trust). Brass-for-prestige = warm, crafted, exclusive (luxury). The two operate on different jobs and never compete.

## Accessibility / contrast (WCAG AA)
- White `#FFFFFF` on `#0A0A0A` / `#111111` / `#181818`: passes AA comfortably (>15:1).
- Muted `#B3B3B3` on `#0A0A0A`: ~10:1 — fine for secondary text.
- **Green CTAs:** use **white text on `#1D8F5A`** (≈ AA at the button sizes used) — verify ≥4.5:1 at build; if a green *text-on-dark* link is needed, use the brighter `#29B070` and/or ≥18px/bold.
- **Brass `#C9A86A` on dark:** ~7–8:1 for large/decorative use — **acceptable for hairlines, eyebrows and large labels, NOT for small body text.** Enforce as a usage rule in code.
- All states must have a visible non-colour-only focus ring (accessibility requirement, [skill.md](../skill.md)).

## Tailwind token mapping (for build)
```
bg        #0A0A0A   -> background / DEFAULT
surface   #111111   -> surface
card      #181818   -> card
primary   #1D8F5A   -> primary.DEFAULT
primary-h #29B070   -> primary.hover
accent    #C9A86A   -> accent (brass)
fg        #FFFFFF   -> foreground
muted     #B3B3B3   -> muted-foreground
```
