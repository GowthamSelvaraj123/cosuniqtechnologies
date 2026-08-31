"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./FinalCta.module.css";
import MagneticWrapper from "./MagneticWrapper";
import HoverTextReveal from "./HoverTextReveal";

const ProcessFlow = () => (
  <div className={styles.processContainer}>
    <svg viewBox="0 0 350 320" className={styles.processSvg}>
      {/* Base Path (Grey Dashed) */}
      <path 
        d="M 60 50 C 260 50, 320 120, 220 140 C 120 160, 60 220, 260 250"
        fill="none" 
        stroke="rgba(0, 0, 0, 0.1)" 
        strokeWidth="1.5" 
        strokeDasharray="6 6"
      />
      {/* Animated Path (Orange Dashed) */}
      <motion.path 
        d="M 60 50 C 260 50, 320 120, 220 140 C 120 160, 60 220, 260 250"
        fill="none" 
        stroke="#FF6B00" 
        strokeWidth="2" 
        strokeDasharray="6 6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 4, ease: "linear", delay: 0.5 }}
      />
      
      {/* Node 1: Request (Starts Orange) */}
      <motion.g 
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }}
        transition={{ delay: 0, duration: 0.4 }}
      >
        <motion.circle cx="60" cy="50" r="24" fill="none" stroke="#FF6B00" strokeWidth="2"
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        />
        <circle cx="60" cy="50" r="24" fill="#ffffff" stroke="#FF6B00" strokeWidth="1.5" />
        <svg x="50" y="40" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="rgba(255, 107, 0, 0.1)"/>
        </svg>
        <text x="60" y="94" textAnchor="middle" fill="#111111" fontSize="13" fontWeight="700" fontFamily="var(--font-plus-jakarta), sans-serif">1. Request</text>
      </motion.g>

      {/* Node 2: Review */}
      <motion.g 
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <motion.circle cx="260" cy="95" r="24" fill="none" stroke="#FF6B00" strokeWidth="2"
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          viewport={{ once: true }}
          transition={{ delay: 2.0, duration: 0.6, ease: "easeOut" }}
        />
        <motion.circle cx="260" cy="95" r="24" fill="#ffffff" 
          initial={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 1 }} 
          whileInView={{ stroke: "#FF6B00", strokeWidth: 1.5 }}
          viewport={{ once: true }}
          transition={{ delay: 2.0, duration: 0.3 }}
        />
        <motion.svg x="250" y="85" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"
          initial={{ stroke: "#111111" }}
          whileInView={{ stroke: "#FF6B00" }}
          viewport={{ once: true }}
          transition={{ delay: 2.0, duration: 0.3 }}
        >
           <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="1.5"></path>
           <circle cx="12" cy="12" r="3" strokeWidth="1.5"></circle>
        </motion.svg>
        <text x="260" y="139" textAnchor="middle" fill="#555555" fontSize="13" fontWeight="600" fontFamily="var(--font-plus-jakarta), sans-serif">2. Review</text>
      </motion.g>

      {/* Node 3: Proposal */}
      <motion.g 
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <motion.circle cx="120" cy="180" r="24" fill="none" stroke="#FF6B00" strokeWidth="2"
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          viewport={{ once: true }}
          transition={{ delay: 3.3, duration: 0.6, ease: "easeOut" }}
        />
        <motion.circle cx="120" cy="180" r="24" fill="#ffffff" 
          initial={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 1 }} 
          whileInView={{ stroke: "#FF6B00", strokeWidth: 1.5 }}
          viewport={{ once: true }}
          transition={{ delay: 3.3, duration: 0.3 }}
        />
        <motion.svg x="110" y="170" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"
          initial={{ stroke: "#111111" }}
          whileInView={{ stroke: "#FF6B00" }}
          viewport={{ once: true }}
          transition={{ delay: 3.3, duration: 0.3 }}
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="1.5"></path>
          <polyline points="14 2 14 8 20 8" strokeWidth="1.5"></polyline>
          <line x1="16" y1="13" x2="8" y2="13" strokeWidth="1.5"></line>
          <line x1="16" y1="17" x2="8" y2="17" strokeWidth="1.5"></line>
          <polyline points="10 9 9 9 8 9" strokeWidth="1.5"></polyline>
        </motion.svg>
        <text x="120" y="224" textAnchor="middle" fill="#555555" fontSize="13" fontWeight="600" fontFamily="var(--font-plus-jakarta), sans-serif">3. Proposal</text>
      </motion.g>

      {/* Node 4: Kickoff */}
      <motion.g 
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <motion.circle cx="260" cy="250" r="24" fill="none" stroke="#FF6B00" strokeWidth="2"
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          viewport={{ once: true }}
          transition={{ delay: 4.5, duration: 0.6, ease: "easeOut" }}
        />
        <motion.circle cx="260" cy="250" r="24" fill="#ffffff" 
          initial={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 1 }} 
          whileInView={{ stroke: "#FF6B00", strokeWidth: 1.5 }}
          viewport={{ once: true }}
          transition={{ delay: 4.5, duration: 0.3 }}
        />
        <motion.svg x="250" y="240" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"
          initial={{ stroke: "#111111" }}
          whileInView={{ stroke: "#FF6B00" }}
          viewport={{ once: true }}
          transition={{ delay: 4.5, duration: 0.3 }}
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="1.5"></path>
        </motion.svg>
        <text x="260" y="294" textAnchor="middle" fill="#555555" fontSize="13" fontWeight="600" fontFamily="var(--font-plus-jakarta), sans-serif">4. Kickoff</text>
      </motion.g>
    </svg>
  </div>
);

