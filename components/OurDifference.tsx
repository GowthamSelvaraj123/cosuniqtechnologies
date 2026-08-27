"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./OurDifference.module.css";

const UnifiedVisual = () => {
  return (
    <div className={styles.unifiedVisualWrapper}>
      <svg className={styles.abstractGraphic} viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Base Axis Line */}
        <line x1="0" y1="100" x2="1200" y2="100" className={styles.axisLine} />
        
        {/* Animated Orange Path */}
        <motion.line 
          x1="0" y1="100" x2="1200" y2="100" 
          className={styles.axisOrange}
          initial={{ strokeDasharray: 1200, strokeDashoffset: 1200 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Node 1: Strategy (Thinking) - Concentric & precise */}
        <motion.g 
          className={styles.node1}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <circle cx="200" cy="100" r="45" stroke="#17202A" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="100" r="25" stroke="#FF7800" strokeWidth="1.5" />
          <circle cx="200" cy="100" r="4" fill="#17202A" />
        </motion.g>

        {/* Node 2: Design (Creating) - Intersecting forms */}
        <motion.g 
          className={styles.node2}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <circle cx="580" cy="100" r="35" stroke="#17202A" strokeWidth="1" />
          <circle cx="620" cy="100" r="35" stroke="#17202A" strokeWidth="1.5" />
          <circle cx="600" cy="100" r="4" fill="#FF7800" />
        </motion.g>

        {/* Node 3: Technology (Building) - Structured geometry */}
        <motion.g 
          className={styles.node3}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <rect x="960" y="60" width="80" height="80" stroke="#17202A" strokeWidth="1" transform="rotate(45 1000 100)" />
          <circle cx="1000" cy="100" r="28" stroke="#FF7800" strokeWidth="1.5" />
          <circle cx="1000" cy="100" r="4" fill="#17202A" />
        </motion.g>

      </svg>
    </div>
  );
};

export default function OurDifference() {
  return (
    <section className={styles.section} id="difference">
      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.spark}></span>
            OUR DIFFERENCE
          </span>
          <motion.h2 
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Why COSUNIQ?
          </motion.h2>
          <motion.p 
            className={styles.subhead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We don&apos;t just make things look better. We think, create and build with purpose.
          </motion.p>
        </div>

        {/* Desktop unified visual flow */}
        <UnifiedVisual />

        {/* 3-Column Philosophy Grid */}
        <div className={styles.grid}>
          
          {/* Column 1 */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={styles.number}>01</span>
            <span className={styles.title}>STRATEGY BEFORE DESIGN</span>
            <h3 className={styles.statement}>We start with the why.</h3>
            <p className={styles.description}>
              Every brand needs a clear direction before it needs a visual identity. We understand the business, audience and ambition before designing.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className={styles.number}>02</span>
            <span className={styles.title}>DESIGN WITH PURPOSE</span>
            <h3 className={styles.statement}>Beautiful is only the beginning.</h3>
            <p className={styles.description}>
              Every visual decision should communicate something, create recognition and make the brand easier to remember.
            </p>
          </motion.div>

          {/* Column 3 */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className={styles.number}>03</span>
            <span className={styles.title}>TECHNOLOGY THAT PERFORMS</span>
            <h3 className={styles.statement}>We don&apos;t stop at the design.</h3>
            <p className={styles.description}>
              We turn ideas into digital experiences that are fast, functional, scalable and built around real business goals.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
