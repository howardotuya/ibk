"use client";
import leftQuote from "@/public/images/SVG/left-quote.svg";
import rightQuote from "@/public/images/SVG/right-quote.svg";
import arrowRight from "@/public/images/SVG/arrow-right.svg";
import arrowLeft from "@/public/images/SVG/arrow-left.svg";
import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  let [number, setNumber] = useState(0);

  // ARRAY CONTAINING THE TESTIMONIALS
  const Testimonials = [
    {
      id: 0,
      comment:
        "I wholeheartedly endorse Abejide for her exceptional UI/UX design skills. Her creativity and user-centric approach consistently result in visually stunning and intuitive interfaces. A true team player with a keen eye for detail, Abejide is a valuable asset to any design project. It's been a pleasure working with her, and I'm confident she will continue to impress in her future endeavors.",
      name: "Bryan Pablo",
      occupation: "Software Developer, Prifina",
    },
    {
      id: 1,
      comment:
        "She is an outstanding product designer and pays attention to details. She is a great person to work with all round.",
      name: "Funmi Olatunbosun",
      occupation: "Product Manager, Oppia",
    },
  ];

  return (
    <>
      <article className="flex gap-4 max-w-[1039px] self-end">
        {/* LEFT */}
        <article className="w-[34.098px] lg:w-auto h-auto shrink-0">
          <Image src={leftQuote} alt="" />
        </article>

        {/* CENTER CONTENT */}
        <article className="pt-2 lg:pt-6 flex flex-col gap-6 lg:gap-10">
          {/* TOP - TEXT */}
          <article className="flex flex-col gap-4 lg:gap-6">
            <p className="text-[12px] lg:text-[18px] leading-normal lg:leading-[140%]">
              {Testimonials[number].comment}
            </p>

            {/* NAM AND OCCUPATION */}
            <article className="flex flex-col gap-2">
              <h4 className="text-[16px] lg:text-[32px] font-bold leading-normal">
                {Testimonials[number].name}
              </h4>
              <p className="text-[16px] lg:text-[18px] ">
                {Testimonials[number].occupation}
              </p>
            </article>
          </article>

          {/* BOTTOM - ARROW */}
          <article className="flex gap-2 lg:gap-5">
            {/* LEFT */}
            <Image
              className="w-6 h-6 lg:w-auto lg:h-auto cursor-pointer"
              src={arrowLeft}
              alt=""
              onClick={() => {
                if (number === 0) {
                  setNumber(Testimonials.length - 1)
                } else {
                  setNumber(number-1);
                }
              }}
            />

            {/* RIGHT */}
            <Image
              className="w-6 h-6 lg:w-auto lg:h-auto cursor-pointer"
              src={arrowRight}
              alt=""
              onClick={() => {
                if (number === (Testimonials.length - 1)) {
                  setNumber(0);
                } else {
                  setNumber(number + 1);
                }
              }}
            />
          </article>
        </article>

        {/* RIGHT */}
        <article className="w-[34.098px] lg:w-auto h-auto shrink-0">
          <Image src={rightQuote} alt="" />
        </article>
      </article>
    </>
  );
}
