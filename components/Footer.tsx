"use client";

import Link from "next/link";
import { FiLinkedin, FiYoutube, FiInstagram } from "react-icons/fi";
import { SiX } from "react-icons/si";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        
        {/* TOP SECTION */}
        <div className={styles.topSection}>
          <div className={styles.slogan}>
            Inspired by the Cosmos<span className={styles.orangeDot}>.</span><br />Defined by Uniqueness<span className={styles.orangeDot}>.</span>
          </div>
          
          <div className={styles.linkColumns}>
            <div className={styles.linkCol}>
              <span style={{ fontSize: '0.85rem', color: '#ff6a00', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Studio</span>
              <Link href="/about">About</Link>
              <Link href="/portfolio">Work</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.linkCol}>
              <span style={{ fontSize: '0.85rem', color: '#ff6a00', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Services</span>
              <Link href="/services">What we do</Link>
              <Link href="/services#software">Software & Apps</Link>
              <Link href="/services#branding">Branding & Design</Link>
            </div>
            <div className={styles.linkCol}>
              <span style={{ fontSize: '0.85rem', color: '#ff6a00', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</span>
              <a href="mailto:founder@cosuniq.in">founder@cosuniq.in</a>
              <a href="tel:+917358696546">+91 73586 96546</a>
              
              <div className={styles.socialIcons} style={{ marginTop: '0.5rem' }}>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><FiLinkedin /></a>
                <a href="#" className={styles.socialIcon} aria-label="YouTube"><FiYoutube /></a>
                <a href="#" className={styles.socialIcon} aria-label="X"><SiX style={{ fontSize: '0.85rem' }} /></a>
                <a href="#" className={styles.socialIcon} aria-label="Instagram"><FiInstagram /></a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className={styles.bottomSection}>
          <span className={styles.legalLink} style={{ marginRight: 'auto', pointerEvents: 'none' }}>© {new Date().getFullYear()} Cosuniq Technologies. All rights reserved.</span>
          <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
        </div>

      </div>

      {/* HUGE BOTTOM LOGO */}
      <div className={styles.hugeLogoContainer}>
        <div className={styles.hugeLogoMask} />
      </div>
    </footer>
  );
}
