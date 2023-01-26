import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import CardCardProduct from "./CardCardProduct";
import Layout from "../components/Layout";

import { AiOutlineLeft } from "react-icons/ai";
import Button from "../components/Button";

interface CardType {
  id: number;
  qty: number;
  total_price: number;
  product_id: number;
  product_name: string;
  product_image: string;
}

const Keranjang = () => {
  const [data, setDatas] = useState<CardType[]>([]);
  const [cookie, setCookie] = useCookies();

  function fetchData() {
    axios
      .get("http://34.69.18.136/cart", {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        const result = res.data.data;
        setDatas(result);
        console.log("data product", res);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <Layout>
      {data.map((data) => {
        return (
          <CardCardProduct
            id={data.id}
            product_name={data.product_name}
            product_image={data.product_image}
            total_price={data.total_price}
            qty={data.qty}
            product_id={data.product_id}
          />
        );
      })}
    </Layout>
  );
};

export default Keranjang;