"use client";
import { useEffect, useRef, useState } from "react";

export type Testimonial = { quote: string; name: string; detail: string };

function Stars() {
  return (
    <div style={{ display: "flex", gap: 4, justifyContent: "center", marginBottom: 22 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#C9A227">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  );
}

/*
  Shared, prop-driven testimonial carousel.
  Auto-advances (pauses on hover/focus), supports prev/next buttons, dot
  indicators and touch swipe. One entry visible at a time.
*/
export default function TestimonialCarousel({
  items,
  intervalMs = 6500,
}: {
  items: readonly Testimonial[];
  intervalMs?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const n = items.length;

  const go = (i: number) => setIdx(((i % n) + n) % n);

  useEffect(() => {
    if (paused || n <= 1) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % n), intervalMs);
    return () => clearInterval(t);
  }, [paused, n, intervalMs]);

  if (n === 0) return null;
  const t = items[idx];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (dx > 45) go(idx - 1);
        else if (dx < -45) go(idx + 1);
        touchX.current = null;
      }}
      style={{ maxWidth: 780, margin: "0 auto", position: "relative" }}
    >
      <div
        key={idx}
        className="testi-card"
        style={{
          background: "#F8F5F0", border: "2px solid #E8E2D9", borderRadius: 4,
          padding: "52px 56px 44px", position: "relative", textAlign: "center",
          animation: "testiFade 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 80, height: 4, background: "#C9A227" }} />
        <Stars />
        <p style={{ fontSize: 18, fontWeight: 400, color: "#1A1917", lineHeight: 1.75, marginBottom: 28, minHeight: 84 }}>
          &ldquo;{t.quote}&rdquo;
        </p>
        <div style={{ fontSize: 15, fontWeight: 800, color: "#0A0908", letterSpacing: "-0.01em", marginBottom: 4 }}>{t.name}</div>
        <div style={{ fontSize: 11, color: "#C9A227", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>{t.detail}</div>
      </div>

      {n > 1 && (
        <>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 28 }}>
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(idx - 1)}
              style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid #E8E2D9", background: "#FDFCFB", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.25s, background 0.25s" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0908" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>

            <div style={{ display: "flex", gap: 8 }}>
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => go(i)}
                  style={{
                    width: i === idx ? 26 : 8, height: 8, borderRadius: 999,
                    border: "none", padding: 0, cursor: "pointer",
                    background: i === idx ? "#C9A227" : "#D8D0C4",
                    transition: "width 0.3s cubic-bezier(0.16,1,0.3,1), background 0.3s",
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(idx + 1)}
              style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid #E8E2D9", background: "#FDFCFB", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.25s, background 0.25s" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0908" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
