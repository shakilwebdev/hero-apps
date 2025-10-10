import React from "react";
import GooglePlay from "../assets/google-play.png";
import AppeStore from "../assets/app-store.png";
import Hero from "../assets/hero.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div>
      <h2 className="mt-10 md:mt-20 text-[#001931] text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center">
        We Build <br /> <span className="text-[#632ee3]">Productive</span> Apps
      </h2>
      <p className="text-center text-[#627382] sm:text-xl mt-5 px-8">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex flex-col sm:flex-row  gap-5 justify-center items-center my-10">
        <Link
          target="_blank"
          to="https://play.google.com/store/games"
          className="btn font-semibold sm:text-xl py-6"
        >
          <img src={GooglePlay} alt="GooglePlay" /> Google Play
        </Link>
        <Link
          target="_blank"
          to="https://www.apple.com/app-store/"
          className="btn font-semibold sm:text-xl py-6"
        >
          <img src={AppeStore} alt="AppeStore" /> AppleStore Play
        </Link>
      </div>
      <img className="mx-auto" src={Hero} alt="Hero" />
      <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-center py-10 sm:py-14 md:py-20">
        <div className="max-w-[1440px] mx-auto px-1">
          <h2 className="pb-2 md:pb-10 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Trusted by Millions, Built for You
          </h2>
          <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10 mt-10 px-4 md:px-20 lg:px-40">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <span>Total Downloads</span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                29.6M
              </span>
              <span>21% more than last month</span>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <span>Total Reviews</span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                906K
              </span>
              <span>21% more than last month</span>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <span>Active Apps</span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                132+
              </span>
              <span>31 more will Launch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
