"use client";

import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const progress = document.getElementById("scroll-progress");
    if (!progress) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      progress.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial call
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-progress" id="scroll-progress" aria-hidden="true"></div>;
}
