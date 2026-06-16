"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const sel = ".rv, .rv-scale, .img-wrap";
    const els = document.querySelectorAll(sel);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
