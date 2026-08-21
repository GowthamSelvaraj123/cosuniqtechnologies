"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <img src="/assets/logo.png" alt="" width="42" height="42" />
              <div className="brand-text">
                <strong>COSUNIQ</strong>
                <span>Technologies</span>
              </div>
            </Link>
            <p>Creative technology studio — software, CRM, commerce, web, brand &amp; video.</p>
          </div>
          <div className="footer-col">
            <h4>Studio</h4>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Work</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <Link href="/services">What we do</Link>
            <Link href="/services#software">Software</Link>
            <Link href="/services#branding">Branding</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello@cosuniq.tech">hello@cosuniq.tech</a>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <Link href="/contact">Udumalpet / Coimbatore</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© <span>{year}</span> Cosuniq Technologies</span>
          <span className="spark-row"><span className="spark spark--sm"></span> Built with intent</span>
        </div>
      </div>
    </footer>
  );
}
