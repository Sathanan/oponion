"use client"; // Add this line at the top of the page.js

import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

useEffect(() => {
  const handleMouseMove = (e) => {
    const blob = document.querySelector(`.${styles.gradientCursor}`);
    if (blob) {
      blob.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    }
    
    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        blob.style.width = '450px';
        blob.style.height = '450px';
      });
      
      button.addEventListener('mouseleave', () => {
        blob.style.width = '650px';
        blob.style.height = '650px';
      });
    });
  };
  
  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("oponion.survey@gmail.com");
    setTimeout(() => setSubmitted(false), 3000);
    setTimeout(() => {
      setSubmitted(false);
      setAnimationActive(false);
    }, 4000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.gradientCursor}></div>
      <Head>
        <title>OPONION - Coming Soon</title>
        <meta name="description" content="OPONION - No more survey tears" />
        <meta name="description" content="OPONION - No more survey tears" />
        <meta name="robots" content="index, follow" />
        {" oponion"}
        <meta property="og:title" content="OPONION - Coming Soon" />
        <meta
          property="og:description"
          content="OPONION - No more survey tears"
        />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OPONION - Coming Soon" />
        <meta
          name="twitter:description"
          content="OPONION - No more survey tears"
        />
        <meta name="twitter:image" content="/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.spotlight}></div>

        <div className={styles.content}>
          <div className={styles.logo}>
            <Image
              src="/logo.png"
              alt="OPONION Logo"
              width={160}
              height={180}
            />
            <h1 className={styles.title}>OPONION</h1>
            <p className={styles.tagline}>No more survey tears</p>
          </div>

          <div className={styles.newsletter}>
            <h2>Coming soon!</h2>
            <p>For more information, subscribe to our newsletter.</p>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your E-mail address"
                  required
                />
                <button type="submit">Subscribe</button>
              </div>
              {submitted && (
                <div className={styles.successAnimation}>
                  <div className={styles.checkmarkContainer}>
                    <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle className={styles.checkmarkCircle} cx="26" cy="26" r="25" fill="none" />
                      <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                  </div>
                  <p className={styles.successMessage}>Thank you for your interest!</p>
                </div>
              )}
            </form>
          </div>

          <div className={styles.social}>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" className={styles.socialIcon}>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className={styles.socialIcon}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" className={styles.socialIcon}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
