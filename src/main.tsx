import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/Navbar";

import App from "./routes";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);
