import Nav from "./components/Nav";
import FloatingContacts from "./components/FloatingContacts";
import ScrollReveal from "./components/ScrollReveal";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Marquee from "./components/Marquee";

/* ── Unsplash placeholder images (property/interior focused, free to use) ── */
const IMGS = {
  hero:      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85&auto=format&fit=crop",
  about:     "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop",
  painting:  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop",
  electric:  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&q=80&auto=format&fit=crop",
  mediawall: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=700&q=80&auto=format&fit=crop",
  maintain:  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80&auto=format&fit=crop",
  port1:     "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80&auto=format&fit=crop",
  port2:     "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80&auto=format&fit=crop",
  port3:     "https://images.unsplash.com/photo-1600607687939-ce8a6d24cca4?w=800&q=80&auto=format&fit=crop",
  contact:   "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80&auto=format&fit=crop",
};

/* ── Shared style helpers ── */
function BrassRule({ width = 28 }: { width?: number }) {
  return (
    <span style={{ display: "block", width, height: 1.5, background: "#B8935A", flexShrink: 0 }} />
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
      <BrassRule />
      <span style={{
        fontSize: 10, fontWeight: 500, letterSpacing: "0.32em",
        textTransform: "uppercase", color: "#B8935A",
      }}>
        {children}
      </span>
    </div>
  );
}

function SectionH2({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 style={{
      fontFamily: "Cormorant Garamond, Georgia, serif",
      fontSize: "clamp(38px, 4vw, 58px)",
      fontWeight: 300,
      lineHeight: 1.08,
      letterSpacing: "-0.015em",
      color: light ? "#F8F5F0" : "#1E1C1A",
      marginBottom: 14,
    }}>
      {children}
    </h2>
  );
}

