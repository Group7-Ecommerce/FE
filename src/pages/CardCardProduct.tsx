import React, { FC } from "react";
import Button from "../components/Button";
import { AiOutlineLeft } from "react-icons/ai";

interface CardProps {
  id: number;
  qty: number;
  total_price: number;
  product_id: number;
  product_name: string;
  product_image: string;
}
const CardCardProduct: FC<CardProps> = ({
  id,
  qty,
  total_price,
  product_id,
  product_name,
  product_image,
}) => {
  return (
    <>
      <button className="pb-10 w-[10vh]">
        {" "}
        <AiOutlineLeft className="" />{" "}
      </button>
      <div className="w-full h-full flex flex-col items-center">
        <div className="flex flex-row gap-4 min-w-[70%] mt-10">
          <div className="card w-full h-[9vh] bg-base-100 shadow-lg">
            <div className="card w-full h-[40vh] bg-base-100 shadow-lg justify-between text-center">
              <div className="card-body flex flex-row">
                <img src={product_image} className="w-[10vh]" />
                <p className=" pt-5">{product_name}</p>
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
          <p className="text-2xl text-black">Total Product: {qty}</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p className="text-black text-2xl">
            Harga:{" "}
            <span className="text-[#03AC0E] pr-14 text-2xl">{total_price}</span>
            <Button
              className="btn w-[18vh] text-white bg-[#03AC0E]"
              label="CheckOut"
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default CardCardProduct;
