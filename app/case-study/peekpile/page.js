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

import header from "@/public/images/PNG/peekpile/header.png";
import form1 from "@/public/images/PNG/peekpile/form1.png";
import form2 from "@/public/images/PNG/peekpile/form2.png";
import form3 from "@/public/images/PNG/peekpile/form3.png";
import form4 from "@/public/images/PNG/peekpile/form4.png";
import testing from "@/public/images/PNG/peekpile/user-testing.png";
import prototype from "@/public/images/prototype2.gif";

// METADATA
export const metadata = {
  title: "Peekpile",
  description:
    "Designed a user friendly SAAS web platform that allows companies to create personalized feedback forms",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/peekpile",
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
        <section className="bg-[#F6F7FF] px-5 xl:px-0">
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
                Peekpile
              </h1>
              <p className="text-[24px] lg:text-[48px] font-medium leading-[120%] tracking-[-0.96px] lg:tracking-[-1.92px]">
                Designed a user friendly SAAS web platform that allows companies
                to create personalized feedback forms
              </p>
            </div>
          </Container>
        </section>

        {/* Project overview */}
        <section className="px-5 xl:px-0 lg:border-b border-[#EFFEF3]">
          <Container>
            <section className="pt-0 pb-6 lg:py-[38px] flex flex-col gap-4 lg:gap-10">
              <article className="max-w-[326px] lg:max-w-none flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Project overview
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  Peekpile is a SAAS web platform designed to enable companies
                  to create personalized feedback for their employees. The
                  platform aims to enhance employee performance and satisfaction
                  by providing tailored feedback that helps individuals
                  understand their strengths and areas for improvement. Peekpile
                  offers tools for managers to easily give feedback, track
                  progress, and ensure continuous professional development.
                </p>
              </article>
            </section>
          </Container>
        </section>

        {/* REST OF THE BODY */}
        <section className="px-5 xl:px-0">
          <Container>
            <section className="py-8 lg:py-[38px] flex flex-col gap-4 lg:gap-10">
              <article className="max-w-[326px] lg:max-w-none flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  My Role
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  As the Lead Product Designer, I was responsible for the
                  end-to-end design process, from initial research to final
                  implementation. My tasks included conducting user research,
                  defining user personas, creating wireframes and prototypes,
                  designing the user interface, and collaborating with the
                  development team to bring the product to life.
                </p>
              </article>
            </section>

            <section className="py-8 lg:py-[38px] flex flex-col gap-4 lg:gap-10">
              <article className="max-w-[326px] lg:max-w-none flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Problem Statement
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  Many companies struggle with providing effective feedback to
                  employees due to generic templates, lack of personalization,
                  and inefficient feedback processes. This results in employees
                  feeling undervalued and unclear about their performance,
                  leading to decreased motivation and productivity. Peekpile
                  aims to solve this problem by offering a platform that
                  facilitates personalized, constructive feedback.
                </p>
              </article>
            </section>

            <section className="py-8 lg:pb-[38px] flex flex-col gap-4 lg:gap-10">
              <article className="max-w-[326px] lg:max-w-none flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Goal
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  To create a user-friendly and efficient platform that allows
                  managers to provide personalized, actionable feedback to their
                  employees, ultimately fostering a culture of continuous
                  improvement and professional growth within organizations.
                </p>
              </article>
            </section>

            <section className="py-8 lg:py-[38px] flex flex-col gap-4 lg:gap-10">
              <article className="max-w-[326px] lg:max-w-none flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Research & Analysis
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  I conducted secondary research for this product because
                  according to Jackob’s law, users are more likely to relate
                  with similar products. I evaluated market trends and user
                  reviews to ensure Peekpile offered unique and valuable
                  features.
                </p>
              </article>
            </section>

            <section className="pt-8 pb-10 lg:pt-10 lg:pb-[112px] flex flex-col gap-4 lg:gap-8">
              <article className="flex flex-col gap-4 lg:gap-6">
                {/* HEADER */}
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Design Solutions
                </h2>

                {/*  */}
                <div className="w-full flex flex-col gap-[52px] lg:gap-[92px]">
                  <div className="w-full flex gap-6 lg:gap-16">
                    <div className="max-w-[536px] w-full h-auto">
                      <Image src={form1} alt="" />
                    </div>
                    <div className="pt-[6px] lg:pt-16 max-w-[458px] w-full">
                      <h6 className="text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px] text-[#434747] font-semibold">
                        Dashboard
                      </h6>
                      <p className="mt-2 lg:mt-6 text-[12px] lg:text-[18px] leading-[140%] text-[#0C0D0D]">
                        The dashboard contains the number of accounts created,
                        forms created, drafts, published forms and total
                        respondents. You can create a new form on the dashboard.
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex gap-6 lg:gap-16">
                    <div className="max-w-[536px] w-full h-auto">
                      <Image src={form2} alt="" />
                    </div>
                    <div className="pt-[6px] lg:pt-16 max-w-[458px] w-full">
                      <h6 className="text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px] text-[#434747] font-semibold">
                        Analytics
                      </h6>
                      <p className="mt-2 lg:mt-6 text-[12px] lg:text-[18px] leading-[140%] text-[#0C0D0D]">
                        The idea is to design something simple and relatable. I
                        had to use a fancy font.
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex gap-6 lg:gap-16">
                    <div className="max-w-[536px] w-full h-auto">
                      <Image src={form3} alt="" />
                    </div>
                    <div className="pt-[6px] lg:pt-16 max-w-[458px] w-full">
                      <h6 className="text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px] text-[#434747] font-semibold">
                        Form Creation
                      </h6>
                      <p className="mt-2 lg:mt-6 text-[12px] lg:text-[18px] leading-[140%] text-[#0C0D0D]">
                        The idea is to design something simple and relatable. I
                        had to use a fancy font.
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex gap-6 lg:gap-16">
                    <div className="max-w-[536px] w-full h-auto">
                      <Image src={form4} alt="" />
                    </div>
                    <div className="pt-[6px] lg:pt-16 max-w-[458px] w-full">
                      <h6 className="text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px] text-[#434747] font-semibold">
                        Form Responses
                      </h6>
                      <p className="mt-2 lg:mt-6 text-[12px] lg:text-[18px] leading-[140%] text-[#0C0D0D]">
                        The idea is to design something simple and relatable. I
                        had to use a fancy font.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </section>

            {/* User Testing */}
            <article className="py-8 lg:py-10 flex flex-col gap-5 lg:gap-6">
              {/* UT 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  User Testing
                </h2>
                <p className="max-w-[895px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal">
                  I conducted usability testing sessions with prototype versions
                  of Peekpile and collected feedback on user experience, design
                  clarity, and functionality to iterate and improve the
                  platform.
                </p>
              </article>

              {/* UT 1.2 */}
              <Image
                className="shrink-0"
                src={testing}
                alt=""
                placeholder="blur"
              />
            </article>

            {/* How it works “Prototype” */}
            <article className="py-8 lg:py-10 flex flex-col gap-6 lg:gap-10">
              {/* HIW 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  How it works “Prototype”
                </h2>
              </article>

              {/* UT 1.2 - VIDEO EMBEDDING */}
              <div className="w-full h-auto">
                <Image className="w-full h-auto" src={prototype} alt="" />
              </div>
            </article>

            {/* Challenges Faced */}
            <article className="py-8 lg:py-10 flex flex-col gap-4 lg:gap-6">
              {/* WCN 1.1 */}
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Challenges Faced
                </h2>
              </article>

              {/* RM 1.2 */}
              <article>
                <ul className="max-w-[1032px] text-[14px] lg:text-[18px] leading-[140%] flex flex-col gap-4 lg:gap-4 list-disc pl-4 lg:pl-6">
                  <li>
                    Ensuring the platform was easy to use for managers while
                    providing enough functionality to deliver personalized
                    feedback.
                  </li>
                  <li>
                    Addressed this by implementing a guided feedback creation
                    process with customizable templates.
                  </li>
                </ul>
              </article>
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
