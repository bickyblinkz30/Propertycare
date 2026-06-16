const ITEMS = [
  "✦ Free Quotations — No Obligation",
  "✦ Fully Insured & Certified",
  "✦ NICEIC / Part P Electricians",
  "✦ 5★ Rated Across the North East",
  "✦ Written Workmanship Guarantee",
  "✦ Same-Week Surveys Available",
  "✦ Residential & Commercial",
  "✦ Sunderland & The North East",
  "✦ Premium Painting & Decorating",
  "✦ Bespoke Media Walls",
];

export default function Marquee() {
  const all = [...ITEMS, ...ITEMS];

  return (
    <div style={{
      background: "#1A1917",
      borderTop: "1px solid rgba(184,147,90,0.3)",
      borderBottom: "1px solid rgba(184,147,90,0.15)",
    }}>
      <div className="mq-outer" style={{ position: "relative" }}>
        {/* Fade edges */}
        {(["left", "right"] as const).map((side) => (
          <div key={side} style={{
            position: "absolute",
            [side]: 0, top: 0, bottom: 0,
            width: 100,
            background: `linear-gradient(to ${side === "left" ? "right" : "left"}, #1A1917, transparent)`,
            zIndex: 2, pointerEvents: "none",
          }} />
        ))}

        <div className="mq-track">
          {all.map((text, i) => (
            <div key={i} style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "17px 44px",
              borderRight: "1px solid rgba(184,147,90,0.1)",
              flexShrink: 0,
              gap: 12,
              whiteSpace: "nowrap",
            }}>
              <span style={{
                fontSize: 10,
                fontWeight: 400,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(253,252,251,0.55)",
              }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
