import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";

// IMAGE IMPORTATION
import header from "@/public/images/PNG/pbh-credit-solutions/header.png";
import goal from "@/public/images/PNG/pbh-credit-solutions/goal.png";
import userTesting from "@/public/images/PNG/pbh-credit-solutions/user-testing.png";
import quote1 from "@/public/images/SVG/quote1.svg";
import quote2 from "@/public/images/SVG/quote2.svg";
import prototype from "@/public/images/PNG/pbh-credit-solutions/pbh.gif";

// METADATA
export const metadata = {
  title: "PBH Credit Solutions",
  description:
    "Designed a credit solutions website to help immigrants navigate and improve their credit history.",
  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_BASE_URL + "/case-study/pgb-credit-solutions",
  },
};

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
        <section className="bg-[#FEF5EE] px-5 xl:px-0">
          <Container>
            <article className="pt-10 flex justify-center items-end gap-4 lg:gap-8">
              {/* FIRST IMAGE */}
              <article className="w-[305px] lg:w-[539px] h-auto">
                <Image src={header} alt="" placeholder="blur" />
              </article>
            </article>
          </Container>
        </section>

        {/* REST OF THE BODY */}
        <section className="px-5 xl:px-0 lg:border-b border-[#EFFEF3]">
          <Container>
            <div className="flex flex-col gap-4 lg:gap-6 my-6 lg:my-10">
              <h1 className="text-[#0C0D0D] font-cooper lg:text-[24px] tracking-[-0.64px] lg:tracking-[-0.96px]">
                PBH Credit Solutions
              </h1>
              <p className="text-[24px] lg:text-[48px] font-medium leading-[120%] tracking-[-0.96px] lg:tracking-[-1.92px]">
                Designed a credit solutions website to help immigrants navigate
                and improve their credit history.
              </p>
            </div>
          </Container>
        </section>

        {/* REST OF THE BODY */}
        <section className="px-5 xl:px-0">
          <Container>
            {/* Project overview */}
            <section className="pt-0 pb-6 lg:py-[38px] flex flex-col gap-4 lg:gap-10">
              <article className="max-w-[375px] lg:max-w-none flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Project overview
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  PBH Credit Consulting is a web platform designed to help
                  immigrants in the US monitor and build their credit scores.
                  The platform provides comprehensive tools, resources, and
                  personalized advice tailored to the unique needs of
                  immigrants, making it easier for them to understand and
                  navigate the complexities of the US credit system
                </p>
              </article>
            </section>

            {/* PROBLEM STATEMENT AND GOAL */}
            <article className="pt-4 pb-6 lg:pt-0 lg:pb-8 grid lg:grid-cols-[1fr_auto] items-center gap-10 lg:gap-6 ">
              <article className="flex flex-col gap-8 lg:gap-10">
                {/* PROBLEM STATEMENT */}
                <article className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                    Problem Statement
                  </h2>
                  <p className="max-w-[559px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                    Immigrants in the US often face significant challenges in
                    understanding and building their credit scores due to a lack
                    of tailored resources and guidance. This results in
                    difficulties in accessing essential financial services such
                    as loans, mortgages, and credit cards.
                  </p>
                </article>

                {/* GOAL */}
                <article className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                    Goal
                  </h2>
                  <p className="max-w-[574px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                    The primary goal of the project was to create an intuitive,
                    user-friendly platform that empowers immigrants to monitor
                    and improve their credit scores, ultimately helping them
                    achieve financial stability and success in the US.
                  </p>
                </article>
              </article>

              {/* IMAGE */}
              <article className="max-w-[569px] w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={goal} alt="" placeholder="blur" />
              </article>
            </article>

            {/* RESEARCH AND ANALYSIS */}
            <article className="pt-8 pb-5 flex flex-col gap-5 lg:gap-8 lg:py-10">
              {/* RAA 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Research & Analysis
                </h2>
                <p className="max-w-[807px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  Before coming up with the solution, I conducted online
                  interviews with people living in the United states to know how
                  they handle credit card issues and their experience using
                  credit cards.
                </p>
              </article>

              {/* RAA 2.2 */}
              <article className="grid gap-5 lg:grid-cols-[auto_1fr] lg:gap-[72px]">
                {/* RAA 2.2.1 - Interview Questions */}
                <article className="flex flex-col gap-5 lg:gap-4">
                  {/* HEADING */}
                  <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                    Interview Questions
                  </h5>
                  {/* LISTING */}
                  <article className="max-w-[547px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px] flex flex-col gap-4">
                    <p>1. Do you have a credit card?</p>
                    <p>
                      2. Which company do you use when you need an advise as
                      regards credit history?
                    </p>
                    <p>3. Have you experienced a bad credit history?</p>
                    <p>4. How were you able to resolve it?</p>
                    <p>
                      5. If there is a consultation company where you get to
                      make enquiries as regarding your credit, will you use
                      their services?
                    </p>
                  </article>
                </article>

                {/* RAA 2.2.2 - Key Insights */}
                <article className="flex flex-col gap-5 lg:gap-4">
                  {/* HEADING */}
                  <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                    Key Insights
                  </h5>
                  {/* LISTING */}
                  <article className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px] flex flex-col gap-4">
                    <p>1. They all survive on credit cards in the US.</p>
                    <p>
                      2. Participant B says he use discovery company to get
                      advise on how to use credit card.
                    </p>
                    <p>3. None of the participants have.</p>
                    <p>4. They don&apos;t have bad credit issues. </p>
                    <p>5. Yes, they will. </p>
                  </article>
                </article>
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
                    CEO and CTO of PBH Credit Solutions joining.
                  </p>
                </div>
              </div>
            </article>

            <section className="pt-8 pb-10 lg:py-10 flex flex-col gap-4 lg:gap-8">
              <article className="flex flex-col gap-5 lg:gap-10">
                {/* HEADER */}
                <div>
                  <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                    Design Solutions
                  </h2>
                  <p className="mt-4 lg:mt-6 text-[14px] lg:text-[18px] text-[#0C0D0D] tracking-[-0.14px] lg:tracking-[-0.18px]">
                    Before I jumped into the design solution, it was important
                    to define what success mean to the users and the business. I
                    designed the desktop and mobile version of the website.
                  </p>
                </div>

                {/* UT 1.2 - VIDEO EMBEDDING */}
                <div className="pt-[56%] relative">
                  <iframe
                    src="https://player.vimeo.com/video/1007908038?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="absolute top-0 left-0 w-full h-full"
                    title="Tasty and Yummy - Prototype"
                  ></iframe>
                </div>
                <Script src="https://player.vimeo.com/api/player.js" />
              </article>
            </section>

            {/* User Testing */}
            <article className="py-8 lg:py-10 flex flex-col gap-5 lg:gap-6">
              {/* UT 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  User Testing
                </h2>
                <p className="max-w-[1048px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal">
                  I Informed the user to go through the platform and make sure
                  that they understood what it was about before the test began
                  so that there were no incorrect answers. I told them to
                  describe their reasoning out loud for each action they took
                  and Insist that they speak openly and honestly about their
                  experiences.
                </p>
              </article>

              {/* UT 1.2 */}
              <Image className="w-full h-auto" src={userTesting} alt="" />
            </article>

            {/* What Comes Next? */}
            <article className="py-8 lg:py-10 flex flex-col gap-4 lg:gap-6">
              {/* WCN 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  What Comes Next?
                </h2>
              </article>

              {/* RM 1.2 */}
              <article>
                <ul className="text-[14px] lg:text-[18px] leading-[140%] flex flex-col gap-4 lg:gap-4 list-decimal pl-4 lg:pl-6">
                  <li className="max-w-[1018px]">
                    <span className="font-semibold">Development Handoff:</span>{" "}
                    I created a detailed design documentation and assets for
                    seamless handoff to the development team.
                  </li>
                  <li>
                    <span className="font-semibold">Quality Assurance:</span> I
                    will also collaborate with QA testers to ensure the final
                    product was free of bugs.
                  </li>
                  <li className="max-w-[875px]">
                    <span className="font-semibold">
                      Continuous Improvement:
                    </span>{" "}
                    Established a feedback loop with users to continuously
                    gather insights and iterate on the design post-launch.
                  </li>
                </ul>
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
                    The website looks really good and neat.
                  </p>
                  {/* FROM  */}
                  <article className="flex flex-col gap-2">
                    <h6 className="text-[16px] lg:text-[24px] font-bold">
                      Seun Remi
                    </h6>
                    <h6 className="text-[14px] lg:text-[18px]">
                      CEO, PBH Credit Solutions
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
        <SubFooter first={"Peerless"} link={"/case-study/peerless"} />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
