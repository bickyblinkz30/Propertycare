"use client";
import { useEffect, useRef } from "react";

/*
  TODO: Replace with client before/after photos.
  Current images are placeholder Unsplash interiors stored locally in /public/images/placeholders/.
  Swap the `beforeImg` / `afterImg` src values once real project photography is available.
*/
const beforeImg = "/images/placeholders/before-1.jpg";
const afterImg = "/images/placeholders/after-1.jpg";

export default function BeforeAfterSlider() {
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
        <img src={afterImg} alt="Renovated interior" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 16, right: 16, background: "#F58220", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 13px", borderRadius: 2 }}>After</div>
      </div>

      {/* BEFORE (clipped by slider position) */}
      <div ref={beforeRef} style={{ position: "absolute", inset: 0, clipPath: "inset(0 50% 0 0)" }}>
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
    </div>
  );
}
