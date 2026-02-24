"use client";

import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";
import clsx from "clsx";

import ut from "@/public/images/PNG/oppia/ut.png";
import ut2 from "@/public/images/PNG/oppia/ut2.png";
import baristabuddy1 from "@/public/images/case-study/baristabuddy/1.png";
import baristabuddy2 from "@/public/images/case-study/baristabuddy/2.png";
import baristabuddy3 from "@/public/images/case-study/baristabuddy/3.png";
import baristabuddy4 from "@/public/images/case-study/baristabuddy/4.png";
import baristabuddy5 from "@/public/images/case-study/baristabuddy/5.png";
import baristabuddy6 from "@/public/images/case-study/baristabuddy/6.png";
import baristabuddy7 from "@/public/images/case-study/baristabuddy/7.png";
import baristabuddy8 from "@/public/images/case-study/baristabuddy/8.png";
import baristabuddy9 from "@/public/images/case-study/baristabuddy/9.png";
import baristabuddy10 from "@/public/images/case-study/baristabuddy/10.png";
import baristabuddy11 from "@/public/images/case-study/baristabuddy/11.png";
import baristabuddy12 from "@/public/images/case-study/baristabuddy/12.png";
import baristabuddy13 from "@/public/images/case-study/baristabuddy/13.png";
import baristabuddy14 from "@/public/images/case-study/baristabuddy/14.png";
import baristabuddy15 from "@/public/images/case-study/baristabuddy/15.png";
import baristabuddy16 from "@/public/images/case-study/baristabuddy/16.png";
import baristabuddy17 from "@/public/images/case-study/baristabuddy/17.png";
import { CldVideoPlayer } from "next-cloudinary";

// export const metadata = {
//   title: "BaristaBuddy",
//   description:
//     "BaristaBuddy is a coffee machine management platform for service operations, asset tracking, work orders, inventory, and technician workflows.",
//   alternates: {
//     canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/baristabuddy",
//   },
// };

const designBlocks = [
  {
    title: "Dashboard/ Homepage",
    text: "The dashboard contains the total number of assets, Number of clients, Work orders in progress, Scheduled service, Calendar, Urgent work orders.",
    image: baristabuddy4,
    reverse: false,
  },
  {
    title: "Clients",
    text: "On the client page, the admin can see all the registered client details on the platform and also register a new client.",
    image: baristabuddy5,
    reverse: true,
  },
  {
    title: "Assets",
    text: "On this page, the admin can see all the assets assigned to each clients, the status of the assets and also register new assets.",
    image: baristabuddy6,
    reverse: false,
  },
  {
    title: "Work orders",
    text: "On this page, the admin can document service activities, manage work orders and optimize routes.",
    image: baristabuddy7,
    reverse: true,
  },
  {
    title: "Technicians",
    text: "On this page, the admin can manage technicians’ record, assignment and work schedule.",
    image: baristabuddy8,
    reverse: false,
  },
  {
    title: "Inventory",
    text: "On this page, the admin can track, and manage inventory items for each client.",
    image: baristabuddy9,
    reverse: true,
  },
  {
    title: "Service Logs",
    text: "On this page, admins can create new service logs and manage all clients’ service logs.",

    image: baristabuddy10,
    reverse: false,
  },
  {
    title: "Schedule",
    text: "On this page, the admin can manage recurring maintenance schedules for all coffee machines and also create new schedule.",
    image: baristabuddy11,
    reverse: true,
  },
  {
    title: "Dashboard",
    text: "On the dashboard, technicians can see assigned schedules, Route overview and work orders.",
    image: baristabuddy12,
    reverse: false,
  },
  {
    title: "Work Order",
    text: "On this page, technicians can see today’s task, scheduled tasks, low severity and high priority tasks.",
    image: baristabuddy13,
    reverse: true,
  },
  {
    title: "Field service",
    text: "On this page, technicians can log in their scheduled service and tasks.",
    image: baristabuddy14,
    reverse: false,
  },
  {
    title: "Route Management",
    text: "On this page, technicians can access assigned routes and asset visits for efficient planning.",
    image: baristabuddy15,
    reverse: true,
  },
  {
    title: "Inventory",
    text: "On this page, technicians can record all the inventory items they used and also see the history.",
    image: baristabuddy16,
    reverse: false,
  },
  {
    title: "Profile",
    text: "On this page, technicians can view their profile and also make changes.",
    image: baristabuddy17,
    reverse: true,
  },
];

