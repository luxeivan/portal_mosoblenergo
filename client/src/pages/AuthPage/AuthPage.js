import React from "react";
import styles from "./AuthPage.module.css";
import { Helmet } from "react-helmet";
import FormLogin from "../../features/FormLogin/FormLogin";

export default function AuthPage() {
  return (
    <div className={styles.authPage}>
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <FormLogin />
    </div>
  );
}
