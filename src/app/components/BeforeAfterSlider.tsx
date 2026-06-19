"use client";
import { useEffect, useRef } from "react";

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

export default function BeforeAfterSlider({
  beforeImg = "/images/placeholders/before-1.jpg",
  afterImg = "/images/placeholders/after-1.jpg",
  caption,
  location,
}: BeforeAfterEntry) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const angleRef = useRef(50);
  const dirRef = useRef(-1);

  function setSlider(x: number) {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const r = wrap.getBoundingClientRect();
    const p = Math.max(4, Math.min(96, ((x - r.left) / r.width) * 100));
    if (beforeRef.current) beforeRef.current.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
    if (divRef.current) divRef.current.style.left = `${p}%`;
    if (knobRef.current) knobRef.current.style.left = `${p}%`;
  }

  function stopAuto() {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; }
  }

  useEffect(() => {
    autoRef.current = setInterval(() => {
      angleRef.current += dirRef.current * 0.5;
      if (angleRef.current <= 18 || angleRef.current >= 82) dirRef.current *= -1;
      const wrap = wrapRef.current;
      if (wrap) {
        const r = wrap.getBoundingClientRect();
        setSlider(r.left + r.width * (angleRef.current / 100));
      }
    }, 16);

    const mm = (e: MouseEvent) => { if (dragging.current) setSlider(e.clientX); };
    const tm = (e: TouchEvent) => { if (dragging.current) setSlider(e.touches[0].clientX); };
    const up = () => { dragging.current = false; };

    window.addEventListener("mousemove", mm);
    window.addEventListener("touchmove", tm, { passive: true });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      stopAuto();
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("touchmove", tm);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const start = (x: number) => { stopAuto(); dragging.current = true; setSlider(x); };

  return (
    <div
      ref={wrapRef}
      onMouseDown={(e) => start(e.clientX)}
      onTouchStart={(e) => start(e.touches[0].clientX)}
      style={{ position: "relative", height: 500, overflow: "hidden", borderRadius: 4, cursor: "ew-resize", userSelect: "none", boxShadow: "0 20px 60px rgba(10,9,8,0.18)" }}
    >
      {/* AFTER (full image underneath) */}
      <div style={{ position: "absolute", inset: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={afterImg} alt="Renovated interior" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 16, right: 16, background: "#F58220", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 13px", borderRadius: 2 }}>After</div>
      </div>

      {/* BEFORE (clipped by slider position) */}
      <div ref={beforeRef} style={{ position: "absolute", inset: 0, clipPath: "inset(0 50% 0 0)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={beforeImg} alt="Before renovation" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 16, left: 16, background: "#0A0908", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 13px", borderRadius: 2 }}>Before</div>
      </div>

      {/* Divider */}
      <div ref={divRef} style={{ position: "absolute", top: 0, bottom: 0, width: 3, background: "#F58220", left: "50%", transform: "translateX(-50%)", zIndex: 10, pointerEvents: "none", boxShadow: "0 0 10px rgba(245,130,32,0.5)" }} />
      {/* Knob */}
      <div ref={knobRef} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 52, height: 52, background: "#F58220", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", zIndex: 11, boxShadow: "0 6px 24px rgba(245,130,32,0.5)" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
          <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
        </svg>
      </div>

      {/* Optional caption overlay */}
      {(caption || location) && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 12, pointerEvents: "none", padding: "26px 18px 16px", background: "linear-gradient(to top, rgba(10,9,8,0.85), transparent)" }}>
          {location && (
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F58220", marginBottom: 4 }}>{location}</div>
          )}
          {caption && (
            <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.3 }}>{caption}</div>
          )}
        </div>
      )}
    </div>
  );
}
