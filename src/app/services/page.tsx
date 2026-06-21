"use client";
import React from "react";
import Nav from "../components/Nav";
import FloatingContacts from "../components/FloatingContacts";
import ScrollReveal from "../components/ScrollReveal";
import FooterLinks from "../components/FooterLinks";
import { servicesImages as IMG } from "@/lib/images";

const WA = "https://wa.me/447922909982?text=Hi%20Property%20Care%2C%20I%27d%20like%20a%20free%20quote.";

function OrangeTab({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, justifyContent: center ? "center" : "flex-start" }}>
      <span style={{ display: "block", width: 36, height: 3, background: "var(--color-accent)", flexShrink: 0 }} />
      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-accent)" }}>
        {children}
      </span>
      {center && <span style={{ display: "block", width: 36, height: 3, background: "var(--color-accent)", flexShrink: 0 }} />}
    </div>
  );
}

function CheckIcon({ size = 16, color = "var(--color-accent)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: "1px solid #E8E2D9" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "22px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left",
          fontSize: 16, fontWeight: 700, color: "#0A0908", letterSpacing: "-0.01em", lineHeight: 1.4,
        }}
      >
        <span>{question}</span>
        <span style={{
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
          fontSize: 22, fontWeight: 300, color: "var(--color-accent)", flexShrink: 0, marginLeft: 16,
        }}>
          +
        </span>
      </button>
      <div style={{
        overflow: "hidden",
        maxHeight: open ? 300 : 0,
        opacity: open ? 1 : 0,
        transition: "max-height 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease",
      }}>
        <p style={{ fontSize: 15, color: "#6B6460", lineHeight: 1.75, paddingBottom: 22, fontWeight: 400 }}>{answer}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const faqs = [
    { q: "Do you cover both interior and exterior work?", a: "Yes. We carry out interior and exterior painting and decorating — from single rooms, feature walls and woodwork to full repaints and exterior masonry." },
    { q: "Do you work on residential and commercial properties?", a: "Yes. We provide services for both residential homeowners and commercial clients across Sunderland and the surrounding areas." },
    { q: "Do you provide landlord maintenance services?", a: "Yes. We offer dedicated landlord maintenance including routine inspections, tenant changeover refreshes and reactive repairs." },
    { q: "Do you install media walls?", a: "Yes. We design and install bespoke media walls with integrated electric fire, concealed cabling, joinery and ambient lighting." },
    { q: "Can I book multiple services together?", a: "Yes. Booking painting, electrical and maintenance together means one team, one point of contact and a coordinated schedule." },
    { q: "How long does a typical project take?", a: "It depends on scope — a single-room repaint can take a few days, while a media wall or full transformation runs longer. Your fixed quote sets out a clear timeline up front." },
  ];

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
          <img src={IMG.hero} alt="Professional property services" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", opacity: 0.4 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.86) 45%, rgba(10,10,10,0.55) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.99) 0%, rgba(10,10,10,0.55) 45%, transparent 78%)" }} />
          <div style={{ position: "relative", zIndex: 2, padding: "140px 52px", maxWidth: 920, width: "100%" }}>
            <div className="h-a1" style={{ marginBottom: 32 }}>
              <OrangeTab>Property Care Paint &amp; Electrics</OrangeTab>
            </div>
            <h1 className="h-a2" style={{
              fontSize: "clamp(54px, 8.5vw, 112px)",
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: "-0.025em", color: "#fff",
              marginBottom: 28, textTransform: "uppercase",
            }}>
              Our Professional<br />
              <span style={{ color: "var(--color-accent)" }}>Services</span>
            </h1>
            <p className="h-a3" style={{
              fontSize: "clamp(18px, 1.8vw, 22px)",
              fontWeight: 500, color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65, maxWidth: 640, marginBottom: 44,
            }}>
              Reliable painting, decorating, electrical and property maintenance services for residential and commercial clients throughout Sunderland and the surrounding areas.
            </p>
            <div className="h-a4" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#contact" className="btn-orange">
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Get Free Quote
                </span>
              </a>
              <a href="tel:+447922909982" className="btn-outline-light">Call Now</a>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "var(--color-accent)" }} />
        </section>

        {/* ══════════════════════════════════════
            SERVICES OVERVIEW
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 28 }}>
              <OrangeTab center>What We Offer</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Complete Property Services<br /><span style={{ color: "var(--color-accent)" }}>Under One Roof</span>
              </h2>
            </div>
            <div className="rv rv-d2" style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
              <p style={{ fontSize: 18, color: "#3D3A37", lineHeight: 1.8, fontWeight: 400 }}>
                Whether you need professional decorating, electrical installations, property maintenance or a custom media wall installation, Property Care Paint &amp; Electrics delivers reliable workmanship with attention to detail and customer satisfaction at the heart of every project.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PAINTING & DECORATING
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }} id="painting">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="grid-2">
              {/* TODO: Replace with client-supplied images */}
              <div className="rv rv-d1" style={{ borderRadius: 4, overflow: "hidden", boxShadow: "0 20px 60px rgba(10,9,8,0.12)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG.paint} alt="Professional painting and decorating" style={{ width: "100%", height: 480, objectFit: "cover", display: "block" }} />
              </div>
              <div>
                <div className="rv"><OrangeTab>Service 01</OrangeTab></div>
                <h2 className="rv rv-d1" style={{
                  fontSize: "clamp(36px, 4.5vw, 56px)",
                  fontWeight: 900, lineHeight: 1.05,
                  letterSpacing: "-0.02em", color: "#0A0908",
                  textTransform: "uppercase", marginBottom: 20,
                }}>
                  Painting &amp;<br /><span style={{ color: "var(--color-accent)" }}>Decorating</span>
                </h2>
                <p className="rv rv-d2" style={{ fontSize: 16, color: "#3D3A37", lineHeight: 1.75, marginBottom: 28, fontWeight: 400 }}>
                  Transform your home or business with professional painting and decorating services delivered to the highest standards. From a single room refresh to a full property transformation.
                </p>
                <ul className="rv rv-d3" style={{ listStyle: "none", marginBottom: 32 }}>
                  {["Interior Painting", "Exterior Painting", "Wall & Ceiling Repairs", "Woodwork Painting", "Commercial Decorating", "Wallpapering"].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <CheckIcon size={18} />
                      <span style={{ fontSize: 15, color: "#3D3A37", fontWeight: 600 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rv rv-d4">
                  <a href="#contact" className="btn-orange"><span>Request A Quote</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            ELECTRICAL SERVICES
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }} id="electrical">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="grid-2">
              <div className="rv rv-d1" style={{ order: 2 }}>
                {/* TODO: Replace with client-supplied images */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG.electric} alt="Electrical installations and lighting" style={{ width: "100%", height: 480, objectFit: "cover", display: "block", borderRadius: 4, boxShadow: "0 20px 60px rgba(10,9,8,0.12)" }} />
              </div>
              <div style={{ order: 1 }}>
                <div className="rv"><OrangeTab>Service 02</OrangeTab></div>
                <h2 className="rv rv-d1" style={{
                  fontSize: "clamp(36px, 4.5vw, 56px)",
                  fontWeight: 900, lineHeight: 1.05,
                  letterSpacing: "-0.02em", color: "#0A0908",
                  textTransform: "uppercase", marginBottom: 20,
                }}>
                  Electrical<br /><span style={{ color: "var(--color-accent)" }}>Services</span>
                </h2>
                <p className="rv rv-d2" style={{ fontSize: 16, color: "#3D3A37", lineHeight: 1.75, marginBottom: 28, fontWeight: 400 }}>
                  Safe, reliable electrical solutions for homes and commercial properties. All work is NICEIC / Part P certified and backed by a written guarantee.
                </p>
                <ul className="rv rv-d3" style={{ listStyle: "none", marginBottom: 32 }}>
                  {["Electrical Installations", "Smart Lighting Upgrades", "Socket & Switch Replacements", "Fault Finding & Repairs", "Consumer Unit Upgrades", "Safety Inspections", "Video Doorbell Installation"].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <CheckIcon size={18} />
                      <span style={{ fontSize: 15, color: "#3D3A37", fontWeight: 600 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rv rv-d4">
                  <a href="#contact" className="btn-orange"><span>Book Electrical Service</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PROPERTY MAINTENANCE
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }} id="maintenance">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="grid-2">
              {/* TODO: Replace with client-supplied images */}
              <div className="rv rv-d1" style={{ borderRadius: 4, overflow: "hidden", boxShadow: "0 20px 60px rgba(10,9,8,0.12)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG.maint} alt="Property maintenance services" style={{ width: "100%", height: 480, objectFit: "cover", display: "block" }} />
              </div>
              <div>
                <div className="rv"><OrangeTab>Service 03</OrangeTab></div>
                <h2 className="rv rv-d1" style={{
                  fontSize: "clamp(36px, 4.5vw, 56px)",
                  fontWeight: 900, lineHeight: 1.05,
                  letterSpacing: "-0.02em", color: "#0A0908",
                  textTransform: "uppercase", marginBottom: 20,
                }}>
                  Property Improvement<br /><span style={{ color: "var(--color-accent)" }}>&amp; Maintenance</span>
                </h2>
                <p className="rv rv-d2" style={{ fontSize: 16, color: "#3D3A37", lineHeight: 1.75, marginBottom: 28, fontWeight: 400 }}>
                  Ongoing property maintenance solutions that keep homes and rental properties in excellent condition. Reliable, tidy and professional.
                </p>
                <ul className="rv rv-d3" style={{ listStyle: "none", marginBottom: 32 }}>
                  {["General Repairs", "Landlord Maintenance Services", "Routine Inspections", "Tenant Changeover", "Reactive Call-Outs", "Property Refresh"].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <CheckIcon size={18} />
                      <span style={{ fontSize: 15, color: "#3D3A37", fontWeight: 600 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rv rv-d4">
                  <a href="#contact" className="btn-orange"><span>Get Maintenance Support</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            MEDIA WALL — PREMIUM FEATURED SERVICE
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#0A0908", borderTop: "4px solid var(--color-accent)", borderBottom: "4px solid var(--color-accent)" }} id="media-walls">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }} className="grid-2">
              {/* TODO: Replace with client-supplied images */}
              <div className="rv rv-d1" style={{ borderRadius: 4, overflow: "hidden", boxShadow: "0 20px 60px rgba(10,9,8,0.4)", border: "2px solid rgba(var(--color-accent-rgb),0.25)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG.media} alt="Bespoke media wall installation" style={{ width: "100%", height: 480, objectFit: "cover", display: "block" }} />
              </div>
              <div>
                <div className="rv" style={{ marginBottom: 20 }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(var(--color-accent-rgb),0.15)", border: "1px solid rgba(var(--color-accent-rgb),0.4)", padding: "6px 14px", borderRadius: 4 }}>
                    <span style={{ width: 7, height: 7, background: "var(--color-accent)", borderRadius: "50%", flexShrink: 0 }} />
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-accent)" }}>Premium Feature</span>
                  </div>
                </div>
                <h2 className="rv rv-d1" style={{
                  fontSize: "clamp(36px, 4.5vw, 56px)",
                  fontWeight: 900, lineHeight: 1.05,
                  letterSpacing: "-0.02em", color: "#fff",
                  textTransform: "uppercase", marginBottom: 20,
                }}>
                  TV Media Wall<br /><span style={{ color: "var(--color-accent)" }}>Installation</span>
                </h2>
                <p className="rv rv-d2" style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: 28, fontWeight: 400 }}>
                  Create a stunning focal point in your home with a professionally installed media wall tailored to your space. Fully integrated with joinery, lighting and concealed cabling.
                </p>
                <ul className="rv rv-d3" style={{ listStyle: "none", marginBottom: 32 }}>
                  {["TV Media Wall Design", "Installation & Joinery", "Cable Concealment", "Lighting Integration", "Electric Fire Fitting", "Modern Finishes"].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <CheckIcon size={18} />
                      <span style={{ fontSize: 15, color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rv rv-d4">
                  <a href="#contact" className="btn-orange"><span>Request Consultation</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            WHY CHOOSE PROPERTY CARE
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }} id="why-choose">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 64 }}>
              <OrangeTab center>Trust &amp; Reliability</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(40px, 4.8vw, 64px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                How Every Job<br /><span style={{ color: "var(--color-accent)" }}>Is Delivered</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9", borderRadius: 4, overflow: "hidden" }} className="grid-3">
              {[
                ["Premium Materials", "Specialist trade paints, certified components and quality fixings on every job — never the cheapest shortcut."],
                ["Certified Electrical Work", "All electrical installation and lighting completed and signed off to NICEIC / Part P standards."],
                ["One Coordinated Team", "Painting, electrics, media walls and maintenance handled by a single team working to one schedule."],
                ["Tidy, Snag-Free Finish", "Careful preparation, clean working and every finish checked and corrected before sign-off."],
              ].map(([title, desc], i) => (
                <div key={title} className={`rv rv-d${(i % 4) + 1}`} style={{ background: "#FDFCFB", padding: "40px 28px" }}>
                  <div style={{ width: 44, height: 44, background: "var(--color-accent-soft)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, flexShrink: 0 }}>
                    <CheckIcon size={20} />
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "#0A0908", marginBottom: 10, letterSpacing: "-0.01em" }}>{title}</div>
                  <p style={{ fontSize: 13, color: "#6B6460", lineHeight: 1.7, fontWeight: 400 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PROJECT SHOWCASE
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }} id="showcase">
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
              <OrangeTab center>Our Portfolio</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(40px, 4.8vw, 64px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Project<br /><span style={{ color: "var(--color-accent)" }}>Showcase</span>
              </h2>
              <p className="rv rv-d2" style={{ fontSize: 13, color: "#9E9488", marginTop: 16, letterSpacing: "0.06em", fontWeight: 500 }}>
                A selection of our recent work.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-3">
              {[
                { img: IMG.showcase1, tag: "Painting", title: "Interior Painting" },
                { img: IMG.showcase2, tag: "Decorating", title: "Decorating Projects" },
                { img: IMG.showcase3, tag: "Electrical", title: "Electrical Installations" },
                { img: IMG.showcase4, tag: "Maintenance", title: "Property Maintenance" },
                { img: IMG.showcase5, tag: "Media Walls", title: "Media Wall Installations" },
                { img: IMG.showcase1, tag: "Full Service", title: "Complete Transformations" },
              ].map(({ img, tag, title }, i) => (
                <div key={title} className={`port-card rv rv-d${(i % 3) + 1}`} style={{ height: 320 }}>
                  {/* TODO: Replace with client-supplied project images */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={title} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,9,8,0.95) 0%, transparent 60%)", padding: 24, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", background: "var(--color-accent)", padding: "5px 11px", borderRadius: 2, marginBottom: 10 }}>
                      <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>{tag}</span>
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>{title}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rv rv-d1" style={{ textAlign: "center", marginTop: 48 }}>
              <a href="#contact" className="btn-orange"><span>Start Your Project</span></a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SERVICE PROCESS
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }} id="process">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 72 }}>
              <OrangeTab center>How It Works</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(40px, 4.8vw, 64px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                How We<br /><span style={{ color: "var(--color-accent)" }}>Work</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }} className="process-grid">
              {[
                { n: "01", title: "Free Consultation", desc: "A no-obligation conversation about your space, needs and goals." },
                { n: "02", title: "Detailed Quotation", desc: "A transparent, itemised quote with no hidden costs or surprises." },
                { n: "03", title: "Schedule Work", desc: "We agree a timeline that works around your schedule." },
                { n: "04", title: "Professional Completion", desc: "One tidy team delivers premium results on time." },
                { n: "05", title: "Satisfaction Check", desc: "We follow up to make sure everything meets your expectations." },
              ].map(({ n, title, desc }, i) => (
                <div key={n} className={`rv rv-d${i + 1}`} style={{
                  background: "#F8F5F0", borderTop: "4px solid var(--color-accent)", padding: "36px 24px",
                  borderRadius: 4, position: "relative",
                }}>
                  <div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1, color: "rgba(var(--color-accent-rgb),0.15)", marginBottom: 16, letterSpacing: "-0.02em" }}>{n}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#0A0908", marginBottom: 12, letterSpacing: "-0.01em" }}>{title}</div>
                  <p style={{ fontSize: 13, color: "#6B6460", lineHeight: 1.65, fontWeight: 400 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FAQ
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }} id="faq">
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
              <OrangeTab center>Got Questions?</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(40px, 4.8vw, 64px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Frequently Asked<br /><span style={{ color: "var(--color-accent)" }}>Questions</span>
              </h2>
            </div>

            <div className="rv rv-d1" style={{ background: "#FDFCFB", border: "1px solid #E8E2D9", borderRadius: 4, padding: "8px 32px" }}>
              {faqs.map((faq, i) => (
                <Accordion key={i} question={faq.q} answer={faq.a} />
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
              <div className="rv"><OrangeTab center>Get Started Today</OrangeTab></div>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(48px, 6.5vw, 84px)",
                fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.025em",
                color: "#fff", marginBottom: 24, textTransform: "uppercase",
              }}>
                Ready To Improve<br /><span style={{ color: "var(--color-accent)" }}>Your Property?</span>
              </h2>
              <p className="rv rv-d2" style={{
                fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.8)",
                lineHeight: 1.7, maxWidth: 540, margin: "0 auto 52px",
              }}>
                Contact Property Care Paint &amp; Electrics today for a free no-obligation quotation. One team, one point of contact, one guarantee.
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
        <footer style={{ background: "#0A0908", padding: "80px 52px 36px", borderTop: "4px solid var(--color-accent)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 56, marginBottom: 60 }} className="footer-grid">
              <div>
                <div style={{ background: "#fff", padding: 16, borderRadius: 6, display: "inline-block", marginBottom: 24 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/propertycare-logo.jpg" alt="Property Care Paint & Electrics" style={{ height: 90, width: "auto", display: "block" }} />
                </div>
                <p style={{ fontSize: 14, color: "#C9C0B4", lineHeight: 1.7, maxWidth: 320, marginBottom: 24, fontWeight: 400 }}>
                  The North East&apos;s premium single-team property transformation specialists. Sunderland and the surrounding areas. Residential &amp; commercial.
                </p>
                <a href="tel:+447922909982" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 14, background: "rgba(var(--color-accent-rgb),0.1)", border: "1px solid rgba(var(--color-accent-rgb),0.3)", padding: "14px 20px", borderRadius: 4, marginBottom: 24 }}>
                  <div style={{ width: 36, height: 36, background: "var(--color-accent)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 700, marginBottom: 2 }}>Call us free</div>
                    <div style={{ fontSize: 19, fontWeight: 800, color: "#fff", letterSpacing: "0.02em", lineHeight: 1 }}>07922 909982</div>
                  </div>
                </a>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {["NICEIC", "Part P", "Insured", "Guaranteed"].map((c) => (
                    <span key={c} style={{ background: "rgba(var(--color-accent-rgb),0.08)", border: "1px solid rgba(var(--color-accent-rgb),0.25)", padding: "4px 10px", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-accent)", borderRadius: 2, fontWeight: 700 }}>{c}</span>
                  ))}
                </div>
              </div>
              <FooterLinks />
            </div>

            <div style={{ height: 1, background: "linear-gradient(to right, rgba(var(--color-accent-rgb),0.4), rgba(var(--color-accent-rgb),0.12), transparent)", marginBottom: 28 }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em", flexWrap: "wrap", gap: 10, fontWeight: 500 }}>
              <span>© 2025 Property Care Paint &amp; Electrics. Fully insured · NICEIC / Part P · Written guarantee.</span>
              <span>Premium property transformations across the North East.</span>
            </div>
          </div>

          <style>{`
            @media (max-width: 1100px) {
              .footer-grid { grid-template-columns: 1fr 1fr !important; }
              footer { padding: 60px 24px 32px !important; }
              .process-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
            @media (max-width: 700px) {
              .footer-grid { grid-template-columns: 1fr !important; }
              .grid-2 { grid-template-columns: 1fr !important; gap: 48px !important; }
              .grid-3 { grid-template-columns: 1fr !important; }
              .process-grid { grid-template-columns: 1fr !important; }
              section { padding-left: 20px !important; padding-right: 20px !important; }
              h1, h2 { font-size: 32px !important; }
            }
          `}</style>
        </footer>

      </main>
    </>
  );
}
