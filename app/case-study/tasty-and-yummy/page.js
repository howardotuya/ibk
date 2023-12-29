import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

// IMAGE IMPORTATION
import tay1 from "@/public/images/PNG/tay/tay1.png";
import tay2 from "@/public/images/PNG/tay/tay2.png";
import tay3 from "@/public/images/PNG/tay/pns.png";
import tay4 from "@/public/images/PNG/tay/pns.svg";

import ds1 from "@/public/images/PNG/tay/ds1.png";
import ds2 from "@/public/images/PNG/tay/ds2.png";
import ds3 from "@/public/images/PNG/tay/ds3.png";
import ds4 from "@/public/images/PNG/tay/ds4.png";
import ds5 from "@/public/images/PNG/tay/ds5.png";
import ds6 from "@/public/images/PNG/tay/ds6.png";
import ds7 from "@/public/images/PNG/tay/ds7.png";

import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";

import quote1 from "@/public/images/SVG/quote1.svg";
import quote2 from "@/public/images/SVG/quote2.svg";
import Link from "next/link";

export default function TAY() {
  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <main>
        {/* HERO SECTION */}
        <section className="bg-[#FEF6EE] px-5 xl:px-0">
          <Container>
            <article className="pt-10 flex justify-center items-end gap-4 lg:gap-8">
              {/* FIRST IMAGE */}
              <article className="w-[314px] lg:w-[543px] h-auto">
                <Image src={tay1} alt="" placeholder="blur" />
              </article>
            </article>
          </Container>
        </section>

        {/* REST OF THE BODY */}
        <section className="px-5 xl:px-0">
          <Container>
            {/* HEADING + Project OVERVIEW */}
            <section className="pt-10 lg:pt-20 pb-5 lg:pb-11 flex flex-col gap-4 lg:gap-10">
              <h1 className="text-[32px] lg:text-[72px] font-medium leading-[120%] lg:leading-[100%] tracking-[-1.28px] lg:tracking-[-2.88px]">
                Tasty & Yummy Recipe Website
              </h1>

              {/* PROJECT OVERVIEW */}
              <article className="lg:max-w-[1006px] flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Project overview
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  Design a new web-based platform that allows users to discover,
                  share, and interact with recipes. As part of the design
                  process, you will conduct user research, create prototypes,
                  and demonstrate your critical thinking and ideation skills.
                </p>
              </article>
            </section>

            {/* PROBLEM STATEMENT + GOAL + IMAGE */}
            <article className="pt-8 pb-5 lg:py-0 grid lg:grid-cols-[1fr_auto] items-center gap-4 lg:gap-6 ">
              {/* PROBLEM STATEMENT AND GOAL */}
              <article className="flex flex-col gap-4 lg:gap-10">
                {/* PROBLEM STATEMENT */}
                <article className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                    Problem Statement
                  </h2>
                  <p className="max-w-[326px] lg:max-w-none text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                    A lot of users have issues with recipe sites, because they
                    are filled with ad clicks and that can be disturbing. They
                    also find it difficult to get some recipes they want to use
                    in the local store.
                  </p>
                </article>

                {/* GOAL */}
                <article className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                    Goal
                  </h2>
                  <p className="max-w-[326px] lg:max-w-none text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                    The goal is to provide a user friendly and engaging platform
                    for cook enthusiasts.
                  </p>
                </article>
              </article>

              {/* IMAGE */}
              <article className="max-w-[569px] w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={tay2} alt="" placeholder="blur" />
              </article>
            </article>

            {/* User Research based on Pain Points and Needs */}
            <article className="pt-8 pb-5 flex flex-col gap-5 lg:gap-6 lg:py-10">
              {/* UR 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  User Research based on Pain Points and Needs
                </h2>
                <p className="max-w-[904px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal">
                  I conducted user research with four cook enthusiasts and they
                  discussed their pain points and needs, they also talked about
                  how Tasty & Yummy can help them get the best experience.
                </p>
              </article>
              {/* UR 1.2 */}
              <article>
                <Image
                  className="w-full h-auto"
                  src={tay3}
                  alt=""
                  quality={100}
                  placeholder="blur"
                />
              </article>
            </article>

            {/* Research Methodology and Findings */}
            <article className="pt-8 pb-5 lg:py-10 flex flex-col gap-7 lg:gap-8">
              {/* RM 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Research Methodology and Findings
                </h2>
                <p className="max-w-[326px] lg:max-w-none text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  Before coming up with the actual design:
                </p>
              </article>

              {/* RM 1.2 */}
              <article>
                <ul className="text-[14px] lg:text-[18px] leading-[140%] flex flex-col gap-6 lg:gap-8 list-decimal pl-4 lg:pl-6">
                  <li>
                    I conducted in-depth interviews with potential users to know
                    their pain points, needs, and preferences.
                  </li>
                  <li>
                    I conducted a competitor analysis, I wanted to see how the
                    website could stand out from its competitors{" "}
                    <Link className="text-[#DC511A]" href="">
                      (YouTube, Instagram, Cookpad.com, Allrecipes.com)
                    </Link>{" "}
                    and gain more traction in the market. I noticed that some
                    websites have issues with navigation, some have not-so-good
                    UI and some have too many ads popping up and there is no
                    place to shop for ingredients on these websites.
                  </li>
                  <li>
                    I conducted A/B testing after designing two variations of
                    the landing page and decided to remove categories from the
                    top navigation to prevent creating more screens because of
                    time constraints. I also had to change the image on the hero
                    section to something more fun and creative.
                  </li>
                  <li>
                    I had to remove this navigation because it won't look nice
                    on the responsiveness and one of the potential users told me
                    that it is better to use Google and YouTube video which is
                    free, and post the video on the site's YouTube channel. This
                    way the developer can embed the video link into the website
                    for free. Google API enables the video to play on the
                    website and it also contains the share, save, like, and
                    download buttons.
                  </li>
                </ul>
              </article>
            </article>

            {/* Innovative Feature “Shopping Integration” */}
            <article className="pt-8 pb-5 lg:py-10 flex flex-col gap-7 lg:gap-8">
              {/* IF 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  <span className="font-normal">Innovative Feature</span>{" "}
                  “Shopping Integration”
                </h2>
                <p className="max-w-[326px] lg:max-w-[1136px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  After the research and understanding the needs of the users, I
                  came up with an innovative feature{" "}
                  <span className="text-[#DC511A] font-semibold">“shopping integration”</span>{" "}
                  to help customers get ingredients from the site.
                </p>
              </article>

              {/* IF 1.2 x-7 */}
              <article>

                {/* 1.2.1 */}
                <article>
                  {/* IMAGE */}
                  <Image src={d1} alt="" />
                  {/* TEXTS */}
                  <article>
                    <h4>Hero Section</h4>
                    <p>The idea is to design something simple and relatable. I had to use a fancy font.</p>
                  </article>
                </article>

              </article>
            </article>
          </Container>
        </section>

        {/* NEXT PROJECT */}
        <SubFooter first={"Tasty and Yummy"} link={"/"} />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
