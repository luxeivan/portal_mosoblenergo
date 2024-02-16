<<<<<<< HEAD
import React, { useState } from 'react'
import styles from './HomePage.module.css'

=======
import React from "react";
import styles from "./HomePage.module.css";
import { Helmet } from "react-helmet";
>>>>>>> 43e6627d187e358a02bcab7e405e0ba54a0ab3fa

export default function HomePage() {
  const [deg, setDeg] = useState(0)
  setInterval(() => {
    // if (deg === 360) return setDeg(prev => 0)
    // setDeg(prev => ++prev)
  }, 1000)
  return (
<<<<<<< HEAD
    <div className={styles.homePage} style={{ backgroundImage: `linear-gradient(${deg}deg, rgba(0, 97, 175, 1) 0%, rgba(0, 143, 213, 1) 50%, rgba(0, 97, 175, 1) 100%)` }}>
      <p>
        Проверка
      </p>
      {/* <button className={styles.button}>Кнопка</button> */}
    </div>
  )
=======
    <div className={styles.homePage}>
      <Helmet>
        <title>Главная страничка</title>
      </Helmet>
      <div></div>
    </div>
  );
>>>>>>> 43e6627d187e358a02bcab7e405e0ba54a0ab3fa
}
