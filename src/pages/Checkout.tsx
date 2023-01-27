import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";

import "../styles/index.css"

const Checkout = () => {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center bg-[#DCDCDC]">
        <div className="flex flex-row gap-4 min-w-[70%] mt-10">
          <div className="card w-full h-[9vh] bg-base-100 shadow-lg">
            <div className="card-body">
              <p className="text-[#03AC0E]">Alamat pengirim</p>
              <p className="justify-center text-center -mt-7">
                Jl Diponerogo no 6 Jakarta
              </p>
              <div className="justify-end text-end -mt-10">
                <Button
                  className="btn w-[18vh] text-black bg-transparent border-[#03AC0E]"
                  label="Change address"
                />
              </div>
            </div>
            <div className="card w-full h-[40vh] bg-base-100 shadow-lg justify-between text-center">
              <div className="card-body flex flex-row">
                <img
                  src="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/7/13/6156d810-76f5-478c-a55b-9423c1395fea.jpg"
                  className="w-[10vh]"
                />
                <p className="mt-10 text-xl font-bold">Asus</p>
                <p className="mt-10">Qty:1 </p>
                <p className="mt-10">Rp.12.000.000</p>
              </div>
            </div>
            <div className="card bg-[#F2F2F2] mt-5">
              <div className="card-body flex flex-col gap-3 justify-between">
                <p className="text-start">Total Ongkos <span className="text-end">Rp.25.000</span></p>
                <p className="text-start">Harga Barang <span className="text-end">Rp.12.000.000</span></p>
                <p className="text-start">Total Pembayaran<span className="text-end text-xl text-[#03AC0E]">Rp.12.025.000</span></p>
                <div className="justify-end text-end -mt-10">
                <Button
                  className="btn w-[18vh] text-white bg-[#03AC0E] mt-10"
                  label="Buat pesanan"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
