import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

// IMAGE IMPORTATION
import oppia1 from "@/public/images/PNG/oppia/oppia1.png";
import oppia2 from "@/public/images/PNG/oppia/oppia2.png";
import oppia3 from "@/public/images/PNG/oppia/oppia3.png";
import oppia4 from "@/public/images/PNG/oppia/oppia4.png";
import hmw1 from "@/public/images/SVG/hmw1.svg";
import hmw2 from "@/public/images/SVG/hmw2.svg";
import hmw3 from "@/public/images/SVG/hmw3.svg";
import hmw4 from "@/public/images/SVG/hmw4.svg";
import hmw5 from "@/public/images/SVG/hmw5.svg";
import what from "@/public/images/SVG/oppia/what.svg";
import where from "@/public/images/SVG/oppia/where.svg";
import who from "@/public/images/SVG/oppia/who.svg";
import why from "@/public/images/SVG/oppia/why.svg";
import ds1 from "@/public/images/PNG/oppia/ds1.png";
import ds2 from "@/public/images/PNG/oppia/ds2.png";
import longArrow from "@/public/images/SVG/oppia/longArrow.svg";
import ut from "@/public/images/PNG/oppia/ut.png";
import ut2 from "@/public/images/PNG/oppia/ut2.png";
import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";

// METADATA
export const metadata = {
  title: "Oppia",
  description:
    "Oppia Foundation is a platform that provides education for those who lack access to it. Statistics shows that 61 million children aren’t able to attend primary education worldwide and 17 million will never be able to step their foot in school if the trend continues.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/oppia",
  },
};

