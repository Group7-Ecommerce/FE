import React from "react";
import ReactDOM from "react-dom/client";

import Checkout from "./pages/Checkout";

import App from "./routes";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>
);
