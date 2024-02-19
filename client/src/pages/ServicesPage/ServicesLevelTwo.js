import React from "react";
import { Helmet } from "react-helmet";
import { Card } from "antd";
import { Link } from "react-router-dom";
import styles from "./ServicesLevelTwo.module.css";

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      <Helmet>
        <title>Услуги</title>
      </Helmet>
      <div className={styles.servicesTitleContainer}>
        <h1 className={styles.servicesTitle}>Каталог услуг МосОблЭнерго</h1>
      </div>
      <div className={styles.servicesCardsContainer}>
        <Link to="/services/1" className={styles.serviceLink}>
          <Card
            className={styles.serviceCard}
            // title="Услуги технологического присоединения"
          >
            <h2>Услуги технологического присоединения</h2>
            <p>
              Приказ Минзнерго от 15.04.2014 Nº 186 (ред. от 07.07.2021 Nº 541)
            </p>
          </Card>
        </Link>
        <Link to="/services/2" className={styles.serviceLink}>
          <Card
            className={styles.serviceCard}
            title="Коммерчиские услуги"
          ></Card>
        </Link>
        <Link to="/services/3" className={styles.serviceLink}>
          <Card
            className={styles.serviceCard}
            title="Учёт электрической энергии"
          >
            <p>
              Приказ Минзнерго от 15.04.2014 Nº 186 (ред. от 07.07.2021 Nº 541)
            </p>
          </Card>
        </Link>
        <Link to="/services/4" className={styles.serviceLink}>
          <Card className={styles.serviceCard} title="Сервисные услуги"></Card>
        </Link>
      </div>
    </div>
  );
}
