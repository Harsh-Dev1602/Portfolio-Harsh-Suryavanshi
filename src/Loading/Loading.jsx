import React from "react";
import "../Loading/Loading.css";

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="loader"></div>
    </div>
  );
}

export default Loading;