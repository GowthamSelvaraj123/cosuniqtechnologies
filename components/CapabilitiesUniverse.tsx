"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./CapabilitiesUniverse.module.css";

/* ═══════════════════════════════════════════════════════════════════════════
   ICON SYSTEM (STRICT CONSISTENCY)
   ─ Background Dots: Fixed at exactly the same absolute edges for every card.
   ─ Central Icons:   Constrained to a strict 10x10 bounding box in the center
                      (x: 7-17, y: 7-17). This guarantees EQUAL space between
                      the icon and the dots, making every card feel identical.
   ─ Strokes:         Orange is 1.25px. Dots are 0.85px.
═══════════════════════════════════════════════════════════════════════════ */

// Identical ring of 8 dots (radius ~10 from center) to prevent stroke clipping at the edges
const Dots = () => (
  <>
    <circle cx="5"   cy="5"    r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="12"  cy="2"    r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="19"  cy="5"    r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="22"  cy="12"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="19"  cy="19"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="12"  cy="22"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="5"   cy="19"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
    <circle cx="2"   cy="12"   r="1" stroke="#ccc" strokeWidth="0.85" fill="none" />
  </>
);

const BrandingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    {/* Crown bounded tightly inside (7,7) to (17,17) */}
    <polygon points="7,16 8.5,8 12,11.5 15.5,8 17,16"
      fill="rgba(255,107,0,0.1)" stroke="currentColor" strokeWidth="1.25"
    />
    <line x1="7" y1="17" x2="17" y2="17" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="8.5"  cy="8"    r="1" fill="currentColor" />
    <circle cx="12"   cy="11.5" r="1" fill="currentColor" />
    <circle cx="15.5" cy="8"    r="1" fill="currentColor" />
  </svg>
);

const StrategyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    {/* Dart entering from bottom-left to top-right bullseye */}
    <line x1="7" y1="17" x2="11.5" y2="12.5" stroke="currentColor" strokeWidth="1.25" />
    <polygon points="7,17 9,17 7,15" fill="currentColor" />
    {/* Bullseye centered at (14, 10) */}
    <circle cx="14" cy="10" r="3"   stroke="currentColor" strokeWidth="1.25" />
    <circle cx="14" cy="10" r="1"   fill="currentColor" />
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    {/* Neural nodes filling a strict cross shape (7 to 17) */}
    <line x1="12" y1="12" x2="12" y2="8"  stroke="currentColor" strokeWidth="1.15" />
    <line x1="12" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.15" />
    <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="1.15" />
    <line x1="12" y1="12" x2="8"  y2="12" stroke="currentColor" strokeWidth="1.15" />
    <circle cx="12" cy="7.5"  r="1.2" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="16.5" cy="12" r="1.2" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="12" cy="16.5" r="1.2" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="7.5" cy="12"  r="1.2" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="12" cy="12"   r="1.8" fill="currentColor" />
  </svg>
);

const WebAppsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    {/* Code brackets < / > fitting strictly inside 7 to 17 */}
    <polyline points="10,8 7,12 10,16"  stroke="currentColor" strokeWidth="1.25" />
    <polyline points="14,8 17,12 14,16" stroke="currentColor" strokeWidth="1.25" />
    <line x1="13" y1="7" x2="11" y2="17" stroke="currentColor" strokeWidth="1.25" />
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    {/* Phone is 6x10 at center */}
    <rect x="9" y="7" width="6" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.25" />
    <line x1="11" y1="15" x2="13" y2="15" stroke="currentColor" strokeWidth="1.1" />
    {/* Signal arcs touching x=6 and x=18 boundaries */}
    <path d="M7.5,10 C6.5,11 6.5,13 7.5,14"   stroke="currentColor" strokeWidth="1.2" />
    <path d="M16.5,10 C17.5,11 17.5,13 16.5,14" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const UIUXIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    {/* Bezier strictly from 7 to 17 */}
    <line x1="7"  y1="17" x2="7"  y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1.2" />
    <line x1="17" y1="7"  x2="17" y2="14" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1.2" />
    <circle cx="7"  cy="10" r="1.2" stroke="currentColor" strokeWidth="1.15" />
    <circle cx="17" cy="14" r="1.2" stroke="currentColor" strokeWidth="1.15" />
    <path d="M7,17 C7,10 17,14 17,7" stroke="currentColor" strokeWidth="1.25" fill="none" />
    <circle cx="7"  cy="17" r="1.5" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="17" cy="7"  r="1.5" fill="currentColor" />
  </svg>
);

const WebsitesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    {/* Browser constrained to 10x8 box */}
    <rect x="7" y="8" width="10" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.25" />
    <line x1="7" y1="11.5" x2="17" y2="11.5" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="8.5" cy="9.8" r="0.7" fill="currentColor" />
    <circle cx="10.2" cy="9.8" r="0.7" fill="rgba(255,107,0,0.5)" />
    <circle cx="11.9" cy="9.8" r="0.7" fill="rgba(255,107,0,0.2)" />
    <line x1="9"  y1="13.5" x2="15" y2="13.5" stroke="currentColor" strokeWidth="1.1" />
  </svg>
);

const EcommerceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    {/* Bag constrained to x=8-16, y=7-17 */}
    <path d="M10.5,10 C10.5,8 13.5,8 13.5,10" stroke="currentColor" strokeWidth="1.25" />
    <path d="M9,10 L8,17 L16,17 L15,10 Z" fill="rgba(255,107,0,0.1)" stroke="currentColor" strokeWidth="1.25" />
    <polyline points="10,14 11.5,15.5 14,12.5" stroke="currentColor" strokeWidth="1.25" />
  </svg>
);

const services = [
  { id: "branding",  name: "Branding",     desc: "Make your brand memorable.",          Icon: BrandingIcon  },
  { id: "strategy",  name: "Strategy",     desc: "Clear pathways for growth.",          Icon: StrategyIcon  },
  { id: "ai",        name: "AI Solutions", desc: "Build with intelligence.",            Icon: AIIcon        },
  { id: "webapps",   name: "Web Apps",     desc: "Powerful tools for your business.",   Icon: WebAppsIcon   },
  { id: "mobile",    name: "Mobile Apps",  desc: "Your business in their hands.",       Icon: MobileIcon    },
  { id: "uiux",      name: "UI / UX",      desc: "Design that performs.",               Icon: UIUXIcon      },
  { id: "websites",  name: "Websites",     desc: "Digital experiences that stand out.", Icon: WebsitesIcon  },
  { id: "ecommerce", name: "E-Commerce",   desc: "Stores built to convert.",            Icon: EcommerceIcon },
];

export default function CapabilitiesUniverse() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <span className="spark spark--inline" />
            Our capabilities
          </span>
          <h2 className={styles.headline}>
            Everything your brand needs<span className={styles.dot}>.</span>
          </h2>
          <p className={styles.sub}>
            From strategy to shipping — one studio, every discipline.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <article
              key={s.id}
              className={`${styles.card} ${hovered === s.id ? styles.cardActive : ""}`}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className={styles.icon}><s.Icon /></span>
              <div>
                <h3 className={styles.cardName}>{s.name}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
              </div>
              <span className={styles.cardArrow} aria-hidden="true">→</span>
            </article>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="/services" className={styles.cta}>
            Explore What We Do
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
