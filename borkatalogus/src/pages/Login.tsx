import React, { useEffect, useState } from 'react'
import styles from '../Mcss/Login.module.css'

const Login = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} ${active ? styles.rightPanelActive : ''}`}>
        <div className={`${styles.formcontainer} ${styles.signupcontainer}`}>
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className={`${styles.formcontainer} ${styles.signincontainer}`}>
          <form action="#">
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
        <div className={styles.overlaycontainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlaypanel} ${styles.overlayleft}`}>
              <p>If you already have an account, you can log in here.</p>
              <button className={styles.ghost}  onClick={() => setActive(false)}>Sign In</button>
            </div>
            <div className={`${styles.overlaypanel} ${styles.overlayright}`}>
              <h2>Welcome to the Winelly!</h2>
              <p>If you don't have an account yet, you can sign up here.</p>
              <button className={styles.ghost}  onClick={() => setActive(true)}>Sign Up</button>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Login