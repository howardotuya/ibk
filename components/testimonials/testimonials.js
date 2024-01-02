"use client";
import leftQuote from "@/public/images/SVG/left-quote.svg";
import rightQuote from "@/public/images/SVG/right-quote.svg";
import arrowRight from "@/public/images/SVG/arrow-right.svg";
import arrowLeft from "@/public/images/SVG/arrow-left.svg";
import Image from "next/image";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Testimonials() {
  let [number, setNumber] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // ARRAY CONTAINING THE TESTIMONIALS
  const Testimonials = [
    {
      id: 0,
      comment:
        "Abejide Ibukun was my UI/UX mentor, a great communicator and an amazing designer who is passionate about problem solving through design. She takes her time to mentor individuals and she’s willing to put in extra help whenever you need it. Her expertise as a designer is substantial. She is definitely a good addition to any team and does not only have the technical skills to show, she also has people skills and she’s someone anyone would enjoy working with.",
      name: "Marvinrose Chibuezem",
      occupation: "Web developer, Bowmenn Trucking",
    },
    {
      id: 1,
      comment:
        "I highly recommend Abejide for her exceptional UX design skills. I can assure that she is a very dedicated and proactive designer. It was amazing to collaborate with her and I would gladly recommend her to any project.",
      name: "Julio Sergio",
      occupation: "Full Stack Developer, Prifina",
    },
    {
      id: 2,
      comment:
        "I wholeheartedly endorse Abejide for her exceptional UI/UX design skills. Her creativity and user-centric approach consistently result in visually stunning and intuitive interfaces. A true team player with a keen eye for detail, Abejide is a valuable asset to any design project. It's been a pleasure working with her, and I'm confident she will continue to impress in her future endeavors.",
      name: "Bryan Pablo",
      occupation: "Software Developer, Prifina",
    },
    {
      id: 3,
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
        <article className="pt-2 lg:pt-6 grid gap-6 lg:gap-10">
          <div ref={sliderRef} className="keen-slider flex flex-nowrap w-full">
            {Testimonials.map((x) => (
              <div
                key={x.id}
                className={`keen-slider__slide number-slide${
                  x.id + 1
                } w-full basis-[100%] grow shrink-0`}
              >
                <article className="flex flex-col gap-4 lg:gap-6">
                  <p className="relative text-[12px] lg:text-[18px] leading-normal lg:leading-[140%]">
                    {x.comment}
                  </p>

                  {/* NAME AND OCCUPATION */}
                  <article className="flex flex-col gap-2">
                    <h4 className="text-[16px] lg:text-[32px] font-bold leading-normal">
                      {x.name}
                    </h4>
                    <p className="text-[16px] lg:text-[18px] ">
                      {x.occupation}
                    </p>
                  </article>
                </article>
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <article className="flex gap-2 lg:gap-5">
              {/* LEFT */}
              <button
                className="disabled:opacity-70 w-6 h-6 lg:w-auto lg:h-auto cursor-pointer"
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              >
                <Image src={arrowLeft} alt="" left />
              </button>

              {/* RIGHT */}
              <button
                className="disabled:opacity-70 w-6 h-6 lg:w-auto lg:h-auto cursor-pointer"
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              >
                <Image src={arrowRight} alt="" left />
              </button>
            </article>
          )}

          {/* BOTTOM - ARROW */}
        </article>

        {/* RIGHT */}
        <article className="w-[34.098px] lg:w-auto h-auto shrink-0">
          <Image src={rightQuote} alt="" />
        </article>
      </article>
    </>
  );
}
