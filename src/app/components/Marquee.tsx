const ITEMS = [
  { text: "Fully Insured & Certified", icon: "shield" },
  { text: "Free Quotations — No Obligation", icon: "doc" },
  { text: "5★ Rated Across the North East", icon: "star" },
  { text: "NICEIC / Part P Electrical", icon: "bolt" },
  { text: "Written Workmanship Guarantee", icon: "check" },
  { text: "Same-Week Surveys Available", icon: "cal" },
  { text: "Residential & Commercial", icon: "home" },
  { text: "Sunderland & The North East", icon: "pin" },
];

function MarqueeIcon({ type }: { type: string }) {
  const s = { width: 13, height: 13, flexShrink: 0 as const };
  if (type === "shield")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="none" stroke="#B8935A" strokeWidth="1.5">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    );
  if (type === "doc")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="none" stroke="#B8935A" strokeWidth="1.5">
        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    );
  if (type === "star")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="#B8935A">
        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    );
  if (type === "bolt")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="none" stroke="#B8935A" strokeWidth="1.5">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    );
  if (type === "check")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="none" stroke="#B8935A" strokeWidth="1.5">
        <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.42 3.121c-.673.955-1.693 1.563-2.822 1.563-.24 0-.487-.04-.718-.115A3.75 3.75 0 0112 21.75a3.75 3.75 0 01-3.447-2.373 3.751 3.751 0 01-.718.115c-1.129 0-2.149-.608-2.822-1.563a3.745 3.745 0 01-.42-3.121A3.75 3.75 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.42-3.121c.673-.955 1.693-1.563 2.822-1.563.24 0 .487.04.718.115A3.75 3.75 0 0112 2.25a3.75 3.75 0 013.447 2.373c.23-.075.477-.115.718-.115 1.129 0 2.149.608 2.822 1.563.434.616.644 1.354.42 3.121A3.75 3.75 0 0121 12z" />
      </svg>
    );
  if (type === "home")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="none" stroke="#B8935A" strokeWidth="1.5">
        <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    );
  if (type === "cal")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="none" stroke="#B8935A" strokeWidth="1.5">
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    );
  return (
    <svg {...s} viewBox="0 0 24 24" fill="none" stroke="#B8935A" strokeWidth="1.5">
      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

export default function Marquee() {
  // Duplicate items so the seamless loop works
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      style={{
        background: "#1E1C1A",
        borderTop: "1px solid rgba(184,147,90,0.25)",
        borderBottom: "1px solid rgba(184,147,90,0.15)",
        overflow: "hidden",
        padding: "0",
      }}
    >
      {/* Gradient fade edges */}
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 80,
          background: "linear-gradient(to right, #1E1C1A, transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 80,
          background: "linear-gradient(to left, #1E1C1A, transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />

        <div className="marquee-wrap">
          <div className="marquee-track">
            {repeated.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "18px 40px",
                  borderRight: "1px solid rgba(184,147,90,0.12)",
                  flexShrink: 0,
                }}
              >
                <MarqueeIcon type={item.icon} />
                <span style={{
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(253,252,251,0.65)",
                  whiteSpace: "nowrap",
                }}>
                  {item.text}
                </span>
                {/* Brass dot separator */}
                <span style={{
                  display: "inline-block",
                  width: 3,
                  height: 3,
                  borderRadius: "50%",
                  background: "#B8935A",
                  opacity: 0.5,
                  marginLeft: 8,
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