export default function Oppia() {
  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <main>
        {/* HERO SECTION */}
        <section className="bg-[#EFFEF3] px-5 xl:px-0">
          <Container>
            <article className="pt-10 flex justify-center items-end gap-4 lg:gap-8">
              {/* FIRST IMAGE */}
              <article className="max-w-[90px] lg:max-w-[173px] w-full h-auto">
                <Image src={oppia1} alt="" />
              </article>
              {/* SECOND IMAGE */}
              <article className="max-w-[90px] lg:max-w-[173px] w-full h-auto">
                <Image src={oppia2} alt="" />
              </article>
              {/* THIRD IMAGE */}
              <article className="max-w-[90px] lg:max-w-[173px] w-full h-auto">
                <Image src={oppia3} alt="" />
              </article>
            </article>
          </Container>
        </section>

        {/* REST OF THE BODY */}

        <section className="px-5 xl:px-0 border-b border-[#EFFEF3]">
          <Container>
            <div className="flex flex-col gap-4 lg:gap-6 my-6 lg:my-10">
              <h1 className="text-[#0C0D0D] font-cooper lg:text-[24px] tracking-[-0.64px] lg:tracking-[-0.96px]">
                Oppia
              </h1>
              <p className="text-[24px] lg:text-[48px] font-medium leading-[120%] tracking-[-0.96px] lg:tracking-[-1.92px]">
                Designed the language feature and conducted user research to
                help improve the user experience on the app
              </p>
            </div>
          </Container>
        </section>

        <section className="px-5 xl:px-0 border-b border-[#EFFEF3]">
          <Container>
            <section className="py-8 lg:py-10 flex flex-col gap-4 lg:gap-10">
              {/* PROJECT OVERVIEW */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Project overview
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  Oppia is a learning platform aimed at providing quality
                  education to children who lack access to traditional
                  schooling. Given that 61 million children worldwide are unable
                  to attend primary education, and 17 million will never step
                  foot in a school if current trends persist, Oppia&apos;s
                  mission is critical. The language and voice feature was
                  designed to enhance the accessibility of the app, making it
                  easier for children from diverse linguistic backgrounds to
                  learn effectively.
                </p>
              </article>
            </section>
          </Container>
        </section>

        <section className="px-5 xl:px-0">
          <Container>
            {/* ROLE */}
            <section className="py-8 lg:py-10 flex flex-col gap-4 lg:gap-10">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  My Role
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  As the Lead Product Designer, I was responsible for
                  conceptualizing, designing, and implementing the language and
                  voice features. This involved conducting user research,
                  developing user personas, creating wireframes and prototypes,
                  and working closely with developers and educators to ensure
                  the features were effective and aligned with the educational
                  goals of Oppia.
                </p>
              </article>
            </section>

            {/* PROBLEM STATEMENT + GOAL + IMAGE */}
            <article className="py-8 lg:py-10 grid lg:grid-cols-[1fr_auto] items-center gap-4 lg:gap-6 ">
              {/* PROBLEM STATEMENT AND GOAL */}
              <article className="flex flex-col gap-8 lg:gap-10">
                {/* PROBLEM STATEMENT */}
                <article className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                    Problem Statement
                  </h2>
                  <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                    Millions of children worldwide lack access to primary
                    education due to various barriers, including language and
                    literacy challenges. Oppia aims to address this by providing
                    an inclusive learning platform. The current version of the
                    app lacks features that accommodate children who are
                    non-native speakers or have limited reading skills. There is
                    a need to design language and voice functionalities that can
                    make the app more accessible and engaging for these
                    children.
                  </p>
                </article>

                {/* GOAL */}
                <article className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                    Goal
                  </h2>
                  <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                    To enhance the accessibility of the Oppia Android learning
                    app by integrating language and voice features that cater to
                    children from diverse linguistic backgrounds and varying
                    levels of literacy.
                  </p>
                </article>
              </article>

              {/* IMAGE */}
              <article className="max-w-[569px] w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={oppia4} alt="" />
              </article>
            </article>

            {/* PRODUCT METRICS */}
            <section className="py-8 lg:py-10 flex flex-col gap-4 lg:gap-10">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Product Metrics
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  Currently we have <span className="font-bold">4</span>{" "}
                  languages on the app, and through our analytics we have gotten{" "}
                  <span className="font-bold">10,000</span> more children
                  onboarded on the app and we are looking to add more languages
                  on the app.
                </p>
              </article>
            </section>

            {/* RESEARCH AND ANALYSIS */}
            <article className="pt-8 pb-5 flex flex-col gap-5 lg:gap-8 lg:py-10">
              {/* RAA 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Research & Analysis{" "}
                  <span className="hidden lg:inline">
                    (How we generated the product metrics)
                  </span>
                </h2>
                <p className="max-w-[807px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  Before coming up with the solution, I conducted interview with
                  children within the range of{" "}
                  <span className="font-bold">7-14</span>.
                </p>

                <p className="hidden lg:block mt-4 text-[18px] font-bold tracking-[-0.18px] italic">
                  Here are the interview questions and key insights from the
                  research
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
                  <article className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px] flex flex-col gap-4">
                    <p>1. Did you find it difficult reading in English?</p>
                    <p>
                      2. What are some of the distractions you face when using
                      the app?
                    </p>
                    <p>3. How are you navigating within the app?</p>
                    <p>4. Which apps do you use for learning?</p>
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
                    <p>
                      1. <span className="font-bold">30%</span> of the mobile
                      app users needed interpreters to help translate{" "}
                    </p>
                    <p>2. Email and Text Notifications</p>
                    <p>3. The app is very seamless and easy to use</p>
                    <p>4. Most of the users make use of Ulesson for study</p>
                  </article>
                </article>
              </article>
            </article>

            {/* Our Process using the “How Might We Technique” */}
            <article className="py-8 gap-9 lg:pt-[92px] lg:pb-[134px] flex flex-col mlg:gap-[76px]">
              {/* 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Our Process using the “How Might We Technique”
                </h2>
                <p className="max-w-[807px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  At the end of the discovery, we constructed some how might we
                  questions that will help us solve frame the problems for
                  ideation.
                </p>
              </article>

              {/* 1.2 */}
              <article className="relative mlg:max-w-none">
                <p className="text-[14px] mlg:text-[24px] leading-[140%] font-semibold italic">
                  How Might We{" "}
                  <span className="bg-[#EE813A] not-italic relative">
                    make the Oppia android mobile app inclusive
                    <Image
                      className="hidden mlg:block absolute top-[-51px] left-[221px]"
                      src={hmw4}
                      alt=""
                    />
                  </span>{" "}
                  for{" "}
                  <span className="bg-[#3AEE81] not-italic relative">
                    underprivileged children
                    <Image
                      className="hidden mlg:block absolute top-[-51px] right-[134px]"
                      src={hmw3}
                      alt=""
                    />
                  </span>{" "}
                  <span className="relative">
                    globally in
                    <Image
                      className="hidden mlg:block absolute top-[-57px] right-0"
                      src={hmw2}
                      alt=""
                    />
                  </span>{" "}
                  order to enjoy free access to education.
                </p>

                {/* IMAGE - iconoir:path-arrow */}
                <Image
                  className="w-6 h-6 mlg:w-auto mlg:h-auto absolute top-[-34px] mlg:top-[-64px] left-[67px] mlg:left-[172px]"
                  src={hmw5}
                  alt=""
                />

                {/* WHO */}

                <Image
                  className="hidden mlg:block absolute bottom-[-88px] left-[170px]"
                  src={hmw1}
                  alt=""
                />
              </article>
            </article>

            {/* DESIGN SOLUTION */}
            <article className="pt-8 pb-5 lg:py-10 flex flex-col gap-6 lg:gap-10">
              {/* HEADING + SUBHEADING */}
              <article className="flex flex-col gap-4 lg:gap-6">
                {/* HEADING */}
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Design Solution
                </h2>
                {/* SUB HEADING */}
                <p className="max-w-[807px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  We implemented the <b>language feature</b> and added{" "}
                  <b>three languages</b>( Portuguese, Arabic, Pidgin )
                </p>
              </article>

              {/* IMAGERY */}
              <article className="flex items-center ">
                {/* IMAGE 1 */}
                <article className="w-[137px] max-w-[234px] lg:w-full h-auto shrink-0">
                  <Image src={ds1} alt="" />
                </article>

                {/* CONTENT - MIDDLE */}
                <article className="">
                  <p className="hidden lg:block pl-2 text-[16px] tracking-[-0.16px] max-w-[288px]">
                    Once the user clicks on the App language in the settings
                    page, it takes the user to the language option and they are
                    able to switch languages
                  </p>
                  <p className="block lg:hidden pl-2 text-[12px]">
                    Once a user clicks on App language, It takes them to the
                    Language options
                  </p>
                  {/* IMAGE */}
                  <article>
                    <Image src={longArrow} alt="" />
                  </article>
                </article>

                {/* IMAGE 2 */}
                <article className="w-[137px] max-w-[234px] lg:w-full h-auto shrink-0">
                  <Image src={ds2} alt="" />
                </article>
              </article>
            </article>

            {/* USER TESTING */}
            <article className="pt-8 pb-5 lg:py-10 ">
              {/* HEADING + TEXT */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  User Testing
                </h2>
                <p className="max-w-[807px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  I conducted an in person interview with two children to be
                  sure they can access the language feature and switch to the
                  language of their choice
                </p>
              </article>
              {/* IMAGERY */}
              <article className="mt-4 mb-6 lg:mt-8 lg:mb-10">
                <Image
                  className="hidden lg:block w-full h-auto"
                  src={ut}
                  alt=""
                />
                <Image
                  className="block lg:hidden w-full h-auto"
                  src={ut2}
                  alt=""
                />
              </article>

              {/* SUBHEADING + TEXTS */}
              <article className="flex flex-col gap-4">
                <h4 className="text-[18px] lg:text-[32px] font-semibold cod-gray-800">
                  Results from the testing
                </h4>
                <ul className="list-disc *:ml-6 flex flex-col gap-6 text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  <li>
                    From the testing, we gathered that users should be able to
                    choose the language they want at the onboarding stage.
                  </li>
                  <li>The app is fun and educative.</li>
                  <li>It is easy to locate the language app.</li>
                </ul>
              </article>
            </article>

            {/* Challenges Faced */}
            <article className="max-w-[1077px] pt-8 pb-5 lg:py-10 ">
              {/* HEADING + TEXT */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Challenges Faced
                </h2>
                <div className="text-[14px] lg:text-[18px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.18px]">
                  <h6 className="font-medium">Diverse Linguistic Needs:</h6>
                  <ul className="list-disc ml-6">
                    <li>
                      Addressing the wide range of languages spoken by the
                      target user base.
                    </li>
                    <div className="lg:hidden">&nbsp;</div>
                    <li>
                      Solved this by prioritizing the most commonly spoken
                      languages and planning for future expansions.
                    </li>
                  </ul>
                </div>
              </article>
            </article>

            {/* What Comes Next? */}
            <article className="max-w-[1077px] pt-8 pb-5 lg:py-10">
              {/* HEADING + TEXT */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  What Comes Next?
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  We will keep improving the experience of the app and reaching
                  out to NGOs to help train underprivileged children to be able
                  to use the app.
                </p>
              </article>
            </article>
          </Container>
        </section>

        {/* NEXT PROJECT */}
        <SubFooter first={"Jogovest"} link={"/case-study/jogovest"} />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
