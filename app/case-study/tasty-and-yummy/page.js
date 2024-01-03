import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

// IMAGE IMPORTATION
import tay1 from "@/public/images/PNG/tay/tay1.png";
import tay2 from "@/public/images/PNG/tay/tay2.png";
import tay3 from "@/public/images/PNG/tay/pns.png";

import ds1 from "@/public/images/PNG/tay/ds1.png";
import ds2 from "@/public/images/PNG/tay/ds2.png";
import ds3 from "@/public/images/PNG/tay/ds3.png";
import ds4 from "@/public/images/PNG/tay/ds4.png";
import ds5 from "@/public/images/PNG/tay/ds5.png";
import ds6 from "@/public/images/PNG/tay/ds6.png";
import ds7 from "@/public/images/PNG/tay/ds7.png";

import ut1 from "@/public/images/PNG/tay/ut1.png";

import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";

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
                Tasty & Yummy{" "}
                <span className="hidden lg:inline">Recipe Website</span>
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
            <article className="pt-8 pb-5 lg:py-0 grid lg:grid-cols-[1fr_auto] items-center gap-6 ">
              {/* PROBLEM STATEMENT AND GOAL */}
              <article className="flex flex-col gap-8 lg:gap-10">
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
            <article className="pt-8 pb-5 flex flex-col gap-6 lg:gap-8 lg:py-10">
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
                  Research Methodology
                  <span className="hidden lg:block"> and Findings</span>
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
                    I had to remove this navigation because it won&apos;t look
                    nice on the responsiveness and one of the potential users
                    told me that it is better to use Google and YouTube video
                    which is free, and post the video on the site&apos;s YouTube
                    channel. This way the developer can embed the video link
                    into the website for free. Google API enables the video to
                    play on the website and it also contains the share, save,
                    like, and download buttons.
                  </li>
                </ul>
              </article>
            </article>

            {/* Innovative Feature “Shopping Integration” */}
            <article className="pt-8 pb-5 lg:py-10 flex flex-col gap-7 lg:gap-8">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  <span className="font-normal">Innovative Feature</span>{" "}
                  “Shopping Integration”
                </h2>
                <p className="max-w-[326px] lg:max-w-[1136px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  After the research and understanding the needs of the users, I
                  came up with an innovative feature{" "}
                  <span className="text-[#DC511A] font-semibold">
                    “shopping integration”
                  </span>{" "}
                  to help customers get ingredients from the site.
                </p>
              </article>
            </article>

            {/* Design Solution */}
            <article className="pt-8 pb-5 flex flex-col gap-6 lg:gap-8 lg:py-10">
              {/* DS 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Design Solution
                </h2>
                <p className="max-w-[807px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal">
                  Before I jumped into the design solution, it was important to
                  define what success mean to the users and the business.
                </p>
              </article>

              {/* DS 1.2 x-7 */}
              <article className="flex flex-col gap-10 lg:gap-[84px]">
                {/* 1.2.1 */}
                <article className="flex gap-2 lg:gap-[52px] items-start">
                  {/* IMAGE */}
                  <article className="max-w-[610px] h-auto rounded-[2px] shadow-[0px_8px_16px_0px_rgba(135,_96,_56,_0.15)]">
                    <Image src={ds1} alt="" placeholder="blur" />
                  </article>

                  {/* TEXTS */}
                  <article className="flex flex-col gap-2 lg:gap-6 lg:pt-16 w-[177px] lg:w-[458px] shrink-0">
                    <h4 className="text-[14px] lg:text-[24px] font-semibold cod-gray-800">
                      Hero Section
                    </h4>
                    <p className="text-[12px] lg:text-[18px] leading-[140%]">
                      The idea is to design something simple and relatable. I
                      had to use a fancy font.
                    </p>
                  </article>
                </article>

                {/* 1.2.2 */}
                <article className="flex gap-2 lg:gap-[52px] items-start">
                  {/* IMAGE */}
                  <article className="max-w-[610px] h-auto rounded-[2px] shadow-[0px_8px_16px_0px_rgba(135,_96,_56,_0.15)]">
                    <Image src={ds2} alt="" placeholder="blur" />
                  </article>

                  {/* TEXTS */}
                  <article className="flex flex-col gap-2 lg:gap-6 lg:pt-16 w-[177px] lg:w-[458px] shrink-0">
                    <h4 className="text-[14px] lg:text-[24px] font-semibold cod-gray-800">
                      Featured Meals
                    </h4>
                    <p className="text-[12px] lg:text-[18px] leading-[140%]">
                      The featured recipe section comprises the most engaging
                      recipes, so the user can decide to check out any of these
                      meals.
                    </p>
                  </article>
                </article>

                {/* 1.2.3 */}
                <article className="flex gap-2 lg:gap-[52px] items-start">
                  {/* IMAGE */}
                  <article className="max-w-[610px] h-auto rounded-[2px] shadow-[0px_8px_16px_0px_rgba(135,_96,_56,_0.15)]">
                    <Image src={ds3} alt="" placeholder="blur" />
                  </article>

                  {/* TEXTS */}
                  <article className="flex flex-col gap-2 lg:gap-6 lg:pt-16 w-[177px] lg:w-[458px] shrink-0">
                    <h4 className="text-[14px] lg:text-[24px] font-semibold cod-gray-800">
                      Dietary Restrictions
                    </h4>
                    <p className="text-[12px] lg:text-[18px] leading-[140%]">
                      This section contains different types of special diets
                      which include weight loss, weight gain, diabetes, and
                      fertility.
                    </p>
                  </article>
                </article>

                {/* 1.2.4 */}
                <article className="flex gap-2 lg:gap-[52px] items-start">
                  {/* IMAGE */}
                  <article className="max-w-[610px] h-auto rounded-[2px] shadow-[0px_8px_16px_0px_rgba(135,_96,_56,_0.15)]">
                    <Image src={ds4} alt="" placeholder="blur" />
                  </article>

                  {/* TEXTS */}
                  <article className="flex flex-col gap-2 lg:gap-6 lg:pt-16 w-[177px] lg:w-[458px] shrink-0">
                    <h4 className="text-[14px] lg:text-[24px] font-semibold cod-gray-800">
                      Reviews
                    </h4>
                    <p className="text-[12px] lg:text-[18px] leading-[140%]">
                      The review section is gotten from users who have tested
                      the platform.
                    </p>
                  </article>
                </article>

                {/* 1.2.5 */}
                <article className="flex gap-2 lg:gap-[52px] items-start">
                  {/* IMAGE */}
                  <article className="max-w-[610px] h-auto rounded-[2px] shadow-[0px_8px_16px_0px_rgba(135,_96,_56,_0.15)]">
                    <Image src={ds5} alt="" placeholder="blur" />
                  </article>

                  {/* TEXTS */}
                  <article className="flex flex-col gap-2 lg:gap-6 lg:pt-16 w-[177px] lg:w-[458px] shrink-0">
                    <h4 className="text-[14px] lg:text-[24px] font-semibold cod-gray-800">
                      Sign up
                    </h4>
                    <p className="text-[12px] lg:text-[18px] leading-[140%]">
                      I included a simple sign-up/ sign in page that allows
                      users sign in with their google account. Once a user signs
                      in, he/she can have the saved or downloaded recipe videos
                      uploaded to their profile.
                    </p>
                  </article>
                </article>

                {/* 1.2.6 */}
                <article className="flex gap-2 lg:gap-[52px] items-start">
                  {/* IMAGE */}
                  <article className="max-w-[610px] h-auto rounded-[2px] shadow-[0px_8px_16px_0px_rgba(135,_96,_56,_0.15)]">
                    <Image src={ds6} alt="" placeholder="blur" />
                  </article>

                  {/* TEXTS */}
                  <article className="flex flex-col gap-2 lg:gap-6 lg:pt-16 w-[177px] lg:w-[458px] shrink-0">
                    <h4 className="text-[14px] lg:text-[24px] font-semibold cod-gray-800">
                      Sign in
                    </h4>
                    <p className="text-[12px] lg:text-[18px] leading-[140%]">
                      I included a simple sign-up/ sign in page that allows
                      users sign in with their google account. Once a user signs
                      in, he/she can have the saved or downloaded recipe videos
                      uploaded to their profile.
                    </p>
                  </article>
                </article>

                {/* 1.2.7 */}
                <article className="flex gap-2 lg:gap-[52px] items-start">
                  {/* IMAGE */}
                  <article className="max-w-[610px] h-auto rounded-[2px] shadow-[0px_8px_16px_0px_rgba(135,_96,_56,_0.15)]">
                    <Image src={ds7} alt="" placeholder="blur" />
                  </article>

                  {/* TEXTS */}
                  <article className="flex flex-col gap-2 lg:gap-6 lg:pt-16 w-[177px] lg:w-[458px] shrink-0">
                    <h4 className="text-[14px] lg:text-[24px] font-semibold cod-gray-800">
                      Shopping Integration
                    </h4>
                    <p className="text-[12px] lg:text-[18px] leading-[140%]">
                      The shopping integration allows people to buy ingredients
                      from Glovo instead of going to a local store.
                    </p>
                  </article>
                </article>
              </article>
            </article>

            {/* User Testing */}
            <article className="pt-8 pb-5 flex flex-col gap-6 lg:gap-8 lg:py-10">
              {/* UT 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  User Testing
                </h2>
                <p className="max-w-[895px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal">
                  I Informed the user to go through the platform and make sure
                  that they understood what it was about before the test began
                  so that there were no incorrect answers. I told them to
                  describe their reasoning out loud for each action they took
                  and Insist that they speak openly and honestly about their
                  experiences.
                </p>
              </article>

              {/* UT 1.2 */}
              <Image className="shrink-0" src={ut1} alt="" placeholder="blur" />
            </article>

            {/* How it works “Prototype” */}
            <article className="pt-8 pb-5 flex flex-col gap-6 lg:gap-8 lg:py-10">
              {/* HIW 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  How it works “Prototype”
                </h2>
              </article>

              {/* UT 1.2 - VIDEO EMBEDDING */}
              <div className="pt-[56%] relative">
                <iframe
                  src="https://player.vimeo.com/video/899431979?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="absolute top-0 left-0 w-full h-full"
                  title="Tasty and Yummy - Prototype"
                ></iframe>
              </div>
              <Script src="https://player.vimeo.com/api/player.js" />
            </article>

            {/* What Comes Next? */}
            <article className="pt-8 pb-5 lg:py-10 flex flex-col gap-4 lg:gap-6">
              {/* WCN 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  What Comes Next?
                </h2>
              </article>

              {/* RM 1.2 */}
              <article>
                <ul className="text-[14px] lg:text-[18px] leading-[140%] flex flex-col gap-4 lg:gap-4 list-decimal pl-4 lg:pl-6">
                  <li>We will include a full recipe page</li>
                  <li>Add a recipe page for children</li>
                  <li>Leave options for anonymous reviews</li>
                  <li>
                    Conduct more research and usability testing in order to get
                    more feedback from users
                  </li>
                </ul>
              </article>
            </article>
          </Container>
        </section>

        {/* NEXT PROJECT */}
        <SubFooter
          main={"Go Back To"}
          first={"Oppia"}
          link={"/case-study/oppia"}
        />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
