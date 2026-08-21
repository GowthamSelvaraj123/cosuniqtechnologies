"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const isHoverable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setCanHover(isHoverable);

    if (isHoverable) {
      document.body.classList.add("has-cursor");
      const cursor = document.getElementById("cursor");
      const cursorDot = document.getElementById("cursor-dot");

      if (cursor && cursorDot) {
        let x = 0;
        let y = 0;
        let dx = 0;
        let dy = 0;

        const onMouseMove = (e: MouseEvent) => {
          x = e.clientX;
          y = e.clientY;
          cursorDot.style.left = x + "px";
          cursorDot.style.top = y + "px";
        };

        document.addEventListener("mousemove", onMouseMove, { passive: true });

        let animationFrameId: number;
        const loop = () => {
          dx += (x - dx) * 0.18;
          dy += (y - dy) * 0.18;
          cursor.style.left = dx + "px";
          cursor.style.top = dy + "px";
          animationFrameId = requestAnimationFrame(loop);
        };
        loop();

        const addHover = () => cursor.classList.add("is-hover");
        const removeHover = () => cursor.classList.remove("is-hover");

        const setupHoverElements = () => {
          document.querySelectorAll("a, button, summary, .filter-btn, .slider-btn").forEach((el) => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
          });
        };

        setupHoverElements();
        
        // Setup observer for dynamically added elements
        const observer = new MutationObserver(setupHoverElements);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
          document.removeEventListener("mousemove", onMouseMove);
          cancelAnimationFrame(animationFrameId);
          document.body.classList.remove("has-cursor");
          observer.disconnect();
          document.querySelectorAll("a, button, summary, .filter-btn, .slider-btn").forEach((el) => {
            el.removeEventListener("mouseenter", addHover);
            el.removeEventListener("mouseleave", removeHover);
          });
        };
      }
    }
  }, []);

  if (!canHover) return null;

  return (
    <>
      <div className="cursor" id="cursor" aria-hidden="true"></div>
      <div className="cursor-dot" id="cursor-dot" aria-hidden="true"></div>
    </>
  );
}
