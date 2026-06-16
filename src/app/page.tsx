import Nav from "./components/Nav";
import FloatingContacts from "./components/FloatingContacts";
import ScrollReveal from "./components/ScrollReveal";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Marquee from "./components/Marquee";
import FooterLinks from "./components/FooterLinks";

/* ── Premium Unsplash placeholders — swap with client photos when ready ── */
const IMG = {
  hero:     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=88&auto=format&fit=crop",
  about:    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=960&q=82&auto=format&fit=crop",
  paint:    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=82&auto=format&fit=crop",
  electric: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=82&auto=format&fit=crop",
  media:    "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=82&auto=format&fit=crop",
  maint:    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=82&auto=format&fit=crop",
  p1:       "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=82&auto=format&fit=crop",
  p2:       "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=82&auto=format&fit=crop",
  p3:       "https://images.unsplash.com/photo-1600607687939-ce8a6d24cca4?w=900&q=82&auto=format&fit=crop",
  cta:      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=82&auto=format&fit=crop",
};

const WA = "https://wa.me/447922909983?text=Hi%20Propertycare%2C%20I%27d%20like%20a%20free%20quote.";

/* ── Static helper components (no event handlers — safe for Server Components) ── */
function BrassRule({ w = 28 }: { w?: number }) {
  return <span style={{ display: "block", width: w, height: 1.5, background: "#B8935A", flexShrink: 0 }} />;
}

function EyebrowRow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, justifyContent: center ? "center" : "flex-start" }}>
      <BrassRule />
      <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.32em", textTransform: "uppercase", color: "#B8935A" }}>
        {children}
      </span>
      {center && <BrassRule />}
    </div>
  );
}

