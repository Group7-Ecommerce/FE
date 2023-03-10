import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios, { AxiosHeaders } from "axios";


import Homepage from "../pages/Homepage";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Beranda from "../pages/Beranda";
import DetailProduct from "../pages/DetailProduct";
import Profil from "../pages/ProfilUser";
import Checkout from "../pages/Checkout";
import Keranjang from "../pages/Keranjang";
import PesananSaya from "../pages/PesananSaya";
import Cardakun from "../components/Cardakun";
import CardPost from "../components/CardPost";

axios.defaults.baseURL = "http://34.69.18.136/"

function App() {
  const [cookie, , removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  axios.interceptors.request.use(function (config) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${checkToken}`;
    return config;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function ( error ) {
      const { data } = error.response;
      if (
        data === "Missing" || [401, 403].includes(data.code)
      ) {
        removeCookie("token");
      }
      return Promise.reject(error);
    }
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: checkToken ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: checkToken ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "/posts/:id_post",
      element: <DetailProduct />,
    },
    {
      path: "/profil",
      element: checkToken ? <Profil /> : <Navigate to="/login" />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/keranjang",
      element: checkToken ? <Keranjang /> : <Navigate to="/checkout "/>
    },
    {
      path: "/pesananSaya",
      element: checkToken ? <PesananSaya /> : <Navigate to="/profil"/>
    },
    {
      path: "/cardakun",
      element: checkToken ? <Cardakun/> : <Navigate to="/profile"/>
    },
    {
      path: "/cardpost",
      element: checkToken ? <CardPost/> : <Navigate to="/profile"/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}


export default App;
