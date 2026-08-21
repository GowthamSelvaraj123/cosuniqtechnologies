"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import MenuOrb from "./MenuOrb";
import FullscreenMenu from "./FullscreenMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show glass background after scrolling down a bit
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Lock body scroll when menu is open
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
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={`${styles.headerRoot} ${isScrolled || isOpen ? styles.scrolled : ""}`}>
        <Link href="/" className={styles.brand} aria-label="Cosuniq home">
          <img src="/assets/logo.png" alt="Cosuniq" />
          <div className={styles.brandText}>
            <strong>COSUNIQ</strong>
            <span>Technologies</span>
          </div>
        </Link>
        
        <nav className={styles.desktopNav}>
          <Link href="/services" className={styles.navItem}>Services</Link>
          <Link href="/portfolio" className={styles.navItem}>Work</Link>
          <Link href="/about" className={styles.navItem}>About</Link>
          <Link href="/contact" className={styles.navItem}>Contact</Link>
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
      </header>
      
      <FullscreenMenu isOpen={isOpen} onClose={closeMenu} />
    </>
  );
}
