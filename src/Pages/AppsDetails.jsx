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
  console.log(app);
  if (loading) return <p>Loading.....</p>;
  const {
    title,
    image,
    ratingAvg,
    downloads,
    reviews,
    description,
    companyName,
  } = app || {};
  return (
    <div className="max-w-[1440px] mx-auto px-1">
      <div className="flex items-center gap-10 mt-20">
        <img src={image} alt="image" />
        <div className="flex-1">
          <h2>{title}</h2>
          <p>
            <span>Developed by</span> <span>{companyName}</span>
          </p>
          <hr />
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <img className="w-10" src={DownloadIcon} alt="DownloadIcon" />
              <span>Downloads</span>
              <span>{downloads}</span>
            </div>
            <div className="flex flex-col gap-2">
              <img className="w-10" src={RatingIcon} alt="DownloadIcon" />
              <span>Average Ratings</span>
              <span>{ratingAvg}</span>
            </div>
            <div className="flex flex-col gap-2">
              <img className="w-10" src={ReviewIcon} alt="DownloadIcon" />
              <span>Total Reviews</span>
              <span>{reviews}</span>
            </div>
          </div>
          <button className="btn btn-success">Install Now (291 MB)</button>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;
