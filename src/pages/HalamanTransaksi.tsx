import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";

import BelumBayar from "./modaltransaksi/BelumBayar";
import Dikemas from "./modaltransaksi/Dikemas";
import Dikirim from "./modaltransaksi/Dikirim";
import Selesai from "./modaltransaksi/Selesai";
import Dibatalkan from "./modaltransaksi/Dibatalkan";

const HalamanTransaksi = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center bg-base-300">
        <div className="flex-none gap-4 min-w-[70%] mt-11">
          <div className="card w-full h-[8vh] bg-base-100 shadow-lg">
            <div className="card-body flex-row justify-between">
              <div>
                <button
                  className="text-lg hover:text-[#03AC0E]"
                  onClick={openModal}
                >
                  Semua
                </button>
              </div>
              <div>
                <BelumBayar />
              </div>
              <div>
                <Dikemas />
              </div>

              <div>
                <Dikirim />
              </div>
              <div>
                <Selesai />
              </div>
              <div>
                <Dibatalkan />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HalamanTransaksi;
