import React from "react";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import LogoImage from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar max-w-[1440px] mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn text-[#632ee3] bg-white border-0 pl-0 text-xl"
        >
          <img className="w-8 mr-1" src={LogoImage} alt="logo" />
          HERO.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/apps">Apps</NavLink>
          </li>
          <li>
            <NavLink to="/installation">Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          // target="_blank"
          to="https://github.com/shakilwebdev"
          className="btn text-white font-semibold bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"
        >
          <FaGithub />
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
