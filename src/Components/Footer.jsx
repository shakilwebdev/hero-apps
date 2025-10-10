import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <div className="max-w-[1440px] mx-auto px-1 pt-9">
        <div className="text-white flex justify-between">
          <Link to="/" className="font-bold flex items-center gap-2">
            <img className="w-10" src={Logo} alt="logo" /> HERO.IO
          </Link>
          <div>
            <h3 className="text-xl font-medium">Social Links</h3>
            <ul className="flex gap-4 mt-7">
              <li className="bg-white text-[#001931] p-2 rounded-full cursor-pointer transition ease-in-out hover:scale-110">
                <FaXTwitter />
              </li>
              <li className="bg-white text-[#001931] p-2 rounded-full cursor-pointer transition ease-in-out hover:scale-110">
                <FaLinkedinIn />
              </li>
              <li className="bg-white text-[#001931] p-2 rounded-full cursor-pointer transition ease-in-out hover:scale-110">
                <FaFacebookF />
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-[#2e4257] my-5" />
        <p className="py-8 text-[#FAFAFA] text-center">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
