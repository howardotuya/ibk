"use client";

import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";
import clsx from "clsx";

import ut from "@/public/images/PNG/oppia/ut.png";
import ut2 from "@/public/images/PNG/oppia/ut2.png";
import alaire1 from "@/public/images/case-study/alaire/1.png";
import alaire2 from "@/public/images/case-study/alaire/2.png";
import alaire3 from "@/public/images/case-study/alaire/3.png";
import alaire5 from "@/public/images/case-study/alaire/5.png";
import alaire6 from "@/public/images/case-study/alaire/6.png";
import alaire7 from "@/public/images/case-study/alaire/7.png";
import alaireArrowStyleQuiz from "@/public/images/case-study/alaire/arrows/style-quiz-page.svg";
import alaireArrowMoodboard from "@/public/images/case-study/alaire/arrows/moodboard-page.svg";
import alaireArrowInteractiveButtons from "@/public/images/case-study/alaire/arrows/interactive-buttons.svg";
import alaireArrowAdminTools from "@/public/images/case-study/alaire/arrows/admin-tools.svg";
import { CldVideoPlayer } from "next-cloudinary";

// export const metadata = {
//   title: "Alaire",
//   description:
//     "Alaire is a personalized styling platform that uses a service quiz, moodboards, and admin request management to deliver tailored fashion experiences.",
//   alternates: {
//     canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/alaire",
//   },
// };

const designBlocks = [
  {
    title: "Style Quiz page",
    text: "I implemented the Anonymous quiz initiation to lower sign-up friction",
    videoSrc: "alaire-style-quiz-page_abcceu",
    arrow: alaireArrowStyleQuiz,
    styling: "absolute left-[calc(100%)] top-[88px] max-w-[108.344px]",
    textStyling: "lg:pt-[24px]",
    imageStyling: "max-w-[705px]",
    containerStyling: "max-w-[1209px]",
    reverse: false,
  },
  {
    title: "Moodboard page",
    text: "Two-column responsive moodboard (left: preview, right: scrollable items).",
    image: alaire5,
    arrow: alaireArrowMoodboard,
    styling: "absolute right-[calc(100%+8px)] top-[259.814px] max-w-[134px]",
    textStyling: "lg:pt-[237px]",
    imageStyling: "max-w-[705px]",
    containerStyling: "max-w-[1202px]",
    reverse: true,
  },
  {
    title: "Interactive Buttons",
    text: "Interactive buttons (Love/Pass/Restyle) to simulate stylist collaboration.",
    image: alaire6,
    arrow: alaireArrowInteractiveButtons,
    styling: "absolute left-[calc(100%+1.656px)] top-[143.5px] max-w-[173.344px]",
    textStyling: "lg:pt-[48px]",
    imageStyling: "max-w-[698px]",
    containerStyling: "max-w-[1234px]",
    reverse: false,
  },
  {
    title: "Admin tools",
    text: "Admin tools to track and manage requests efficiently.",
    image: alaire7,
    arrow: alaireArrowAdminTools,
    styling: "absolute right-[calc(100%)] top-[195px] max-w-[149px]",
    textStyling: "lg:pt-[117px]",
    imageStyling: "max-w-[672px]",
    containerStyling: "max-w-[1200px]",
    reverse: true,
  },
];

