"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./BrandPhilosophy.module.css";

const AbstractVisual = () => {
  return (
    <div className={styles.visualWrapper}>
      <svg className={styles.abstractGraphic} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Experience: The Structured System */}
        <motion.g 
          className={styles.experienceGrid}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          {/* A balanced, interface-like bounding structure */}
          <rect x="150" y="150" width="300" height="300" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="300" y1="50" x2="300" y2="550" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
          <line x1="50" y1="300" x2="550" y2="300" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
          
          <rect x="130" y="130" width="340" height="340" stroke="rgba(23, 32, 42, 0.2)" strokeWidth="1" rx="40" />
        </motion.g>

        {/* Identity: The Flowing Brand Shape */}
        <motion.g 
          className={styles.identityRing1}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <circle cx="300" cy="300" r="120" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
          <circle cx="350" cy="300" r="120" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
        </motion.g>

        <motion.g 
          className={styles.identityRing2}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <circle cx="250" cy="300" r="120" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
        </motion.g>

        {/* Idea: The Central Concept */}
        <motion.g 
          className={styles.ideaDot}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <circle cx="300" cy="300" r="8" fill="#17202A" />
          <circle cx="300" cy="300" r="24" stroke="#17202A" strokeWidth="1" strokeDasharray="2 4" />
        </motion.g>

      </svg>
    </div>
  );
};

export default function BrandPhilosophy() {
  return (
    <section className={styles.section} style={{backgroundColor:"#FF7800"}} id="philosophy">
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Column: Typography */}
          <div className={styles.leftCol}>
            <span className={styles.eyebrow}>
              <span className={styles.spark}></span>
              BRAND PHILOSOPHY
            </span>
            
            <motion.h2 
              className={styles.headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Every great brand starts with a clear idea.
            </motion.h2>
            
            <motion.p 
              className={styles.subhead}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Before we design a logo, build a website or create an experience, we find the idea that gives the brand its meaning, direction and personality.
            </motion.p>
            
            <div className={styles.principles}>
              
              <motion.div 
                className={styles.principle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className={styles.principleTitle}>Strategy</h3>
                <p className={styles.principleDesc}>
                  Understand the business, audience and ambition.
                </p>
              </motion.div>
              
              <motion.div 
                className={styles.principle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className={styles.principleTitle}>Creativity</h3>
                <p className={styles.principleDesc}>
                  Turn the idea into a distinctive visual and emotional identity.
                </p>
              </motion.div>
              
              <motion.div 
                className={styles.principle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className={styles.principleTitle}>Technology</h3>
                <p className={styles.principleDesc}>
                  Bring that identity to life through meaningful digital experiences.
                </p>
              </motion.div>
              
            </div>
          </div>

          {/* Right Column: Abstract Visual */}
          <div className={styles.rightCol}>
            <AbstractVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
