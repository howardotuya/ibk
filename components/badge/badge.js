import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function Badge({ text, status }) {
  return (
    <div
      className={clsx(
        "lg:bg-[#FEEBDE] lg:rounded-[24px]",
        "text-[14px] text-[#233] leading-[100%] lg:text-[16px] font-semibold",
        "lg:h-9 lg:p-3 flex gap-2 items-center",
      )}
    >
      {status && (
        <div
          style={{
            filter: clsx(
              status !== "shipped"
                ? "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))"
                : "",
            ),
          }}
          className={clsx(
            "w-2 h-2 rounded-full",
            status === "shipped" ? "bg-[#019489]" : "bg-[#FCE535]",
          )}
        ></div>
      )}
      {text}
    </div>
  );
}