/* ─────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <ScrollReveal />
      <FloatingContacts />
      <main id="top">

        {/* ══════════════════════════════════════
            HERO — full-bleed photo, bold headline
        ══════════════════════════════════════ */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG.hero} alt="Premium property transformation — Sunderland" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />

          {/* Layered overlay */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,13,11,0.92) 0%, rgba(15,13,11,0.62) 50%, rgba(15,13,11,0.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,13,11,0.98) 0%, rgba(15,13,11,0.3) 40%, transparent 65%)" }} />

          {/* Subtle grid */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(184,147,90,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(184,147,90,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />

          {/* Hero content */}
          <div style={{ position: "relative", zIndex: 2, padding: "0 52px 108px", maxWidth: 800 }}>
            <div className="h-a1" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <BrassRule />
              <span style={{ fontSize: 10, fontWeight: 400, letterSpacing: "0.32em", textTransform: "uppercase", color: "#B8935A" }}>
                Sunderland &amp; The North East
              </span>
            </div>

            <h1 className="h-a2" style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(56px, 8vw, 108px)",
              fontWeight: 300, lineHeight: 0.96,
              letterSpacing: "-0.025em",
              color: "#FDFCFB",
              marginBottom: 36,
            }}>
              Property<br />
              <em style={{ fontStyle: "italic", color: "rgba(248,245,240,0.55)", fontWeight: 300 }}>transformed.</em>
            </h1>

            {/* Trust line */}
            <p className="h-a3" style={{
              fontSize: 13, fontWeight: 400, color: "rgba(253,252,251,0.5)",
              letterSpacing: "0.16em", textTransform: "uppercase",
              marginBottom: 20,
            }}>
              Painting &bull; Electrical &bull; Media Walls &bull; Maintenance
            </p>

            <p className="h-a4" style={{ fontSize: 16, fontWeight: 300, color: "rgba(253,252,251,0.72)", lineHeight: 1.75, maxWidth: 500, marginBottom: 48 }}>
              One certified team delivering premium property transformations across Sunderland and the North East. Free survey, written guarantee, no surprises.
            </p>

            <div className="h-a5" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#contact" className="btn-forest">
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Get Your Free Quote
                </span>
              </a>
              <a href={WA} className="btn-border-light">WhatsApp Us</a>
              <a href="tel:+447922909983" style={{
                display: "flex", flexDirection: "column", textDecoration: "none", marginLeft: 8,
              }}>
                <span style={{ fontSize: 8, letterSpacing: "0.28em", textTransform: "uppercase", color: "#B8935A" }}>Call free</span>
                <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 20, fontWeight: 500, color: "#FDFCFB", letterSpacing: "0.04em", lineHeight: 1.1 }}>
                  07922 909983
                </span>
              </a>
            </div>

            <p className="h-a5" style={{ fontSize: 11, color: "rgba(253,252,251,0.28)", marginTop: 22, letterSpacing: "0.1em" }}>
              Free survey · No obligation · Fully insured
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="h-a6" style={{ position: "absolute", bottom: 36, right: 52, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(253,252,251,0.3)", writingMode: "vertical-rl" }}>Scroll</span>
            <div className="scroll-drip" style={{ width: 1, height: 56, background: "linear-gradient(to bottom, #B8935A, transparent)" }} />
          </div>

          {/* Bottom brass line */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(184,147,90,0.5), transparent)" }} />
        </section>

        {/* ══════════════════════════════════════
            MARQUEE TICKER
        ══════════════════════════════════════ */}
        <Marquee />

        {/* ══════════════════════════════════════
            TRUST STRIP
        ══════════════════════════════════════ */}
        <div style={{ background: "#F8F5F0", borderBottom: "1px solid #E8E2D9", overflowX: "auto" }} className="trust-bar">
          <div style={{ display: "flex", minWidth: "max-content", padding: "0 52px" }}>
            {[
              ["Fully Insured", "shield"],
              ["Free Quotations", "doc"],
              ["5★ Rated", "star"],
              ["NICEIC Certified", "bolt"],
              ["Written Guarantee", "check"],
              ["Residential & Commercial", "home"],
            ].map(([label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "18px 36px", borderRight: "1px solid #E8E2D9", flexShrink: 0 }}>
                <div style={{ width: 6, height: 6, background: "#B8935A", borderRadius: "50%", flexShrink: 0 }} />
                <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6460", whiteSpace: "nowrap" }}>
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
                <div className="rv"><EyebrowRow>Who we are</EyebrowRow></div>
                <h2 className="rv rv-d1" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(40px, 4.5vw, 62px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.015em", color: "#1A1917", marginBottom: 24 }}>
                  One team.<br />Four disciplines.<br />
                  <em style={{ fontStyle: "italic", color: "#9E9488", fontWeight: 300 }}>Zero compromise.</em>
                </h2>
                <p className="rv rv-d2" style={{ fontSize: 15, fontWeight: 300, color: "#6B6460", lineHeight: 1.8, maxWidth: 460, marginBottom: 20 }}>
                  Propertycare is Sunderland&apos;s only single-team whole-property transformation specialist. We paint, wire, build media walls and maintain — all under one roof, with one point of contact and a written guarantee on every project.
                </p>
                <p className="rv rv-d3" style={{ fontSize: 15, fontWeight: 300, color: "#6B6460", lineHeight: 1.8, maxWidth: 460, marginBottom: 44 }}>
                  No juggling trades. No unclear responsibility. Just one accountable team that delivers premium results.
                </p>
                <div className="rv rv-d4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="#services" className="btn-forest"><span>Our Services</span></a>
                  <a href="#transformations" className="btn-border">See Our Work</a>
                </div>
              </div>

              <div>
                <div className="img-wrap rv-scale rv" style={{ marginBottom: 20, borderRadius: 2, overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG.about} alt="Propertycare team at work" style={{ width: "100%", height: 400, objectFit: "cover", display: "block" }} />
                </div>
                {/* Stats */}
                <div className="rv rv-d2" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9" }}>
                  {[["100%","Certified"],["5★","Rated"],["1","Contact"],["£0","Survey"]].map(([n, l]) => (
                    <div key={l} style={{ background: "#FDFCFB", padding: "20px 12px", textAlign: "center" }}>
                      <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 36, fontWeight: 300, color: "#1A1917", lineHeight: 1 }}>{n}</div>
                      <div style={{ fontSize: 9, color: "#9E9488", marginTop: 6, letterSpacing: "0.14em", textTransform: "uppercase" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SERVICES
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }} id="services">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 20 }}>
              <div>
                <div className="rv"><EyebrowRow>What we do</EyebrowRow></div>
                <h2 className="rv rv-d1" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(38px, 4vw, 58px)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.015em", color: "#1A1917" }}>
                  Four disciplines.<br />One accountable team.
                </h2>
              </div>
              <p className="rv" style={{ fontSize: 13, color: "#9E9488", maxWidth: 300, lineHeight: 1.7, textAlign: "right" }}>
                Every service delivered to a premium standard — by the same certified team who quoted you.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9" }} className="grid-2">
              {[
                { n: "01", title: "Painting & Decorating", img: IMG.paint, desc: "Flawless, hard-wearing finishes that transform how a room looks and feels. Meticulous preparation to final coat — every time.", cta: "Request a painting estimate" },
                { n: "02", title: "Electrical & Lighting", img: IMG.electric, desc: "Modern upgrades that improve safety, convenience and atmosphere. NICEIC certified, every installation signed off to Part P.", cta: "Speak with an electrician" },
                { n: "03", title: "Bespoke Media Walls", img: IMG.media, desc: "Joinery, fire surround, ambient lighting and concealed cabling — designed, built and finished by one team. No visible wires.", cta: "Get a media wall quote" },
                { n: "04", title: "Property Maintenance", img: IMG.maint, desc: "Reliable, tidy upkeep that protects and elevates your property. Trusted by homeowners, landlords and commercial clients.", cta: "Arrange maintenance" },
              ].map(({ n, title, img, desc, cta }) => (
                <div key={n} className="svc-card rv">
                  <div style={{ height: 240, overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }} />
                  </div>
                  <div style={{ padding: "36px 36px 40px" }}>
                    <span style={{ display: "block", fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 11, color: "#B8935A", letterSpacing: "0.2em", marginBottom: 16 }}>{n} / 04</span>
                    <h3 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 28, fontWeight: 400, marginBottom: 14, lineHeight: 1.2, color: "#1A1917" }}>{title}</h3>
                    <p style={{ fontSize: 13, color: "#6B6460", lineHeight: 1.75, marginBottom: 26, fontWeight: 300 }}>{desc}</p>
                    <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1A5C3A", textDecoration: "none" }}>
                      {cta} →
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
                <div className="rv"><EyebrowRow>See the difference</EyebrowRow></div>
                <h2 className="rv rv-d1" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(38px, 4.5vw, 60px)", fontWeight: 300, lineHeight: 1.05, color: "#1A1917", marginBottom: 22 }}>
                  Drag to reveal<br />
                  <em style={{ fontStyle: "italic", color: "#9E9488", fontWeight: 300 }}>a real transformation.</em>
                </h2>
                <p className="rv rv-d2" style={{ fontSize: 14, color: "#6B6460", lineHeight: 1.78, maxWidth: 400, marginBottom: 36, fontWeight: 300 }}>
                  Slide left and right to compare. Every project is documented, dated and backed by our written workmanship guarantee.
                </p>
                <div className="rv rv-d3" style={{ marginBottom: 32 }}>
                  <div style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8935A", marginBottom: 7 }}>
                    The Concord Media Wall · Washington, NE37 · 2025
                  </div>
                  <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 22, fontWeight: 400, color: "#1A1917", marginBottom: 8 }}>
                    Chimney Breast to Cinematic Centrepiece
                  </div>
                  <p style={{ fontSize: 13, color: "#6B6460", lineHeight: 1.72, fontWeight: 300 }}>
                    Dated chimney breast reimagined as a warm architectural media wall with electric fire, concealed cabling and ambient uplighting.
                  </p>
                </div>
                <div className="rv rv-d4">
                  <a href="#contact" className="btn-forest"><span>Request Similar</span></a>
                </div>
              </div>
              <div className="rv rv-d1">
                <BeforeAfterSlider />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PORTFOLIO
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 16 }}>
              <div>
                <div className="rv"><EyebrowRow>Transformations</EyebrowRow></div>
                <h2 className="rv rv-d1" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(38px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.015em", color: "#1A1917" }}>
                  A selection of<br />recent work.
                </h2>
              </div>
              <a href="#contact" className="btn-border rv">View All Projects</a>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9" }} className="grid-3">
              {[
                { img: IMG.p1, tag: "Media Wall · Washington", title: "The Concord Media Wall", loc: "NE37 · 2025" },
                { img: IMG.p2, tag: "Painting & Decorating · Washington", title: "Sulgrave Townhouse Repaint", loc: "NE37 · 2025" },
                { img: IMG.p3, tag: "Electrical & Lighting · Seaham", title: "Seaham Coastal Rewire", loc: "SR7 · 2025" },
              ].map(({ img, tag, title, loc }, i) => (
                <div key={title} className={`port-card rv rv-d${i + 1}`} style={{ height: 320 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={title} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,13,11,0.93) 0%, transparent 55%)", padding: "22px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <div style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8935A", marginBottom: 7 }}>{tag}</div>
                    <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 21, fontWeight: 400, color: "#fff", marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{loc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            WHY US — dark
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#1A1917", borderTop: "1px solid rgba(184,147,90,0.2)" }} id="whyus">
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 72 }} className="grid-2">
              <div>
                <div className="rv"><EyebrowRow>Why Propertycare</EyebrowRow></div>
                <h2 className="rv rv-d1" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(38px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.015em", color: "#F8F5F0" }}>
                  Reasons to trust us with your property.
                </h2>
              </div>
              <div className="rv rv-d2" style={{ display: "flex", alignItems: "flex-end" }}>
                <p style={{ fontSize: 15, fontWeight: 300, color: "#9E9488", lineHeight: 1.78, maxWidth: 520 }}>
                  Everything below answers one question: why should you trust this company with a £20,000+ transformation? We&apos;re not the cheapest. We&apos;re the best value — certified, guaranteed and genuinely accountable.
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.04)" }} className="grid-3">
              {[
                { n: "01", t: "One Accountable Team", d: "Painting, electrical, media walls and maintenance under a single roof — no juggling trades, no miscommunication, no surprises." },
                { n: "02", t: "Certified & Insured", d: "NICEIC / Part P registered electrical work and full public liability cover as standard on every single project we undertake." },
                { n: "03", t: "Written Guarantee", d: "Every transformation backed by a clear, written workmanship guarantee. Your confidence and peace of mind are fully protected." },
                { n: "04", t: "Premium Finishes", d: "Specialist materials and meticulous preparation for finishes that last years — and still look impressive in them." },
                { n: "05", t: "Local & Established", d: "Rooted in Sunderland, trusted across the North East. Real local references available on request at any time." },
                { n: "06", t: "Transparent Fixed Quotes", d: "Itemised, no-surprise pricing agreed up front in writing. We leave your home clean and respected after every visit." },
              ].map(({ n, t, d }, i) => (
                <div key={n} className={`why-card rv rv-d${(i % 3) + 1}`} style={{ background: "rgba(248,245,240,0.025)", padding: "48px 36px", borderRight: "1px solid rgba(255,255,255,0.04)" }}>
                  <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 56, fontWeight: 300, lineHeight: 1, color: "rgba(184,147,90,0.12)", marginBottom: 20 }}>{n}</div>
                  <div style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", marginBottom: 12, color: "#F0EBE3" }}>{t}</div>
                  <p style={{ fontSize: 13, color: "#9E9488", lineHeight: 1.75, fontWeight: 300 }}>{d}</p>
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
                <div className="rv"><EyebrowRow>Coverage</EyebrowRow></div>
                <h2 className="rv rv-d1" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(38px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.015em", color: "#1A1917", marginBottom: 20 }}>
                  Proudly serving the North East.
                </h2>
                <p className="rv rv-d2" style={{ fontSize: 14, fontWeight: 300, color: "#6B6460", lineHeight: 1.78, maxWidth: 380, marginBottom: 36 }}>
                  Local, established and genuinely on your doorstep. Dedicated coverage across Sunderland and the surrounding region.
                </p>
                <div className="rv rv-d3"><a href="#contact" className="btn-forest"><span>Check Your Area</span></a></div>
              </div>

              <div className="rv rv-d1" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9" }}>
                <div style={{ gridColumn: "1 / -1", background: "#FDFCFB", padding: "22px 20px", borderBottom: "1px solid #E8E2D9" }}>
                  <div style={{ width: 20, height: 2, background: "#B8935A", marginBottom: 8 }} />
                  <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 22, fontWeight: 400, color: "#1A1917" }}>Sunderland</span>
                  <span style={{ fontSize: 9, color: "#B8935A", marginLeft: 10, letterSpacing: "0.15em", textTransform: "uppercase" }}>Primary</span>
                </div>
                {["Washington","Seaham","South Shields","Gateshead","Newcastle","Durham","Jarrow","Hebburn","Peterlee","Chester-le-St","Boldon","Cleadon","Whitburn","Ryhope","Fulwell","East Boldon","Houghton"].map((a) => (
                  <div key={a} className="area-cell" style={{ background: "#FDFCFB", padding: "17px 17px" }}>
                    <div style={{ width: 12, height: 1, background: "#B8935A", marginBottom: 6 }} />
                    <span style={{ fontSize: 11, letterSpacing: "0.1em", color: "#6B6460", textTransform: "uppercase" }}>{a}</span>
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
            <div className="rv"><EyebrowRow>Client stories · Rated 5.0</EyebrowRow></div>
            <h2 className="rv rv-d1" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(38px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.015em", color: "#1A1917", marginBottom: 60 }}>
              Trusted by North East homeowners.
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-3">
              {[
                { q: "The media wall completely changed our living room — the finish and hidden wiring are flawless. Tidy, professional and exactly on quote.", name: "Rachel M.", loc: "Concord, Washington", d: 1 },
                { q: "They repainted the whole house and rewired the kitchen. One team, one point of contact, no stress. The standard of work is genuinely premium.", name: "David & Helen T.", loc: "Sulgrave, Washington", d: 2 },
                { q: "Honest, certified and meticulous. The lighting design transformed how our period home feels in the evenings. We won't use anyone else.", name: "Andrew P.", loc: "Seaham, SR7", d: 3 },
              ].map(({ q, name, loc, d }) => (
                <div key={name} className={`testi-card rv rv-d${d}`} style={{ background: "#F8F5F0", border: "1px solid #E8E2D9", padding: "40px", position: "relative" }}>
                  <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 72, color: "#B8935A", opacity: 0.25, position: "absolute", top: 16, left: 26, lineHeight: 1, userSelect: "none" }}>&ldquo;</div>
                  <div style={{ display: "flex", gap: 3, marginBottom: 12 }}>
                    {[1,2,3,4,5].map(i => <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#B8935A"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>)}
                  </div>
                  <p style={{ fontSize: 14, fontStyle: "italic", fontWeight: 300, color: "#3D3A37", lineHeight: 1.78, marginBottom: 30, paddingTop: 22 }}>
                    &ldquo;{q}&rdquo;
                  </p>
                  <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.05em", marginBottom: 3, color: "#1A1917" }}>{name}</div>
                  <div style={{ fontSize: 10, color: "#B8935A", letterSpacing: "0.14em", textTransform: "uppercase" }}>{loc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CONTACT — photo background
        ══════════════════════════════════════ */}
        <section style={{ position: "relative", overflow: "hidden" }} id="contact">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG.cta} alt="Premium property interior" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(253,252,251,0.97) 0%, rgba(248,245,240,0.96) 50%, rgba(240,235,227,0.92) 100%)" }} />

          <div style={{ position: "relative", zIndex: 1, padding: "120px 52px", textAlign: "center" }}>
            <div style={{ maxWidth: 700, margin: "0 auto" }}>
              <div className="rv"><EyebrowRow center>Start your transformation</EyebrowRow></div>
              <h2 className="rv rv-d1" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(44px, 5.5vw, 72px)", fontWeight: 300, lineHeight: 1.02, letterSpacing: "-0.02em", color: "#1A1917", marginBottom: 22 }}>
                Tell us about<br />your space.
              </h2>
              <p className="rv rv-d2" style={{ fontSize: 15, fontWeight: 300, color: "#6B6460", lineHeight: 1.78, maxWidth: 480, margin: "0 auto 52px" }}>
                The fastest way to a free quote is a quick WhatsApp message. We typically reply within the hour — no call centres, no scripts, no pressure.
              </p>

              <div className="rv rv-d3" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 20 }}>
                <a href={WA} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25D366", color: "#fff", textDecoration: "none", padding: "18px 36px", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 2, boxShadow: "0 8px 32px rgba(37,211,102,0.28)", transition: "transform 0.3s, box-shadow 0.3s" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp — Fastest Reply
                </a>
                <a href="sms:+447922909983" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "transparent", color: "#1A1917", textDecoration: "none", padding: "17px 28px", fontSize: 12, fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 2, border: "1px solid #C9C0B4" }}>Text 07922 909983</a>
                <a href="tel:+447922909983" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "transparent", color: "#1A1917", textDecoration: "none", padding: "17px 28px", fontSize: 12, fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 2, border: "1px solid #C9C0B4" }}>Call 07922 909983</a>
              </div>

              {/* Premium phone display in contact */}
              <div className="rv rv-d4" style={{ marginTop: 32, paddingTop: 28, borderTop: "1px solid rgba(184,147,90,0.2)" }}>
                <div style={{ fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: "#B8935A", marginBottom: 6 }}>Or call us directly</div>
                <a href="tel:+447922909983" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 44, fontWeight: 300, color: "#1A1917", textDecoration: "none", letterSpacing: "0.04em", lineHeight: 1 }}>
                  07922 909983
                </a>
                <p style={{ fontSize: 11, color: "#9E9488", marginTop: 8, letterSpacing: "0.07em" }}>
                  Takes 2 minutes · No obligation · Free, no-pressure survey
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FOOTER — upgraded
        ══════════════════════════════════════ */}
        <footer style={{ background: "#1A1917", padding: "80px 52px 40px", borderTop: "1px solid rgba(184,147,90,0.2)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 52, marginBottom: 60 }} className="footer-grid">

              {/* Brand column */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="23" stroke="rgba(184,147,90,0.25)" strokeWidth="1" />
                    <path d="M24 8L8 21H12V40H22V30H26V40H36V21H40L24 8Z" stroke="rgba(248,245,240,0.35)" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(248,245,240,0.04)" />
                    <path d="M26 16L21 25H25L22 34L29 23H25L28 16H26Z" fill="#B8935A" />
                  </svg>
                  <div>
                    <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 19, fontWeight: 400, color: "#F8F5F0" }}>Propertycare</div>
                    <div style={{ fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase", color: "#B8935A" }}>Paints &amp; Electrics</div>
                  </div>
                </div>

                <p style={{ fontSize: 12, color: "#9E9488", lineHeight: 1.72, maxWidth: 250, marginBottom: 20, fontWeight: 300 }}>
                  The North East&apos;s premium single-team property transformation specialists. Sunderland and surrounding areas.
                </p>

                {/* Phone in footer */}
                <a href="tel:+447922909983" style={{ textDecoration: "none", display: "block", marginBottom: 20 }}>
                  <div style={{ fontSize: 8, letterSpacing: "0.28em", textTransform: "uppercase", color: "#B8935A", marginBottom: 3 }}>Call us free</div>
                  <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 22, fontWeight: 400, color: "#F8F5F0", letterSpacing: "0.04em" }}>07922 909983</div>
                </a>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {["NICEIC", "Part P", "TrustMark", "Dulux Select"].map((c) => (
                    <span key={c} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", padding: "4px 9px", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9E9488", borderRadius: 1 }}>{c}</span>
                  ))}
                </div>
              </div>

              {/* Link columns — client component (has hover handlers) */}
              <FooterLinks />
            </div>

            <div style={{ height: 1, background: "linear-gradient(to right, rgba(184,147,90,0.35), rgba(184,147,90,0.12), transparent)", marginBottom: 24 }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em", flexWrap: "wrap", gap: 10 }}>
              <span>© 2025 Propertycare Paints &amp; Electrics. Fully insured · NICEIC / Part P · Written guarantee.</span>
              <span>Premium property transformations across the North East.</span>
            </div>
          </div>

          <style>{`
            @media (max-width: 1000px) {
              .footer-grid { grid-template-columns: 1fr 1fr !important; }
              footer { padding: 56px 24px 32px !important; }
            }
            @media (max-width: 640px) {
              .footer-grid { grid-template-columns: 1fr !important; }
            }
            @media (max-width: 900px) {
              .grid-2 { grid-template-columns: 1fr !important; gap: 44px !important; }
              .grid-3 { grid-template-columns: 1fr !important; }
              section { padding-left: 20px !important; padding-right: 20px !important; }
            }
          `}</style>
        </footer>

      </main>
    </>
  );
}
