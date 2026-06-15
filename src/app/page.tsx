import Nav from "./components/Nav";
import FloatingContacts from "./components/FloatingContacts";
import ScrollReveal from "./components/ScrollReveal";
import BeforeAfterSlider from "./components/BeforeAfterSlider";

/* ── Reusable inline helpers ── */
const S = {
  // Section wrapper
  section: (bg = "#FDFCFB", extra: React.CSSProperties = {}): React.CSSProperties => ({
    padding: "112px 40px",
    background: bg,
    ...extra,
  }),
  inner: (): React.CSSProperties => ({
    maxWidth: 1180,
    margin: "0 auto",
  }),
  eyebrow: (): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 18,
  }),
  eyebrowText: (): React.CSSProperties => ({
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    color: "#B8935A",
  }),
  h2: (): React.CSSProperties => ({
    fontFamily: "Cormorant Garamond, Georgia, serif",
    fontSize: "clamp(34px, 3.5vw, 52px)",
    fontWeight: 300,
    lineHeight: 1.1,
    letterSpacing: "-0.01em",
    color: "#2A2724",
    marginBottom: 14,
  }),
  p: (): React.CSSProperties => ({
    fontSize: 14,
    fontWeight: 300,
    color: "#6B6460",
    lineHeight: 1.78,
    maxWidth: 480,
    marginBottom: 56,
  }),
};

function BrassRule() {
  return <span style={{ display: "block", width: 28, height: 1.5, background: "#B8935A", flexShrink: 0 }} />;
}

function BtnPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "#1A5C3A",
        color: "#fff",
        textDecoration: "none",
        padding: "14px 28px",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        borderRadius: 2,
        transition: "background 0.25s",
      }}
    >
      {children}
    </a>
  );
}

function BtnOutline({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "transparent",
        color: "#2A2724",
        textDecoration: "none",
        padding: "13px 26px",
        fontSize: 11,
        fontWeight: 400,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        borderRadius: 2,
        border: "1px solid #C9C0B4",
        transition: "border-color 0.25s",
      }}
    >
      {children}
    </a>
  );
}

