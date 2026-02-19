import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

// OLD IMAGE IMPORTATION
import oppia4 from "@/public/images/PNG/oppia/oppia4.png";
import ut from "@/public/images/PNG/oppia/ut.png";
import ut2 from "@/public/images/PNG/oppia/ut2.png";

// NEW IMAGE IMPORTATION
import banner from "@/public/images/case-study/buildco/banner.png";
import desktopHome from "@/public/images/case-study/buildco/desktop/homepage.png";
import desktopCart from "@/public/images/case-study/buildco/desktop/cart-and-checkout.png";
import desktopProduct from "@/public/images/case-study/buildco/desktop/product.png";
import desktopShop from "@/public/images/case-study/buildco/desktop/shop.png";
import desktopWebsite from "@/public/images/case-study/buildco/desktop/website.svg";
import desktopWishlistAndOrderHistory from "@/public/images/case-study/buildco/desktop/wishlist-and-order-history.png";
import mobileHome from "@/public/images/case-study/buildco/mobile/home.png";
import mobileCart from "@/public/images/case-study/buildco/mobile/cart-and-checkout.png";
import mobileProduct from "@/public/images/case-study/buildco/mobile/product.png";
import mobileShop from "@/public/images/case-study/buildco/mobile/shop.png";
import mobileMobileApp from "@/public/images/case-study/buildco/mobile/mobile-app.svg";
import mobileConfirmation from "@/public/images/case-study/buildco/mobile/confirmation.png";
import siteManagingCreditHistory from "@/public/images/case-study/buildco/site-managing/credit-history.png";
import siteManagingDashboard from "@/public/images/case-study/buildco/site-managing/dashboard.png";
import siteManagingLanding from "@/public/images/case-study/buildco/site-managing/landing.png";
import siteManagingOrders from "@/public/images/case-study/buildco/site-managing/orders.png";
import siteManagingProduct from "@/public/images/case-study/buildco/site-managing/product.png";
import siteManagingProfileManagement from "@/public/images/case-study/buildco/site-managing/profile-management.png";
import siteManagingReport from "@/public/images/case-study/buildco/site-managing/report.png";
import siteManagingServices from "@/public/images/case-study/buildco/site-managing/services.png";
import siteManagingSiteManagement from "@/public/images/case-study/buildco/site-managing/site-management.png";
import siteManagingIcon from "@/public/images/case-study/buildco/site-managing/site-manager.svg";
import siteWorkerCreditHistory from "@/public/images/case-study/buildco/site-worker/credit-history.png";
import siteWorkerDashboard from "@/public/images/case-study/buildco/site-worker/dashboard.png";
import siteWorkerProduct from "@/public/images/case-study/buildco/site-worker/product.png";
import siteWorkerServices from "@/public/images/case-study/buildco/site-worker/services.png";
import siteWorkerIcon from "@/public/images/case-study/buildco/site-worker/site-worker.svg";

import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";
import clsx from "clsx";

