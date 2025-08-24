import React from 'react'
import Image from 'next/image'
import styles from './feature.module.css'
const Feature = () => {
  return (
    <div className={styles.container}>
  <h1 className={styles.title}>
    <b className={styles.bold}>Hey, Birat Dev here!</b> Discover my stories and creative ideas.
  </h1>
  <div className={styles.post}>
  <div className= {styles.imgContainer}>
   <Image src="/p1.jpeg" alt="" fill className={styles.image} />
  </div>
   <div className={styles.textContainer}>
    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet, consectetur error!</h1>
    <p className={styles.postDesc}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae molestiae vitae faceredebitis deleniti impedit reprehenderit quam consequuntur iste. Culpa alias eveniet in, nam eaque nobis iure maxime numquam, veritatis tenetur maiores, perspiciatis veniam architecto earum dolor possimus exercitationem.</p>
    <button className={styles.btn}>Read More</button>
   </div>
  </div>
      </div>
  )
}

export default Feature