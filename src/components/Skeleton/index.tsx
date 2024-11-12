"use client";
import React from "react";
import ContentLoader from "react-content-loader";

export function Skeleton() {
  return (
    <div className="border-gray-500-800 border-solid border w-auto px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <ContentLoader
        speed={2}
        width="100%"
        height="auto"
        viewBox="0 0 1000 200"
        backgroundColor="#4a9ef7"
        foregroundColor="#ecebeb"
        preserveAspectRatio="xMinYMin meet"
        style={{ width: "100%", height: "auto" }}
      >
        <rect x="25" y="20" rx="3" ry="3" width="20%" height="25" />
        <rect x="25" y="55" rx="3" ry="3" width="80%" height="25" />
        <rect x="25" y="90" rx="3" ry="3" width="80%" height="25" />
        <rect x="25" y="125" rx="3" ry="3" width="80%" height="25" />
        <rect x="25" y="160" rx="3" ry="3" width="40%" height="25" />
      </ContentLoader>
    </div>
  );
}
