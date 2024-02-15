import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import "./App.css";
import HeaderWidget from "../widgets/HeaderWidget/HeaderWidget";

const App = () => {
  return (
    <>
      <HeaderWidget />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
