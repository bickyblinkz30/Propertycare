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
  19 images, one per project card. Order maps 1:1 to the project order in
  src/app/portfolio/page.tsx (6 painting · 6 electrical · 7 maintenance).
  The Media Walls category was removed; the "Crack Refilling" card moved into
  Property Maintenance. Real client photos where available; TEMP category shots
  otherwise (see TODOs).
*/
export const portfolioProjectImages: readonly string[] = [
  // Painting & Decorating — REAL client "after" photos (indices 0–5)
  "/images/Interior-living-room-Transformation-after.jpg",  // 0 Interior Living Room Transformation — slider ✓
  "/images/Complete-Exterior-Repaint-after.jpg",            // 1 Roof Maintenance — slider ✓
  "/images/REPAINT-AND-DECORATING-AFTER.jpg",               // 2 Repaint and Decorating — REAL ✓ slider
  "/images/Commercial-Office-Decorating-after.png",         // 3 Commercial Office Decorating — slider ✓
  "/images/Hallway-and-Staircase-Renovation-after.jpeg",    // 4 Wallpaper Removal and Replacement — slider ✓
  "/images/HOME-IMPROVEMENT-AFTER.jpg",                     // 5 Home Improvement — REAL ✓ slider
  // Electrical — REAL client "after" photos (indices 6–8); TEMP category shots (9–11)
  "/images/Consumer-Unit-Upgrade-after.jpg",                // 6 Consumer Unit Upgrade — slider ✓
  "/images/Full-Electrical-Rewiring-after.png",             // 7 Full Electrical Rewiring — slider ✓
  "/images/Smart-Lighting-Installation-after.png",          // 8 Smart Lighting Installation — slider ✓
  "/images/Electrical%20Services.jpg",                      // 9  Light Upgrade — TEMP
  "/images/Full-Electrical%20Rewiring.jpg",                 // 10 Electrical Fault Repair — TEMP
  "/images/Electrical%20Services.jpg",                      // 11 Video Doorbell Installation — TEMP
  // Property Maintenance — TEMP real category shots (12–17); REAL pair (18)
  "/images/Property-Improvement-and-maintenance.jpg",       // 12 Landlord Property Refresh — TEMP
  "/images/Property-Care-team-at-work.jpg",                 // 13 Routine Property Maintenance — TEMP
  "/images/Property-Improvement-and-maintenance.jpg",       // 14 General Repairs & Joinery — TEMP
  "/images/Property-Care-team-at-work.jpg",                 // 15 Property Inspection Report — TEMP
  "/images/Property-Improvement-and-maintenance.jpg",       // 16 Rental Property Maintenance — TEMP
  "/images/Property-Improvement-and-maintenance.jpg",       // 17 Emergency Maintenance Call-Out — TEMP
  "/images/PROPERTY-MAINTENANCE-AFTER.jpg",                 // 18 Property Maintenance / Crack Refilling — REAL ✓ slider
];

/*
  "Before" images paired with portfolioProjectImages above.
  Cards with a non-empty beforeImg render as a drag-to-reveal slider.
  Cards with an empty string ("") render as a single static image.
  Index order matches portfolioProjectImages exactly.
*/
export const portfolioProjectBeforeImages: readonly string[] = [
  // Painting & Decorating — REAL client "before" photos → all 6 cards are sliders
  "/images/Interior-living-room-Transformation-before.jpeg", // 0 Interior Living Room Transformation
  "/images/Complete-Exterior-Repaint-before.jpg",            // 1 Roof Maintenance
  "/images/REPAINT-AND-DECORATING-BEFORE.jpg",               // 2 Repaint and Decorating — REAL ✓
  "/images/Commercial-Office-Decorating-before.png",         // 3 Commercial Office Decorating
  "/images/Hallway-and-Staircase-Renovation-before.jpg",     // 4 Wallpaper Removal and Replacement
  "/images/HOME-IMPROVEMENT-BEFORE.jpg",                     // 5 Home Improvement — REAL ✓
  // Electrical — REAL client "before" photos for indices 6–8; static for 9–11
  "/images/Consumer-Unit-Upgrade-before.jpg",                // 6 Consumer Unit Upgrade
  "/images/Full-Electrical-Rewiring-before.png",             // 7 Full Electrical Rewiring
  "/images/Smart-Lighting-Installation-before.png",          // 8 Smart Lighting Installation
  "",                                                        // 9  Light Upgrade — static
  "",                                                        // 10 Electrical Fault Repair — static
  "",                                                        // 11 Video Doorbell Installation — static
  // Property Maintenance — static for 12–17; REAL before/after slider for 18
  "",                                                        // 12 Landlord Property Refresh — static
  "",                                                        // 13 Routine Property Maintenance — static
  "",                                                        // 14 General Repairs & Joinery — static
  "",                                                        // 15 Property Inspection Report — static
  "",                                                        // 16 Rental Property Maintenance — static
  "",                                                        // 17 Emergency Maintenance Call-Out — static
  "/images/PROPERTY-MAINTENANCE-BEFORE.jpg",                 // 18 Property Maintenance / Crack Refilling — REAL ✓
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
