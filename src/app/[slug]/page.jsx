import React from "react";
import Comments from "../../components/comments/Comments"
import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "../../components/menu/Menu";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt=" " fill className={styles.avtar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Jone Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt=" " fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis delectus earum distinctio vero aliquam provident
              vitae. Nihil earum voluptate dignissimos nemo excepturi nobis,
              eius animi!
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis delectus earum distinctio vero aliquam provident
              vitae. Nihil earum voluptate dignissimos nemo excepturi nobis,
              eius animi!
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis delectus earum distinctio vero aliquam provident
              vitae. Nihil earum voluptate dignissimos nemo excepturi nobis,
              eius animi!
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis delectus earum distinctio vero aliquam provident
              vitae. Nihil earum voluptate dignissimos nemo excepturi nobis,
              eius animi!
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
