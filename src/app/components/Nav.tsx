"use client";
import { useEffect, useState } from "react";

const WA =
  "https://wa.me/447922909983?text=Hi%20Propertycare%2C%20I%27d%20like%20a%20free%20quote.";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    ["Services", "#services"],
    ["Portfolio", "#transformations"],
    ["Why Us", "#whyus"],
    ["Areas", "#areas"],
    ["Contact", "#contact"],
  ];

  return (
    <>
      <nav className={`nav-root ${scrolled ? "nav-scrolled" : "nav-top"}`}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          maxWidth: 1320, margin: "0 auto", width: "100%",
        }}>

          {/* ── LOGO ── */}
          <a href="#top" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
            {/* Premium SVG logo — house + lightning bolt */}
            <svg
              width={scrolled ? 36 : 42}
              height={scrolled ? 36 : 42}
              viewBox="0 0 48 48"
              fill="none"
              style={{ transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)", flexShrink: 0 }}
            >
              {/* Outer circle — subtle */}
              <circle cx="24" cy="24" r="23" stroke={scrolled ? "rgba(184,147,90,0.3)" : "rgba(253,252,251,0.15)"} strokeWidth="1" />
              {/* House */}
              <path
                d="M24 8L8 21H12V40H22V30H26V40H36V21H40L24 8Z"
                stroke={scrolled ? "#1A5C3A" : "rgba(253,252,251,0.9)"}
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill={scrolled ? "rgba(26,92,58,0.08)" : "rgba(253,252,251,0.06)"}
              />
              {/* Lightning bolt */}
              <path
                d="M26 16L21 25H25L22 34L29 23H25L28 16H26Z"
                fill="#B8935A"
              />
            </svg>

            <div style={{ transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)" }}>
              <div style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: scrolled ? 18 : 21,
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: scrolled ? "#1A1917" : "#FDFCFB",
                lineHeight: 1.1,
                transition: "font-size 0.5s cubic-bezier(0.16,1,0.3,1), color 0.5s",
              }}>
                Propertycare
              </div>
              <div style={{
                fontSize: 8,
                fontWeight: 400,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#B8935A",
                lineHeight: 1.5,
              }}>
                Paints &amp; Electrics
              </div>
            </div>
          </a>

          {/* ── DESKTOP LINKS ── */}
          <ul style={{ display: "flex", gap: 44, listStyle: "none", alignItems: "center" }} className="dsk-links">
            {links.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="nav-link">{label}</a>
              </li>
            ))}
          </ul>

          {/* ── RIGHT: phone + CTA ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 24 }} className="dsk-right">
            {/* Premium phone */}
            <a href="tel:+447922909983" style={{ textDecoration: "none" }} className="nav-phone">
              <div style={{
                fontSize: 8, letterSpacing: "0.28em", textTransform: "uppercase",
                color: "#B8935A", fontWeight: 500, textAlign: "right", marginBottom: 1,
              }}>
                Free call
              </div>
              <div style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: scrolled ? 16 : 18,
                fontWeight: 500,
                color: scrolled ? "#1A1917" : "#FDFCFB",
                letterSpacing: "0.05em",
                lineHeight: 1,
                transition: "font-size 0.5s cubic-bezier(0.16,1,0.3,1), color 0.5s",
              }}>
                07922 909983
              </div>
            </a>

            <a href={WA} className="btn-forest" style={{ padding: "11px 22px" }}>
              <span style={{ fontSize: 11, letterSpacing: "0.14em" }}>Get Free Quote</span>
            </a>
          </div>

          {/* ── HAMBURGER ── */}
          <button
            onClick={() => setOpen(!open)}
            className="hamburger"
            aria-label={open ? "Close" : "Menu"}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "none" }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: 24, height: 1.5,
                background: scrolled ? "#1A1917" : "#FDFCFB",
                borderRadius: 1, marginBottom: i < 2 ? 6 : 0,
                transformOrigin: "center",
                transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.25s",
                transform: open
                  ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                  : i === 1 ? "scaleX(0)"
                  : "rotate(-45deg) translate(5px, -5px)"
                  : "none",
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* ── FULL-SCREEN MOBILE MENU ── */}
      <div style={{
        position: "fixed", inset: 0,
        background: "rgba(253,252,251,0.97)",
        backdropFilter: "blur(24px)",
        zIndex: 199,
        display: "flex",
        flexDirection: "column",
        padding: "108px 28px 48px",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1)",
      }}>
        {links.map(([label, href], i) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: 42, fontWeight: 300,
              color: "#1A1917", textDecoration: "none",
              padding: "13px 0", borderBottom: "1px solid #E8E2D9",
              opacity: open ? 1 : 0,
              transform: open ? "translateX(0)" : "translateX(24px)",
              transition: `opacity 0.45s ${0.08 + i * 0.07}s ease, transform 0.45s ${0.08 + i * 0.07}s cubic-bezier(0.16,1,0.3,1)`,
            }}
          >
            {label}
          </a>
        ))}
        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 12 }}>
          <a href={WA} className="btn-forest" style={{ justifyContent: "center", fontSize: 12, letterSpacing: "0.12em" }}>
            <span>WhatsApp — Free Quote</span>
          </a>
          <a href="tel:+447922909983" style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            padding: "16px", border: "1px solid #E8E2D9", borderRadius: 2,
            fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 22,
            color: "#1A1917", textDecoration: "none", letterSpacing: "0.05em",
          }}>
            07922 909983
          </a>
        </div>
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
          background: "linear-gradient(to right, #B8935A, rgba(184,147,90,0.2), transparent)",
        }} />
      </div>

      <style>{`
        @media (max-width: 1020px) {
          .dsk-links, .dsk-right { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (min-width: 1021px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
