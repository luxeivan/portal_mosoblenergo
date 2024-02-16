import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import "./App.css";
import { Layout, Menu } from "antd";

import logo from "../shared/asssets/logo.svg";

const { Header } = Layout;
const items = [
  {
    key: "1",
    label: "Услуги",
  },
  {
    key: "2",
    label: "О Нас",
  },
  {
    key: "3",
    label: "Калькулятор мощности",
    
  },
];
const App = () => {
  return (
    <>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "inherit"
        }}
      >
        <div
          className="demo-logo"
        >
          <img src={logo} alt="Logo" />
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
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
