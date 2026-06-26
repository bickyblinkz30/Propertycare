"use client";
import { useEffect, useRef } from "react";

export type BeforeAfterEntry = {
  beforeImg: string;
  afterImg: string;
  caption?: string;
  location?: string;
};

/*
  Drag-to-reveal before/after comparison slider.

  autoplay (default true): divider sweeps back and forth on its own until the
  user first interacts (tap, click, or drag), then it stops and becomes fully
  manual. Autoplay is gated behind an IntersectionObserver so off-screen
  sliders never burn CPU — important when 8+ cards are on the page.

  startOffset (default 50): the initial divider position as a percentage
  (0–100). Pass staggered values so sibling sliders don't sweep in unison.

  height (default 500): slider height in px.
*/
export default function BeforeAfterSlider({
  beforeImg = "/images/placeholders/before-1.jpg",
  afterImg = "/images/placeholders/after-1.jpg",
  caption,
  location,
  autoplay = true,
  startOffset = 50,
  height = 500,
}: BeforeAfterEntry & {
  autoplay?: boolean;
  startOffset?: number;
  height?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  // Clamp startOffset into the oscillation range [18, 82]
  const angleRef = useRef(Math.max(18, Math.min(82, startOffset)));
  const dirRef = useRef(startOffset > 50 ? -1 : 1);
  // Once the user interacts, autoplay stops permanently for this instance
  const manualRef = useRef(false);

  function setSlider(xClient: number) {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const r = wrap.getBoundingClientRect();
    const p = Math.max(4, Math.min(96, ((xClient - r.left) / r.width) * 100));
    if (beforeRef.current) beforeRef.current.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
    if (divRef.current) divRef.current.style.left = `${p}%`;
    if (knobRef.current) knobRef.current.style.left = `${p}%`;
    angleRef.current = p;
  }

  function clearTimer() {
    if (autoTimerRef.current) { clearInterval(autoTimerRef.current); autoTimerRef.current = null; }
  }

  function beginAutoplay() {
    if (!autoplay || manualRef.current || autoTimerRef.current) return;
    autoTimerRef.current = setInterval(() => {
      angleRef.current += dirRef.current * 0.45;
      if (angleRef.current <= 18 || angleRef.current >= 82) dirRef.current *= -1;
      const wrap = wrapRef.current;
      if (wrap) {
        const r = wrap.getBoundingClientRect();
        setSlider(r.left + r.width * (angleRef.current / 100));
      }
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
    if (wrapRef.current) observer.observe(wrapRef.current);

    const onMouseMove = (e: MouseEvent) => { if (dragging.current) setSlider(e.clientX); };
    const onTouchMove = (e: TouchEvent) => { if (dragging.current) setSlider(e.touches[0].clientX); };
    const onUp = () => { dragging.current = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);

    return () => {
      observer.disconnect();
      clearTimer();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStart = (xClient: number) => {
    manualRef.current = true;
    clearTimer();
    dragging.current = true;
    setSlider(xClient);
  };

  return (
    <div
      ref={wrapRef}
      onMouseDown={(e) => handleStart(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      style={{
        position: "relative", height, overflow: "hidden", borderRadius: 4,
        cursor: "ew-resize", userSelect: "none",
        boxShadow: "0 20px 60px rgba(10,9,8,0.18)",
      }}
    >
      {/* AFTER (full image underneath) */}
      <div style={{ position: "absolute", inset: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={afterImg} alt="After renovation" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 16, right: 16, background: "var(--color-accent)", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 13px", borderRadius: 2 }}>After</div>
      </div>

      {/* BEFORE (clipped by slider position) */}
      <div ref={beforeRef} style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - Math.max(18, Math.min(82, startOffset))}% 0 0)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={beforeImg} alt="Before renovation" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 16, left: 16, background: "#0A0908", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 13px", borderRadius: 2 }}>Before</div>
      </div>

      {/* Divider line */}
      <div
        ref={divRef}
        style={{
          position: "absolute", top: 0, bottom: 0, width: 3,
          background: "var(--color-accent)",
          left: `${Math.max(18, Math.min(82, startOffset))}%`,
          transform: "translateX(-50%)", zIndex: 10,
          pointerEvents: "none",
          boxShadow: "0 0 10px rgba(var(--color-accent-rgb),0.5)",
        }}
      />
      {/* Knob */}
      <div
        ref={knobRef}
        style={{
          position: "absolute", top: "50%",
          left: `${Math.max(18, Math.min(82, startOffset))}%`,
          transform: "translate(-50%,-50%)",
          width: 52, height: 52, background: "var(--color-accent)", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none", zIndex: 11,
          boxShadow: "0 6px 24px rgba(var(--color-accent-rgb),0.5)",
        }}
      >
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
