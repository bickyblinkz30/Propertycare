"use client";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

export type BeforeAfterEntry = {
  beforeImg: string;
  afterImg: string;
  caption?: string;
  location?: string;
};

// Presentational props layered on top of the data shape.
type BeforeAfterSliderProps = BeforeAfterEntry & {
  height?: number;
  autoplay?: boolean;
  startOffset?: number;
};

export default function BeforeAfterSlider({
  beforeImg = "/images/placeholders/before-1.jpg",
  afterImg = "/images/placeholders/after-1.jpg",
  caption,
  location,
  height = 500,
  autoplay = true,
  startOffset = 50,
}: BeforeAfterSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const clampedStart = Math.max(18, Math.min(82, startOffset));
  const [position, setPosition] = useState(clampedStart);
  const dragging = useRef(false);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const angleRef = useRef(clampedStart);
  const dirRef = useRef(startOffset > 50 ? -1 : 1);
  // Once the user interacts, autoplay stops permanently for this instance
  const manualRef = useRef(false);

  // Maps an absolute clientX to a 0-100 percentage within THIS slider's own rect.
  function calcPct(clientX: number): number {
    const el = sliderRef.current;
    if (!el) return 50;
    const rect = el.getBoundingClientRect();
    return Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
  }

  function clearTimer() {
    if (autoTimerRef.current) { clearInterval(autoTimerRef.current); autoTimerRef.current = null; }
  }

  function beginAutoplay() {
    if (!autoplay || manualRef.current || autoTimerRef.current) return;
    autoTimerRef.current = setInterval(() => {
      angleRef.current += dirRef.current * 0.45;
      if (angleRef.current <= 18 || angleRef.current >= 82) dirRef.current *= -1;
      setPosition(angleRef.current);
    }, 16);
  }

  useEffect(() => {
    // Viewport gate — only animate while the card is on screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          beginAutoplay();
        } else {
          clearTimer();
        }
      },
      { threshold: 0.1 }
    );
    if (sliderRef.current) observer.observe(sliderRef.current);

    return () => {
      observer.disconnect();
      clearTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pointer Events unify mouse/touch/pen. setPointerCapture keeps move events
  // flowing to THIS slider even as the finger leaves it — per-instance,
  // so multiple cards never collide. touchAction:"none" stops the browser from
  // stealing the horizontal drag for page scroll on mobile.
  const onDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    manualRef.current = true;
    clearTimer();
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
        <img src={afterImg} alt="After renovation" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
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

      {/* Caption overlay (optional) */}
      {(caption || location) && (
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 12,
          pointerEvents: "none", padding: "26px 18px 16px",
          background: "linear-gradient(to top, rgba(10,9,8,0.85), transparent)",
        }}>
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
