import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";
import clsx from "clsx";

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

export const metadata = {
  title: "BaristaBuddy",
  description:
    "BaristaBuddy is a coffee machine management platform for service operations, asset tracking, work orders, inventory, and technician workflows.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/baristabuddy",
  },
};

const designBlocks = [
  {
    title: "Admin Dashboard",
    text: "The admin dashboard consolidates asset health, urgent requests, active jobs, and client highlights so operations leads can prioritize action quickly.",
    image: baristabuddy4,
    reverse: false,
  },
  {
    title: "Asset Management",
    text: "Asset records are organized in a searchable table with status tags for in-service, assigned, repair, and retired states to improve fleet visibility.",
    image: baristabuddy5,
    reverse: true,
  },
  {
    title: "Client Management",
    text: "Client onboarding and relationship tracking are handled in one view, helping teams manage contacts, location data, and assigned machine counts.",
    image: baristabuddy6,
    reverse: false,
  },
  {
    title: "Inventory Management",
    text: "Inventory data captures categories, units, stock levels, and reorder thresholds to prevent supply gaps across active service routes.",
    image: baristabuddy7,
    reverse: true,
  },
  {
    title: "Work Order Operations",
    text: "Work order dashboards surface progress, completion trends, and service outcomes so dispatch teams can coordinate field execution efficiently.",
    image: baristabuddy8,
    reverse: false,
  },
  {
    title: "Technician Directory",
    text: "Technician records include assignment data and current availability to make staffing decisions clear during high-volume service windows.",
    image: baristabuddy9,
    reverse: true,
  },
  {
    title: "Technician Dashboard",
    text: "Technicians get a focused task hub with daily schedules, route summaries, and priority labels to support fast planning at shift start.",
    image: baristabuddy10,
    reverse: false,
  },
  {
    title: "Service Logs",
    text: "Service activities are captured with status tracking in a standardized log format, improving reporting quality and accountability.",
    image: baristabuddy11,
    reverse: true,
  },
  {
    title: "Service Schedule",
    text: "Recurring maintenance schedules are managed in a dedicated table that balances due dates, technicians, route numbers, and completion states.",
    image: baristabuddy12,
    reverse: false,
  },
  {
    title: "Field Service Form",
    text: "Field service entry screens simplify job logging with structured inputs for machine type, time windows, and task checklist completion.",
    image: baristabuddy13,
    reverse: true,
  },
  {
    title: "Technician Work Orders",
    text: "Route-filtered work order views help technicians stay on schedule while keeping service scope and asset volume explicit.",
    image: baristabuddy14,
    reverse: false,
  },
  {
    title: "Route Management",
    text: "Route planning is presented in a clean table model with service type and priority visibility for efficient same-day execution.",
    image: baristabuddy15,
    reverse: true,
  },
  {
    title: "Inventory Usage Tracking",
    text: "Technicians can record consumed inventory directly in workflow, improving stock accuracy and reducing reconciliation delays.",
    image: baristabuddy16,
    reverse: false,
  },
  {
    title: "My Profile",
    text: "Profile and policy information are accessible in one place, giving users control over account details while preserving trust and transparency.",
    image: baristabuddy17,
    reverse: true,
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
                Designed a service operations platform for managing coffee
                machine assets, technicians, work orders, and inventory at
                scale.
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
                  BaristaBuddy is a coffee equipment operations platform built
                  for teams that maintain machine fleets across multiple client
                  locations. It combines client records, asset inventory,
                  scheduling, technician workflows, and service reporting into a
                  single operational system.
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
                  Service teams managing coffee machines often work with
                  fragmented tools. Client records, asset lifecycle status,
                  technician schedules, and inventory updates are separated,
                  causing:
                </p>
                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>Delayed response to urgent machine failures.</li>
                  <li>Low visibility into technician workload and routes.</li>
                  <li>Poor consistency in service and maintenance records.</li>
                  <li>Inventory mismatches and avoidable stock-outs.</li>
                </ul>
                <p className="mt-2 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  BaristaBuddy was designed to centralize these workflows and
                  give operations teams a reliable daily command center.
                </p>
              </article>

              <article className="max-w-[569px] mt-8 w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={baristabuddy3} alt="Barista workspace" />
              </article>
            </article>

            <article className="py-8 lg:py-10 grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Goal
                </h2>
                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>Unify service operations into one platform workflow.</li>
                  <li>
                    Improve speed from issue detection to assignment and
                    completion.
                  </li>
                  <li>
                    Increase data accuracy in asset, service, and inventory
                    records.
                  </li>
                  <li>
                    Help technicians execute field tasks with clear route and
                    priority context.
                  </li>
                  <li>
                    Provide managers with measurable operational visibility.
                  </li>
                </ul>
              </article>

              <article className="max-w-[569px] mt-8 w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={baristabuddy2} alt="Technicians on site" />
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
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px]">
                  We reviewed current service workflows with operations leads
                  and field technicians, then mapped key bottlenecks across
                  dispatching, logging, and asset maintenance routines.
                </p>
              </article>

              <article className="flex flex-col gap-5 lg:gap-4">
                <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                  Key insights from research:
                </h5>
                <ul className="max-w-[789px] list-disc pl-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px] flex flex-col gap-4">
                  <li>
                    Teams needed one source of truth for asset and client data.
                  </li>
                  <li>
                    Dispatch decisions improved when route, status, and
                    technician availability were visible together.
                  </li>
                  <li>
                    Structured service logs reduced ambiguity during audits and
                    follow-up maintenance.
                  </li>
                  <li>
                    Inventory recording had to be embedded into daily field
                    flows to remain accurate.
                  </li>
                </ul>
              </article>
            </article>

            <article className="py-8 lg:py-10 grid gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Product Metrics
                </h2>

                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  Success was measured using operational and user performance
                  indicators:
                </p>

                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    <span className="font-medium">Work Order Cycle Time -</span>{" "}
                    assignment-to-completion duration.
                  </li>
                  <li>
                    <span className="font-medium">
                      Service Log Completion -
                    </span>{" "}
                    percentage of tasks documented correctly.
                  </li>
                  <li>
                    <span className="font-medium">Asset Downtime Rate -</span>{" "}
                    machine unavailability reduction over time.
                  </li>
                  <li>
                    <span className="font-medium">Inventory Accuracy -</span>{" "}
                    variance between recorded and actual consumables.
                  </li>
                  <li>
                    <span className="font-medium">Technician Throughput -</span>{" "}
                    completed services per technician per cycle.
                  </li>
                </ul>
              </article>
            </article>

            <article className="py-8 lg:py-10 grid gap-4 lg:gap-6">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Design Process
                </h2>

                <ul className="max-w-[1128px] pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    <span className="font-medium">Discovery & Mapping:</span>{" "}
                    Defined admin and technician responsibilities end-to-end.
                  </li>
                  <li>
                    <span className="font-medium">
                      Information Architecture:
                    </span>{" "}
                    Structured modules around clients, assets, scheduling, and
                    field activity.
                  </li>
                  <li>
                    <span className="font-medium">Wireframing:</span> Designed
                    table-first layouts to support dense operational data.
                  </li>
                  <li>
                    <span className="font-medium">UI System:</span> Applied
                    status-focused visual cues for urgency, progress, and
                    completion.
                  </li>
                  <li>
                    <span className="font-medium">Workflow Validation:</span>{" "}
                    Iterated route planning and service logging with team
                    feedback.
                  </li>
                  <li>
                    <span className="font-medium">Handoff:</span> Delivered
                    consistent interaction patterns for admin and field roles.
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
                  Usability testing was conducted with admin staff and
                  technicians to validate operational clarity, task speed, and
                  field usability.
                </p>
              </article>

              <article className="mt-4 mb-6 lg:mt-8 lg:mb-0 grid lg:grid-cols-2 gap-4 lg:gap-6">
                <Image
                  className="w-full h-auto"
                  src={baristabuddy10}
                  alt="Technician dashboard"
                />
                <Image
                  className="w-full h-auto"
                  src={baristabuddy4}
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
                  <li>Reduce time to assign and complete service jobs.</li>
                  <li>
                    Improve data quality in service logs and asset updates.
                  </li>
                  <li>
                    Validate route and priority visibility for technician teams.
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
                    Admin users completed high-frequency tasks with fewer clicks
                    after dashboard consolidation.
                  </li>
                  <li>
                    Technicians reported better confidence when priorities and
                    route data were surfaced upfront.
                  </li>
                  <li>
                    Service logs became more complete with structured form
                    fields and guided inputs.
                  </li>
                </ul>
              </div>
            </article>

            <article className="pt-20 pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Results
              </h2>
              <p className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                Post-launch usage indicated stronger operational control and
                cleaner execution across service workflows.
              </p>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>
                    <span className="font-bold">Faster dispatch cycles</span>{" "}
                    due to clearer assignment and status management.
                  </li>
                  <li>
                    <span className="font-bold">Improved asset visibility</span>{" "}
                    from centralized fleet and service history tracking.
                  </li>
                  <li>
                    <span className="font-bold">
                      Higher inventory reliability
                    </span>{" "}
                    through integrated usage updates by field teams.
                  </li>
                  <li>
                    <span className="font-bold">
                      Better service consistency
                    </span>{" "}
                    from standardized work order and logging workflows.
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
                    <span className="font-medium">Data density:</span> Keeping
                    large operational tables readable without losing detail.
                  </li>
                  <li>
                    <span className="font-medium">Role-specific needs:</span>{" "}
                    Designing different experiences for admin and technician
                    users while keeping the system cohesive.
                  </li>
                  <li>
                    <span className="font-medium">Status consistency:</span>{" "}
                    Aligning terminology and visual states across modules.
                  </li>
                </ul>
              </div>
            </article>

            <article className="pt-[108px] pb-10 max-w-[1168px] flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Conclusion
              </h2>

              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.2px]">
                BaristaBuddy established a practical and scalable system for
                coffee machine service operations. By connecting assets,
                schedules, technicians, and inventory in one workflow, the
                platform improved execution speed, data quality, and daily
                decision-making for both operations leaders and field staff.
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
