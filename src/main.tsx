import React from "react";
import ReactDOM from "react-dom/client";

import PesananSaya from "./pages/PesananSaya";

import App from "./routes";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PesananSaya />
  </React.StrictMode>
);
