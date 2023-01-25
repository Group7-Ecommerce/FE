import React from "react";
import ReactDOM from "react-dom/client";

import App from "./routes";
import "./styles/index.css";
import DetailProduct from "./pages/DetailProduct";
import Cardpost from "./components/CardPost";
import ProfilUser from "./pages/ProfilUser";
import Homepage from "./pages/Homepage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
