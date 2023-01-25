import React from "react";
import Layout from "../components/Layout";

const Keranjang = () => {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center bg-[#DCDCDC]">
        <div className="flex-none gap-4 min-w-[70%] mt-11">
          <div className="card w-full h-[8vh] bg-base-100 shadow-lg">
            <div className="card-body flex-row justify-between">
              <div>
              <p className="text-lg hover:text-[#03AC0E]">Semua</p>
              </div>
              <div>
              <p className="text-lg hover:text-[#03AC0E]">Belum bayar</p>
              </div>
              <div>
              <p className="text-lg hover:text-[#03AC0E]">Dikirim</p>
              </div>
              <div>
              <p className="text-lg hover:text-[#03AC0E]">Selesai</p>
              </div>
              <div>
              <p className="text-lg hover:text-[#03AC0E]">Terjual</p>
              </div>
              <div>
              <p className="text-lg hover:text-[#03AC0E]">Dibatalkan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Keranjang;
