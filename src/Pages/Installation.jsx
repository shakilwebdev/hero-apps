import React, { useEffect, useState } from "react";
import DownloadIcon from "../assets/icon-downloads.png";
import RatingIcon from "../assets/icon-ratings.png";

const Installation = () => {
  const [appList, setAppeList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installation"));
    if (savedList) setAppeList(savedList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "download-asc") {
      return [...appList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "download-dsc") {
      return [...appList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return appList;
    }
  })();

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installation"));
    let updatedList = existingList.filter((a) => a.id !== id);
    // for ui instant update
    // setAppeList(existingList.filter((a) => a.id !== id));
    // setAppeList((prev) => prev.filter((a) => a.id !== id));
    setAppeList(updatedList);
    localStorage.setItem("installation", JSON.stringify(updatedList));
  };
  return (
    <div className="max-w-[1440px] mx-auto px-1">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001931] text-center mt-20">
        Your Installed Apps
      </h2>
      <p className="sm:text-xl text-[#627382] text-center mb-11 mt-5">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl sm:text-2xl font-semibold">
          {sortedItem.length} Apps Found
        </h2>

        <select
          className="border border-[#D2D2D2] p-2 rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Short By Size</option>
          <option value="download-asc">Low-&gt;High</option>
          <option value="download-dsc">High-&gt;Low</option>
        </select>
      </div>
      <div className="my-3">
        {sortedItem.map((a) => (
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
            <button
              onClick={() => handleRemove(a.id)}
              className="mt-5 sm:mt-0 btn bg-[#00d390] text-white font-semibold sm:text-xl"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
