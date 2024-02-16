import React from "react";
import { Helmet } from "react-helmet";
import { Card } from "antd";
import styles from "./Services.module.css";

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
        <Card
          className={styles.serviceCard}
          title="Услуги технологического присоединения"
        >
          <p>
            Приказ Минзнерго от 15.04.2014 Nº 186 (ред. от 07.07.2021 Nº 541)
          </p>
        </Card>
        <Card className={styles.serviceCard} title="Коммерчиские услуги"></Card>
        <Card className={styles.serviceCard} title="Учёт электрической энергии">
          <p>
            Приказ Минзнерго от 15.04.2014 Nº 186 (ред. от 07.07.2021 Nº 541)
          </p>
        </Card>
        <Card className={styles.serviceCard} title="Сервисные услуги"></Card>
      </div>
    </div>
  );
}
