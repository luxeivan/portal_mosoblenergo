import React,{useState} from "react";
import styles from "./HomePage.module.css";
import { Helmet } from "react-helmet";

export default function HomePage() {
  const [deg, setDeg] = useState(0)
  setInterval(() => {
    // if (deg === 360) return setDeg(prev => 0)
    // setDeg(prev => ++prev)
  }, 1000)
  return (
    <div className={styles.homePage}>
      <Helmet>
        <title>Главная страничка</title>
      </Helmet>
      <div></div>
    </div>
  );
}
