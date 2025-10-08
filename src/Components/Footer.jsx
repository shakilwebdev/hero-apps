import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <div className="max-w-[1440px] mx-auto px-1">
        <div className="text-white flex justify-between">
          <h2>HERO.IO</h2>
          <div>
            <h3>Social Links</h3>
            <ul>
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
            </ul>
          </div>
        </div>
        <p className="text-[#FAFAFA] text-center">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
