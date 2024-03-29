
import React from "react";
import styles from "./AuthPage.module.css";
import { Helmet } from "react-helmet";
import FormLogin from "../../features/FormLogin/FormLogin";
import FormRegistration from "../../features/FormRegistration/FormRegistration";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function AuthPage() {
  return (
    <div className={styles.authPage}>
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Войти" key="1">
          <FormLogin />
        </TabPane>
        <TabPane tab="Регистрация" key="2">
          <FormRegistration />
        </TabPane>
      </Tabs>
    </div>
  );
}

