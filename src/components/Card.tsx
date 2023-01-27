import { useNavigate } from "react-router-dom";
import { FC, Fragment, useState } from "react";

import Button from "./Button";
import { Dialog, Transition } from "@headlessui/react";

interface CardProps {
  title?: string;
  price?: number;
  image?: string;
  id?: number;
  labelButton?: string;
  onClickCart?: () => void;
}

const Card: FC<CardProps> = ({
  id,
  price,
  image,
  title,
  labelButton,
  onClickCart,
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="card w-full bg-center justify-between">
                  <div className="card-body">
                    <h2 className="card-title">Edit Account</h2>
                    <div className="flex flex-col mt-8">
                      <label>
                        <span className="font-extrabold">Name </span>
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
                        <span className="font-extrabold">Number Phone </span>
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
                        <div className=" items-center text-center -mt-7">
                          <input
                            type="text"
                            placeholder="enter your address..."
                            className="input input-bordered w-full max-w-xs border-black"
                          />
                        </div>
                      </label>
                    </div>
                    <div className="card-actions justify-end">
                      <button className="btn bg-gray">Update</button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
    </>
  );
};

export default Card;
