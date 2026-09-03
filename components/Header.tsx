"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./Header.module.css";
import MenuOrb from "./MenuOrb";
import FullscreenMenu from "./FullscreenMenu";
import MagneticWrapper from "./MagneticWrapper";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isAcademy = pathname === '/academy';
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll progress: 0 = top, 1 = scrolled (after 80px)
  const scrollProgress = useTransform(scrollY, [0, 80], [0, 1], { clamp: true });
  const spring = useSpring(scrollProgress, { stiffness: 90, damping: 22, mass: 0.6 });

  // Animate from pill (0) to full-width (1) — all values spring-interpolated
  const top          = useTransform(spring, [0, 1], [isMobile ? 16 : 24, 0]);
  const left         = useTransform(spring, [0, 1], [isMobile ? "2.5vw" : "5vw", "0vw"]);
  const width        = useTransform(spring, [0, 1], [isMobile ? "95vw" : "90vw", "100vw"]);
  const borderRadius = useTransform(spring, [0, 1], [100, 0]);
  const paddingTop   = useTransform(spring, [0, 1], [isMobile ? 10 : 12, isMobile ? 12 : 14]);
  const paddingBot   = useTransform(spring, [0, 1], [isMobile ? 10 : 12, isMobile ? 12 : 14]);
  const paddingLeft  = useTransform(spring, [0, 1], [isMobile ? 16 : 24, isMobile ? 24 : 48]);
  const paddingRight = useTransform(spring, [0, 1], [isMobile ? 12 : 16, isMobile ? 24 : 48]);
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
        className={`${styles.headerRoot} ${isAcademy ? styles.academyTheme : ''}`}
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
          <img src={isAcademy ? "/assets/cosuniq-academy.png" : "/assets/cosuniq-technologies.png"} alt={isAcademy ? "Cosuniq Academy" : "Cosuniq"} />
        </Link>

        <nav className={styles.desktopNav}>
          <MagneticWrapper><Link href="/"          className={styles.navItem}>Home</Link></MagneticWrapper>
          <MagneticWrapper><Link href="/services"  className={styles.navItem}>Services</Link></MagneticWrapper>
          <MagneticWrapper><Link href="/portfolio" className={styles.navItem}>Case Study</Link></MagneticWrapper>
          <MagneticWrapper><Link href="/about"     className={styles.navItem}>About</Link></MagneticWrapper>
          <MagneticWrapper><Link href="/contact"   className={styles.navItem}>Contact</Link></MagneticWrapper>
          <MagneticWrapper><Link href="/academy"   className={styles.navItem}>Academy</Link></MagneticWrapper>
        </nav>

        <div className={styles.headerRight}>
          <MagneticWrapper>
            <Link href="/contact" className={styles.roundCallIcon} aria-label="Book a call">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </MagneticWrapper>
          <div className={styles.menuToggle}>
            <MenuOrb isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>
      </motion.header>

      <FullscreenMenu isOpen={isOpen} onClose={closeMenu} />
    </>
  );
}