export default function Alaire() {
  return (
    <>
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>

      <main>
        <section className="bg-[#F6F6F6] px-5 xl:px-0">
          <Container>
            <article className="pt-10 flex justify-center items-end gap-4 lg:gap-8">
              <Image
                className="max-w-[538px] w-full h-auto"
                src={alaire1}
                alt="Alaire hero"
              />
            </article>
          </Container>
        </section>

        <section className="px-5 xl:px-0 border-b border-[#EFFEF3]">
          <Container>
            <div className="flex flex-col gap-4 lg:gap-6 my-6 lg:my-10">
              <h1 className="text-[#0C0D0D] font-cooper lg:text-[24px] tracking-[-0.64px] lg:tracking-[-0.96px]">
                Alaire
              </h1>
              <p className="text-[24px] lg:text-[48px] font-medium leading-[120%] tracking-[-0.96px] lg:tracking-[-1.92px]">
                Designed a comprehensive styling experience powered by a smart
                quiz algorithm, responsive layouts, and admin automation that
                jointly captures client preferences to generate uniquely styled
                personas.
              </p>
            </div>
          </Container>
        </section>

        <section className="px-5 xl:px-0 border-b border-[#EFFEF3]">
          <Container>
            <section className="py-8 lg:py-10 flex flex-col gap-4 lg:gap-10">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Project overview
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  Alaire is a personal styling platform designed to deliver
                  bespoke fashion recommendations through interactive tools like
                  quizzes and moodboards, while offering direct communication
                  with professional stylists. The project was built using
                  Bubble.io, a no-code platform that supports responsive web
                  design and enables seamless integration of multiple systems
                  from e-commerce to real-time messaging.
                </p>
              </article>
            </section>
          </Container>
        </section>

        <section className="px-5 xl:px-0">
          <Container>
            <article className="py-8 lg:py-10 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                My Role
              </h2>
              <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                As the Lead Product Designer, I was responsible for
                conceptualizing, designing, and implementing all the features.
                This involved conducting user research, developing user
                personas, creating wireframes and prototypes, and working
                closely with developers and stakeholders.
              </p>
            </article>

            <article className="py-8 lg:py-10 grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Problem Statement
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  Modern consumers crave personalized fashion guidance but often
                  face these challenges:
                </p>
                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    Limited personalization: Many styling services use generic
                    recommendations.
                  </li>
                  <li>
                    High entry barriers: Users are forced to create accounts
                    before exploring.
                  </li>
                  <li>
                    Fragmented experience: No smooth integration between
                    quizzes, chats, and product shopping.
                  </li>
                  <li>
                    Inefficient communication: Delays between users and stylists
                    lead to poor engagement.
                  </li>
                </ul>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  Alaire sought to solve this by building a personal styling
                  ecosystem that understands user preferences, creates style
                  personas, and provides interactive moodboards and chat-driven
                  engagement.
                </p>
              </article>

              <article className="max-w-[569px] mt-8 w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={alaire2} alt="Client research" />
              </article>
            </article>

            <article className="py-8 lg:py-10 grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Goal
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  To create a seamless and interactive personal styling platform
                  that:
                </p>
                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    Delivers personalized style recommendations through a
                    dynamic quiz system.
                  </li>
                  <li>
                    Connects users directly with a stylist via real-time chat.
                  </li>
                  <li>
                    Provides shoppable moodboards tailored to users’ personas
                    and budgets.
                  </li>
                  <li>
                    Enables admin efficiency for managing user requests,
                    moodboards, and communications.
                  </li>
                </ul>
              </article>

              <article className="max-w-[569px] mt-8 w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={alaire3} alt="Stylist workflow" />
              </article>
            </article>

            <article className="py-8 lg:py-10 grid gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Product Metrics
                </h2>

                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    Quiz Completion Rate:{" "}
                    <span className="font-medium">80%</span> of users completing
                    the 28-question quiz.
                  </li>
                  <li>
                    Conversion Rate: <span className="font-medium">80%</span>
                    of quiz participants who signed up post-quiz.
                  </li>
                  <li>
                    Engagement Rate: High frequency of interactions with
                    moodboards (Love/Pass/Restyle actions).
                  </li>
                  <li>
                    Chat Activity: Average number of{" "}
                    <span className="font-medium">20</span> conversations per
                    user with the stylist.
                  </li>
                  <li>
                    Purchase Click-Through:{" "}
                    <span className="font-medium">80%</span> of users who
                    clicked shoppable links from moodboards.
                  </li>
                </ul>
              </article>
            </article>

            <article className="pt-8 pb-5 flex flex-col gap-5 lg:gap-8 lg:py-10">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Research & Analysis{" "}
                  <span className="hidden lg:inline">
                    (How we generated the product metrics)
                  </span>
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  Before coming up with the solution, I conducted interview with
                  prospective users and also identified friction points on
                  existing online styling platforms
                </p>
                <h6 className="font-bold italic text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  Here are the interview questions and key insights
                </h6>
              </article>

              <article className="grid gap-5 lg:grid-cols-[52%_48%] lg:gap-10">
                <article className="flex flex-col gap-5 lg:gap-4">
                  <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                    Interview Questions
                  </h5>
                  <ol className="list-decimal pl-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px] flex flex-col gap-4">
                    <li>
                      What motivates you to trust digital styling platform
                      recommendations?
                    </li>
                    <li>
                      Do you prefer quizzes and moodboards to physical stylist
                      session?
                    </li>
                  </ol>
                </article>

                <article className="flex flex-col gap-5 lg:gap-4">
                  <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                    Key findings
                  </h5>
                  <ol className="list-decimal pl-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px] flex flex-col gap-4">
                    <li>
                      Personalization drives engagement: Users are 3x more
                      likely to sign up when they see personalized results
                      first.
                    </li>
                    <li>
                      Visual presentation matters: Moodboards with contextual
                      outfits (vs. item grids) led to higher approval rates.
                    </li>
                    <li>
                      Direct communication increases retention: Users value
                      stylist accessibility and feedback loops.
                    </li>
                    <li>
                      Privacy & convenience: Allowing users to start the quiz
                      anonymously reduced abandonment rates.
                    </li>
                  </ol>
                </article>
              </article>
            </article>

            <article className="py-8 lg:py-10 grid gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  My Process
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  I followed a user-centered and iterative approach, integrating
                  research findings into the workflow:
                </p>
                <ul className="max-w-[1128px] pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    <b className="font-bold">Empathize:</b> I conducted
                    Interviews and competitor analysis to identify user
                    expectations.
                  </li>
                  <li>
                    <b className="font-bold">Define:</b> I framed the problem
                    around accessibility and personalization gaps.
                  </li>
                  <li>
                    <b className="font-bold">Ideate:</b> I created journey maps
                    showing the path from quiz entry to purchasing.
                  </li>
                  <li>
                    <b className="font-bold">Prototype:</b> I designed
                    interactive mockups
                  </li>
                  <li>
                    <b className="font-bold">Test:</b> I conducted usability
                    test to refine the flow
                  </li>
                </ul>
              </article>
            </article>

            <article className="pt-8 pb-5 lg:py-10 flex flex-col gap-6 lg:gap-10">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Design Solution
                </h2>
              </article>

              <div className="w-full">
                {designBlocks.map((block, index) => (
                  <div
                    key={block.title + index}
                    className={clsx(
                      index === 0 ? "mt-8" : "mt-[124px]",
                      block.containerStyling || "max-w-[1200px]",
                      "flex flex-col lg:flex-row gap-6 items-start justify-between",
                      block.reverse && "lg:flex-row-reverse",
                    )}
                  >
                    {block.videoSrc ? (
                      <div
                        className={clsx(
                          "w-full h-auto relative",
                          block.imageStyling || "max-w-[594px]",
                        )}
                      >
                        <CldVideoPlayer src={block.videoSrc} />
                        {block.arrow && (
                          <Image
                            className={clsx("hidden lg:block", block.styling)}
                            src={block.arrow}
                            alt=""
                          />
                        )}
                      </div>
                    ) : (
                      <div
                        className={clsx(
                          "w-full relative",
                          block.imageStyling || "max-w-[594px]",
                        )}
                      >
                        <Image
                          className="w-full h-auto"
                          src={block.image}
                          alt={block.title}
                        />
                        {block.arrow && (
                          <Image
                            className={clsx("hidden lg:block", block.styling)}
                            src={block.arrow}
                            alt=""
                          />
                        )}
                      </div>
                    )}
                    <div
                      className={clsx(
                        "max-w-[361px] text-[18px] lg:text-[24px] text-[#262C2C]",
                        block.textStyling,
                      )}
                    >
                      <h6 className="font-semibold">{block.title}</h6>
                      <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                        {block.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <div className="w-full space-y-6 py-10">
              <h2 className="text-[#434747] text-[40px] font-semibold">
                Prototype
              </h2>

              <div className="w-full space-y-[120px]">
                <div className="w-auto flex flex-col gap-8">
                  <h6 className="text-[24px] font-semibold text-[#2F3434]">
                    Website
                  </h6>
                  <div className="w-[565px]">
                    <CldVideoPlayer src="prototype_2_nhpk9q" />
                  </div>
                </div>

                <div className="flex gap-14 w-full">
                  <div className="w-auto flex flex-col gap-8">
                    <h6 className="text-[24px] font-semibold text-[#2F3434]">
                      Admin Dashboard
                    </h6>
                    <div className="w-[742px]">
                      <CldVideoPlayer src="Recording_2026-02-19_192615_u8ahhe" />
                    </div>
                  </div>

                  <div className="w-auto flex flex-col gap-8">
                    <h6 className="text-[24px] font-semibold text-[#2F3434]">
                      Admin Dashboard (Mobile)
                    </h6>
                    <div className="w-[218px]">
                      <CldVideoPlayer src="mobile_ku5onf" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <article className="pt-8 pb-5 lg:pt-10 lg:pb-0">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  User Testing
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px]">
                  Usability sessions focused on onboarding clarity, feedback
                  controls, and admin request discoverability.
                </p>
              </article>

              <article className="mt-4 mb-6 lg:mt-8 lg:mb-0">
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
            </article>

            <article className="max-w-[1077px] pt-10 pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[32px] font-semibold">
                Testing Goals
              </h2>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>Evaluate the clarity and appeal of the quiz show</li>
                  <li>Observe interactions with moodboards.</li>
                  <li>Assess responsiveness and communication ease.</li>
                </ul>
              </div>
            </article>

            <article className="max-w-[807px] pt-16 pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[32px] font-semibold">
                Findings from Testing
              </h2>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>
                    <b className="font-bold">95%</b> of testers completed the
                    quiz once they began.
                  </li>
                  <li>
                    <b className="font-bold">70%</b> mentioned the direct
                    messaging with the stylist made the experience feel human
                    and premium.
                  </li>
                  <li>
                    <b className="font-bold">80%</b> found the
                    “Love/Pass/Restyle” feature intuitive and engaging.
                  </li>
                </ul>
              </div>
            </article>

            <article className="pt-20 pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Results
              </h2>
              <p className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                After iterative refinement:
              </p>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>
                    Quiz-to-sign-up conversion improved by{" "}
                    <b className="font-bold">42%</b>.
                  </li>
                  <li>
                    Admin task time reduced by <b className="font-bold">25%</b>,
                    thanks to automated request tracking and notifications.
                  </li>
                  <li>
                    User engagement on moodboards increased by{" "}
                    <b className="font-bold">58%</b> due to interactive feedback
                    tools.
                  </li>
                  <li>
                    Stylist response time decreased by{" "}
                    <b className="font-bold">30%</b>, enhancing communication
                    efficiency.
                  </li>
                </ul>
              </div>
            </article>

            <article className="pt-[108px] pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Challenges Faced
              </h2>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>
                    <b className="font-bold">
                      Balancing personalization with simplicity:
                    </b>{" "}
                    Ensuring the quiz felt intuitive despite 28 questions.
                  </li>
                  <li>
                    <b className="font-bold">Privacy compliance:</b> Ensuring
                    user data was securely handled during anonymous quiz
                    sessions and registration.
                  </li>
                </ul>
              </div>
            </article>

            <article className="pt-[108px] pb-10 max-w-[1168px] flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Conclusion
              </h2>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.2px]">
                The Alaire project transformed personal styling into an
                interactive, data-informed, and user-friendly experience.
                Through smart quiz algorithms, engaging visuals, and seamless
                communication, it successfully blended technology and creativity
                to redefine how users discover their style.
              </div>
            </article>
          </Container>
        </section>

        <SubFooter first={"Jogovest"} link={"/case-study/jogovest"} />
      </main>

      <Footer />
    </>
  );
}
