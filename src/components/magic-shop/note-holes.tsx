import React from "react";

const NoteHoles = () => {
  const holes = Array.from({ length: 18 }, (_, index) => (
    <div
      key={index}
      className="w-5 h-5 rounded-full border border-white bg-black"
    ></div>
  ));

  return <div className="flex gap-x-4">{holes}</div>;
};

export default NoteHoles;
