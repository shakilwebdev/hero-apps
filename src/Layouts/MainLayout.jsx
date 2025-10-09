import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen inter-fonts">
      <Navbar />
      <div className="bg-[#f5f5f5] flex-1">
        <div className="">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
