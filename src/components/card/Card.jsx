import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt=" " fill className={styles.image}></Image>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>11.03.2023 - </span>
            <span className={styles.category}>CULTURE</span>
        </div>
            <h1 className={styles.title}>Lorem pisicingsdfsd elit.fsdf grghs Illum, eius.</h1>
            <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus quibusdam maxime impedit expedita quo eius nihil quisquam assumenda rerum quasi commodi repudiandae tempore natus, accusantium rem! Id, ipsum eius?</p>
  <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
