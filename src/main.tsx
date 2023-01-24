import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import App from "./routes";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>
);
