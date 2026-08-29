"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./InnerBanner.module.css";

interface InnerBannerProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export default function InnerBanner({ eyebrow, title, description }: InnerBannerProps) {
  return (
    <section className={styles.banner}>
      <div className={styles.decorationRight}>
        <motion.div
          className={styles.blob1}
          animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={styles.blob2}
          animate={{ y: [0, 50, 0], x: [0, -30, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={styles.spark1}
          animate={{ rotate: [0, 360], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={styles.spark2}
          animate={{ rotate: [360, 0], scale: [1, 0.5, 1], y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className={styles.container}>
        {eyebrow && (
          <motion.span
            className={`eyebrow ${styles.eyebrow}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '1.25rem' }}
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        <motion.p 
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
