// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Card } from "antd";
// import styles from "./ServicesLevelFour.module.css";
// import axios from "axios";

// const apiUrls = {
//   "uslugi-tehnologicheskogo-prisoedineniyas": "http://5.35.9.42:1337/api/uslugi-tehnologicheskogo-prisoedineniyas",
//   "kommercheskie-uslugis": "http://5.35.9.42:1337/api/kommercheskie-uslugis",
//   "uchet-elektricheskoj-energiis": "http://5.35.9.42:1337/api/uchet-elektricheskoj-energiis",
//   "servisnye-uslugis": "http://5.35.9.42:1337/api/servisnye-uslugis",
// };

// const ServicesLevelFour = () => {
//   const { serviceId, subServiceId } = useParams();
//   const [serviceDetails, setServiceDetails] = useState(null);

//   useEffect(() => {
//     const fetchServiceDetails = async () => {
//       const apiUrl = apiUrls[serviceId];
//       try {
//         const response = await axios.get(apiUrl);
//         const services = response.data.data;
//         const detail = services.find((service) => service.id.toString() === subServiceId);
//         setServiceDetails(detail);
//       } catch (error) {
//         console.error("Ошибка при получении данных услуги:", error);
//       }
//     };

//     fetchServiceDetails();
//   }, [serviceId, subServiceId]);

//   if (!serviceDetails) {
//     return <div className={styles.notFound}>Информация об услуге не найдена.</div>;
//   }

//   return (
//     <div className={styles.detailsPage}>
//       <Card className={styles.serviceCard}>
//         <h2 className={styles.serviceTitle}>{serviceDetails.attributes.name}</h2>
//         <div className={styles.serviceContent}>
//           {serviceDetails.attributes.description.map((desc, index) => (
//             <React.Fragment key={index}>
//               {desc.children.map((child, childIndex) => (
//                 <p key={childIndex}>{child.text}</p>
//               ))}
//             </React.Fragment>
//           ))}
//         </div>
//       </Card>
//       <Link to="/services" className={styles.backLink}>
//         Вернуться к списку услуг
//       </Link>
//     </div>
//   );
// };

// export default ServicesLevelFour;

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
  const { serviceId, subServiceType } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      const apiUrl = apiUrls[serviceId];
      console.log(`Запрос к API: ${apiUrl}?filters[type][$eq]=${subServiceType}`);
      try {
        const response = await axios.get(`${apiUrl}?filters[type][$eq]=${subServiceType}`);
        console.log('Ответ от API:', response.data);
        if (response.data && response.data.data && response.data.data.length > 0) {
          const details = response.data.data[0]; 
          setServiceDetails(details); 
        } else {
          console.error('Нет данных для заданного типа услуги');
        }
      } catch (error) {
        console.error("Ошибка при получении данных услуги:", error);
      }
    };

    if (subServiceType) {
      fetchServiceDetails();
    }
  }, [serviceId, subServiceType]);

  if (!serviceDetails) {
    return <div className={styles.notFound}>Информация об услуге не найдена.</div>;
  }

  return (
    <div className={styles.detailsPage}>
      <Card className={styles.serviceCard}>
        <h2 className={styles.serviceTitle}>{serviceDetails.attributes.name}</h2>
        <div className={styles.serviceContent}>
          {serviceDetails.attributes.description.map((desc, index) => (
            <React.Fragment key={index}>
              {desc.children.map((child, childIndex) => (
                <p key={childIndex}>{child.text}</p>
              ))}
            </React.Fragment>
          ))}
        </div>
      </Card>
      <Link to="/services" className={styles.backLink}>
        Вернуться к списку услуг
      </Link>
    </div>
  );
};

export default ServicesLevelFour;