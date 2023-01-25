import React from "react";
import ReactDOM from "react-dom/client";

import App from "./routes";
import "./styles/index.css";
import DetailProduct from "./pages/DetailProduct";
import Cardpost from "./components/CardPost";
import ProfilUser from "./pages/ProfilUser";
import HalamanTransaksi from "./pages/HalamanTransaksi";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HalamanTransaksi />
  </React.StrictMode>
);
