import React from "react";
import Layout from "../components/Layout";
import { BsPencil } from "react-icons/bs";
import Button from "../components/Button";

const ProfilUser = () => {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center bg-base-200">
        <div className="flex h-full w-full flex-wrap items-center justify-between p-8 -mt-40">
          <div className="card w-2/5 gap-4 p-3 lg:h-2/5 lg:card-side justify-center -mt-44">
            <div className="card w-96 bg-white">
              <div className="overflow-x-auto w-full">
                <div className="flex items-center space-x-3 px-5 pt-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://cdn.discordapp.com/attachments/1066984251679059988/1067145147655139328/ellipse2x.png"
                        alt="Mardalena"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Mardalena</div>
                    <span className="gap-2 right-0 flex flex-row">
                      <button>
                        {" "}
                        <BsPencil className="" />{" "}
                      </button>
                      <button className="">Edit Profile</button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-body items-start text-left justify-start">
                <button className="">Upload Product</button>
                <button className="">Pesanan saya</button>
              </div>
            </div>
          </div>

          <div className="card-body w-3/5 lg:h-2/5  -mt-60 rounded-lg">
            <div className="flex flex-col">
              <div className="card card-side bg-base-100 shadow-xl">
                <div className="card w-96 bg-base-100">
                  <span className="flex-row px-3 pt-3">
                    <button>
                      {" "}
                      <BsPencil className="" />{" "}
                    </button>
                    <button className="pl-3">Edit Profile</button>
                  </span>

                  <figure>
                    <img src="https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103602/P_setting_xxx_0_90_end_185.png?web" />
                  </figure>
                </div>
                <div className="card-body">
                  <p>Toshiba 14 inch +</p>
                  <p>Harga: Rp12.500.000</p>
                  <p>Stock: 5 pcs</p>
                  <p>
                    Detail Product: Ini adalah laptop Toshiba keluaran 2021
                    dengan speak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilUser;
