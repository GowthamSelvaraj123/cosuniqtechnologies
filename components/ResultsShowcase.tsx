"use client";

import { motion } from "framer-motion";
import styles from "./ResultsShowcase.module.css";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function ResultsShowcase() {
  return (
    <section className={`band band--black ${styles.section}`} id="results">
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className="eyebrow">
            <span className="spark spark--inline" style={{ background: '#FF6B00' }}></span> 
            Results
          </span>
          <h2>Numbers that mean something.</h2>
        </div>

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* Card 1: Main Metric */}
          <motion.div className={`${styles.card} ${styles.card1}`} variants={cardVariants}>
            <div className={`${styles.glow} ${styles.glowTopRight}`}></div>
            <div>
              <span className={styles.value}>67%</span>
              <p className={styles.label}>Average user engagement lift measured across our recent e-commerce and SaaS launches.</p>
            </div>
          </motion.div>

          {/* Card 2: Speed */}
          <motion.div className={`${styles.card} ${styles.card2}`} variants={cardVariants}>
            <div>
              <span className={styles.value}>2&times;</span>
              <p className={styles.label}>Faster delivery cycles with our streamlined, agile design sprints.</p>
            </div>
          </motion.div>

          {/* Card 3: Experience */}
          <motion.div className={`${styles.card} ${styles.card3}`} variants={cardVariants}>
            <div>
              <span className={styles.value}>80+</span>
              <p className={styles.label}>Unique projects shipped and counting.</p>
            </div>
          </motion.div>

          {/* Card 4: Partnership */}
          <motion.div className={`${styles.card} ${styles.card4}`} variants={cardVariants}>
            <div className={`${styles.glow} ${styles.glowBottomLeft}`}></div>
            <div>
              <span className={styles.value}>100%</span>
              <p className={styles.label}>Dedicated creative and technical partnership from day one.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
