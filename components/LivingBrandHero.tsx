"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./LivingBrandHero.module.css";
import MagneticCore from "./MagneticCore";

export default function LivingBrandHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  
  const [wordIndex, setWordIndex] = useState(0);
  const rotatingWords = [
    "people remember.",
    "that inspire.",
    "that scale.",
    "that connect.",
    "that convert.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Update a mutable ref to avoid React state re-renders during scroll for the WebGL canvas
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    scrollRef.current = latest;
  });

  // Stage 1: Headline slightly moves upward based on scroll
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className={styles.heroSection} ref={containerRef}>
      <div className={styles.container}>
        {/* Left Column: Typography & CTA */}
        <motion.div 
          className={styles.leftContent}
          style={{ y: headlineY, opacity }}
        >
          <span className={styles.eyebrow}>Creative Technology + Branding</span>
          
          <h1 className={styles.headline}>
            We build brands<br />
            <span style={{ display: "inline-block", position: "relative", width: "100%", height: "1.1em" }}>
              <AnimatePresence>
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  style={{ position: "absolute", left: 0 }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          
          <p className={styles.description}>
            Branding, websites, web apps and mobile experiences built to grow your business.
          </p>
          
          <div className={styles.services}>
            Branding &nbsp;&middot;&nbsp; Websites &nbsp;&middot;&nbsp; Web Apps &nbsp;&middot;&nbsp; Mobile Apps
          </div>
          
          <div className={styles.ctaGroup}>
            <Link href="/contact" className={styles.primaryCta}>
              Let's Build
            </Link>
            
            <Link href="/portfolio" className={styles.secondaryCta}>
              View Our Work
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Magnetic 3D Visual */}
        <div className={styles.canvasWrapper}>
          <MagneticCore scrollProgressRef={scrollRef} />
        </div>
      </div>
    </section>
  );
}
