import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Divider from "../components/divider/divider";
import Link from "next/link";
import Button from "@/components/button/button";

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
import Testimonials from "@/components/testimonials/testimonials";

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
          <section className="px-[120px] pt-14 pb-[108px] flex flex-col gap-14">
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

      <footer className="bg-[#014921] py-20 px-[120px] text-white relative z-[9999]">
        <Container>
          {/* TOP */}
          <article className="flex flex-col gap-10">
            <h2 className="text-[56px] font-medium leading-[100%] tracking-[-2.24px]">
              I have got great reviews
            </h2>
            {/* TESTIMONIALS */}
            <Testimonials />
          </article>

          {/* DIVIDER */}
          <article className="pt-20 pb-[61px]">
            <Divider bgColor={"bg-[#0E6D35]"} />
          </article>

          {/* BOTTOM */}
          <article className="flex flex-col gap-10">
            {/* TEXT */}
            <h2 className="max-w-[679px] text-[64px] font-medium">Let’s build great experience together</h2>

            {/* LINKS */}
            <article className="flex items-center gap-8">
              <article>
                <Button text={"Get in touch"} route={""} />
              </article>
              <article className="flex items-center gap-6">
                {/* TWITTER */}
                <article className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </article>
                {/* LINKEDIN */}
                <article className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9H2V21H6V9Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </article>
                {/* Instagram */}
                <article className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 11.3701C16.1234 12.2023 15.9813 13.0523 15.5938 13.7991C15.2063 14.5459 14.5932 15.1515 13.8416 15.5297C13.0901 15.908 12.2385 16.0397 11.4078 15.906C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1903 8.22774 13.4229 8.09408 12.5923C7.96042 11.7616 8.09208 10.91 8.47034 10.1584C8.8486 9.40691 9.4542 8.7938 10.201 8.4063C10.9478 8.0188 11.7978 7.87665 12.63 8.00006C13.4789 8.12594 14.2649 8.52152 14.8717 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 6.5H17.51"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </article>
              </article>
            </article>
          </article>
        </Container>
      </footer>
    </>
  );
}