const productMetrics = [
  {
    metric: "Average service scheduling time",
    baseline: "15mins",
    result: "4mins",
  },
  {
    metric: "Missed service logs",
    baseline: "23%",
    result: "4%",
  },
  {
    metric: "Asset reallocation time",
    baseline: "2 days",
    result: "< 1 hour",
  },
  {
    metric: "Technician reporting accuracy",
    baseline: "68%",
    result: "95%",
  },
  {
    metric: "Admin dashboard usage",
    baseline: "-",
    result: "100% adoption",
  },
];

export default function BaristaBuddy() {
  return (
    <>
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>

      <main>
        <section className="bg-[#F7F7F7] px-5 xl:px-0">
          <Container>
            <article className="pt-10 flex justify-center items-end gap-4 lg:gap-8">
              <Image
                className="max-w-[538px] w-full h-auto"
                src={baristabuddy1}
                alt="BaristaBuddy dashboard"
              />
            </article>
          </Container>
        </section>

        <section className="px-5 xl:px-0 border-b border-[#EFFEF3]">
          <Container>
            <div className="flex flex-col gap-4 lg:gap-6 my-6 lg:my-10">
              <h1 className="text-[#0C0D0D] font-cooper lg:text-[24px] tracking-[-0.64px] lg:tracking-[-0.96px]">
                BaristaBuddy
              </h1>
              <p className="text-[24px] lg:text-[48px] font-medium leading-[120%] tracking-[-0.96px] lg:tracking-[-1.92px]">
                Designed a web based platform designed to streamline the
                management of client contracts, coffee machine assets, service
                scheduling, technician assignments, and consumable inventory for
                a coffee service company
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
                  Barista Buddy is a web-based platform designed to streamline
                  the management of client contracts, coffee machine assets,
                  service scheduling, technician assignments, and consumable
                  inventory for a coffee service company. The product was
                  developed to replace fragmented spreadsheets and manual
                  processes that caused inefficiencies in tracking client assets
                  and service logs.
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
                  Before the Barista Buddy, the company’s operations relied
                  heavily on disconnected tools and manual recordkeeping.
                </p>

                <p className="mt-2 text-[#262C2C] font-medium text-[20px] leading-[24px] tracking-[-0.2px]">
                  This led to:
                </p>
                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    Inefficient scheduling and frequent service overlaps or
                    missed appointments.
                  </li>
                  <li>
                    Lack of real-time visibility into asset conditions and
                    technician performance.
                  </li>
                  <li>
                    Difficulty managing inventory, leading to shortages or
                    overstocking.
                  </li>
                  <li>
                    Cumbersome communication between admins and technicians,
                    especially for urgent work orders.
                  </li>
                </ul>
              </article>

              <article className="max-w-[569px] mt-8 w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={baristabuddy2} alt="Barista workspace" />
              </article>
            </article>

            <article className="py-8 lg:py-10 grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Goal
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  The primary goal was to build a centralized platform where all
                  roles Admins and Technicians could efficiently manage assets,
                  clients, and service operations in real time.
                </p>

                <p className="mt-2 text-[#262C2C] font-medium text-[20px] leading-[24px] tracking-[-0.2px]">
                  Specific objectives included:
                </p>
                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    Enable Admins to manage clients, assets, services, and
                    technicians from a single dashboard.
                  </li>
                  <li>
                    Give Technicians mobile-friendly access to their schedules,
                    routes, and service logs.
                  </li>
                  <li>
                    Reduce operational delays by automating linkages between
                    assets, clients and service records.
                  </li>
                  <li>
                    Improve data accuracy and accountability through real time
                    updates and restricted permissions.
                  </li>
                </ul>
              </article>

              <article className="max-w-[569px] mt-8 w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={baristabuddy3} alt="Technicians on site" />
              </article>
            </article>

            <article className="py-20 grid gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Product Metrics
                </h2>

                <div className="">
                  <div className="grid grid-cols-1 gap-4 pb-4 border-b border-[#E5E8E8] lg:grid-cols-[2.1fr_1fr_1fr]">
                    <p className="text-[#343A3A] text-[18px] lg:text-[24px] font-semibold">
                      Metrics
                    </p>
                    <p className="text-[#343A3A] text-[18px] lg:text-[24px] font-semibold">
                      Baseline
                    </p>
                    <p className="text-[#343A3A] text-[18px] lg:text-[24px] font-semibold">
                      Post launch Result
                    </p>
                  </div>

                  <div className="pt-2">
                    {productMetrics.map((item) => (
                      <div
                        key={item.metric}
                        className="grid grid-cols-1 gap-3 py-5 lg:grid-cols-[2.1fr_1fr_1fr] lg:py-6"
                      >
                        <p className="text-[#343A3A] text-[18px] lg:text-[24px] lg:leading-[29px]">
                          {item.metric}
                        </p>
                        <p className="text-[#343A3A] text-[18px] lg:text-[24px] lg:leading-[29px]">
                          {item.baseline}
                        </p>
                        <p className="text-[#343A3A] text-[18px] lg:text-[24px] lg:leading-[29px]">
                          {item.result}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </article>

            <article className="py-20 flex flex-col gap-5 lg:gap-8">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Research & Analysis
                </h2>

                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  Before coming up with the solution, I conducted interview with
                  the stakeholders: Service Managers, Technicians and Admin
                  staff
                </p>
              </article>

              <article className="grid gap-5 lg:grid-cols-[52%_48%] lg:gap-10">
                <article className="flex flex-col gap-5 lg:gap-4">
                  <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                    The discovery phase included:
                  </h5>

                  <ol className="list-decimal pl-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px] flex flex-col gap-4">
                    <li>
                      Stakeholder interviews with service managers, technicians,
                      and admin staff.
                    </li>
                    <li>
                      Process mapping to identify inefficiencies in client and
                      asset management.
                    </li>
                    <li>
                      Competitive analysis of existing asset management tools
                      (e.g., ServiceM8, UpKeep).
                    </li>
                  </ol>
                </article>

                <article className="flex flex-col gap-5 lg:gap-4">
                  <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                    Key Insights
                  </h5>

                  <ol className="list-decimal pl-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px] flex flex-col gap-4">
                    <li>
                      Admins needed a multi-layered dashboard with at-a-glance
                      KPIs and full data control.
                    </li>
                    <li>
                      Technicians preferred mobile simplicity with limited
                      actions, log service, upload photos, mark completion.
                    </li>
                    <li>
                      Data needed to auto-link dynamically (Clients ↔ Assets ↔
                      Services ↔ Technicians) to minimize redundancy.
                    </li>
                    <li>
                      Service logs were often lost or incomplete enforcing
                      structure and traceability was critical.
                    </li>
                  </ol>
                </article>
              </article>
            </article>

            <article className="py-20 grid gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Design Process
                </h2>

                <div className="text-[20px] tracking-[-0.2px]">
                  <p>1. Information Architecture</p>
                  <p className="mt-4 font-medium">
                    The team structured the system around five primary modules:
                  </p>
                  <ul className="mt-6 pl-6 list-disc list-outside space-y-4">
                    <li>Clients</li>
                    <li>Assets</li>
                    <li>Service and work orders</li>
                    <li>Technicians</li>
                    <li>Inventory</li>
                  </ul>
                </div>

                <div className="mt-8 text-[20px] tracking-[-0.2px]">
                  <p>2. User Flows</p>
                  <p className="mt-4 font-medium">
                    Admins and Technicians had distinct flows
                  </p>
                  <ul className="mt-6 pl-6 list-disc list-outside space-y-4">
                    <li>
                      <span className="font-medium">Admins:</span> Manage →
                      Schedule → Assign → Track
                    </li>
                    <li>
                      <span className="font-medium">Technicians:</span> View →
                      Execute → Log → Complete
                    </li>
                  </ul>
                </div>

                <div className="mt-8 text-[20px] tracking-[-0.2px]">
                  <p>3. Wireframes & Prototyping</p>
                  <p className="mt-4 font-medium">
                    High Fidelity prototypes focused on:
                  </p>
                  <ul className="mt-6 pl-6 list-disc list-outside space-y-4">
                    <li>
                      A dashboard-first approach (KPIs, quick links, and
                      alerts).
                    </li>
                    <li>
                      Pop-up modals for fast data entry (to reduce navigation
                      friction).
                    </li>
                    <li>Calendar/List toggles for schedule visualization.</li>
                  </ul>
                </div>
              </article>
            </article>

            <article className="py-20 flex flex-col gap-6 lg:gap-10">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Design Solution
                </h2>

                <div className="text-[32px] text-[#2F3434] tracking-[-0.32px] font-bold">
                  <h3>Admin Role</h3>
                </div>
              </article>

              <div className="w-full">
                {designBlocks.slice(0, 8).map((block, index) => (
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
                  Technician Role
                </h2>
              </div>

              {designBlocks.slice(8).map((block, index) => (
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
                      Admin role
                    </h6>
                    <div className="w-[567px]">
                      <CldVideoPlayer src="Recording_2026-02-19_214111_m8epf7" />
                    </div>
                  </div>

                  <div className="w-auto flex flex-col gap-8">
                    <h6 className="text-[24px] font-semibold text-[#2F3434]">
                      Technician Role
                    </h6>
                    <div className="w-[567px]">
                      <CldVideoPlayer src="Recording_2026-02-19_220411_lig5ro" />
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
                  Testing was conducted with Admins, Technicians and customer
                  support
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
                  <li>Validate ease of navigation for both roles.</li>
                  <li>
                    Test real-time data synchronization between Admin and
                    Technician views.
                  </li>
                  <li>Observe task completion times and error frequency.</li>
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
                    Admins appreciated the dynamic linking of clients and assets
                    but requested color-coded status indicators for better
                    prioritization.
                  </li>
                  <li>
                    Technicians found the modal-based service checklist
                    intuitive but requested offline support for areas with low
                    connectivity.
                  </li>
                  <li>
                    Overall, data latency between admin updates and technician
                    devices was under 2 seconds, meeting real-time requirements.
                  </li>
                </ul>
              </div>
            </article>

            <article className="pt-20 pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Results
              </h2>
              <p className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                After deployment:
              </p>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>
                    Reduced manual data entry by{" "}
                    <span className="font-bold">70%.</span>
                  </li>
                  <li>
                    <span className="font-bold">Improved asset visibility</span>{" "}
                    from centralized fleet and service history tracking.
                  </li>
                  <li>
                    Improved service and
                    <span className="font-bold">reliability</span> and{" "}
                    <span className="font-bold">accountability.</span>
                  </li>
                  <li>
                    Enhanced <span className="font-bold">collaboration</span>{" "}
                    between office admins and field technicians.
                  </li>
                  <li>
                    Increased <span className="font-bold">visibility</span> into
                    client contracts, service history, and asset lifecycles.
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
                    <span className="font-medium">Data Integration:</span>{" "}
                    Importing historical client and asset records required
                    extensive data cleaning.
                  </li>
                  <li>
                    <span className="font-medium">
                      Feature Scope Management:
                    </span>{" "}
                    Prioritizing essential workflows without overcomplicating
                    the UI demanded constant stakeholder alignment.
                  </li>
                </ul>
              </div>
            </article>

            <article className="pt-[108px] pb-10 max-w-[1168px] flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Conclusion
              </h2>

              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.2px]">
                The Barista Buddy manager successfully transformed a paper-based
                service operation into a digital, data-driven ecosystem. By
                combining thoughtful UX design, role-based access control, and
                real-time synchronization, the system empowered both
                administrators and field technicians to operate with speed,
                accuracy, and accountability
              </div>
            </article>
          </Container>
        </section>

        <SubFooter first={"EasySpend"} link={"/case-study/easyspend"} />
      </main>

      <Footer />
    </>
  );
}
