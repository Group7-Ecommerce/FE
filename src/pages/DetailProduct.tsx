import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { SkeletonLoading } from "../components/Loading";
import { HomepageType } from "../utils/types/Homepage";
import { useTitle } from "../utils/hooks/hook";

import Button from "../components/Button";
import Layout from "../components/Layout";
import axios from "axios";

const DetailProduct = () => {
  const { id_product } = useParams();
  const [datas, setDatas] = useState<HomepageType>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData;
  }, []);

  const fetchData = async () => {
    axios
      .get(`product/${id_product}`)
      .then((response) => response.data)
      .then((datas) => {
        setDatas(datas);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <>
          <div className="w-full h-full flex flex-col items-center justify-center bg-base-200">
            <div className="flex h-full w-full flex-wrap items-center justify-between p-8 -mt-40">
              <div className="card w-2/5 gap-4 bg-transparent bg-white p-3 lg:h-2/5 lg:card-side justify-center -mt-44">
                <img
                  src={`http://34.69.18.136/products/${datas.image}`}
                  className="w-[40vh] h-[40vh] -mt-10"
                />
              </div>
              <div className="card-body w-3/5 lg:h-2/5 bg-white -mt-60 rounded-[2vh]">
                <div className="flex flex-col">
                  <p className="text-3xl font-bold text-black justify-start text-start">
                    {datas.nama_barang}
                  </p>
                  <p className="text-lg font-medium text-black mt-2">
                    {datas.price}
                  </p>
                  <p className="text-lg font-medium text-black mt-2">
                    {datas.qty}
                  </p>
                  <p className="text-lg font-medium text-black mt-2">
                    Deskripsi : {datas.description}
                  </p>
                </div>
                <div className="justify-center text-end mt-9">
                  <Button
                    className="btn w-[20vh] bg-white border-[#03AC0E] text-black mt-10 "
                    label="Checkout"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default DetailProduct;
