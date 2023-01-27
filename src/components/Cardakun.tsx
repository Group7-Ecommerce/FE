
import Layout from "./Layout";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";


import { FiEdit2 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { FC } from "react";

interface CardakunProps {
  name: string;
  email: string;
  image: string;
  hp: string;
  address: string;
  editName: string;
  editHp: number;
  editEmail: string;
  editAddress: string;
  editImage: string;
  editPassword: string;
  hapusAkun: (event: React.MouseEvent<HTMLButtonElement>) => void;
  updateAkun: (event: React.MouseEvent<HTMLButtonElement>) => void;
  setEditName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setEditHp: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setEditEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Cardakun: FC<CardakunProps> = ({
  name,
  email,
  image,
  address,
  hp,
  editName,
  editEmail,
  editHp,
  editAddress,
  editImage,
  setEditName,
  setEditHp,
  setEditEmail,
  hapusAkun,
  updateAkun,
  ...props
}) => {
  return (
    <Layout>
    <div className="card w-full bg-center justify-between bg-white mt-36" {...props}>

      <div className="card-body">
        <h2 className="card-title">Edit Account</h2>
        <div className="flex flex-col mt-8">
          <label>
            <span className="font-extrabold">name </span>
            <p className="text-lg font-semibold">{name}</p>
            <div className=" items-center text-center -mt-8">
              <input
                type="text"
                placeholder="enter your name..."
                className="input input-bordered w-full max-w-xs border-black"
              />
            </div>
          </label>
        </div>
        <div className="flex flex-col mt-8">
          <label>
            <span className="font-extrabold">Email </span>
            <p className="text-lg font-semibold">{email}</p>
            <div className=" items-center text-center -mt-7">
              <input
                type="text"
                placeholder="enter your address..."
                className="input input-bordered w-full max-w-xs border-black"
              />
            </div>
          </label>
        </div>
        <div className="flex flex-col mt-8">
          <label>
            <span className="font-extrabold">Number Phone</span>
            <p className="text-lg font-semibold">{hp}</p>
            <div className=" items-center text-center -mt-7">
              <input
                type="text"
                placeholder="enter your number phone..."
                className="input input-bordered w-full max-w-xs border-black"
              />
            </div>
          </label>
        </div>
        <div className="flex flex-col mt-8">
          <label>
            <span className="font-extrabold">address </span>
            <p className="text-lg font-semibold">{address}</p>
            <div className=" items-center text-center -mt-7">
              <input
                type="text"
                placeholder="enter your address..."
                className="input input-bordered w-full max-w-xs border-black"
              />
            </div>
          </label>
        </div>
        <div className="flex flex-col mt-8">
          <label>
            <span className="font-extrabold">Image </span>
            <p className="text-lg font-semibold">{image}</p>
            <div className=" items-center text-center -mt-7">
              <input
                type="text"
                placeholder="enter your address..."
                className="input input-bordered w-full max-w-xs border-black"
              />
            </div>
          </label>
        </div>

        <div className="flex flex-row gap-4 pt-3">
          <form onSubmit={updateAkun}>
            <label htmlFor="my-modal-6" className="btn">
              <FiEdit2 className="" />
            </label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Account</h3>
                <div className="flex flex-row gap-20 pb-3">
                  <p>Name</p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input w-full max-w-xs bg-[#4b5563] text-white"
                    value={editName}
                    onChange={setEditName}
                  />
                </div>
                <div className="flex flex-row gap-5 pb-3">
                  <p>Number Phone</p>
                  <input
                    type="number"
                    placeholder="Type here"
                    className="input w-full max-w-xs bg-[#4b5563] text-white"
                    value={editHp}
                    onChange={setEditHp}
                  />
                </div>
                <div className="flex flex-row gap-20 pb-3">
                  <p>Gmail</p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input w-full max-w-xs bg-[#4b5563] text-white"
                    value={editEmail}
                    onChange={setEditEmail}
                  />
                </div>
                <div className="modal-action">
                  <button type="submit" className="btn">
                    update
                  </button>
                  <label htmlFor="my-modal-6" className="btn">
                    CANCEL
                  </label>
                </div>
              </div>
            </div>
          </form>

          <label htmlFor="my-modal" className="btn">
            <BsTrash />
          </label>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <p className="py-4">Hapus data anda</p>
              <div className="modal-action">
                <button onClick={hapusAkun} className="btn">
                  Hapus
                </button>
                <label htmlFor="my-modal" className="btn">
                  Cancel
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Cardakun;
