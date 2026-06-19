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
  about: U("photo-1556909114-f6e7ad7d3136", 960),
  paint: U("photo-1558618666-fcd25c85cd64", 800),
  electric: U("photo-1621905251189-08b45d6a269e", 800),
  media: U("photo-1593784991095-a205069470b6", 800),
  maint: U("photo-1504307651254-35680f356dfd", 800),
  p1: U("photo-1513694203232-719a280e022f", 900),
  p2: U("photo-1484154218962-a197022b5858", 900),
  p3: U("photo-1600607687920-4e2a09cf159d", 900),
  cta: ctaBackground,
} as const;

export const servicesImages = {
  hero: heroImages.services,
  paint: U("photo-1558618666-fcd25c85cd64", 900, 85),
  electric: U("photo-1621905251189-08b45d6a269e", 900, 85),
  maint: U("photo-1504307651254-35680f356dfd", 900, 85),
  media: U("photo-1593784991095-a205069470b6", 900, 85),
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
  U("photo-1593784991095-a205069470b6", 900, 85),
  U("photo-1618220179428-22790b461013", 900, 85),
  U("photo-1600607687939-ce8a6d24cca4", 900, 85),
  U("photo-1600566753190-17f0baa2a6c3", 900, 85),
  U("photo-1600585154340-be6161a56a0c", 900, 85),
  "/images/placeholders/after-3.jpg",
];

// --- Before / after transformations (drag-to-reveal slider) ---
/*
  Local placeholders live in /public/images/placeholders/.
  NOTE: only two distinct "before" placeholders exist (before-1, before-2) but
  three "after" images, so the third entry reuses before-1. Supply a real
  before/after photo per project to remove the reuse.
*/
export const beforeAfterTransformations: readonly BeforeAfterEntry[] = [
  {
    beforeImg: "/images/placeholders/before-1.jpg",
    afterImg: "/images/placeholders/after-1.jpg",
    caption: "Chimney Breast to Cinematic Centrepiece",
    location: "Washington · 2025",
  },
  {
    beforeImg: "/images/placeholders/before-2.jpg",
    afterImg: "/images/placeholders/after-2.jpg",
    caption: "Tired Living Room to Modern Repaint",
    location: "Sunderland · 2025",
  },
  {
    beforeImg: "/images/placeholders/before-1.jpg",
    afterImg: "/images/placeholders/after-3.jpg",
    caption: "Period Home Lighting Transformation",
    location: "Seaham · 2025",
  },
];
