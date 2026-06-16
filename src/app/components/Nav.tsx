"use client";
import { useEffect, useState } from "react";

const WA_LINK =
  "https://wa.me/447922909983?text=Hi%20Propertycare%2C%20I%27d%20like%20a%20free%20quote.";
const TEL = "tel:+447922909983";
const PHONE_DISPLAY = "07922 909983";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#transformations" },
    { label: "Why Us", href: "#whyus" },
    { label: "Areas", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* ── MAIN NAV ── */}
      <nav className={`nav-root ${scrolled ? "nav-scrolled" : "nav-top"}`}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1280, margin: "0 auto", width: "100%" }}>

          {/* ── LOGO ── */}
          <a href="#top" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 11 }}>
            {/* SVG Icon — house with lightning bolt */}
            <svg
              width={scrolled ? 34 : 38}
              height={scrolled ? 34 : 38}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)", flexShrink: 0 }}
            >
              {/* House shape */}
              <path
                d="M20 4L4 17H8V35H18V25H22V35H32V17H36L20 4Z"
                fill="#1A5C3A"
                opacity="0.15"
              />
              <path
                d="M20 6L5 18.5H9V34H17V24H23V34H31V18.5H35L20 6Z"
                stroke="#1A5C3A"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Lightning bolt inside */}
              <path
                d="M22 14L17 22H21L18 30L25 20H21L24 14H22Z"
                fill="#B8935A"
                stroke="none"
              />
            </svg>

            {/* Text lockup */}
            <div style={{ transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)" }}>
              <div style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: scrolled ? 17 : 20,
                fontWeight: 500,
                letterSpacing: "0.03em",
                color: "#1E1C1A",
                lineHeight: 1.1,
                transition: "font-size 0.5s cubic-bezier(0.16,1,0.3,1)",
              }}>
                Propertycare
              </div>
              <div style={{
                fontSize: 8,
                fontWeight: 400,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#B8935A",
                lineHeight: 1.5,
              }}>
                Paints &amp; Electrics
              </div>
            </div>
          </a>

          {/* ── DESKTOP LINKS ── */}
          <ul
            style={{ display: "flex", gap: 40, listStyle: "none", alignItems: "center" }}
            className="nav-desktop-links"
          >
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="nav-link">{l.label}</a>
              </li>
            ))}
          </ul>

          {/* ── RIGHT SIDE: phone + CTA ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }} className="nav-right">
            {/* Premium phone display */}
            <a
              href={TEL}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                textDecoration: "none",
                gap: 1,
              }}
              className="nav-phone"
            >
              <span style={{
                fontSize: 8,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#B8935A",
                fontWeight: 400,
              }}>
                Call us free
              </span>
              <span style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: scrolled ? 15 : 17,
                fontWeight: 500,
                color: "#1E1C1A",
                letterSpacing: "0.04em",
                lineHeight: 1,
                transition: "font-size 0.5s cubic-bezier(0.16,1,0.3,1)",
              }}>
                {PHONE_DISPLAY}
              </span>
            </a>

            {/* Primary CTA */}
            <a href={WA_LINK} className="btn-primary">
              <span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Free Quote
              </span>
            </a>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-hamburger"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "none" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div style={{ width: 22, height: 16, display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
              <span style={{
                display: "block", height: 1.5, background: "#1E1C1A", borderRadius: 1,
                transformOrigin: "left",
                transform: menuOpen ? "rotate(42deg) translateY(-1px)" : "none",
                transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
              }} />
              <span style={{
                display: "block", height: 1.5, background: "#1E1C1A", borderRadius: 1,
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "translateX(-6px)" : "none",
                transition: "opacity 0.2s, transform 0.35s",
              }} />
              <span style={{
                display: "block", height: 1.5, background: "#1E1C1A", borderRadius: 1,
                transformOrigin: "left",
                transform: menuOpen ? "rotate(-42deg) translateY(1px)" : "none",
                transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
              }} />
            </div>
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: "rgba(253,252,251,0.98)",
        backdropFilter: "blur(20px)",
        zIndex: 199,
        display: "flex",
        flexDirection: "column",
        padding: "100px 28px 40px",
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        {navLinks.map((l, i) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: 36,
              fontWeight: 300,
              color: "#1E1C1A",
              textDecoration: "none",
              padding: "14px 0",
              borderBottom: "1px solid #E8E2D9",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(20px)",
              transition: `opacity 0.4s ${0.1 + i * 0.06}s, transform 0.4s ${0.1 + i * 0.06}s cubic-bezier(0.16,1,0.3,1)`,
            }}
          >
            {l.label}
          </a>
        ))}

        <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 12 }}>
          <a href={WA_LINK} className="btn-primary" style={{ justifyContent: "center" }}>
            <span>WhatsApp — Free Quote</span>
          </a>
          <a href={TEL} style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 8, padding: "14px", border: "1px solid #E8E2D9", borderRadius: 2,
            fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 20,
            color: "#1E1C1A", textDecoration: "none", fontWeight: 400,
          }}>
            {PHONE_DISPLAY}
          </a>
        </div>

        {/* Brass decorative corner */}
        <div style={{ position: "absolute", bottom: 32, left: 28, right: 28, height: 1, background: "linear-gradient(to right, #B8935A, transparent)" }} />
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .nav-desktop-links { display: none !important; }
          .nav-phone { display: none !important; }
          .nav-right .btn-primary { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 1001px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
