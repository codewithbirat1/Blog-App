import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./menu-post.module.css";
export const MenuPost = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt=" " className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Culture</span>
          <h3 className={styles.postTite}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jhon Doe - </span>
            <span className={styles.date}>10.23.2022</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt=" " className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>Food</span>
          <h3 className={styles.postTite}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jhon Doe - </span>
            <span className={styles.date}>10.23.2022</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt=" " className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Coding</span>
          <h3 className={styles.postTite}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jhon Doe - </span>
            <span className={styles.date}>10.23.2022</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt=" " className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Fashion</span>
          <h3 className={styles.postTite}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jhon Doe - </span>
            <span className={styles.date}>10.23.2022</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
