"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./InnerBanner.module.css";

interface InnerBannerProps {
  eyebrow?: React.ReactNode;
  title?: string;
  description?: string;
  bgImage?: string;
}

export default function InnerBanner({ eyebrow, title, description, bgImage }: InnerBannerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className={styles.banner}>
      {bgImage && (
        <motion.div
          className={styles.parallaxBg}
          style={{ y, backgroundImage: `url(${bgImage})` }}
        />
      )}
      {/* CSS-animated decoration (GPU-composited, no Framer overhead) */}
      <div className={styles.decorationRight}>
        <div className={`${styles.blob1} ${styles.animBlob1}`} />
        <div className={`${styles.blob2} ${styles.animBlob2}`} />
        <div className={`${styles.blob3} ${styles.animBlob3}`} />
        <div className={`${styles.spark1} ${styles.animSpark1}`} />
        <div className={`${styles.spark2} ${styles.animSpark2}`} />
        <div className={`${styles.spark3} ${styles.animSpark3}`} />
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
        {title && (
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {title}
          </motion.h1>
        )}

        {description && (
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}

