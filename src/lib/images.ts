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
// (Previously every page shared the same hero photo.)
export const heroImages = {
  home: U("photo-1600585154340-be6161a56a0c", 1920, 88),
  services: U("photo-1600607687939-ce8a6d24cca4", 1920, 88),
  portfolio: U("photo-1618220179428-22790b461013", 1920, 88),
  whyChooseUs: U("photo-1556909114-f6e7ad7d3136", 1920, 88),
  contact: U("photo-1600566753190-17f0baa2a6c3", 1920, 88),
  about: U("photo-1558618666-fcd25c85cd64", 1920, 88),
} as const;

// Shared founder portrait (about / why-choose-us / contact).
export const founderImage = U("photo-1560250097-0b93528c311a", 600, 85);

// Faint, dark-overlaid backdrop behind the final CTA bands.
export const ctaBackground = U("photo-1600566753190-17f0baa2a6c3", 1400, 82);

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
  cta: ctaBackground,
} as const;

export const servicesImages = {
  hero: heroImages.services,
  paint: "/images/Painting%20and%20Decorating.jpg",
  electric: "/images/Full-Electrical%20Rewiring.jpg",
  maint: "/images/Property-Improvement-and-maintenance.jpg",
  media: "/images/TV-Media-Wall-Installation.jpg",
  showcase1: U("photo-1513694203232-719a280e022f", 800, 85),
  showcase2: U("photo-1484154218962-a197022b5858", 800, 85),
  showcase3: U("photo-1600585153490-76fb20a32601", 800, 85),
  showcase4: U("photo-1618220179428-22790b461013", 800, 85),
  showcase5: U("photo-1600566753190-17f0baa2a6c3", 800, 85),
  cta: ctaBackground,
} as const;

export const portfolioImages = {
  hero: heroImages.portfolio,
  cta: ctaBackground,
} as const;

export const whyChooseUsImages = {
  hero: heroImages.whyChooseUs,
  cta: ctaBackground,
  founder: founderImage,
} as const;

export const contactImages = {
  hero: heroImages.contact,
  founder: founderImage,
} as const;

export const aboutImages = {
  hero: heroImages.about,
  founder: founderImage,
} as const;

// --- Portfolio project grid ---
/*
  24 UNIQUE images, one per project card, so no two cards share a photo.
  Sourced entirely from assets already in the repo (in-use Unsplash ids +
  the local before/after placeholders) — nothing invented.
  Order maps 1:1 to the project order in src/app/portfolio/page.tsx
  (6 painting · 6 electrical · 6 maintenance · 6 media walls).
*/
export const portfolioProjectImages: readonly string[] = [
  // Painting & Decorating
  U("photo-1513694203232-719a280e022f", 900, 85),
  U("photo-1484154218962-a197022b5858", 900, 85),
  U("photo-1558618666-fcd25c85cd64", 900, 85),
  U("photo-1600585153490-76fb20a32601", 900, 85),
  U("photo-1600573472550-8090b5e0745e", 900, 85),
  U("photo-1600585154084-4e5fe7c39198", 900, 85),
  // Electrical
  U("photo-1621905251189-08b45d6a269e", 900, 85),
  U("photo-1616137466211-f939a420be84", 900, 85),
  U("photo-1600607687920-4e2a09cf159d", 900, 85),
  U("photo-1600305029164-c3c3d0c5e86e", 900, 85),
  U("photo-1616594039964-ae9021a400a0", 900, 85),
  U("photo-1586023492125-27b2c045efd7", 900, 85),
  // Property Maintenance
  U("photo-1504307651254-35680f356dfd", 900, 85),
  U("photo-1556909114-f6e7ad7d3136", 900, 85),
  "/images/placeholders/after-1.jpg",
  "/images/placeholders/after-2.jpg",
  "/images/placeholders/before-1.jpg",
  "/images/placeholders/before-2.jpg",
  // Media Walls
  "/images/Bespoke-Media-Wall-Installation.jpg", // real photo — Bespoke Media Wall Installation card (single image, no slider)
  U("photo-1618220179428-22790b461013", 900, 85),
  U("photo-1600607687939-ce8a6d24cca4", 900, 85),
  U("photo-1600566753190-17f0baa2a6c3", 900, 85),
  U("photo-1600585154340-be6161a56a0c", 900, 85),
  "/images/placeholders/after-3.jpg",
];

