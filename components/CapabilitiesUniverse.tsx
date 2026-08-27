"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./CapabilitiesUniverse.module.css";

// ── Custom illustrated icons ──────────────────────────────────────────────────
// Pattern: scattered black outlined circles (the market) + 
//          one central orange shape (the standout concept)

const BrandingIcon = () => (
  // Concept: scattered circles (everyone else) + orange star (YOUR brand stands out)
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round">
    <circle cx="3.5"  cy="4.5"  r="1.2" stroke="#111" strokeWidth="0.85" />
    <circle cx="20.5" cy="4"    r="0.9" stroke="#111" strokeWidth="0.85" />
    <circle cx="2"    cy="13"   r="1.4" stroke="#111" strokeWidth="0.85" />
    <circle cx="22"   cy="14.5" r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="6"    cy="21"   r="1.1" stroke="#111" strokeWidth="0.85" />
    <circle cx="18.5" cy="21.5" r="1.3" stroke="#111" strokeWidth="0.85" />
    <circle cx="7.5"  cy="7"    r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="17"   cy="7"    r="0.9" stroke="#111" strokeWidth="0.85" />
    <circle cx="4.5"  cy="18"   r="0.9" stroke="#111" strokeWidth="0.85" />
    <circle cx="19.5" cy="17.5" r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="11"   cy="3.5"  r="0.8" stroke="#111" strokeWidth="0.85" />
    <circle cx="15"   cy="20.5" r="0.9" stroke="#111" strokeWidth="0.85" />
    <polygon
      points="12,7.5 13.06,10.54 15.80,10.76 13.71,12.56 14.35,15.24 12,13.8 9.65,15.24 10.29,12.56 8.20,10.76 10.94,10.54"
      fill="currentColor" stroke="none"
    />
  </svg>
);

