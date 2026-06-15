# Deliverable 4 — Typography Review (Phase 3)

Three-family system as mandated. Disciplined roles; hierarchy built from **weight and whitespace**, not loud colour or many fonts — the lesson from David Chipperfield (~2.4× heading:body), Studio Egret West and Minale + Mann.

## Roles

| Family | Role | Why |
| --- | --- | --- |
| **Plus Jakarta Sans** | Oversized display headlines (H1), Transformation titles | Geometric, confident, slightly characterful — reads premium and modern at large sizes; low-ish contrast relying on scale + weight. |
| **Manrope** | Wordmark, section headings (H2/H3), eyebrows | Clean, semi-geometric grotesque; excellent as a brand voice and structural heading face. |
| **Inter** | Body, UI, metadata, captions, forms | The most legible workhorse at small sizes — protects readability and form usability. |

## Type scale (fluid, mobile-first → desktop)

| Token | Mobile | Desktop | Family / weight |
| --- | --- | --- | --- |
| Display / H1 | 40px | 72–84px | Plus Jakarta Sans 600–700 |
| H2 | 30px | 48px | Manrope 600 |
| H3 | 22px | 30px | Manrope 600 |
| Eyebrow (brass, ALL-CAPS, tracked +0.12em) | 12px | 13px | Manrope 600 |
| Body | 16px | 18px | Inter 400 |
| Body-lg (intro) | 18px | 21px | Inter 400 |
| Caption / metadata (muted, small-caps) | 13px | 14px | Inter 500 |
| Pull-quote | 24px | 34px | Plus Jakarta Sans italic / 500 |
| Button label | 16px | 16px | Manrope 600 |

- **Heading:body contrast ≈ 2.5–3×** — confident but not circus.
- **Line-height:** 1.05–1.15 for display, 1.6–1.7 for body (luxurious, readable).
- **Measure:** body clamped 60–72ch (~640–700px).

## Headline style
Oversized, low-contrast, weight-and-whitespace driven. The hero H1 *states the positioning* (e.g. "Transforming North East properties with precision, craft & care"). One large italic/serif-feel pull-quote per Transformation as the emotional centrepiece (the TEN pattern).

## Body typography
Inter at a comfortable measure on `#FFFFFF`; metadata/captions in muted `#B3B3B3` small-caps. No dense walls of text — short editorial paragraphs with generous spacing (directly countering competitors' all-caps shouting and long undifferentiated scrolls).

## CTA typography
Manrope 600, sentence case (calm and consultative, not SHOUTING), ~16px, with generous button padding. One dominant verb repeated site-wide ("Book a free survey" / "Tell us about your space").

## Why this supports premium positioning
- A disciplined 3-font system with big confident headings + airy spacing is *the* cheapest, highest-impact "high-end" signal (confirmed across every architecture and luxury-builder exemplar).
- Brass `#C9A86A` used **only** for letterspaced ALL-CAPS micro-eyebrows and "Transformations" labels — never body, never buttons — gives a couture-house cue without kitsch.
- Editorial restraint instantly separates Propertycare from the dated, cramped, all-caps competitor templates.

## Performance / accessibility
- Self-host variable fonts; `font-display: swap`; subset to Latin; preload the display weight only.
- Minimum body 16px; never sub-13px for meaningful text (skill.md typography rule).
- Verify contrast (see [05-colour-validation.md](05-colour-validation.md)).
