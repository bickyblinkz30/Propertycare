/*
  Central image registry.

  Every page imports its image URLs from here instead of declaring its own
  inline `IMG` object. Swapping the current placeholder stock photography for
  the client's real photos later means editing THIS file only — not six pages.

  CONFIRM WITH CLIENT: every URL below is temporary stock imagery (Unsplash) or
  a local placeholder in /public/images/placeholders/. Replace with real
  project / brand photography before launch.
*/

import type { BeforeAfterEntry } from "@/app/components/BeforeAfterSlider";

// Build an Unsplash delivery URL from a photo id.
const U = (id: string, w: number, q = 82) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

// --- Hero images: one VISUALLY DISTINCT image per page ---
/*
  About / Services / Portfolio / Contact use dedicated 1920px landscape hero
  assets in /public/images/hero/ (Unsplash, standard licence) — sourced for
  hero use specifically. Do NOT point these at card/project photos: card
  assets are portrait/square crops and look stretched at full-bleed hero size
  (that was the bug this fixed, 2026-07).
*/
export const heroImages = {
  // TEMP (2026-07): home + whyChooseUs are Unsplash stand-ins until the client
  // supplies replacement photos — swap the two hero/*.jpg files or repoint here.
  // Previous client photos remain in /public/images (Hero-section-homepage.jpg,
  // Property-Care-team-at-work.jpg) if a rollback is wanted.
  home: "/images/hero/home-hero.jpg",                    // TEMP Unsplash — navy lounge w/ media wall + electric fire
  services: "/images/hero/services-hero.jpg",            // open-plan room, paint + lighting outcome
  portfolio: "/images/hero/portfolio-hero.jpg",          // wide dramatic lounge w/ media wall
  whyChooseUs: "/images/hero/why-choose-us-hero.jpg",    // TEMP Unsplash — decorators rolling colour, moody light
  contact: "/images/hero/contact-hero.jpg",              // welcoming painted porch entrance
  about: "/images/hero/about-hero.jpg",                  // TEMP Unsplash — grey lounge, fireplace + hardwood
} as const;

// Shared founder portrait (about / why-choose-us / contact).
export const founderImage = U("photo-1560250097-0b93528c311a", 600, 85);

// --- Pre-footer CTA band backgrounds: one contextual photo per page ---
// Rendered under a medium dark gradient (0.88→0.58), so the photo reads
// clearly while centered white/orange text stays legible.
export const ctaBackgrounds = {
  // TEMP (2026-07): home + services are Unsplash stand-ins. The previous promo
  // graphics (Bespoke-Media-Wall-Installation.jpg, TV-Media-Wall-Installation.jpg)
  // read as a lake photo / giant logo through the overlay — swap when the client
  // supplies clean landscape project photos.
  home: "/images/hero/home-footer-cta.jpg",                          // TEMP Unsplash — warm lounge, brick fireplace
  services: "/images/hero/services-footer-cta.jpg",                  // TEMP Unsplash — roller mid-coat on wall
  portfolio: "/images/HOME-IMPROVEMENT-AFTER.jpg",                   // strongest wide finished project
  whyChooseUs: "/images/REPAINT-AND-DECORATING-AFTER.jpg",           // craftsmanship finish detail
  contact: "/images/Property-Care-team-at-work.jpg",                 // team at work — direct, approachable
  about: "/images/Light-upgrade-after.jpg",                          // warm lighting finish detail
} as const;

// --- Per-page image maps ---
export const homeImages = {
  hero: heroImages.home,
  about: "/images/Property-Care-team-at-work.jpg", // real team-at-work photo (home "about" band)
  paint: "/images/Painting%20and%20Decorating.jpg",
  electric: "/images/Electrical%20Services.jpg",
  media: "/images/TV-Media-Wall-Installation.jpg",
  maint: "/images/Property-Improvement-and-maintenance.jpg",
  p1: U("photo-1513694203232-719a280e022f", 900),
  p2: U("photo-1484154218962-a197022b5858", 900),
  p3: U("photo-1600607687920-4e2a09cf159d", 900),
  cta: ctaBackgrounds.home,
} as const;

