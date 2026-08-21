"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./CinematicHero.module.css";
import confetti from "canvas-confetti";


const sequence = [
  "Your brand can do more.",
  "More attention.",
  "More impact.",
  "More connection.",
  "More growth.",
  "Websites that stand out.",
  "Web apps that move business.",
  "Mobile apps that connect.",
  "Branding people remember.",
  "We discuss. We design. We build.",
  "Everything to grow.",
];
  
export default function CinematicHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [textTransitionProgress, setTextTransitionProgress] = useState(0);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    
    const updateGradient = () => {
      // Fluid interpolation
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      
      if (gradientRef.current) {
        gradientRef.current.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(updateGradient);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    updateGradient();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    // Lock scrolling on both body and html to ensure no scrollbars appear
    if (!isEntered && !isExiting) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isEntered, isExiting]);

  useEffect(() => {
    if (currentIndex < sequence.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 3500); // 3.5s per line
      return () => clearTimeout(timer);
    } else {
      const ctaTimer = setTimeout(() => {
        setShowCTA(true);
      }, 1000); // Wait 1s after last text appears to show CTA
      return () => clearTimeout(ctaTimer);
    }
  }, [currentIndex]);

  // Fire a 1-second pulse for the text transition shader whenever the scene changes
  useEffect(() => {
    if (currentIndex === 0) return; // Don't fire on initial load
    
    const duration = 1000;
    const startTime = performance.now();
    let animationFrameId: number;
    
    const animateTextTransition = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      
      setTextTransitionProgress(progress);
      
      if (progress < 1.0) {
        animationFrameId = requestAnimationFrame(animateTextTransition);
      }
    };
    
    animationFrameId = requestAnimationFrame(animateTextTransition);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [currentIndex]);

  const handleEnter = (e: React.MouseEvent) => {
    if (transitionProgress > 0) return; // Prevent multiple clicks
    
    // Trigger massive festival splash across the entire screen!
    confetti({
      particleCount: 350,
      spread: 360,
      startVelocity: 55,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#ffffff', '#ff5e00', '#000000', '#ff8c00', '#ff3300'],
      zIndex: 99999
    });
    
    // Animate transitionProgress from 0 to 1 over 1.5 seconds
    const duration = 1500;
    const startTime = performance.now();
    let exitTriggered = false;
    
    const animateTransition = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      
      setTransitionProgress(progress);
      
      if (progress > 0.8 && !exitTriggered) {
        exitTriggered = true;
        setIsExiting(true); // Trigger CSS exit animation near the end of the webgl distortion
      }
      
      if (progress < 1.0) {
        requestAnimationFrame(animateTransition);
      } else {
        setTimeout(() => {
          setIsEntered(true);
        }, 800); // Wait for the remaining CSS exit animation
      }
    };
    
    requestAnimationFrame(animateTransition);
  };

  if (isEntered) return null;

  return (
    <section 
      className={`${styles.heroRoot} ${isExiting ? styles.exiting : ""}`}
      onClick={handleEnter}
      style={{ cursor: "pointer" }}
    >
      <div ref={gradientRef} className={styles.cursorGradient} />
      <div className={styles.heroContent}>
        {sequence.map((text, idx) => (
          <h1
            key={idx}
            className={`${styles.heroText} ${
              idx === currentIndex ? styles.active : ""
            } ${idx < currentIndex ? styles.previous : ""}`}
            aria-hidden={idx !== currentIndex}
          >
            {text.endsWith('.') ? (
              <>
                {text.slice(0, -1)}
                <span style={{ color: "#ff6a00" }}>.</span>
              </>
            ) : (
              text
            )}
          </h1>
        ))}
      </div>
        
      <div className={`${styles.ctaWrapper} ${showCTA ? styles.ctaProminent : ""}`}>
        <button 
          onClick={handleEnter} 
          onMouseEnter={() => setIsHoveringCTA(true)}
          onMouseLeave={() => setIsHoveringCTA(false)}
          className={styles.circularCta} 
          aria-label="Start Our Branding Story"
        >
          <div className={styles.circularTextWrapper}>
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                />
              </defs>
              <text className={styles.circularText}>
                <textPath href="#circlePath" startOffset="0%">
                  START OUR BRANDING STORY • START OUR BRANDING STORY • 
                </textPath>
              </text>
            </svg>
          </div>
          <span className={styles.centerArrow}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
