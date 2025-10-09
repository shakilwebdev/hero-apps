import React from "react";

import DownloadIcon from "../assets/icon-downloads.png";
import RatingIcon from "../assets/icon-ratings.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  //   console.log(app);
  const { title, image, ratingAvg, downloads, id } = app;

  return (
    <div>
      <Link to={`/app/${id}`}>
        <div className="bg-white p-4 rounded shadow-sm cursor-pointer hover:scale-105 transition ease-in-out">
          <img
            className="mx-auto w-full max-w-full rounded"
            src={image}
            alt="image"
          />
          <h2 className="text-center text-[#001931] font-medium text-xl py-4">
            {title}
          </h2>
          <div className="flex justify-between items-center ">
            <button className="flex items-center gap-2  bg-[#F1F5E8] rounded text-[#00D390] p-2.5">
              <img className="w-4" src={DownloadIcon} alt="DownloadIcon" />
              {downloads}
            </button>
            <button className="flex items-center gap-2 bg-[#FFF0E1] rounded text-[#FF8811] p-2.5">
              <img className="w-4" src={RatingIcon} alt="RatingIcon" />
              {ratingAvg}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
