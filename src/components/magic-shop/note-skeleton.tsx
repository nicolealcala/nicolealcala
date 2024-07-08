import React from "react";

const NoteSkeleton = () => {
  return (
    <div className="flex flex-col p-4 mt-4 gap-y-4 animate-pulse w-full">
      <div className="bg-gray-500 w-1/3 h-3 rounded ms-auto"></div>
      <div className="bg-gray-500 max-w-[100px] h-5 rounded mt-6"></div>
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="bg-gray-500 w-full h-5 rounded"></div>
      ))}
      <div className="bg-gray-500 w-[130px] h-5 rounded ms-auto mt-6"></div>
      <div className="bg-gray-500 w-[100px] h-5 rounded ms-auto"></div>
    </div>
  );
};

export default NoteSkeleton;
