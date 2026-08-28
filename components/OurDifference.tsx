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
  return (
    <section className={styles.section} id="difference">
      
      <div className="container">

        <div className={styles.splitLayout}>
          
          {/* Left Column: Vertical Text & Image */}
          <div className={styles.leftColumn}>
            
            <div className={styles.verticalHeaderWrap}>
              <h2 className={styles.verticalHeadline}>
                Why COSUNIQ<span className={styles.dot}>?</span>
              </h2>
              <span className={`eyebrow ${styles.eyebrowWrap}`}>
                <span className="spark spark--inline" />
                Our Difference
              </span>
            </div>

            <div className={styles.imageAndButtonWrap}>
              <div>
                <img src="/assets/images/enjoy.png" alt="Our Strategy" />
              </div>
              <Link href="#contact" className={styles.cta}>
                Start a Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

          </div>

          {/* Right Column: Stacked List */}
          <div className={styles.rightColumn}>
            
            {/* Card 1 */}
            <article className={`${styles.card} ${styles.card1}`}>
              <span className={styles.icon}><NumberIcon num="01" /></span>
              <div>
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
              <div>
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
              <div>
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
