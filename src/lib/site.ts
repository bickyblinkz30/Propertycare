/*
  Single source of truth for site content + contact details.
  The homepage is the master prototype — future pages derive content shape from here.
*/

// --- Contact (primary conversion path: WhatsApp → SMS → Call) ---
const RAW_PHONE = "07922909982";
const INTL_PHONE = "447922909982"; // UK, no leading 0, no +

export const contact = {
  display: "07922 909982",
  tel: "+447922909982",
  sms: `sms:+447922909982`,
  whatsapp: `https://wa.me/${INTL_PHONE}?text=${encodeURIComponent(
    "Hi Propertycare, I'd like a quote for a transformation.",
  )}`,
  raw: RAW_PHONE,
  email: "hello@propertycarepe.co.uk", // placeholder — confirm before launch
  primaryArea: "Sunderland",
} as const;

export const brand = {
  name: "Propertycare",
  full: "Propertycare Paints & Electrics",
  tagline: "Premium Property Transformations",
  positioning:
    "The North East's only single-team whole-property transformation specialists.",
} as const;

// --- Services (outcome-led, never task-led) ---
export const services = [
  {
    key: "painting",
    title: "Painting & Decorating",
    outcome:
      "Flawless, hard-wearing finishes that transform how a room feels.",
    cta: "Request a painting estimate",
  },
  {
    key: "electrical",
    title: "Electrical & Lighting",
    outcome:
      "Modern electrical upgrades that improve safety, convenience and ambience.",
    cta: "Speak with an electrician",
  },
  {
    key: "media-walls",
    title: "Media Walls",
    outcome:
      "Bespoke media walls — joinery, fire and integrated electrics in one seamless feature.",
    cta: "Get a media wall quote",
  },
  {
    key: "maintenance",
    title: "Property Maintenance",
    outcome:
      "Reliable, tidy upkeep that protects and elevates your property over time.",
    cta: "Arrange property maintenance",
  },
] as const;

// --- Trust signals ---
export const trustItems = [
  "Fully Insured",
  "Free Quotations",
  "Professional Workmanship",
  "Residential & Commercial",
] as const;

export const accreditations = [
  "NICEIC / Part P",
  "TrustMark",
  "Dulux Select",
  "Public Liability Insured",
  "Written Workmanship Guarantee",
] as const;

// --- Transformations (named, dated case studies — placeholder content) ---
/*
  TODO: Replace with client before/after images.
  Current placeholder URLs point to Unsplash interior photography.
  Swap `placeholderBefore` / `placeholderAfter` with real project photos.
*/
export const transformations = [
  {
    title: "The Concord Media Wall",
    location: "Concord, Washington · NE37",
    year: "2025",
    type: "Living Room",
    scope: "Bespoke media wall · electric fire · integrated lighting · full repaint",
    intro:
      "A dated chimney breast reimagined as a warm, cinematic centrepiece with concealed cabling and ambient light.",
    tone: { from: "#2a2622", to: "#3b3a36" },
    toneAfter: { from: "#16110b", to: "#3a2a17" },
    placeholderBefore: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    placeholderAfter: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
  },
  {
    title: "Sulgrave Townhouse Repaint",
    location: "Sulgrave, Washington · NE37",
    year: "2025",
    type: "Whole Home",
    scope: "Full interior repaint · premium decorative finishes · feature wall",
    intro:
      "Tired magnolia replaced with a calm, contemporary palette and crisp, hard-wearing finishes throughout.",
    tone: { from: "#26241f", to: "#34322c" },
    toneAfter: { from: "#0f1512", to: "#23362b" },
    placeholderBefore: "https://images.unsplash.com/photo-1596008194705-f2b6b8e3f26b?w=800&q=80",
    placeholderAfter: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Seaham Coastal Rewire & Lighting",
    location: "Seaham · SR7",
    year: "2025",
    type: "Period Property",
    scope: "Full rewire · smart lighting · EICR · feature pendant install",
    intro:
      "A coastal period home brought up to modern safety standards with layered, atmospheric lighting.",
    tone: { from: "#222428", to: "#33373d" },
    toneAfter: { from: "#0c1118", to: "#1c2b3a" },
    placeholderBefore: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    placeholderAfter: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  },
] as const;

