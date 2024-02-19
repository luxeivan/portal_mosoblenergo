import React from "react"
import { useParams } from "react-router-dom"
import styles from "./ServiceDetails.module.css";


const serviceDetailsData = {
  "1": {
    title: "Услуги технологического присоединения",
    content: "Приказ Минэнерго от 15.04.2014 № 186 (ред. от 07.07.2021 № 541)"
  },
  "2": {
    title: "Коммерческие услуги",
    content: "Описание коммерческих услуг..."
  },
  "3": {
    title: "Учёт электрической энергии",
    content: "Приказ Минэнерго от 15.04.2014 № 186 (ред. от 07.07.2021 № 541)..."
  },
  "4": {
    title: "Сервисные услуги",
    content: "Описание сервисных услуг..."
  }
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = serviceDetailsData[serviceId];

  if (!service) {
    return <div>Услуга не найдена</div>;
  }

  return (
    <div>
      <h2>{service.title}</h2>
      <p>{service.content}</p>
    </div>
  );
};

export default ServiceDetails;
