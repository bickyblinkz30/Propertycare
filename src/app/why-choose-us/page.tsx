"use client";
import React from "react";
import Nav from "../components/Nav";
import FloatingContacts from "../components/FloatingContacts";
import ScrollReveal from "../components/ScrollReveal";
import FooterLinks from "../components/FooterLinks";
import { whyChooseUsImages as IMG } from "@/lib/images";

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

export default function WhyChooseUs() {
  const faqs = [
    { q: "Why should I choose Property Care Paint & Electrics?", a: "We deliver premium painting, decorating, electrical and maintenance through one accountable team. Certified, insured, and backed by a written guarantee — no juggling trades, no finger-pointing." },
    { q: "Are you insured?", a: "Absolutely. We carry full public liability insurance and all electrical work is NICEIC / Part P certified." },
    { q: "Is your work guaranteed?", a: "Yes. Every project is backed by a clear, written workmanship guarantee. If something isn't right, we put it right — no arguments, no excuses." },
    { q: "Are your electricians certified?", a: "Yes. All electrical work is carried out to NICEIC / Part P standards and properly certified for your records and peace of mind." },
    { q: "Will the same team see my project through?", a: "Yes. One accountable team handles your project from first survey to final sign-off, with a single point of contact throughout — no subcontractor churn." },
    { q: "Do you tidy up after the work?", a: "Always. We protect floors and furniture, clean as we go and leave your property tidy. Respect for your home is part of our standard." },
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
        <section style={{ position: "relative", minHeight: "55vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#0A0908" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG.hero} alt="Professional property services" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", opacity: 0.4 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.86) 45%, rgba(10,10,10,0.55) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.99) 0%, rgba(10,10,10,0.55) 45%, transparent 78%)" }} />
          <div style={{ position: "relative", zIndex: 2, padding: "100px 52px 80px", maxWidth: 920, width: "100%" }}>
            <div className="h-a1" style={{ marginBottom: 32 }}>
              <OrangeTab>Why Trust Us</OrangeTab>
            </div>
            <h1 className="h-a2" style={{
              fontSize: "clamp(54px, 8.5vw, 112px)",
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: "-0.025em", color: "#fff",
              marginBottom: 28, textTransform: "uppercase",
            }}>
              Why Choose<br />
              <span style={{ color: "var(--color-accent)" }}>Property Care?</span>
            </h1>
            <p className="h-a3" style={{
              fontSize: "clamp(18px, 1.8vw, 22px)",
              fontWeight: 500, color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65, maxWidth: 640, marginBottom: 44,
            }}>
              Reliable workmanship, honest service and customer satisfaction are at the heart of everything we do.
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
            INTRO
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 28 }}>
              <OrangeTab center>Our Philosophy</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                A Company Built<br /><span style={{ color: "var(--color-accent)" }}>On Trust</span>
              </h2>
            </div>
            <div className="rv rv-d2" style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
              <p style={{ fontSize: 18, color: "#3D3A37", lineHeight: 1.8, fontWeight: 400 }}>
                At Property Care Paint &amp; Electrics, we understand that inviting tradespeople into your home or business requires trust. That&rsquo;s why we focus on professionalism, communication, reliability and high-quality workmanship on every project.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            TRUST SECTION — premium icon cards
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 64 }}>
              <OrangeTab center>What Sets Us Apart</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(40px, 4.8vw, 64px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Why Homeowners &amp;<br /><span style={{ color: "var(--color-accent)" }}>Businesses Trust Us</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-3">
              {[
                { t: "Fully Insured", d: "Peace of mind on every project with full public liability insurance as standard." },
                { t: "Residential & Commercial", d: "Experienced in both domestic homes and commercial business premises." },
                { t: "Free Quotations", d: "Transparent pricing with no hidden surprises and no-obligation quotes." },
                { t: "Reliable Service", d: "We show up on time, communicate clearly and deliver what we promise." },
                { t: "Experienced Professional", d: "Years of practical hands-on experience across multiple trades." },
                { t: "Attention To Detail", d: "Every project completed to a high standard with meticulous preparation." },
              ].map(({ t, d }, i) => (
                <div key={t} className={`rv rv-d${(i % 3) + 1}`} style={{
                  background: "#FDFCFB", border: "1px solid #E8E2D9", borderRadius: 4,
                  padding: "40px 32px", transition: "transform 0.3s, box-shadow 0.3s",
                }}>
                  <div style={{ width: 52, height: 52, background: "var(--color-accent-soft)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <CheckIcon size={22} />
                  </div>
                  <div style={{ fontSize: 19, fontWeight: 800, color: "#0A0908", marginBottom: 12, letterSpacing: "-0.01em" }}>{t}</div>
                  <p style={{ fontSize: 14, color: "#6B6460", lineHeight: 1.7, fontWeight: 400 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            WHY CLIENTS RETURN
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 64 }}>
              <OrangeTab center>Client Loyalty</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(40px, 4.8vw, 64px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Why Clients<br /><span style={{ color: "var(--color-accent)" }}>Recommend Us</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9", borderRadius: 4, overflow: "hidden" }} className="grid-3">
              {[
                ["Professional Approach", "From first contact to project completion, you'll be treated with courtesy and respect."],
                ["Clear Communication", "We keep you informed at every stage so there are no surprises."],
                ["Quality Materials", "Only premium paints, cables, fixings and finishes go into your property."],
                ["Respect For Your Property", "We protect floors, furniture and surfaces. Every job site is left clean and tidy."],
                ["Clean & Tidy Work", "Tidiness is part of our standard. We clean as we go and leave your space better than we found it."],
                ["Customer Satisfaction", "Your satisfaction is guaranteed. We don't sign off until you're happy."],
              ].map(([t, d], i) => (
                <div key={t} className={`rv rv-d${(i % 3) + 1}`} style={{ background: "#FDFCFB", padding: "40px 32px" }}>
                  <div style={{ width: 44, height: 44, background: "var(--color-accent-soft)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <CheckIcon size={20} />
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "#0A0908", marginBottom: 10, letterSpacing: "-0.01em" }}>{t}</div>
                  <p style={{ fontSize: 14, color: "#6B6460", lineHeight: 1.7, fontWeight: 400 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            OUR PROMISE — dark highlight section
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#0A0908", borderTop: "4px solid var(--color-accent)", borderBottom: "4px solid var(--color-accent)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
              <OrangeTab center>Our Promise</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(40px, 4.8vw, 64px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#fff",
                textTransform: "uppercase",
              }}>
                Our Commitment To<br /><span style={{ color: "var(--color-accent)" }}>Every Customer</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-3">
              {[
                ["Honest Advice", "We tell you what needs doing — and what doesn't. No upsells, no unnecessary work."],
                ["Quality Workmanship", "Every finish, connection and installation meets our exacting standards."],
                ["Fair Pricing", "Competitive, transparent rates with a detailed written quote before any work begins."],
                ["Reliable Scheduling", "We arrive when we say we will and complete projects on the agreed timeline."],
                ["Professional Standards", "Uniformed, respectful tradespeople who take pride in their work."],
                ["Excellent Customer Care", "We're always available to answer questions before, during and after your project."],
              ].map(([t, d], i) => (
                <div key={t} className={`rv rv-d${(i % 3) + 1}`} style={{
                  background: "rgba(248,245,240,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4,
                  padding: "36px 28px", textAlign: "center",
                }}>
                  <div style={{ width: 52, height: 52, background: "rgba(var(--color-accent-rgb),0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                    <CheckIcon size={22} color="var(--color-accent)" />
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.01em" }}>{t}</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontWeight: 400 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SERVICE GUARANTEE
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "center" }} className="grid-2">
              <div>
                <div className="rv"><OrangeTab>Our Guarantee</OrangeTab></div>
                <h2 className="rv rv-d1" style={{
                  fontSize: "clamp(36px, 4.5vw, 56px)",
                  fontWeight: 900, lineHeight: 1.05,
                  letterSpacing: "-0.02em", color: "#0A0908",
                  textTransform: "uppercase", marginBottom: 24,
                }}>
                  Quality You<br /><span style={{ color: "var(--color-accent)" }}>Can Trust</span>
                </h2>
                <p className="rv rv-d2" style={{ fontSize: 16, color: "#3D3A37", lineHeight: 1.75, marginBottom: 24, fontWeight: 400 }}>
                  We treat every property as if it were our own and take pride in delivering work that meets the highest standards. Every project is backed by our written workmanship guarantee.
                </p>
                <ul className="rv rv-d3" style={{ listStyle: "none" }}>
                  {[
                    "NICEIC / Part P certified electrical work",
                    "Full public liability insurance on every project",
                    "Written workmanship guarantee",
                    "Transparent, itemised written quotes",
                    "Clean, tidy and respectful site practice",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                      <CheckIcon size={18} />
                      <span style={{ fontSize: 15, color: "#3D3A37", fontWeight: 500 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rv rv-d1">
                <div style={{
                  background: "#F8F5F0", border: "2px solid var(--color-accent)", borderRadius: 4,
                  padding: "48px 40px", position: "relative",
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "var(--color-accent)" }} />
                  <div style={{ fontSize: 52, fontWeight: 900, color: "rgba(var(--color-accent-rgb),0.12)", lineHeight: 1, marginBottom: 16, letterSpacing: "-0.02em" }}>✓</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#0A0908", marginBottom: 16, letterSpacing: "-0.01em" }}>
                    Written Guarantee On Every Project
                  </div>
                  <p style={{ fontSize: 14, color: "#6B6460", lineHeight: 1.7, fontWeight: 400 }}>
                    We don&apos;t just promise quality — we guarantee it in writing. If something isn&apos;t right, we make it right. No arguments, no excuses.
                  </p>
                  <div style={{ marginTop: 24, padding: "18px 0 0", borderTop: "1px solid #E8E2D9" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 8, height: 8, background: "var(--color-accent)", borderRadius: "50%" }} />
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#0A0908", letterSpacing: "0.04em" }}>Peace of mind, included with every project</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FAQ
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
              <OrangeTab center>Common Questions</OrangeTab>
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
            FOUNDER SPOTLIGHT
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
              <OrangeTab center>Meet The Founder</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                The Person Behind<br /><span style={{ color: "var(--color-accent)" }}>The Business</span>
              </h2>
            </div>

            <div style={{ maxWidth: 720, margin: "0 auto" }}>
              {/* Text-only — founder photo intentionally omitted until a real headshot is available */}
              <div>
                <div className="rv rv-d1">
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 10 }}>
                    Founder &amp; Managing Director
                  </div>
                  <h3 style={{
                    fontSize: "clamp(26px, 3.2vw, 38px)",
                    fontWeight: 900, lineHeight: 1.1,
                    letterSpacing: "-0.02em", color: "#0A0908",
                    marginBottom: 8,
                  }}>
                    Chukwudi Emmanuel Ifeanyi
                  </h3>
                  <p style={{ fontSize: 14, color: "#6B6460", fontWeight: 500, marginBottom: 24, letterSpacing: "0.04em" }}>
                    Property Care Paint &amp; Electrics
                  </p>
                </div>

                <div className="rv rv-d2" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                  {[
                    "Painter & Decorator",
                    "Electrical Specialist",
                    "Property Maintenance Professional",
                  ].map((tag) => (
                    <span key={tag} style={{
                      background: "rgba(var(--color-accent-rgb),0.1)", border: "1px solid rgba(var(--color-accent-rgb),0.3)",
                      padding: "7px 14px", fontSize: 11, fontWeight: 700,
                      letterSpacing: "0.06em", color: "var(--color-accent)", borderRadius: 4,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="rv rv-d3" style={{ fontSize: 15, color: "#3D3A37", lineHeight: 1.8, fontWeight: 400 }}>
                  With hands-on expertise across painting, decorating, electrical installations and property maintenance, Chukwudi personally ensures every project meets the highest standards of craftsmanship and professionalism. His founding philosophy: one accountable team, one point of contact, one written guarantee.
                </p>
              </div>
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
              <div className="rv"><OrangeTab center>Get In Touch</OrangeTab></div>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(48px, 6.5vw, 84px)",
                fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.025em",
                color: "#fff", marginBottom: 24, textTransform: "uppercase",
              }}>
                Let&rsquo;s Discuss<br /><span style={{ color: "var(--color-accent)" }}>Your Project</span>
              </h2>
              <p className="rv rv-d2" style={{
                fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.8)",
                lineHeight: 1.7, maxWidth: 540, margin: "0 auto 52px",
              }}>
                Whether you need decorating, electrical work or property maintenance, we&rsquo;re ready to help.
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
                <div style={{ background: "#fff", padding: "14px 26px", borderRadius: 999, display: "inline-block", marginBottom: 24 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/propertycare-logo.png" alt="Property Care Paint & Electrics" style={{ height: 90, width: "auto", display: "block" }} />
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
