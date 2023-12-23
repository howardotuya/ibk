import React from "react";

export default function Container({ children }) {
  return (
    <>
      <div className="setbody">
        <div>{children}</div>
      </div>
    </>
  );
}
