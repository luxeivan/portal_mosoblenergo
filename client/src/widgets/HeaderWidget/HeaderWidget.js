import React from "react";
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import styles from "./HeaderWidget.module.css";
import logo from "../../shared/asssets/logo.svg";
import CustomButton from "../../shared/ui/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

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

const HeaderWidget = () => {
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate("/auth"); 
  };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        background: "inherit",
      }}
    >
      <div className={styles.logo}>
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
      <CustomButton type="text" onClick={onLoginClick}>Войти</CustomButton>
    </Header>
  );
};

export default HeaderWidget;
