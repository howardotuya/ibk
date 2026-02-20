import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";
import clsx from "clsx";

import alaire1 from "@/public/images/case-study/alaire/1.png";
import alaire2 from "@/public/images/case-study/alaire/2.png";
import alaire3 from "@/public/images/case-study/alaire/3.png";
import alaire4 from "@/public/images/case-study/alaire/4.png";
import alaire5 from "@/public/images/case-study/alaire/5.png";
import alaire6 from "@/public/images/case-study/alaire/6.png";
import alaire7 from "@/public/images/case-study/alaire/7.png";

export const metadata = {
  title: "Alaire",
  description:
    "Alaire is a personalized styling platform that uses a service quiz, moodboards, and admin request management to deliver tailored fashion experiences.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/alaire",
  },
};

const designBlocks = [
  {
    title: "Style Quiz",
    text: "The onboarding quiz captures preferred services and styling intent, giving the platform enough context to personalize recommendations from the first interaction.",
    image: alaire4,
    reverse: false,
  },
  {
    title: "Moodboard Experience",
    text: "Curated moodboards combine look references and shoppable items in one view so clients can review options, make preferences explicit, and request adjustments quickly.",
    image: alaire5,
    reverse: true,
  },
  {
    title: "Styling Request Flow",
    text: "A second moodboard state supports iterative feedback cycles, helping stylists refine choices based on what users loved or wanted restyled.",
    image: alaire6,
    reverse: false,
  },
  {
    title: "Admin Dashboard",
    text: "The admin workspace centralizes request status, budget context, and due dates, improving coordination and throughput across styling operations.",
    image: alaire7,
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
                  Alaire is a digital styling platform that helps users receive
                  personalized outfit recommendations through guided preference
                  capture, curated moodboards, and structured stylist workflows.
                  The product connects client onboarding and stylist execution
                  with a back-office dashboard for request operations.
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
                I led the product design direction from discovery to delivery,
                including user-flow mapping, interface design, and system
                consistency across client-facing and admin-facing surfaces.
              </p>
            </article>

            <article className="py-8 lg:py-10 grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Problem Statement
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  Many styling services struggle to balance personalization with
                  operational speed. Clients often receive generic suggestions,
                  while stylists manually track requests across disconnected
                  tools. This leads to:
                </p>
                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>Inconsistent onboarding data quality.</li>
                  <li>Slow iteration cycles between clients and stylists.</li>
                  <li>Limited visibility into request and delivery status.</li>
                  <li>Difficulty scaling personalized styling outcomes.</li>
                </ul>
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
                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>Create a reliable personalization pipeline from day one.</li>
                  <li>
                    Reduce friction between preference capture and styling
                    recommendations.
                  </li>
                  <li>
                    Support iterative feedback through clear moodboard states.
                  </li>
                  <li>
                    Equip admins with real-time request tracking and filtering.
                  </li>
                  <li>
                    Improve trust with transparent progress and request status.
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
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  We measured product performance using:
                </p>
                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    <span className="font-medium">Quiz Completion Rate -</span>{" "}
                    percentage of users finishing onboarding.
                  </li>
                  <li>
                    <span className="font-medium">Moodboard Acceptance Rate -</span>{" "}
                    share of items users marked as loved.
                  </li>
                  <li>
                    <span className="font-medium">Iteration Turnaround Time -</span>{" "}
                    time from feedback to updated recommendations.
                  </li>
                  <li>
                    <span className="font-medium">Request Throughput -</span>{" "}
                    number of requests completed per cycle.
                  </li>
                  <li>
                    <span className="font-medium">Admin Response Efficiency -</span>{" "}
                    speed of sorting and resolving incoming requests.
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
              </article>

              <article className="grid gap-5 lg:grid-cols-[52%_48%] lg:gap-10">
                <article className="flex flex-col gap-5 lg:gap-4">
                  <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                    I conducted:
                  </h5>
                  <ul className="list-disc pl-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px] flex flex-col gap-4">
                    <li>
                      Competitor reviews across personal styling and wardrobe
                      subscription products.
                    </li>
                    <li>
                      User interviews to understand preference capture pain
                      points and feedback expectations.
                    </li>
                    <li>
                      Workflow mapping with stylists to identify request
                      bottlenecks.
                    </li>
                  </ul>
                </article>

                <article className="flex flex-col gap-5 lg:gap-4">
                  <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                    Key findings
                  </h5>
                  <ul className="list-disc pl-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px] flex flex-col gap-4">
                    <li>
                      Users value clear onboarding that feels guided but not
                      overwhelming.
                    </li>
                    <li>
                      Moodboard interactions must make approval and restyle
                      decisions obvious.
                    </li>
                    <li>
                      Admin teams need quick status filtering for consistent
                      request handling.
                    </li>
                  </ul>
                </article>
              </article>
            </article>

            <article className="py-8 lg:py-10 grid gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  My Process
                </h2>
                <ul className="max-w-[1128px] pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    Defined product goals and user paths for clients, stylists,
                    and admins.
                  </li>
                  <li>
                    Mapped interaction states for quiz, moodboard actions, and
                    admin request lifecycle.
                  </li>
                  <li>
                    Built clean interfaces prioritizing scannability,
                    consistency, and fast decision-making.
                  </li>
                  <li>
                    Iterated with testing feedback to reduce confusion and
                    tighten flow transitions.
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
                      "max-w-[1200px]",
                      "flex flex-col lg:flex-row gap-6 items-center justify-between",
                      block.reverse && "lg:flex-row-reverse",
                    )}
                  >
                    <Image
                      className="max-w-[594px] w-full h-auto"
                      src={block.image}
                      alt={block.title}
                    />
                    <div className="max-w-[361px] text-[18px] lg:text-[24px] text-[#262C2C]">
                      <h6 className="font-semibold">{block.title}</h6>
                      <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                        {block.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

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

              <article className="mt-4 mb-6 lg:mt-8 lg:mb-0 grid lg:grid-cols-2 gap-4 lg:gap-6">
                <Image className="w-full h-auto" src={alaire4} alt="Quiz testing" />
                <Image
                  className="w-full h-auto"
                  src={alaire7}
                  alt="Admin testing"
                />
              </article>
            </article>

            <article className="max-w-[1077px] pt-10 pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[32px] font-semibold">
                Testing Goals
              </h2>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>Improve quiz completion and reduce drop-off.</li>
                  <li>
                    Validate that users can confidently approve or restyle items.
                  </li>
                  <li>
                    Measure admin speed when sorting and resolving requests.
                  </li>
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
                    Most participants completed onboarding without guidance.
                  </li>
                  <li>
                    Item feedback controls were understood quickly and used
                    consistently.
                  </li>
                  <li>
                    Admin users managed requests faster with status-based
                    filtering.
                  </li>
                </ul>
              </div>
            </article>

            <article className="pt-20 pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Results
              </h2>
              <p className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                The final product improved personalization consistency and
                streamlined request operations.
              </p>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>
                    <span className="font-bold">Higher onboarding completion</span>{" "}
                    through clearer quiz progression.
                  </li>
                  <li>
                    <span className="font-bold">Faster feedback loops</span>{" "}
                    with explicit loved/restyle actions.
                  </li>
                  <li>
                    <span className="font-bold">Improved admin throughput</span>{" "}
                    using consolidated request dashboards.
                  </li>
                  <li>
                    <span className="font-bold">Stronger personalization</span>{" "}
                    from structured preference capture and moodboard iteration.
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
                    Balancing high personalization with efficient styling
                    operations.
                  </li>
                  <li>
                    Designing flexible moodboard states without creating UI
                    complexity.
                  </li>
                  <li>
                    Keeping admin controls powerful while maintaining clarity.
                  </li>
                </ul>
              </div>
            </article>

            <article className="pt-[108px] pb-10 max-w-[1168px] flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Conclusion
              </h2>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.2px]">
                Alaire demonstrates how guided preference capture, curated
                moodboards, and operational dashboards can work together to
                deliver tailored styling experiences at scale while keeping the
                execution workflow efficient for internal teams.
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
