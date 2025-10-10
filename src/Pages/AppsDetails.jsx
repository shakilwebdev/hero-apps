import React from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import DownloadIcon from "../assets/icon-downloads.png";
import RatingIcon from "../assets/icon-ratings.png";
import ReviewIcon from "../assets/icon-review.png";
const AppsDetails = () => {
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();
  // console.log(id);
  // console.log(typeof id);
  const { apps, loading } = useApps();
  // console.log(apps);
  // const app = apps.find((p) => String(p.id) === id);
  const app = apps.find((p) => p.id === Number(id));
  // console.log(app);
  if (loading) return <p>Loading.....</p>;
  const {
    title,
    image,
    ratingAvg,
    downloads,
    reviews,
    size,
    description,
    companyName,
  } = app || {};

  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem("installation"));
    console.log(existingList);
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === app.id);
      if (isDuplicate) return alert("App already in installation list");
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("installation", JSON.stringify(updatedList));
  };
  return (
    <div className="max-w-[1440px] mx-auto px-1">
      <div className="flex flex-col md:flex-row items-center gap-11 mt-20">
        <img src={image} alt="image" />
        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold text-[#001931]">{title}</h2>
          <p className="text-lg pb-2">
            <span className="text-[#627382] ">Developed by</span>{" "}
            <span className="text-[#632EE3] ">{companyName}</span>
          </p>
          <hr className="text-[#001931] pb-2" />
          <div className="flex gap-10 space-y-3 pt-2">
            <div className="flex flex-col gap-3">
              <img className="w-10" src={DownloadIcon} alt="DownloadIcon" />
              <span>Downloads</span>
              <span className="text-[#001931] text-3xl sm:text-4xl font-bold">
                {downloads}M
              </span>
            </div>
            <div className="flex flex-col gap-3 ">
              <img className="w-10" src={RatingIcon} alt="DownloadIcon" />
              <span>Average Ratings</span>
              <span className="text-[#001931] text-3xl sm:text-4xl font-bold">
                {ratingAvg}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <img className="w-10" src={ReviewIcon} alt="DownloadIcon" />
              <span>Total Reviews</span>
              <span className="text-[#001931] text-3xl sm:text-4xl font-bold">
                {reviews}K
              </span>
            </div>
          </div>
          <button
            onClick={handleAddToInstallation}
            className="btn bg-[#00d390] text-white font-semibold text-xl"
          >
            Install Now (<span>{size}</span> MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;
