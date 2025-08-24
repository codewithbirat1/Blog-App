"use client";
import React, { useState } from "react";
import styles from "./auth-link.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  //tempory
  const status = "authenticated";
  return (
    <>
      {status === "authenticated" ? (
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
          <Link href="/homepage" onClick={() => setOpen(false)}>
            Homepage
          </Link>
          <Link href="contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link href="/About" onClick={() => setOpen(false)}>
            About
          </Link>
          {status === "notauthenticated" ? (
            <Link href="/login" className={styles.login} onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/write" onClick={() => setOpen(false)}>Write</Link>
              <span className={styles.link} onClick={() => setOpen(false)}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
