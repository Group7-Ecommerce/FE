import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import "../../styles/index.css";

const Selesai = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
              <div>
                <button
                  className="text-lg hover:text-[#03AC0E]"
                  onClick={openModal}
                >
                  Selesai
                </button>
              </div>
              <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModal}
                  >
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
                            <img
                              src="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/7/13/6156d810-76f5-478c-a55b-9423c1395fea.jpg"
                              className="w-[20vh] h-[20vh]"
                            />
                            <div className="flex flex-col text-start justify-center ">
                              <p className="text-xl font-bold -mt-40 ml-72">
                                Asus
                              </p>
                              <p className="ml-72">Qty:1 </p>
                              <p className="ml-72">Rp.12.000.000</p>
                            </div>

                            <p className="text-end">Selesai </p>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-[#03AC0E] px-4 py-2 text-sm font-medium text-black hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                              >
                                Selesai
                              </button>
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

export default Selesai;
