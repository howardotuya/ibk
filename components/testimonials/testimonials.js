import leftQuote from "@/public/images/SVG/left-quote.svg";
import rightQuote from "@/public/images/SVG/right-quote.svg";
import arrowRight from "@/public/images/SVG/arrow-right.svg";
import arrowLeft from "@/public/images/SVG/arrow-left.svg";
import Image from "next/image";

export default function Testimonials() {
  return (
    <>
      <article className="flex gap-4 max-w-[1039px] self-end">
        {/* LEFT */}
        <article className="shrink-0">
          <Image src={leftQuote} alt="" />
        </article>

        {/* CENTER CONTENT */}
        <article className="pt-6 flex flex-col gap-10">
          {/* TOP - TEXT */}
          <article className="flex flex-col gap-6">
            <p className="text-[18px] leading-[140%]">
              I wholeheartedly endorse Abejide for her exceptional UI/UX design
              skills. Her creativity and user-centric approach consistently
              result in visually stunning and intuitive interfaces. A true team
              player with a keen eye for detail, Abejide is a valuable asset to
              any design project. It's been a pleasure working with her, and I'm
              confident she will continue to impress in her future endeavors.{" "}
            </p>

            {/* NAM AND OCCUPATION */}
            <article className="flex flex-col gap-2">
              <h4 className="text-[32px] font-bold leading-normal">
                Bryan Pablo
              </h4>
              <p className="text-[18px] ">Software Developer, Prifina</p>
            </article>
          </article>

          {/* BOTTOM - ARROW */}
          <article className="flex gap-5">
            {/* LEFT */}
            <Image src={arrowLeft} alt="" />

            {/* RIGHT */}
            <Image src={arrowRight} alt="" />
          </article>
        </article>

        {/* RIGHT */}
        <article className="shrink-0">
          <Image src={rightQuote} alt="" />
        </article>
      </article>
    </>
  );
}
