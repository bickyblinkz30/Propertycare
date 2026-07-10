# Hero image assets — core pages, town pages, Areas hub, Testimonials

Pre-sourced backgrounds for pages that are **not built yet** (town pages,
Areas We Cover hub, Testimonials). When a page is created, add its two images
to `src/lib/images.ts` (`heroImages` + `ctaBackgrounds`) and reuse the
hero/CTA section pattern from the existing pages (absolute `<img>` +
dark gradient overlay; `loading="lazy"` on the pre-footer image only).

Every photo below was **visually vetted** (2026-07-09) against the brand
direction in `DESIGN_REVIEW.md` and downloaded pre-optimized (≤ 200KB).

## Licensing

- All photos are from **Unsplash** under the standard Unsplash License
  (free commercial use, no attribution required). Unsplash+ /
  `premium_photo-*` results were deliberately excluded — those need a paid
  licence.
- Streetscape picks are wide/anonymized: no readable house numbers, street
  signs or number plates were visible at full resolution when vetted.
- The two `areas-*.svg` files are original works created in-repo (brand
  palette: `#0A0A0A` ground, `#C9A86A` brass hairlines, `#1D8F5A` pins) —
  no licence constraints.

## Files

| File | Subject | Source (Unsplash photo ID) |
| --- | --- | --- |
| home-hero.jpg | TEMP stand-in — navy lounge, integrated media wall + electric fire | photo-1611094016919-36b65678f3d6 |
| home-footer-cta.jpg | TEMP stand-in — warm lounge, wood ceiling, brick fireplace | photo-1560185009-dddeb820c7b7 |
| services-footer-cta.jpg | TEMP stand-in — paint roller mid-coat, dusty blue | photo-1562259949-e8e7689d7828 |
| why-choose-us-hero.jpg | TEMP stand-in — decorators rolling red/blue walls, moody light | photo-1511822148790-e7b58ba14c72 |
| about-hero.jpg | Kitchen renovation in progress, protective sheeting | photo-1618832515490-e181c4794a45 |
| services-hero.jpg | Open-plan living/kitchen, fresh paint + pendant lighting | photo-1565183997392-2f6f122e5912 |
| portfolio-hero.jpg | Coffered-ceiling lounge, fireplace + integrated media wall | photo-1598928506311-c55ded91a20c |
| contact-hero.jpg | Welcoming painted porch entrance, lantern + swing | photo-1560184897-ae75f418493e |
| sunderland-hero.jpg | Wearmouth Bridge over the River Wear | photo-1564397507330-786b6620fb4a |
| sunderland-footer-cta.jpg | Brick house with pale front door, UK | photo-1607900840367-a83dcd63296d |
| washington-hero.jpg | Terraced residential street at dusk | photo-1780554193584-2e4da0bd7b36 |
| washington-footer-cta.jpg | Clean modern hallway, walnut door | photo-1630699144461-733d6eaf19b1 |
| seaham-hero.jpg | Coastal cliffs, muted monochrome | photo-1690943004659-0e4573a1ed0c |
| seaham-footer-cta.jpg | Seaham sea glass macro (teal/green) | photo-1716911882298-a1ac2033a953 |
| south-shields-hero.jpg | Herd Groyne lighthouse, dramatic sky | photo-1619891418039-b31e526ec9d2 |
| south-shields-footer-cta.jpg | Soft sandy seashore | photo-1510098168160-be9ffaff1290 |
| gateshead-hero.jpg | Quayside at dusk — Baltic, Sage, bridges | photo-1598964356102-dfb0a21898b1 |
| gateshead-footer-cta.jpg | Baltic across the Tyne, pink dusk | photo-1598964356097-e0aceb151ace |
| newcastle-hero.jpg | Millennium + Tyne Bridges, golden hour | photo-1598964356161-754cc07fcd36 |
| newcastle-footer-cta.jpg | Sage and Tyne Bridge from Millennium Bridge | photo-1598964356086-2f8cdb91f67f |
| durham-hero.jpg | Durham Cathedral lamp-lit at night | photo-1641937511999-aae5854da2c2 |
| durham-footer-cta.jpg | Castle, cathedral and Framwellgate Bridge, golden | photo-1633432111221-8b25d9c73c42 |
| testimonials-hero.jpg | Warm grey-sofa living room, lamp light | photo-1583847268964-b28dc8f51f92 |
| testimonials-footer-cta.jpg | Beige living room, warm lamp, fireplace | photo-1632829882891-5047ccc421bc |
| areas-hero.svg | Original brand-palette North East map motif | created in-repo |
| areas-footer-cta.svg | Tighter-crop variant of the map motif | created in-repo |

Source URLs are `https://images.unsplash.com/<photo-id>` (append
`?fm=jpg&w=…&q=…` for other sizes/qualities).

## Notes / substitutions to consider

- Washington: no usable Washington (Tyne & Wear) photography exists on
  Unsplash; the dusk terraced street reads generically North-East
  residential. Swap for a real local shot when the client can supply one.
- Seaham hero is monochrome (the only quality Seaham coverage on Unsplash
  is one B&W series) — it sits well on the dark theme, but a colour
  coastal shot from the client would be stronger.
- Testimonials hero original is portrait; it was server-cropped to
  landscape. If the crop feels tight in situ, re-request with a different
  `h=` value.
