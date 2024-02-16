import styles from "./HomePage.module.css";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <Helmet>
        <title>Главная страничка</title>
      </Helmet>
      <div></div>
    </div>
  );
}
