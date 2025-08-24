import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <div className={styles.logo}>
        <Image
          className={styles.image}
          width={40}
          height={40}
          src="/p1.jpeg"
          alt=" "
        ></Image>
        <span className={styles.title}>Birat Dev</span>
      </div>
      <p className={styles.textDesc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt modi
        voluptatem consequatur quidem, facilis ipsa.
      </p>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/linkdin.png" alt="linkdin" width={24} height={24} />
        <Image src="/github.webp" alt="github" width={24} height={24} />
      </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
        <span className={styles.listTitle}>Links</span>
         <Link href="/">Homepage</Link>
         <Link href="/">Blog</Link>
         <Link href="/">About</Link>
         <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
        <span className={styles.listTitle}>Tags</span>
         <Link href="/">Styles</Link>
         <Link href="/">Travel</Link>
         <Link href="/">Food</Link>
         <Link href="/">Fashion</Link>
        </div>
        <div className={styles.list}>
        <span className={styles.listTitle}>Social</span>
         <Link href="/">Instagram</Link>
         <Link href="/">Facebook</Link>
         <Link href="/">Linkedin</Link>
         <Link href="/">X</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
