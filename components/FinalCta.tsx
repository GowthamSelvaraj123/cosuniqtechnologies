"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./FinalCta.module.css";

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
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/assets/images/contact-us.png" alt="Team Collaboration" className={styles.headerImage} style={{objectFit:"contain"}} />
          </motion.div>

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
                  placeholder="First name" 
                  style={{ '--card-rot': '-1.5deg', '--card-y': '3px' } as React.CSSProperties}
                />
                {errors.firstName && <span className={styles.fieldError}>{errors.firstName}</span>}
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="lastName"
                  id="lastName" 
                  className={styles.input} 
                  placeholder="Last name" 
                  style={{ '--card-rot': '1.2deg', '--card-y': '-2px' } as React.CSSProperties}
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
                  placeholder="Email address" 
                  style={{ '--card-rot': '0.8deg', '--card-y': '2px' } as React.CSSProperties}
                />
                {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="tel" 
                  name="phone"
                  id="phone" 
                  className={styles.input} 
                  placeholder="Phone (e.g. +91 73586 96546)" 
                  style={{ '--card-rot': '-1deg', '--card-y': '-1px' } as React.CSSProperties}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <textarea 
                name="details"
                id="details" 
                className={styles.textarea} 
                placeholder="How can we help you? Tell us about your project..." 
                rows={4} 
                style={{ '--card-rot': '-0.5deg', '--card-y': '2px' } as React.CSSProperties}
              ></textarea>
            </div>
            
            {status === 'error' && (
              <p className={styles.errorMessage}>Oops! Something went wrong. Please try again.</p>
            )}
            
            {status === 'success' && (
              <p className={styles.successMessage}>Thank you! Your message has been sent.</p>
            )}

            <button type="submit" className={styles.submitBtn} disabled={status === 'submitting' || status === 'success'}>
              {status === 'submitting' ? (
                "Sending..."
              ) : status === 'success' ? (
                "Request Sent"
              ) : (
                <>
                  Start a Project 
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrow}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
