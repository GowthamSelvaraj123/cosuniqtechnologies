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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    const newErrors: FormErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!message.trim()) newErrors.message = "Project details are required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccessMessage("");
      return;
    }

    setErrors({});
    setSuccessMessage(`Thanks ${name.trim().split(" ")[0]}! We'll get back to you soon.`);
    e.currentTarget.reset();
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
            <div className="section-intro">
              <span className={styles.eyebrowWrap}>
                <span>+</span>
                GET IN TOUCH
              </span>
              <h2 className={styles.headline}>
                Connect<span className={styles.dot}>.</span> Collaborate<span className={styles.dot}>.</span> Build<span className={styles.dot}>.</span>
              </h2>
            </div>

            <div className={styles.infoCards}>
              {/* Card 1 */}
              <div className={styles.scatterCard}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>01</span>
                  <span className={styles.cardLabel}>Email</span>
                </div>
                <h3>Drop us a line.</h3>
                <a href="mailto:hello@cosuniq.tech">hello@cosuniq.tech</a>
              </div>

              {/* Card 2 */}
              <div className={styles.scatterCard}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>02</span>
                  <span className={styles.cardLabel}>Phone</span>
                </div>
                <h3>Let's talk directly.</h3>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>

              {/* Card 3 */}
              <div className={styles.scatterCard}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>03</span>
                  <span className={styles.cardLabel}>Office</span>
                </div>
                <h3>Visit us.</h3>
                <p>Udumalpet / Coimbatore region<br/>Tamil Nadu, India</p>
              </div>

              {/* Card 4 */}
              <div className={styles.scatterCard}>
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>04</span>
                  <span className={styles.cardLabel}>Hours</span>
                </div>
                <h3>When we're online.</h3>
                <p>Mon – Sat<br/>9:30 AM – 6:30 PM IST</p>
              </div>
            </div>

            <div className="socials" aria-label="Social links" style={{ marginTop: '3rem' }}>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="YouTube">yt</a>
              <a href="#" aria-label="X">x</a>
            </div>
          </div>

          <form className="reveal" id="contact-form" noValidate onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
              <div className={styles.formCard}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>
              </div>

              <div className={styles.formCard}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@company.com" />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.formCard}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone (Optional)</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 …" />
                </div>
              </div>

              <div className={styles.formCard}>
                <div className={styles.formGroup}>
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service">
                    <option value="">Select a service...</option>
                    <option>Custom Software & SaaS</option>
                    <option>CRM Solutions</option>
                    <option>E-commerce</option>
                    <option>Website Development</option>
                    <option>Brand Identity</option>
                    <option>Video Editing</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className={styles.formCard}>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Project details</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Goals, timeline, budget range…"
                  ></textarea>
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>
              </div>

              <div className={styles.submitWrapper}>
                <button className={styles.ctaBtn} type="submit">
                  SEND INQUIRY
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <p className="form-note">This demo form shows a success message locally.</p>
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
