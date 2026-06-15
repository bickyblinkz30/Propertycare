"use client";
import { useEffect, useRef } from "react";

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
      angleRef.current += dirRef.current * 0.55;
      if (angleRef.current <= 18 || angleRef.current >= 82) dirRef.current *= -1;
      const wrap = wrapRef.current;
      if (wrap) {
        const r = wrap.getBoundingClientRect();
        setSlider(r.left + r.width * (angleRef.current / 100));
      }
    }, 16);

    const onMouseMove = (e: MouseEvent) => { if (dragging.current) setSlider(e.clientX); };
    const onTouchMove = (e: TouchEvent) => { if (dragging.current) setSlider(e.touches[0].clientX); };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);

    return () => {
      stopAuto();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  const startDrag = (x: number) => { stopAuto(); dragging.current = true; setSlider(x); };

  return (
    <div
      ref={wrapRef}
      onMouseDown={(e) => startDrag(e.clientX)}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      style={{ position: "relative", height: 480, overflow: "hidden", borderRadius: 2, cursor: "ew-resize", userSelect: "none", background: "#F0EBE3" }}
    >
      {/* AFTER — modern media wall */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #f5f0e8 0%, #ede5d8 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "60%", height: "70%" }}>
          <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "72%", height: "85%", background: "#2A2724", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10, boxShadow: "0 20px 60px rgba(42,39,36,0.25)" }}>
            <div style={{ width: "75%", height: "46%", background: "#111", border: "1px solid #3a3734" }} />
            <div style={{ width: "75%", height: 3, background: "linear-gradient(to right, transparent, #B8935A, rgba(255,140,60,0.7), #B8935A, transparent)", filter: "blur(1.5px)" }} />
          </div>
          <div style={{ position: "absolute", bottom: -10, left: "-20%", right: "-20%", height: 18, background: "#d4c4a8", borderRadius: "50% 50% 0 0" }} />
        </div>
        <div style={{ position: "absolute", top: 14, right: 14, background: "#1A5C3A", color: "#fff", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", padding: "5px 11px" }}>After</div>
      </div>

      {/* BEFORE — old chimney breast */}
      <div
        ref={beforeRef}
        style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #ece0cf 0%, #e0d4c0 100%)", display: "flex", alignItems: "center", justifyContent: "center", clipPath: "inset(0 50% 0 0)" }}
      >
        <div style={{ position: "relative", width: "60%", height: "70%" }}>
          <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "55%", height: "80%", background: "#c8b89a", border: "2px solid #b8a88a", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "60%", height: "40%", border: "2px solid #a89878", background: "#b0a080" }} />
          </div>
        </div>
        <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(42,39,36,0.75)", color: "#F8F5F0", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", padding: "5px 11px" }}>Before</div>
      </div>

      {/* Divider line */}
      <div ref={divRef} style={{ position: "absolute", top: 0, bottom: 0, width: 2, background: "#B8935A", left: "50%", transform: "translateX(-50%)", zIndex: 10, pointerEvents: "none" }} />

      {/* Knob */}
      <div ref={knobRef} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 44, height: 44, background: "#B8935A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", zIndex: 11, boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
          <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" />
        </svg>
      </div>
    </div>
  );
}
