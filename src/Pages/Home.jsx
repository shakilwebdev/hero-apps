import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "../Components/AppCard";

const Home = () => {
  const apps = useLoaderData();
  console.log(apps);

  return (
    <div>
      <h2 className="text-center text-[#001931] text-5xl font-bold mb-4">
        Trending Apps
      </h2>
      <p className="text-center text-[#627382] text-xl">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {apps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
