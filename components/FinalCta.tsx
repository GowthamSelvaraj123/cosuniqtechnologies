"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./FinalCta.module.css";
import MagneticWrapper from "./MagneticWrapper";
import HoverTextReveal from "./HoverTextReveal";

const ProcessFlow = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // The animation sequence takes ~4.5 seconds. We let it rest fully lit,
    // then completely restart the sequence every 7 seconds.
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.processContainer} key={key}>
      <svg viewBox="0 0 350 320" className={styles.processSvg}>
      {/* Base Path (Grey Dashed) */}
      <path 
        d="M 50 40 C 250 10, 350 100, 280 110 C 150 120, 20 180, 70 210 C 150 240, 200 280, 280 280"
        fill="none" 
        stroke="rgba(0, 0, 0, 0.1)" 
        strokeWidth="1.5" 
        strokeDasharray="6 6"
      />
      {/* Animated Path (Orange Dashed) */}
      <motion.path 
        d="M 50 40 C 250 10, 350 100, 280 110 C 150 120, 20 180, 70 210 C 150 240, 200 280, 280 280"
        fill="none" 
        stroke="#FF6B00" 
        strokeWidth="2" 
        strokeDasharray="6 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, ease: "linear", delay: 0.5 }}
      />
      
      {/* Node 1: Request (Starts Orange) */}
      <motion.g 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0, duration: 0.4 }}
      >
        <motion.circle cx="50" cy="40" r="24" fill="none" stroke="#FF6B00" strokeWidth="2"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        />
        <circle cx="50" cy="40" r="24" fill="#ffffff" stroke="#FF6B00" strokeWidth="1.5" />
        <svg x="40" y="30" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="rgba(255, 107, 0, 0.1)"/>
        </svg>
        <text x="50" y="85" textAnchor="middle" fill="#111111" fontSize="14" fontWeight="600" fontFamily="var(--font-plus-jakarta), sans-serif">Request</text>
      </motion.g>

      {/* Node 2: Review */}
      <motion.g 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <motion.circle cx="280" cy="110" r="24" fill="none" stroke="#FF6B00" strokeWidth="2"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
        />
        <motion.circle cx="280" cy="110" r="24" fill="#ffffff" 
          initial={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 1 }} 
          animate={{ stroke: "#FF6B00", strokeWidth: 1.5 }}
          transition={{ delay: 1.8, duration: 0.3 }}
        />
        <motion.svg x="270" y="100" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"
          initial={{ stroke: "#111111" }}
          animate={{ stroke: "#FF6B00" }}
          transition={{ delay: 1.8, duration: 0.3 }}
        >
           <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="1.5"></path>
           <circle cx="12" cy="12" r="3" strokeWidth="1.5"></circle>
        </motion.svg>
        <motion.text x="280" y="155" textAnchor="middle" fontSize="14" fontFamily="var(--font-plus-jakarta), sans-serif"
          initial={{ fill: "#555555", fontWeight: 500 }}
          animate={{ fill: "#111111", fontWeight: 600 }}
          transition={{ delay: 1.8, duration: 0.3 }}
        >
          Review
        </motion.text>
      </motion.g>

      {/* Node 3: Proposal */}
      <motion.g 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <motion.circle cx="70" cy="210" r="24" fill="none" stroke="#FF6B00" strokeWidth="2"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          transition={{ delay: 3.2, duration: 0.6, ease: "easeOut" }}
        />
        <motion.circle cx="70" cy="210" r="24" fill="#ffffff" 
          initial={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 1 }} 
          animate={{ stroke: "#FF6B00", strokeWidth: 1.5 }}
          transition={{ delay: 3.2, duration: 0.3 }}
        />
        <motion.svg x="60" y="200" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"
          initial={{ stroke: "#111111" }}
          animate={{ stroke: "#FF6B00" }}
          transition={{ delay: 3.2, duration: 0.3 }}
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="1.5"></path>
          <polyline points="14 2 14 8 20 8" strokeWidth="1.5"></polyline>
          <line x1="16" y1="13" x2="8" y2="13" strokeWidth="1.5"></line>
          <line x1="16" y1="17" x2="8" y2="17" strokeWidth="1.5"></line>
          <polyline points="10 9 9 9 8 9" strokeWidth="1.5"></polyline>
        </motion.svg>
        <motion.text x="70" y="255" textAnchor="middle" fontSize="14" fontFamily="var(--font-plus-jakarta), sans-serif"
          initial={{ fill: "#555555", fontWeight: 500 }}
          animate={{ fill: "#111111", fontWeight: 600 }}
          transition={{ delay: 3.2, duration: 0.3 }}
        >
          Proposal
        </motion.text>
      </motion.g>

      {/* Node 4: Kickoff */}
      <motion.g 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <motion.circle cx="280" cy="280" r="24" fill="none" stroke="#FF6B00" strokeWidth="2"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          transition={{ delay: 4.5, duration: 0.6, ease: "easeOut" }}
        />
        <motion.circle cx="280" cy="280" r="24" fill="#ffffff" 
          initial={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 1 }} 
          animate={{ stroke: "#FF6B00", strokeWidth: 1.5 }}
          transition={{ delay: 4.5, duration: 0.3 }}
        />
        <motion.svg x="270" y="270" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"
          initial={{ stroke: "#111111" }}
          animate={{ stroke: "#FF6B00" }}
          transition={{ delay: 4.5, duration: 0.3 }}
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="1.5"></path>
        </motion.svg>
        <motion.text x="280" y="325" textAnchor="middle" fontSize="14" fontFamily="var(--font-plus-jakarta), sans-serif"
          initial={{ fill: "#555555", fontWeight: 500 }}
          animate={{ fill: "#111111", fontWeight: 600 }}
          transition={{ delay: 4.5, duration: 0.3 }}
        >
          Kickoff
        </motion.text>
      </motion.g>
    </svg>
  </div>
  );
};

