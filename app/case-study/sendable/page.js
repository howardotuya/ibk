import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";
import clsx from "clsx";

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
import sendable25 from "@/public/images/case-study/sendable/25.png";

export const metadata = {
  title: "Sendable",
  description:
    "Sendable is a golf coaching platform that connects golfers with instructors, manages bookings and payouts, and provides admin tools for growth and revenue operations.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/sendable",
  },
};

const designBlocks = [
  {
    title: "Golfer Dashboard",
    text: "The golfer dashboard focuses on speed. Users can search instructors, scan available coaches, and quickly access booking and profile actions from one clean surface.",
    image: sendable5,
    reverse: false,
  },
  {
    title: "Booking History",
    text: "Session tabs for pending, active, and completed bookings make booking status obvious. Payment state and action buttons are placed directly where decisions happen.",
    image: sendable4,
    reverse: true,
  },
  {
    title: "Account Settings",
    text: "Profile editing and privacy policy details are structured for readability, reducing support dependency and making self-service updates straightforward.",
    image: sendable6,
    reverse: false,
  },
  {
    title: "Coach Home",
    text: "The coach dashboard highlights workload, availability, and partner course activity so instructors can run daily operations without jumping across pages.",
    image: sendable7,
    reverse: true,
  },
  {
    title: "Service Management",
    text: "Instructors can define session types, pricing, and course links in one table view, helping them control their service catalog and earnings flow.",
    image: sendable8,
    reverse: false,
  },
  {
    title: "Booking Queue",
    text: "Pending requests include quick accept/cancel controls and key details, improving turnaround time and reducing friction in the booking pipeline.",
    image: sendable9,
    reverse: true,
  },
  {
    title: "Payment Management",
    text: "Earnings summaries, payout history, and withdrawal entry points are centralized so coaches understand exactly what they earned and when they get paid.",
    image: sendable10,
    reverse: false,
  },
  {
    title: "Payment State Variant",
    text: "Additional payout-state handling was designed for consistency, preserving trust by showing familiar metrics and actions during repeated financial workflows.",
    image: sendable11,
    reverse: true,
  },
  {
    title: "Golf Course Partnerships",
    text: "Course discovery cards make partner selection easy, with quick actions to request partnerships or set availability based on each course relationship.",
    image: sendable12,
    reverse: false,
  },
  {
    title: "Coach Messaging",
    text: "In-app messaging supports real-time communication around sessions, reducing missed classes and helping users coordinate preparation before lessons.",
    image: sendable13,
    reverse: true,
  },
  {
    title: "Course Directory State",
    text: "A second course-grid state was created to support repeat navigation patterns and keep partner workflows familiar across different user journeys.",
    image: sendable14,
    reverse: false,
  },
  {
    title: "Settings Deep View",
    text: "The expanded settings layout improves scannability for longer legal and account content while maintaining the same system hierarchy and spacing.",
    image: sendable15,
    reverse: true,
  },
  {
    title: "Admin Dashboard",
    text: "Admins can monitor partner request volume, split status, and recent activity from a central dashboard built for operational oversight.",
    image: sendable16,
    reverse: false,
  },
  {
    title: "Order & Revenue Tracking",
    text: "Revenue analytics and partner split tables were designed to support high-confidence decisions on payout operations and growth planning.",
    image: sendable17,
    reverse: true,
  },
  {
    title: "Course Management",
    text: "A tab-based form architecture keeps course profile, imagery, and amenity details organized so updates remain fast and low error.",
    image: sendable18,
    reverse: false,
  },
  {
    title: "Booking Operations",
    text: "The admin booking board gives teams a complete view of volume, lesson type, and payment state for day-to-day scheduling control.",
    image: sendable19,
    reverse: true,
  },
  {
    title: "Platform Overview",
    text: "The broader dashboard consolidates user counts, role segmentation, and onboarding data for top-level platform health visibility.",
    image: sendable20,
    reverse: false,
  },
  {
    title: "Course Partner Variant",
    text: "A repeat course-partner surface was included to validate consistency in layout behavior across different navigation and account contexts.",
    image: sendable21,
    reverse: true,
  },
  {
    title: "User Management",
    text: "Role-based tabs and searchable tables allow admin teams to quickly locate golfers, golf pros, and courses for support and moderation.",
    image: sendable22,
    reverse: false,
  },
  {
    title: "Transaction History",
    text: "Transaction logs expose sender, recipient, amount, and status so finance teams can identify issues and resolve payment disputes quickly.",
    image: sendable23,
    reverse: true,
  },
  {
    title: "Partnership & Revenue",
    text: "Partnership revenue reporting ties courses to instructors and outcomes, giving leadership better visibility into monetization performance.",
    image: sendable24,
    reverse: false,
  },
  {
    title: "Marketing Landing Page",
    text: "The landing page communicates product value, social proof, and clear CTA paths that drive instructor discovery and first booking conversion.",
    image: sendable25,
    reverse: true,
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
                  Usability sessions were run with golfers, coaches, and
                  operations users to validate learnability, speed, and trust
                  across critical flows.
                </p>
              </article>

              <article className="mt-4 mb-6 lg:mt-8 lg:mb-0 grid lg:grid-cols-2 gap-4 lg:gap-6">
                <Image
                  className="w-full h-auto"
                  src={sendable5}
                  alt="Golfer app"
                />
                <Image
                  className="w-full h-auto"
                  src={sendable20}
                  alt="Admin dashboard"
                />
              </article>
            </article>

            <article className="max-w-[1077px] pt-10 pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[32px] font-semibold">
                Testing Goals
              </h2>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>Reduce time to complete first booking.</li>
                  <li>
                    Verify payout and transaction states are self-explanatory.
                  </li>
                  <li>
                    Measure admin efficiency when searching and resolving
                    records.
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
                    Participants completed key booking tasks with minimal
                    assistance.
                  </li>
                  <li>
                    Status tags and action placement were consistently
                    understood across payment and booking views.
                  </li>
                  <li>
                    Admin users reported faster reconciliation using searchable
                    tabular layouts.
                  </li>
                </ul>
              </div>
            </article>

            <article className="pt-20 pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Results
              </h2>
              <p className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                Post-launch behavior indicated stronger workflow clarity and
                operational control.
              </p>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>
                    <span className="font-bold">Higher booking completion</span>{" "}
                    across first-time users after discovery flow refinements.
                  </li>
                  <li>
                    <span className="font-bold">Improved payout trust</span>{" "}
                    from transparent earnings and withdrawal states.
                  </li>
                  <li>
                    <span className="font-bold">Lower support dependency</span>{" "}
                    for transaction and partnership clarifications.
                  </li>
                  <li>
                    <span className="font-bold">Better admin throughput</span>{" "}
                    through structured search, filtering, and data views.
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
                    <span className="font-medium">Role complexity:</span>{" "}
                    Balancing golfer, coach, and admin mental models in one
                    ecosystem.
                  </li>
                  <li>
                    <span className="font-medium">Data density:</span> Making
                    analytics-heavy tables easy to scan while preserving depth.
                  </li>
                  <li>
                    <span className="font-medium">Workflow consistency:</span>{" "}
                    Keeping repeated modules coherent across different surfaces
                    and account contexts.
                  </li>
                </ul>
              </div>
            </article>

            <article className="pt-[108px] pb-10 max-w-[1168px] flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Conclusion
              </h2>

              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.2px]">
                Sendable unified instructor discovery, lesson operations, and
                revenue oversight into a single product experience. The final
                system improved decision clarity for golfers, operational speed
                for coaches, and visibility for admin teams, creating a solid
                foundation for scalable marketplace growth.
              </div>
            </article>
          </Container>
        </section>

        <SubFooter first={"Barista Buddy"} link={"/case-study/barista-buddy"} />
      </main>

      <Footer />
    </>
  );
}
