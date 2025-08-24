import React from "react";
import styles from "./menu.module.css";

import { MenuPost } from "../menuPost/MenuPost";
import MenuCategories from "../menu-categories/MenuCategories";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
     <MenuPost withImage={false} />

      <h2 className={styles.subtitle}>Discover by topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>{"Choosen by editor"}</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
