import React from "react";
import Image from "next/image";
import styles from "./comment.module.css";
const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <div className={styles.title}></div>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Wite a Comment....."
            className={styles.input}
          />
          <button className={styles.btn}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.commenet}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}></Image>
            <div className={styles.userInfo}>
                <span className={styles.username}>Jhon Doe</span>
                <span className={styles.date}>01.03.2024</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque molestiae exercitationem odit magni fugit, minima error, hic iure delectus maiores cum sunt ratione minus voluptas itaque consectetur nobis, inventore libero!</p>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.commenet}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}></Image>
            <div className={styles.userInfo}>
                <span className={styles.username}>Jhon Doe</span>
                <span className={styles.date}>01.03.2024</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque molestiae exercitationem odit magni fugit, minima error, hic iure delectus maiores cum sunt ratione minus voluptas itaque consectetur nobis, inventore libero!</p>
        </div>
      </div>
           <div className={styles.comments}>
        <div className={styles.commenet}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}></Image>
            <div className={styles.userInfo}>
                <span className={styles.username}>Jhon Doe</span>
                <span className={styles.date}>01.03.2024</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque molestiae exercitationem odit magni fugit, minima error, hic iure delectus maiores cum sunt ratione minus voluptas itaque consectetur nobis, inventore libero!</p>
        </div>
      </div>
           <div className={styles.comments}>
        <div className={styles.commenet}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}></Image>
            <div className={styles.userInfo}>
                <span className={styles.username}>Jhon Doe</span>
                <span className={styles.date}>01.03.2024</span>
            </div>
          </div>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque molestiae exercitationem odit magni fugit, minima error, hic iure delectus maiores cum sunt ratione minus voluptas itaque consectetur nobis, inventore libero!</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
