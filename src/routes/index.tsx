import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";

import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Beranda from "../pages/Beranda";
import DetailProduct from "../pages/DetailProduct";
import Profil from "../pages/Profil";
import Checkout from "../pages/Checkout";
import Keranjang from "../pages/Keranjang";
import PesananSaya from "../pages/PesananSaya";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/beranda",
    element: <Beranda />,
  },
  {
    path: "/posts/:id_post",
    element: <DetailProduct />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/keranjang",
    element: <Keranjang />,
  },
  {
    path: "/pesananSaya",
    element: <PesananSaya />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
