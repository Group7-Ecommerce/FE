import { HiLogin, HiLogout } from "react-icons/hi";
import { HiOutlineUser, HiOutlineShoppingCart, HiUser } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import { handleAuth } from "../utils/redux/reducers/reducer";
import Button from "./Button";

import "../styles/index.css";
import Layout from "./Layout";

const Navbar = () => {
  const [cookie, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isShowing, setIsShowing] = useState(false)
  const checkToken = cookie.token;



const handleLogout = async () => {
  removeCookie("token");
  dispatch(handleAuth(false));
  navigate("/login");
  alert("you have logout");
};


  return (
    <Layout>
    <div className="sticky w-full px-7 py-2.5 flex gap-3">
      <div className="flex">
        <Link className="relative inline-block text-left text-xl mt-3" to="/" id="to-homepage">E-Commerce APP</Link>
      </div>
      <div className="flex flex-1 gap-3 items-center  justify-around">
        <div className="form-control w-[60vh] h-10 mt-1">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered bg-white text-black shadow-sm "
          />
        </div>
        <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <HiOutlineUser
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
        
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              {checkToken && (
                <Menu.Item>
                  {({ active }) => (
                    <button className={`${
                      active 
                      ? "bg-base-300 text-black"
                      : "text-black"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    id="to-profile"
                    onClick={() => navigate("/profil")}
                    >
                      {active ? (
                        <HiUser 
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        />
                      ) : (
                        <HiUser
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        />
                      )}
                      profile
                    </button>
                  )}
                </Menu.Item>
              )}
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                  className={`${
                    active
                    ? "bg-base-300 text-black"
                    : "text-black"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    id="btn-logout"
                    onClick={() => 
                    checkToken ? handleLogout() : navigate("/login")
                    }
                    >
                      {checkToken ? (
                        <HiLogout
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        />
                      ) : (
                        <HiLogin
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        />
                      )}
                      {checkToken ? "Logout" : "Login"}
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
        </Menu>
      </div>
    </div>
    </Layout>
  );
};

export default Navbar;
