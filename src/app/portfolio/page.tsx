"use client";
import React from "react";
import Nav from "../components/Nav";
import FloatingContacts from "../components/FloatingContacts";
import ScrollReveal from "../components/ScrollReveal";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import FooterLinks from "../components/FooterLinks";
import { motion } from "framer-motion";

const WA = "https://wa.me/447922909982?text=Hi%20Property%20Care%2C%20I%27d%20like%20a%20free%20quote.";

// TODO: Replace with client-supplied images
const IMG = {
  hero:  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=88&auto=format&fit=crop",
  p1:    "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=85&auto=format&fit=crop",
  p2:    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=85&auto=format&fit=crop",
  p3:    "https://images.unsplash.com/photo-1600607687939-ce8a6d24cca4?w=900&q=85&auto=format&fit=crop",
  p4:    "https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=85&auto=format&fit=crop",
  p5:    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=85&auto=format&fit=crop",
  p6:    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop",
  p7:    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=85&auto=format&fit=crop",
  p8:    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85&auto=format&fit=crop",
  p9:    "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=900&q=85&auto=format&fit=crop",
  p10:   "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=85&auto=format&fit=crop",
  p11:   "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=900&q=85&auto=format&fit=crop",
  p12:   "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=900&q=85&auto=format&fit=crop",
  p13:   "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=85&auto=format&fit=crop",
  p14:   "https://images.unsplash.com/photo-1600305029164-c3c3d0c5e86e?w=900&q=85&auto=format&fit=crop",
  p15:   "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=900&q=85&auto=format&fit=crop",
  p16:   "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85&auto=format&fit=crop",
  cta:   "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=82&auto=format&fit=crop",
};

function OrangeTab({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, justifyContent: center ? "center" : "flex-start" }}>
      <span style={{ display: "block", width: 36, height: 3, background: "#F58220", flexShrink: 0 }} />
      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#F58220" }}>
        {children}
      </span>
      {center && <span style={{ display: "block", width: 36, height: 3, background: "#F58220", flexShrink: 0 }} />}
    </div>
  );
}

function StarRating({ filled = 5 }: { filled?: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i <= filled ? "#F58220" : "#E8E2D9"}>
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  );
}

