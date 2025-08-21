"use client" 

import React from "react";
import Link from "next/link";
import Image from "next/image";
import AuthLinks from "../auth-links/AuthLinks";
import styles from "./navbar.module.css";
import ThemeToggle from "../theme-toggle/ThemeToggle";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/linkdin.png" alt="linkdin" width={24} height={24} />
        <Image src="/github.webp" alt="github" width={24} height={24} />
      </div>
      <div className={styles.logo}>BiratDev</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/homepage" className={styles.link}>Homepage</Link>
        <Link href="contact" className={styles.link}>Contact</Link>
        <Link href="/About" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
