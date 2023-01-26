import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Button from "./Button";
import "../styles/index.css";

const Navbar = () => {
  return (
    <div className="sticky w-full px-7 py-2.5 flex gap-3">
      <div className="flex">
        <a className="relative inline-block text-left text-xl mt-3">E-Commerce APP</a>
      </div>
      <div className="flex flex-1 gap-3 items-center  justify-around">
        <div className="form-control w-[60vh] h-10 mt-1">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered bg-white text-black shadow-sm "
          />
        </div>
        <div className="flex flex-1 justify-end">
        <Button
              label="Daftar"
              className="btn w-[15vh] bg-transparent text-black border-green-500"
            />
            </div>
            <div>
        <Button
              label="masuk"
              className="btn w-[15vh] bg-green-500"
            />
            </div>
      </div>
    </div>
  );
};

export default Navbar;
