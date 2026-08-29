"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./CapabilitiesUniverse.module.css";

/* ═══════════════════════════════════════════════════════════════════════════
   ICON SYSTEM (STRICT CONSISTENCY)
   ─ Background Dots: Square formation at the edges.
   ─ Central Icons:   Constrained to 10x10. 
   ─ Visual Weight:   STRICTLY strokeWidth="1.2" for every line. 
                      No heavy filled shapes. Dots are r="0.8" max.
                      This guarantees the EXACT same "font weight" across all.
═══════════════════════════════════════════════════════════════════════════ */

// Identical ring of 8 dots forming a SQUARE shape around the center (from x/y=2 to 22)
const Dots = () => (
  <>
    <circle cx="2"   cy="2"    r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="12"  cy="2"    r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="22"  cy="2"    r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="22"  cy="12"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="22"  cy="22"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="12"  cy="22"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="2"   cy="22"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="2"   cy="12"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
  </>
);

const BrandingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <polygon points="7,16 8.5,8 12,11.5 15.5,8 17,16"
      fill="rgba(255,107,0,0.1)" stroke="currentColor" strokeWidth="1.2"
    />
    <line x1="7" y1="17" x2="17" y2="17" stroke="currentColor" strokeWidth="1.2" />
    {/* Small elegant dots */}
    <circle cx="8.5"  cy="8"    r="0.8" fill="#FF6B00" />
    <circle cx="12"   cy="11.5" r="0.8" fill="#FF6B00" />
    <circle cx="15.5" cy="8"    r="0.8" fill="#FF6B00" />
  </svg>
);

const StrategyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    {/* Bullseye centered at (14, 10) */}
    <circle cx="14" cy="10" r="3"   stroke="currentColor" strokeWidth="1.2" />
    <circle cx="14" cy="10" r="0.8" fill="#FF6B00" />
    
    {/* Dart entering from bottom-left — using lines instead of heavy filled polygons */}
    <line x1="7" y1="17" x2="11.5" y2="12.5" stroke="currentColor" strokeWidth="1.2" />
    {/* Dart fins (hollow/lines for consistent weight) */}
    <polyline points="7,15 9,17 7,17 Z" fill="rgba(255,107,0,0.1)" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <line x1="12" y1="12" x2="12" y2="8"  stroke="currentColor" strokeWidth="1.2" />
    <line x1="12" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.2" />
    <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="1.2" />
    <line x1="12" y1="12" x2="8"  y2="12" stroke="currentColor" strokeWidth="1.2" />
    
    {/* Hollow nodes to keep visual weight light and consistent */}
    <circle cx="12" cy="7.5"  r="1.2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="16.5" cy="12" r="1.2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="16.5" r="1.2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="7.5" cy="12"  r="1.2" stroke="currentColor" strokeWidth="1.2" />
    
    {/* Center node, small fill */}
    <circle cx="12" cy="12" r="1.2" fill="rgba(255,107,0,0.1)" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="0.5" fill="#FF6B00" />
  </svg>
);

const WebAppsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <polyline points="10,8 7,12 10,16"  stroke="currentColor" strokeWidth="1.2" />
    <polyline points="14,8 17,12 14,16" stroke="currentColor" strokeWidth="1.2" />
    <line x1="13" y1="7" x2="11" y2="17" stroke="#FF6B00" strokeWidth="1.2" />
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <rect x="9" y="7" width="6" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
    <line x1="11" y1="15" x2="13" y2="15" stroke="currentColor" strokeWidth="1.2" />
    <path d="M7.5,10 C6.5,11 6.5,13 7.5,14"   stroke="currentColor" strokeWidth="1.2" />
    <path d="M16.5,10 C17.5,11 17.5,13 16.5,14" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="15.5" cy="6.5" r="1.5" fill="#FF6B00" />
  </svg>
);

const UIUXIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    {/* Bezier strictly from 7 to 17 */}
    <line x1="7"  y1="17" x2="7"  y2="10" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
    <line x1="17" y1="7"  x2="17" y2="14" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
    <circle cx="7"  cy="10" r="0.8" fill="#FF6B00" />
    <circle cx="17" cy="14" r="0.8" fill="#FF6B00" />
    
    <path d="M7,17 C7,10 17,14 17,7" stroke="currentColor" strokeWidth="1.2" fill="none" />
    
    <circle cx="7"  cy="17" r="1.2" fill="rgba(255,107,0,0.1)" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="17" cy="7"  r="1.2" fill="rgba(255,107,0,0.1)" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const WebsitesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <rect x="7" y="8" width="10" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
    <line x1="7" y1="11.5" x2="17" y2="11.5" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="8.5" cy="9.8" r="0.6" fill="#FF6B00" />
    <circle cx="10.2" cy="9.8" r="0.6" fill="rgba(255,107,0,0.5)" />
    <circle cx="11.9" cy="9.8" r="0.6" fill="rgba(255,107,0,0.2)" />
    <line x1="9"  y1="13.5" x2="15" y2="13.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const EcommerceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <path d="M10.5,10 C10.5,8 13.5,8 13.5,10" stroke="currentColor" strokeWidth="1.2" />
    <path d="M9,10 L8,17 L16,17 L15,10 Z" fill="rgba(255,107,0,0.1)" stroke="currentColor" strokeWidth="1.2" />
    <polyline points="10,14 11.5,15.5 14,12.5" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="14" r="1.2" fill="rgba(255,107,0,0.1)" stroke="#FF6B00" strokeWidth="0.8" />
  </svg>
);

const services = [
  { id: "branding",  name: "Branding",     desc: "Positioning your brand to be exactly what people need it to be.",          Icon: BrandingIcon  },
  { id: "strategy",  name: "Strategy",     desc: "Addressing your core brand strategy to connect directly with people.",          Icon: StrategyIcon  },
  { id: "ai",        name: "AI Solutions", desc: "Supporting your brand with intelligent AI tools and automated workflows.",            Icon: AIIcon        },
  { id: "webapps",   name: "Web Apps",     desc: "Building powerful digital tools that streamline your daily operations.",   Icon: WebAppsIcon   },
  { id: "mobile",    name: "Mobile Apps",  desc: "Putting your business directly in their hands with engaging experiences.",       Icon: MobileIcon    },
  { id: "uiux",      name: "UI / UX",      desc: "Designing interfaces that perform, delight users, and drive conversions.",               Icon: UIUXIcon      },
  { id: "websites",  name: "Websites",     desc: "Creating digital experiences that stand out and capture your audience.", Icon: WebsitesIcon  },
  { id: "ecommerce", name: "E-Commerce",   desc: "Driving your brand's sales directly to the market with built-to-convert stores.",            Icon: EcommerceIcon },
];

export default function CapabilitiesUniverse() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      {/* Subtle Background Icons */}
      <div className={styles.bgIcons} aria-hidden="true">
        <svg className={`${styles.bgIcon} ${styles.bgIcon1}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>

        <svg className={`${styles.bgIcon} ${styles.bgIcon2}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
        
        <svg className={`${styles.bgIcon} ${styles.bgIcon3}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 22h20L12 2z" />
          <path d="M12 22V2" />
          <path d="M2 22l10-10 10 10" />
        </svg>
        
        <svg className={`${styles.bgIcon} ${styles.bgIcon4}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>

      <div className={styles.container}>

        <div className={styles.header}>
          <div>
            <span className={`eyebrow ${styles.eyebrowWrap}`}>
              <span className="spark spark--inline" />
              Our Services
            </span>
            <h2 className={styles.headline}>
              Everything your brand needs<span className={styles.dot}>.</span>
            </h2>
          </div>
          <Link href="/services" className={styles.cta}>
            Explore What We Do
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <article
              key={s.id}
              className={`${styles.card} ${hovered === s.id ? styles.cardActive : ""}`}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top row with Icon and Arrow */}
              <div className={styles.cardTop}>
                <span className={styles.icon}><s.Icon /></span>
                <span className={styles.cardArrow} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
              {/* Content below */}
              <div>
                <h3 className={styles.cardName}>{s.name}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
