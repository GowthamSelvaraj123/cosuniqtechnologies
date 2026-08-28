"use client";

"use client";

import React from "react";
import Link from "next/link";
import styles from "./OurDifference.module.css";

// Reusing the exact Dots component from CapabilitiesUniverse for the icon box
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

const NumberIcon = ({ num }: { num: string }) => (
  <svg viewBox="0 0 24 24" fill="none">
    <Dots />
    <text x="12" y="16" fontSize="11" fontWeight="800" fill="#111111" textAnchor="middle" fontFamily="var(--font-plus-jakarta)">{num}</text>
  </svg>
);

export default function OurDifference() {
  const lettersWhy = ["W", "h", "y"];
  const lettersCosuniq = ["C", "o", "s", "u", "n", "i", "q", "?"];

  return (
    <section className={styles.section} id="difference">
      <div className="container">

        <div className={styles.threeColLayout}>
          
          {/* Column 1: Vertical Scattered Text */}
          <div className={styles.leftColumn}>
            <div className={styles.scatterTextWrap}>
              
              <div className={styles.wordBlock}>
                {lettersWhy.map((l, i) => (
                  <span key={i} className={`${styles.scatterLetter} ${styles[`letterW${i+1}`]}`}>
                    {l}
                  </span>
                ))}
              </div>

              <div className={styles.wordBlock}>
                {lettersCosuniq.map((l, i) => (
                  <span key={i} className={`${styles.scatterLetter} ${styles[`letterC${i+1}`]} ${l === "?" ? styles.dot : ""}`}>
                    {l}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* Column 2: Image & Round Button */}
          <div className={styles.middleColumn}>
            
            <div className={styles.imageContainer}>
              {/* Splash / Power Elements */}
              <div className={`${styles.powerElement} ${styles.power1}`}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L55 40L95 50L55 60L50 100L45 60L5 50L45 40L50 0Z" fill="#FF6B00"/>
                </svg>
              </div>
              <div className={`${styles.powerElement} ${styles.power2}`}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="48" stroke="#FF6B00" strokeWidth="4" strokeDasharray="15 15"/>
                </svg>
              </div>
              <div className={`${styles.powerElement} ${styles.power3}`}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 20L80 80M80 20L20 80M50 10V90M10 50H90" stroke="#111111" strokeWidth="8" strokeLinecap="round"/>
                </svg>
              </div>
              <div className={`${styles.powerElement} ${styles.power4}`}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L55 40L95 50L55 60L50 100L45 60L5 50L45 40L50 0Z" fill="#111111"/>
                </svg>
              </div>
              <div className={`${styles.powerElement} ${styles.power5}`}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#FF6B00" strokeWidth="2" />
                  <circle cx="50" cy="50" r="20" fill="#FF6B00" />
                </svg>
              </div>

              <div className={styles.imageWrap}>
                <img src="/assets/images/enjoy.png" alt="Why COSUNIQ" />
              </div>

              <div className={styles.buttonWrap}>
                <Link href="#contact" className={styles.roundCta}>
                  <span className={styles.roundCtaText}>Start<br/>Project</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>

          {/* Column 3: Stacked Cards */}
          <div className={styles.rightColumn}>
            
            {/* Card 1 */}
            <article className={`${styles.card} ${styles.card1}`}>
              <span className={styles.icon}><NumberIcon num="01" /></span>
              <div className={styles.cardContent}>
                <span className={styles.cardTag}>01 &mdash; THINK</span>
                <h3 className={styles.cardName}>Strategy with clarity.</h3>
                <p className={styles.cardDesc}>We understand the business before we touch the design.</p>
              </div>
              <span className={styles.cardArrow} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </article>

            {/* Card 2 */}
            <article className={`${styles.card} ${styles.card2}`}>
              <span className={styles.icon}><NumberIcon num="02" /></span>
              <div className={styles.cardContent}>
                <span className={styles.cardTag}>02 &mdash; CREATE</span>
                <h3 className={styles.cardName}>Design with purpose.</h3>
                <p className={styles.cardDesc}>We create identities and experiences people remember.</p>
              </div>
              <span className={styles.cardArrow} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </article>

            {/* Card 3 */}
            <article className={`${styles.card} ${styles.card3}`}>
              <span className={styles.icon}><NumberIcon num="03" /></span>
              <div className={styles.cardContent}>
                <span className={styles.cardTag}>03 &mdash; BUILD</span>
                <h3 className={styles.cardName}>Technology that performs.</h3>
                <p className={styles.cardDesc}>We turn creative ideas into fast, scalable digital products.</p>
              </div>
              <span className={styles.cardArrow} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </article>

          </div>
          
        </div>

      </div>
    </section>
  );
}
