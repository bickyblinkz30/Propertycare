"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(253,252,251,0.97)" : "rgba(253,252,251,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #E8E2D9" : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        <a href="#top" style={{ textDecoration: "none" }}>
          <span style={{ display: "block", fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 20, fontWeight: 500, letterSpacing: "0.04em", color: "#2A2724", lineHeight: 1.1 }}>
            Propertycare
          </span>
          <span style={{ display: "block", fontSize: 9, fontWeight: 400, letterSpacing: "0.28em", textTransform: "uppercase", color: "#B8935A", lineHeight: 1.4 }}>
            Paints &amp; Electrics
          </span>
        </a>

        <ul style={{ display: "flex", gap: 36, listStyle: "none", alignItems: "center" }} className="nav-desktop">
          {["Services", "Portfolio", "Why Us", "Areas", "Contact"].map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(/\s+/g, "")}`}
                style={{ color: "#6B6460", textDecoration: "none", fontSize: 11, fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#2A2724")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6B6460")}
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/447922909983?text=Hi%20Propertycare%2C%20I%27d%20like%20a%20free%20quote."
              style={{ background: "#1A5C3A", color: "#fff", textDecoration: "none", padding: "10px 22px", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: 2, display: "inline-flex", alignItems: "center", gap: 7, transition: "background 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#22754A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#1A5C3A")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Free Quote
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "none" }}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A2724" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", top: 64, left: 0, right: 0, background: "rgba(253,252,251,0.98)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E8E2D9", padding: "24px 24px 32px", zIndex: 99 }}>
          {["Services", "Portfolio", "Why Us", "Areas", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "")}`}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "13px 0", borderBottom: "1px solid #E8E2D9", color: "#4A4541", textDecoration: "none", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              {l}
            </a>
          ))}
          <a
            href="https://wa.me/447922909983"
            style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 20, background: "#1A5C3A", color: "#fff", textDecoration: "none", padding: "14px 20px", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 2, justifyContent: "center" }}
          >
            WhatsApp — Free Quote
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          nav { padding: 14px 20px !important; }
        }
      `}</style>
    </>
  );
}