export default function FinalCta() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    company?: string;
    jobTitle?: string;
    country?: string;
    details?: string;
    consent1?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const country = formData.get('country') as string;
    const details = formData.get('details') as string;
    const consent1 = formData.get('consent1');
    
    const newErrors: typeof errors = {};
    
    if (!firstName || firstName.trim() === '') newErrors.firstName = 'First name is required';
    if (!lastName || lastName.trim() === '') newErrors.lastName = 'Last name is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) newErrors.email = 'Valid email is required';
    
    if (!company || company.trim() === '') newErrors.company = 'Company is required';
    if (!jobTitle || jobTitle.trim() === '') newErrors.jobTitle = 'Job title is required';
    if (!country || country === '') newErrors.country = 'Country is required';
    if (!details || details.trim() === '') newErrors.details = 'Details are required';
    
    if (!consent1) newErrors.consent1 = 'You must agree to the privacy policy';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    
    // Simulate successful API call
    setTimeout(() => {
      setStatus('success');
      // Reset form on success
      (e.target as HTMLFormElement).reset();
      
      // Return to idle after 5 seconds so they can submit again if needed
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
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
                  className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`} 
                  placeholder="Last Name*" 
                />
                {errors.lastName && <span className={styles.fieldError}>{errors.lastName}</span>}
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
                  className={`${styles.input} ${errors.company ? styles.inputError : ''}`} 
                  placeholder="Company*" 
                />
                {errors.company && <span className={styles.fieldError}>{errors.company}</span>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="jobTitle"
                  id="jobTitle" 
                  className={`${styles.input} ${errors.jobTitle ? styles.inputError : ''}`} 
                  placeholder="Job Title*" 
                />
                {errors.jobTitle && <span className={styles.fieldError}>{errors.jobTitle}</span>}
              </div>
              <div className={styles.inputGroup}>
                <select name="country" id="country" className={`${styles.select} ${errors.country ? styles.inputError : ''}`} defaultValue="">
                  <option value="" disabled>Country*</option>
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="OT">Other</option>
                </select>
                {errors.country && <span className={styles.fieldError}>{errors.country}</span>}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <textarea 
                name="details"
                id="details" 
                className={`${styles.textarea} ${errors.details ? styles.inputError : ''}`} 
                placeholder="Let us know how we can help you*" 
                rows={3} 
              ></textarea>
              {errors.details && <span className={styles.fieldError}>{errors.details}</span>}
            </div>

            <div className={styles.checkboxRow}>
              <input type="checkbox" id="consent1" name="consent1" className={styles.checkbox} />
              <label htmlFor="consent1" className={`${styles.checkboxLabel} ${errors.consent1 ? styles.fieldError : ''}`}>
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
