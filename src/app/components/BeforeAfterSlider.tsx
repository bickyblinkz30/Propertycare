"use client";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

/*
  Drag-to-reveal before/after comparison slider.

  Image pairs are passed in as props so the same component can power multiple
  transformations. Defaults point at the local placeholder photos in
  /public/images/placeholders/ — swap these for real client project photos
  via the `beforeAfterTransformations` array in src/lib/images.ts.
*/
export type BeforeAfterEntry = {
  beforeImg: string;
  afterImg: string;
  caption?: string;
  location?: string;
};

// Presentational props layered on top of the data shape. `height` lets the same
// slider fill a 400px grid card or a 500px featured frame; `autoplay={false}`
// stops the auto-sweep loop (used for the many grid-card sliders, which would
// otherwise each run their own animation timer).
type BeforeAfterSliderProps = BeforeAfterEntry & {
  height?: number;
  autoplay?: boolean;
};

export default function BeforeAfterSlider({
  beforeImg = "/images/placeholders/before-1.jpg",
  afterImg = "/images/placeholders/after-1.jpg",
  caption,
  location,
  height = 500,
  autoplay = true,
}: BeforeAfterSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const angleRef = useRef(50);
  const dirRef = useRef(-1);

  // Maps an absolute clientX to a 0-100 percentage within THIS slider's own rect.
  // Fresh getBoundingClientRect() on every event — no accumulated offsets, no shared state.
  function calcPct(clientX: number): number {
    const el = sliderRef.current;
    if (!el) return 50;
    const rect = el.getBoundingClientRect();
    return Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
  }

  function stopAuto() {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; }
  }

  useEffect(() => {
    if (autoplay) {
      autoRef.current = setInterval(() => {
        if (dragging.current) return;
        angleRef.current += dirRef.current * 0.5;
        if (angleRef.current <= 18 || angleRef.current >= 82) dirRef.current *= -1;
        setPosition(angleRef.current);
      }, 16);
    }
    return () => stopAuto();
  }, [autoplay]);

  // Pointer Events unify mouse/touch/pen. setPointerCapture keeps move events
  // flowing to THIS slider even as the finger leaves it — and is per-instance,
  // so multiple cards never collide. touchAction:"none" stops the browser from
  // stealing the horizontal drag for page scroll on mobile.
  const onDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    stopAuto();
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setPosition(calcPct(e.clientX));
  };
  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragging.current) setPosition(calcPct(e.clientX));
  };
  const onUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={sliderRef}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      style={{ position: "relative", height, overflow: "hidden", borderRadius: 4, cursor: "ew-resize", userSelect: "none", touchAction: "none", boxShadow: "0 20px 60px rgba(10,9,8,0.18)" }}
    >
      {/* AFTER (full image underneath) */}
      <div style={{ position: "absolute", inset: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={afterImg} alt="Renovated interior" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 16, right: 16, background: "var(--color-accent)", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 13px", borderRadius: 2 }}>After</div>
      </div>

      {/* BEFORE (clipped to reveal only the left portion) */}
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - position}% 0 0)`, pointerEvents: "none" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={beforeImg} alt="Before renovation" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 16, left: 16, background: "#0A0908", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 13px", borderRadius: 2 }}>Before</div>
      </div>

      {/* Divider */}
      <div style={{ position: "absolute", top: 0, bottom: 0, width: 3, background: "var(--color-accent)", left: `${position}%`, transform: "translateX(-50%)", zIndex: 10, pointerEvents: "none", boxShadow: "0 0 10px rgba(var(--color-accent-rgb),0.5)" }} />

      {/* Knob */}
      <div style={{ position: "absolute", top: "50%", left: `${position}%`, transform: "translate(-50%,-50%)", width: 52, height: 52, background: "var(--color-accent)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", zIndex: 11, boxShadow: "0 6px 24px rgba(var(--color-accent-rgb),0.5)" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
          <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
        </svg>
      </div>

      {/* Optional caption overlay */}
      {(caption || location) && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 12, pointerEvents: "none", padding: "26px 18px 16px", background: "linear-gradient(to top, rgba(10,9,8,0.85), transparent)" }}>
          {location && (
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 4 }}>{location}</div>
          )}
          {caption && (
            <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.3 }}>{caption}</div>
          )}
        </div>
      )}
    </div>
  );
}
