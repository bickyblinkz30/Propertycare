"use client";
import React from "react";
import Nav from "../components/Nav";
import FloatingContacts from "../components/FloatingContacts";
import ScrollReveal from "../components/ScrollReveal";
import FooterLinks from "../components/FooterLinks";
import { primaryArea, secondaryServiceAreas, serviceAreasSentence } from "@/lib/site";
import { contactImages as IMG } from "@/lib/images";

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

function CheckIcon({ size = 16, color = "#F58220" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M5 13l4 4L19 7" />
    </svg>
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
          fontSize: 22, fontWeight: 300, color: "#F58220", flexShrink: 0, marginLeft: 16,
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

export default function Contact() {
  const [form, setForm] = React.useState({
    name: "", phone: "", email: "", service: "",
    address: "", details: "", contactMethod: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to backend form handler
  };

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
          <img src={IMG.hero} alt="Contact Property Care Paint & Electrics" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", opacity: 0.4 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,9,8,0.95) 0%, rgba(10,9,8,0.7) 50%, rgba(10,9,8,0.3) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,9,8,0.98) 0%, rgba(10,9,8,0.4) 40%, transparent 70%)" }} />
          <div style={{ position: "relative", zIndex: 2, padding: "140px 52px", maxWidth: 920, width: "100%" }}>
            <div className="h-a1" style={{ marginBottom: 32 }}>
              <OrangeTab>Get In Touch</OrangeTab>
            </div>
            <h1 className="h-a2" style={{
              fontSize: "clamp(54px, 8.5vw, 112px)",
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: "-0.025em", color: "#fff",
              marginBottom: 28, textTransform: "uppercase",
            }}>
              Contact<br />
              <span style={{ color: "#F58220" }}>Property Care</span>
            </h1>
            <p className="h-a3" style={{
              fontSize: "clamp(18px, 1.8vw, 22px)",
              fontWeight: 500, color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65, maxWidth: 640, marginBottom: 44,
            }}>
              Need a free quotation or want to discuss your next project? Get in touch today and we&rsquo;ll be happy to help.
            </p>
            <div className="h-a4" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#form" className="btn-orange">
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Get Free Quote
                </span>
              </a>
              <a href="tel:+447922909982" className="btn-outline-light">Call 07922 909982</a>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "#F58220" }} />
        </section>

        {/* ══════════════════════════════════════
            QUICK CONTACT — premium icon cards
        ══════════════════════════════════════ */}
        <section style={{ padding: "80px 52px", background: "#F8F5F0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 48 }}>
              <OrangeTab center>Quick Contact</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Get In Touch<br /><span style={{ color: "#F58220" }}>Instantly</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="grid-3">
              <a href="tel:+447922909982" style={{ textDecoration: "none" }}>
                <div className="rv rv-d1" style={{ background: "#FDFCFB", border: "1px solid #E8E2D9", borderRadius: 4, padding: "36px 28px", textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s" }}>
                  <div style={{ width: 56, height: 56, background: "#FFE8D4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F58220" strokeWidth="2">
                      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F58220", marginBottom: 8 }}>Call Us</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#0A0908", letterSpacing: "-0.01em" }}>07922 909982</div>
                </div>
              </a>

              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div className="rv rv-d2" style={{ background: "#FDFCFB", border: "1px solid #E8E2D9", borderRadius: 4, padding: "36px 28px", textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s" }}>
                  <div style={{ width: 56, height: 56, background: "#E8F5E9", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F58220", marginBottom: 8 }}>WhatsApp</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#0A0908", letterSpacing: "0.02em" }}>Connect Instantly</div>
                </div>
              </a>

              <a href="mailto:hello@propertycarepe.co.uk" style={{ textDecoration: "none" }}>
                <div className="rv rv-d3" style={{ background: "#FDFCFB", border: "1px solid #E8E2D9", borderRadius: 4, padding: "36px 28px", textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s" }}>
                  <div style={{ width: 56, height: 56, background: "#FFE8D4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F58220" strokeWidth="2">
                      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F58220", marginBottom: 8 }}>Email</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0A0908", letterSpacing: "0.02em", wordBreak: "break-all" }}>hello@propertycarepe.co.uk</div>
                </div>
              </a>

              <div className="rv rv-d4" style={{ background: "#FDFCFB", border: "1px solid #E8E2D9", borderRadius: 4, padding: "36px 28px", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, background: "#FFE8D4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F58220" strokeWidth="2">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F58220", marginBottom: 8 }}>Service Area</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0A0908", letterSpacing: "0.02em" }}>Sunderland &amp; Surrounding Areas</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CONTACT FORM
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }} id="form">
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 52 }}>
              <OrangeTab center>Quote Request</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Request A Free<br /><span style={{ color: "#F58220" }}>Quotation</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="rv rv-d1" style={{ background: "#F8F5F0", border: "1px solid #E8E2D9", borderRadius: 4, padding: "48px 40px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-grid">
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label htmlFor="name" style={{ fontSize: 12, fontWeight: 700, color: "#0A0908", letterSpacing: "0.06em", textTransform: "uppercase" }}>Full Name *</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} required style={{ padding: "14px 16px", border: "2px solid #E8E2D9", borderRadius: 4, fontSize: 15, background: "#FDFCFB", outline: "none", transition: "border-color 0.2s" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label htmlFor="phone" style={{ fontSize: 12, fontWeight: 700, color: "#0A0908", letterSpacing: "0.06em", textTransform: "uppercase" }}>Phone Number *</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required style={{ padding: "14px 16px", border: "2px solid #E8E2D9", borderRadius: 4, fontSize: 15, background: "#FDFCFB", outline: "none", transition: "border-color 0.2s" }} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 }} className="form-grid">
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label htmlFor="email" style={{ fontSize: 12, fontWeight: 700, color: "#0A0908", letterSpacing: "0.06em", textTransform: "uppercase" }}>Email Address</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} style={{ padding: "14px 16px", border: "2px solid #E8E2D9", borderRadius: 4, fontSize: 15, background: "#FDFCFB", outline: "none", transition: "border-color 0.2s" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label htmlFor="service" style={{ fontSize: 12, fontWeight: 700, color: "#0A0908", letterSpacing: "0.06em", textTransform: "uppercase" }}>Service Required *</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} required style={{ padding: "14px 16px", border: "2px solid #E8E2D9", borderRadius: 4, fontSize: 15, background: "#FDFCFB", outline: "none", color: form.service ? "#0A0908" : "#9E9488" }}>
                    <option value="" disabled>Select a service</option>
                    <option value="painting">Painting & Decorating</option>
                    <option value="electrical">Electrical Services</option>
                    <option value="maintenance">Property Maintenance</option>
                    <option value="media-wall">TV Media Wall Installation</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 20 }}>
                <label htmlFor="address" style={{ fontSize: 12, fontWeight: 700, color: "#0A0908", letterSpacing: "0.06em", textTransform: "uppercase" }}>Property Address *</label>
                <input id="address" name="address" value={form.address} onChange={handleChange} required placeholder="Full property address" style={{ padding: "14px 16px", border: "2px solid #E8E2D9", borderRadius: 4, fontSize: 15, background: "#FDFCFB", outline: "none", transition: "border-color 0.2s" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 20 }}>
                <label htmlFor="details" style={{ fontSize: 12, fontWeight: 700, color: "#0A0908", letterSpacing: "0.06em", textTransform: "uppercase" }}>Project Details</label>
                <textarea id="details" name="details" value={form.details} onChange={handleChange} rows={4} placeholder="Tell us about your project..." style={{ padding: "14px 16px", border: "2px solid #E8E2D9", borderRadius: 4, fontSize: 15, background: "#FDFCFB", outline: "none", resize: "vertical", transition: "border-color 0.2s" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 20 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: "#0A0908", letterSpacing: "0.06em", textTransform: "uppercase" }}>Preferred Contact Method *</label>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  {["Phone Call", "WhatsApp", "Email"].map((method) => (
                    <label key={method} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 15, fontWeight: 500, color: "#3D3A37" }}>
                      <input type="radio" name="contactMethod" value={method} checked={form.contactMethod === method} onChange={handleChange} required style={{ accentColor: "#F58220", width: 18, height: 18 }} />
                      {method}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 32 }}>
                <button type="submit" className="btn-orange" style={{ width: "100%", justifyContent: "center", padding: "20px 34px", fontSize: 14, cursor: "pointer" }}>
                  <span>
                    <CheckIcon size={16} color="#fff" />
                    Request Free Quote
                  </span>
                </button>
              </div>

              <p style={{ fontSize: 12, color: "#9E9488", marginTop: 16, textAlign: "center", fontWeight: 500 }}>
                Your details are safe with us. We never share your information.
              </p>
            </form>
          </div>
        </section>

        {/* ══════════════════════════════════════
            WHY CONTACT US
        ══════════════════════════════════════ */}
        <section style={{ padding: "100px 52px", background: "#F8F5F0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
              <OrangeTab center>Why Choose Us</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Why Homeowners &amp; Businesses<br /><span style={{ color: "#F58220" }}>Contact Us</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9", borderRadius: 4, overflow: "hidden" }} className="grid-3">
              {[
                ["Free Quotations", "No-obligation quotes with transparent, itemised pricing agreed up front."],
                ["Fully Insured", "Full public liability insurance for complete peace of mind."],
                ["Residential & Commercial", "Experienced in both domestic homes and business premises."],
                ["Reliable Service", "Punctual, tidy and respectful of your home and schedule."],
                ["Experienced Professional", "Skilled tradespeople with years of hands-on industry experience."],
                ["Quality Workmanship", "Premium materials and meticulous preparation for lasting results."],
                ["Fast Response", "We typically reply within the hour — no call centres, no scripts."],
                ["Customer Satisfaction", "Written workmanship guarantee on every project."],
              ].map(([t, d], i) => (
                <div key={t} className={`rv rv-d${(i % 4) + 1}`} style={{ background: "#FDFCFB", padding: "36px 24px" }}>
                  <div style={{ width: 40, height: 40, background: "#FFE8D4", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <CheckIcon size={18} />
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#0A0908", marginBottom: 8, letterSpacing: "-0.01em" }}>{t}</div>
                  <p style={{ fontSize: 13, color: "#6B6460", lineHeight: 1.65, fontWeight: 400 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SERVICE AREA
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 48 }}>
              <OrangeTab center>Coverage</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Areas We<br /><span style={{ color: "#F58220" }}>Cover</span>
              </h2>
              <p className="rv rv-d2" style={{ fontSize: 16, color: "#3D3A37", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.7, fontWeight: 400 }}>
                Property Care Paint &amp; Electrics proudly serves Sunderland and surrounding areas.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="grid-2">
              <div className="rv rv-d1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#E8E2D9", border: "1px solid #E8E2D9", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ gridColumn: "1 / -1", background: "#0A0908", padding: "20px 22px" }}>
                  <div style={{ width: 24, height: 3, background: "#F58220", marginBottom: 8 }} />
                  <span style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>{primaryArea}</span>
                  <span style={{ fontSize: 10, color: "#F58220", marginLeft: 10, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 800 }}>Primary</span>
                </div>
                {secondaryServiceAreas.map((a) => (
                  <div key={a} className="area-cell" style={{ background: "#FDFCFB", padding: "18px 16px" }}>
                    <div style={{ width: 14, height: 2, background: "#F58220", marginBottom: 6 }} />
                    <span style={{ fontSize: 12, letterSpacing: "0.06em", color: "#0A0908", fontWeight: 700, textTransform: "uppercase" }}>{a}</span>
                  </div>
                ))}
              </div>

              {/*
                CONFIRM WITH CLIENT: no business address/postcode exists on the
                site yet, so this map is centred on Sunderland city centre
                (54.9069, -1.3838) as a placeholder. Once the client confirms
                their trading address, replace the `q=` coordinates in the src
                URL below with the real address (e.g. q=SR1+1AA) so the pin
                lands on the actual location.
              */}
              <div className="rv rv-d2" style={{
                border: "2px solid #E8E2D9", borderRadius: 4,
                height: 380, overflow: "hidden",
              }}>
                <iframe
                  title="Property Care Paint & Electrics service area — Sunderland"
                  src="https://maps.google.com/maps?q=54.9069,-1.3838&z=11&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CTA BANNER
        ══════════════════════════════════════ */}
        <section style={{ background: "#0A0908", borderTop: "4px solid #F58220", borderBottom: "4px solid #F58220", padding: "100px 52px", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div className="rv">
              <OrangeTab center>Start Today</OrangeTab>
            </div>
            <h2 className="rv rv-d1" style={{
              fontSize: "clamp(42px, 5.5vw, 72px)",
              fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.025em",
              color: "#fff", marginBottom: 20, textTransform: "uppercase",
            }}>
              Ready To Discuss<br /><span style={{ color: "#F58220" }}>Your Project?</span>
            </h2>
            <p className="rv rv-d2" style={{
              fontSize: 17, fontWeight: 400, color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7, maxWidth: 560, margin: "0 auto 40px",
            }}>
              Whether you need decorating, electrical work, property maintenance or a media wall installation, we&rsquo;re here to help.
            </p>
            <div className="rv rv-d3" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <a href={WA} className="btn-orange"><span>Get Free Quote</span></a>
              <a href="tel:+447922909982" className="btn-outline-light">Call 07922 909982</a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FAQ
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#F8F5F0" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
              <OrangeTab center>Got Questions?</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(40px, 4.8vw, 64px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Frequently Asked<br /><span style={{ color: "#F58220" }}>Questions</span>
              </h2>
            </div>

            <div className="rv rv-d1" style={{ background: "#FDFCFB", border: "1px solid #E8E2D9", borderRadius: 4, padding: "8px 32px" }}>
              <Accordion question="How quickly can I receive a quotation?" answer="We typically respond within 24 hours. For urgent enquiries, call or WhatsApp us and we'll aim to get back to you the same day." />
              <Accordion question="Do you provide free quotes?" answer="Yes. Every quote is free, no-obligation and itemised so you know exactly what you're paying for with no hidden costs." />
              <Accordion question="Do you work on commercial properties?" answer="Yes. We provide services for both residential homeowners and commercial clients across Sunderland and the North East." />
              <Accordion question="Are you fully insured?" answer="Absolutely. We carry full public liability insurance and all electrical work is NICEIC / Part P certified for your peace of mind." />
              <Accordion question="Can I combine multiple services?" answer="Yes. Booking painting, electrical and maintenance together means one team, one point of contact and a coordinated schedule — saving you time and hassle." />
              <Accordion question="What areas do you cover?" answer={`We cover ${serviceAreasSentence}.`} />
              <Accordion question="Do you offer landlord maintenance services?" answer="Yes. We offer dedicated landlord maintenance including routine inspections, tenant changeover refreshes and reactive repairs." />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            REVIEWS
        ══════════════════════════════════════ */}
        <section style={{ padding: "120px 52px", background: "#FDFCFB" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 64 }}>
              <OrangeTab center>What Clients Say</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(40px, 4.8vw, 64px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Google<br /><span style={{ color: "#F58220" }}>Reviews</span>
              </h2>
              <p className="rv rv-d2" style={{ fontSize: 13, color: "#9E9488", marginTop: 16, letterSpacing: "0.06em", fontWeight: 500 }}>
                What our clients say about working with us.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="grid-3">
              {[
                { q: "Excellent workmanship and great communication throughout the project. The team were professional, tidy and completed on schedule.", name: "Michael R.", loc: "Sunderland", d: 1 },
                { q: "Very professional service and completed on time. The painting and decorating work exceeded our expectations. Will definitely use again.", name: "Sarah W.", loc: "Washington", d: 2 },
                { q: "Had a media wall installed and the whole experience was seamless. From quote to completion, everything was clear and well managed.", name: "David K.", loc: "Seaham", d: 3 },
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
            FOUNDER CONTACT
        ══════════════════════════════════════ */}
        <section style={{ padding: "100px 52px", background: "#F8F5F0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div className="rv" style={{ textAlign: "center", marginBottom: 48 }}>
              <OrangeTab center>Talk Directly</OrangeTab>
              <h2 className="rv rv-d1" style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 900, lineHeight: 1.05,
                letterSpacing: "-0.02em", color: "#0A0908",
                textTransform: "uppercase",
              }}>
                Speak With The<br /><span style={{ color: "#F58220" }}>Founder Directly</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, alignItems: "center" }} className="grid-2">
              {/* TODO: Replace with founder image and biography */}
              <div className="rv rv-d1">
                <div style={{
                  width: "100%", maxWidth: 300, margin: "0 auto",
                  borderRadius: 4, overflow: "hidden",
                  border: "3px solid #F58220",
                  boxShadow: "0 20px 60px rgba(10,9,8,0.15)",
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={IMG.founder}
                    alt="Chukwudi Emmanuel Ifeanyi — Founder & Managing Director"
                    style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>

              <div>
                <div className="rv rv-d1">
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#F58220", marginBottom: 8 }}>
                    Founder &amp; Managing Director
                  </div>
                  <h3 style={{
                    fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: 900, lineHeight: 1.1,
                    letterSpacing: "-0.02em", color: "#0A0908",
                    marginBottom: 6,
                  }}>
                    Chukwudi Emmanuel Ifeanyi
                  </h3>
                  <p style={{ fontSize: 14, color: "#6B6460", fontWeight: 500, marginBottom: 20, letterSpacing: "0.04em" }}>
                    Property Care Paint &amp; Electrics
                  </p>
                </div>

                <div className="rv rv-d2" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                  {["Painter & Decorator", "Electrical Specialist", "Property Maintenance Professional"].map((tag) => (
                    <span key={tag} style={{
                      background: "rgba(245,130,32,0.1)", border: "1px solid rgba(245,130,32,0.3)",
                      padding: "6px 12px", fontSize: 11, fontWeight: 700,
                      letterSpacing: "0.06em", color: "#F58220", borderRadius: 4,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="rv rv-d3" style={{ fontSize: 14, color: "#3D3A37", lineHeight: 1.75, fontWeight: 400 }}>
                  When you contact Property Care Paint &amp; Electrics, you speak directly with the founder. No call centres, no sales scripts — just honest, expert advice from someone who personally oversees every project.
                </p>

                <div className="rv rv-d4" style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="tel:+447922909982" className="btn-orange"><span>Call 07922 909982</span></a>
                  <a href={WA} className="btn-outline-dark">WhatsApp The Founder</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            FINAL FOOTER CTA
        ══════════════════════════════════════ */}
        <section style={{ background: "#0A0908", padding: "100px 52px", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div className="rv">
              <OrangeTab center>No Obligation</OrangeTab>
            </div>
            <h2 className="rv rv-d1" style={{
              fontSize: "clamp(42px, 5.5vw, 72px)",
              fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.025em",
              color: "#fff", marginBottom: 20, textTransform: "uppercase",
            }}>
              Get Your Free<br /><span style={{ color: "#F58220" }}>Quote Today</span>
            </h2>
            <p className="rv rv-d2" style={{
              fontSize: 17, fontWeight: 400, color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7, maxWidth: 540, margin: "0 auto 40px",
            }}>
              Contact Property Care Paint &amp; Electrics and let us help bring your project to life.
            </p>
            <div className="rv rv-d3" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <a href="tel:+447922909982" className="btn-orange"><span>Call 07922 909982</span></a>
              <a href="#form" className="btn-outline-light">Request A Quote</a>
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
              .form-grid { grid-template-columns: 1fr !important; }
              section { padding-left: 20px !important; padding-right: 20px !important; }
              h1, h2 { font-size: 32px !important; }
            }
          `}</style>
        </footer>

      </main>
    </>
  );
}