const ALL_PROJECTS = [
  // Painting & Decorating (6)
  { title: "Interior Living Room Transformation", cat: "Painting & Decorating", img: IMG.p1, desc: "Complete living room repaint with feature wall and premium decorative finishes.", loc: "Sunderland" },
  { title: "Complete Exterior Repaint", cat: "Painting & Decorating", img: IMG.p2, desc: "Full exterior repaint including woodwork, soffits and masonry for a period property.", loc: "Washington" },
  { title: "Kitchen Repaint & Refresh", cat: "Painting & Decorating", img: IMG.p7, desc: "Kitchen cabinet repaint, wall preparation and durable satinwood finish throughout.", loc: "Durham" },
  { title: "Commercial Office Decorating", cat: "Painting & Decorating", img: IMG.p11, desc: "Full office interior redecorated with hard-wearing matt emulsion and satinwood trim.", loc: "Newcastle" },
  { title: "Hallway & Staircase Renovation", cat: "Painting & Decorating", img: IMG.p12, desc: "Transformed a narrow hallway with feature wall, dado rail and fresh neutral palette.", loc: "Sunderland" },
  { title: "Feature Wall Design", cat: "Painting & Decorating", img: IMG.p9, desc: "Bespoke accent wall with geometric paint effect and complementary colour scheme.", loc: "Gateshead" },
  // Electrical (6)
  { title: "Consumer Unit Upgrade", cat: "Electrical", img: IMG.p3, desc: "Modern consumer unit installation with full EICR certification and smart RCD protection.", loc: "Seaham" },
  { title: "Full Electrical Rewiring", cat: "Electrical", img: IMG.p6, desc: "Complete rewiring of a three-bedroom home with smart lighting and new consumer unit.", loc: "Newcastle" },
  { title: "Smart Lighting Installation", cat: "Electrical", img: IMG.p13, desc: "Integrated smart lighting system with dimmable zones, motion sensors and app control.", loc: "Sunderland" },
  { title: "Garden & Outdoor Lighting", cat: "Electrical", img: IMG.p14, desc: "Low-voltage garden lighting with IP-rated fittings, deck lights and feature spotlights.", loc: "Durham" },
  { title: "Electrical Fault Repair", cat: "Electrical", img: IMG.p10, desc: "Diagnosed and repaired intermittent power fault, replaced damaged wiring and tested circuits.", loc: "South Shields" },
  { title: "Video Doorbell Installation", cat: "Electrical", img: IMG.p15, desc: "Hardwired video doorbell with chime kit, transformer upgrade and WiFi configuration.", loc: "Washington" },
  // Property Maintenance (6)
  { title: "Landlord Property Refresh", cat: "Property Maintenance", img: IMG.p5, desc: "Full tenant changeover refresh including repaint, minor repairs and electrical safety check.", loc: "Gateshead" },
  { title: "Routine Property Maintenance", cat: "Property Maintenance", img: IMG.p8, desc: "Annual maintenance check including gutter clearance, sealant refresh and minor joinery repairs.", loc: "South Shields" },
  { title: "General Repairs & Joinery", cat: "Property Maintenance", img: IMG.p16, desc: "Door adjustments, skirting replacement, sash cord repair and general joinery throughout.", loc: "Sunderland" },
  { title: "Property Inspection Report", cat: "Property Maintenance", img: IMG.p11, desc: "Comprehensive property condition inspection with photographic evidence and priority actions.", loc: "Newcastle" },
  { title: "Rental Property Maintenance", cat: "Property Maintenance", img: IMG.p2, desc: "Ongoing maintenance contract for HMO property including gas, electrical and fabric checks.", loc: "Sunderland" },
  { title: "Emergency Maintenance Call-Out", cat: "Property Maintenance", img: IMG.p8, desc: "Emergency call-out for burst pipe isolation, electrical fault and temporary board-up.", loc: "Seaham" },
  // Media Walls (6)
  { title: "Bespoke Media Wall Installation", cat: "Media Walls", img: IMG.p4, desc: "Custom media wall with electric fire, concealed cabling and integrated ambient lighting.", loc: "Sunderland" },
  { title: "Contemporary LED Feature Wall", cat: "Media Walls", img: IMG.p9, desc: "Modern LED-backlit media wall with floating shelves, downlighters and hidden cable system.", loc: "Washington" },
  { title: "Living Room Centrepiece", cat: "Media Walls", img: IMG.p13, desc: "Full-width media wall as the room centrepiece with stone-effect cladding and TV recess.", loc: "Gateshead" },
  { title: "Luxury TV Wall with Fireplace", cat: "Media Walls", img: IMG.p14, desc: "Premium media wall with inset electric fire, oak shelving and colour-changing LED strips.", loc: "Durham" },
  { title: "Floating Media Unit", cat: "Media Walls", img: IMG.p10, desc: "Floating wall-mounted media unit with concealed storage, cable management and LED glow.", loc: "Newcastle" },
  { title: "Modern Feature Wall with Panelling", cat: "Media Walls", img: IMG.p15, desc: "Media wall with decorative panelling, picture light and integrated soundbar recess.", loc: "Sunderland" },
];

const CATEGORIES = ["All Projects", "Painting & Decorating", "Electrical", "Property Maintenance", "Media Walls"];

