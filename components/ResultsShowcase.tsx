"use client";

import styles from "./ResultsShowcase.module.css";

export default function ResultsShowcase() {
  return (
    <section className={`band ${styles.section}`} id="results">
      <div className={styles.container}>
        
        <div className={`section-intro ${styles.darkHeader}`}>
          <span className="eyebrow">
            <span className="spark spark--inline" style={{ background: '#FF6B00' }}></span> 
            Our Standard
          </span>
          <h2>Numbers we stand by<span style={{ color: '#FF6B00' }}>.</span></h2>
        </div>

        <div className={styles.grid}>
          {/* Card 1: Main Metric */}
          <div className={`${styles.card} ${styles.card1}`}>
            <div className={`${styles.glow} ${styles.glowTopRight}`}></div>
            <div className={styles.textContent}>
              <span className={styles.value}>100%</span>
              <p className={styles.label}>Dedicated in-house team. No outsourcing, ensuring consistent premium quality and direct communication.</p>
            </div>
            {/* The right-side overlapping image */}
            <div className={styles.showcaseImg}>
              {/* Replace src with your transparent PNG */}
              <img src="/assets/images/team.png" alt="Celebrating success" />
            </div>
          </div>

          {/* Card 2: Transparency */}
          <div className={`${styles.card} ${styles.card2}`}>
            <div className={styles.textContent}>
              <span className={styles.value}>0</span>
              <p className={styles.label}>Hidden fees or surprise costs. We operate with complete transparency from the start.</p>
            </div>
                        {/* The right-side overlapping image */}
            <div className={styles.showcaseImg} style={{width:"165px"}}>
              {/* Replace src with your transparent PNG */}
              <img src="/assets/images/cash-flow.png" alt="Celebrating success" />
            </div>
          </div>

          {/* Card 3: Collaboration */}
          <div className={`${styles.card} ${styles.card3}`}>
            <div className={styles.showcaseImg} style={{width:"165px"}}>
              {/* Replace src with your transparent PNG */}
              <img src="/assets/images/cash-flow.png" alt="Celebrating success" />
            </div>
            <div className={styles.textContent}>
              <span className={styles.value}>1:1</span>
              <p className={styles.label}>Direct collaboration with our core engineering and design experts.</p>
            </div>
          </div>

          {/* Card 4: Workflow */}
          <div className={`${styles.card} ${styles.card4}`}>
            <div className={`${styles.glow} ${styles.glowBottomLeft}`}></div>
            <div className={styles.textContent}>
              <span className={styles.value}>2&times;</span>
              <p className={styles.label}>Faster iteration cycles through our streamlined, modern agile workflow.</p>
            </div>
          </div>

          {/* Card 5: Support */}
          <div className={`${styles.card} ${styles.card5}`}>
            <div className={`${styles.glow} ${styles.glowTopRight}`} style={{ bottom: '-100px', top: 'auto', right: '-50px' }}></div>
            <div className={styles.textContent}>
              <span className={styles.value}>24/7</span>
              <p className={styles.label}>Proactive support and monitoring to ensure your digital assets are always live and performing.</p>
            </div>
          </div>

          {/* Card 6: Custom */}
          <div className={`${styles.card} ${styles.card6}`}>
            <div className={styles.textContent}>
              <span className={styles.value}>1<span style={{ fontSize: '0.6em', verticalAlign: 'super' }}>st</span></span>
              <p className={styles.label}>Your vision comes first. We build tailor-made solutions, not cookie-cutter templates.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
