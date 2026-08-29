"use client";

import Link from "next/link";
import { useState } from "react";
import InitReveal from "../../components/InitReveal";
import InnerBanner from "../../components/InnerBanner";
import styles from "./Contact.module.css";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string | null;
    const email = formData.get("email") as string | null;
    const message = formData.get("message") as string | null;

    const newErrors: FormErrors = {};
    if (!firstName?.trim()) newErrors.name = "First name is required.";
    if (!email?.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!message?.trim()) newErrors.message = "Please tell us about your project.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      const nameStr = firstName ? firstName.trim().split(" ")[0] : "there";
      setSuccessMessage(`Thanks ${nameStr}! We'll get back to you soon.`);
      e.currentTarget.reset();
      
      setTimeout(() => {
        setSubmitted(false);
        setSuccessMessage("");
      }, 5000);
    }
  };

  return (
    <>
      <InitReveal />
      
      <InnerBanner 
        eyebrow="Contact Us"
        title="Connect. Collaborate. Build."
        description="Share a short brief — we’ll reply with next steps and a rough timeline."
        bgImage="/assets/images/contact-us.png"
      />

      <section className={styles.contactSection}>
        <div className={`container ${styles.contactGrid}`}>
          <div className="reveal">
            {/* Title removed per request */}

            <div className={styles.infoCards}>
              {/* Card 1 */}
              <div className={styles.scatterCard}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                      <path d="M2 4l10 8 10-8"></path>
                    </svg>
                  </div>
                  <span className={styles.cardLabel}>Email</span>
                </div>
                <h3>Drop us a line.</h3>
                <a href="mailto:founder@cosuniq.in">founder@cosuniq.in</a>
              </div>

              {/* Card 2 */}
              <div className={styles.scatterCard}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span className={styles.cardLabel}>Phone</span>
                </div>
                <h3>Let's talk directly.</h3>
                <a href="tel:+917358696546">+91 73586 96546</a>
              </div>

              {/* Card 3 */}
              <div className={styles.scatterCard}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className={styles.cardLabel}>Office</span>
                </div>
                <h3>Visit us.</h3>
                <p>
                  5/233c, Saratha Mani Layout, KVS Colony<br/>
                  Kanakampalayam, Udumalpet - 642126
                </p>
              </div>

              {/* Card 4 */}
              <div className={styles.scatterCard}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <span className={styles.cardLabel}>Hours</span>
                </div>
                <h3>When we're online.</h3>
                <p>Mon – Sat<br/>9:30 AM – 6:30 PM IST</p>
              </div>
            </div>

            <div className={styles.socialsContainer} aria-label="Social links" style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
              <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className={styles.socialIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" aria-label="X" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <form className={`reveal ${styles.formWrapper}`} id="contact-form" noValidate onSubmit={handleSubmit}>
            <h2 className={styles.formTitle}>Get in touch<span style={{ color: '#111' }}>.</span></h2>
            <div className={styles.formContainer}>
              <div className={styles.formCard}>
                <div className={styles.formGroup}>
                  <input type="text" id="firstName" name="firstName" placeholder="First name" />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>
              </div>

              <div className={styles.formCard}>
                <div className={styles.formGroup}>
                  <input type="text" id="lastName" name="lastName" placeholder="Last name" />
                </div>
              </div>

              <div className={styles.formCard}>
                <div className={styles.formGroup}>
                  <input type="email" id="email" name="email" placeholder="Email address" />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.formCard}>
                <div className={styles.formGroup}>
                  <input type="tel" id="phone" name="phone" placeholder="Phone (e.g. +91 73586 965)" />
                </div>
              </div>

              <div className={`${styles.formCard} ${styles.formCardFull}`}>
                <div className={styles.formGroup}>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you? Tell us about your project..."
                  ></textarea>
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>
              </div>

              <div className={`${styles.submitWrapper} ${styles.formCardFull}`}>
                <button className={styles.ctaBtn} type="submit">
                  START A PROJECT
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                {successMessage && (
                  <div className="form-success show" role="status">
                    {successMessage}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
