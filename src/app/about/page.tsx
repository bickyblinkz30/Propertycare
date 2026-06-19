"use client";
import Link from "next/link";
import Nav from "../components/Nav";
import FloatingContacts from "../components/FloatingContacts";
import ScrollReveal from "../components/ScrollReveal";
import FooterLinks from "../components/FooterLinks";
import { aboutImages } from "@/lib/images";

const WA = "https://wa.me/447922909982?text=Hi%20Property%20Care%2C%20I%27d%20like%20a%20free%20quote.";

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

export default function About() {
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
          <img src={aboutImages.hero} alt="Professional painting and decorating craftsmanship" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", opacity: 0.4 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,9,8,0.95) 0%, rgba(10,9,8,0.7) 50%, rgba(10,9,8,0.3) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,9,8,0.98) 0%, rgba(10,9,8,0.4) 40%, transparent 70%)" }} />
          <div style={{ position: "relative", zIndex: 2, padding: "140px 52px", maxWidth: 920, width: "100%" }}>
            <div className="h-a1" style={{ marginBottom: 32 }}>
              <OrangeTab>About Property Care</OrangeTab>
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
              One team,<br />
              <span style={{ color: "#F58220" }}>one standard</span>
            </h1>
            <p className="h-a3" style={{
              fontSize: "clamp(18px, 1.8vw, 22px)",
              fontWeight: 500,
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65,
              maxWidth: 640,
              marginBottom: 44,
            }}>
              We are Property Care Paint &amp; Electrics &mdash; a Sunderland-based team of certified painters, electricians and property specialists. Every project is delivered by one accountable team from start to finish.
            </p>
            <div className="h-a4">
              <Link href="/#services" className="btn-orange">
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Explore Our Services
                </span>
              </Link>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "#F58220" }} />
        </section>

        {/* ══════════════════════════════════════
            OUR STORY
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 72 }}>
              <OrangeTab center>Our Story</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Built To Be<br /><span style={{ color: "#F58220" }}>Different.</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48, marginTop: 24 }} className="grid-3">
              {[
                "Property Care was founded on a simple belief: property transformations should be seamless. No juggling trades, no communication breakdowns, no finger-pointing. One team, one point of contact, one guarantee.",
                "We combine premium painting & decorating with certified electrical work, bespoke media walls and comprehensive property maintenance. Every team member shares the same commitment to craftsmanship, tidiness and clear communication.",
                "Based in Sunderland and serving the North East, we take on a limited number of transformations each year so every project receives the time, attention and quality it deserves.",
              ].map((p, i) => (
                <p key={i} className={`rv rv-d${i + 1}`} style={{ fontSize: 17, color: "#3D3A37", lineHeight: 1.8, fontWeight: 400 }}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            VALUES
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 72 }}>
              <OrangeTab>Our Values</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase", maxWidth: 600,
              }}>
                What We <span style={{ color: "#F58220" }}>Stand For.</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9", borderRadius: 4, overflow: "hidden" }} className="grid-3">
              {[
                ["01", "One Accountable Team", "Painting, electrical, media walls and maintenance under a single roof — no juggling trades."],
                ["02", "Certified & Insured", "NICEIC / Part P registered electrical work and full public liability cover as standard."],
                ["03", "Written Guarantee", "Every transformation is backed by a clear, written workmanship guarantee."],
                ["04", "Premium Finishes", "Specialist materials and meticulous preparation for finishes that last and impress."],
                ["05", "Local & Established", "Rooted in Sunderland and trusted across the North East, with real local references."],
                ["06", "Transparent Fixed Quotes", "Itemised, no-surprise pricing agreed up front — and a home left clean and respected."],
              ].map(([num, title, desc], i) => (
                <div key={num} className={`rv rv-d${(i % 3) + 1}`} style={{ background: "#FDFCFB", padding: "44px 36px" }}>
                  <div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1, color: "rgba(245,130,32,0.15)", marginBottom: 20, letterSpacing: "-0.02em" }}>{num}</div>
                  <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.01em", marginBottom: 14, color: "#0A0908" }}>{title}</div>
                  <p style={{ fontSize: 14, color: "#6B6460", lineHeight: 1.7, fontWeight: 400 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FOUNDER — single professional profile
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 64 }}>
              <OrangeTab center>Meet The Founder</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(40px, 4.8vw, 64px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                The Person Behind<br /><span style={{ color: "#F58220" }}>The Transformations.</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 64, alignItems: "start" }} className="grid-2">
              {/* Portrait */}
              <div className="rv rv-d1">
                <div style={{
                  width: "100%", maxWidth: 380, margin: "0 auto",
                  borderRadius: 4, overflow: "hidden",
                  border: "3px solid #F58220",
                  boxShadow: "0 20px 60px rgba(10,9,8,0.15)",
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={aboutImages.founder}
                    alt="Chukwudi Emmanuel Ifeanyi — Founder & Managing Director"
                    style={{ width: "100%", height: 440, objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="rv rv-d1" style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#F58220", marginBottom: 12 }}>
                    Founder &amp; Managing Director
                  </div>
                  <h3 style={{
                    fontSize: "clamp(28px, 3.5vw, 42px)",
                    fontWeight: 900, lineHeight: 1.1,
                    letterSpacing: "-0.02em", color: "#0A0908",
                    marginBottom: 8,
                  }}>
                    Chukwudi Emmanuel Ifeanyi
                  </h3>
                  <p style={{ fontSize: 15, color: "#6B6460", fontWeight: 500, letterSpacing: "0.04em" }}>
                    Property Care Paint &amp; Electrics
                  </p>
                </div>

                {/* Expertise tags */}
                <div className="rv rv-d2" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
                  {[
                    "Painter & Decorator",
                    "Electrical Specialist",
                    "Property Maintenance Professional",
                  ].map((tag) => (
                    <span key={tag} style={{
                      background: "rgba(245,130,32,0.1)", border: "1px solid rgba(245,130,32,0.3)",
                      padding: "8px 16px", fontSize: 12, fontWeight: 700,
                      letterSpacing: "0.06em", color: "#F58220", borderRadius: 4,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Biography */}
                <div className="rv rv-d3" style={{ marginBottom: 28 }}>
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: "#0A0908", marginBottom: 12, letterSpacing: "0.02em" }}>Professional Biography</h4>
                  <p style={{ fontSize: 15, color: "#3D3A37", lineHeight: 1.8, fontWeight: 400, marginBottom: 16 }}>
                    Chukwudi founded Property Care Paint &amp; Electrics with a clear mission: deliver premium property transformations through one accountable team. With combined expertise in painting, decorating, and electrical work, he personally ensures every project meets the highest standards of craftsmanship and professionalism.
                  </p>
                  <p style={{ fontSize: 15, color: "#3D3A37", lineHeight: 1.8, fontWeight: 400 }}>
                    From full interior repaints to complex electrical installations and property maintenance, Chukwudi brings hands-on experience, NICEIC certification, and an unwavering commitment to quality to every job across Sunderland and the North East.
                  </p>
                </div>

                {/* Experience */}
                <div className="rv rv-d4" style={{ marginBottom: 28 }}>
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: "#0A0908", marginBottom: 12, letterSpacing: "0.02em" }}>Experience</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { yr: "2020 — Present", title: "Founder & Managing Director", org: "Property Care Paint & Electrics, Sunderland" },
                      { yr: "2017 — 2020", title: "Senior Painter & Decorator", org: "North East Property Services" },
                      { yr: "2014 — 2017", title: "Electrical Installations Engineer", org: "UK Building Solutions Ltd" },
                    ].map((exp) => (
                      <div key={exp.yr} style={{ display: "flex", gap: 20, padding: "14px 18px", background: "#F8F5F0", borderRadius: 4, borderLeft: "3px solid #F58220" }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#F58220", flexShrink: 0, width: 130, letterSpacing: "0.04em" }}>{exp.yr}</div>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: "#0A0908" }}>{exp.title}</div>
                          <div style={{ fontSize: 12, color: "#6B6460", fontWeight: 500 }}>{exp.org}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Expertise */}
                <div className="rv rv-d5">
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: "#0A0908", marginBottom: 12, letterSpacing: "0.02em" }}>Service Expertise</h4>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {[
                      { icon: "🎨", label: "Painting & Decorating" },
                      { icon: "⚡", label: "Electrical Installations" },
                      { icon: "🖥️", label: "Media Walls" },
                      { icon: "🔧", label: "Property Maintenance" },
                    ].map((s) => (
                      <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "#FDFCFB", border: "1px solid #E8E2D9", borderRadius: 4 }}>
                        <span style={{ fontSize: 20, lineHeight: 1 }}>{s.icon}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#0A0908", letterSpacing: "0.02em" }}>{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CTA
        ══════════════════════════════════════ */}
        <section style={{ background: "#0A0908", borderTop: "4px solid #F58220", padding: "120px 52px", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div className="rv">
              <OrangeTab center>Let&rsquo;s Work Together</OrangeTab>
            </div>
            <h2 className="rv rv-d1" style={{
              fontSize: "clamp(48px, 6.5vw, 84px)",
              fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.025em",
              color: "#fff", marginBottom: 24, textTransform: "uppercase",
            }}>
              Ready To Transform<br /><span style={{ color: "#F58220" }}>Your Property?</span>
            </h2>
            <p className="rv rv-d2" style={{
              fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7, maxWidth: 540, margin: "0 auto 52px",
            }}>
              One team, one point of contact, one guarantee. Book a free, no-obligation survey and let&rsquo;s discuss your project.
            </p>
            <div className="rv rv-d3" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn-orange">
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book A Free Survey
                </span>
              </Link>
              <a href={WA} className="btn-outline-light">WhatsApp Us</a>
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
              .grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
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
