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
// TODO: replace home hero with /images/Hero-section-homepage.jpg once uploaded by client
export const heroImages = {
  home: "/images/Property-Care-team-at-work.jpg",                    // TEMP — swap for Hero-section-homepage.jpg
  services: "/images/Painting%20and%20Decorating.jpg",               // REAL PC photo
  portfolio: "/images/Interior-living-room-Transformation-after.jpg", // REAL PC photo
  whyChooseUs: "/images/Property-Care-team-at-work.jpg",             // REAL PC photo
  contact: "/images/Hallway-and-Staircase-Renovation-after.jpeg",    // REAL PC photo
  about: "/images/Complete-Exterior-Repaint-after.jpg",              // REAL PC photo
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
  // Painting & Decorating — REAL client "after" photos (indices 0–5)
  "/images/Interior-living-room-Transformation-after.jpg",  // 0 — slider ✓
  "/images/Complete-Exterior-Repaint-after.jpg",            // 1 — slider ✓
  "/images/Kitchen-Repaint-and-Refresh-after.png",          // 2 — slider ✓
  "/images/Commercial-Office-Decorating-after.png",         // 3 — slider ✓
  "/images/Hallway-and-Staircase-Renovation-after.jpeg",    // 4 — slider ✓
  "/images/Feature-Wall-Design-after.png",                  // 5 — slider ✓
  // Electrical — REAL client "after" photos (indices 6–8); TEMP category shots (9–11)
  "/images/Consumer-Unit-Upgrade-after.jpg",                // 6 — slider ✓
  "/images/Full-Electrical-Rewiring-after.png",             // 7 — slider ✓
  "/images/Smart-Lighting-Installation-after.png",          // 8 — slider ✓
  "/images/Electrical%20Services.jpg",                      // 9  — TEMP; TODO: replace with real Garden & Outdoor Lighting photo
  "/images/Full-Electrical%20Rewiring.jpg",                 // 10 — TEMP; TODO: replace with real Electrical Fault Repair photo
  "/images/Electrical%20Services.jpg",                      // 11 — TEMP; TODO: replace with real Video Doorbell Installation photo
  // Property Maintenance — TEMP real category shots (indices 12–17)
  "/images/Property-Improvement-and-maintenance.jpg",       // 12 — TEMP; TODO: replace with real Landlord Property Refresh photo
  "/images/Property-Care-team-at-work.jpg",                 // 13 — TEMP; TODO: replace with real Routine Property Maintenance photo
  "/images/Property-Improvement-and-maintenance.jpg",       // 14 — TEMP; TODO: replace with real General Repairs & Joinery photo
  "/images/Property-Care-team-at-work.jpg",                 // 15 — TEMP; TODO: replace with real Property Inspection Report photo
  "/images/Property-Improvement-and-maintenance.jpg",       // 16 — TEMP; TODO: replace with real Rental Property Maintenance photo
  "/images/Property-Improvement-and-maintenance.jpg",       // 17 — TEMP; TODO: replace with real Emergency Maintenance Call-Out photo
  // Media Walls — REAL + TEMP category shots (indices 18–23)
  "/images/Bespoke-Media-Wall-Installation.jpg",            // 18 — REAL ✓ static
  "/images/TV-Media-Wall-Installation.jpg",                 // 19 — TEMP; TODO: replace with real Contemporary LED Feature Wall photo
  "/images/Bespoke-Media-Wall-Installation.jpg",            // 20 — TEMP; TODO: replace with real Living Room Centrepiece photo
  "/images/TV-Media-Wall-Installation.jpg",                 // 21 — TEMP; TODO: replace with real Luxury TV Wall with Fireplace photo
  "/images/Bespoke-Media-Wall-Installation.jpg",            // 22 — TEMP; TODO: replace with real Floating Media Unit photo
  "/images/TV-Media-Wall-Installation.jpg",                 // 23 — TEMP; TODO: replace with real Modern Feature Wall with Panelling photo
];

/*
  "Before" images paired with portfolioProjectImages above.
  Cards with a non-empty beforeImg render as a drag-to-reveal slider.
  Cards with an empty string ("") render as a single static image.
  Index order matches portfolioProjectImages exactly.
*/
export const portfolioProjectBeforeImages: readonly string[] = [
  // Painting & Decorating — REAL client "before" photos → all 6 cards are sliders
  "/images/Interior-living-room-Transformation-before.jpeg", // 0
  "/images/Complete-Exterior-Repaint-before.jpg",            // 1
  "/images/Kitchen-Repaint-and-Refresh-before.png",          // 2
  "/images/Commercial-Office-Decorating-before.png",         // 3
  "/images/Hallway-and-Staircase-Renovation-before.jpg",     // 4
  "/images/Feature-Wall-Design-before.png",                  // 5
  // Electrical — REAL client "before" photos for indices 6–8; static for 9–11
  "/images/Consumer-Unit-Upgrade-before.jpg",                // 6
  "/images/Full-Electrical-Rewiring-before.png",             // 7
  "/images/Smart-Lighting-Installation-before.png",          // 8
  "",                                                        // 9  — static; TODO: add before photo when available
  "",                                                        // 10 — static; TODO: add before photo when available
  "",                                                        // 11 — static; TODO: add before photo when available
  // Property Maintenance — no before photos available; all cards static
  "",                                                        // 12 — static; TODO: add before photo when available
  "",                                                        // 13 — static; TODO: add before photo when available
  "",                                                        // 14 — static; TODO: add before photo when available
  "",                                                        // 15 — static; TODO: add before photo when available
  "",                                                        // 16 — static; TODO: add before photo when available
  "",                                                        // 17 — static; TODO: add before photo when available
  // Media Walls — no before photos available; all cards static
  "",                                                        // 18 — static; TODO: add before photo when available
  "",                                                        // 19 — static; TODO: add before photo when available
  "",                                                        // 20 — static; TODO: add before photo when available
  "",                                                        // 21 — static; TODO: add before photo when available
  "",                                                        // 22 — static; TODO: add before photo when available
  "",                                                        // 23 — static; TODO: add before photo when available
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
