# Temporary stock images — swap list for client handoff

Every image below is a licensed Unsplash stand-in (standard Unsplash License:
free commercial use, no attribution) committed locally under
`/public/images/hero/`. Each one should be replaced when the client supplies a
real photo. To swap: overwrite the file (keep it landscape, ~1920px wide,
≤200KB) or repoint the entry in `src/lib/images.ts`.

| File | Used as | Wired in | Source (Unsplash ID) |
| --- | --- | --- | --- |
| home-hero.jpg | Homepage hero background | `heroImages.home` | photo-1611094016919-36b65678f3d6 |
| about-hero.jpg | About page hero background | `heroImages.about` | photo-1584622781564-1d987f7333c1 |
| services-hero.jpg | Services page hero background | `heroImages.services` | photo-1565183997392-2f6f122e5912 |
| portfolio-hero.jpg | Portfolio page hero background | `heroImages.portfolio` | photo-1598928506311-c55ded91a20c |
| contact-hero.jpg | Contact page hero background | `heroImages.contact` | photo-1560184897-ae75f418493e |
| why-choose-us-hero.jpg | Why-Choose-Us hero background | `heroImages.whyChooseUs` | photo-1511822148790-e7b58ba14c72 |
| home-footer-cta.jpg | Homepage pre-footer CTA background | `ctaBackgrounds.home` | photo-1560185009-dddeb820c7b7 |
| services-footer-cta.jpg | Services pre-footer CTA background | `ctaBackgrounds.services` | photo-1562259949-e8e7689d7828 |

Previous client-supplied photos that were swapped out are still committed in
`/public/images/` for rollback: `Hero-section-homepage.jpg`,
`Property-Care-team-at-work.jpg`, `Bespoke-Media-Wall-Installation.jpg`,
`TV-Media-Wall-Installation.jpg`.

Town-page hero/CTA assets in `/public/images/hero/` (sunderland, washington,
seaham, south-shields, gateshead, newcastle, durham, testimonials) are also
Unsplash-sourced — see `public/images/hero/README.md` for that table — but the
pages using them are not built yet.
