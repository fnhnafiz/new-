"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // motion কমিয়ে রাখা থাকলে native scroll ই থাক
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1, // বেশি দিলে ভারী আর দেরি লাগে
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    // মডাল বা drawer খুললে থামানোর জন্য বাইরে থেকে ধরা যাবে
    window.lenis = lenis;

    let frame;
    const loop = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return null;
}