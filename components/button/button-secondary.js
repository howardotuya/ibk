import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function ButtonSecondary({
  route,
  text,
  additionalStyle,
  target,
  type = "button",
  onClick,
  disabled,
  ...rest
}) {
  const linkHref = route;

  const className = clsx(
    "text-[14px] md:text-[16px] whitespace-nowrap text-center font-semibold",
    "h-12 md:h-16 px-4 md:px-6",
    "flex items-center justify-center text-[#2F3434] rounded-full",
    "border",
    text === "Under development"
      ? "cursor-not-allowed border-[#AFB0AB]"
      : "border-[#DC511A]",
    additionalStyle,
  );

  if (linkHref) {
    return (
      <Link
        className={className}
        href={linkHref}
        target={target ? target : "_self"}
        {...rest}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {text}
    </button>
  );
}