// --- Why choose us ---
export const whyChooseUs = [
  {
    title: "One Accountable Team",
    body: "Painting, electrical, media walls and maintenance under a single roof — no juggling trades.",
  },
  {
    title: "Certified & Insured",
    body: "NICEIC / Part P registered electrical work and full public liability cover as standard.",
  },
  {
    title: "Written Guarantee",
    body: "Every transformation is backed by a clear, written workmanship guarantee.",
  },
  {
    title: "Premium Finishes",
    body: "Specialist materials and meticulous preparation for finishes that last and impress.",
  },
  {
    title: "Local & Established",
    body: "Rooted in Sunderland and trusted across the North East, with real local references.",
  },
  {
    title: "Transparent Fixed Quotes",
    body: "Itemised, no-surprise pricing agreed up front — and a home left clean and respected.",
  },
] as const;

// --- Branded process ---
export const processSteps = [
  { n: "01", title: "Consult", body: "A free, no-obligation conversation about your space and goals." },
  { n: "02", title: "Design", body: "We shape the finishes, layout and details into a clear vision." },
  { n: "03", title: "Quote", body: "A transparent, itemised fixed quote — no surprises." },
  { n: "04", title: "Transform", body: "One accountable team delivers, tidy and on schedule." },
  { n: "05", title: "Aftercare", body: "Guaranteed workmanship and support long after we leave." },
] as const;

// --- Service areas ---
/*
  Canonical coverage list — the single source of truth for every rendered
  service-area list, the footer, the FAQ copy and the JSON-LD structured data.

  CONFIRM WITH CLIENT: this is the working default while the real coverage list
  is confirmed. It uses the most complete (18-town) version from the original
  homepage. Spelling is standardized to "Houghton-le-Spring" and
  "Chester-le-Street"; marketing copy uses "Newcastle", and only the JSON-LD
  structured data below uses the full place name "Newcastle upon Tyne".
*/
export const primaryArea = "Sunderland";

export const serviceAreas = [
  "Sunderland",
  "Washington",
  "Seaham",
  "South Shields",
  "Gateshead",
  "Newcastle",
  "Durham",
  "Chester-le-Street",
  "Jarrow",
  "Hebburn",
  "Peterlee",
  "Boldon",
  "Cleadon",
  "Whitburn",
  "Ryhope",
  "Fulwell",
  "East Boldon",
  "Houghton-le-Spring",
] as const;

// Everything except the primary area, for grids that render the primary
// area separately as a highlighted header (homepage + contact page).
export const secondaryServiceAreas: readonly string[] = serviceAreas.filter(
  (a) => a !== primaryArea,
);

// Prose form for FAQ answers, e.g. "Sunderland, Washington, … and the wider North East".
export const serviceAreasSentence = `${serviceAreas.join(", ")} and the wider North East`;

// Structured-data (JSON-LD) variant — uses the full legal place name for Newcastle.
export const serviceAreasStructured: readonly string[] = serviceAreas.map((a) =>
  a === "Newcastle" ? "Newcastle upon Tyne" : a,
);

// --- Testimonials (placeholder — replace with verified, attributed reviews) ---
export const testimonials = [
  {
    quote:
      "The media wall completely changed our living room — the finish and the hidden wiring are flawless. Tidy, professional and exactly on quote.",
    name: "Rachel M.",
    detail: "Concord, Washington",
  },
  {
    quote:
      "They repainted the whole house and rewired the kitchen. One team, one point of contact, no stress. The standard of work is genuinely premium.",
    name: "David & Helen T.",
    detail: "Sulgrave, Washington",
  },
  {
    quote:
      "Honest, certified and meticulous. The lighting design transformed how our period home feels in the evenings.",
    name: "Andrew P.",
    detail: "Seaham",
  },
] as const;
