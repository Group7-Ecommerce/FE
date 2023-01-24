import React from "react";
import ReactDOM from "react-dom/client";

import DetailProduct from "./pages/DetailProduct";

import App from "./routes";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DetailProduct />
  </React.StrictMode>
);
