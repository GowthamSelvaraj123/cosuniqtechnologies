"use client";

import Link from "next/link";
import { useState } from "react";
import InitReveal from "../../components/InitReveal";
import InnerBanner from "../../components/InnerBanner";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in name, email, and message.");
      return;
    }

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

      <section>
        <div className="container contact-layout">
          <div className="contact-info reveal">
            <h2>Get in touch</h2>
            <p>Prefer email or a call? Reach us directly — or use the form and we’ll route your inquiry.</p>

            <div className="info-list">
              <div className="info-item">
                <strong>Email</strong>
                <a href="mailto:hello@cosuniq.tech">hello@cosuniq.tech</a>
              </div>
              <div className="info-item">
                <strong>Phone</strong>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
              <div className="info-item">
                <strong>Office</strong>
                <p>Udumalpet / Coimbatore region, Tamil Nadu, India</p>
              </div>
              <div className="info-item">
                <strong>Hours</strong>
                <p>Mon – Sat · 9:30 AM – 6:30 PM IST</p>
              </div>
            </div>

            <div className="socials" aria-label="Social links">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="YouTube">yt</a>
              <a href="#" aria-label="X">x</a>
            </div>
          </div>

          <form className="contact-form reveal" id="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="field" type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="field" type="email" id="email" name="email" placeholder="you@company.com" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input className="field" type="tel" id="phone" name="phone" placeholder="+91 …" />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service</label>
                <select className="field" id="service" name="service">
                  <option value="">Select a service</option>
                  <option>Custom Software &amp; SaaS</option>
                  <option>CRM Solutions</option>
                  <option>E-commerce</option>
                  <option>Website Development</option>
                  <option>Brand Identity</option>
                  <option>Video Editing</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Project details</label>
              <textarea
                className="field"
                id="message"
                name="message"
                placeholder="Goals, timeline, budget range…"
                required
              ></textarea>
            </div>

            <button className="btn btn-primary" type="submit">Send Inquiry</button>
            <p className="form-note">This demo form shows a success message locally. Connect your email/API when you go live.</p>
            {successMessage && (
              <div className="form-success show" role="status">
                {successMessage}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