/* ─────────────────────────────────────────────── */
/* PAGE                                            */
/* ─────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <ScrollReveal />
      <FloatingContacts />

      <main id="top">

        {/* ══ HERO ══════════════════════════════════════ */}
        <section
          style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden",
            background: "#F0EBE3",
          }}
        >
          {/* Background texture layers */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, #F5F0EA 0%, #EDE5D8 35%, #E8DDD0 65%, #F0E8DC 100%)",
          }} />

          {/* Architectural grid lines — luxury detail */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(184,147,90,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,147,90,0.06) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />

          {/* Right-side illustrated room element */}
          <div style={{
            position: "absolute",
            right: "4%", top: "12%",
            width: "42%", height: "72%",
          }}>
            {/* Outer wall frame */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(145deg, #EDE0CC 0%, #E0D0B8 60%, #D8C8A8 100%)",
              borderRadius: 3,
              boxShadow: "24px 24px 80px rgba(42,39,36,0.12), -4px -4px 20px rgba(255,255,255,0.5)",
            }} />
            {/* Wainscoting / panel details */}
            <div style={{
              position: "absolute",
              top: "8%", left: "6%", right: "6%", bottom: "8%",
              border: "1px solid rgba(184,147,90,0.25)",
            }}>
              <div style={{
                position: "absolute",
                top: 12, left: 12, right: 12, bottom: 12,
                border: "1px solid rgba(184,147,90,0.12)",
              }} />
            </div>
            {/* Media wall focal point */}
            <div style={{
              position: "absolute",
              bottom: "12%", left: "50%", transform: "translateX(-50%)",
              width: "60%", height: "48%",
              background: "#2A2724",
              borderRadius: 2,
              boxShadow: "0 20px 60px rgba(42,39,36,0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}>
              <div style={{ width: "78%", height: "44%", background: "#111", border: "1px solid #3a3734" }} />
              <div style={{
                width: "78%", height: 2,
                background: "linear-gradient(to right, transparent, rgba(184,147,90,0.8), rgba(255,140,60,0.6), rgba(184,147,90,0.8), transparent)",
                filter: "blur(1px)",
              }} />
            </div>
            {/* Decorative accent corner */}
            <div style={{
              position: "absolute",
              top: -12, right: -12,
              width: 80, height: 80,
              borderTop: "2px solid #B8935A",
              borderRight: "2px solid #B8935A",
              opacity: 0.5,
            }} />
            <div style={{
              position: "absolute",
              bottom: -12, left: -12,
              width: 60, height: 60,
              borderBottom: "2px solid #B8935A",
              borderLeft: "2px solid #B8935A",
              opacity: 0.4,
            }} />
          </div>

          {/* Hero content */}
          <div style={{
            position: "relative",
            zIndex: 2,
            padding: "0 40px 100px",
            maxWidth: 620,
          }}>
            <div className="hero-a1" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <BrassRule />
              <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: "#B8935A" }}>
                Sunderland &amp; The North East
              </span>
            </div>

            <h1
              className="hero-a2 font-display"
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(52px, 6vw, 84px)",
                fontWeight: 300,
                lineHeight: 1.02,
                letterSpacing: "-0.015em",
                color: "#2A2724",
                marginBottom: 28,
              }}
            >
              Property
              <br />
              <em style={{ fontStyle: "italic", color: "#6B6460", fontWeight: 300 }}>
                transformed.
              </em>
            </h1>

            <p
              className="hero-a3"
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: "#6B6460",
                lineHeight: 1.75,
                maxWidth: 430,
                marginBottom: 44,
              }}
            >
              Premium painting &amp; decorating, electrical &amp; lighting
              and bespoke media walls — delivered by one accountable,
              certified team across the North East.
            </p>

            <div className="hero-a4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <BtnPrimary href="#contact">Book a free survey</BtnPrimary>
              <a
                href="https://wa.me/447922909983?text=Hi%20Propertycare%2C%20I%27d%20like%20a%20free%20quote."
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", color: "#1A5C3A",
                  textDecoration: "none",
                  padding: "13px 24px",
                  fontSize: 11, fontWeight: 500,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  borderRadius: 2, border: "1.5px solid #1A5C3A",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp us
              </a>
              <BtnOutline href="sms:+447922909983">Text us</BtnOutline>
            </div>

            <p
              className="hero-a5"
              style={{ fontSize: 11, color: "#9E9488", marginTop: 20, letterSpacing: "0.05em" }}
            >
              Free survey · No obligation · Fully insured
            </p>
          </div>

          {/* Scroll hint */}
          <div style={{
            position: "absolute", bottom: 32, right: 40,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          }}>
            <span style={{
              fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase",
              color: "#9E9488", writingMode: "vertical-rl",
            }}>Scroll</span>
            <div className="scroll-drip" style={{
              width: 1, height: 44, background: "linear-gradient(to bottom, #B8935A, transparent)",
            }} />
          </div>

          {/* Bottom brass rule */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 1, background: "linear-gradient(to right, transparent, #B8935A, transparent)",
            opacity: 0.4,
          }} />
        </section>

        {/* ══ TRUST BAR ═════════════════════════════════ */}
        <div style={{
          background: "#2A2724",
          borderBottom: "1px solid rgba(184,147,90,0.2)",
          overflow: "hidden",
        }}>
          <div
            className="trust-scroll"
            style={{
              display: "flex",
              overflowX: "auto",
              padding: "0 40px",
            }}
          >
            {[
              { icon: "shield", label: "Fully Insured" },
              { icon: "doc", label: "Free Quotations" },
              { icon: "star", label: "5★ Rated" },
              { icon: "home", label: "Residential & Commercial" },
              { icon: "bolt", label: "NICEIC / Part P Certified" },
              { icon: "check", label: "Written Guarantee" },
              { icon: "pin", label: "Sunderland Based" },
            ].map(({ icon, label }) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "20px 32px",
                whiteSpace: "nowrap",
                borderRight: "1px solid rgba(255,255,255,0.07)",
                flexShrink: 0,
              }}>
                <TrustIcon type={icon} />
                <span style={{
                  fontSize: 10, fontWeight: 400, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: "#C9C0B4",
                }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ ABOUT / INTRO ═════════════════════════════ */}
        <section style={S.section("#FDFCFB")}>
          <div style={S.inner()}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
              className="grid-responsive"
            >
              <div>
                <div className="reveal" style={S.eyebrow()}>
                  <BrassRule />
                  <span style={S.eyebrowText()}>Who we are</span>
                </div>
                <h2 className="reveal font-display" style={{ ...S.h2(), marginBottom: 22 }}>
                  One team. Four<br />disciplines. Zero compromise.
                </h2>
                <p className="reveal" style={{ ...S.p(), marginBottom: 28 }}>
                  Propertycare Paints &amp; Electrics is Sunderland&apos;s only
                  single-team whole-property transformation specialist. We
                  paint, wire, build media walls and maintain — all under one
                  roof, with one point of contact and a written guarantee on
                  every project.
                </p>
                <p className="reveal" style={{ ...S.p(), marginBottom: 40 }}>
                  No juggling trades. No unclear responsibility. Just one
                  accountable team that delivers premium results and leaves
                  your home clean and respected.
                </p>
                <div className="reveal" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <BtnPrimary href="#services">Our services</BtnPrimary>
                  <BtnOutline href="#transformations">See our work</BtnOutline>
                </div>
              </div>

              {/* Stats panel */}
              <div className="reveal" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1,
                background: "#E8E2D9",
                border: "1px solid #E8E2D9",
              }}>
                {[
                  { num: "100%", label: "Certified team — NICEIC & Part P" },
                  { num: "5★", label: "Consistently rated 5 stars by local clients" },
                  { num: "1", label: "Point of contact for every project" },
                  { num: "£0", label: "Free, no-obligation survey and quote" },
                ].map(({ num, label }) => (
                  <div key={label} style={{
                    background: "#FDFCFB",
                    padding: "36px 28px",
                  }}>
                    <div style={{
                      fontFamily: "Cormorant Garamond, Georgia, serif",
                      fontSize: 44, fontWeight: 300, lineHeight: 1,
                      color: "#2A2724", marginBottom: 8,
                    }}>{num}</div>
                    <div style={{ fontSize: 12, color: "#6B6460", lineHeight: 1.55, fontWeight: 300 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`@media(max-width:860px){.grid-responsive{grid-template-columns:1fr !important;gap:44px !important;}}`}</style>
        </section>

        {/* ══ SERVICES ══════════════════════════════════ */}
        <section style={S.section("#F8F5F0")} id="services">
          <div style={S.inner()}>
            <div className="reveal" style={S.eyebrow()}>
              <BrassRule />
              <span style={S.eyebrowText()}>What we do</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 20 }}>
              <h2 className="reveal font-display" style={{ ...S.h2(), marginBottom: 0, maxWidth: 480 }}>
                Four disciplines.<br />One accountable team.
              </h2>
              <p className="reveal" style={{ fontSize: 13, color: "#9E9488", maxWidth: 320, lineHeight: 1.6, textAlign: "right" }}>
                Every service delivered to a premium standard — by the same certified team who quoted you.
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 1,
              background: "#E8E2D9",
              border: "1px solid #E8E2D9",
            }}
              className="services-grid"
            >
              {[
                {
                  n: "01", title: "Painting & Decorating",
                  desc: "Flawless, hard-wearing finishes that transform how a room looks and feels. From surface preparation to final coat — meticulous at every stage.",
                  cta: "Request a painting estimate",
                },
                {
                  n: "02", title: "Electrical & Lighting",
                  desc: "Modern electrical upgrades that improve safety, convenience and atmosphere. NICEIC certified — every installation signed off to Part P.",
                  cta: "Speak with an electrician",
                },
                {
                  n: "03", title: "Bespoke Media Walls",
                  desc: "Joinery, electric fire, ambient lighting and concealed cabling — designed, built and finished by one team. No visible wires, no compromise.",
                  cta: "Get a media wall quote",
                },
                {
                  n: "04", title: "Property Maintenance",
                  desc: "Reliable, tidy upkeep that protects and elevates your property over time. Trusted by homeowners, landlords and commercial clients.",
                  cta: "Arrange maintenance",
                },
              ].map(({ n, title, desc, cta }) => (
                <div
                  key={n}
                  className="service-card reveal"
                  style={{
                    background: "#FDFCFB",
                    padding: "48px 40px",
                    transition: "background 0.3s",
                  }}
                >
                  <span style={{
                    display: "block",
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: 11, color: "#B8935A",
                    letterSpacing: "0.2em", marginBottom: 24,
                  }}>{n} / 04</span>
                  <h3 style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: 26, fontWeight: 400, marginBottom: 14, lineHeight: 1.2,
                    color: "#2A2724",
                  }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "#6B6460", lineHeight: 1.72, marginBottom: 28, fontWeight: 300 }}>
                    {desc}
                  </p>
                  <a href="#contact" style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    fontSize: 10, fontWeight: 500, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "#1A5C3A", textDecoration: "none",
                  }}>
                    {cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:700px){.services-grid{grid-template-columns:1fr !important;}}`}</style>
        </section>

        {/* ══ BEFORE / AFTER ════════════════════════════ */}
        <section style={S.section("#FDFCFB")} id="transformations">
          <div style={S.inner()}>
            <div className="reveal" style={S.eyebrow()}>
              <BrassRule />
              <span style={S.eyebrowText()}>See the difference</span>
            </div>
            <h2 className="reveal font-display" style={{ ...S.h2(), marginBottom: 12 }}>
              Drag to reveal<br />
              <em style={{ fontStyle: "italic", color: "#9E9488", fontWeight: 300 }}>a real transformation.</em>
            </h2>
            <p className="reveal" style={{ ...S.p(), marginBottom: 40 }}>
              Slide left and right to compare before and after. Every project is documented, dated and verified.
            </p>

            <div className="reveal">
              <BeforeAfterSlider />
            </div>

            <div className="reveal" style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-start", gap: 24, marginTop: 28, flexWrap: "wrap",
            }}>
              <div>
                <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8935A", marginBottom: 7 }}>
                  The Concord Media Wall · Washington, NE37 · 2025 · Living Room
                </div>
                <div style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontSize: 22, fontWeight: 400, marginBottom: 8, color: "#2A2724",
                }}>
                  Chimney Breast to Cinematic Centrepiece
                </div>
                <p style={{ fontSize: 13, color: "#6B6460", maxWidth: 480, lineHeight: 1.7, fontWeight: 300 }}>
                  A dated chimney breast reimagined as a warm, architectural feature wall with electric fire,
                  concealed cabling and ambient uplighting.
                </p>
              </div>
              <BtnPrimary href="#contact">Request similar</BtnPrimary>
            </div>
          </div>
        </section>

        {/* ══ PORTFOLIO GRID ════════════════════════════ */}
        <section style={S.section("#F8F5F0")}>
          <div style={S.inner()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
              <div>
                <div className="reveal" style={S.eyebrow()}>
                  <BrassRule />
                  <span style={S.eyebrowText()}>Transformations</span>
                </div>
                <h2 className="reveal font-display" style={{ ...S.h2(), marginBottom: 0 }}>
                  A selection<br />of recent work.
                </h2>
              </div>
              <BtnOutline href="#contact">View all projects</BtnOutline>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1, background: "#E8E2D9",
              border: "1px solid #E8E2D9",
            }}
              className="portfolio-grid"
            >
              {[
                { color: "linear-gradient(135deg, #D8CCBA 0%, #C8BAA0 100%)", tag: "Media Wall · Washington", title: "The Concord Media Wall", loc: "Concord, NE37 · 2025" },
                { color: "linear-gradient(135deg, #D4C8B0 0%, #C4B498 100%)", tag: "Painting & Decorating · Washington", title: "Sulgrave Townhouse Repaint", loc: "Sulgrave, NE37 · 2025" },
                { color: "linear-gradient(135deg, #CCCCBE 0%, #BCB8AA 100%)", tag: "Electrical & Lighting · Seaham", title: "Seaham Coastal Rewire", loc: "Seaham, SR7 · 2025" },
              ].map(({ color, tag, title, loc }) => (
                <div
                  key={title}
                  className="reveal"
                  style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}
                >
                  <div style={{
                    width: "100%", height: 280,
                    background: color,
                    transition: "transform 0.5s ease",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {/* Placeholder room illustration */}
                    <div style={{
                      width: "60%", height: "60%",
                      background: "rgba(42,39,36,0.08)",
                      border: "1px solid rgba(184,147,90,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <div style={{
                        width: "50%", height: "50%",
                        background: "rgba(42,39,36,0.12)",
                        border: "1px solid rgba(184,147,90,0.15)",
                      }} />
                    </div>
                  </div>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(42,39,36,0.88) 0%, transparent 55%)",
                    padding: "20px",
                    display: "flex", flexDirection: "column", justifyContent: "flex-end",
                  }}>
                    <div style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8935A", marginBottom: 6 }}>{tag}</div>
                    <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 20, fontWeight: 400, marginBottom: 3, color: "#fff" }}>{title}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>{loc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:700px){.portfolio-grid{grid-template-columns:1fr !important;}}`}</style>
        </section>

        {/* ══ WHY US ════════════════════════════════════ */}
        <section style={{ ...S.section("#2A2724"), borderTop: "1px solid rgba(184,147,90,0.2)" }} id="whyus">
          <div style={S.inner()}>
            <div className="reveal" style={S.eyebrow()}>
              <BrassRule />
              <span style={S.eyebrowText()}>Why Propertycare</span>
            </div>
            <h2 className="reveal font-display" style={{ ...S.h2(), color: "#F8F5F0", marginBottom: 14 }}>
              Reasons to trust us<br />with your property.
            </h2>
            <p className="reveal" style={{ ...S.p(), color: "#9E9488", marginBottom: 64 }}>
              Everything below answers one question: why should you trust this company with a £20,000+ transformation?
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1, background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
              className="why-grid"
            >
              {[
                { n: "01", t: "One Accountable Team", d: "Painting, electrical, media walls and maintenance under a single roof — no juggling trades, no miscommunication." },
                { n: "02", t: "Certified & Insured", d: "NICEIC / Part P registered electrical work and full public liability cover as standard on every project." },
                { n: "03", t: "Written Guarantee", d: "Every transformation is backed by a clear, written workmanship guarantee — your confidence is protected." },
                { n: "04", t: "Premium Finishes", d: "Specialist materials and meticulous preparation for finishes that last years and still look impressive in them." },
                { n: "05", t: "Local & Established", d: "Rooted in Sunderland, trusted across the North East. Real local references available on request." },
                { n: "06", t: "Transparent Fixed Quotes", d: "Itemised, no-surprise pricing agreed up front. We leave your home clean and respected after every visit." },
              ].map(({ n, t, d }) => (
                <div key={n} className="reveal" style={{
                  background: "rgba(248,245,240,0.03)",
                  padding: "44px 34px",
                  borderRight: "1px solid rgba(255,255,255,0.04)",
                  transition: "background 0.3s",
                }}>
                  <div style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: 48, fontWeight: 300, lineHeight: 1,
                    color: "rgba(184,147,90,0.18)", marginBottom: 18,
                  }}>{n}</div>
                  <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", marginBottom: 10, color: "#F0EBE3" }}>{t}</div>
                  <p style={{ fontSize: 12, color: "#9E9488", lineHeight: 1.72, fontWeight: 300 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:700px){.why-grid{grid-template-columns:1fr !important;}}`}</style>
        </section>

        {/* ══ SERVICE AREAS ═════════════════════════════ */}
        <section style={S.section("#F8F5F0")} id="areas">
          <div style={S.inner()}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.8fr",
              gap: 80, alignItems: "start",
            }}
              className="areas-layout"
            >
              <div>
                <div className="reveal" style={S.eyebrow()}>
                  <BrassRule />
                  <span style={S.eyebrowText()}>Coverage</span>
                </div>
                <h2 className="reveal font-display" style={{ ...S.h2() }}>
                  Proudly serving<br />the North East.
                </h2>
                <p className="reveal" style={{ ...S.p(), marginBottom: 28 }}>
                  Local, established and genuinely on your doorstep. Dedicated coverage across Sunderland and the surrounding region.
                </p>
                <BtnPrimary href="#contact">Check your area</BtnPrimary>
              </div>

              <div className="reveal" style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1, background: "#E8E2D9",
                border: "1px solid #E8E2D9",
              }}>
                {/* Primary */}
                <div style={{
                  gridColumn: "1 / -1",
                  background: "#FDFCFB",
                  padding: "24px 20px",
                  borderBottom: "1px solid #E8E2D9",
                }}>
                  <div style={{ width: 20, height: 2, background: "#B8935A", marginBottom: 9 }} />
                  <span style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: 22, fontWeight: 400, color: "#2A2724",
                  }}>Sunderland</span>
                </div>
                {[
                  "Washington","Seaham","South Shields","Gateshead","Newcastle",
                  "Durham","Jarrow","Hebburn","Peterlee","Chester-le-St",
                  "Boldon","Cleadon","Whitburn","Ryhope","Fulwell",
                  "East Boldon","Houghton",
                ].map((a) => (
                  <div key={a} style={{
                    background: "#FDFCFB",
                    padding: "18px 18px",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: "#6B6460",
                    textTransform: "uppercase",
                    transition: "background 0.2s, color 0.2s",
                    cursor: "pointer",
                  }}>
                    <div style={{ width: 14, height: 1, background: "#B8935A", marginBottom: 7 }} />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`@media(max-width:860px){.areas-layout{grid-template-columns:1fr !important;gap:36px !important;}}`}</style>
        </section>

        {/* ══ TESTIMONIALS ══════════════════════════════ */}
        <section style={{ ...S.section("#FDFCFB"), borderTop: "1px solid #E8E2D9" }}>
          <div style={S.inner()}>
            <div className="reveal" style={S.eyebrow()}>
              <BrassRule />
              <span style={S.eyebrowText()}>Client stories · Rated 5.0</span>
            </div>
            <h2 className="reveal font-display" style={{ ...S.h2(), marginBottom: 52 }}>
              Trusted by North East<br />homeowners.
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
              className="testi-grid"
            >
              {[
                { q: "The media wall completely changed our living room — the finish and hidden wiring are flawless. Tidy, professional and exactly on quote.", name: "Rachel M.", loc: "Concord, Washington", d: "1" },
                { q: "They repainted the whole house and rewired the kitchen. One team, one point of contact, no stress. The standard of work is genuinely premium.", name: "David & Helen T.", loc: "Sulgrave, Washington", d: "2" },
                { q: "Honest, certified and meticulous. The lighting design transformed how our period home feels in the evenings. We won't use anyone else.", name: "Andrew P.", loc: "Seaham, SR7", d: "3" },
              ].map(({ q, name, loc, d }) => (
                <div key={name} className={`reveal reveal-d${d}`} style={{
                  background: "#F8F5F0",
                  border: "1px solid #E8E2D9",
                  padding: "36px",
                  position: "relative",
                }}>
                  <div style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: 56, color: "#B8935A", opacity: 0.35,
                    position: "absolute", top: 18, left: 26, lineHeight: 1,
                  }}>&ldquo;</div>
                  <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#B8935A">
                        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    ))}
                  </div>
                  <p style={{
                    fontSize: 13, fontStyle: "italic", fontWeight: 300,
                    color: "#4A4541", lineHeight: 1.72, marginBottom: 24,
                    paddingTop: 24,
                  }}>
                    &ldquo;{q}&rdquo;
                  </p>
                  <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", marginBottom: 3, color: "#2A2724" }}>{name}</div>
                  <div style={{ fontSize: 10, color: "#B8935A", letterSpacing: "0.12em", textTransform: "uppercase" }}>{loc}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:700px){.testi-grid{grid-template-columns:1fr !important;}}`}</style>
        </section>

        {/* ══ CONTACT ═══════════════════════════════════ */}
        <section
          style={{
            padding: "112px 40px",
            background: "linear-gradient(135deg, #F5F0EA 0%, #EDE5D8 100%)",
            borderTop: "1px solid rgba(184,147,90,0.25)",
            textAlign: "center",
          }}
          id="contact"
        >
          <div style={{ ...S.inner(), maxWidth: 720 }}>
            <div className="reveal" style={{ ...S.eyebrow(), justifyContent: "center" }}>
              <BrassRule />
              <span style={S.eyebrowText()}>Start your transformation</span>
              <BrassRule />
            </div>
            <h2 className="reveal font-display" style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(38px, 4vw, 58px)",
              fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.01em",
              color: "#2A2724", marginBottom: 16, textAlign: "center",
            }}>
              Tell us about<br />your space.
            </h2>
            <p className="reveal" style={{
              fontSize: 14, fontWeight: 300, color: "#6B6460",
              lineHeight: 1.75, maxWidth: 480, margin: "0 auto 52px",
              textAlign: "center",
            }}>
              The fastest way to a free, no-obligation quote is a quick message. Tap WhatsApp — we reply usually within the hour.
            </p>

            <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
              <a href="https://wa.me/447922909983?text=Hi%20Propertycare%2C%20I%27d%20like%20a%20quote." style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#25D366", color: "#fff", textDecoration: "none",
                padding: "17px 32px", fontSize: 12, fontWeight: 500,
                letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 2,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp — Fastest Reply
              </a>
              <a href="sms:+447922909983" style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                background: "transparent", color: "#2A2724", textDecoration: "none",
                padding: "16px 24px", fontSize: 12, fontWeight: 400,
                letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 2,
                border: "1px solid #C9C0B4",
              }}>
                Text 07922 909983
              </a>
              <a href="tel:+447922909983" style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                background: "transparent", color: "#2A2724", textDecoration: "none",
                padding: "16px 24px", fontSize: 12, fontWeight: 400,
                letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 2,
                border: "1px solid #C9C0B4",
              }}>
                Call 07922 909983
              </a>
            </div>

            <p className="reveal" style={{ fontSize: 11, color: "#9E9488", letterSpacing: "0.06em" }}>
              Takes 2 minutes · No obligation · Free, no-pressure quote
            </p>
          </div>
        </section>

        {/* ══ FOOTER ════════════════════════════════════ */}
        <footer style={{ background: "#2A2724", padding: "64px 40px 32px", borderTop: "1px solid rgba(184,147,90,0.2)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: 44, marginBottom: 52,
            }}
              className="footer-grid"
            >
              <div>
                <div style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontSize: 20, fontWeight: 400, color: "#F8F5F0", marginBottom: 3,
                }}>Propertycare</div>
                <div style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#B8935A", marginBottom: 14 }}>
                  Paints &amp; Electrics
                </div>
                <p style={{ fontSize: 12, color: "#9E9488", lineHeight: 1.7, maxWidth: 240, marginBottom: 20, fontWeight: 300 }}>
                  The North East&apos;s only single-team whole-property transformation specialists. Serving Sunderland and surrounding areas.
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {["NICEIC", "Part P", "TrustMark", "Dulux Select"].map((c) => (
                    <span key={c} style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      padding: "3px 8px",
                      fontSize: 8, letterSpacing: "0.18em",
                      textTransform: "uppercase", color: "#9E9488",
                    }}>{c}</span>
                  ))}
                </div>
              </div>

              {[
                {
                  heading: "Services",
                  links: ["Painting & Decorating", "Electrical & Lighting", "Bespoke Media Walls", "Property Maintenance"],
                  hrefs: ["#services", "#services", "#services", "#services"],
                },
                {
                  heading: "Areas",
                  links: ["Sunderland", "Washington", "Seaham", "South Shields", "Gateshead", "Newcastle"],
                  hrefs: ["#areas", "#areas", "#areas", "#areas", "#areas", "#areas"],
                },
                {
                  heading: "Contact",
                  links: ["WhatsApp", "Text Message", "07922 909983"],
                  hrefs: ["https://wa.me/447922909983", "sms:+447922909983", "tel:+447922909983"],
                },
              ].map(({ heading, links, hrefs }) => (
                <div key={heading}>
                  <div style={{ fontSize: 9, letterSpacing: "0.26em", textTransform: "uppercase", color: "#B8935A", marginBottom: 18 }}>
                    {heading}
                  </div>
                  <ul style={{ listStyle: "none" }}>
                    {links.map((l, i) => (
                      <li key={l} style={{ marginBottom: 10 }}>
                        <a href={hrefs[i]} style={{ fontSize: 12, color: "#9E9488", textDecoration: "none", fontWeight: 300 }}>
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.06)",
              fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.04em",
              flexWrap: "wrap", gap: 12,
            }}>
              <span>© Propertycare Paints &amp; Electrics. Fully insured · NICEIC / Part P · Written workmanship guarantee.</span>
              <span>Premium property transformations across the North East.</span>
            </div>
          </div>
          <style>{`@media(max-width:860px){.footer-grid{grid-template-columns:1fr 1fr !important;} footer{padding:48px 20px 24px !important;}}`}</style>
        </footer>

      </main>

      {/* Global mobile padding fix for nav */}
      <style>{`
        @media(max-width:860px){
          section, footer { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </>
  );
}

/* ── Trust icon helper ── */
function TrustIcon({ type }: { type: string }) {
  const s = { width: 15, height: 15, color: "#B8935A", flexShrink: 0 };
  if (type === "shield") return <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>;
  if (type === "doc") return <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>;
  if (type === "star") return <svg {...s} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>;
  if (type === "home") return <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>;
  if (type === "bolt") return <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>;
  if (type === "check") return <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.42 3.121c-.673.955-1.693 1.563-2.822 1.563-.24 0-.487-.04-.718-.115A3.75 3.75 0 0112 21.75a3.75 3.75 0 01-3.447-2.373 3.751 3.751 0 01-.718.115c-1.129 0-2.149-.608-2.822-1.563a3.745 3.745 0 01-.42-3.121A3.75 3.75 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.42-3.121c.673-.955 1.693-1.563 2.822-1.563.24 0 .487.04.718.115A3.75 3.75 0 0112 2.25a3.75 3.75 0 013.447 2.373c.23-.075.477-.115.718-.115 1.129 0 2.149.608 2.822 1.563.434.616.644 1.354.42 3.121A3.75 3.75 0 0121 12z"/></svg>;
  return <svg {...s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>;
}
