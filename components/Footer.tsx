"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.brandCol}>
            <Link className={styles.brand} href="/">
              <img src="/assets/logo.png" alt="Cosuniq Logo" className={styles.brandLogo} />
              <div className={styles.brandText}>
                <strong>COSUNIQ</strong>
                <span>Technologies</span>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              Creative technology studio — software, CRM, commerce, web, brand &amp; video.
            </p>
          </div>

          <div className={styles.linkCol}>
            <h4>Studio</h4>
            <div className={styles.linkList}>
              <Link href="/about">About</Link>
              <Link href="/portfolio">Work</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className={styles.linkCol}>
            <h4>Services</h4>
            <div className={styles.linkList}>
              <Link href="/services">What we do</Link>
              <Link href="/services#software">Software</Link>
              <Link href="/services#branding">Branding</Link>
            </div>
          </div>

          <div className={styles.linkCol}>
            <h4>Contact</h4>
            <div className={styles.linkList}>
              <a href="mailto:founder@cosuniq.in">founder@cosuniq.in</a>
              <a href="tel:+917358696546">+91 73586 96546</a>
              <span className={styles.addressText}>
                5/233c, Saratha Mani Layout,<br/>
                KVS Colony, Kanakampalayam,<br/>
                Udumalpet - 642126
              </span>
            </div>
          </div>

        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <span>© {year} Cosuniq Technologies. All rights reserved.</span>
          </div>
          <div className={styles.bottomRight}>
            <div className={styles.legalLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
