import React, { useState } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const { apps } = useApps();
  // console.log(apps);
  const [search, setSearch] = useState("");
  // console.log(search);
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
  // console.log(searchedApps);

  return (
    <div className="max-w-[1440px] mx-auto px-1">
      <h2 className="mt-20 text-center text-[#001931] text-5xl font-bold mb-4">
        Our All Applications
      </h2>
      <p className="mb-10 text-center text-[#627382] text-xl">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center">
        <h2>({searchedApps.length}) Apps Found </h2>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="search Apps"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {searchedApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
