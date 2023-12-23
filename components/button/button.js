import Link from "next/link";
import React from "react";

export default function Button({ route, text }) {
  return (
    <Link
      className="bg-[#DC511A] h-12 px-6 flex items-center justify-center text-white rounded-full"
      href={route}
    >
      {text}
    </Link>
  );
}
