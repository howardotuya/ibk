import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Divider from "../components/divider/divider";
import Link from "next/link";
import Button from "@/components/button/button";
import Testimonials from "@/components/testimonials/testimonials";
import Footer from "@/components/footer/footer";

// IMAGE IMPORTATION
import prifinaLeft from "@/public/images/PNG/prifina-left.png";
import prifinaRight from "@/public/images/SVG/prifina-right.svg";
import oppiaLeft from "@/public/images/PNG/oppia-left.png";
import oppiaRight from "@/public/images/SVG/oppia-right.svg";
import jogovest from "@/public/images/SVG/jogovest.svg";
import buttonBlack from "@/public/images/PNG/button.png";
import oppia1 from "@/public/images/PNG/oppia1.png";
import oppia2 from "@/public/images/PNG/oppia2.png";
import moppia1 from "@/public/images/PNG/moppia1.png";
import moppia2 from "@/public/images/PNG/moppia2.png";
import jogovest1 from "@/public/images/PNG/jogovest1.png";
import jogovest2 from "@/public/images/PNG/jogovest2.png";
import mjogovest1 from "@/public/images/PNG/mjogovest1.png";
import mjogovest2 from "@/public/images/PNG/mjogovest2.png";
import pbh from "@/public/images/PNG/pbh.png";
import alaireCaseStudy from "@/public/images/home/case-study/alaire.png";
import buildcoCaseStudy from "@/public/images/home/case-study/buildco.png";
import easySpendCaseStudy from "@/public/images/home/case-study/easyspend.png";
import sendableCaseStudy from "@/public/images/home/case-study/sendable.png";
import baristaBuddyCaseStudy from "@/public/images/home/case-study/baristabuddy.png";
// --
import easySpend from "@/public/images/home/easy-spend.svg";
import baristaBuddy from "@/public/images/home/barista-buddy.svg";
import buildCo from "@/public/images/home/buildco.svg";
import alaire from "@/public/images/home/alaire.svg";
import sendable from "@/public/images/home/sendable.svg";
import phbSmall from "@/public/images/home/pbh.svg";
import ButtonLarge from "@/components/button/button-large";
import ButtonSecondary from "@/components/button/button-secondary";
import Badge from "@/components/badge/badge";
import clsx from "clsx";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <main className="px-5 xl:px-0">
        {/* HERO SECTION */}
        <Container>
          <section className="pt-14 lg:pt-20 flex flex-col gap-6 lg:gap-10">
            {/* TOP */}
            <article className="">
              <h1 className="max-w-[895px] text-[32px] lg:text-[72px] leading-[120%] lg:leading-[100%] font-medium tracking-[-1.28px] lg:tracking-[-2.88px]">
                Designing digital solutions that simplifies lives
              </h1>
            </article>

            {/* MIDDLE */}
            <article className="flex flex-col lg:flex-row gap-24 lg:items-end">
              {/* left */}
              <article className="hidden lg:flex flex-col gap-4">
                <h6 className="cod-gray-500 font-semibold tracking-[-0.32px]">
                  Some companies I have worked with
                </h6>
                {/* LIST OF COMPANIES */}
                <article className="flex items-center gap-12">
                  <article>
                    <Image className="w-[96px] h-auto" src={easySpend} alt="" />
                  </article>

                  <article className="flex items-center gap-2">
                    {/* LEFT */}
                    <Image
                      className="w-[34px] h-auto"
                      src={prifinaLeft}
                      alt="Prifina Company Logo"
                    />
                    {/* RIGHT */}
                    <Image
                      className="w-[60px] h-auto"
                      src={prifinaRight}
                      alt="Prifina Company Logo"
                    />
                  </article>

                  <article className="flex items-center gap-2">
                    {/* LEFT */}
                    <Image
                      className="w-6 h-auto"
                      src={oppiaLeft}
                      alt="Oppia Company Logo"
                    />
                    {/* RIGHT */}
                    <Image
                      className="w-[147px] h-auto"
                      src={oppiaRight}
                      alt="Oppia Company Logo"
                    />
                  </article>

                  <article>
                    <Image
                      className="w-[100px] h-auto"
                      src={jogovest}
                      alt="Jogovest Company Logo"
                    />
                  </article>
                </article>

                <article className="flex items-center gap-12">
                  <Image className="h-auto w-[78px]" src={sendable} alt="" />
                  <Image className="h-auto w-[92px]" src={buildCo} alt="" />
                  <Image className="h-auto w-[54px]" src={alaire} alt="" />
                  <Image
                    className="h-auto w-[92px]"
                    src={baristaBuddy}
                    alt=""
                  />
                  <Image className="h-auto w-[50px]" src={phbSmall} alt="" />
                </article>
              </article>

              {/* right */}
              <article>
                <p className="max-w-[534px] cod-gray-700 text-[14px] lg:text-[18px] leading-[140%] tracking-[-.14px] lg:tracking-[-.18px]">
                  Hi, my name is Ibukun Abejide, a passionate product designer
                  on a mission to build successful products for millions of
                  users across the world. I have experience working in the
                  Fintech, E-commerce, EdTech, SaaS, Fashion, B2B, and AI
                  sectors in UK, USA, Australia, and Nigeria.
                  <br />
                  Beyond design, I’m committed to giving back, I have mentored
                  over 100 aspiring designers, helping them take confident steps
                  into the tech world.
                </p>
              </article>
            </article>

            {/* MOBILE - 1 */}
            <article className="relative shrink-0 flex lg:hidden justify-center items-center">
              <Link
                className="absolute absolute-center whitespace-nowrap leading-6 block font-bold text-black text-[16px]"
                href={"/Ibukun-Abejide-Resume-2023.pdf"}
                download={"Ibukun_Abejide_Resume_2023.pdf"}
              >
                Download resume
              </Link>

              {/* BUTTON IMAGE - CENTERED */}
              <Image
                className="w-[277px] h-auto"
                src={buttonBlack}
                alt="Download resume"
              />
            </article>

            {/* MOBILE - 2 */}
            <article className="flex lg:hidden flex-col gap-2 my-4">
              <h6 className="cod-gray-500 text-[14px] font-semibold tracking-[-0.28px]">
                Some companies I have worked with
              </h6>
              {/* LIST OF COMPANIES */}
              <article className="grid grid-cols-3 gap-y-6 items-center">
                <article className="flex items-center gap-2">
                  {/* LEFT */}
                  <Image
                    className="w-[38px] h-auto"
                    src={prifinaLeft}
                    alt="Prifina Company Logo"
                  />
                  {/* RIGHT */}
                  <Image
                    className="w-[43px] h-auto"
                    src={prifinaRight}
                    alt="Prifina Company Logo"
                  />
                </article>

                <article className="flex items-center gap-[2.28px]">
                  {/* LEFT */}
                  <Image
                    className="w-[18px] h-auto"
                    src={oppiaLeft}
                    alt="Oppia Company Logo"
                  />
                  {/* RIGHT */}
                  <Image
                    className="w-[103px] h-auto"
                    src={oppiaRight}
                    alt="Oppia Company Logo"
                  />
                </article>

                <Image
                  className="w-[100px] h-auto"
                  src={jogovest}
                  alt="Jogovest Company Logo"
                />

                <article>
                  <Image className="w-[96px] h-auto" src={easySpend} alt="" />
                </article>

                <Image className="h-auto w-[78px]" src={sendable} alt="" />

                <Image className="h-auto w-[92px]" src={buildCo} alt="" />
                <Image className="h-auto w-[54px]" src={alaire} alt="" />
                <Image className="h-auto w-[92px]" src={baristaBuddy} alt="" />
                <Image className="h-auto w-[50px]" src={phbSmall} alt="" />
              </article>
            </article>

            {/* BOTTOM */}
            <article className="flex items-center gap-24 justify-between">
              {/* left */}
              <article>
                <p className="max-w-[600px] jaffa-600 italic leading-[160%] lg:leading-normal text-[16px] lg:text-[24px] tracking-[-0.64px] lg:tracking-[-0.96px]">
                  My mantra as a Product Designer - “Design isn’t finished until
                  somebody is using it” - Brenda Laurel
                </p>
              </article>

              {/* right */}
            </article>
          </section>
        </Container>

        {/* DIVIDER */}
        <div className="pt-14 lg:pt-20" id="recent-works">
          <Divider bgColor={"bg-[#E5E8E8]"} />
        </div>

        <Container>
          {/* RECENT WORKS */}
          <section className="py-14 lg:pt-14 lg:pb-14 flex flex-col gap-6 lg:gap-14">
            {/* TEXT */}
            <h2 className="text-[32px] leading-[120%] tracking-[-1.28px] lg:text-[56px] lg:leading-[100%] lg:tracking-[-2.24px] font-medium">
              Recent works
            </h2>

            {/* 3 CASE STUDIES */}
            <section className="w-full flex flex-col gap-5">
              {/* OPPIA */}
              <article className="relative rounded-[12px] bg-[#EFFEF3] pt-[42px] md:pt-[42px] pb-4 px-6 md:p-8 gap-12 lg:p-0 lg:px-14 grid lg:grid-cols-[1fr_auto] lg:gap-x-8">
                {/* LEFT */}
                <article className="flex flex-col gap-6 lg:gap-10 lg:pt-14 lg:pb-[156px]">
                  <article className="flex flex-col gap-2 lg:gap-6">
                    <h3 className="text-[#434747] text-[24px] lg:text-[40px] font-semibold">
                      Oppia
                    </h3>
                    <p className="text-[14px] lg:text-[20px] leading-[140%]">
                      Oppia Beta- I conducted market research and user testing
                      to improve the user experience of the app, I also worked
                      on the language translation feature which led to 30%
                      increase in the number of users.
                    </p>
                  </article>
                  <article className="flex gap-4 lg:gap-6">
                    <ButtonLarge
                      text={"Read case study"}
                      route={"/case-study/oppia"}
                    />
                    <ButtonSecondary
                      text={"View live app"}
                      route={"/case-study/oppia"}
                    />
                  </article>
                </article>

                {/* RIGHT */}
                <article className="flex justify-center lg:justify-normal w-full gap-4 lg:gap-x-6">
                  {/* 234.358px */}
                  <Image
                    className="shrink-0 w-[234.358px] h-auto hidden lg:block self-start"
                    src={oppia2}
                    alt="Oppia Mobile App"
                    placeholder="blur"
                  />
                  <Image
                    className="w-[137.679px] h-auto block lg:hidden shrink-0 self-start"
                    quality={100}
                    src={moppia1}
                    alt="Oppia Mobile App"
                    placeholder="blur"
                  />
                  {/*  */}
                  <Image
                    className="shrink-0 w-[234.358px] h-auto hidden lg:block mt-[90px] lg:mt-0 self-end"
                    src={oppia1}
                    alt="Oppia Mobile App"
                    placeholder="blur"
                  />
                  <Image
                    className="w-[137.679px] h-auto block lg:hidden shrink-0 mt-[90px] lg:mt-0 self-end"
                    quality={100}
                    src={moppia2}
                    alt="Oppia Mobile App"
                    placeholder="blur"
                  />
                </article>

                <div
                  className={clsx(
                    "absolute top-4 left-6 lg:top-[unset] lg:bottom-6 lg:left-[56px]",
                    "flex justify-center items-center gap-3",
                  )}
                >
                  <Badge text={"Shipped"} status={"shipped"} />
                  <Badge text={"Edtech"} />
                  <Badge text={"Mobile App "} />
                </div>
              </article>

              {/* Jogovest */}
              <article className="relative rounded-[12px] bg-[#F5F6F6] pt-6 pb-4 px-6 md:p-8 gap-12 lg:p-0 lg:pl-14 lg:pr-7 grid lg:grid-cols-[auto_1fr] lg:gap-x-8">
                {/* LEFT */}
                <article className="order-2 lg:order-1 flex justify-center lg:justify-center w-full gap-x-6">
                  {/* 234.358px */}
                  <Image
                    className="shrink-0 w-[234.358px] h-auto hidden lg:block self-start"
                    src={jogovest1}
                    alt="Jogovest Mobile App"
                    placeholder="blur"
                  />
                  <Image
                    className="w-[137.679px] h-auto block lg:hidden shrink-0 self-start"
                    src={mjogovest1}
                    alt="Jogovest Mobile App"
                    placeholder="blur"
                  />
                  <Image
                    className="shrink-0 w-[234.358px] h-auto hidden lg:block pt-[90px] lg:pt-0 self-end"
                    src={jogovest2}
                    alt="Jogovest Mobile App"
                    placeholder="blur"
                  />
                  <Image
                    className="w-[137.679px] h-auto block lg:hidden shrink-0 pt-[90px] lg:pt-0 self-end"
                    src={mjogovest2}
                    alt="Jogovest Mobile App"
                    placeholder="blur"
                  />
                </article>

                {/* RIGHT */}
                <article className="relative order-1 lg:order-2 flex flex-col gap-6 lg:gap-10 lg:pt-14 lg:pb-[186px]">
                  <div className="flex flex-col gap-4">
                    <div
                      className={clsx(
                        "flex lg:hidden items-center gap-3 flex-wrap",
                      )}
                    >
                      <Badge text={"In Development"} status={"dev"} />
                      <Badge text={"Fintech"} />
                      <Badge text={"Mobile App"} />
                      <Badge text={"Mobile App"} />
                    </div>

                    <article className="flex flex-col gap-2 lg:gap-6">
                      <h3 className="text-[#434747] text-[24px] lg:text-[40px] font-semibold">
                        Jogovest
                      </h3>
                      <p className="text-[14px] lg:text-[20px] leading-[140%]">
                        As the solo designer, I played a pivotal strategic role
                        in designing the mobile app with the goal of achieving a
                        product market fit.
                      </p>
                    </article>
                  </div>
                  <article className="flex gap-4">
                    <ButtonLarge
                      text={"Read case study"}
                      route={"/case-study/jogovest"}
                    />
                    <ButtonSecondary text={"Under Development"} route={"#"} />
                  </article>

                  <div
                    className={clsx(
                      "hidden absolute top-[-26px] left-0 lg:top-[unset] lg:bottom-6 lg:left-0",
                      "lg:flex items-center gap-y-1 gap-x-3 flex-wrap",
                    )}
                  >
                    <Badge text={"In Development"} status={"dev"} />
                    <Badge text={"Fintech"} />
                    <Badge text={"Mobile App"} />
                    <Badge text={"Mobile App"} />
                  </div>
                </article>
              </article>

              {/* PBH Credit Solution */}
              <article className="relative rounded-[12px] bg-[#FEF6EE] gap-7 py-4 px-6 md:p-8 lg:p-0 lg:pl-14 lg:pr-7 grid lg:grid-cols-[1fr_auto] lg:gap-x-8">
                {/* LEFT */}
                <div className="flex flex-col gap-4">
                  <div
                    className={clsx(
                      "lg:hidden flex items-center gap-3 flex-wrap",
                    )}
                  >
                    <Badge text={"In Development"} status={"dev"} />
                    <Badge text={"Consulting"} />
                    <Badge text={"Website"} />
                    <Badge text={"Mobile"} />
                  </div>

                  <article className="flex flex-col gap-6 lg:gap-10 lg:pt-[56px] lg:pb-[128px]">
                    <article className="flex flex-col gap-2 lg:gap-6">
                      <h3 className="text-[#434747] text-[24px] lg:text-[40px] font-semibold">
                        PBH Credit Solution
                      </h3>
                      <p className="text-[14px] lg:text-[20px] leading-[140%]">
                        PBH Credit solution is a platform that helps to resolve
                        credit dispute, create credit report analysis, and help
                        in monitoring credit score for citizens in the United
                        States. I conducted qualitative research and also
                        designed the website.
                      </p>
                    </article>
                    <article className="flex gap-4">
                      <ButtonLarge
                        text={"Read case study"}
                        route={"/case-study/pbh-credit-solutions"}
                      />
                      <ButtonSecondary text={"Under Development"} route={"#"} />
                    </article>
                  </article>
                </div>

                {/* RIGHT */}
                <article className="flex w-full items-center justify-center lg:justify-end">
                  {/* 234.358px */}
                  <Image
                    className="w-full max-w-[543px] h-auto"
                    src={pbh}
                    alt="PBH Credit Solution"
                    placeholder="blur"
                  />
                </article>

                <div
                  className={clsx(
                    "absolute top-4 left-6 lg:top-[unset] lg:bottom-6 lg:left-[56px]",
                    "hidden lg:flex justify-center items-center gap-3",
                  )}
                >
                  <Badge text={"In Development"} status={"dev"} />
                  <Badge text={"Consulting"} />
                  <Badge text={"Website"} />
                  <Badge text={"Mobile"} />
                </div>
              </article>

              {/* ALAIRE */}
              <article className="relative rounded-[12px] bg-[#F4F6FF] py-4 px-6 md:p-8 lg:p-0 lg:pl-7 lg:pr-14 gap-7 grid lg:grid-cols-[auto_1fr] lg:gap-x-12">
                {/* LEFT */}
                <article className="order-2 lg:order-1 flex w-full justify-center items-start lg:pt-[56px]">
                  <Image
                    className="w-full max-w-[543px] h-auto"
                    src={alaireCaseStudy}
                    alt="Alaire case study"
                    placeholder="blur"
                  />
                </article>

                {/* RIGHT */}
                <article className="relative order-1 lg:order-2 flex flex-col gap-4 lg:gap-10 lg:pt-[56px] lg:pb-[185px]">
                  <div
                    className={clsx(
                      "lg:hidden flex items-center gap-3 flex-wrap",
                    )}
                  >
                    <Badge text={"Shipped"} status={"shipped"} />
                    <Badge text={"Fashion"} />
                    <Badge text={"Website"} />
                    <Badge text={"Dashboard"} />
                    <Badge text={"Mobile"} />
                  </div>

                  <article className="flex flex-col gap-2 lg:gap-6">
                    <h3 className="text-[#434747] text-[24px] lg:text-[40px] font-semibold uppercase">
                      Alaire
                    </h3>
                    <p className="text-[14px] lg:text-[20px] leading-[140%]">
                      The Alaire Personal Styling Platform centers on
                      personalized styling. I designed the Website, Style
                      Request/User dashboard, and Admin dashboard.
                    </p>
                  </article>

                  <article className="flex gap-4">
                    <ButtonLarge
                      text={"Read case study"}
                      route={"/case-study/alaire"}
                    />
                    <ButtonSecondary text={"View live site"} route={"#"} />
                  </article>

                  <div
                    className={clsx(
                      "absolute bottom-6 left-0",
                      "hidden lg:flex items-center gap-y-1 gap-x-3 flex-wrap",
                    )}
                  >
                    <Badge text={"Shipped"} status={"shipped"} />
                    <Badge text={"Fashion"} />
                    <Badge text={"Website"} />
                    <Badge text={"Dashboard"} />
                    <Badge text={"Mobile"} />
                  </div>
                </article>
              </article>

              {/* BUILDCO */}
              <article className="relative rounded-[12px] bg-[#E8F6EE] gap-7 py-4 px-6 md:p-8 lg:p-0 lg:pl-14 lg:pr-7 grid lg:grid-cols-[1fr_auto] lg:gap-x-8">
                {/* LEFT */}
                <div className="flex flex-col gap-4">
                  <div
                    className={clsx(
                      "lg:hidden flex items-center gap-3 flex-wrap",
                    )}
                  >
                    <Badge text={"In Development"} status={"dev"} />
                    <Badge text={"E-commerce"} />
                    <Badge text={"B2B"} />
                    <Badge text={"Website"} />
                    <Badge text={"Dashboard"} />
                    <Badge text={"Mobile App"} />
                  </div>

                  <article className="flex flex-col gap-6 lg:gap-10 lg:pt-[56px] lg:pb-[128px]">
                    <article className="flex flex-col gap-2 lg:gap-6">
                      <h3 className="text-[#434747] text-[24px] lg:text-[40px] font-semibold uppercase">
                        Buildco
                      </h3>
                      <p className="text-[14px] lg:text-[20px] leading-[140%] max-w-[513px]">
                        BUILDCO is a platform for the sales of power tools and
                        accessories, construction materials, project management,
                        furniture, home appliances and electrical materials. I
                        designed the Website, Direct Ordering Platform, Mobile
                        App and Admin dashboard.
                      </p>
                    </article>
                    <article className="flex gap-4">
                      <ButtonLarge
                        text={"Read case study"}
                        route={"/case-study/buildco"}
                      />
                      <ButtonSecondary text={"Under Development"} route={"#"} />
                    </article>
                  </article>
                </div>

                {/* RIGHT */}
                <article className="flex w-full items-center justify-center lg:justify-end">
                  <Image
                    className="w-full max-w-[543px] h-auto"
                    src={buildcoCaseStudy}
                    alt="Buildco case study"
                    placeholder="blur"
                  />
                </article>

                <div
                  className={clsx(
                    "absolute top-4 left-6 lg:top-[unset] lg:bottom-6 lg:left-[56px]",
                    "hidden lg:flex justify-center items-center gap-3 flex-wrap",
                  )}
                >
                  <Badge text={"In Development"} status={"dev"} />
                  <Badge text={"E-commerce"} />
                  <Badge text={"B2B"} />
                  <Badge text={"Website"} />
                  <Badge text={"Dashboard"} />
                  <Badge text={"Mobile App"} />
                </div>
              </article>

              {/* EASYSPEND */}
              <article className="relative rounded-[12px] bg-[#F4ECFF] py-4 px-6 md:p-8 lg:p-0 lg:pl-7 lg:pr-14 gap-7 grid lg:grid-cols-[auto_1fr] lg:gap-x-12">
                {/* LEFT */}
                <article className="order-2 lg:order-1 flex w-full items-start justify-center lg:pt-[56px]">
                  <Image
                    className="w-full max-w-[543px] h-auto"
                    src={easySpendCaseStudy}
                    alt="EasySpend case study"
                    placeholder="blur"
                  />
                </article>

                {/* RIGHT */}
                <article className="relative order-1 lg:order-2 flex flex-col gap-4 lg:gap-10 lg:pt-[56px] lg:pb-[161px]">
                  <div
                    className={clsx(
                      "lg:hidden flex items-center gap-3 flex-wrap",
                    )}
                  >
                    <Badge text={"Shipped"} status={"shipped"} />
                    <Badge text={"Fintech"} />
                    <Badge text={"Dashboard"} />
                    <Badge text={"Mobile"} />
                  </div>

                  <article className="flex flex-col gap-2 lg:gap-6">
                    <h3 className="text-[#434747] text-[24px] lg:text-[40px] font-semibold">
                      EasySpend
                    </h3>
                    <p className="text-[14px] lg:text-[20px] leading-[140%]">
                      EasySpend is enabling seamless digital payments, USD card
                      issuance, and crypto-to-fiat conversions.
                      <br />
                      <br />I designed the User dashboard and Admin dashboard.
                    </p>
                  </article>

                  <article className="flex gap-4">
                    <ButtonLarge
                      text={"Read case study"}
                      route={"/case-study/easyspend"}
                    />
                    <ButtonSecondary text={"View live app"} route={"#"} />
                  </article>

                  <div
                    className={clsx(
                      "hidden lg:flex absolute bottom-6 left-0 items-center gap-y-1 gap-x-3 flex-wrap",
                    )}
                  >
                    <Badge text={"Shipped"} status={"shipped"} />
                    <Badge text={"Fintech"} />
                    <Badge text={"Dashboard"} />
                    <Badge text={"Mobile"} />
                  </div>
                </article>
              </article>

              {/* SENDABLE */}
              <article className="relative rounded-[12px] bg-[#E8F6EE] gap-7 py-4 px-6 md:p-8 lg:p-0 lg:pl-14 lg:pr-7 grid lg:grid-cols-[1fr_auto] lg:gap-x-8">
                {/* LEFT */}
                <div className="flex flex-col gap-4">
                  <div
                    className={clsx(
                      "lg:hidden flex items-center gap-3 flex-wrap",
                    )}
                  >
                    <Badge text={"Shipped"} status={"shipped"} />
                    <Badge text={"SAAS"} />
                    <Badge text={"Website"} />
                    <Badge text={"Dashboard"} />
                    <Badge text={"Mobile"} />
                  </div>

                  <article className="flex flex-col gap-6 lg:gap-10 lg:pt-[56px] lg:pb-[128px]">
                    <article className="flex flex-col gap-2 lg:gap-6">
                      <h3 className="text-[#434747] text-[24px] lg:text-[40px] font-semibold">
                        Sendable
                      </h3>
                      <p className="text-[14px] lg:text-[20px] leading-[140%] max-w-[513px]">
                        Sendable is a platform that enables Golf Pros and
                        Golfers interact with course-linked services and time
                        slots. I designed the landing page, Golfer’s dashboard,
                        Golf Pro’s dashboard, Golf Course dashboard and Admin
                        dashboard.
                      </p>
                    </article>
                    <article className="flex gap-4">
                      <ButtonLarge
                        text={"Read case study"}
                        route={"/case-study/sendable"}
                      />
                      <ButtonSecondary text={"View live site"} route={"#"} />
                    </article>
                  </article>
                </div>

                {/* RIGHT */}
                <article className="flex w-full items-center justify-center lg:justify-end">
                  <Image
                    className="w-full max-w-[543px] h-auto"
                    src={sendableCaseStudy}
                    alt="Sendable case study"
                    placeholder="blur"
                  />
                </article>

                <div
                  className={clsx(
                    "absolute top-4 left-6 lg:top-[unset] lg:bottom-6 lg:left-[56px]",
                    "hidden lg:flex justify-center items-center gap-3 flex-wrap",
                  )}
                >
                  <Badge text={"Shipped"} status={"shipped"} />
                  <Badge text={"SAAS"} />
                  <Badge text={"Website"} />
                  <Badge text={"Dashboard"} />
                  <Badge text={"Mobile"} />
                </div>
              </article>

              {/* BARISTA BUDDY */}
              <article className="relative rounded-[12px] bg-[#FDF7E8] py-4 px-6 md:p-8 lg:p-0 lg:pl-7 lg:pr-14 gap-7 grid lg:grid-cols-[auto_1fr] lg:gap-x-12">
                {/* LEFT */}
                <article className="order-2 lg:order-1 flex w-full items-start justify-center lg:pt-[56px]">
                  <Image
                    className="w-full max-w-[543px] h-auto"
                    src={baristaBuddyCaseStudy}
                    alt="Barista Buddy case study"
                    placeholder="blur"
                  />
                </article>

                {/* RIGHT */}
                <article className="w-full max-w-[563px] relative order-1 lg:order-2 flex flex-col gap-4 lg:gap-10 lg:pt-[56px] lg:pb-[89px]">
                  <div
                    className={clsx(
                      "lg:hidden flex items-center gap-3 flex-wrap",
                    )}
                  >
                    <Badge text={"Shipped"} status={"shipped"} />
                    <Badge text={"SAAS"} />
                    <Badge text={"Dashboard"} />
                  </div>

                  <article className="flex flex-col gap-2 lg:gap-6">
                    <h3 className="text-[#434747] text-[24px] lg:text-[40px] font-semibold">
                      Barista Buddy
                    </h3>
                    <p className="text-[14px] lg:text-[20px] leading-[140%]">
                      Barista Buddy is an Australian-based company that provides
                      flexible, no-contract coffee machine solutions for
                      offices, hotels, and industrial workplaces. Their service
                      model includes the machines, fresh beans, and maintenance
                      on a pay-per-cup basis.
                      <br />
                      <br />I designed the User dashboard and Admin dashboard.
                    </p>
                  </article>

                  <article className="flex gap-4">
                    <ButtonLarge
                      text={"Read case study"}
                      route={"/case-study/barista-buddy"}
                    />
                    <ButtonSecondary text={"View live site"} route={"#"} />
                  </article>

                  <div
                    className={clsx(
                      "hidden lg:flex absolute bottom-6 left-0 items-center gap-y-1 gap-x-3 flex-wrap",
                    )}
                  >
                    <Badge text={"Shipped"} status={"shipped"} />
                    <Badge text={"SAAS"} />
                    <Badge text={"Dashboard"} />
                  </div>
                </article>
              </article>
            </section>
          </section>
        </Container>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
