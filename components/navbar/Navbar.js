"use client";
import Link from "next/link";
import Container from "../container/container";
import Button from "../button/button";
import chevron from "@/public/images/SVG/chevron.svg";
import Image from "next/image";
import Divider from "../divider/divider";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* POPUP NAVBAR */}
      <article
        className={`${
          isActive ? "block" : "hidden"
        } desktopHidden z-[99999] h-screen absolute top-0 bottom-0 left-0 right-0 bg-white`}
      >
        <article className="p-5 flex flex-col gap-[52px]">
          {/* CANCEL */}
          <article className="inline-flex self-end">
            <article
              onClick={() => setIsActive(!isActive)}
              className="bg-[#FEF6EE] p-2 rounded-[8px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.758 17.2431L12.001 12.0001L17.244 17.2431M17.244 6.75708L12 12.0001L6.758 6.75708"
                  stroke="#DC511A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </article>
          </article>

          {/* CONTENT -  3 in 1 */}
          <article className="flex flex-col gap-5">
            {/* ABOUT */}
            <Link className="flex flex-col gap-2" href={"/about"}>
              {/* TEXT PLUS CHEVRON ICON */}
              <article className="flex items-end justify-between">
                <p className="text-[14px]">About</p>
                <Image src={chevron} alt="" />
              </article>
              {/* DIVIDER */}
              <Divider bgColor={"bg-[#E5E8E8]"} />
            </Link>

            {/* Works */}
            <Link className="flex flex-col gap-2" href={""}>
              {/* TEXT PLUS CHEVRON ICON */}
              <article className="flex items-end justify-between">
                <p className="text-[14px]">Works</p>
                <Image src={chevron} alt="" />
              </article>
              {/* DIVIDER */}
              <Divider bgColor={"bg-[#E5E8E8]"} />
            </Link>

            {/* Resume */}
            <Link className="flex flex-col gap-2" href={"/"}>
              {/* TEXT PLUS CHEVRON ICON */}
              <article className="flex items-end justify-between">
                <p className="text-[14px]">Resume</p>
                <Image src={chevron} alt="" />
              </article>
              {/* DIVIDER */}
              <Divider bgColor={"bg-[#E5E8E8]"} />
            </Link>
          </article>

          {/* Button */}
          <Button
            route={"/"}
            text={"Get in touch"}
            additionalStyle={"font-semibold"}
          />
        </article>
      </article>

      {/* NAVBAR */}
      <div className="bg-white">
        <Container>
          <header className="flex items-center justify-between px-5 lg:px-10 py-3 bg-white">
            {/* LOGO */}
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="54"
                viewBox="0 0 72 54"
                fill="none"
              >
                <rect width="72" height="54" fill="white" />
                <path
                  d="M44.1526 26.523L51.9331 15.75H55.3351V16.0965L47.2081 27.1845L51.3346 32.76C52.5946 34.524 53.7601 35.406 54.8311 35.406C55.7131 35.406 56.4691 35.154 57.1621 34.587L58.2961 36.792C57.8866 37.233 57.2881 37.5795 56.5321 37.8C55.7761 38.052 55.0831 38.1465 54.4846 38.1465C53.7286 38.1465 53.0041 38.0205 52.3426 37.7685C51.6811 37.5165 51.0826 37.107 50.5786 36.5715C50.0431 36.0675 49.6651 35.6265 49.4131 35.3115C49.1296 34.9965 48.8146 34.524 48.4366 33.9255L44.1526 28.0035V37.8H41.0026V15.75H44.1526V26.523Z"
                  fill="#121212"
                />
                <path
                  d="M36.6807 21.42C36.6807 22.6485 36.3027 23.7195 35.6097 24.633C34.8852 25.5465 33.8457 26.1765 32.4597 26.523C34.1607 26.712 35.4522 27.279 36.3657 28.287C37.2792 29.295 37.7517 30.5235 37.7517 31.941C37.7517 33.705 37.0587 35.1225 35.7042 36.1935C34.3497 37.2645 32.5857 37.8 30.4122 37.8H21.5607V15.75H29.4042C31.5462 15.7815 33.2787 16.2855 34.6332 17.2935C35.9877 18.3015 36.6807 19.6875 36.6807 21.42ZM28.8057 27.9405H24.7107V35.217H30.4122C31.6092 35.217 32.5857 34.9335 33.3417 34.3035C34.0977 33.6735 34.5072 32.8545 34.5072 31.8465C34.5072 30.744 34.0032 29.8305 33.0582 29.0745C32.1132 28.3185 30.6957 27.9405 28.8057 27.9405ZM24.7107 25.4835H28.1442C29.9082 25.4835 31.2312 25.137 32.1132 24.381C32.9952 23.625 33.4362 22.7115 33.4362 21.6405C33.4362 20.6325 33.0267 19.8135 32.2707 19.215C31.4832 18.648 30.5382 18.333 29.4042 18.333H24.7107V25.4835Z"
                  fill="#121212"
                />
                <path d="M16.65 15.75V37.8H13.5V15.75H16.65Z" fill="#121212" />
              </svg>
            </Link>

            {/* LINKS */}
            <nav className="hidden lg:flex items-center gap-10 cod-gray-950">
              <Link className="p-2" href={"/about"}>
                About
              </Link>
              <Link className="p-2" href={""}>
                Works
              </Link>
              <Link className="p-2" href={""}>
                Resume
              </Link>
            </nav>

            {/* BUTTON */}
            <article className="hidden lg:block">
              <Button text={"Get in touch"} route={"/"} />
            </article>

            {/* HAMBURGER MENU - MOBILE ONLY */}
            <article
              onClick={() => setIsActive(!isActive)}
              className="block lg:hidden p-2 rounded-[8px] bg-[#FEF6EE]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
                  fill="#DC511A"
                />
              </svg>
            </article>
          </header>
        </Container>
      </div>
    </>
  );
}
