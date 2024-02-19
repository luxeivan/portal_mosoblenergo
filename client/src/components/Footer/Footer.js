import React from 'react'
import styles from './Footer.module.css'


export default function Footer() {
  return (
    <div className={styles.container}>АО "Мособлэнерго", {new Date().getFullYear()} год</div>
  )
}
