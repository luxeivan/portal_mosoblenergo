import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import "./App.css";
import HeaderWidget from "../widgets/HeaderWidget/HeaderWidget";
import AuthPage from "../pages/AuthPage/AuthPage";

const App = () => {
  return (
    <>
      <HeaderWidget />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
