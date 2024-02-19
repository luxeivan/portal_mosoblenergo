// import React from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { Card } from "antd";
// import styles from "./ServicesLevelThree.module.css";

// const serviceDetailsData = {
//   1: {
//     title: "Услуги технологического присоединения",
//     content: "Приказ Минэнерго от 15.04.2014 № 186 (ред. от 07.07.2021 № 541)",
//     subServices: [
//       { title: "Физические лица" },
//       { title: "Юридические лица" },
//       { title: "Индивидуальные предприниматели" },
//       { title: "Энергосбытовая организация" },
//     ],
//   },
//   2: {
//     title: "Коммерчиские услуги",
//     subServices: [
//       { title: "Ремонт, техническое и оперативное обслуживание" },
//       { title: "Услуги аренды" },
//       { title: "Обслуживание приборов учёта" },
//       {
//         title: "Дополнительные услуги в рамках технологического присоединения",
//       },
//       { title: "Освобождение земельного участка от электрических сетей" },
//     ],
//   },
//   3: {
//     title: "Учёт электрической энергии",
//     content:
//       "Приказ Минзнерго от 15.04.2014 Nº 186 (ред. от 07.07.2021 Nº 541)",
//     subServices: [
//       { title: "Физические лица" },
//       { title: "Юридические лица" },
//       { title: "Индивидуальные предприниматели" },
//       { title: "Сетевые организации" },
//       { title: "Энергосбытовая организация" },
//     ],
//   },
//   4: {
//     title: "Сервисные услуги",
//     subServices: [
//       { title: "Актуальная инфомрация профиля" },
//       { title: "Подписка на информационные сообщения" },
//       { title: "И т.д" },
//     ],
//   },
// };

// const ServiceDetails = () => {
//   const { serviceId } = useParams();
//   const navigate = useNavigate();
//   const service = serviceDetailsData[serviceId];

//   const handleSubServiceClick = (subServiceId) => {
//     navigate(`/services/${serviceId}/${subServiceId}`);
//   };

//   if (!service) {
//     return <div className={styles.notFound}>Услуга не найдена</div>;
//   }

//   return (
//     <div className={styles.detailsPage}>
//       <h2 className={styles.serviceTitle}>{service.title}</h2>
//       <p className={styles.serviceContent}>{service.content}</p>
//       <div className={styles.subServicesContainer}>
//         {service.subServices &&
//           service.subServices.map((subService, index) => (
//             <Card
//               onClick={() => handleSubServiceClick(index + 1)}
//               className={styles.subServiceCard}
//               key={index}
//             >
//               <h2>{subService.title}</h2>
//               <p>{subService.content}</p>
//             </Card>
//           ))}
//       </div>
//       <Link to="/services" className={styles.backLink}>
//         Вернуться к списку услуг
//       </Link>
//     </div>
//   );
// };

// export default ServiceDetails;

import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card } from "antd";
import styles from "./ServicesLevelThree.module.css";

const serviceDetailsData = {
  "uslugi-tehnologicheskogo-prisoedineniyas": {
    title: "Услуги технологического присоединения",
    content: "Приказ Минэнерго от 15.04.2014 № 186 (ред. от 07.07.2021 № 541)",
    subServices: [
      { title: "Физические лица" },
      { title: "Юридические лица" },
      { title: "Индивидуальные предприниматели" },
      { title: "Энергосбытовая организация" },
    ],
  },
  "kommercheskie-uslugis": {
    title: "Коммерчиские услуги",
    subServices: [
      { title: "Ремонт, техническое и оперативное обслуживание" },
      { title: "Услуги аренды" },
      { title: "Обслуживание приборов учёта" },
      {
        title: "Дополнительные услуги в рамках технологического присоединения",
      },
      { title: "Освобождение земельного участка от электрических сетей" },
    ],
  },
  "uchet-elektricheskoj-energiis": {
    title: "Учёт электрической энергии",
    content:
      "Приказ Минзнерго от 15.04.2014 Nº 186 (ред. от 07.07.2021 Nº 541)",
    subServices: [
      { title: "Физические лица" },
      { title: "Юридические лица" },
      { title: "Индивидуальные предприниматели" },
      { title: "Сетевые организации" },
      { title: "Энергосбытовая организация" },
    ],
  },
  "servisnye-uslugis": {
    title: "Сервисные услуги",
    subServices: [
      { title: "Актуальная инфомрация профиля" },
      { title: "Подписка на информационные сообщения" },
      { title: "И т.д" },
    ],
  },
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceDetailsData[serviceId];

  const handleSubServiceClick = (subServiceId) => {
    navigate(`/services/${serviceId}/${subServiceId}`);
  };

  if (!service) {
    return <div className={styles.notFound}>Услуга не найдена</div>;
  }

  return (
    <div className={styles.detailsPage}>
      <h2 className={styles.serviceTitle}>{service.title}</h2>
      <p className={styles.serviceContent}>{service.content}</p>
      <div className={styles.subServicesContainer}>
        {service.subServices &&
          service.subServices.map((subService, index) => (
            <Card
              onClick={() => handleSubServiceClick(index + 1)}
              className={styles.subServiceCard}
              key={index}
            >
              <h2>{subService.title}</h2>
              <p>{subService.content}</p>
            </Card>
          ))}
      </div>
      <Link to="/services" className={styles.backLink}>
        Вернуться к списку услуг
      </Link>
    </div>
  );
};

export default ServiceDetails;