export const servicesImages = {
  hero: heroImages.services,
  paint: "/images/Painting%20and%20Decorating.jpg",
  electric: "/images/Full-Electrical%20Rewiring.jpg",
  maint: "/images/Property-Improvement-and-maintenance.jpg",
  media: "/images/TV-Media-Wall-Installation.jpg",
  cta: ctaBackgrounds.services,
} as const;

/*
  Services "Project Showcase" — portfolio-style cards backed by REAL client
  project photos (replaced the old Unsplash stock showcase, 2026-07).
  An empty `before` renders a static image card; otherwise the card is a
  drag-to-reveal before/after slider, same as the Portfolio grid.
*/
export const servicesShowcase = [
  { tag: "Painting", title: "Interior Painting", before: "/images/Kitchen-Repaint-and-Refresh-before.png", after: "/images/Kitchen-Repaint-and-Refresh-after.png" },
  { tag: "Decorating", title: "Decorating Projects", before: "/images/REPAINT-AND-DECORATING-BEFORE.jpg", after: "/images/REPAINT-AND-DECORATING-AFTER.jpg" },
  { tag: "Electrical", title: "Electrical Installations", before: "/images/Smart-lightin-installation-before.jpg", after: "/images/Smart-lightin-installation-after.jpg" },
  { tag: "Maintenance", title: "Property Maintenance", before: "/images/PROPERTY-MAINTENANCE-BEFORE.jpg", after: "/images/PROPERTY-MAINTENANCE-AFTER.jpg" },
  { tag: "Media Walls", title: "Media Wall Installations", before: "", after: "/images/TV-Media-Wall-Installation.jpg" },
  { tag: "Full Service", title: "Complete Transformations", before: "/images/HOME-IMPROVEMENT-BEFORE.jpg", after: "/images/HOME-IMPROVEMENT-AFTER.jpg" },
] as const;

export const portfolioImages = {
  hero: heroImages.portfolio,
  cta: ctaBackgrounds.portfolio,
} as const;

export const whyChooseUsImages = {
  hero: heroImages.whyChooseUs,
  cta: ctaBackgrounds.whyChooseUs,
  founder: founderImage,
} as const;

export const contactImages = {
  hero: heroImages.contact,
  cta: ctaBackgrounds.contact,
  founder: founderImage,
} as const;

export const aboutImages = {
  hero: heroImages.about,
  cta: ctaBackgrounds.about,
  founder: founderImage,
} as const;

// --- Portfolio project grid ---
/*
  10 images, one per project card. Order maps 1:1 to the project order in
  src/app/portfolio/page.tsx (5 painting · 4 electrical · 1 maintenance).
  Only services with authentic project photography keep a card — placeholder
  cards without real photos were removed per client instruction (2026-07).
*/
export const portfolioProjectImages: readonly string[] = [
  // Painting & Decorating — REAL client "after" photos (indices 0–4)
  "/images/Interior-living-room-Transformation-after.jpg",  // 0 Interior Living Room Transformation — slider ✓
  "/images/Complete-Exterior-Repaint-after.jpg",            // 1 Roof Maintenance — slider ✓
  "/images/REPAINT-AND-DECORATING-AFTER.jpg",               // 2 Repaint and Decorating — REAL ✓ slider
  "/images/Hallway-and-Staircase-Renovation-after.jpeg",    // 3 Wallpaper Removal and Replacement — slider ✓
  "/images/HOME-IMPROVEMENT-AFTER.jpg",                     // 4 Home Improvement — REAL ✓ slider
  // Electrical — REAL client "after" photos (indices 5–7); TEMP category shot (8)
  "/images/Consumer-Unit-Upgrade-after.jpg",                // 5 Consumer Unit Upgrade — slider ✓
  "/images/Smart-lightin-installation-after.jpg",           // 6 Smart Lighting Installation — slider ✓
  "/images/Light-upgrade-after.jpg",                        // 7 Light Upgrade — REAL ✓ slider
  "/images/Full-Electrical%20Rewiring.jpg",                 // 8 Electrical Fault Repair — TEMP
  // Property Maintenance — REAL pair (9)
  "/images/PROPERTY-MAINTENANCE-AFTER.jpg",                 // 9 Property Maintenance / Crack Refilling — REAL ✓ slider
];

