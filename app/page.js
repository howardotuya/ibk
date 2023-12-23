import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Divider from "../components/divider/divider";
import Link from "next/link";

// IMAGE IMPORTATION
import prifinaLeft from "@/public/images/PNG/prifina-left.png";
import prifinaRight from "@/public/images/SVG/prifina-right.svg";
import oppiaLeft from "@/public/images/PNG/oppia-left.png";
import oppiaRight from "@/public/images/SVG/oppia-right.svg";
import jogovest from "@/public/images/SVG/jogovest.svg";
import buttonBlack from "@/public/images/PNG/button.png";
import oppia1 from "@/public/images/PNG/oppia1.png";
import oppia2 from "@/public/images/PNG/oppia2.png";
import jogovest1 from "@/public/images/PNG/jogovest1.png";
import jogovest2 from "@/public/images/PNG/jogovest2.png";
import tastyandyummy from "@/public/images/PNG/tastyandyummy.png";
import tastyandyummy2 from "@/public/images/PNG/tastyandyummy2.png";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>

      <Container>
        <main>
          {/* HERO SECTION */}
          <section className="py-20 px-[120px] flex flex-col gap-10">
            {/* TOP */}
            <article className="">
              <h1 className="max-w-[895px] text-[72px] leading-[100%] font-medium tracking-[-2.88px]">
                Designing digital solutions that simplifies lives
              </h1>
            </article>

            {/* MIDDLE */}
            <article className="flex gap-24 items-end">
              {/* left */}
              <article className="flex flex-col gap-4">
                <h6 className="cod-gray-500 font-semibold tracking-[-0.32px]">
                  Some companies I have worked with
                </h6>
                {/* LIST OF COMPANIES */}
                <article className="flex items-center gap-[52px]">
                  {/* PRIFINA */}
                  <article className="flex items-center gap-2">
                    {/* LEFT */}
                    <Image
                      className="w-[50px] h-[50px]"
                      src={prifinaLeft}
                      alt=""
                    />
                    {/* RIGHT */}
                    <Image className="" src={prifinaRight} alt="" />
                  </article>

                  {/* OPPIA */}
                  <article className="flex items-center gap-2">
                    {/* LEFT */}
                    <Image
                      className="w-6 h-[23.517px]"
                      src={oppiaLeft}
                      alt=""
                    />
                    {/* RIGHT */}
                    <Image className="" src={oppiaRight} alt="" />
                  </article>

                  {/* JOGOVEST */}
                  <article>
                    <Image src={jogovest} alt="" />
                  </article>
                </article>
              </article>

              {/* right */}
              <article>
                <p className="max-w-[534px] cod-gray-700 text-[18px] leading-[140%] tracking-[-.18px]">
                  Hi, my name is Ibukun Abejide, a passionate product designer
                  on a mission to build successful products for millions of
                  users across the world. I have experience working in the
                  Fintech, E-commerce, EdTech and AI sectors and have also
                  helped more than 100 people get into tech.
                </p>
              </article>
            </article>

            {/* BOTTOM */}
            <article className="flex items-center gap-24 justify-between">
              {/* left */}
              <article>
                <p className="jaffa-600 italic text-[24px] tracking-[-0.96px]">
                  “Design isn’t finished until somebody is using it” - Brenda
                  Laurel
                </p>
              </article>

              {/* right */}
              <article className="relative shrink-0">
                <Link
                  className="absolute absolute-center whitespace-nowrap leading-6 block font-bold text-black text-[20px]"
                  href={""}
                >
                  Download resume
                </Link>

                {/* BUTTON IMAGE - CENTERED */}
                <Image
                  className="w-[333.108px] h-auto"
                  src={buttonBlack}
                  alt=""
                />
              </article>
            </article>
          </section>

          {/* DIVIDER */}
          <Divider bgColor={"bg-[#E5E8E8]"} />

          {/* RECENT WORKS */}
          <section className="px-[120px] pt-14 flex flex-col gap-14">
            {/* TEXT */}
            <h2 className="text-[56px] font-medium leading-[100%] tracking-[-2.24px]">
              Recent works
            </h2>

            {/* 3 CASE STUDIES */}
            <section className="w-full flex flex-col gap-5">
              {/* OPPIA */}
              <article className="rounded-[12px] bg-[#EFFEF3] px-14 grid grid-cols-[1fr_auto] gap-x-8">
                {/* LEFT */}
                <article className="flex flex-col gap-10 pt-14 pb-[156px]">
                  <article className="flex flex-col gap-6">
                    <h3 className="cod-grap-800 text-[40px] font-semibold">
                      OPPIA
                    </h3>
                    <p className="text-[20px] leading-[140%]">
                      Oppia Beta- I conducted market research and user testing
                      to improve the user experience of the app, I also worked
                      on the language translation feature with led to 30%
                      increase in the number of users.
                    </p>
                  </article>
                  <article className="flex">
                    <Button
                      text={"Read case study"}
                      route={"Read case study"}
                    />
                  </article>
                </article>

                {/* RIGHT */}
                <article className="flex w-full gap-x-6">
                  {/* 234.358px */}
                  <article className="">
                    <Image className="" src={oppia1} alt="" />
                  </article>
                  <article className=" self-end">
                    <Image className="" src={oppia2} alt="" />
                  </article>
                </article>
              </article>

              {/* Jogovest */}
              <article className="rounded-[12px] bg-[#F5F6F6] pl-14 pr-[94px] grid grid-cols-[auto_1fr] gap-x-[120px]">
                {/* LEFT */}
                <article className="flex w-full gap-x-6">
                  {/* 234.358px */}
                  <article className="">
                    <Image className="" src={jogovest1} alt="" />
                  </article>
                  <article className=" self-end">
                    <Image className="" src={jogovest2} alt="" />
                  </article>
                </article>

                {/* RIGHT */}
                <article className="flex flex-col gap-10 pt-14 pb-[186px]">
                  <article className="flex flex-col gap-6">
                    <h3 className="cod-grap-800 text-[40px] font-semibold">
                      Jogovest
                    </h3>
                    <p className="text-[20px] leading-[140%]">
                      As the solo designer, I played a pivotal strategic role in
                      designing the mobile app with the goal of achieving a
                      product market fit.
                    </p>
                  </article>
                  <article className="flex">
                    <Button
                      text={"Read case study"}
                      route={"Read case study"}
                    />
                  </article>
                </article>
              </article>

              {/* Tasty & Yummy */}
              <article className="rounded-[12px] bg-[#FEF6EE] pl-14 pr-7 grid grid-cols-[1fr_auto] gap-x-8">
                {/* LEFT */}
                <article className="flex flex-col gap-10 pt-[56px] pb-[128px]">
                  <article className="flex flex-col gap-6">
                    <h3 className="cod-grap-800 text-[40px] font-semibold">
                      Tasty & Yummy
                    </h3>
                    <p className="text-[20px] leading-[140%]">
                      Tasty and Yummy is a recipe platform for cook enthusiasts,
                      stay at home mums. I designed the landing page, the sign
                      up page and the recipe page and integrated the shopping
                      feature that helps users shop for ingredients via the
                      website.
                    </p>
                  </article>
                  <article className="flex">
                    <Button
                      text={"Read case study"}
                      route={"Read case study"}
                    />
                  </article>
                </article>

                {/* RIGHT */}
                <article className="flex w-full gap-x-6 items-center">
                  {/* 234.358px */}
                  <article className="">
                    <Image className="" src={tastyandyummy} alt="" />
                  </article>
                </article>
              </article>
            </section>
          </section>
        </main>
      </Container>

      <footer className="bg-[#014921] py-20 px-[120px]">
        <Container>
          {/* TOP */}
          <article>
            <h2 className="text-[56px] font-medium leading-[100%] tracking-[-2.24px] text-white">I have got great reviews</h2>
          </article>
          {/* DIVIDER */}
          {/* BOTTOM */}
          <article></article>
        </Container>
      </footer>
    </>
  );
}
