"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section} id="start">
      <div className={styles.container}>
        
        {/* Left Column: Text Content */}
        <div className={styles.leftColumn}>
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

          <motion.p 
            className={styles.subtext}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Tell us what you&apos;re building, and let&apos;s create something meaningful together.
          </motion.p>
        </div>

        {/* Right Column: Form */}
        <motion.div 
          className={styles.rightColumn}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" className={styles.input} placeholder="john@example.com" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="details" className={styles.label}>Project Details</label>
              <textarea id="details" className={styles.textarea} placeholder="Tell us about your idea..." rows={4} required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Start a Project <span className={styles.arrow}>&rarr;</span>
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
