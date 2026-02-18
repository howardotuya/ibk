import Link from "next/link";
import React from "react";

export default function ButtonSecondary({ route, text, additionalStyle }) {
  return (
    <Link
      className={`text-[14px] md:text-[16px] whitespace-nowrap text-center border border-[#DC511A] font-semibold h-12 md:h-16 px-4 md:px-6 flex items-center justify-center text-[#2F3434] rounded-full ${
        additionalStyle ? additionalStyle : ""
      }`}
      href={route}
    >
      {text}
    </Link>
  );
}
