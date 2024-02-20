import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "antd";
import styles from "./ServicesLevelFour.module.css";
import axios from "axios";

const apiUrls = {
  "uslugi-tehnologicheskogo-prisoedineniyas":
    "http://5.35.9.42:1337/api/uslugi-tehnologicheskogo-prisoedineniyas",
  "kommercheskie-uslugis": "http://5.35.9.42:1337/api/kommercheskie-uslugis",
  "uchet-elektricheskoj-energiis":
    "http://5.35.9.42:1337/api/uchet-elektricheskoj-energiis",
  "servisnye-uslugis": "http://5.35.9.42:1337/api/servisnye-uslugis",
};

const ServicesLevelFour = () => {
  const { serviceId, subServiceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      const apiUrl = `${apiUrls[serviceId]}?type=${encodeURIComponent(
        subServiceId
      )}`;
      try {
        const response = await axios.get(apiUrl);
        setServiceDetails(response.data.data);
      } catch (error) {
        console.error("Ошибка при получении данных услуги:", error);
      }
    };

    fetchServiceDetails();
  }, [serviceId, subServiceId]);

  if (!serviceDetails) {
    return (
      <div className={styles.notFound}>Информация об услуге не найдена.</div>
    );
  }

  return (
    <div>
      {serviceDetails.map((service) => (
        <h2>{service.attributes.name}</h2>
      ))}
    </div>
  );
};

export default ServicesLevelFour;

// import React, { useState, useEffect } from "react";
// import { useParams, Link, useSearchParams } from "react-router-dom";
// import { Card } from "antd";
// import styles from "./ServicesLevelFour.module.css";
// import axios from "axios";

// const apiUrls = {
//   "uslugi-tehnologicheskogo-prisoedineniyas":
//     "http://5.35.9.42:1337/api/uslugi-tehnologicheskogo-prisoedineniyas",
//   "kommercheskie-uslugis": "http://5.35.9.42:1337/api/kommercheskie-uslugis",
//   "uchet-elektricheskoj-energiis":
//     "http://5.35.9.42:1337/api/uchet-elektricheskoj-energiis",
//   "servisnye-uslugis": "http://5.35.9.42:1337/api/servisnye-uslugis",
// };

// const ServicesLevelFour = () => {
//   const { serviceId } = useParams();
//   const [searchParams] = useSearchParams();
//   const [serviceDetails, setServiceDetails] = useState(null);
//   const type = searchParams.get('type');

//   useEffect(() => {
//     const apiUrl = apiUrls[serviceId];
//     const fetchServiceDetails = async () => {
//       const query = type ? `?filters[type][$eq]=${encodeURIComponent(type)}` : '';
//       try {
//         const response = await axios.get(`${apiUrl}${query}`);
//         setServiceDetails(response.data.data);
//       } catch (error) {
//         console.error("Ошибка при получении данных услуги:", error);
//       }
//     };

//     fetchServiceDetails();
//   }, [serviceId, type]);

//   if (!serviceDetails) {
//     return <div className={styles.notFound}>Информация об услуге не найдена.</div>;
//   }

//   return (
//     <div className={styles.detailsPage}>
//       {serviceDetails.map((service, index) => (
//         <Card className={styles.serviceCard} key={index}>
//           <h2 className={styles.serviceTitle}>{service.attributes.name}</h2>
//           <div className={styles.serviceContent}>
//             {service.attributes.description.map((desc, descIndex) => (
//               <p key={descIndex}>{desc.children.map(child => child.text).join(' ')}</p>
//             ))}
//           </div>
//         </Card>
//       ))}
//       <Link to="/services" className={styles.backLink}>
//         Вернуться к списку услуг
//       </Link>
//     </div>
//   );
// };

// export default ServicesLevelFour;

