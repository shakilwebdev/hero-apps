import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <div className="flex justify-center items-center mb-48 mt-5">
        <span
          className="loading loading-ring loading-xl"
          style={{ width: "80px", height: "80px" }}
        ></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