/*
  "Before" images paired with portfolioProjectImages above.
  Cards with a non-empty beforeImg render as a drag-to-reveal slider.
  Cards with an empty string ("") render as a single static image.
  Index order matches portfolioProjectImages exactly.
*/
export const portfolioProjectBeforeImages: readonly string[] = [
  // Painting & Decorating — REAL client "before" photos → all 5 cards are sliders
  "/images/Interior-living-room-Transformation-before.jpeg", // 0 Interior Living Room Transformation
  "/images/Complete-Exterior-Repaint-before.jpg",            // 1 Roof Maintenance
  "/images/REPAINT-AND-DECORATING-BEFORE.jpg",               // 2 Repaint and Decorating — REAL ✓
  "/images/Hallway-and-Staircase-Renovation-before.jpg",     // 3 Wallpaper Removal and Replacement
  "/images/HOME-IMPROVEMENT-BEFORE.jpg",                     // 4 Home Improvement — REAL ✓
  // Electrical — REAL client "before" photos for indices 5–7; static for 8
  "/images/Consumer-Unit-Upgrade-before.jpg",                // 5 Consumer Unit Upgrade
  "/images/Smart-lightin-installation-before.jpg",           // 6 Smart Lighting Installation
  "/images/Light-upgrade-before.jpg",                        // 7 Light Upgrade — REAL ✓
  "",                                                        // 8 Electrical Fault Repair — static
  // Property Maintenance — REAL before/after slider
  "/images/PROPERTY-MAINTENANCE-BEFORE.jpg",                 // 9 Property Maintenance / Crack Refilling — REAL ✓
];

// --- Before / after transformations (drag-to-reveal slider) ---
/*
  Real client before/after project photos (committed in /public/images).
  The Portfolio page renders ONE slider per entry below; the home page shows [0].

  TO ADD A FUTURE TRANSFORMATION:
    1. Drop two files in /public/images:  {Name}-before.{ext}  +  {Name}-after.{ext}
    2. Add ONE entry below (caption = the project title).
  Spaces in filenames are %20-encoded; "&" is valid unencoded in a URL path.
*/
export const beforeAfterTransformations: readonly BeforeAfterEntry[] = [
  { beforeImg: "/images/Complete-Exterior-Repaint-before.jpg", afterImg: "/images/Complete-Exterior-Repaint-after.jpg", caption: "Roof Maintenance" },
  { beforeImg: "/images/Consumer-Unit-Upgrade-before.jpg", afterImg: "/images/Consumer-Unit-Upgrade-after.jpg", caption: "Consumer Unit Upgrade" },
  { beforeImg: "/images/Feature-Wall-Design-before.png", afterImg: "/images/Feature-Wall-Design-after.png", caption: "Feature Wall Design" },
  { beforeImg: "/images/Kitchen-Repaint-and-Refresh-before.png", afterImg: "/images/Kitchen-Repaint-and-Refresh-after.png", caption: "Kitchen Repaint & Refresh" },
  { beforeImg: "/images/Smart-lightin-installation-before.jpg", afterImg: "/images/Smart-lightin-installation-after.jpg", caption: "Smart Lighting Installation" },
  { beforeImg: "/images/Hallway-and-Staircase-Renovation-before.jpg", afterImg: "/images/Hallway-and-Staircase-Renovation-after.jpeg", caption: "Hallway & Staircase Renovation" },
  { beforeImg: "/images/Interior-living-room-Transformation-before.jpeg", afterImg: "/images/Interior-living-room-Transformation-after.jpg", caption: "Interior Living Room Transformation" },
];
