"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function InitReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    if (reveals.length && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
      );
      reveals.forEach(function (el) {
        // Reset visibility when routing
        el.classList.remove("visible");
        io.observe(el);
      });

      return () => {
        io.disconnect();
      };
    } else {
      reveals.forEach(function (el) {
        el.classList.add("visible");
      });
    }
  }, [pathname]);

  return null;
}