// METADATA
export const metadata = {
  title: "BuildCO",
  description:
    "BuildCO is an e-commerce platform for furniture, home fittings, power tools, machinery rental, and artisan hire, including a B2B direct-ordering system with credit and site management workflows.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/buildco",
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
        <section className="bg-[#EFFEF3] px-5 xl:px-0">
          <Container>
            <article className="pt-10 flex justify-center items-end gap-4 lg:gap-8">
              <Image
                className="max-w-[538px] w-full h-auto"
                src={banner}
                alt=""
              />
            </article>
          </Container>
        </section>

        <section className="px-5 xl:px-0 border-b border-[#EFFEF3]">
          <Container>
            <div className="flex flex-col gap-4 lg:gap-6 my-6 lg:my-10">
              <h1 className="text-[#0C0D0D] font-cooper lg:text-[24px] tracking-[-0.64px] lg:tracking-[-0.96px]">
                BuildCO
              </h1>
              <p className="text-[24px] lg:text-[48px] font-medium leading-[120%] tracking-[-0.96px] lg:tracking-[-1.92px]">
                Designed an e-commerce platform specializing in sales of
                furniture, home fittings, power tools, machine equipment rental
                and artisan hire.
              </p>
            </div>
          </Container>
        </section>

        {/* PROJECT OVERVIEW */}
        <section className="px-5 xl:px-0 border-b border-[#EFFEF3]">
          <Container>
            <section className="py-8 lg:py-10 flex flex-col gap-4 lg:gap-10">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Project overview
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  BUILDCO is a comprehensive e-commerce platform available on
                  both web and mobile that enables customers to purchase
                  furniture, home fittings, power tools, rent machinery, and
                  hire artisans. To stand out out amidst its competitors, the
                  company decided to include BUILDCO Bonus which allows users to
                  earn 5% of their purchase. Beyond its consumer-facing
                  marketplace, It also includes a Direct Ordering B2B platform
                  designed to support partner companies with rolling credit
                  facilities and site-based management systems.
                </p>
              </article>
            </section>
          </Container>
        </section>

        <section className="px-5 xl:px-0">
          <Container>
            {/* PROBLEM STATEMENT */}
            <article className="py-8 lg:py-10 grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-6 ">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Problem Statement
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  Before BUILDCO, most customers faced challenges purchasing or
                  renting building-related tools and equipment from a single,
                  reliable source. The available online platforms often lacked:
                </p>
                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>A smooth customization and checkout experience</li>
                  <li>Seamless product filtering and sorting capabilities</li>
                  <li>A way to hire artisans alongside equipment purchase</li>
                  <li>
                    Support for corporate bulk orders and credit-based
                    purchasing
                  </li>
                </ul>
                <p className="mt-2 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  Businesses also struggled with tracking multiple project
                  sites, managing users, and approving orders efficiently.
                  BUILDCO set out to solve this by creating a dual-purpose
                  system an intuitive retail marketplace and a powerful B2B
                  ordering solution.
                </p>
              </article>

              <article className="max-w-[569px] mt-8 w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={oppia4} alt="" />
              </article>
            </article>

            {/* Goal */}
            <article className="py-8 lg:py-10 grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-6 ">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Goal
                </h2>

                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    Deliver a seamless shopping experience across devices.
                  </li>
                  <li>
                    Enable custom product configurations for furniture and
                    fittings.
                  </li>
                  <li>
                    Integrate a direct ordering system for B2B clients with
                    role-based access.
                  </li>
                  <li>
                    Improve conversion rates through better navigation, sorting,
                    and checkout.
                  </li>
                  <li>
                    Boost user retention through newsletters, saved items, and
                    personalized recommendations.
                  </li>
                </ul>
              </article>

              <article className="max-w-[569px] mt-8 w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={oppia4} alt="" />
              </article>
            </article>

            {/* PRODUCT METRICS */}
            <article className="py-8 lg:py-10 grid gap-4 lg:gap-6 ">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Product Metrics
                </h2>

                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  To measure success, during the user testing, we tracked:
                </p>

                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    <span className="font-medium">
                      Customer Retention Rate:
                    </span>{" "}
                    To gauge long-term engagement.
                  </li>
                  <li>
                    <span className="font-medium">Customer Abandon Rate:</span>{" "}
                    To monitor friction points in checkout.
                  </li>
                  <li>
                    <span className="font-medium">Conversion Rate:</span>{" "}
                    Percentage of users completing purchases.
                  </li>
                  <li>
                    <span className="font-medium">
                      B2B Partner Adoption Rate:
                    </span>{" "}
                    For the direct ordering system.
                  </li>
                </ul>
              </article>
            </article>

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
              </article>

              {/* RAA 2.2 */}
              <article className="grid gap-5 lg:grid-cols-[52%_48%] lg:gap-10">
                {/* RAA 2.2.1 - Interview Questions */}
                <article className="flex flex-col gap-5 lg:gap-4">
                  {/* HEADING */}
                  <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                    I conducted:
                  </h5>
                  {/* LISTING */}
                  <ul className="list-disc pl-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px] flex flex-col gap-4">
                    <li>
                      Competitor Analysis on major e-commerce and tool-rental
                      platforms.
                    </li>
                    <li>
                      User Interviews with individual customers, contractors,
                      and procurement officers to understand their pain points.
                    </li>
                    <li>
                      Task Flow Observations of how users browse, customize, and
                      check out products.
                    </li>
                    <li>
                      Feedback Sessions with company admins to shape the B2B
                      approval workflow.
                    </li>
                  </ul>
                </article>

                {/* RAA 2.2.2 - Key Findings  */}
                <article className="flex flex-col gap-5 lg:gap-4">
                  {/* HEADING */}
                  <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                    Key Findings
                  </h5>
                  {/* LISTING */}
                  <ul className="list-disc pl-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px] flex flex-col gap-4">
                    <li>
                      Users valued quick access to categories and clear product
                      specs.
                    </li>
                    <li>
                      B2B clients required multi-site management and
                      credit-based approvals.
                    </li>
                    <li>
                      Both groups desired simplified order tracking and clear
                      analytics on past orders.
                    </li>
                  </ul>
                </article>
              </article>
            </article>

            {/* PRODUCT METRICS */}
            <article className="py-8 lg:py-10 grid gap-4 lg:gap-6 ">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  My Process
                </h2>

                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  I followed a user-centered and iterative approach, integrating
                  research findings into the workflow:
                </p>

                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    <span className="font-medium">
                      Information Architecture:
                    </span>{" "}
                    Structured the platform around key user needs: shopping,
                    renting, hiring, and managing.
                  </li>
                  <li>
                    <span className="font-medium">
                      Wireframing & Prototyping:
                    </span>{" "}
                    Created low-fidelity wireframes to visualize the product
                    flows, followed by high-fidelity mockups.
                  </li>
                  <li>
                    <span className="font-medium">Design:</span> Implemented a
                    clean, modern interface emphasizing clarity, accessibility,
                    and intuitive navigation.
                  </li>
                  <li>
                    <span className="font-medium">Design System Creation:</span>{" "}
                    Built reusable components for consistency across web and
                    mobile.
                  </li>
                  <li>
                    <span className="font-medium">Responsive Design:</span>{" "}
                    Ensured fluid usability across devices.
                  </li>
                </ul>
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
                <p className="max-w-[807px] text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px]">
                  For the design solution, I designed the website, mobile app
                  and the direct ordering platform:
                </p>
              </article>

              <div className="w-full">
                {/* DESKTOP HEADER */}
                <div className="relative">
                  <h2 className="text-[32px] text-[#2F3434] font-bold tracking-[-0.32px]">
                    Website
                  </h2>
                  <Image
                    className="absolute -bottom-0.5 left-0"
                    src={desktopWebsite}
                    alt=""
                  />
                </div>

                {/* DESKTOP HOME */}
                <div
                  className={clsx(
                    "mt-8",
                    "max-w-[1175px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[704px] w-full h-auto"
                    src={desktopHome}
                    alt=""
                  />
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Home Page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      I implemented the{" "}
                      <span className="font-medium">
                        product carousels, category highlights, and newsletter
                        CTA.
                      </span>
                    </p>
                  </div>
                </div>

                {/* DESKTOP Shop Page */}
                <div
                  className={clsx(
                    "mt-[200px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Shop Page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      I implemented the grid layout with filters, sorting, and
                      discounts.
                    </p>
                  </div>
                  <Image
                    className="max-w-[704px] w-full h-auto"
                    src={desktopShop}
                    alt=""
                  />
                </div>

                {/* DESKTOP Product Page */}
                <div
                  className={clsx(
                    "mt-[200px]",
                    "max-w-[1219px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[704px] w-full h-auto"
                    src={desktopProduct}
                    alt=""
                  />{" "}
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Product Page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      I included detailed specifications, customization options,
                      reviews, and related products.
                    </p>
                  </div>
                </div>

                {/* DESKTOP Cart and Checkout */}
                <div
                  className={clsx(
                    "mt-[200px]",
                    "max-w-[1219px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[393px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Cart and Checkout</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      I streamlined the flow with coupon support and delivery
                      inputs and also created a different checkout process for
                      existing and new customers.
                    </p>
                  </div>
                  <Image
                    className="max-w-[704px] w-full h-auto"
                    src={desktopCart}
                    alt=""
                  />
                </div>

                {/* DESKTOP Wishlist & Order History */}
                <div
                  className={clsx(
                    "mt-[200px]",
                    "max-w-[1219px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[704px] w-full h-auto"
                    src={desktopWishlistAndOrderHistory}
                    alt=""
                  />
                  <div className="max-w-[356px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Wishlist & Order History</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      I implemented the Wishlist and Order history based on
                      personalization and transparency for users.
                    </p>
                  </div>
                </div>

                {/* MOBILE HEADER */}
                <div className="mt-[176px] relative">
                  <h2 className="text-[32px] text-[#2F3434] font-bold tracking-[-0.32px]">
                    Mobile App
                  </h2>
                  <Image
                    className="absolute -bottom-0.5 left-0"
                    src={mobileMobileApp}
                    alt=""
                  />
                </div>

                {/* MOBILE HOME */}
                <div
                  className={clsx(
                    "mt-8",
                    "max-w-[1221px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[357px] w-full h-auto"
                    src={mobileHome}
                    alt=""
                  />
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Home Page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      I implemented the{" "}
                      <span className="font-medium">
                        product carousels, category highlights, and newsletter
                        CTA.
                      </span>
                    </p>
                  </div>
                </div>

                {/* MOBILE Shop Page */}
                <div
                  className={clsx(
                    "mt-[124px]",
                    "max-w-[1188px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Shop Page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      I implemented the grid layout with filters, sorting, and
                      discounts.
                    </p>
                  </div>
                  <Image
                    className="max-w-[367px] w-full h-auto"
                    src={mobileShop}
                    alt=""
                  />
                </div>

                {/* MOBILE Product Page */}
                <div
                  className={clsx(
                    "mt-[124px]",
                    "max-w-[1210px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[351px] w-full h-auto"
                    src={mobileProduct}
                    alt=""
                  />
                  <div className="max-w-[371px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Product Page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      I included detailed specifications, customization options,
                      reviews, and related products.
                    </p>
                  </div>
                </div>

                {/* MOBILE Cart and Checkout */}
                <div
                  className={clsx(
                    "mt-[124px]",
                    "max-w-[1188px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Cart and Checkout</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      I streamlined the flow with coupon support and delivery
                      inputs and also created a different checkout process for
                      existing and new customers.
                    </p>
                  </div>
                  <Image
                    className="max-w-[357px] w-full h-auto"
                    src={mobileCart}
                    alt=""
                  />
                </div>

                {/* MOBILE Confirmation page */}
                <div
                  className={clsx(
                    "mt-[124px]",
                    "max-w-[1221px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[357px] w-full h-auto"
                    src={mobileConfirmation}
                    alt=""
                  />
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Confirmation page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      This page is the order confirmation page where users get
                      to see the status of their order and how much bonus they
                      earned.
                    </p>
                  </div>
                </div>

                {/* Direct Ordering platform (Site manager view) */}
                <div className="mt-[176px] relative">
                  <h2 className="text-[32px] text-[#2F3434] font-bold tracking-[-0.32px]">
                    Direct Ordering platform (Site manager view)
                  </h2>
                  <Image
                    className="absolute -bottom-0.5 left-0"
                    src={siteManagingIcon}
                    alt=""
                  />
                </div>

                {/* (Site manager view Landing Pagee */}
                <div
                  className={clsx(
                    "mt-8",
                    "max-w-[1205px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[588px] w-full h-auto"
                    src={siteManagingLanding}
                    alt=""
                  />
                  <div className="max-w-[464px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Landing Page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      I designed a landing page where site managers can order
                      for products and hire artisans directly from the platform
                    </p>
                  </div>
                </div>

                {/* (Site manager view Dashboard */}
                <div
                  className={clsx(
                    "mt-[180px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[393px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Dashboard</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      The dashboard is designed for site managers to manage
                      their ordering performance, they get to see their credit
                      history, credit usage and recently delivered orders.
                    </p>
                  </div>
                  <Image
                    className="max-w-[593px] w-full h-auto"
                    src={siteManagingDashboard}
                    alt=""
                  />
                </div>

                {/* (Site manager view Site management page */}
                <div
                  className={clsx(
                    "mt-[180px]",
                    "max-w-[1205px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[597px] w-full h-auto"
                    src={siteManagingSiteManagement}
                    alt=""
                  />
                  <div className="max-w-[356px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Site management page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      The site management page is the page where managers can
                      see their site overview, project timeline and manage
                      orders on site
                    </p>
                  </div>
                </div>

                {/* (Site manager view Product Page */}
                <div
                  className={clsx(
                    "mt-[180px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[393px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Product Page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      The product page consist of different category of power
                      tools.
                    </p>
                  </div>
                  <Image
                    className="max-w-[585px] w-full h-auto"
                    src={siteManagingProduct}
                    alt=""
                  />
                </div>

                {/* (Site manager view Services page */}
                <div
                  className={clsx(
                    "mt-[180px]",
                    "max-w-[1205px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={siteManagingServices}
                    alt=""
                  />
                  <div className="max-w-[353px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Services page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      The service page consist of all types of installation
                      services where site managers can see artisans and machine
                      equipment for rental.
                    </p>
                  </div>
                </div>

                {/* (Site manager view Profile management */}
                <div
                  className={clsx(
                    "mt-[180px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[393px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Profile management</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      The profile page contains all the site workers
                      information. Site managers can also add new workers on
                      this page.
                    </p>
                  </div>
                  <Image
                    className="max-w-[597px] w-full h-auto"
                    src={siteManagingProfileManagement}
                    alt=""
                  />
                </div>

                {/* (Site manager view Orders */}
                <div
                  className={clsx(
                    "mt-[180px]",
                    "max-w-[1216px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={siteManagingOrders}
                    alt=""
                  />
                  <div className="max-w-[353px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Orders</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      The order page contains the history of orders for each
                      site.
                    </p>
                  </div>
                </div>

                {/* (Site manager view Credit History */}
                <div
                  className={clsx(
                    "mt-[180px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[393px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Credit History</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      This page contains the history of credit allocated to all
                      sites. The site manager can also generate invoice, filter
                      the credit history by months or status.
                    </p>
                  </div>
                  <Image
                    className="max-w-[597px] w-full h-auto"
                    src={siteManagingCreditHistory}
                    alt=""
                  />
                </div>

                {/* (Site manager view Reporte */}
                <div
                  className={clsx(
                    "mt-[180px]",
                    "max-w-[1205px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={siteManagingReport}
                    alt=""
                  />
                  <div className="max-w-[353px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Report</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      The site report page contains the general overview, credit
                      history, and top sites of the month.
                    </p>
                  </div>
                </div>

                {/* Direct Ordering platform (Site worker view) */}
                <div className="mt-[176px] relative">
                  <h2 className="text-[32px] text-[#2F3434] font-bold tracking-[-0.32px]">
                    Direct Ordering platform (Site worker view)
                  </h2>
                  <Image
                    className="absolute -bottom-0.5 left-0"
                    src={siteWorkerIcon}
                    alt=""
                  />
                </div>

                <p
                  className={clsx(
                    "max-w-[1158px] mt-8",
                    "text-[#0C0D0D] text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.2px]",
                  )}
                >
                  For the site worker view, I designed it in tablet form because
                  they will be using the tablet on site to purchase products
                  directly from the platform.
                </p>

                {/* (Site worker view Dashboard */}
                <div
                  className={clsx(
                    "mt-[52px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[303px] w-full h-auto"
                    src={siteWorkerDashboard}
                    alt=""
                  />
                  <div className="max-w-[393px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Dashboard</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      For the site workers, the dashboard consists of their site
                      details, Recently delivered orders, promotional banner and
                      top sites of the month.
                    </p>
                  </div>
                </div>

                {/* (Site worker view Product page */}
                <div
                  className={clsx(
                    "mt-[180px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[393px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Product page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      The site workers can also purchase products from the site
                      directly.
                    </p>
                  </div>
                  <Image
                    className="max-w-[339px] w-full h-auto"
                    src={siteWorkerProduct}
                    alt=""
                  />
                </div>

                {/* (Site worker view Credit History */}
                <div
                  className={clsx(
                    "mt-[180px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[331px] w-full h-auto"
                    src={siteWorkerCreditHistory}
                    alt=""
                  />
                  <div className="max-w-[464px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Credit History</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      On this page, the site workers can see credit allocated,
                      credit used and available balance for their site. They can
                      also request more credit while the site manager approves
                      it.
                    </p>
                  </div>
                </div>

                {/* (Site worker view Services page */}
                <div
                  className={clsx(
                    "mt-[180px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[393px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Services page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      On this page, site workers can directly hire artisans to
                      help them work on their site. They can also rent equipment
                      they need on the site.
                    </p>
                  </div>
                  <Image
                    className="max-w-[339px] w-full h-auto"
                    src={siteWorkerServices}
                    alt=""
                  />
                </div>

                {/* END */}
              </div>
            </article>

            {/* --- */}

            {/* USER TESTING */}
            <article className="pt-8 pb-5 lg:pt-10 lg:pb-0">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  User Testing
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px]">
                  Testing was conducted with: The marketing manager of Jumia,
                  SEO specialist, 5 artisans and B2B partners.
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

            {/* Testing Goals */}
            <article className="max-w-[1077px] pt-10 pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[32px] font-semibold">
                Testing Goals
              </h2>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>Navigation ease</li>

                  <li>Checkout and payment experience</li>
                  <li>Credit approval flow for company admins</li>
                  <li>Product customization and sorting filters</li>
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
                    Users preferred persistent carts and auto-saved preferences.
                  </li>

                  <li>
                    B2B admins requested visual summaries of credit usage.
                  </li>
                  <li>
                    Minor confusion existed around switching between sites and
                    users, which was later clarified with guided tooltips and
                    dashboard segmentation.
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
                After iterative refinement:
              </p>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>
                    <span className="font-bold">30%</span> improvement in
                    checkout completion rate post-redesign.
                  </li>

                  <li>
                    <span className="font-bold">Increased user retention</span>{" "}
                    through the Wishlist and Order History features.
                  </li>
                  <li>
                    <span className="font-bold">Positive feedback</span> from
                    corporate partners for the intuitive credit limit and
                    approval system.
                  </li>
                  <li>
                    <span className="font-bold">Higher engagement rates</span>{" "}
                    with email templates, leading to a 45% newsletter
                    subscription rate.
                  </li>
                </ul>
              </div>
            </article>

            {/* Challenges Faced */}
            <article className="pt-[108px] pb-0 flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Challenges Faced
              </h2>

              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>
                    <span className="font-medium">
                      Balancing B2C and B2B workflows:
                    </span>{" "}
                    Integrating both on one platform required a careful UX
                    balance.
                  </li>

                  <li>
                    <span className="font-medium">
                      Complexity in site-based order approval:{" "}
                    </span>{" "}
                    Designing flexible yet secure approval hierarchies was
                    intricate.
                  </li>
                  <li>
                    <span className="font-medium">
                      Ensuring consistency across devices:
                    </span>{" "}
                    The mobile-first design had to retain all the B2B
                    functionalities without overwhelming the user.
                  </li>
                </ul>
              </div>
            </article>

            {/* Conclusion */}
            <article className="pt-[108px] pb-10 max-w-[1168px] flex flex-col gap-4 lg:gap-6">
              <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                Conclusion
              </h2>

              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.2px]">
                BUILDCO successfully redefined how customers and businesses
                engage with construction-related commerce. Through a blend of
                thoughtful UX design, intuitive navigation, and advanced B2B
                tools, the platform established itself as a one-stop hub for
                both individuals and organizations seeking efficiency, control,
                and reliability in purchasing or renting equipment and services.
              </div>
            </article>
          </Container>
        </section>

        {/* NEXT PROJECT */}
        <SubFooter first={"Easyspend"} link={"/case-study/easyspend"} />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
