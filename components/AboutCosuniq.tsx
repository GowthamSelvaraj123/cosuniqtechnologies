"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./AboutCosuniq.module.css";

// The abstract visual: Three interlocking geometric shapes representing Strategy, Creativity, Technology
const AbstractVisual = () => {
  return (
    <div className={styles.visualWrapper}>
      <svg className={styles.abstractGraphic} viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className={styles.group1}>
          <circle cx="120" cy="90" r="60" stroke="#17202A" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="120" cy="90" r="40" stroke="#FF7800" strokeWidth="1.5" />
        </g>
        <g className={styles.group2}>
          <circle cx="85" cy="150" r="60" stroke="#17202A" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="85" cy="150" r="40" stroke="#17202A" strokeWidth="1.5" />
        </g>
        <g className={styles.group3}>
          <circle cx="155" cy="150" r="60" stroke="#17202A" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="155" cy="150" r="40" stroke="#17202A" strokeWidth="1.5" />
        </g>
        <circle cx="120" cy="130" r="4" fill="#FF7800" />
      </svg>
    </div>
  );
};

export default function AboutCosuniq() {
  const containerRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={containerRef} className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Column */}
          <div className={styles.leftCol}>
            <span className={styles.eyebrow}>
              <span className={styles.spark}></span>
              ABOUT COSUNIQ
            </span>
            <h2 className={styles.headline}>
              New by name.<br/>
              Experienced by craft.
            </h2>
            
            <div className={styles.visualContainerDesktop}>
              <AbstractVisual />
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightCol}>
            <motion.p 
              className={styles.introText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              COSUNIQ is a creative technology agency helping ambitious businesses build stronger brands and better digital experiences.
            </motion.p>
            
            <div className={styles.visualContainerMobile}>
              <AbstractVisual />
            </div>

            <motion.div 
              className={styles.ctaWrapper}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/about" className={styles.ctaLink}>
                Discover COSUNIQ <span className={styles.arrow}>&rarr;</span>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
