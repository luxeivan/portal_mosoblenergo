import styles from "./Services.module.css";
import { Helmet } from "react-helmet";

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      <Helmet>
        <title>Услуги</title>
      </Helmet>
      <div>Тут сейчас будут услуги</div>
    </div>
  );
}
