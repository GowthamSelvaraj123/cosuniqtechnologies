"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./CinematicHero.module.css";
import confetti from "canvas-confetti";

const sequence = [
  "Your brand can do more.",
  "More attention.",
  "More impact.",
  "More connection.",
  "Branding people remember.",
];

// 1.2s per item × 11 items = ~13.2s total
const TOTAL_MS = sequence.length * 1200;

export default function CinematicHero() {
  const [currentIndex, setCurrentIndex]                   = useState(0);
  const [isExiting, setIsExiting]                         = useState(false);
  const [isEntered, setIsEntered]                         = useState(false);
  const [transitionProgress, setTransitionProgress]       = useState(0);
  const [textTransitionProgress, setTextTransitionProgress] = useState(0);
  const [count, setCount]                                 = useState(0);
  const gradientRef  = useRef<HTMLDivElement>(null);
  const sectionRef   = useRef<HTMLElement>(null);
  const startTimeRef = useRef<number>(performance.now());

  // Force correct font — read resolved value from <body> where font-family is actually set
  useEffect(() => {
    const bodyFont = getComputedStyle(document.body).fontFamily;
    if (sectionRef.current) {
      sectionRef.current.style.fontFamily = bodyFont;
    }
  }, []);

  // Cursor-following gradient
  useEffect(() => {
    let animId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let curX = targetX, curY = targetY;
    const onMove = (e: MouseEvent) => { targetX = e.clientX; targetY = e.clientY; };
    const loop = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      if (gradientRef.current)
        gradientRef.current.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      animId = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    loop();
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(animId); };
  }, []);

  // Lock scroll
  useEffect(() => {
    if (!isEntered && !isExiting) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; document.documentElement.style.overflow = ""; };
  }, [isEntered, isExiting]);

  // Advance text every 3.5s
  useEffect(() => {
    if (currentIndex < sequence.length - 1) {
      const t = setTimeout(() => setCurrentIndex(i => i + 1), 1200);
      return () => clearTimeout(t);
    }
  }, [currentIndex]);

  // Text transition shader pulse
  useEffect(() => {
    if (currentIndex === 0) return;
    const dur = 1000, t0 = performance.now();
    let id: number;
    const run = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setTextTransitionProgress(p);
      if (p < 1) id = requestAnimationFrame(run);
    };
    id = requestAnimationFrame(run);
    return () => cancelAnimationFrame(id);
  }, [currentIndex]);

  // 0→100 counter synced to total splash duration, auto-exits at 100
  useEffect(() => {
    startTimeRef.current = performance.now();
    let id: number;
    const run = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const raw     = Math.min(elapsed / TOTAL_MS, 1);
      const eased   = 1 - Math.pow(1 - raw, 2); // ease-out quad
      const value   = Math.round(eased * 100);
      setCount(value);

      if (raw < 1) {
        id = requestAnimationFrame(run);
      } else {
        // Auto-trigger exit when counter hits 100
        triggerExit();
      }
    };
    id = requestAnimationFrame(run);
    return () => cancelAnimationFrame(id);
  }, []);

  const triggerExit = () => {
    confetti({
      particleCount: 350, spread: 360, startVelocity: 55,
      origin: { x: 0.5, y: 0.5 },
      colors: ["#ffffff", "#ff5e00", "#000000", "#ff8c00", "#ff3300"],
      zIndex: 99999,
    });
    const dur = 1500, t0 = performance.now();
    let exitDone = false;
    const animate = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setTransitionProgress(p);
      if (p > 0.8 && !exitDone) { exitDone = true; setIsExiting(true); }
      if (p < 1) requestAnimationFrame(animate);
      else setTimeout(() => setIsEntered(true), 800);
    };
    requestAnimationFrame(animate);
  };

  // Allow manual click to skip
  const handleClick = () => { if (transitionProgress === 0) triggerExit(); };

  if (isEntered) return null;

  return (
    <section
      ref={sectionRef}
      className={`${styles.heroRoot} ${isExiting ? styles.exiting : ""}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div ref={gradientRef} className={styles.cursorGradient} />

      <div className={styles.heroContent}>
        {sequence.map((text, idx) => (
          <h1
            key={idx}
            className={`${styles.heroText} ${idx === currentIndex ? styles.active : ""} ${idx < currentIndex ? styles.previous : ""}`}
            aria-hidden={idx !== currentIndex}
          >
            {text.endsWith(".") ? (
              <>{text.slice(0, -1)}<span style={{ color: "#ff6a00" }}>.</span></>
            ) : text}
          </h1>
        ))}
      </div>

      {/* Progress counter — bottom center */}
      <div className={styles.progressCounter}>
        <span className={styles.progressNumber}>{count}</span>
        <span className={styles.progressPercent}>%</span>
      </div>
    </section>
  );
}
