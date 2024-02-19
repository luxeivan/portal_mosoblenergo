import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import style from "./App.module.css";
import HeaderWidget from "../components/HeaderWidget/HeaderWidget";
import AuthPage from "../pages/AuthPage/AuthPage";
import Services from "../pages/ServicesPage/ServicesLevelTwo";
import ServiceDetails from "../pages/ServicesPage/ServicesLevelThree/ServicesLevelThree";
import ServiceSubDetails from "../pages/ServicesPage/ServicesLevelThree/ServicesLevelFour/ServicesLevelFour";
import Footer from "../components/Footer/Footer";


const App = () => {
  return (
    <>
      <div className={style.app}>
        <BrowserRouter>
          <div className={style.header}>
            <HeaderWidget />
          </div>
          <div className={style.content}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path='/services' element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetails />} />
              <Route path="/services/:serviceId/:subServiceId" element={<ServiceSubDetails />} />
            </Routes>
          </div>
          <div className={style.footer}>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
