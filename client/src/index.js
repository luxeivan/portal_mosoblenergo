import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./app/reportWebVitals";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider
    theme={{
      components: {
        Layout: {
          headerBg: "inherit",
        },
      },
    }}
  >
    <App />
  </ConfigProvider>
);

reportWebVitals();
