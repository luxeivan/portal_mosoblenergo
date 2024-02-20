import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "antd";
import styles from "./ServicesLevelFour.module.css";
import axios from "axios";

const apiUrls = {
  "uslugi-tehnologicheskogo-prisoedineniyas": "http://5.35.9.42:1337/api/uslugi-tehnologicheskogo-prisoedineniyas",
  "kommercheskie-uslugis": "http://5.35.9.42:1337/api/kommercheskie-uslugis",
  "uchet-elektricheskoj-energiis": "http://5.35.9.42:1337/api/uchet-elektricheskoj-energiis",
  "servisnye-uslugis": "http://5.35.9.42:1337/api/servisnye-uslugis",
};

const ServicesLevelFour = () => {
  const { serviceId, subServiceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);
  useEffect(() => {
    const fetchServiceDetails = async () => {
      const apiUrl = apiUrls[serviceId];
      console.log(`Запрос к API: ${apiUrl}?filters[type][$eq]=${subServiceId}`);
      try {
        const response = await axios.get(`${apiUrl}?filters[type][$eq]=${subServiceId}`);
        console.log('Ответ от API:', response.data);
        if (response.data && response.data.data && response.data.data.length > 0) {
          const details = response.data.data;
          setServiceDetails(details);
        } else {
          console.error('Нет данных для заданного типа услуги');
        }
      } catch (error) {
        console.error("Ошибка при получении данных услуги:", error);
      }
    };

    if (subServiceId) {
      fetchServiceDetails();
    }
  }, [serviceId, subServiceId]);

  if (!serviceDetails) {
    return <div className={styles.notFound}>Информация об услуге не найдена.</div>;
  }

  return (

    <div className={styles.detailsPage}>
    {serviceDetails.map((service) => (
      <Card className={styles.serviceCard} key={service.id}>
        <h2 className={styles.serviceTitle}>{service.attributes.name}</h2>
        <div className={styles.serviceDescription}>
          {service.attributes.description.map((desc, index) => (
            <p key={index}>{desc.children.map(child => child.text).join(' ')}</p>
          ))}
        </div>
      </Card>
    ))}
    <Link to="/services" className={styles.backLink}>
      Вернуться к списку услуг
    </Link>
  </div>
  );
};

export default ServicesLevelFour;