export default function FinalCta() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{firstName?: string, email?: string}>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Custom validation
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const email = formData.get('email') as string;
    
    const newErrors: {firstName?: string, email?: string} = {};
    if (!firstName || firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      newErrors.email = 'Valid email is required';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    // Simulate API call that fails to demonstrate error state
    setTimeout(() => {
      setStatus('error');
      // If you want it to succeed instead, change to setStatus('success');
    }, 1200);
  };

  return (
    <section className={styles.section} id="start">
      <div className={styles.container}>
        
        {/* Left Column: Text Content */}
        <div className={styles.leftColumn}>


          <motion.div 
            className={`eyebrow ${styles.eyebrowWrap}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="spark spark--inline" />
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
              Dream<span className={styles.dot}>.</span> Build<span className={styles.dot}>.</span> Launch<span className={styles.dot}>.</span>
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

          <ProcessFlow />
        </div>

        {/* Right Column: Form */}
        <motion.div 
          className={styles.rightColumn}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="firstName"
                  id="firstName" 
                  className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`} 
                  placeholder="First Name*" 
                />
                {errors.firstName && <span className={styles.fieldError}>{errors.firstName}</span>}
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="lastName"
                  id="lastName" 
                  className={styles.input} 
                  placeholder="Last Name*" 
                />
              </div>
            </div>
            
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  name="email"
                  id="email" 
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`} 
                  placeholder="Email Address*" 
                />
                {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="company"
                  id="company" 
                  className={styles.input} 
                  placeholder="Company*" 
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="jobTitle"
                  id="jobTitle" 
                  className={styles.input} 
                  placeholder="Job Title*" 
                />
              </div>
              <div className={styles.inputGroup}>
                <select name="country" id="country" className={styles.select} defaultValue="">
                  <option value="" disabled>Country*</option>
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="OT">Other</option>
                </select>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <textarea 
                name="details"
                id="details" 
                className={styles.textarea} 
                placeholder="Let us know how we can help you*" 
                rows={3} 
              ></textarea>
            </div>

            <div className={styles.checkboxRow}>
              <input type="checkbox" id="consent1" name="consent1" className={styles.checkbox} />
              <label htmlFor="consent1" className={styles.checkboxLabel}>
                I agree to Cosuniq collecting and processing my personal data to respond to my request and provide related services. *
              </label>
            </div>

            <div className={styles.checkboxRow}>
              <input type="checkbox" id="consent2" name="consent2" className={styles.checkbox} />
              <label htmlFor="consent2" className={styles.checkboxLabel}>
                I agree to receive details about services, events and any marketing communication from Cosuniq.
              </label>
            </div>

            <div className={styles.legalText}>
              To learn more about how we protect your data, please refer to the <Link href="/privacy">Cosuniq privacy policy</Link>.<br/><br/>
              This site is protected by reCAPTCHA.
            </div>
            
            {status === 'error' && (
              <p className={styles.errorMessage}>Oops! Something went wrong. Please try again.</p>
            )}
            
            {status === 'success' && (
              <p className={styles.successMessage}>Thank you! Your message has been sent.</p>
            )}

            <MagneticWrapper>
              <button type="submit" className={styles.submitBtn} disabled={status === 'submitting' || status === 'success'}>
                {status === 'submitting' ? (
                  "Sending..."
                ) : status === 'success' ? (
                  "Request Sent"
                ) : (
                  <>
                    Submit
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrow}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </>
                )}
              </button>
            </MagneticWrapper>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
