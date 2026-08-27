"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    // Basic check for non-touch devices
    const isHoverable = window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.innerWidth > 768;
    setCanHover(isHoverable);

    if (isHoverable) {
      document.body.classList.add("has-cursor");
      const cursor = document.getElementById("cursor");
      const cursorDot = document.getElementById("cursor-dot");

      if (cursor && cursorDot) {
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let dx = x;
        let dy = y;

        const onMouseMove = (e: MouseEvent) => {
          x = e.clientX;
          y = e.clientY;
          cursorDot.style.left = x + "px";
          cursorDot.style.top = y + "px";
          
          // Dynamically check if hovering a clickable element
          const target = e.target as HTMLElement;
          const isClickable = target.closest('a, button, summary, [role="button"]') || window.getComputedStyle(target).cursor === 'pointer';
          
          if (isClickable) {
            cursor.classList.add("is-hover");
          } else {
            cursor.classList.remove("is-hover");
          }
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

        return () => {
          document.removeEventListener("mousemove", onMouseMove);
          cancelAnimationFrame(animationFrameId);
          document.body.classList.remove("has-cursor");
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