const StrategyIcon = () => (
  // Concept: scattered circles (distractions) + bullseye (laser-focused strategy)
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round">
    <circle cx="3"    cy="4"    r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="21"   cy="5"    r="0.9" stroke="#111" strokeWidth="0.85" />
    <circle cx="2"    cy="14"   r="1.3" stroke="#111" strokeWidth="0.85" />
    <circle cx="22"   cy="13"   r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="5"    cy="21"   r="1.1" stroke="#111" strokeWidth="0.85" />
    <circle cx="19"   cy="21"   r="1.2" stroke="#111" strokeWidth="0.85" />
    <circle cx="7"    cy="7"    r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="18"   cy="7"    r="0.9" stroke="#111" strokeWidth="0.85" />
    <circle cx="20"   cy="18"   r="0.8" stroke="#111" strokeWidth="0.85" />
    {/* Bullseye — outer, mid, filled center */}
    <circle cx="12" cy="12" r="4.8" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const AIIcon = () => (
  // Concept: scattered circles (data noise) + neural nodes connected to a core (intelligence)
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round">
    <circle cx="3.5"  cy="3.5"  r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="21"   cy="4"    r="0.9" stroke="#111" strokeWidth="0.85" />
    <circle cx="2"    cy="15"   r="1.2" stroke="#111" strokeWidth="0.85" />
    <circle cx="22"   cy="15"   r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="5"    cy="21.5" r="1.1" stroke="#111" strokeWidth="0.85" />
    <circle cx="19"   cy="21"   r="1.2" stroke="#111" strokeWidth="0.85" />
    <circle cx="19"   cy="7.5"  r="0.8" stroke="#111" strokeWidth="0.85" />
    {/* Neural network — filled core + connected outer nodes */}
    <circle cx="12" cy="12"   r="1.6" fill="currentColor" stroke="none" />
    <circle cx="12" cy="7.5"  r="1.0" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="16" cy="14.5" r="1.0" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="8"  cy="14.5" r="1.0" stroke="currentColor" strokeWidth="1.1" />
    <line x1="12" y1="8.5"  x2="12" y2="10.4" stroke="currentColor" strokeWidth="1" />
    <line x1="15.1" y1="13.8" x2="13.4" y2="12.8" stroke="currentColor" strokeWidth="1" />
    <line x1="8.9"  y1="13.8" x2="10.6" y2="12.8" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const WebAppsIcon = () => (
  // Concept: scattered circles (static content) + code brackets (powerful logic)
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="3.5"  cy="4"    r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="21"   cy="3.5"  r="0.9" stroke="#111" strokeWidth="0.85" />
    <circle cx="2"    cy="13.5" r="1.3" stroke="#111" strokeWidth="0.85" />
    <circle cx="22"   cy="14"   r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="5"    cy="20.5" r="1.1" stroke="#111" strokeWidth="0.85" />
    <circle cx="19"   cy="20.5" r="1.2" stroke="#111" strokeWidth="0.85" />
    <circle cx="7"    cy="7.5"  r="0.9" stroke="#111" strokeWidth="0.85" />
    <circle cx="17.5" cy="7.5"  r="0.9" stroke="#111" strokeWidth="0.85" />
    {/* Code brackets + slash */}
    <polyline points="9.5,9 7,12 9.5,15"  stroke="currentColor" strokeWidth="1.5" />
    <polyline points="14.5,9 17,12 14.5,15" stroke="currentColor" strokeWidth="1.5" />
    <line x1="13.2" y1="8.5" x2="10.8" y2="15.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const MobileIcon = () => (
  // Concept: scattered circles (desktop web) + phone shape (mobile-first)
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="3"  cy="4"    r="1.1" stroke="#111" strokeWidth="0.85" />
    <circle cx="21" cy="5"    r="0.9" stroke="#111" strokeWidth="0.85" />
    <circle cx="2"  cy="14"   r="1.3" stroke="#111" strokeWidth="0.85" />
    <circle cx="22" cy="14"   r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="4"  cy="21"   r="1.1" stroke="#111" strokeWidth="0.85" />
    <circle cx="20" cy="21"   r="1.2" stroke="#111" strokeWidth="0.85" />
    <circle cx="18" cy="8"    r="0.9" stroke="#111" strokeWidth="0.85" />
    {/* Phone body */}
    <rect x="9" y="5.5" width="6" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <line x1="11" y1="16.5" x2="13" y2="16.5" stroke="currentColor" strokeWidth="1.3" />
    <line x1="11.5" y1="7.5" x2="12.5" y2="7.5" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const UIUXIcon = () => (
  // Concept: scattered circles (random elements) + stacked layers (intentional design)
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="3.5"  cy="3.5"  r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="21"   cy="4"    r="0.9" stroke="#111" strokeWidth="0.85" />
    <circle cx="2"    cy="13"   r="1.2" stroke="#111" strokeWidth="0.85" />
    <circle cx="22"   cy="14"   r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="5"    cy="21"   r="1.1" stroke="#111" strokeWidth="0.85" />
    <circle cx="19"   cy="21.5" r="1.2" stroke="#111" strokeWidth="0.85" />
    <circle cx="18.5" cy="7.5"  r="0.9" stroke="#111" strokeWidth="0.85" />
    {/* Three stacked diamond layers */}
    <polygon points="12,7.5 16.5,10 12,12.5 7.5,10"   stroke="currentColor" strokeWidth="1.2" />
    <polygon points="12,10  16.5,12.5 12,15 7.5,12.5" stroke="currentColor" strokeWidth="1.2" />
    <polygon points="12,12.5 16.5,15 12,17.5 7.5,15"  stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const WebsitesIcon = () => (
  // Concept: scattered circles (local presence) + globe (worldwide digital reach)
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="3"    cy="4"    r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="21"   cy="4.5"  r="0.9" stroke="#111" strokeWidth="0.85" />
    <circle cx="2"    cy="14"   r="1.3" stroke="#111" strokeWidth="0.85" />
    <circle cx="22"   cy="13.5" r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="4.5"  cy="21"   r="1.1" stroke="#111" strokeWidth="0.85" />
    <circle cx="19.5" cy="21"   r="1.2" stroke="#111" strokeWidth="0.85" />
    <circle cx="18"   cy="7.5"  r="0.8" stroke="#111" strokeWidth="0.85" />
    {/* Globe */}
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.3" />
    <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1" />
    <path d="M12,7 C10,9 10,15 12,17 C14,15 14,9 12,7" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const EcommerceIcon = () => (
  // Concept: scattered circles (browsers/visitors) + shopping bag (the conversion)
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="3.5"  cy="4.5"  r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="21"   cy="4"    r="0.9" stroke="#111" strokeWidth="0.85" />
    <circle cx="2"    cy="14"   r="1.3" stroke="#111" strokeWidth="0.85" />
    <circle cx="22"   cy="15"   r="1.0" stroke="#111" strokeWidth="0.85" />
    <circle cx="5"    cy="21.5" r="1.1" stroke="#111" strokeWidth="0.85" />
    <circle cx="19"   cy="21"   r="1.2" stroke="#111" strokeWidth="0.85" />
    <circle cx="7"    cy="6.5"  r="0.9" stroke="#111" strokeWidth="0.85" />
    <circle cx="19"   cy="8"    r="0.8" stroke="#111" strokeWidth="0.85" />
    {/* Shopping bag */}
    <path d="M8.5,10 L7.5,18 L16.5,18 L15.5,10 Z" stroke="currentColor" strokeWidth="1.3" />
    <path d="M10,10 C10,7.5 14,7.5 14,10" stroke="currentColor" strokeWidth="1.3" />
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
