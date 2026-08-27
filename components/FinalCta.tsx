"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./FinalCta.module.css";

const AbstractBackground = () => {
  return (
    <div className={styles.visualBackground}>
      <svg className={styles.abstractGraphic} viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Radiating Ripples representing possibility and reality */}
        <circle cx="500" cy="500" r="100" stroke="rgba(255, 120, 0, 0.4)" className={styles.ripple1} />
        <circle cx="500" cy="500" r="100" stroke="rgba(255, 120, 0, 0.4)" className={styles.ripple2} />
        <circle cx="500" cy="500" r="100" stroke="rgba(255, 120, 0, 0.4)" className={styles.ripple3} />
        
        {/* Central Idea Dot */}
        <motion.g 
          className={styles.coreIdea}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <circle cx="500" cy="500" r="12" fill="#FF7800" />
        </motion.g>
      </svg>
    </div>
  );
};

export default function FinalCta() {
  return (
    <section className={styles.section} id="start">
      {/* Immersive Background */}
      <AbstractBackground />

      {/* Foreground Content */}
      <div className={styles.container}>
        
        <motion.div 
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.spark}></span>
          READY WHEN YOU ARE
        </motion.div>
        
        <div className={styles.headlineWrapper}>
          <motion.h2 
            className={styles.headline}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Have an idea worth building?
            <span className={styles.highlightOrange}>Let&apos;s make it real.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link href="/contact" className={styles.ctaButton}>
            Start a Project <span className={styles.arrow}>&rarr;</span>
          </Link>
        </motion.div>

        <motion.p 
          className={styles.subtext}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Tell us what you&apos;re building, and let&apos;s create something meaningful together.
        </motion.p>

      </div>
    </section>
  );
}
