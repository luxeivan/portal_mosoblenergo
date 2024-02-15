import React from "react";
import { Button as AntButton } from "antd";

const CustomButton = ({ children, ...props }) => {
  return <AntButton {...props}>{children}</AntButton>;
};

export default CustomButton;
