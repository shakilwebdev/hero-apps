import React from "react";
// import { Link, useLoaderData } from "react-router";
import { Link } from "react-router";
import AppCard from "../Components/AppCard";
import useApps from "../hooks/useApps";

const Home = () => {
  // const apps = useLoaderData();
  // console.log(apps);
  // const data = useApps();
  // console.log(data);
  const { apps, loading, error } = useApps();

  const featuredApps = apps.slice(0, 8);
  // console.log(featuredApps);

  return (
    <div>
      <h2 className="mt-20 text-center text-[#001931] text-5xl font-bold mb-4">
        Trending Apps
      </h2>
      <p className="mb-10 text-center text-[#627382] text-xl">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {featuredApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>

      <div className="text-center pb-20">
        <Link to="/apps" className="btn btn-primary">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
