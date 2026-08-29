"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./AboutCosuniq.module.css";

const Dots = () => (
  <>
    <circle cx="2"  cy="2"  r="1" stroke="#ddd" strokeWidth="0.85" fill="none" />
    <circle cx="12" cy="2"  r="1" stroke="#ddd" strokeWidth="0.85" fill="none" />
    <circle cx="22" cy="2"  r="1" stroke="#ddd" strokeWidth="0.85" fill="none" />
    <circle cx="22" cy="12" r="1" stroke="#ddd" strokeWidth="0.85" fill="none" />
    <circle cx="22" cy="22" r="1" stroke="#ddd" strokeWidth="0.85" fill="none" />
    <circle cx="12" cy="22" r="1" stroke="#ddd" strokeWidth="0.85" fill="none" />
    <circle cx="2"  cy="22" r="1" stroke="#ddd" strokeWidth="0.85" fill="none" />
    <circle cx="2"  cy="12" r="1" stroke="#ddd" strokeWidth="0.85" fill="none" />
  </>
);

const VisionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <ellipse cx="12" cy="12" rx="7" ry="4.5" stroke="#FF6B00" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="2" stroke="#FF6B00" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="0.7" fill="#FF6B00" />
  </svg>
);

const MissionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <circle cx="12" cy="12" r="5" stroke="#FF6B00" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="2" stroke="#FF6B00" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="0.8" fill="#FF6B00" />
    <line x1="12" y1="7"  x2="12" y2="5"  stroke="#FF6B00" strokeWidth="1.2" />
    <line x1="12" y1="17" x2="12" y2="19" stroke="#FF6B00" strokeWidth="1.2" />
    <line x1="7"  y1="12" x2="5"  y2="12" stroke="#FF6B00" strokeWidth="1.2" />
    <line x1="17" y1="12" x2="19" y2="12" stroke="#FF6B00" strokeWidth="1.2" />
  </svg>
);

const ThinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <Dots />
    <line x1="9" y1="8" x2="9" y2="13" stroke="#FF6B00" strokeWidth="1.2" />
    <line x1="7" y1="8" x2="11" y2="8" stroke="#FF6B00" strokeWidth="1.2" />
    <path d="M13,8 L13,13 M13,10.5 L15,8 M13,10.5 L15,13" stroke="#FF6B00" strokeWidth="1.2" />
    <rect x="17" y="8" width="2" height="5" rx="0.5" stroke="#FF6B00" strokeWidth="1.2" />
    <line x1="7" y1="15.5" x2="19" y2="15.5" stroke="#eee" strokeWidth="1.2" />
    <circle cx="9" cy="8" r="0.6" fill="#FF6B00" />
  </svg>
);

const cards = [
  {
    id: "vision",
    tag: "OUR VISION",
    name: "See what comes next.",
    desc: "We envision a world where every ambitious business — regardless of size — has access to world-class creative and technology expertise. To become the most trusted creative technology partner for forward-thinking brands, helping them not just keep up with change, but lead it. We see beyond trends and build for what endures.",
    Icon: VisionIcon,
  },
  {
    id: "mission",
    tag: "OUR MISSION",
    name: "Build what matters.",
    desc: "Our mission is to transform bold ideas into purposeful brands and high-performing digital experiences that create lasting impact. We bring strategy, design, and technology together under one roof — working closely with our clients to deliver solutions that are not just beautiful, but measurably effective. Every project we take on is a commitment to excellence.",
    Icon: MissionIcon,
  },
];

export default function AboutCosuniq() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className={styles.section} id="about">

      <div className={styles.bgIcons} aria-hidden="true">
        <svg className={`${styles.bgIcon} ${styles.bgIcon1}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
          <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10" />
        </svg>
        <svg className={`${styles.bgIcon} ${styles.bgIcon2}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
          <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" />
        </svg>
        <svg className={`${styles.bgIcon} ${styles.bgIcon3}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
        <svg className={`${styles.bgIcon} ${styles.bgIcon4}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
        </svg>
      </div>

      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrowWrap}>
              <span className={styles.spark}>✦</span>
              About Cosuniq
            </span>
            <h2 className={styles.headline}>
              New by name. Experienced by craft<span className={styles.dot}>.</span>
            </h2>
          </div>
          <Link href="/about" className={styles.cta}>
            Discover COSUNIQ
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* Intro paragraph */}
        <p className={styles.introText}>
          COSUNIQ is a creative technology agency bringing together strategy, design, and technology to help ambitious businesses build stronger brands and better digital experiences. We combine fresh thinking with years of hands-on experience to create purposeful, scalable solutions that don&apos;t just look good, but move businesses forward.
        </p>

        {/* 3-card vertical column */}
        <div className={styles.grid}>
          {cards.map((card) => (
            <article
              key={card.id}
              className={`${styles.card} ${hovered === card.id ? styles.cardActive : ""}`}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top row: icon + tag + title + arrow */}
              <div className={styles.cardTop}>
                <span className={styles.icon}><card.Icon /></span>
                <div className={styles.cardHeader}>
                  <span className={styles.cardTag}>{card.tag}</span>
                  <h3 className={styles.cardName}>{card.name}</h3>
                </div>
                <span className={styles.cardArrow} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
              {/* Description full width below */}
              <p className={styles.cardDesc}>{card.desc}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
