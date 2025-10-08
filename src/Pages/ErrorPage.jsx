import React from "react";
import ErrorImg from "../assets/error-404.png";
import { useRouteError } from "react-router";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center mt-36 gap-4">
      <img src={ErrorImg} alt="ErrorImg" />
      <h2 className="mt-5">Oops, page not found!</h2>
      <p>The page you are looking for is not available.</p>
      <p className="text-red-500">{error.message}</p>
      <button className="btn btn-primary">Go Back!</button>
    </div>
  );
};

export default ErrorPage;
