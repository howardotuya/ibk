import React from "react";

const Divider = ({ children, bgColor }) => {
  return (
    <div className="w-full h-auto">
      <div className={`${bgColor} w-full h-[1px]`}></div>
    </div>
  );
};

export default Divider;