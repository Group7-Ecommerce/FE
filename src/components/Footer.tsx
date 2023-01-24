import React from "react";
import { CiFacebook } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-green-500 text-white rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="gap-3 text-2xl">E-Commerce APP</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a className="flex">
            <span className="flex-row pt-3 w-4 icon">
              <CiFacebook />
            </span>
          </a>
          <a className="flex">
            <span className="flex-row pt-3">
              <BsWhatsapp />
            </span>
          </a>
          <a className="flex">
            <span className="flex-row pt-3">
              <BsInstagram />
            </span>
          </a>
          <a className="flex">
            <span className="flex-row pt-3">
              <FaTiktok />
            </span>
          </a>
          <a className="flex">
            <span className="flex-row pt-3">
              <CiTwitter />
            </span>
          </a>
          <a></a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Project Group 7</p>
      </div>
    </footer>
  );
};

export default Footer;