import React from "react"
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a className={styles.ex1} href="" target="_blank">
        <img className={styles.twitter} src="../Images/twitter.png" alt="Twitter" />
      </a>
      <a className={styles.ex4} href="" target="_blank">
        <img className={styles.linkedIn} src="../Images/linkedIn.png" alt="LinkedIn" />
      </a>
      <a className={styles.ex3} href="" target="_blank">
        <img className={styles.gitHub} src="../Images/github.png" alt="GitHub" />
      </a>
      <a className={styles.ex2} href="" target="_blank">
        <img className={styles.instagram} src="../Images/instagram.png" alt="Instagram" />
      </a>
    </footer>
  )
}

export default Footer
