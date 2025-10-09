import React from "react";
import useApps from "../hooks/useApps";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const { apps } = useApps();
  console.log(apps);

  return (
    <div>
      <h2 className="mt-20 text-center text-[#001931] text-5xl font-bold mb-4">
        Our All Applications
      </h2>
      <p className="mb-10 text-center text-[#627382] text-xl">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div>
        <h2>({apps.length}) Apps Found </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {apps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
