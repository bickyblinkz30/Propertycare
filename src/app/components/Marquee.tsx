const ITEMS = [
  "Free Quotations — No Obligation",
  "Fully Insured & Certified",
  "NICEIC Approved Electricians",
  "5★ Rated Across the North East",
  "Written Workmanship Guarantee",
  "Residential & Commercial",
  "Sunderland & The North East",
  "Experienced & Reliable Team",
  "Premium Quality Workmanship",
  "Fast Response Times",
];

export default function Marquee() {
  const all = [...ITEMS, ...ITEMS];

  return (
    <div style={{
      background: "#0A0908",
      borderTop: "3px solid var(--color-accent)",
      borderBottom: "1px solid rgba(var(--color-accent-rgb),0.2)",
    }}>
      <div className="mq-outer" style={{ position: "relative" }}>
        {(["left", "right"] as const).map((side) => (
          <div key={side} style={{
            position: "absolute",
            [side]: 0, top: 0, bottom: 0,
            width: 80,
            background: `linear-gradient(to ${side === "left" ? "right" : "left"}, #0A0908, transparent)`,
            zIndex: 2, pointerEvents: "none",
          }} />
        ))}

        <div className="mq-track">
          {all.map((text, i) => (
            <div key={i} style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "20px 40px",
              flexShrink: 0,
              gap: 14,
              whiteSpace: "nowrap",
            }}>
              {/* Orange check icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="3" style={{ flexShrink: 0 }}>
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fff",
              }}>
                {text}
              </span>
              <span style={{
                color: "var(--color-accent)",
                fontSize: 18,
                fontWeight: 700,
                marginLeft: 14,
              }}>
                ●
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
