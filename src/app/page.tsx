"use client";
import Nav from "./components/Nav";
import FloatingContacts from "./components/FloatingContacts";
import ScrollReveal from "./components/ScrollReveal";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Marquee from "./components/Marquee";
import FooterLinks from "./components/FooterLinks";
import TestimonialCarousel from "./components/TestimonialCarousel";
import { primaryArea, secondaryServiceAreas, testimonials } from "@/lib/site";
import { beforeAfterTransformations, homeImages as IMG } from "@/lib/images";

const WA = "https://wa.me/447922909982?text=Hi%20Property%20Care%2C%20I%27d%20like%20a%20free%20quote.";

/* ── Service icons ── */
const Icons = {
  paint: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="6" rx="1" /><line x1="9" y1="9" x2="9" y2="13" />
      <path d="M9 13h6a2 2 0 012 2v2a2 2 0 01-2 2h-1v2h-2v-6" />
    </svg>
  ),
  electric: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  media: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="13" rx="2" /><line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
};

function CheckIcon({ size = 16, color = "#C9A227" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function OrangeTab({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, justifyContent: center ? "center" : "flex-start" }}>
      <span style={{ display: "block", width: 36, height: 3, background: "#C9A227", flexShrink: 0 }} />
      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A227" }}>
        {children}
      </span>
      {center && <span style={{ display: "block", width: 36, height: 3, background: "#C9A227", flexShrink: 0 }} />}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollReveal />
      <FloatingContacts />
      <main id="top">

        {/* ══════════════════════════════════════
            HERO — Bold, full-bleed, dark
        ══════════════════════════════════════ */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "#0A0908" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG.hero} alt="Property transformation Sunderland" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", opacity: 0.45 }} />

          {/* Multi-layer overlay */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.86) 45%, rgba(10,10,10,0.55) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.99) 0%, rgba(10,10,10,0.55) 45%, transparent 78%)" }} />

          <div style={{ position: "relative", zIndex: 2, padding: "140px 52px 140px", maxWidth: 920, width: "100%" }}>

            {/* Orange tagline tab */}
            <div className="h-a1" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(201,162,39,0.15)", border: "1px solid rgba(201,162,39,0.4)", padding: "8px 16px", borderRadius: 4, marginBottom: 32 }}>
              <span style={{ width: 7, height: 7, background: "#C9A227", borderRadius: "50%", flexShrink: 0 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9A227" }}>
                Sunderland&rsquo;s Trusted Property Specialists
              </span>
            </div>

            <h1 className="h-a2" style={{
              fontSize: "clamp(54px, 8.5vw, 112px)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              color: "#fff",
              marginBottom: 28,
              textTransform: "uppercase",
            }}>
              Property Care,<br />
              <span style={{ color: "#C9A227" }}>Paint &amp; Electrics</span>
            </h1>

            <p className="h-a3" style={{
              fontSize: "clamp(18px, 1.8vw, 22px)",
              fontWeight: 500,
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65,
              maxWidth: 640,
              marginBottom: 48,
            }}>
              One certified team delivering premium painting, decorating, electrical and property maintenance across Sunderland and the surrounding areas. <strong style={{ color: "#fff", fontWeight: 800 }}>Free survey. Written guarantee. No surprises.</strong>
            </p>

            <div className="h-a4" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", marginBottom: 36 }}>
              <a href="#contact" className="btn-orange">
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Get Your Free Quote
                </span>
              </a>
              <a href={WA} className="btn-outline-light">WhatsApp Us Now</a>
            </div>

            {/* Big phone display */}
            <div className="h-a5" style={{
              display: "inline-flex", alignItems: "center", gap: 16,
              background: "rgba(255,255,255,0.06)", border: "2px solid rgba(201,162,39,0.35)",
              padding: "16px 24px", borderRadius: 6, backdropFilter: "blur(8px)",
            }}>
              <div style={{ width: 44, height: 44, background: "#C9A227", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <a href="tel:+447922909982" style={{ textDecoration: "none" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A227", marginBottom: 2 }}>
                  Call Now — Free Quote
                </div>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: "0.02em", lineHeight: 1 }}>
                  07922 909982
                </div>
              </a>
            </div>
          </div>

          <div className="h-a6" style={{ position: "absolute", bottom: 36, right: 52, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", writingMode: "vertical-rl", fontWeight: 600 }}>Scroll</span>
            <div className="scroll-drip" style={{ width: 2, height: 60, background: "linear-gradient(to bottom, #C9A227, transparent)" }} />
          </div>

          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "#C9A227" }} />
        </section>

        {/* ══════════════════════════════════════
            MARQUEE
        ══════════════════════════════════════ */}
        <Marquee />

        {/* ══════════════════════════════════════
            TRUST STRIP — bold orange ticks
        ══════════════════════════════════════ */}
        <div style={{ background: "#FDFCFB", borderBottom: "1px solid #E8E2D9", padding: "32px 52px" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 24 }} className="trust-grid">
            {[
              "Fully Insured", "Residential & Commercial", "Free Quotations",
              "Reliable Service", "Experienced Team", "Quality Workmanship",
            ].map((label) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, background: "#F3EBD3", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <CheckIcon size={18} />
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0A0908", letterSpacing: "0.02em" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            ABOUT
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-2">
              <div>
                <div className="rv"><OrangeTab>Who we are</OrangeTab></div>
                <h2 className="rv rv-d1" style={{
                  fontSize: "clamp(42px, 5.5vw, 72px)",
                  fontWeight: 900, lineHeight: 1.05,
                  letterSpacing: "-0.02em", color: "#0A0908", marginBottom: 28,
                  textTransform: "uppercase",
                }}>
                  One Team.<br />
                  Four Disciplines.<br />
                  <span style={{ color: "#C9A227" }}>Zero Compromise.</span>
                </h2>
                <p className="rv rv-d2" style={{ fontSize: 16, fontWeight: 400, color: "#3D3A37", lineHeight: 1.75, maxWidth: 480, marginBottom: 20 }}>
                  Property Care Paint &amp; Electrics is Sunderland&apos;s premier single-team property specialist. We paint, wire, install media walls and maintain — all under one roof, with one point of contact and a written guarantee on every project.
                </p>
                <p className="rv rv-d3" style={{ fontSize: 16, fontWeight: 400, color: "#3D3A37", lineHeight: 1.75, maxWidth: 480, marginBottom: 44 }}>
                  No juggling trades. No unclear responsibility. Just one accountable team that delivers premium results — clean, on time, on budget.
                </p>
                <div className="rv rv-d4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href="#services" className="btn-orange"><span>Our Services</span></a>
                  <a href="#transformations" className="btn-outline-dark">See Our Work</a>
                </div>
              </div>

              <div>
                <div className="img-wrap rv-scale rv" style={{ marginBottom: 20, borderRadius: 4, overflow: "hidden", boxShadow: "0 20px 60px rgba(10,9,8,0.12)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG.about} alt="Property Care team at work" style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }} />
                </div>
                <div className="rv rv-d2" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#0A0908", border: "1px solid #0A0908" }}>
                  {[["100%","Certified"],["5★","Rated"],["1","Contact"],["£0","Survey"]].map(([n, l]) => (
                    <div key={l} style={{ background: "#0A0908", padding: "26px 14px", textAlign: "center", borderRight: "1px solid rgba(201,162,39,0.15)" }}>
                      <div style={{ fontSize: 38, fontWeight: 900, color: "#C9A227", lineHeight: 1, letterSpacing: "-0.02em" }}>{n}</div>
                      <div style={{ fontSize: 10, color: "#fff", marginTop: 8, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SERVICES — 4 cards, bold, with sub-services
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }} id="services">
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div className="rv"><OrangeTab center>What We Do</OrangeTab></div>
                <h2 className="rv rv-d1" style={{
                  fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 800, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase", marginBottom: 16,
              }}>
                Premium Services<br />
                <span style={{ color: "#C9A227" }}>Across The North East</span>
              </h2>
              <p className="rv rv-d2" style={{ fontSize: 16, color: "#3D3A37", maxWidth: 620, lineHeight: 1.7, margin: "0 auto" }}>
                Every service delivered to a premium standard by the same certified team who quoted you. One point of contact from survey to sign-off.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="services-grid">
              {[
                {
                  icon: Icons.paint, title: "Painting & Decorating", img: IMG.paint,
                  intro: "Flawless, hard-wearing finishes for interiors and exteriors.",
                  items: ["Interior Painting","Exterior Painting","Wall & Ceiling Repairs","Woodwork Painting","Commercial Decorating","Wallpapering"],
                },
                {
                  icon: Icons.electric, title: "Electrical Services", img: IMG.electric,
                  intro: "NICEIC certified electricians — every install signed off to Part P.",
                  items: ["Electrical Installations","Smart Lighting Upgrades","Socket & Switch Replacements","Fault Finding & Repairs","Consumer Unit Upgrades","Safety Inspections","Video Doorbell Installation"],
                },
                {
                  icon: Icons.media, title: "TV Media Wall Installation", img: IMG.media,
                  intro: "Bespoke media walls with joinery, lighting and concealed cabling.",
                  items: ["Bespoke Joinery","Electric Fire Integration","Ambient LED Lighting","Concealed Cable Management","Soundbar Integration","Custom Niche Design","Full Design Service"],
                },
                {
                  icon: Icons.home, title: "Property Improvement", img: IMG.maint,
                  intro: "Reliable, tidy maintenance that protects your property over time.",
                  items: ["General Repairs","Landlord Maintenance Services","Routine Inspections","Reactive Call-Outs","Tenant Changeover","Property Refresh"],
                },
              ].map(({ icon, title, img, intro, items }, idx) => (
                <div key={title} className={`svc-card rv rv-d${idx + 1}`}>
                  <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,9,8,0.5), transparent 60%)" }} />
                  </div>
                  <div style={{ padding: "32px 28px 36px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div className="svc-icon-wrap">{icon}</div>
                    <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12, lineHeight: 1.2, color: "#0A0908", letterSpacing: "-0.01em" }}>
                      {title}
                    </h3>
                    <p style={{ fontSize: 14, color: "#6B6460", lineHeight: 1.6, marginBottom: 20, fontWeight: 400 }}>{intro}</p>
                    <ul style={{ listStyle: "none", marginBottom: 24, flex: 1 }}>
                      {items.map((item) => (
                        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 9 }}>
                          <CheckIcon size={14} />
                          <span style={{ fontSize: 13, color: "#3D3A37", lineHeight: 1.55, fontWeight: 500 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      fontSize: 12, fontWeight: 800, letterSpacing: "0.15em",
                      textTransform: "uppercase", color: "#C9A227", textDecoration: "none",
                      marginTop: "auto", paddingTop: 8,
                    }}>
                      Get a Quote <span style={{ fontSize: 16 }}>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            BEFORE / AFTER
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }} id="transformations">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-2">
              <div>
                <div className="rv"><OrangeTab>See The Difference</OrangeTab></div>
                <h2 className="rv rv-d1" style={{
                  fontSize: "clamp(40px, 5vw, 64px)",
                  fontWeight: 900, lineHeight: 1.05,
                  letterSpacing: "-0.02em", color: "#0A0908", marginBottom: 24,
                  textTransform: "uppercase",
                }}>
                  Drag To Reveal<br />
                  <span style={{ color: "#C9A227" }}>A Real Transformation</span>
                </h2>
                <p className="rv rv-d2" style={{ fontSize: 16, color: "#3D3A37", lineHeight: 1.7, maxWidth: 420, marginBottom: 36 }}>
                  Slide left and right to compare. Every project is documented, dated and backed by our written workmanship guarantee.
                </p>
                <div className="rv rv-d3" style={{ marginBottom: 36, padding: "24px 28px", background: "#F8F5F0", borderLeft: "4px solid #C9A227", borderRadius: 4 }}>
                  <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A227", marginBottom: 8 }}>
                    Project · Washington · 2025
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#0A0908", marginBottom: 10, letterSpacing: "-0.01em" }}>
                    Chimney Breast to Cinematic Centrepiece
                  </div>
                  <p style={{ fontSize: 14, color: "#3D3A37", lineHeight: 1.65, fontWeight: 400 }}>
                    Dated chimney breast reimagined as a warm architectural media wall with electric fire, concealed cabling and ambient uplighting.
                  </p>
                </div>
                <div className="rv rv-d4">
                  <a href="#contact" className="btn-orange"><span>Request Similar</span></a>
                </div>
              </div>
              <div className="rv rv-d1" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {beforeAfterTransformations.map((t) => (
                  <BeforeAfterSlider key={t.caption ?? t.afterImg} {...t} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PORTFOLIO
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
              <div>
                <div className="rv"><OrangeTab>Transformations</OrangeTab></div>
                <h2 className="rv rv-d1" style={{ fontSize: "clamp(40px, 4.8vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#0A0908", textTransform: "uppercase" }}>
                  A Selection of<br /><span style={{ color: "#C9A227" }}>Recent Work</span>
                </h2>
              </div>
              <a href="#contact" className="btn-outline-dark rv">View All Projects</a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="grid-3">
              {[
                { img: IMG.p1, tag: "Media Wall · Washington", title: "The Concord Media Wall", loc: "NE37 · 2025" },
                { img: IMG.p2, tag: "Painting & Decorating", title: "Sulgrave Townhouse Repaint", loc: "NE37 · 2025" },
                { img: IMG.p3, tag: "Electrical & Lighting", title: "Seaham Coastal Rewire", loc: "SR7 · 2025" },
              ].map(({ img, tag, title, loc }, i) => (
                <div key={title} className={`port-card rv rv-d${i + 1}`} style={{ height: 360 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={title} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,9,8,0.95) 0%, transparent 60%)", padding: 26, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start", background: "#C9A227", padding: "5px 11px", borderRadius: 2, marginBottom: 12 }}>
                      <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>{tag}</span>
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 5, letterSpacing: "-0.01em" }}>{title}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontWeight: 600, letterSpacing: "0.06em" }}>{loc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            WHY US — DARK
        ══════════════════════════════════════ */}
        <section style={{ padding: "100px 52px 120px", background: "#0A0908", borderTop: "4px solid #C9A227" }} id="whyus">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 56 }} className="grid-2">
              <div>
                <div className="rv"><OrangeTab>Why Property Care</OrangeTab></div>
                <h2 className="rv rv-d1" style={{ fontSize: "clamp(40px, 4.8vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff", textTransform: "uppercase" }}>
                  Trust Us With<br /><span style={{ color: "#C9A227" }}>Your Property</span>
                </h2>
              </div>
              <div className="rv rv-d2" style={{ display: "flex", alignItems: "flex-end" }}>
                <p style={{ fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: 560 }}>
                  Everything below answers one question: <strong style={{ color: "#fff", fontWeight: 700 }}>why should you trust this company with a major transformation?</strong> We&apos;re not the cheapest — we&apos;re the best value. Certified, guaranteed, accountable.
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }} className="grid-3">
              {[
                { n: "01", t: "One Accountable Team", d: "Painting, electrical, media walls and maintenance under one roof — no juggling trades, no miscommunication." },
                { n: "02", t: "Certified & Insured", d: "NICEIC / Part P registered electrical work and full public liability cover as standard on every project." },
                { n: "03", t: "Written Guarantee", d: "Every transformation backed by a clear, written workmanship guarantee. Your peace of mind is protected." },
                { n: "04", t: "Premium Finishes", d: "Specialist materials and meticulous preparation for finishes that last years — and still look impressive." },
                { n: "05", t: "Local & Established", d: "Rooted in Sunderland, trusted across the North East. Real local references available on request." },
                { n: "06", t: "Transparent Fixed Quotes", d: "Itemised, no-surprise pricing agreed up front. We leave your home clean and respected after every visit." },
              ].map(({ n, t, d }, i) => (
                <div key={n} className={`why-card rv rv-d${(i % 3) + 1}`} style={{ background: "rgba(248,245,240,0.025)", padding: "48px 36px", borderRight: "1px solid rgba(255,255,255,0.04)" }}>
                  <div className="why-num" style={{ fontSize: 56, fontWeight: 900, lineHeight: 1, color: "rgba(201,162,39,0.18)", marginBottom: 22, transition: "color 0.3s, opacity 0.3s", letterSpacing: "-0.02em" }}>{n}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.01em", marginBottom: 14, color: "#fff" }}>{t}</div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontWeight: 400 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            AREAS
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }} id="areas">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 80, alignItems: "start" }} className="grid-2">
              <div>
                <div className="rv"><OrangeTab>Coverage</OrangeTab></div>
                <h2 className="rv rv-d1" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#0A0908", marginBottom: 22, textTransform: "uppercase" }}>
                  Serving The<br /><span style={{ color: "#C9A227" }}>North East</span>
                </h2>
                <p className="rv rv-d2" style={{ fontSize: 16, fontWeight: 400, color: "#3D3A37", lineHeight: 1.75, maxWidth: 380, marginBottom: 36 }}>
                  Local, established and genuinely on your doorstep. Dedicated coverage across Sunderland and the surrounding areas.
                </p>
                <div className="rv rv-d3"><a href="#contact" className="btn-orange"><span>Check Your Area</span></a></div>
              </div>

              <div className="rv rv-d1" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ gridColumn: "1 / -1", background: "#0A0908", padding: "26px 22px" }}>
                  <div style={{ width: 24, height: 3, background: "#C9A227", marginBottom: 10 }} />
                  <span style={{ fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>{primaryArea}</span>
                  <span style={{ fontSize: 10, color: "#C9A227", marginLeft: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 800 }}>Primary</span>
                </div>
                {secondaryServiceAreas.map((a) => (
                  <div key={a} className="area-cell" style={{ background: "#FDFCFB", padding: "20px 18px" }}>
                    <div style={{ width: 14, height: 2, background: "#C9A227", marginBottom: 8 }} />
                    <span style={{ fontSize: 12, letterSpacing: "0.06em", color: "#0A0908", fontWeight: 700, textTransform: "uppercase" }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            TESTIMONIALS
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB", borderTop: "1px solid #E8E2D9" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="rv"><OrangeTab center>Client Reviews · 5★ Rated</OrangeTab></div>
              <h2 className="rv rv-d1" style={{ fontSize: "clamp(40px, 4.8vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#0A0908", textTransform: "uppercase" }}>
                Trusted By<br /><span style={{ color: "#C9A227" }}>North East Homeowners</span>
              </h2>
            </div>

            <div className="rv rv-d1">
              <TestimonialCarousel items={testimonials} />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CONTACT
        ══════════════════════════════════════ */}
        <section style={{ position: "relative", overflow: "hidden" }} id="contact">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG.cta} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,9,8,0.97) 0%, rgba(10,9,8,0.92) 50%, rgba(10,9,8,0.85) 100%)" }} />

          <div style={{ position: "relative", zIndex: 1, padding: "120px 52px", textAlign: "center" }}>
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <div className="rv"><OrangeTab center>Start Your Transformation</OrangeTab></div>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(48px, 6.5vw, 84px)",
                fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.025em",
                color: "#fff", marginBottom: 24, textTransform: "uppercase",
              }}>
                Tell Us About<br /><span style={{ color: "#C9A227" }}>Your Space</span>
              </h2>
              <p className="rv rv-d2" style={{
                fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.8)",
                lineHeight: 1.7, maxWidth: 540, margin: "0 auto 52px",
              }}>
                The fastest way to a free quote is a quick WhatsApp message. We typically reply within the hour — no call centres, no scripts, no pressure.
              </p>

              <div className="rv rv-d3" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
                <a href={WA} style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  background: "#25D366", color: "#fff", textDecoration: "none",
                  padding: "20px 38px", fontSize: 14, fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 4,
                  boxShadow: "0 10px 32px rgba(37,211,102,0.4)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp — Fastest Reply
                </a>
                <a href="sms:+447922909982" className="btn-outline-light">Text 07922 909982</a>
              </div>

              {/* Big premium phone */}
              <div className="rv rv-d4" style={{
                display: "inline-flex", alignItems: "center", gap: 20,
                background: "rgba(255,255,255,0.05)", border: "2px solid rgba(201,162,39,0.4)",
                padding: "24px 36px", borderRadius: 6,
              }}>
                <div style={{ width: 56, height: 56, background: "#C9A227", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 8px 24px rgba(201,162,39,0.4)" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <a href="tel:+447922909982" style={{ textDecoration: "none", textAlign: "left" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A227", marginBottom: 4 }}>
                    Or Call Us Directly
                  </div>
                  <div style={{ fontSize: 38, fontWeight: 900, color: "#fff", letterSpacing: "-0.01em", lineHeight: 1 }}>
                    07922 909982
                  </div>
                </a>
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
        <footer style={{ background: "#0A0908", padding: "80px 52px 36px", borderTop: "4px solid #C9A227" }}>
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

                {/* Phone in footer */}
                <a href="tel:+447922909982" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 14, background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.3)", padding: "14px 20px", borderRadius: 4, marginBottom: 24 }}>
                  <div style={{ width: 36, height: 36, background: "#C9A227", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A227", fontWeight: 700, marginBottom: 2 }}>Call us free</div>
                    <div style={{ fontSize: 19, fontWeight: 800, color: "#fff", letterSpacing: "0.02em", lineHeight: 1 }}>07922 909982</div>
                  </div>
                </a>

                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {["NICEIC", "Part P", "Insured", "Guaranteed"].map((c) => (
                    <span key={c} style={{ background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.25)", padding: "4px 10px", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9A227", borderRadius: 2, fontWeight: 700 }}>{c}</span>
                  ))}
                </div>
              </div>

              <FooterLinks />
            </div>

            <div style={{ height: 1, background: "linear-gradient(to right, rgba(201,162,39,0.4), rgba(201,162,39,0.12), transparent)", marginBottom: 28 }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em", flexWrap: "wrap", gap: 10, fontWeight: 500 }}>
              <span>© 2025 Property Care Paint &amp; Electrics. Fully insured · NICEIC / Part P · Written guarantee.</span>
              <span>Premium property transformations across the North East.</span>
            </div>
          </div>

          <style>{`
            @media (max-width: 1100px) {
              .footer-grid { grid-template-columns: 1fr 1fr !important; }
              footer { padding: 60px 24px 32px !important; }
              .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
              .trust-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
            @media (max-width: 700px) {
              .footer-grid { grid-template-columns: 1fr !important; }
              .services-grid { grid-template-columns: 1fr !important; }
              .grid-2 { grid-template-columns: 1fr !important; gap: 48px !important; }
              .grid-3 { grid-template-columns: 1fr !important; }
              .trust-grid { grid-template-columns: 1fr 1fr !important; gap: 18px !important; }
              section { padding-left: 20px !important; padding-right: 20px !important; }
              h1, h2 { font-size: 32px !important; }
            }
          `}</style>
        </footer>

      </main>
    </>
  );
}
