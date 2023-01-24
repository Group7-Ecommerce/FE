import React from "react";
import Layout from "../components/Layout";
import { AiOutlineLeft } from "react-icons/ai";
import Button from "../components/Button";

const Keranjang = () => {
  return (
    <Layout>
      <button className="pb-10 w-[10vh]">
        {" "}
        <AiOutlineLeft className="" />{" "}
      </button>
      <div className="w-full h-full flex flex-col items-center">
        <div className="flex flex-row gap-4 min-w-[70%] mt-10">
          <div className="card w-full h-[9vh] bg-base-100 shadow-lg">
            <div className="card w-full h-[40vh] bg-base-100 shadow-lg justify-between text-center">
              <div className="card-body flex flex-row">
                <img
                  src="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/7/13/6156d810-76f5-478c-a55b-9423c1395fea.jpg"
                  className="w-[10vh]"
                />
                <p className=" pt-5">Asus 14 inci ++</p>
                <p className="pt-5">
                  Qty:
                  <button className=""> +</button> 1
                  <button className="">-</button>
                </p>
                <div className="items-center justify-end text-end">
                  <Button
                    className="btn w-[18vh] text-black bg-transparent border-[#03AC0E]"
                    label="Remove"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer items-center p-4 bg-white text-neutral-content">
        <div className="items-center grid-flow-col">
          <p className="text-2xl text-black">Total Product: 1</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p className="text-black text-2xl">
            Harga:{" "}
            <span className="text-[#03AC0E] pr-14 text-2xl">12.000.000</span>
            <Button
              className="btn w-[18vh] text-white bg-[#03AC0E]"
              label="CheckOut"
            />
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Keranjang;
