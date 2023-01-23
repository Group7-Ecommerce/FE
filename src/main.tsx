import React from "react";
import ReactDOM from "react-dom/client";

import Register from "./pages/Register";

import App from "./routes";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
