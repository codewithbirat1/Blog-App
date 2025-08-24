"use client" 

import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthLinks from "../auth-links/AuthLinks";
import styles from "./navbar.module.css";
import ThemeToggle from "../theme-toggle/ThemeToggle";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Birat</span>
              <span className={styles.logoAccent}>Dev</span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className={styles.navigation}>
          <div className={styles.mainLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <Image src="/facebook.png" alt="facebook" width={25} height={25} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <Image src="/linkdin.png" alt="linkedin" width={25} height={25} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="GitHub">
              <Image src="/github.webp" alt="github" width={25} height={25} />
            </a>
          </div>

          {/* Theme Toggle & Auth */}
          <div className={styles.controls}>
            <ThemeToggle />
            <AuthLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
