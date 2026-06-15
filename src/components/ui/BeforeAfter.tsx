"use client";

import { useCallback, useRef, useState } from "react";

/*
  Signature interaction: drag-wipe before/after slider.
  Placeholder visuals use CSS gradients (before = muted, after = warm/rich) until
  real on-site photography is shot — swap the gradient divs for <Image> then.
  Keyboard-accessible (range semantics) and degrades to a labelled split.
*/
type Tone = { from: string; to: string };

export function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
  className = "",
}: {
  before: Tone;
  after: Tone;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <figure className={className}>
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-xl ring-1 ring-white/10 sm:aspect-[16/10]"
      >
        {/* After (full, underneath) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${after.from}, ${after.to})` }}
        />
        <span className="absolute right-3 top-3 z-10 rounded-full bg-black/50 px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-fg backdrop-blur-sm">
          {afterLabel}
        </span>

        {/* Before (clipped to the slider position) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${before.from}, ${before.to})`,
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
          }}
        />
        <span
          className="absolute left-3 top-3 z-10 rounded-full bg-black/50 px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-fg backdrop-blur-sm"
          style={{ opacity: pos > 14 ? 1 : 0 }}
        >
          {beforeLabel}
        </span>

        {/* Faint "sample visual" note (placeholder honesty, removed with real imagery) */}
        <span className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.18em] text-white/35">
          Sample visual
        </span>

        {/* Handle */}
        <div
          className="absolute inset-y-0 z-20 w-0.5 bg-accent"
          style={{ left: `${pos}%` }}
          aria-hidden
        >
          <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-bg shadow-lg">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </div>
        </div>

        {/* Pointer surface */}
        <div
          className="absolute inset-0 z-30 cursor-ew-resize"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        />

        {/* Accessible range control */}
        <label className="sr-only" htmlFor={`ba-${beforeLabel}-${afterLabel}`}>
          Reveal before and after — drag to compare
        </label>
        <input
          id={`ba-${beforeLabel}-${afterLabel}`}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-x-0 bottom-2 z-40 mx-auto w-[92%] cursor-ew-resize opacity-0 focus-visible:opacity-100"
          aria-label="Drag to compare before and after"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
