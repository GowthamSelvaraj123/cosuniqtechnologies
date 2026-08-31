"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./FinalCta.module.css";
import MagneticWrapper from "./MagneticWrapper";
import HoverTextReveal from "./HoverTextReveal";

const NewsletterAnimation = () => (
  <div className={styles.newsletterAnimContainer}>
    {/* Paper Airplane */}
    <motion.div
      className={styles.paperPlane}
      animate={{ 
        y: [0, -15, 0], 
        rotate: [-5, 5, -5],
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="rgba(255, 107, 0, 0.1)" />
      </svg>
    </motion.div>
    
    {/* Envelope / Letter */}
    <motion.div
      className={styles.envelope}
      animate={{ 
        y: [0, 20, 0], 
        rotate: [10, 0, 10],
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: 0.5
      }}
    >
      <svg width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="#ffffff" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    </motion.div>

    {/* Message Bubble */}
    <motion.div
      className={styles.chatBubble}
      animate={{ 
        scale: [1, 1.1, 1], 
        y: [0, -10, 0],
      }}
      transition={{ 
        duration: 4.5, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: 1
      }}
    >
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#bbbbbb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#ffffff"/>
      </svg>
    </motion.div>
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

          <NewsletterAnimation />
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
