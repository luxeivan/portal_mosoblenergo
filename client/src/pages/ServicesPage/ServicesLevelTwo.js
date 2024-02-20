import React from "react";
import { Helmet } from "react-helmet";
import { Card } from "antd";
import { Link } from "react-router-dom";
import styles from "./ServicesLevelTwo.module.css";
import ServiceCard from "../../components/Services/Card/ServiceCard";

const cadrArr = [
  {
    title: "Услуги технологического присоединения",
    description: "Приказ Минзнерго от 15.04.2014 Nº 186 (ред. от 07.07.2021 Nº 541)",
    url: "/services/uslugi-tehnologicheskogo-prisoedineniyas"
  },
  {
    title: "Коммерческие услуги",
    description: false,
    url: "/services/kommercheskie-uslugis"
  },
  {
    title: "Учёт электрической энергии",
    description: "Приказ Минзнерго от 15.04.2014 Nº 186 (ред. от 07.07.2021 Nº 541)",
    url: "/services/uchet-elektricheskoj-energiis"
  },
  {
    title: "Сервисные услуги",
    description: false,
    url: "/services/servisnye-uslugis"
  },
]

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      <Helmet>
        <title>Услуги</title>
      </Helmet>
      <div className={styles.servicesContainer}>
        <h1 className={styles.servicesTitle}>Каталог услуг МосОблЭнерго</h1>
        <div className={styles.servicesCardsContainer}>
          {cadrArr.map((item, index) =>
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              url={item.url}
            />
          )}
        </div>
      </div>
    </div>
  );
}
