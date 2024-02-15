import React from "react";
import { Form, Input, Checkbox } from "antd";
import CustomButton from "../CustomButton/CustomButton";
const CustomForm = ({ formConfig, onFinish, onFinishFailed, ...props }) => {
  return (
    <Form
      {...formConfig.layout}
      initialValues={formConfig.initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {formConfig.fields.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          name={field.name}
          rules={field.rules}
        >
          {field.type === "password" ? <Input.Password /> : <Input />}
        </Form.Item>
      ))}

      {formConfig.remember && (
        <Form.Item
          name="remember"
          valuePropName="checked"
          {...formConfig.remember.layout}
        >
          <Checkbox>{formConfig.remember.label}</Checkbox>
        </Form.Item>
      )}

      <Form.Item {...formConfig.submitButton.layout}>
        <CustomButton type="primary" htmlType="submit">
          {formConfig.submitButton.label}
        </CustomButton>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
