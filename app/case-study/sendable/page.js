"use client";

import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";
import clsx from "clsx";

import ut from "@/public/images/PNG/oppia/ut.png";
import ut2 from "@/public/images/PNG/oppia/ut2.png";
import sendable1 from "@/public/images/case-study/sendable/1.png";
import sendable2 from "@/public/images/case-study/sendable/2.png";
import sendable3 from "@/public/images/case-study/sendable/3.png";
import sendable4 from "@/public/images/case-study/sendable/4.png";
import sendable5 from "@/public/images/case-study/sendable/5.png";
import sendable6 from "@/public/images/case-study/sendable/6.png";
import sendable7 from "@/public/images/case-study/sendable/7.png";
import sendable8 from "@/public/images/case-study/sendable/8.png";
import sendable9 from "@/public/images/case-study/sendable/9.png";
import sendable10 from "@/public/images/case-study/sendable/10.png";
import sendable11 from "@/public/images/case-study/sendable/11.png";
import sendable12 from "@/public/images/case-study/sendable/12.png";
import sendable13 from "@/public/images/case-study/sendable/13.png";
import sendable14 from "@/public/images/case-study/sendable/14.png";
import sendable15 from "@/public/images/case-study/sendable/15.png";
import sendable16 from "@/public/images/case-study/sendable/16.png";
import sendable17 from "@/public/images/case-study/sendable/17.png";
import sendable18 from "@/public/images/case-study/sendable/18.png";
import sendable19 from "@/public/images/case-study/sendable/19.png";
import sendable20 from "@/public/images/case-study/sendable/20.png";
import sendable21 from "@/public/images/case-study/sendable/21.png";
import sendable22 from "@/public/images/case-study/sendable/22.png";
import sendable23 from "@/public/images/case-study/sendable/23.png";
import sendable24 from "@/public/images/case-study/sendable/24.png";
import { CldVideoPlayer } from "next-cloudinary";

// export const metadata = {
//   title: "Sendable",
//   description:
//     "Sendable is a golf coaching platform that connects golfers with instructors, manages bookings and payouts, and provides admin tools for growth and revenue operations.",
//   alternates: {
//     canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/sendable",
//   },
// };

const designBlocks = [
  {
    title: "Dashboard",
    text: "On this page, golfers can see the list of golf pros and book any pro they want.",
    image: sendable4,
    reverse: false,
  },
  {
    title: "Bookings",
    text: "On this page, the golfers can see the list of the Golf pros tey have booked and pay for bookings.",
    image: sendable5,
    reverse: true,
  },
  {
    title: "Message",
    text: "On this page, the golfer can send message to their Golf pro.",
    image: sendable14,
    reverse: false,
  },
  {
    title: "Settings",
    text: "On this page, the golfers can see their profile details and terms and conditions of the platform.",
    image: sendable6,
    reverse: true,
  },
  {
    title: "Dashboard",
    text: "On this page, golf pros can see their calendar, number of bookings, and golf course partners.",
    image: sendable7,
    reverse: false,
  },
  {
    title: "Booking",
    text: "On this page, golf pros can see their bookings and accept or cancel bookings.",
    image: sendable8,
    reverse: true,
  },
  {
    title: "Services",
    text: "On this page, golf pros can see the number of sessions, number of services, and the golf pros they are affiliated with.",
    image: sendable9,
    reverse: false,
  },
  {
    title: "Payment Management ",
    text: "On this page, golf pros can see their total earnings, course earnings, number of students and their available balance. ",
    image: sendable10,
    reverse: true,
  },
  {
    title: "Golf courses",
    text: "On this page, golf pros can partner with golf courses and also set availability for partnered courses.",
    image: sendable11,
    reverse: false,
  },
  {
    title: "Payment Management ",
    text: "On this page, golf pros can see their total earnings, course earnings, number of students and their available balance. ",
    image: sendable12,
    reverse: true,
  },
  {
    title: "Golf courses",
    text: "On this page, golf pros can partner with golf courses and also set availability for partnered courses.",
    image: sendable13,
    reverse: false,
  },
  {
    title: "Message",
    text: "On this page, golf pros can respond to messages from golfers.",
    image: sendable14,
    reverse: true,
  },
  {
    title: "Settings",
    text: "On this page, golf pros can edit their profile details and also see the terms and privacy.",
    image: sendable15,
    reverse: false,
  },
  {
    title: "Dashboard",
    text: "On this page, course managers can see partnership request from golf pros.",
    image: sendable16,
    reverse: false,
  },
  {
    title: "Order and Revenue tracking",
    text: "On this page, golf course managers can see their total revenue, partners and active partners.",
    image: sendable17,
    reverse: true,
  },
  {
    title: "Course Management",
    text: "On this page, golf pros can fill in the information about their course, add pictures and amenities.",
    image: sendable18,
    reverse: false,
  },
  {
    title: "Booking",
    text: "On this page, golf pros can respond to messages from golfers.",
    image: sendable19,
    reverse: true,
  },
  {
    title: "Settings",
    text: "On this page, golf pros can partner with golf courses and also set availability for partnered courses.",
    image: sendable20,
    reverse: false,
  },
  {
    title: "Dashboard",
    text: "On this page, admins can manage golfers, golf pros, course managers.",
    image: sendable21,
    reverse: false,
  },
  {
    title: "User Management",
    text: "On this page, admins can see the list of golf admins, pros and course managers.",
    image: sendable22,
    reverse: true,
  },
  {
    title: "Transaction History",
    text: "On this page, admins can see all the transaction history on the site.",
    image: sendable23,
    reverse: false,
  },
  {
    title: "Partnership and Revenue",
    text: "On this page, admins can see the total revenue, partners and active partners.",
    image: sendable24,
    reverse: true,
  },
  {
    title: "Landing page",
    text: "On this page, golfers can see what the platform is about and also find a golf pro.",
    videoSrc: "sendable-landing-page_zqluxx",
    reverse: false,
  },
];

