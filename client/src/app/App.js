import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import "./App.css";
import HeaderWidget from "../components/HeaderWidget/HeaderWidget";
import AuthPage from "../pages/AuthPage/AuthPage";
import Services from "../pages/ServicesPage/ServicesLevelTwo";
import ServiceDetails from "../pages/ServicesPage/ServicesLevelThree/ServicesLevelThree";


const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <HeaderWidget />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path='/services' element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
