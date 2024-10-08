import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

// IMAGE IMPORTATION
import jogovest1 from "@/public/images/PNG/jogovest/jogovest1.png";
import jogovest2 from "@/public/images/PNG/jogovest/jogovest2.png";
import jogovest3 from "@/public/images/PNG/jogovest/jogovest3.png";
import jogovest4 from "@/public/images/PNG/jogovest/jogovest4.png";

import jogo1 from "@/public/images/PNG/jogovest/jogo1.png";
import jogo2 from "@/public/images/PNG/jogovest/jogo2.png";
import jogo3 from "@/public/images/PNG/jogovest/jogo3.png";
import jogo4 from "@/public/images/PNG/jogovest/jogo4.png";

import arrow from "@/public/images/SVG/arrow.svg";
import smallArrow from "@/public/images/SVG/smallArrow.svg";

import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";

import quote1 from "@/public/images/SVG/quote1.svg";
import quote2 from "@/public/images/SVG/quote2.svg";

// METADATA
export const metadata = {
  title: "Jogovest",
  description:
    "Jogovest is the first life time digital product designed to tokenize investments across Africa. It seeks to solve the problem of investors who are unable to acquire potential investments and returns due to tied up capital.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/jogovest",
  },
};

export default function Jogovest() {
  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <main>
        {/* HERO SECTION */}
        <section className="bg-[#F5F6F6] px-5 xl:px-0">
          <Container>
            <article className="pt-10 flex justify-center items-end gap-4 lg:gap-8">
              {/* FIRST IMAGE */}
              <article className="w-[90px] lg:w-[173px] h-auto">
                <Image src={jogovest2} alt="" placeholder="blur" />
              </article>
              {/* SECOND IMAGE */}
              <article className="w-[90px] lg:w-[173px] h-auto">
                <Image src={jogovest1} alt="" placeholder="blur" />
              </article>
              {/* THIRD IMAGE */}
              <article className="w-[90px] lg:w-[173px] h-auto">
                <Image src={jogovest3} alt="" placeholder="blur" />
              </article>
            </article>
          </Container>
        </section>

        {/* REST OF THE BODY */}
        <section className="px-5 xl:px-0 lg:border-b border-[#EFFEF3]">
          <Container>
            <div className="flex flex-col gap-4 lg:gap-6 my-6 lg:my-10">
              <h1 className="text-[#0C0D0D] font-cooper lg:text-[24px] tracking-[-0.64px] lg:tracking-[-0.96px]">
                Jogovest
              </h1>
              <p className="text-[24px] lg:text-[48px] font-medium leading-[120%] tracking-[-0.96px] lg:tracking-[-1.92px]">
                Designed an investment platform tailored to meet the unique
                needs of Nigerian investors.
              </p>
            </div>
          </Container>
        </section>

        <section className="px-5 xl:px-0">
          <Container>
            {/* HEADING + Project OVERVIEW */}
            <section className="pt-2 pb-3 lg:py-[38px] flex flex-col gap-4 lg:gap-10">
              {/* PROJECT OVERVIEW */}
              <article className="max-w-[326px] lg:max-w-none flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Project overview
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  Jogovest is the first life time digital product designed to
                  tokenize investments across Africa. It seeks to solve the
                  problem of investors who are unable to acquire potential
                  investments and returns due to tied up capital.
                </p>
              </article>
            </section>

            {/* PROBLEM STATEMENT + GOAL + IMAGE */}
            <article className="pt-8 pb-5 lg:py-0 grid lg:grid-cols-[1fr_auto] items-center gap-10 lg:gap-6 ">
              {/* PROBLEM STATEMENT AND GOAL */}
              <article className="flex flex-col gap-8 lg:gap-10">
                {/* PROBLEM STATEMENT */}
                <article className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                    Problem Statement
                  </h2>
                  <p className="max-w-[326px] lg:max-w-none text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                    According to Economic Research, not everyone understands how
                    online investment works, so we want to simplify investment
                    process for investors and upcoming investors.
                  </p>
                </article>

                {/* GOAL */}
                <article className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                    Goal
                  </h2>
                  <p className="max-w-[326px] lg:max-w-none text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                    To become the go-to investment platform in Africa for all
                    retail investors through the provision of value added
                    services and great experience on the app.
                  </p>
                </article>
              </article>

              {/* IMAGE */}
              <article className="max-w-[569px] w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={jogovest4} alt="" placeholder="blur" />
              </article>
            </article>

            {/* RESEARCH AND ANALYSIS */}
            <article className="pt-6 pb-5 flex flex-col gap-5 lg:gap-6 lg:py-10">
              {/* RAA 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Research & Analysis
                </h2>
                <p className="max-w-[1166px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal">
                  I learned about investment and investors to understand what
                  investors are looking for whenever they search for information
                  about related investment and companies they use. I spoke with
                  some investors to learn about their pain points and what they
                  will like to see on the app. I also conducted competitive
                  analysis to see how other apps work and how I can improve the
                  experience of Jogovest.
                </p>
              </article>
            </article>

            {/* Work Approach */}
            <article className="pt-10 pb-5 flex flex-col gap-5 lg:gap-6 lg:py-10">
              {/* WA 1.1 */}
              <article className="flex flex-col">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Work Approach
                </h2>
              </article>

              {/* WA 1.2 */}
              <div className="grid gap-5 lg:grid-cols-2">
                <div className="lg:p-10 py-8 px-5 bg-[#F5F6F6] rounded-[12px] flex flex-col gap-4">
                  <h4 className="text-[20px] lg:text-[32px] font-medium text-[#0C0D0D]">
                    Iterations
                  </h4>
                  <p className="text-[#4C5251] leading-[140%] text-[14px] lg:text-[16px]">
                    I iterated a lot before I came up with the final design.
                  </p>
                </div>
                <div className="lg:p-10 py-8 px-5 bg-[#F5F6F6] rounded-[12px] flex flex-col gap-4">
                  <h4 className="text-[20px] lg:text-[32px] font-medium text-[#0C0D0D]">
                    Flexible Approach
                  </h4>
                  <p className="text-[#4C5251] leading-[140%] text-[14px] lg:text-[16px]">
                    I maintained a flexible approach to be able to meet
                    client&apos;s changing needs, to meet not only technical,
                    but business goals.
                  </p>
                </div>
                <div className="lg:p-10 py-8 px-5 bg-[#F5F6F6] rounded-[12px] flex flex-col gap-4">
                  <h4 className="text-[20px] lg:text-[32px] font-medium text-[#0C0D0D]">
                    In house testing
                  </h4>
                  <p className="text-[#4C5251] leading-[140%] text-[14px] lg:text-[16px]">
                    The Product owner and stakeholders were involved in testing
                    the product before it went into development.
                  </p>
                </div>
                <div className="lg:p-10 py-8 px-5 bg-[#F5F6F6] rounded-[12px] flex flex-col gap-4">
                  <h4 className="text-[20px] lg:text-[32px] font-medium text-[#0C0D0D]">
                    Regular Communications
                  </h4>
                  <p className="text-[#4C5251] leading-[140%] text-[14px] lg:text-[16px]">
                    I introduced &quot;daily&quot; meeting once a week with the
                    CEO and CTO of Jogovest joining.
                  </p>
                </div>
              </div>
            </article>

            {/* Challenges and Solutions */}
            <article className="pt-8 pb-5 flex flex-col gap-5 lg:gap-6 lg:py-10">
              {/* CAS 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Challenges and Solutions
                </h2>
                <p className="max-w-[616px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  I was the sole designer for the project, so I had to do the
                  research, competitive analysis, I also designed the admin
                  dashboard, landing page and the mobile app
                </p>
              </article>
            </article>
          </Container>

          {/* NDA */}
          <article className="bg-[#7BFAAD] py-5 lg:py-10 -mx-5 xl:mx-0 pl-5 pr-[38px]">
            <Container>
              <h3 className="text-[24px] lg:text-[40px] font-semibold text-[#434747] italic leading-normal max-w-[1104px]">
                I signed an NDA for this project, so I won&apos;t be able to
                reveal more screens and research.
              </h3>
            </Container>
          </article>

          <Container>
            {/* Product Features */}
            <article className="pt-8 pb-5 lg:py-10 flex flex-col gap-6 lg:gap-12">
              {/* TEXT */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Product Features
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  These are the key features of the investment platform.
                </p>
              </article>

              {/* IMAGERY - 4 */}
              <article className="flex flex-col lg:gap-[52px]">
                {/* 1.1 */}
                <article className="flex items-center gap-x-2">
                  {/* Image */}
                  <article className="shrink-0 w-[137px] lg:w-[229px] h-auto ">
                    <Image src={jogo1} alt="" placeholder="blur" />
                  </article>
                  {/* Seperator */}
                  <article className="shrink-0">
                    <Image className="hidden lg:block" src={arrow} alt="" />
                    <Image
                      className="block lg:hidden"
                      src={smallArrow}
                      alt=""
                    />
                  </article>
                  {/* Texts */}
                  <article className="flex flex-col gap-3 lg:gap-6 lg:max-w-[352px]">
                    <h6 className="text-[14px] lg:text-[24px] cod-gray-800 font-semibold">
                      Home Page
                    </h6>
                    <p className="text-[12px] lg:text-[18px] leading-[140%]">
                      The home page contains every actions the user wants to
                      take on the app.
                    </p>
                  </article>
                </article>

                {/* 1.2 */}
                <article className="flex items-center gap-x-2">
                  {/* Texts */}
                  <article className="flex flex-col gap-3 lg:gap-6 lg:max-w-[296px]">
                    <h6 className="text-[14px] lg:text-[24px] cod-gray-800 font-semibold">
                      Registration Page
                    </h6>
                    <p className="text-[12px] lg:text-[18px] leading-[140%]">
                      The registration page contains the form to complete user
                      profile.
                    </p>
                  </article>

                  {/* Seperator */}
                  <article className="shrink-0">
                    <Image className="hidden lg:block" src={arrow} alt="" />
                    <Image
                      className="block lg:hidden"
                      src={smallArrow}
                      alt=""
                    />
                  </article>

                  {/* Image */}
                  <article className="shrink-0 w-[137px] lg:w-[229px] h-auto ">
                    <Image src={jogo2} alt="" placeholder="blur" />
                  </article>
                </article>

                {/* 1.3 */}
                <article className="flex items-center gap-x-2">
                  {/* Image */}
                  <article className="shrink-0 w-[137px] lg:w-[229px] h-auto ">
                    <Image src={jogo3} alt="" />
                  </article>
                  {/* Seperator */}
                  <article className="shrink-0">
                    <Image className="hidden lg:block" src={arrow} alt="" />
                    <Image
                      className="block lg:hidden"
                      src={smallArrow}
                      alt=""
                    />
                  </article>
                  {/* Texts */}
                  <article className="flex flex-col gap-3 lg:gap-6 lg:max-w-[312px]">
                    <h6 className="text-[14px] lg:text-[24px] cod-gray-800 font-semibold">
                      JogoFlex Plan
                    </h6>
                    <p className="text-[12px] lg:text-[18px] leading-[140%]">
                      The JogoFlex plan is a flexible investment plan for anyone
                      who is willing to invest short time.
                    </p>
                  </article>
                </article>

                {/* 1.4 */}
                <article className="flex items-center gap-x-2">
                  {/* Texts */}
                  <article className="flex flex-col gap-3 lg:gap-6 lg:max-w-[424px]">
                    <h6 className="text-[14px] lg:text-[24px] cod-gray-800 font-semibold">
                      JogoLife Plan
                    </h6>
                    <p className="text-[12px] lg:text-[18px] leading-[140%]">
                      The JogoLife plan is a long investment plan for anyone who
                      is willing to invest long time.
                    </p>
                  </article>

                  {/* Seperator */}
                  <article className="shrink-0">
                    <Image className="hidden lg:block" src={arrow} alt="" />
                    <Image
                      className="block lg:hidden"
                      src={smallArrow}
                      alt=""
                    />
                  </article>

                  {/* Image */}
                  <article className="shrink-0 w-[137px] lg:w-[229px] h-auto ">
                    <Image src={jogo4} alt="" placeholder="blur" />
                  </article>
                </article>
              </article>
            </article>

            {/* CLIENT REVIEW */}
            <article className="pt-8 pb-5 lg:py-10 flex flex-col gap-4 lg:gap-2">
              {/* HEADER */}
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Client Review
              </h2>

              {/* QUOTE */}
              <article className="flex gap-2 lg:gap-4">
                {/* LEFT */}
                <article className="w-[34px] lg:w-auto h-auto shrink-0">
                  <Image src={quote1} alt="" />
                </article>

                {/* CONTENT */}
                <article className="pt-2 lg:pt-6 flex flex-col gap-4 lg:gap-5">
                  {/* MAIN BODY */}
                  <p className="text-[12px] lg:text-[18px] leading-[140%]">
                    You did an amazing job with the prototype and designs, I
                    really can&apos;t wait to work with you in future.
                  </p>
                  {/* FROM  */}
                  <article className="flex flex-col gap-2">
                    <h6 className="text-[16px] lg:text-[24px] font-bold">
                      Joseph Boyede
                    </h6>
                    <h6 className="text-[14px] lg:text-[18px]">
                      CEO, Jogovest
                    </h6>
                  </article>
                </article>

                {/* RIGHT */}
                <article className="w-[34px] lg:w-auto h-auto shrink-0">
                  <Image src={quote2} alt="" />
                </article>
              </article>
            </article>
          </Container>
        </section>

        {/* NEXT PROJECT */}
        <SubFooter
          short={true}
          first={"PBH Website"}
          link={"/case-study/pbh-credit-solutions"}
        />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
