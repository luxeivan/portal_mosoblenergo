// import React from "react";
// import { Form, Input, Checkbox } from "antd";
// import CustomButton from "../CustomButton/CustomButton";
// const CustomForm = ({ formConfig, onFinish, onFinishFailed, ...props }) => {
//   return (
//     <Form
//       {...formConfig.layout}
//       initialValues={formConfig.initialValues}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       {formConfig.fields.map((field) => (
//         <Form.Item
//           key={field.name}
//           label={field.label}
//           name={field.name}
//           rules={field.rules}
//         >
//           {field.type === "password" ? <Input.Password /> : <Input />}
//         </Form.Item>
//       ))}

//       {formConfig.remember && (
//         <Form.Item
//           name="remember"
//           valuePropName="checked"
//           {...formConfig.remember.layout}
//         >
//           <Checkbox>{formConfig.remember.label}</Checkbox>
//         </Form.Item>
//       )}

//       <Form.Item {...formConfig.submitButton.layout} style={{textAlign:'right'}}>
//         <CustomButton type="primary" htmlType="submit">
//           {formConfig.submitButton.label}
//         </CustomButton>
//       </Form.Item>
//     </Form>
//   );
// };

// export default CustomForm;

import React, { useState, useEffect } from "react";
import { Form, Input, Checkbox } from "antd";
import CustomButton from "../CustomButton/CustomButton";
import mmGif from "./mm.gif";

const CustomForm = ({ formConfig, onFinish, onFinishFailed, ...props }) => {
  const [gifVisible, setGifVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    let timer;
    if (gifVisible) {
      timer = setTimeout(() => setGifVisible(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [gifVisible]);

  const handleRememberChange = (e) => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount + 1 === 30) {
      setGifVisible(true);
      setClickCount(0);
    }
  };

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
          <Checkbox onChange={handleRememberChange}>
            {formConfig.remember.label}
          </Checkbox>
        </Form.Item>
      )}

      <Form.Item
        {...formConfig.submitButton.layout}
        style={{ textAlign: "right" }}
      >
        <CustomButton type="primary" htmlType="submit">
          {formConfig.submitButton.label}
        </CustomButton>
        {gifVisible && (
          <img
            src={mmGif}
            alt="GIF"
            style={{
              display: "block",
              margin: "20px auto",
              maxWidth: "70%",
              border: "1px solid #ddd",
              padding: "5px",
            }}
          />
        )}
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
