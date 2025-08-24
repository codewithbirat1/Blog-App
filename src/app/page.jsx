"use client" 
import Feature from "../components/feature/Feature";
import styles from "./homepage.module.css";
import Slider from "../components/slider/Slider";
import CatagoryList from "../components/catogory-list/CatagoryList";
import CardList from "../components/card-list/CardList";
import Menu from "../components/menu/Menu";
export default function Home() {
  return (
   <div>
    <div className={styles.container}>
      <Feature />
      <Slider />
      <CatagoryList />
      <div className={styles.content}>
        <Menu />
        <CardList />
      </div>
    </div>
  </div>
  );
}
