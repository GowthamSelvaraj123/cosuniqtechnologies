"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./Header.module.css";
import MenuOrb from "./MenuOrb";
import FullscreenMenu from "./FullscreenMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scroll progress: 0 = top, 1 = scrolled (after 80px)
  const scrollProgress = useTransform(scrollY, [0, 80], [0, 1], { clamp: true });
  const spring = useSpring(scrollProgress, { stiffness: 90, damping: 22, mass: 0.6 });

  // Animate from pill (0) to full-width (1) — all values spring-interpolated
  // Pill: left: 5vw (centering 90vw pill), width: 90vw, radius: 100px, top: 24px
  // Full: left: 0,   width: 100%,          radius: 0,     top: 0
  const top          = useTransform(spring, [0, 1], [24, 0]);
  const left         = useTransform(spring, [0, 1], ["5vw", "0vw"]);
  const width        = useTransform(spring, [0, 1], ["90vw", "100vw"]);
  const borderRadius = useTransform(spring, [0, 1], [100, 0]);
  const paddingTop   = useTransform(spring, [0, 1], [12, 14]);
  const paddingBot   = useTransform(spring, [0, 1], [12, 14]);
  const paddingLeft  = useTransform(spring, [0, 1], [24, 48]);
  const paddingRight = useTransform(spring, [0, 1], [16, 48]);
  const bgOpacity    = useTransform(spring, [0, 1], [1.0, 1.0]);
  const boxShadow    = useTransform(
    spring,
    [0, 1],
    ["0 10px 40px rgba(0,0,0,0.06)", "0 2px 20px rgba(0,0,0,0.07)"]
  );
  const borderOpacity  = useTransform(spring, [0, 1], [0.18, 0.09]);
  // Derived string values — must be top-level, NOT inside style={{}}
  const backgroundColor = useTransform(bgOpacity,     (v) => `rgba(255,255,255,${v})`);
  const borderStyle     = useTransform(borderOpacity, (v) => `1px solid rgba(0,0,0,${v})`);

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu  = () => setIsOpen(false);

  return (
    <>
      <motion.header
        className={styles.headerRoot}
        style={{
          top,
          left,
          width,
          borderRadius,
          paddingTop,
          paddingBottom: paddingBot,
          paddingLeft,
          paddingRight,
          boxShadow,
          backgroundColor,
          border: borderStyle,
        }}
      >
        <Link href="/" className={styles.brand} aria-label="Cosuniq home">
          <img src="/assets/logo.png" alt="Cosuniq" />
          <div className={styles.brandText}>
            <strong>COSUNIQ</strong>
            <span>Technologies</span>
          </div>
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="/"          className={styles.navItem}>Home</Link>
          <Link href="/services"  className={styles.navItem}>Services</Link>
          <Link href="/portfolio" className={styles.navItem}>Case Study</Link>
          <Link href="/about"     className={styles.navItem}>About</Link>
          <Link href="/contact"   className={styles.navItem}>Contact</Link>
        </nav>

        <div className={styles.headerRight}>
          <Link href="/contact" className={styles.roundCallIcon} aria-label="Book a call">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div className={styles.menuToggle}>
            <MenuOrb isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>
      </motion.header>

      <FullscreenMenu isOpen={isOpen} onClose={closeMenu} />
    </>
  );
}
