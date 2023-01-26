import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

import { useCookies } from "react-cookie";
import axios from "axios";

interface DetailProductProps {
  id: number;
  name: string;
  price: number;
  qty: number;
  description: string;
  image: string;
}

const DetailProduct = () => {
  const [cookie, setCookie] = useCookies();
  const [data, setDatas] = useState<DetailProductProps>();
  const { id } = useParams();

  function fetchData() {
  
    axios
      .get(`http://34.69.18.136/products/${id}`, {
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    
      <Layout>
        
      </Layout>
      ;
    
  );
};

export default DetailProduct;
