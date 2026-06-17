"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const WA = "https://wa.me/447922909982?text=Hi%20Property%20Care%2C%20I%27d%20like%20a%20free%20quote.";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Portfolio", "/portfolio"],
    ["Why Us", "/why-choose-us"],
    ["Contact", "/contact"],
  ];

  return (
    <>
      <nav className={`nav-root ${scrolled ? "nav-scrolled" : "nav-top"}`}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          maxWidth: 1400, margin: "0 auto", width: "100%",
        }}>

          {/* ── LOGO ── */}
          <a href="#top" style={{ textDecoration: "none", display: "flex", alignItems: "center", flexShrink: 0 }}>
            <div style={{
              background: scrolled ? "transparent" : "rgba(255,255,255,0.95)",
              padding: scrolled ? "4px 12px 4px 0" : "8px 14px",
              borderRadius: scrolled ? 0 : 6,
              transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
              display: "flex",
              alignItems: "center",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/propertycare-logo.jpg"
                alt="Property Care Paint & Electrics"
                style={{
                  height: scrolled ? 46 : 60,
                  width: "auto",
                  display: "block",
                  transition: "height 0.5s cubic-bezier(0.16,1,0.3,1)",
                }}
              />
            </div>
          </a>

          {/* ── DESKTOP LINKS ── */}
          <ul style={{
            display: "flex", gap: 40, listStyle: "none", alignItems: "center",
          }} className="dsk-links">
            {links.map(([label, href]) => (
              <li key={label}>
                <a href={href} className={`nav-link${pathname === href ? " nav-active" : ""}`}>{label}</a>
              </li>
            ))}
          </ul>

          {/* ── RIGHT — phone + CTA ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 24 }} className="dsk-right">
            <a href="tel:+447922909982" style={{ textDecoration: "none", display: "flex", flexDirection: "column" }} className="nav-phone">
              <span style={{
                fontSize: 9,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#F58220",
                fontWeight: 700,
                textAlign: "right",
                marginBottom: 2,
              }}>
                Call Us Now
              </span>
              <span style={{
                fontSize: scrolled ? 19 : 22,
                fontWeight: 800,
                color: scrolled ? "#0A0908" : "#fff",
                letterSpacing: "0.02em",
                lineHeight: 1,
                transition: "font-size 0.5s cubic-bezier(0.16,1,0.3,1), color 0.5s",
              }}>
                07922 909982
              </span>
            </a>

            <a href={WA} className="btn-orange" style={{ padding: "13px 24px", fontSize: 12 }}>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Free Quote
              </span>
            </a>
          </div>

          {/* ── HAMBURGER ── */}
          <button
            onClick={() => setOpen(!open)}
            className="hamburger"
            aria-label={open ? "Close" : "Menu"}
            style={{
              background: scrolled ? "transparent" : "rgba(255,255,255,0.95)",
              border: "none", cursor: "pointer", padding: 12, display: "none",
              borderRadius: 4,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: 24, height: 2.5,
                background: "#0A0908",
                borderRadius: 2, marginBottom: i < 2 ? 5 : 0,
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
        background: "#FDFCFB",
        zIndex: 199,
        display: "flex",
        flexDirection: "column",
        padding: "32px 28px 48px",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1)",
        overflowY: "auto",
      }}>
        {/* Logo at top of mobile menu */}
        <div style={{ marginBottom: 40, display: "flex", justifyContent: "center", paddingTop: 8 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/propertycare-logo.jpg" alt="Property Care" style={{ height: 90, width: "auto" }} />
        </div>

        {links.map(([label, href], i) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              fontSize: 22, fontWeight: 700, letterSpacing: "0.02em",
              color: "#0A0908", textDecoration: "none",
              padding: "18px 0", borderBottom: "1px solid #E8E2D9",
              opacity: open ? 1 : 0,
              transform: open ? "translateX(0)" : "translateX(24px)",
              transition: `opacity 0.45s ${0.08 + i * 0.07}s ease, transform 0.45s ${0.08 + i * 0.07}s cubic-bezier(0.16,1,0.3,1)`,
            }}
          >
            <span>{label}</span>
            <span style={{ color: "#F58220", fontSize: 16 }}>→</span>
          </a>
        ))}

        <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 12 }}>
          <a href={WA} className="btn-orange" style={{ justifyContent: "center" }}>
            <span>WhatsApp — Free Quote</span>
          </a>
          <a href="tel:+447922909982" style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            gap: 10, padding: "18px", background: "#0A0908", borderRadius: 4,
            fontSize: 22, fontWeight: 800, color: "#fff", textDecoration: "none", letterSpacing: "0.02em",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
            07922 909982
          </a>
        </div>

        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 4,
          background: "#F58220",
        }} />
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .dsk-links, .dsk-right { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (max-width: 768px) {
          .nav-root.nav-top { padding: 16px 20px !important; }
          .nav-root.nav-scrolled { padding: 10px 20px !important; }
        }
      `}</style>
    </>
  );
}
