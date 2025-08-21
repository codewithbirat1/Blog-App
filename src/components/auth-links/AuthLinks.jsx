"use client";
import React, { useState } from "react";
import styles from "./auth-link.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  //tempory
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() =>setOpen(!open) }>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.reponsiveMenu}>
          <Link href="/homepage" >
            Homepage
          </Link>
          <Link href="contact" >
            Contact
          </Link>
          <Link href="/About" >
            About
          </Link>
          {status === "notauthenticated" ? (
            <Link href="/login" className={styles.login}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
