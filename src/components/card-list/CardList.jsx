import React from "react";
import Card from "../card/Card";
import styles from "./cardlist.module.css";
import Pagination from "../pagination/Pagination";
const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
