"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import InitReveal from "../../components/InitReveal";
import InnerBanner from "../../components/InnerBanner";
import ParticleAnimal from "../../components/ParticleAnimal";
import styles from "./About.module.css";

const fadeUpParams = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  },
  viewport: { once: true, margin: "-100px" }
};

export default function AboutContent() {
  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start center", "end center"]
  });
  
  const lineScale = useTransform(storyProgress, [0, 1], [0, 1]);

  return (
    <div className={styles.pageWrapper}>
      <InitReveal />
      
      {/* 01 — BANNER (Existing) */}
      <InnerBanner 
        eyebrow={<><span className="spark spark--inline" style={{ backgroundColor: '#ffffff' }} />About Us</>}
        title="We. Build. Uniq."
        description="Cosuniq Technologies is a digital solutions company blending software engineering with brand and media — so your product, presence, and story stay aligned."
        bgImage="/assets/images/team.png"
      />

      {/* 02 — WHO WE ARE */}
      <section className={styles.whoWeAre}>
        <div className={`container ${styles.whoGrid}`}>
          <motion.div className={styles.whoText} {...fadeUpParams}>
            <span className={`eyebrow ${styles.eyebrowWrap}`}>
              <span className="spark spark--inline" />
              Who We Are
            </span>
            <h2 className={styles.whoHeadline}>
              Dream<span className={styles.dot}>.</span> Design<span className={styles.dot}>.</span> Deliver<span className={styles.dot}>.</span>
            </h2>
            <p className={styles.whoDescription}>We are a creative technology team bringing strategy, design, and development together to turn ideas into meaningful digital experiences.</p>
          </motion.div>
          <motion.div 
            className={styles.whoVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ParticleAnimal animal="🦋" />
          </motion.div>
        </div>
      </section>

      {/* 03 — OUR STORY */}
      <section className={`${styles.storySection} ${styles.sectionPadding}`} ref={storyRef}>
        <div className="container">
          <motion.div className={styles.storyHeader} {...fadeUpParams}>
            <span className={styles.eyebrow}>Our Story</span>
            <h2 className={styles.displayMedium}>The Evolution of COSUNIQ</h2>
          </motion.div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>
            <motion.div className={styles.timelineProgress} style={{ scaleX: lineScale }}></motion.div>

            {[
              { title: "Idea", desc: "A singular thought: to bridge the gap between creative vision and technical execution." },
              { title: "Foundation", desc: "Establishing our core principles of strategy, design, and reliable engineering." },
              { title: "Evolution", desc: "Expanding our capabilities to include immersive branding and media production." },
              { title: "COSUNIQ", desc: "Today, we operate as a unified creative technology partner for ambitious global brands." }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className={styles.timelineStep}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={styles.timelineDot}></div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — VISION + MISSION */}
      <section className={styles.visionMission}>
        <motion.div 
          className={`${styles.vmBlock} ${styles.visionBlock}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.vmLabel}>Vision</div>
          <div className={styles.vmText}>
            To become the trusted creative technology partner for ambitious businesses shaping what comes next.
          </div>
        </motion.div>

        <motion.div 
          className={`${styles.vmBlock} ${styles.missionBlock}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.vmLabel}>Mission</div>
          <div className={styles.vmText}>
            To transform ideas into purposeful brands and high-performing digital experiences that create lasting impact.
          </div>
        </motion.div>
      </section>

      {/* 05 — WHAT WE BELIEVE */}
      <section className={`${styles.principlesSection} ${styles.sectionPadding}`}>
        <div className="container">
          <motion.div className={styles.principlesHeader} {...fadeUpParams}>
            <h2 className={styles.displayMedium}>What we believe.</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              "Strategy before execution.",
              "Design with purpose.",
              "Technology that performs.",
              "Collaboration over handoffs.",
              "Quality without compromise."
            ].map((principle, index) => (
              <motion.div 
                key={index} 
                className={styles.principleItem}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <div className={styles.pNumber}>0{index + 1}</div>
                <div className={styles.pText}>{principle}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 06 — THE COSUNIQ DIFFERENCE */}
      <section className={`${styles.differenceSection} ${styles.sectionPadding}`}>
        <div className="container">
          <motion.div className={styles.diffHeader} {...fadeUpParams}>
            <h2 className={styles.displayLarge}>Think.<br/>Create.<br/>Build.</h2>
          </motion.div>

          <motion.div 
            className={styles.diffGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { title: "THINK", desc: "Strategic thinking that creates clarity before execution. We define the 'why' before we build the 'what'." },
              { title: "CREATE", desc: "Purposeful creativity that makes brands distinctive and memorable across every digital touchpoint." },
              { title: "BUILD", desc: "Reliable technology that turns ideas into scalable, high-performing digital experiences." }
            ].map((col, index) => (
              <motion.div 
                key={index} 
                className={styles.diffColumn}
                variants={{
                  initial: { opacity: 0, y: 40 },
                  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <h3 className={styles.diffTitle}>{col.title}</h3>
                <p className={styles.diffDesc}>{col.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 07 — FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.ctaBgElement}></div>
        <div className={`container ${styles.ctaContent}`}>
          <motion.h2 
            className={styles.displayMedium}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Have an idea worth building?
          </motion.h2>
          
          <motion.p 
            className={styles.displaySmall}
            style={{ color: '#888' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let's make it real.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/contact" className={styles.magneticBtn}>
              Start a Project 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
