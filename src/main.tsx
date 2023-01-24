import React from "react";
import ReactDOM from "react-dom/client";

import Register from "./pages/Auth/Register";
import Footer from "./components/Footer";
import "./styles/index.css";
import DetailProduct from "./pages/DetailProduct";
import Cardpost from "./components/CardPost";
import ProfilUser from "./pages/ProfilUser";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProfilUser />
  </React.StrictMode>
);
