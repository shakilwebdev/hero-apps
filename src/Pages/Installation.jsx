import React, { useEffect, useState } from "react";
import DownloadIcon from "../assets/icon-downloads.png";
import RatingIcon from "../assets/icon-ratings.png";

const Installation = () => {
  const [appList, setAppeList] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installation"));
    if (savedList) setAppeList(savedList);
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto px-1">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001931] text-center mt-20">
        Your Installed Apps
      </h2>
      <p className="sm:text-xl text-[#627382] text-center mb-10 mt-5">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">{appList.length} Apps Found</h2>
        <button>short</button>
      </div>
      <div className="my-3">
        {appList.map((a) => (
          <div
            key={a.id}
            className="bg-white flex flex-col sm:flex-row justify-between p-3 mb-3 rounded-lg items-center"
          >
            <div className="flex items-center gap-5">
              <div>
                <img className="w-20" src={a.image} alt="image" />
              </div>
              <div>
                <h2 className="mb-2">{a.title}</h2>
                <div className="flex gap-5">
                  <span className="text-[#00D390] flex items-center gap-2">
                    <img
                      className="w-4"
                      src={DownloadIcon}
                      alt="DownloadIcon"
                    />{" "}
                    {a.downloads}M
                  </span>
                  <span className="text-[#FF8811] flex items-center gap-2">
                    <img className="w-4" src={RatingIcon} alt="RatingIcon" />{" "}
                    {a.ratingAvg}
                  </span>
                  <span className="text-[#627382]">{a.size} MB</span>
                </div>
              </div>
            </div>
            <button className="mt-5 sm:mt-0 btn bg-[#00d390] text-white font-semibold sm:text-xl">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
