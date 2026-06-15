# Propertycare Paints & Electrics — Design Research & Creative Review Process

**This document is mandatory.**

The agent must complete this review process **before writing production code**.
No implementation should begin until all phases below have been completed and approved.

---

## Mandatory Design Review Gate

Before any code is written, the entire process defined in this document must be completed.

**Implementation is prohibited until all review phases have been completed.**

### Required Workflow

```
Phase 1: Research
   ↓
Phase 2: Competitor Analysis
   ↓
Phase 3: Moodboard Creation
   ↓
Phase 4: Homepage Creative Review
   ↓
Phase 5: Mobile Experience Review
   ↓
Phase 6: Conversion Review
   ↓
Phase 7: Design Scorecard
   ↓
Approval
   ↓
Implementation
```

**Development Lock:** No production code may be written until the Design Review process is completed and approved.

> Research First. Review Second. Design Third. Build Fourth. Optimise Fifth. Launch Last.

---

## Purpose

The goal of this review is to ensure the website achieves a **premium, luxury, transformation-focused** visual identity.

The final result must feel comparable to:

- Premium renovation brands
- Luxury interior design studios
- Architecture firms
- High-end construction companies
- Property transformation specialists

The website must **never** resemble:

- Generic AI-generated websites
- Template websites
- Local handyman websites
- Budget contractor websites
- Directory listing pages

---

## Phase 1: Research

### Objective

Research premium websites and identify design patterns that create trust, luxury, and professionalism.

### Required Research Categories

Use Firecrawl and all available MCP tools. Research a minimum of:

**Luxury Interior Design Studios** — Research: Layouts · Typography · Image presentation · Portfolio presentation

**Premium Renovation Companies** — Research: Service presentation · Lead generation patterns · Conversion strategy

**Luxury Architecture Firms** — Research: Whitespace usage · Typography hierarchy · Brand positioning

**Premium Construction Companies** — Research: Trust indicators · Project showcases · Client journey

**Award-Winning Service Business Websites** — Research: Conversion UX · Trust building · Premium visual patterns

### Extract

- Layout patterns
- Typography systems
- Spacing systems
- Portfolio presentation methods
- Lead generation strategies
- Trust-building techniques
- Premium visual patterns

### Deliverable

Produce a **research summary**. Document:

- Best practices observed
- Common premium patterns
- Common mistakes to avoid

> Apply findings to the Propertycare project. Do not blindly copy any website. Use findings to guide original design decisions.

---

## Phase 2: Competitor Review

Review local competitors serving:

- Sunderland
- Washington
- Seaham
- South Shields
- Gateshead
- Newcastle
- Durham

Identify:

- Visual / Design weaknesses
- UX weaknesses
- SEO weaknesses
- Conversion weaknesses

**Document:** *"What Propertycare can do better."* — a strategy that clearly outperforms competitors.

---

## Phase 3: Moodboard

Create and document a moodboard direction.

### Visual Style

Describe: Atmosphere · Emotional response · Brand personality

### Typography Direction

Evaluate: Headline styles · Body typography · CTA typography.
Explain why the chosen typography (Manrope / Inter / Plus Jakarta Sans) supports premium positioning.

### Colour Strategy

Review and validate the **Primary Palette**:

| Token | Hex | Usage |
| --- | --- | --- |
| Background | `#0A0A0A` | Page background |
| Surface | `#111111` | Sections / raised surfaces |
| Cards | `#181818` | Cards / panels |
| Primary | `#1D8F5A` | Primary actions / CTAs, brand accent |
| Primary Hover | `#29B070` | Hover / active state |
| Accent (metallic) | `#C9A86A` | Brass/champagne luxury accent — hairlines, dividers, "Transformations" labels, eyebrow text |
| Text | `#FFFFFF` | Primary text |
| Muted | `#B3B3B3` | Secondary text |

**Accent usage rule:** green (`#1D8F5A`) owns *action* (buttons, links, active states); brass (`#C9A86A`) owns *prestige* (thin rules, section eyebrows, framing details). Never use brass for primary buttons — it must stay sparing to read as luxury, not gold-kitsch.

Confirm suitability. Explain how the colours reinforce trust and luxury.

### Imagery Direction

**Preferred:** Premium interiors · Luxury living spaces · Modern media walls · Architectural details · High-end finishes.

**Avoid:** Generic stock photography · Tradesman imagery · Construction site clichés.

### Animation Philosophy

Allowed: fade reveals, staggered content reveals, smooth image transitions, elegant hover effects, subtle motion.
Not allowed: excessive parallax, bouncing, distracting or aggressive motion. **Performance always takes priority.**

---

## Phase 4: Homepage Creative Review

Review the homepage wireframe.

### Hero Section — must answer:

- What transformation is being offered?
- Why trust this company?
- How can the user contact them immediately?

### Services Section — must focus on **outcomes, not tasks**:

> Bad: "Electrical installations"
> Better: "Modern electrical upgrades that improve safety, convenience, and appearance"

### Transformations Section (critical)

Review: Before & After layout · Visual hierarchy · Storytelling. Determine whether it feels premium.

### Trust Building

Review placement of: Testimonials · Insurance · Service Areas · Experience · Guarantees.
Trust signals should appear throughout the page.

---

## Phase 5: Mobile Review

Review every section from a mobile-first perspective:

- Can users contact immediately?
- Can users understand services quickly?
- Does the site feel premium on mobile?
- Are CTAs visible without scrolling excessively?
- Would the experience outperform local competitors?

---

## Phase 6: Conversion Review

Evaluate every page. For each section ask: **"Does this section move users closer to contacting the business?"**
If not — redesign it. Every section must support lead generation.

Conversion hierarchy: **WhatsApp → SMS → Phone → Contact Form (optional)**. Floating contact actions must remain visible throughout the journey.

---

## Phase 7: Design Scorecard

Score each category out of 10:

| Category | Score | Minimum |
| --- | --- | --- |
| Visual Design | __/10 | 9 |
| Premium Feel | __/10 | 9 |
| Trustworthiness | __/10 | 9 |
| Conversion Optimisation | __/10 | 9 |
| Mobile Experience | __/10 | 9 |
| Brand Positioning | __/10 | 9 |
| Performance Readiness | __/10 | 9 |

### Approval Threshold

The design must score a **minimum of 9/10 in all categories** before implementation begins.
If any category scores below 9: **refine the design, repeat the review. Do not proceed.**

---

## Final Validation

Before coding, ask:

- Would this website comfortably compete against premium renovation companies charging £20,000+ for projects?
- Would a homeowner trust this company after 10 seconds on the homepage?
- Does this feel custom designed?
- Does this feel premium?
- Does this avoid common AI-generated design patterns?
- Would I proudly use this as a portfolio project?

If any answer is **no** — continue refining. Do not proceed to implementation.

---

## Homepage First Rule

The homepage must be designed, reviewed, refined, and approved before additional pages are built.
The homepage establishes: Visual language · Typography system · Colour system · Motion system · Component patterns · Conversion strategy.
All other pages must inherit from the approved homepage system.

---

## Design Review Deliverables

Before development begins, produce:

1. Research Summary
2. Competitor Analysis
3. Moodboard Direction
4. Typography Review
5. Colour Validation
6. Homepage Review
7. Conversion Review
8. Mobile Review
9. Design Scorecard

**Only after these deliverables are completed and the scorecard is approved may implementation begin.**
