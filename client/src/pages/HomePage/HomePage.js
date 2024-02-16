import React, { useState } from 'react'
import styles from './HomePage.module.css'


export default function HomePage() {
  const [deg, setDeg] = useState(0)
  setInterval(() => {
    // if (deg === 360) return setDeg(prev => 0)
    // setDeg(prev => ++prev)
  }, 1000)
  return (
    <div className={styles.homePage} style={{ backgroundImage: `linear-gradient(${deg}deg, rgba(0, 97, 175, 1) 0%, rgba(0, 143, 213, 1) 50%, rgba(0, 97, 175, 1) 100%)` }}>
      <p>
        Проверка
      </p>
      {/* <button className={styles.button}>Кнопка</button> */}
    </div>
  )
}