export default function Sendable() {
  return (
    <>
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>

      <main>
        <section className="bg-[#F3F8F5] px-5 xl:px-0">
          <Container>
            <article className="pt-10 flex justify-center items-end gap-4 lg:gap-8">
              <Image
                className="max-w-[538px] w-full h-auto"
                src={sendable1}
                alt="Sendable platform dashboard"
              />
            </article>
          </Container>
        </section>

        <section className="px-5 xl:px-0 border-b border-[#EFFEF3]">
          <Container>
            <div className="flex flex-col gap-4 lg:gap-6 my-6 lg:my-10">
              <h1 className="text-[#0C0D0D] font-cooper lg:text-[24px] tracking-[-0.64px] lg:tracking-[-0.96px]">
                Sendable
              </h1>
              <p className="text-[24px] lg:text-[48px] font-medium leading-[120%] tracking-[-0.96px] lg:tracking-[-1.92px]">
                Designed a Golf booking platform to simplify interaction between
                Golfers, Golf professionals and Golf courses
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
                  The platform aimed to provide a seamless experience that
                  connects all three stakeholders enabling pros to create
                  bookable lessons, partner with golf courses, and publish
                  real-time availability, while allowing golfers to easily
                  discover, book, and pay for lessons at their preferred
                  courses.
                </p>
              </article>
            </section>
          </Container>
        </section>

        <section className="px-5 xl:px-0">
          <Container>
            <article className="py-8 lg:py-10 grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Problem Statement
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  Before Sendable, golf professionals and golfers faced a
                  fragmented experience:
                </p>
                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    Pros relied on manual scheduling or course-specific systems,
                    leading to inconsistent bookings and missed revenue.
                  </li>
                  <li>
                    Golfers had to contact pros directly or through course
                    reception, often with limited visibility into available
                    times or lesson types.
                  </li>
                  <li>
                    Courses had no centralized system to manage revenue splits
                    or validate partnerships.
                  </li>
                </ul>
              </article>

              <article className="max-w-[569px] mt-8 w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={sendable2} alt="Stakeholder interview session" />
              </article>
            </article>

            <article className="py-8 lg:py-10 grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Goal
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  The project aimed to:
                </p>
                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    Simplify the booking and partnership process between golf
                    pros and courses.
                  </li>
                  <li>
                    Offer golfers a transparent and frictionless booking
                    experience.
                  </li>
                  <li>
                    Automate time slot and revenue management to reduce
                    operational overhead.
                  </li>
                </ul>
              </article>

              <article className="max-w-[569px] mt-8 w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={sendable3} alt="User research in field" />
              </article>
            </article>

            <article className="py-8 lg:py-10 grid gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Product Metrics
                </h2>

                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    Booking Completion Rate:{" "}
                    <span className="font-medium">+42%</span> after launch
                    (measured from first interaction to confirmed booking).
                  </li>{" "}
                  <li>
                    Conflict Reduction: <span className="font-medium">90%</span>{" "}
                    fewer double-booking incidents compared to pre-launch manual
                    systems.
                  </li>{" "}
                  <li>
                    Course Partnership Adoption:{" "}
                    <span className="font-medium">65%</span> of pros created at
                    least one active course partnership within the first two
                    months.
                  </li>{" "}
                  <li>
                    User Satisfaction:{" "}
                    <span className="font-medium">4.7/5</span>
                    average rating across golfer reviews.
                  </li>
                </ul>
              </article>
            </article>

            {/* RESEARCH AND ANALYSIS */}
            <article className="pt-8 pb-5 flex flex-col gap-5 lg:gap-8 lg:py-10">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Research & Analysis
                </h2>
              </article>

              <article className="grid gap-5 lg:grid-cols-[52%_48%] lg:gap-10">
                <article className="flex flex-col gap-5 lg:gap-4">
                  <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                    Interview Questions
                  </h5>

                  <ol className="list-decimal pl-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px] flex flex-col gap-4">
                    <li>
                      <span className="font-medium">Golf Pros:</span> Desired
                      flexibility, transparent payout structures, and easy
                      course association without administrative overhead.
                    </li>
                    <li>
                      <span className="font-medium">Golf Courses:</span> Wanted
                      control over which pros could teach on their grounds and
                      visibility into bookings for revenue tracking.
                    </li>
                    <li>
                      <span className="font-medium">Golfers:</span>
                      Needed clear lesson information, verified pros, and
                      real-time booking without back-and-forth communication.
                    </li>
                  </ol>
                </article>

                <article className="flex flex-col gap-5 lg:gap-4">
                  <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                    Key Insights
                  </h5>

                  <ol className="list-decimal pl-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px] flex flex-col gap-4">
                    <li>
                      Lack of centralized systems for course approval and
                      scheduling.
                    </li>
                    <li>
                      Manual payout and revenue split tracking leading to
                      disputes.
                    </li>
                    <li>Poor visibility of available lessons for golfers.</li>
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
                    <span className="font-medium">
                      Information Architecture:
                    </span>{" "}
                    We mapped user journeys for each persona: Golf Pro, Course
                    Admin, and Golfer to identify crossover points and potential
                    friction. This ensured the interface supported task
                    continuity across roles.
                  </li>
                  <li>
                    <span className="font-medium">
                      Wireframes and Prototyping:
                    </span>{" "}
                    High-fidelity wireframes were created to visualize:
                  </li>
                  <li className="list-none">
                    i) The Service Creation Flow (with templates like Private
                    Lesson, Junior Group, Virtual Coaching).
                  </li>
                  <li className="list-none">
                    ii) The Course Partnership Application process.
                  </li>
                  <li className="list-none">
                    iii) The Golfer Booking Flow with real-time slot visibility.
                  </li>
                </ul>
              </article>
            </article>

            <article className="pt-8 pb-5 lg:py-10 flex flex-col gap-6 lg:gap-10">
              <article className="flex flex-col gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Design Solution
                </h2>

                <div className="text-[32px] text-[#2F3434] tracking-[-0.32px] font-bold">
                  <h3>Golfer Role</h3>
                </div>
              </article>

              <div className="w-full">
                {designBlocks.slice(0, 4).map((block, index) => (
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

              <div className="mt-[176px] relative">
                <h2 className="text-[32px] text-[#2F3434] font-bold tracking-[-0.32px]">
                  Golf Pro Role
                </h2>
              </div>

              {designBlocks.slice(4, 13).map((block, index) => (
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

              <div className="mt-[176px] relative">
                <h2 className="text-[32px] text-[#2F3434] font-bold tracking-[-0.32px]">
                  Golf Course Role
                </h2>
              </div>

              {designBlocks.slice(13, 18).map((block, index) => (
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

              <div className="mt-[176px] relative">
                <h2 className="text-[32px] text-[#2F3434] font-bold tracking-[-0.32px]">
                  Admin Role
                </h2>
              </div>

              {designBlocks.slice(18, 22).map((block, index) => (
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

              <div className="mt-[176px] relative">
                <h2 className="text-[32px] text-[#2F3434] font-bold tracking-[-0.32px]">
                  Landing page
                </h2>
              </div>

              {designBlocks.slice(22).map((block, index) => (
                <div
                  key={block.title + index}
                  className={clsx(
                    index === 0 ? "mt-8" : "mt-[124px]",
                    "max-w-[1200px]",
                    "flex flex-col lg:flex-row gap-6 items-center justify-between",
                    block.reverse && "lg:flex-row-reverse",
                  )}
                >
                  {block.videoSrc ? (
                    <div className="max-w-[594px] w-full h-auto">
                      <CldVideoPlayer src={block.videoSrc} />
                    </div>
                  ) : (
                    <Image
                      className="max-w-[594px] w-full h-auto"
                      src={block.image}
                      alt={block.title}
                    />
                  )}
                  <div className="max-w-[361px] text-[18px] lg:text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">{block.title}</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      {block.text}
                    </p>
                  </div>
                </div>
              ))}
            </article>

            {/* PROTOTYPE */}
            <div className="w-full space-y-6 py-10">
              <h2 className="text-[#434747] text-[40px] font-semibold">
                Prototype
              </h2>

              <div className="w-full space-y-[120px]">
                <div className="flex justify-between w-full">
                  <div className="w-auto flex flex-col gap-8">
                    <h6 className="text-[24px] font-semibold text-[#2F3434]">
                      Golfer
                    </h6>
                    <div className="w-[565px]">
                      <CldVideoPlayer src="Recording_2026-02-19_231734_stizte" />
                    </div>
                  </div>

                  <div className="w-auto flex flex-col gap-8">
                    <h6 className="text-[24px] font-semibold text-[#2F3434]">
                      Golf Pro
                    </h6>
                    <div className="w-[565px]">
                      <CldVideoPlayer src="Recording_2026-02-19_232803_oovtce" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between w-full">
                  <div className="w-auto flex flex-col gap-8">
                    <h6 className="text-[24px] font-semibold text-[#2F3434]">
                      Course Manager
                    </h6>
                    <div className="w-[565px]">
                      <CldVideoPlayer src="Recording_2026-02-19_233936_pjkzl0" />
                    </div>
                  </div>

                  <div className="w-auto flex flex-col gap-8">
                    <h6 className="text-[24px] font-semibold text-[#2F3434]">
                      Admin
                    </h6>
                    <div className="w-[565px]">
                      <CldVideoPlayer src="Recording_2026-02-19_233521_neizmv" />
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
                  The testing was conducted between Golfers, Golf pros and
                  Course managers
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
                  <li>
                    Verify clarity of course-partnering and service creation.
                  </li>

                  <li>
                    Evaluate how easily users could find and book lessons.
                  </li>
                  <li>
                    Observe if pros could update availability without conflicts.
                  </li>
                </ul>
              </div>
            </article>

            {/* Findings from Testing */}
            <article className="max-w-[807px] pt-16 pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[32px] font-semibold">
                Findings from Testing
              </h2>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>
                    90% of pros completed service setup without external
                    guidance.
                  </li>

                  <li>
                    Golfers completed bookings 30% faster after UI
                    simplification.
                  </li>
                  <li>
                    Course admins appreciated transparent revenue split
                    configuration but requested clearer payout summaries
                    (implemented in next iteration).
                  </li>
                </ul>
              </div>
            </article>

            {/* Results */}
            <article className="pt-20 pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Results
              </h2>
              <p className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                Post launch analytics and feedback showed:
              </p>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>High adoption rate among pros due to ease of setup.</li>
                  <li>
                    Improved golfer satisfaction because of real-time visibility
                    and seamless checkout.
                  </li>
                  <li>
                    Operational efficiency for course managers with automatic
                    payout splits and conflict prevention.
                  </li>
                </ul>
                <p className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                  The platform’s 7% commission model and automated course-by-pro
                  revenue splits created a sustainable ecosystem, ensuring fair
                  payouts and incentivizing continued engagement.
                </p>
              </div>
            </article>

            <article className="pt-[108px] pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Challenges Faced
              </h2>

              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>
                    <span className="font-medium">
                      Complex Partnership Logic:
                    </span>{" "}
                    Handling dynamic revenue splits per course-pro relationship
                    required detailed backend mapping.
                  </li>
                  <li>
                    <span className="font-medium"> Conflict Detection:</span>{" "}
                    Making Early testing revealed overlapping time blocks; this
                    led to implementing a robust conflict warning system.
                  </li>
                </ul>
              </div>
            </article>

            <article className="pt-[108px] pb-10 max-w-[1168px] flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Conclusion
              </h2>

              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.2px]">
                The Sendable Golf Booking Platform transformed a fragmented
                process into a cohesive digital ecosystem that benefits every
                stakeholder.
                <br />
                By emphasizing clarity, control, and connectivity, Sendable
                empowered golf professionals to manage their schedules
                efficiently, helped courses streamline partnerships, and
                provided golfers with a delightful, transparent booking
                experience.
              </div>
            </article>
          </Container>
        </section>

        <SubFooter first={"Barista Buddy"} link={"/case-study/baristabuddy"} />
      </main>

      <Footer />
    </>
  );
}
