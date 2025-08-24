import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./catagorylist.module.css";
const CatagoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.CatagoryList}>
        <div className={styles.category}>
          <div className={styles.imagecon}>
            <Link href="/blog?style=cat" className={styles.link}>
            <Image src="/style.png" alt="" width={40} height={40} />
            <p className={styles.categorytext}>Style</p></Link>
          </div>
        </div>
        <div className={styles.category}>
           <div className={styles.imagecon}>
             <Link href="/blog?style=cat" className={styles.link}>
            <Image src="/food.png" alt="" width={40} height={40} />
            <p className={styles.categorytext}>Food</p></Link>
          </div></div>
        <div className={styles.category}>
           <div className={styles.imagecon}>
             <Link href="/blog?style=cat" className={styles.link}>
            <Image src="/fashion.png" alt="" width={40} height={40} />
            <p className={styles.categorytext}>Fashion</p></Link>
          </div></div>
        <div className={styles.category}> 
          <div className={styles.imagecon}>
             <Link href="/blog?style=cat" className={styles.link}>
            <Image src="/culture.png" alt="" width={40} height={40} />
            <p className={styles.categorytext}>Culture</p></Link>
          </div></div>
        <div className={styles.category}>
           <div className={styles.imagecon}>
             <Link href="/blog?style=cat" className={styles.link}>
            <Image src="/coding.png" alt="" width={40} height={40} />
            <p className={styles.categorytext}>Coding</p></Link>
          </div></div>
        <div className={styles.category}>
           <div className={styles.imagecon}>
             <Link href="/blog?style=cat" className={styles.link}>
            <Image src="/travel.png" alt="" width={40} height={40} />
            <p className={styles.categorytext}>Travel</p></Link>
          </div></div>
      </div>
    </div>
  );
};

export default CatagoryList;
