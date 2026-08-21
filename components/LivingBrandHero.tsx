"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import styles from "./LivingBrandHero.module.css";
import MagneticCore from "./MagneticCore";

export default function LivingBrandHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);

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
            people remember.
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
              <span className={styles.ctaArrow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
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
