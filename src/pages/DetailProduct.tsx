import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";

const DetailProduct = () => {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center bg-base-200">
        <div className="flex h-full w-full flex-wrap items-center justify-between p-8 -mt-40">
          <div className="card w-2/5 gap-4 bg-transparent bg-white p-3 lg:h-2/5 lg:card-side justify-center -mt-44">
            <img
              src="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/7/13/6156d810-76f5-478c-a55b-9423c1395fea.jpg"
              className="w-[40vh] h-[40vh] -mt-10"
            />
          </div>
          <div className="card-body w-3/5 lg:h-2/5 bg-white -mt-60 rounded-[2vh]">
            <div className="flex flex-col">
              <p className="text-3xl font-bold text-black justify-start text-start">
                Sony Vaio 14' Inch
              </p>
              <p className="text-lg font-medium text-black mt-2">RP7.500.000</p>
              <p className="text-lg font-medium text-black mt-2">
                Alamat Penjual: Jl.Diponerogo no 6 Jakarta
              </p>
              <p className="text-lg font-medium text-black mt-2">Qty: 5pcs</p>
              <p className="text-lg font-medium text-black mt-2">
                Nama Penjual: Hasanuddin
              </p>
              
              <p className="text-lg font-medium text-black mt-2">
              Deskripsi : STEP UP TO THE POWER OF 2ND GENERATION RTX WITH GEFORCE RTX 3050 LAPTOP FAMILY
              </p>
            </div>
            <div className="justify-center text-end mt-9">
              <Button className="btn w-[20vh] bg-white border-[#03AC0E] text-black mt-10 " label="Checkout" />
              </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailProduct;
