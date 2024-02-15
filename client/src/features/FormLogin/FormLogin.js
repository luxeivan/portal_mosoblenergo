import React from "react";
import CustomForm from "../../shared/ui/CustomForm/CustomForm";
// import styles from "./FormLogin.module.css";

const formConfig = {
  layout: {
    name: "login_form",
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  },
  initialValues: {
    remember: true,
  },
  fields: [
    {
      type: "email",
      label: "Email",
      name: "username",
      rules: [{ required: true, message: "Пожалуйста, введите свою почту!" }],
    },
    {
      type: "password",
      label: "Пароль",
      name: "password",
      rules: [{ required: true, message: "Пожалуйста, введите свой пароль!" }],
    },
  ],
  remember: {
    label: "Запомнить меня",
    layout: { wrapperCol: { offset: 8, span: 16 } },
  },
  submitButton: {
    label: "Войти",
    layout: { wrapperCol: { offset: 8, span: 16 } },
  },
};

const onFinish = (values) => {
  console.log("Успешно:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Ошибка:", errorInfo);
};

const FormLogin = () => {
  return (
    <CustomForm
      formConfig={formConfig}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    />
  );
};

export default FormLogin;
