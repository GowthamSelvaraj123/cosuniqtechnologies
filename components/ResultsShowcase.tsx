"use client";

import { motion, Variants } from "framer-motion";
import styles from "./ResultsShowcase.module.css";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function ResultsShowcase() {
  return (
    <section className={`band ${styles.section}`} id="results">
      <div className={styles.container}>
        
        <div className="section-intro">
          <span className="eyebrow">
            <span className="spark spark--inline" style={{ background: '#FF6B00' }}></span> 
            Our Standard
          </span>
          <h2>Numbers we stand by<span style={{ color: '#FF6B00' }}>.</span></h2>
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
              <span className={styles.value}>100%</span>
              <p className={styles.label}>Dedicated in-house team. No outsourcing, ensuring consistent premium quality and direct communication.</p>
            </div>
          </motion.div>

          {/* Card 2: Transparency */}
          <motion.div className={`${styles.card} ${styles.card2}`} variants={cardVariants}>
            <div>
              <span className={styles.value}>0</span>
              <p className={styles.label}>Hidden fees or surprise costs. We operate with complete transparency from the start.</p>
            </div>
          </motion.div>

          {/* Card 3: Collaboration */}
          <motion.div className={`${styles.card} ${styles.card3}`} variants={cardVariants}>
            <div>
              <span className={styles.value}>1:1</span>
              <p className={styles.label}>Direct collaboration with our core engineering and design experts.</p>
            </div>
          </motion.div>

          {/* Card 4: Workflow */}
          <motion.div className={`${styles.card} ${styles.card4}`} variants={cardVariants}>
            <div className={`${styles.glow} ${styles.glowBottomLeft}`}></div>
            <div>
              <span className={styles.value}>2&times;</span>
              <p className={styles.label}>Faster iteration cycles through our streamlined, modern agile workflow.</p>
            </div>
          </motion.div>

          {/* Card 5: Support */}
          <motion.div className={`${styles.card} ${styles.card5}`} variants={cardVariants}>
            <div className={`${styles.glow} ${styles.glowTopRight}`} style={{ bottom: '-100px', top: 'auto', right: '-50px' }}></div>
            <div>
              <span className={styles.value}>24/7</span>
              <p className={styles.label}>Proactive support and monitoring to ensure your digital assets are always live and performing.</p>
            </div>
          </motion.div>

          {/* Card 6: Custom */}
          <motion.div className={`${styles.card} ${styles.card6}`} variants={cardVariants}>
            <div>
              <span className={styles.value}>1<span style={{ fontSize: '0.6em', verticalAlign: 'super' }}>st</span></span>
              <p className={styles.label}>Your vision comes first. We build tailor-made solutions, not cookie-cutter templates.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