function SectionP({ children, light = false, narrow = true }: { children: React.ReactNode; light?: boolean; narrow?: boolean }) {
  return (
    <p style={{
      fontSize: 14,
      fontWeight: 300,
      color: light ? "#9E9488" : "#6B6460",
      lineHeight: 1.8,
      maxWidth: narrow ? 480 : "100%",
      marginBottom: 52,
    }}>
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <ScrollReveal />
      <FloatingContacts />
      <main id="top">

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section style={{
          position: "relative",
          height: "100vh",
          minHeight: 700,
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}>
          {/* Full-bleed background image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMGS.hero}
            alt="Premium interior transformation"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center 40%",
            }}
          />

          {/* Multi-layer overlay for depth */}
          <div style={{
            position: "absolute", inset: 0,
            background: `
              linear-gradient(to right, rgba(15,13,11,0.88) 0%, rgba(15,13,11,0.5) 55%, rgba(15,13,11,0.15) 100%),
              linear-gradient(to top, rgba(15,13,11,0.95) 0%, rgba(15,13,11,0.2) 45%, transparent 70%)
            `,
          }} />

          {/* Architectural grid lines */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(184,147,90,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184,147,90,0.04) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
            pointerEvents: "none",
          }} />

          {/* Content */}
          <div style={{
            position: "relative", zIndex: 2,
            padding: "0 48px 100px",
            maxWidth: 700,
          }}>
            <div className="hero-a1" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <BrassRule />
              <span style={{
                fontSize: 10, fontWeight: 400, letterSpacing: "0.32em",
                textTransform: "uppercase", color: "#B8935A",
              }}>
                Sunderland &amp; The North East
              </span>
            </div>

            <h1
              className="hero-a2 font-display"
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(58px, 7.5vw, 100px)",
                fontWeight: 300,
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
                color: "#FDFCFB",
                marginBottom: 32,
              }}
            >
              Property<br />
              <em style={{ fontStyle: "italic", color: "rgba(248,245,240,0.6)", fontWeight: 300 }}>
                transformed.
              </em>
            </h1>

            <p className="hero-a3" style={{
              fontSize: 16, fontWeight: 300, color: "rgba(253,252,251,0.72)",
              lineHeight: 1.75, maxWidth: 460, marginBottom: 44,
            }}>
              Premium painting, electrical upgrades &amp; bespoke media walls —
              delivered by one certified team who cares about every detail.
            </p>

            <div className="hero-a4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary">
                <span>Book a Free Survey</span>
              </a>
              <a
                href="https://wa.me/447922909983?text=Hi%20Propertycare%2C%20I%27d%20like%20a%20free%20quote."
                className="btn-wa"
                style={{ borderColor: "rgba(253,252,251,0.3)", color: "#FDFCFB" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Trust micro-line */}
            <p className="hero-a5" style={{
              fontSize: 11, color: "rgba(253,252,251,0.35)",
              marginTop: 22, letterSpacing: "0.1em",
            }}>
              Free survey · Fully insured · No obligation
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="hero-a6" style={{
            position: "absolute", bottom: 36, right: 48, zIndex: 2,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          }}>
            <span style={{
              fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase",
              color: "rgba(253,252,251,0.35)", writingMode: "vertical-rl",
            }}>Scroll</span>
            <div className="scroll-drip" style={{
              width: 1, height: 52,
              background: "linear-gradient(to bottom, #B8935A, transparent)",
            }} />
          </div>

          {/* Bottom brass rule */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
            background: "linear-gradient(to right, transparent, rgba(184,147,90,0.5), transparent)",
          }} />
        </section>

        {/* ══════════════════════════════════════════════
            MARQUEE TICKER
        ══════════════════════════════════════════════ */}
        <Marquee />

        {/* ══════════════════════════════════════════════
            ABOUT / INTRO
        ══════════════════════════════════════════════ */}
        <section style={{ padding: "120px 48px", background: "#FDFCFB" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
              className="two-col"
            >
              <div>
                <div className="reveal"><Eyebrow>Who we are</Eyebrow></div>
                <SectionH2>
                  <span className="reveal">One team.</span><br />
                  <span className="reveal reveal-d1">Four disciplines.</span><br />
                  <span className="reveal reveal-d2">
                    <em style={{ fontStyle: "italic", color: "#9E9488", fontWeight: 300 }}>Zero compromise.</em>
                  </span>
                </SectionH2>
                <div className="reveal reveal-d2">
                  <SectionP>
                    Propertycare is Sunderland&apos;s only single-team whole-property
                    transformation specialist. We paint, wire, build media walls and
                    maintain properties — all under one roof, with one point of contact
                    and a written guarantee on every project.
                  </SectionP>
                </div>
                <div className="reveal reveal-d3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="#services" className="btn-primary"><span>Our Services</span></a>
                  <a href="#transformations" className="btn-outline">See Our Work</a>
                </div>
              </div>

              {/* Image + stats */}
              <div>
                <div className="img-reveal-wrap reveal-scale reveal" style={{ marginBottom: 20 }}>
                  <div className="img-overlay" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={IMGS.about}
                    alt="Premium property transformation in progress"
                    style={{ width: "100%", height: 380, objectFit: "cover", display: "block", borderRadius: 2 }}
                  />
                </div>
                {/* Stat row */}
                <div className="reveal reveal-d2" style={{
                  display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9",
                }}>
                  {[
                    { n: "100%", l: "Certified" },
                    { n: "5★", l: "Rated" },
                    { n: "1", l: "Contact" },
                    { n: "£0", l: "Survey fee" },
                  ].map(({ n, l }) => (
                    <div key={l} style={{ background: "#FDFCFB", padding: "22px 16px", textAlign: "center" }}>
                      <div style={{
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: 34, fontWeight: 300, color: "#1E1C1A", lineHeight: 1,
                      }}>{n}</div>
                      <div style={{ fontSize: 10, color: "#9E9488", marginTop: 6, letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SERVICES
        ══════════════════════════════════════════════ */}
        <section style={{ padding: "120px 48px", background: "#F8F5F0" }} id="services">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, flexWrap: "wrap", gap: 20 }}>
              <div>
                <div className="reveal"><Eyebrow>What we do</Eyebrow></div>
                <div className="reveal reveal-d1">
                  <SectionH2>Four disciplines.<br />One accountable team.</SectionH2>
                </div>
              </div>
              <p className="reveal" style={{ fontSize: 13, color: "#9E9488", maxWidth: 280, lineHeight: 1.7, textAlign: "right" }}>
                We sell outcomes, not labour. Every job signed off by the same certified team who quoted you.
              </p>
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
              gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9",
            }} className="services-grid">
              {[
                {
                  n: "01", title: "Painting & Decorating", img: IMGS.painting,
                  desc: "Flawless, hard-wearing finishes that transform how a room looks and feels. Meticulous preparation to final coat.",
                  cta: "Request a painting estimate",
                },
                {
                  n: "02", title: "Electrical & Lighting", img: IMGS.electric,
                  desc: "Modern upgrades that improve safety, convenience and atmosphere. NICEIC certified — every installation signed off to Part P.",
                  cta: "Speak with an electrician",
                },
                {
                  n: "03", title: "Bespoke Media Walls", img: IMGS.mediawall,
                  desc: "Joinery, fire surround, lighting and concealed cabling — designed, built and finished by one team with no visible wires.",
                  cta: "Get a media wall quote",
                },
                {
                  n: "04", title: "Property Maintenance", img: IMGS.maintain,
                  desc: "Reliable, tidy upkeep that protects your property over time. Trusted by homeowners, landlords and commercial clients.",
                  cta: "Arrange maintenance",
                },
              ].map(({ n, title, img, desc, cta }) => (
                <div key={n} className="service-card reveal">
                  {/* Image */}
                  <div className="img-reveal-wrap" style={{ height: 220, overflow: "hidden" }}>
                    <div className="img-overlay" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={title}
                      className="port-img"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                  <div style={{ background: "#FDFCFB", padding: "36px 34px" }}>
                    <span style={{
                      display: "block", fontFamily: "Cormorant Garamond, Georgia, serif",
                      fontSize: 11, color: "#B8935A", letterSpacing: "0.2em", marginBottom: 16,
                    }}>{n} / 04</span>
                    <h3 style={{
                      fontFamily: "Cormorant Garamond, Georgia, serif",
                      fontSize: 26, fontWeight: 400, marginBottom: 12, lineHeight: 1.2, color: "#1E1C1A",
                    }}>{title}</h3>
                    <p style={{ fontSize: 13, color: "#6B6460", lineHeight: 1.72, marginBottom: 24, fontWeight: 300 }}>{desc}</p>
                    <a href="#contact" style={{
                      display: "inline-flex", alignItems: "center", gap: 7,
                      fontSize: 10, fontWeight: 500, letterSpacing: "0.2em",
                      textTransform: "uppercase", color: "#1A5C3A", textDecoration: "none",
                      transition: "gap 0.3s",
                    }}>
                      {cta} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            BEFORE / AFTER
        ══════════════════════════════════════════════ */}
        <section style={{ padding: "120px 48px", background: "#FDFCFB" }} id="transformations">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="two-col">
              <div>
                <div className="reveal"><Eyebrow>See the difference</Eyebrow></div>
                <div className="reveal reveal-d1">
                  <h2 style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "clamp(40px, 4.5vw, 64px)",
                    fontWeight: 300, lineHeight: 1.05,
                    color: "#1E1C1A", marginBottom: 20,
                  }}>
                    Drag to reveal<br />
                    <em style={{ fontStyle: "italic", color: "#9E9488", fontWeight: 300 }}>a real transformation.</em>
                  </h2>
                </div>
                <div className="reveal reveal-d2">
                  <p style={{ fontSize: 14, color: "#6B6460", lineHeight: 1.78, maxWidth: 400, marginBottom: 32, fontWeight: 300 }}>
                    Slide left and right to compare. Every project documented, dated and verified with our written guarantee.
                  </p>
                </div>
                <div className="reveal reveal-d3" style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#B8935A", marginBottom: 6 }}>
                    The Concord Media Wall · Washington, NE37 · 2025
                  </div>
                  <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 20, fontWeight: 400, marginBottom: 8, color: "#1E1C1A" }}>
                    Chimney Breast to Cinematic Centrepiece
                  </div>
                  <p style={{ fontSize: 13, color: "#6B6460", lineHeight: 1.7, fontWeight: 300 }}>
                    A dated chimney breast reimagined as a warm media wall with electric fire, concealed cabling and ambient uplighting.
                  </p>
                </div>
                <div className="reveal reveal-d4">
                  <a href="#contact" className="btn-primary"><span>Request Similar</span></a>
                </div>
              </div>
              <div className="reveal reveal-d1">
                <BeforeAfterSlider />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            PORTFOLIO
        ══════════════════════════════════════════════ */}
        <section style={{ padding: "120px 48px", background: "#F8F5F0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 16 }}>
              <div>
                <div className="reveal"><Eyebrow>Transformations</Eyebrow></div>
                <div className="reveal reveal-d1"><SectionH2>A selection of<br />recent work.</SectionH2></div>
              </div>
              <a href="#contact" className="btn-outline reveal">View All Projects</a>
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9",
            }} className="three-col">
              {[
                { img: IMGS.port1, tag: "Media Wall · Washington", title: "The Concord Media Wall", loc: "NE37 · 2025" },
                { img: IMGS.port2, tag: "Painting & Decorating · Washington", title: "Sulgrave Townhouse Repaint", loc: "NE37 · 2025" },
                { img: IMGS.port3, tag: "Electrical & Lighting · Seaham", title: "Seaham Coastal Rewire", loc: "SR7 · 2025" },
              ].map(({ img, tag, title, loc }, i) => (
                <div key={title} className={`port-card reveal reveal-d${i + 1}`}>
                  <div className="port-img" style={{ height: 300, overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}
                      className="port-img"
                    />
                  </div>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(15,13,11,0.92) 0%, transparent 55%)",
                    padding: 22, display: "flex", flexDirection: "column", justifyContent: "flex-end",
                  }}>
                    <div style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8935A", marginBottom: 6 }}>{tag}</div>
                    <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 20, fontWeight: 400, color: "#fff", marginBottom: 3 }}>{title}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>{loc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            WHY US — dark section
        ══════════════════════════════════════════════ */}
        <section style={{
          padding: "120px 48px",
          background: "#1E1C1A",
          borderTop: "1px solid rgba(184,147,90,0.2)",
        }} id="whyus">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 72 }} className="two-col">
              <div>
                <div className="reveal"><Eyebrow>Why Propertycare</Eyebrow></div>
                <div className="reveal reveal-d1"><SectionH2 light>Reasons to trust us with your property.</SectionH2></div>
              </div>
              <div className="reveal reveal-d2" style={{ display: "flex", alignItems: "flex-end" }}>
                <SectionP light>
                  Everything below answers one question: why should you trust this company with a £20,000+ transformation? We&apos;re not the cheapest. We&apos;re the best value.
                </SectionP>
              </div>
            </div>

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.05)",
            }} className="why-grid">
              {[
                { n: "01", t: "One Accountable Team", d: "Painting, electrical, media walls and maintenance under a single roof — no juggling trades, no miscommunication." },
                { n: "02", t: "Certified & Insured", d: "NICEIC / Part P registered electrical work and full public liability cover as standard on every project." },
                { n: "03", t: "Written Guarantee", d: "Every transformation backed by a clear, written workmanship guarantee — your confidence is protected." },
                { n: "04", t: "Premium Finishes", d: "Specialist materials and meticulous preparation for finishes that last years and still look impressive in them." },
                { n: "05", t: "Local & Established", d: "Rooted in Sunderland, trusted across the North East. Real local references available on request." },
                { n: "06", t: "Transparent Fixed Quotes", d: "Itemised, no-surprise pricing agreed up front. We leave your home clean and respected after every visit." },
              ].map(({ n, t, d }, i) => (
                <div key={n} className={`reveal reveal-d${(i % 3) + 1}`} style={{
                  background: "rgba(248,245,240,0.025)",
                  padding: "44px 34px",
                  borderRight: "1px solid rgba(255,255,255,0.04)",
                  transition: "background 0.3s",
                  cursor: "default",
                }}>
                  <div style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: 52, fontWeight: 300, lineHeight: 1,
                    color: "rgba(184,147,90,0.14)", marginBottom: 18,
                  }}>{n}</div>
                  <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", marginBottom: 10, color: "#F0EBE3" }}>{t}</div>
                  <p style={{ fontSize: 12, color: "#9E9488", lineHeight: 1.75, fontWeight: 300 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SERVICE AREAS
        ══════════════════════════════════════════════ */}
        <section style={{ padding: "120px 48px", background: "#F8F5F0" }} id="areas">
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 80, alignItems: "start" }} className="two-col">
              <div>
                <div className="reveal"><Eyebrow>Coverage</Eyebrow></div>
                <div className="reveal reveal-d1"><SectionH2>Proudly serving the North East.</SectionH2></div>
                <div className="reveal reveal-d2">
                  <SectionP>
                    Local, established and genuinely on your doorstep. Dedicated coverage across Sunderland and the surrounding region.
                  </SectionP>
                </div>
                <a href="#contact" className="btn-primary reveal reveal-d3"><span>Check Your Area</span></a>
              </div>

              <div className="reveal reveal-d1" style={{
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9",
              }}>
                <div style={{
                  gridColumn: "1 / -1", background: "#FDFCFB",
                  padding: "22px 20px", borderBottom: "1px solid #E8E2D9",
                }}>
                  <div style={{ width: 20, height: 2, background: "#B8935A", marginBottom: 8 }} />
                  <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 22, fontWeight: 400, color: "#1E1C1A" }}>
                    Sunderland
                  </span>
                  <span style={{ fontSize: 10, color: "#B8935A", marginLeft: 10, letterSpacing: "0.15em", textTransform: "uppercase" }}>Primary</span>
                </div>
                {[
                  "Washington","Seaham","South Shields","Gateshead","Newcastle",
                  "Durham","Jarrow","Hebburn","Peterlee","Chester-le-St",
                  "Boldon","Cleadon","Whitburn","Ryhope","Fulwell","East Boldon","Houghton",
                ].map((a) => (
                  <div key={a} style={{
                    background: "#FDFCFB", padding: "17px 17px",
                    fontSize: 11, letterSpacing: "0.1em", color: "#6B6460",
                    textTransform: "uppercase", transition: "background 0.2s, color 0.2s",
                  }}>
                    <div style={{ width: 13, height: 1, background: "#B8935A", marginBottom: 6 }} />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            TESTIMONIALS
        ══════════════════════════════════════════════ */}
        <section style={{ padding: "120px 48px", background: "#FDFCFB", borderTop: "1px solid #E8E2D9" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="reveal"><Eyebrow>Client stories · Rated 5.0</Eyebrow></div>
            <div className="reveal reveal-d1" style={{ marginBottom: 56 }}>
              <SectionH2>Trusted by North East<br />homeowners.</SectionH2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="three-col">
              {[
                { q: "The media wall completely changed our living room — the finish and hidden wiring are flawless. Tidy, professional and exactly on quote.", name: "Rachel M.", loc: "Concord, Washington", d: 1 },
                { q: "They repainted the whole house and rewired the kitchen. One team, one point of contact, no stress. The standard of work is genuinely premium.", name: "David & Helen T.", loc: "Sulgrave, Washington", d: 2 },
                { q: "Honest, certified and meticulous. The lighting design transformed how our period home feels in the evenings. We won't use anyone else.", name: "Andrew P.", loc: "Seaham, SR7", d: 3 },
              ].map(({ q, name, loc, d }) => (
                <div key={name} className={`testi-card reveal reveal-d${d}`} style={{
                  background: "#F8F5F0", border: "1px solid #E8E2D9", padding: "38px", position: "relative",
                }}>
                  <div style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: 64, color: "#B8935A", opacity: 0.3,
                    position: "absolute", top: 18, left: 28, lineHeight: 1,
                    userSelect: "none",
                  }}>&ldquo;</div>
                  <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#B8935A">
                        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    ))}
                  </div>
                  <p style={{ fontSize: 14, fontStyle: "italic", fontWeight: 300, color: "#3D3A37", lineHeight: 1.75, marginBottom: 28, paddingTop: 24 }}>
                    &ldquo;{q}&rdquo;
                  </p>
                  <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.05em", marginBottom: 3, color: "#1E1C1A" }}>{name}</div>
                  <div style={{ fontSize: 10, color: "#B8935A", letterSpacing: "0.14em", textTransform: "uppercase" }}>{loc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            CONTACT — image background
        ══════════════════════════════════════════════ */}
        <section style={{ position: "relative", overflow: "hidden" }} id="contact">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMGS.contact}
            alt="Premium property interior"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(253,252,251,0.97) 0%, rgba(248,245,240,0.96) 45%, rgba(240,235,227,0.88) 100%)",
          }} />

          <div style={{ position: "relative", zIndex: 1, padding: "120px 48px", textAlign: "center" }}>
            <div style={{ maxWidth: 680, margin: "0 auto" }}>
              <div className="reveal" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 18 }}>
                <BrassRule />
                <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.32em", textTransform: "uppercase", color: "#B8935A" }}>
                  Start your transformation
                </span>
                <BrassRule />
              </div>

              <div className="reveal reveal-d1">
                <h2 style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontSize: "clamp(42px, 5vw, 68px)",
                  fontWeight: 300, lineHeight: 1.04, letterSpacing: "-0.015em",
                  color: "#1E1C1A", marginBottom: 18,
                }}>
                  Tell us about<br />your space.
                </h2>
              </div>

              <p className="reveal reveal-d2" style={{
                fontSize: 15, fontWeight: 300, color: "#6B6460",
                lineHeight: 1.78, maxWidth: 460, margin: "0 auto 52px",
              }}>
                The fastest way to a free quote is a quick WhatsApp message. We typically reply within the hour — no call centres, no scripts.
              </p>

              <div className="reveal reveal-d3" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
                <a
                  href="https://wa.me/447922909983?text=Hi%20Propertycare%2C%20I%27d%20like%20a%20quote."
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "#25D366", color: "#fff", textDecoration: "none",
                    padding: "17px 34px", fontSize: 12, fontWeight: 500,
                    letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 2,
                    boxShadow: "0 8px 32px rgba(37,211,102,0.3)",
                    transition: "transform 0.25s, box-shadow 0.25s",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp — Fastest Reply
                </a>
                <a href="sms:+447922909983" style={{
                  display: "inline-flex", alignItems: "center", gap: 9,
                  background: "transparent", color: "#1E1C1A", textDecoration: "none",
                  padding: "16px 26px", fontSize: 12, fontWeight: 300,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  borderRadius: 2, border: "1px solid #C9C0B4",
                }}>
                  Text 07922 909983
                </a>
                <a href="tel:+447922909983" style={{
                  display: "inline-flex", alignItems: "center", gap: 9,
                  background: "transparent", color: "#1E1C1A", textDecoration: "none",
                  padding: "16px 26px", fontSize: 12, fontWeight: 300,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  borderRadius: 2, border: "1px solid #C9C0B4",
                }}>
                  Call 07922 909983
                </a>
              </div>

              <p className="reveal reveal-d4" style={{ fontSize: 11, color: "#9E9488", letterSpacing: "0.07em" }}>
                Takes 2 minutes · No obligation · Free, no-pressure survey
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FOOTER
        ══════════════════════════════════════════════ */}
        <footer style={{ background: "#1E1C1A", padding: "72px 48px 36px", borderTop: "1px solid rgba(184,147,90,0.2)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }} className="footer-grid">
              <div>
                {/* Footer logo */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                    <path d="M20 6L5 18.5H9V34H17V24H23V34H31V18.5H35L20 6Z" stroke="rgba(248,245,240,0.4)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
                    <path d="M22 14L17 22H21L18 30L25 20H21L24 14H22Z" fill="#B8935A" />
                  </svg>
                  <div>
                    <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 18, fontWeight: 400, color: "#F8F5F0" }}>Propertycare</div>
                    <div style={{ fontSize: 8, letterSpacing: "0.28em", textTransform: "uppercase", color: "#B8935A" }}>Paints &amp; Electrics</div>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: "#9E9488", lineHeight: 1.72, maxWidth: 240, marginBottom: 22, fontWeight: 300 }}>
                  The North East&apos;s premium single-team property transformation specialists. Serving Sunderland and surrounding areas.
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {["NICEIC", "Part P", "TrustMark", "Dulux Select"].map((c) => (
                    <span key={c} style={{
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
                      padding: "3px 8px", fontSize: 8, letterSpacing: "0.18em",
                      textTransform: "uppercase", color: "#9E9488", borderRadius: 1,
                    }}>{c}</span>
                  ))}
                </div>
              </div>

              {[
                { h: "Services", items: [["Painting & Decorating","#services"],["Electrical & Lighting","#services"],["Bespoke Media Walls","#services"],["Property Maintenance","#services"]] },
                { h: "Areas", items: [["Sunderland","#areas"],["Washington","#areas"],["Seaham","#areas"],["South Shields","#areas"],["Gateshead","#areas"],["Newcastle","#areas"]] },
                { h: "Contact", items: [["WhatsApp","https://wa.me/447922909983"],["Text Message","sms:+447922909983"],["07922 909983","tel:+447922909983"]] },
              ].map(({ h, items }) => (
                <div key={h}>
                  <div style={{ fontSize: 9, letterSpacing: "0.26em", textTransform: "uppercase", color: "#B8935A", marginBottom: 18 }}>{h}</div>
                  <ul style={{ listStyle: "none" }}>
                    {items.map(([label, href]) => (
                      <li key={label} style={{ marginBottom: 10 }}>
                        <a href={href} style={{ fontSize: 12, color: "#9E9488", textDecoration: "none", fontWeight: 300, transition: "color 0.2s" }}
                          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F8F5F0")}
                          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9E9488")}
                        >{label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom rule + copyright */}
            <div style={{ height: 1, background: "linear-gradient(to right, rgba(184,147,90,0.3), rgba(184,147,90,0.1), transparent)", marginBottom: 24 }} />
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em", flexWrap: "wrap", gap: 10,
            }}>
              <span>© 2025 Propertycare Paints &amp; Electrics. Fully insured · NICEIC / Part P · Written guarantee.</span>
              <span>Premium property transformations across the North East.</span>
            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .footer-grid { grid-template-columns: 1fr 1fr !important; }
              footer { padding: 52px 20px 28px !important; }
            }
            @media (max-width: 640px) {
              .footer-grid { grid-template-columns: 1fr !important; }
            }
            @media (max-width: 900px) {
              .two-col { grid-template-columns: 1fr !important; gap: 44px !important; }
              .three-col { grid-template-columns: 1fr !important; }
              .services-grid { grid-template-columns: 1fr !important; }
              .why-grid { grid-template-columns: 1fr !important; }
              section { padding-left: 20px !important; padding-right: 20px !important; }
            }
          `}</style>
        </footer>

      </main>
    </>
  );
}