/*
  "Before" images paired with portfolioProjectImages above.
  CONFIRM WITH CLIENT: replace with real site-survey / pre-renovation photos.
  For now these use different Unsplash shots or local placeholder images to
  demonstrate the slider mechanic. Index order matches portfolioProjectImages.
*/
export const portfolioProjectBeforeImages: readonly string[] = [
  // Painting & Decorating — before images (plain/unfinished rooms)
  U("photo-1600566753190-17f0baa2a6c3", 900, 85),
  U("photo-1600573472550-8090b5e0745e", 900, 85),
  U("photo-1484154218962-a197022b5858", 900, 85),
  U("photo-1513694203232-719a280e022f", 900, 85),
  U("photo-1558618666-fcd25c85cd64", 900, 85),
  U("photo-1600585154340-be6161a56a0c", 900, 85),
  // Electrical — before images (dim/dated lighting)
  U("photo-1616137466211-f939a420be84", 900, 85),
  U("photo-1556909114-f6e7ad7d3136", 900, 85),
  U("photo-1586023492125-27b2c045efd7", 900, 85),
  U("photo-1616594039964-ae9021a400a0", 900, 85),
  U("photo-1600607687920-4e2a09cf159d", 900, 85),
  U("photo-1618220179428-22790b461013", 900, 85),
  // Property Maintenance — before images (use real before placeholders)
  "/images/placeholders/before-1.jpg",
  "/images/placeholders/before-2.jpg",
  "/images/placeholders/before-1.jpg",
  "/images/placeholders/before-2.jpg",
  "/images/placeholders/before-1.jpg",
  "/images/placeholders/before-2.jpg",
  // Media Walls — before images (rooms without feature walls)
  U("photo-1504307651254-35680f356dfd", 900, 85),
  U("photo-1600607687939-ce8a6d24cca4", 900, 85),
  U("photo-1593784991095-a205069470b6", 900, 85),
  U("photo-1558618666-fcd25c85cd64", 900, 85),
  U("photo-1600585153490-76fb20a32601", 900, 85),
  "/images/placeholders/before-1.jpg",
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
  { beforeImg: "/images/Commercial-Office-Decorating-before.png", afterImg: "/images/Commercial-Office-Decorating-after.png", caption: "Commercial Office Decorating" },
  { beforeImg: "/images/Complete-Exterior-Repaint-before.jpg", afterImg: "/images/Complete-Exterior-Repaint-after.jpg", caption: "Complete Exterior Repaint" },
  { beforeImg: "/images/Consumer-Unit-Upgrade-before.jpg", afterImg: "/images/Consumer-Unit-Upgrade-after.jpg", caption: "Consumer Unit Upgrade" },
  { beforeImg: "/images/Feature-Wall-Design-before.png", afterImg: "/images/Feature-Wall-Design-after.png", caption: "Feature Wall Design" },
  { beforeImg: "/images/Full-Electrical-Rewiring-before.png", afterImg: "/images/Full-Electrical-Rewiring-after.png", caption: "Full Electrical Rewiring" },
  { beforeImg: "/images/Kitchen-Repaint-and-Refresh-before.png", afterImg: "/images/Kitchen-Repaint-and-Refresh-after.png", caption: "Kitchen Repaint & Refresh" },
  { beforeImg: "/images/Smart-Lighting-Installation-before.png", afterImg: "/images/Smart-Lighting-Installation-after.png", caption: "Smart Lighting Installation" },
  { beforeImg: "/images/Hallway-and-Staircase-Renovation-before.jpg", afterImg: "/images/Hallway-and-Staircase-Renovation-after.jpeg", caption: "Hallway & Staircase Renovation" },
  { beforeImg: "/images/Interior-living-room-Transformation-before.jpeg", afterImg: "/images/Interior-living-room-Transformation-after.jpg", caption: "Interior Living Room Transformation" },
];
