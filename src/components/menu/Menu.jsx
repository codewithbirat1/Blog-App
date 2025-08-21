import React from "react";
import Image from "next/image";
import styles from "@/components/menu/menu.module.css";
import Link from "next/link";
const Menu = () => {
  return (
    <div className={styles.container}>
  <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTite}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>10.23.2022</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Travel
            </span>
            <h3 className={styles.postTite}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>10.23.2022</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Travel
            </span>
            <h3 className={styles.postTite}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>10.23.2022</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Travel
            </span>
            <h3 className={styles.postTite}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>10.23.2022</span>
            </div>
          </div>
        </Link>
      </div>





      <h2 className={styles.subtitle}>{"Choosen by editor"}</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt=" " className={styles.image} fill></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTite}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>10.23.2022</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt=" " className={styles.image} fill></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Travel
            </span>
            <h3 className={styles.postTite}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>10.23.2022</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt=" " className={styles.image} fill></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Travel
            </span>
            <h3 className={styles.postTite}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>10.23.2022</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt=" " className={styles.image} fill></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Travel
            </span>
            <h3 className={styles.postTite}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>10.23.2022</span>
            </div>
          </div>
        </Link>
 
      </div>
    </div>
  );
};

export default Menu;