export default function Portfolio() {
  const [activeCat, setActiveCat] = React.useState("All Projects");

  const filtered = activeCat === "All Projects"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.cat === activeCat);

  return (
    <>
      <Nav />
      <ScrollReveal />
      <FloatingContacts />
      <main id="top">

        {/* ══════════════════════════════════════
            HERO
        ══════════════════════════════════════ */}
        <section style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#0A0908" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG.hero} alt="Property transformation portfolio" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", opacity: 0.4 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,9,8,0.95) 0%, rgba(10,9,8,0.7) 50%, rgba(10,9,8,0.3) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,9,8,0.98) 0%, rgba(10,9,8,0.4) 40%, transparent 70%)" }} />
          <div style={{ position: "relative", zIndex: 2, padding: "140px 52px", maxWidth: 920, width: "100%" }}>
            <div className="h-a1" style={{ marginBottom: 32 }}>
              <OrangeTab>Our Work</OrangeTab>
            </div>
            <h1 className="h-a2" style={{
              fontSize: "clamp(54px, 8.5vw, 112px)",
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: "-0.025em", color: "#fff",
              marginBottom: 28, textTransform: "uppercase",
            }}>
              Our Recent<br />
              <span style={{ color: "#F58220" }}>Projects</span>
            </h1>
            <p className="h-a3" style={{
              fontSize: "clamp(18px, 1.8vw, 22px)",
              fontWeight: 500, color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65, maxWidth: 640, marginBottom: 44,
            }}>
              Take a look at some of the painting, decorating, electrical, maintenance and media wall projects completed by Property Care Paint &amp; Electrics.
            </p>
            <div className="h-a4" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#projects" className="btn-orange">
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  View Projects
                </span>
              </a>
              <a href="#contact" className="btn-outline-light">Get Free Quote</a>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "#F58220" }} />
        </section>

        {/* ══════════════════════════════════════
            INTRO
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 28 }}>
              <OrangeTab center>Our Standards</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Quality Workmanship<br /><span style={{ color: "#F58220" }}>You Can See</span>
              </h2>
            </div>
            <div className="rv rv-d2" style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
              <p style={{ fontSize: 18, color: "#3D3A37", lineHeight: 1.8, fontWeight: 400 }}>
                We take pride in every project we complete. From interior decorating and electrical upgrades to complete property improvements, our work is carried out with care, precision and attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PROJECT GRID WITH CATEGORY FILTERS
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }} id="projects">
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 48 }}>
              <OrangeTab center>Browse Our Work</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                  Featured<br /><span style={{ color: "#F58220" }}>Projects</span>
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="rv rv-d1" style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 52 }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  style={{
                    padding: "12px 24px", fontSize: 12, fontWeight: 700,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    border: activeCat === cat ? "2px solid #F58220" : "2px solid #E8E2D9",
                    background: activeCat === cat ? "#F58220" : "transparent",
                    color: activeCat === cat ? "#fff" : "#0A0908",
                    borderRadius: 4, cursor: "pointer",
                    transition: "background 0.3s, color 0.3s, border-color 0.3s, transform 0.3s",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Project grid */}
            <div key={activeCat} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="grid-3">
              {filtered.map((project) => (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={project.title}
                  className="port-card"
                  style={{ height: 400 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.img} alt={project.title} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,9,8,0.95) 0%, transparent 60%)", padding: 28, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", background: "#F58220", padding: "5px 11px", borderRadius: 2, marginBottom: 12 }}>
                      <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>{project.cat}</span>
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 6, letterSpacing: "-0.01em" }}>{project.title}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginBottom: 8, fontWeight: 500, letterSpacing: "0.04em" }}>{project.loc}</div>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.55, fontWeight: 400 }}>{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="rv" style={{ textAlign: "center", padding: "60px 20px", color: "#9E9488" }}>
                <p style={{ fontSize: 16, fontWeight: 600 }}>No projects in this category yet.</p>
                <p style={{ fontSize: 13, marginTop: 8 }}>Client project images coming soon.</p>
              </div>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════════
            BEFORE & AFTER
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }} id="before-after">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-2">
              <div>
                <div className="rv"><OrangeTab>Real Results</OrangeTab></div>
                <h2 className="rv rv-d1" style={{
                  fontSize: "clamp(40px, 5vw, 64px)",
                  fontWeight: 900, lineHeight: 1.05,
                  letterSpacing: "-0.02em", color: "#0A0908", marginBottom: 24,
                  textTransform: "uppercase",
                }}>
                  See The<br />
                  <span style={{ color: "#F58220" }}>Difference</span>
                </h2>
                <p className="rv rv-d2" style={{ fontSize: 16, color: "#3D3A37", lineHeight: 1.7, maxWidth: 420, marginBottom: 28, fontWeight: 400 }}>
                  Slide left and right to compare. Every project is documented, dated and backed by our written workmanship guarantee.
                </p>
                <div className="rv rv-d3" style={{ marginBottom: 32, padding: "20px 24px", background: "#F8F5F0", borderLeft: "4px solid #F58220", borderRadius: 4 }}>
                  <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F58220", marginBottom: 6 }}>
                    Featured Project
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#0A0908", letterSpacing: "-0.01em" }}>
                    Chimney Breast to Cinematic Centrepiece
                  </div>
                  <p style={{ fontSize: 13, color: "#6B6460", marginTop: 6, fontWeight: 400 }}>
                    Before and after: a dated chimney breast transformed into a modern media wall.
                  </p>
                </div>
                <div className="rv rv-d4">
                  <a href="#contact" className="btn-orange"><span>Request Similar</span></a>
                </div>
              </div>
              <div className="rv rv-d1">
                {/* TODO: Replace with client before/after images */}
                <BeforeAfterSlider />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PROJECT STATS
        ══════════════════════════════════════ */}
        <section style={{ padding: "100px 52px", background: "#0A0908", borderTop: "4px solid #F58220", borderBottom: "4px solid #F58220" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
              <OrangeTab center>By The Numbers</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#fff",
                textTransform: "uppercase",
              }}>
                Our Commitment<br /><span style={{ color: "#F58220" }}>By The Numbers</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }} className="grid-3">
              {[
                { n: "100%", l: "Customer Focused", d: "Every project is built around your needs and expectations." },
                { n: "Both", l: "Residential & Commercial", d: "Experienced in homes and business premises alike." },
                { n: "Free", l: "Quotations", d: "No-obligation quotes with transparent, itemised pricing." },
                { n: "Premium", l: "Quality Workmanship", d: "Meticulous preparation and premium materials on every job." },
                { n: "100%", l: "Fully Insured", d: "Full public liability insurance for complete peace of mind." },
                { n: "Fast", l: "Response", d: "Quick replies — we typically respond within the hour." },
              ].map(({ n, l, d }, i) => (
                <div key={l} className={`rv rv-d${(i % 3) + 1}`} style={{ background: "rgba(248,245,240,0.025)", padding: "44px 32px", textAlign: "center" }}>
                  <div style={{ fontSize: 48, fontWeight: 900, color: "#F58220", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 10 }}>{n}</div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.01em" }}>{l}</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, fontWeight: 400 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            TESTIMONIALS
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 64 }}>
              <OrangeTab center>Client Feedback</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(40px, 4.8vw, 64px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                What Our Clients<br /><span style={{ color: "#F58220" }}>Say About Us</span>
              </h2>
              <p className="rv rv-d2" style={{ fontSize: 13, color: "#9E9488", marginTop: 16, letterSpacing: "0.06em", fontWeight: 500 }}>
                Client testimonials coming soon.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="grid-3">
              {[
                { q: "Excellent workmanship from start to finish. Professional, reliable and very tidy. The team transformed our living room beyond what we imagined.", name: "Sarah M.", loc: "Sunderland", d: 1 },
                { q: "Highly recommended. The decorating work exceeded expectations — clean lines, perfect finish and left everything spotless. Will use again.", name: "James T.", loc: "Washington", d: 2 },
                { q: "Had a full rewire and media wall installed. One team, one point of contact, no hassle. The quality speaks for itself.", name: "Lisa P.", loc: "Seaham", d: 3 },
              ].map(({ q, name, loc, d }) => (
                <div key={name} className={`testi-card rv rv-d${d}`} style={{ background: "#F8F5F0", border: "2px solid #E8E2D9", padding: "36px 32px", position: "relative", borderRadius: 4 }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: 60, height: 4, background: "#F58220" }} />
                  <StarRating />
                  <p style={{ fontSize: 15, fontWeight: 400, color: "#1A1917", lineHeight: 1.7, marginTop: 16, marginBottom: 24 }}>
                    &ldquo;{q}&rdquo;
                  </p>
                  <div style={{ borderTop: "1px solid #E8E2D9", paddingTop: 16 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 2, color: "#0A0908", letterSpacing: "-0.01em" }}>{name}</div>
                    <div style={{ fontSize: 11, color: "#F58220", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>{loc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FINAL CTA
        ══════════════════════════════════════ */}
        <section style={{ position: "relative", overflow: "hidden" }} id="contact">
          {/* TODO: Replace with client-supplied images */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG.cta} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,9,8,0.97) 0%, rgba(10,9,8,0.92) 50%, rgba(10,9,8,0.85) 100%)" }} />

          <div style={{ position: "relative", zIndex: 1, padding: "120px 52px", textAlign: "center" }}>
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <div className="rv"><OrangeTab center>Start Your Project</OrangeTab></div>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(48px, 6.5vw, 84px)",
                fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.025em",
                color: "#fff", marginBottom: 24, textTransform: "uppercase",
              }}>
                Ready To Start<br /><span style={{ color: "#F58220" }}>Your Project?</span>
              </h2>
              <p className="rv rv-d2" style={{
                fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.8)",
                lineHeight: 1.7, maxWidth: 540, margin: "0 auto 52px",
              }}>
                Contact Property Care Paint &amp; Electrics today for a free quotation.
              </p>

              <div className="rv rv-d3" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
                <a href={WA} style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  background: "#25D366", color: "#fff", textDecoration: "none",
                  padding: "20px 38px", fontSize: 14, fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 4,
                  boxShadow: "0 10px 32px rgba(37,211,102,0.4)",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Get Free Quote
                </a>
                <a href="tel:+447922909982" className="btn-outline-light">Call 07922 909982</a>
              </div>

              <p className="rv rv-d5" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 28, letterSpacing: "0.08em", fontWeight: 500 }}>
                Takes 2 minutes · No obligation · Free, no-pressure survey
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FOOTER
        ══════════════════════════════════════ */}
        <footer style={{ background: "#0A0908", padding: "80px 52px 36px", borderTop: "4px solid #F58220" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 56, marginBottom: 60 }} className="footer-grid">
              <div>
                <div style={{ background: "#fff", padding: 16, borderRadius: 6, display: "inline-block", marginBottom: 24 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/propertycare-logo.jpg" alt="Property Care Paint & Electrics" style={{ height: 90, width: "auto", display: "block" }} />
                </div>
                <p style={{ fontSize: 14, color: "#C9C0B4", lineHeight: 1.7, maxWidth: 320, marginBottom: 24, fontWeight: 400 }}>
                  The North East&apos;s premium single-team property transformation specialists. Sunderland and surrounding areas. Residential &amp; commercial.
                </p>
                <a href="tel:+447922909982" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 14, background: "rgba(245,130,32,0.1)", border: "1px solid rgba(245,130,32,0.3)", padding: "14px 20px", borderRadius: 4, marginBottom: 24 }}>
                  <div style={{ width: 36, height: 36, background: "#F58220", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#F58220", fontWeight: 700, marginBottom: 2 }}>Call us free</div>
                    <div style={{ fontSize: 19, fontWeight: 800, color: "#fff", letterSpacing: "0.02em", lineHeight: 1 }}>07922 909982</div>
                  </div>
                </a>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {["NICEIC", "Part P", "Insured", "Guaranteed"].map((c) => (
                    <span key={c} style={{ background: "rgba(245,130,32,0.08)", border: "1px solid rgba(245,130,32,0.25)", padding: "4px 10px", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F58220", borderRadius: 2, fontWeight: 700 }}>{c}</span>
                  ))}
                </div>
              </div>
              <FooterLinks />
            </div>

            <div style={{ height: 1, background: "linear-gradient(to right, rgba(245,130,32,0.4), rgba(245,130,32,0.12), transparent)", marginBottom: 28 }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em", flexWrap: "wrap", gap: 10, fontWeight: 500 }}>
              <span>© 2025 Property Care Paint &amp; Electrics. Fully insured · NICEIC / Part P · Written guarantee.</span>
              <span>Premium property transformations across the North East.</span>
            </div>
          </div>

          <style>{`
            @media (max-width: 1100px) {
              .footer-grid { grid-template-columns: 1fr 1fr !important; }
              footer { padding: 60px 24px 32px !important; }
            }
            @media (max-width: 700px) {
              .footer-grid { grid-template-columns: 1fr !important; }
              .grid-2 { grid-template-columns: 1fr !important; gap: 48px !important; }
              .grid-3 { grid-template-columns: 1fr !important; }
              section { padding-left: 20px !important; padding-right: 20px !important; }
              h1, h2 { font-size: 32px !important; }
            }
          `}</style>
        </footer>

      </main>
    </>
  );
}
