import React from 'react'
import Image from 'next/image'
import styles from "./login.module.css"
const Login = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>
                <div className={styles.googleIcon}>G</div>
                Sign in with Google
            </div>
            <div className={styles.socialButton}>
                <Image src="/github.webp" alt="GitHub" width={20} height={20} className={styles.icon} />
                Sign in with GitHub
            </div>
            <div className={styles.socialButton}>
                <Image src="/facebook.png" alt="Facebook" width={20} height={20} className={styles.icon} />
                Sign in with Facebook
            </div>
        </div>
    </div>
  )
}

export default Login