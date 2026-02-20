import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

// OLD IMAGE IMPORTATION
import problemStatement from "@/public/images/case-study/easyspend/problem-statement.png";
import goal from "@/public/images/case-study/easyspend/goal.png";
import ut from "@/public/images/PNG/oppia/ut.png";
import ut2 from "@/public/images/PNG/oppia/ut2.png";
import banner from "@/public/images/case-study/easyspend/banner.png";

// NEW IMAGE IMPORTATION
import easySpendLoyaltyLoans from "@/public/images/case-study/easyspend/loyaltyLoans.png";
import easySpendBillPaymentBuyAirtime from "@/public/images/case-study/easyspend/billPayment/buyAirtime.png";
import easySpendBillPaymentCableSubscription from "@/public/images/case-study/easyspend/billPayment/cableSubscription.png";
import easySpendBillPaymentPayBills from "@/public/images/case-study/easyspend/billPayment/payBills.png";
import easySpendBillPaymentPayForData from "@/public/images/case-study/easyspend/billPayment/payForData.png";
import easySpendBillPaymentPayForElectricity from "@/public/images/case-study/easyspend/billPayment/payForElectricity.png";
import easySpendCryptoCreateNewWallet from "@/public/images/case-study/easyspend/crypto/createNewWallet.png";
import easySpendCryptoCryptoDashboard from "@/public/images/case-study/easyspend/crypto/cryptoDashboard.png";
import easySpendCryptoFundWallet from "@/public/images/case-study/easyspend/crypto/fundWallet.png";
import easySpendCryptoSwapToken from "@/public/images/case-study/easyspend/crypto/swapToken.png";
import easySpendCryptoWithdrawFromWallet from "@/public/images/case-study/easyspend/crypto/withdrawFromWallet.png";
import easySpendCryptoHeaderIcon from "@/public/images/case-study/easyspend/crypto/cryptoHeaderIcon.svg";
import easySpendFirstDesktopAddMoneyCrypto from "@/public/images/case-study/easyspend/first/desktopAddMoneyCrypto.png";
import easySpendFirstDesktopAddMoneyNgn from "@/public/images/case-study/easyspend/first/desktopAddMoneyNgn.png";
import easySpendFirstDesktopAddMoneyUsd from "@/public/images/case-study/easyspend/first/desktopAddMoneyUsd.png";
import easySpendFirstDesktopHome from "@/public/images/case-study/easyspend/first/desktopHome.png";
import easySpendFirstDesktopWithdrawMoneyNng from "@/public/images/case-study/easyspend/first/desktopWithdrawMoneyNng.png";
import easySpendFirstDesktopWithdrawMoneyUsd from "@/public/images/case-study/easyspend/first/desktopWithdrawMoneyUsd.png";
import easySpendVirtualCardCreateVirtualCard from "@/public/images/case-study/easyspend/virtualCard/createVirtualCard.png";
import easySpendVirtualCardFundVirtualCard from "@/public/images/case-study/easyspend/virtualCard/fundVirtualCard.png";
import easySpendVirtualCardSendMoney from "@/public/images/case-study/easyspend/virtualCard/sendMoney.png";
import easySpendVirtualCardVirtualCardDashboard from "@/public/images/case-study/easyspend/virtualCard/virtualCardDashboard.png";

import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";
import clsx from "clsx";

// METADATA
export const metadata = {
  title: "EasySpend",
  description:
    "EasySpend is a fintech platform for digital payments, bill payments, virtual cards, and crypto wallet management across mobile and web.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/easyspend",
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
        <section className="bg-[#F8EFFE] px-5 xl:px-0">
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
                EasySpend
              </h1>
              <p className="text-[24px] lg:text-[48px] font-medium leading-[120%] tracking-[-0.96px] lg:tracking-[-1.92px]">
                Designed a fintech platform to help users navigate digital
                payment services easily
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
                  EasySpend is a fintech platform that offers users simplified
                  financial management and digital payment services through a
                  mobile-first experience. Available on both the Google Play
                  Store and Apple App Store, EasySpend also provides limited web
                  access at easyspend.cc, ensuring accessibility across devices.
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
                  In Nigeria and across emerging markets, users often struggle
                  with fragmented financial tools each specializing in one
                  service such as bill payment, currency exchange, or
                  cryptocurrency conversion. This leads to:
                </p>
                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>Cumbersome app switching between different services.</li>
                  <li>High transaction fees for cross-border payments.</li>
                  <li>
                    Limited accessibility to USD-based virtual cards for global
                    online shopping
                  </li>
                </ul>
                <p className="mt-2 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  EasySpend aimed to solve these pain points by building an
                  integrated, trusted, and mobile-first platform that enables
                  users to manage their entire financial life from one place.
                </p>
              </article>

              <article className="max-w-[569px] mt-8 w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={problemStatement} alt="" />
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
                    Simplify digital transactions for everyday and international
                    needs.
                  </li>
                  <li>
                    Increase accessibility to USD virtual cards for global
                    payments.
                  </li>
                  <li>
                    Boost user confidence through robust security and responsive
                    support.
                  </li>
                  <li>
                    Enable crypto-to-fiat conversions in real-time for financial
                    flexibility.
                  </li>
                  <li>
                    Enhance retention and loyalty by reducing friction in daily
                    financial activities.
                  </li>
                </ul>
              </article>

              <article className="max-w-[569px] mt-8 w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={goal} alt="" />
              </article>
            </article>

            {/* RESEARCH AND ANALYSIS */}
            <article className="pt-8 pb-5 flex flex-col gap-5 lg:gap-8 lg:py-10">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Research & Analysis{" "}
                  <span className="hidden lg:inline">
                    (How we generated the product metrics)
                  </span>
                </h2>
                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px]">
                  The research phase included a mix of market analysis,
                  competitor reviews, and user interviews to identify key pain
                  points in the digital finance space.
                </p>
              </article>

              <article className="flex flex-col gap-5 lg:gap-4">
                <h5 className="text-[16px] lg:text-[24px] font-semibold lg:font-medium">
                  Key insights from research:
                </h5>
                <ul className="max-w-[789px] list-disc pl-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.20px] flex flex-col gap-4">
                  <li>
                    Users sought reliable virtual cards that work seamlessly for
                    global subscriptions like Netflix, Amazon, and Spotify.
                  </li>
                  <li>
                    A growing number of crypto users wanted instant conversion
                    tools that bypassed delays and volatile rates.
                  </li>
                  <li>
                    Existing fintech apps were too transactional, offering
                    payments but not management visibility (e.g., spend
                    summaries or card controls).
                  </li>
                  <li>
                    Security concerns remained high users valued biometric
                    authentication and instant notifications for peace of mind.
                  </li>
                </ul>
              </article>
            </article>

            {/* PRODUCT METRICS */}
            <article className="py-8 lg:py-10 grid gap-4 lg:gap-6 ">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Product Metrics
                </h2>

                <p className="text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  To measure platform success and user satisfaction, the
                  following key metrics were established:
                </p>

                <ul className="pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    <span className="font-medium">
                      Monthly Active Users (MAU) -
                    </span>{" "}
                    to assess engagement and adoption rates.
                  </li>
                  <li>
                    <span className="font-medium">
                      Transaction Volume Growth -
                    </span>{" "}
                    Month-over-month increase in total processed transactions.
                  </li>
                  <li>
                    <span className="font-medium">Active User Rate - </span>{" "}
                    Frequency of logins and app usage.
                  </li>
                  <li>
                    <span className="font-medium">Customer Retention -</span>{" "}
                    Percentage of users transacting repeatedly over 30-day
                    periods.
                  </li>
                  <li>
                    <span className="font-medium">Support Response Time -</span>{" "}
                    Average time taken to resolve user issues.
                  </li>
                </ul>
              </article>
            </article>

            {/* Design Process  */}
            <article className="py-8 lg:py-10 grid gap-4 lg:gap-6 ">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Design Process
                </h2>

                <ul className="max-w-[1128px] pl-6 list-disc list-outside space-y-6 text-[14px] lg:text-[20px] leading-[140%] lg:leading-normal lg:tracking-[-0.2px]">
                  <li>
                    <span className="font-medium">Discovery & Ideation:</span>{" "}
                    We mapped out primary user personas: tech-savvy millennials,
                    freelancers, crypto traders, and online shoppers defining
                    their daily finance needs.
                  </li>
                  <li>
                    <span className="font-medium">
                      Information Architecture:
                    </span>{" "}
                    I created a structured flow emphasizing clarity and quick
                    access to key features (fund transfers, cards, and crypto
                    conversion).
                  </li>
                  <li>
                    <span className="font-medium">
                      Wireframing & Prototyping:{" "}
                    </span>{" "}
                    I implemented a clean, modern interface emphasizing clarity,
                    accessibility, and intuitive navigation.
                  </li>
                  <li>
                    <span className="font-medium">UI Design: </span> The
                    interface incorporated a minimalist, fintech-inspired design
                    system, clean typography, high contrast, and intuitive
                    iconography.
                  </li>
                  <li>
                    <span className="font-medium">Security Integration: </span>{" "}
                    Biometric login, OTP verification, and real-time
                    notifications were visually and functionally integrated
                    without disrupting usability.
                  </li>
                  <li>
                    <span className="font-medium">Responsive Testing: </span> I
                    ensured consistent experiences across Android, iOS, and web
                    platforms.{" "}
                  </li>
                </ul>
              </article>
            </article>

            {/* DESIGN SOLUTION */}
            <article className="pt-8 pb-5 lg:py-10 flex flex-col gap-6 lg:gap-10">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Design Solution
                </h2>
              </article>

              <div className="w-full">
                {/* DESKTOP HOME */}
                <div
                  className={clsx(
                    "mt-8",
                    "max-w-[1175px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={easySpendFirstDesktopHome}
                    alt=""
                  />
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Home Page</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      I implemented the home page which consists of user wallet
                      balance in Naira, Dollars, Bitcoin. If the users are yet
                      to create a wallet in a particular currency, they will see
                      zero balance and click on the card to create a new
                      account.
                    </p>
                  </div>
                </div>

                {/* DESKTOP Add money (Naira Account) */}
                <div
                  className={clsx(
                    "mt-[200px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Add money (Naira Account)</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can add money to their naira account via transfer,
                      or card.
                    </p>
                  </div>
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={easySpendFirstDesktopAddMoneyNgn}
                    alt=""
                  />
                </div>

                {/* DESKTOP Add money (USD Account) */}
                <div
                  className={clsx(
                    "mt-[200px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={easySpendFirstDesktopAddMoneyUsd}
                    alt=""
                  />{" "}
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Add money (USD Account)</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can fund their USD wallet via crypto, bank transfer
                      oor naira account conversion.
                    </p>
                  </div>
                </div>

                {/* DESKTOP Add money (Crypto Wallet) */}
                <div
                  className={clsx(
                    "mt-[200px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Add money (Crypto Wallet)</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can fund their wallet account by converting USD to
                      crypto.
                    </p>
                  </div>
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={easySpendFirstDesktopAddMoneyCrypto}
                    alt=""
                  />
                </div>

                {/* DESKTOP Withdraw money (NGN Account) */}
                <div
                  className={clsx(
                    "mt-[200px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={easySpendFirstDesktopWithdrawMoneyNng}
                    alt=""
                  />
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">
                      Withdraw money (Naira Account)
                    </h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can perform inter bank transfer or intra bank
                      transfer and convert Naira to USD.
                    </p>
                  </div>
                </div>

                {/* DESKTOP Withdraw money (USD Account) */}
                <div
                  className={clsx(
                    "mt-[200px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">
                      Withdraw money (USD Account)
                    </h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can send money to their naira account and convert
                      USD to BTC.
                    </p>
                  </div>
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={easySpendFirstDesktopWithdrawMoneyUsd}
                    alt=""
                  />
                </div>

                {/* Crypto Dashboard and Features */}
                <div className="mt-[176px] relative">
                  <h2 className="text-[32px] text-[#2F3434] font-bold tracking-[-0.32px]">
                    Crypto Dashboard and Features
                  </h2>
                  <Image
                    className="absolute -bottom-0.5 left-0"
                    src={easySpendCryptoHeaderIcon}
                    alt=""
                  />
                </div>

                {/* Crypto Dashboard */}
                <div
                  className={clsx(
                    "mt-8",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[591px] w-full h-auto"
                    src={easySpendCryptoCryptoDashboard}
                    alt=""
                  />
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Crypto Dashboard</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      I implemented the crypto dashboard where users can see
                      their wallet balance, buy, send, swap and lock their
                      wallet. They can also see their wallet transactions.
                    </p>
                  </div>
                </div>

                {/* Fund wallet */}
                <div
                  className={clsx(
                    "mt-[124px]",
                    "max-w-[1188px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Fund wallet</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can fund BTC wallet through USD conversion.
                    </p>
                  </div>
                  <Image
                    className="max-w-[591px] w-full h-auto"
                    src={easySpendCryptoFundWallet}
                    alt=""
                  />
                </div>

                {/* Swap Tokens */}
                <div
                  className={clsx(
                    "mt-[124px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[591px] w-full h-auto"
                    src={easySpendCryptoSwapToken}
                    alt=""
                  />
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Swap Tokens</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can swap tokens, if they have more than one wallet
                      account, eg: swap USDT with BTC.
                    </p>
                  </div>
                </div>

                {/* Withdraw from wallet */}
                <div
                  className={clsx(
                    "mt-[124px]",
                    "max-w-[1188px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Withdraw from wallet</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can convert BTC or any of their token to USD.
                    </p>
                  </div>
                  <Image
                    className="max-w-[591px] w-full h-auto"
                    src={easySpendCryptoWithdrawFromWallet}
                    alt=""
                  />
                </div>

                {/* Create new wallet */}
                <div
                  className={clsx(
                    "mt-[124px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[591px] w-full h-auto"
                    src={easySpendCryptoCreateNewWallet}
                    alt=""
                  />
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Create new wallet</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      To create new wallet, I implemented a modal where users
                      can use their password to create wallet and they can
                      select the wallet options they want to create.
                    </p>
                  </div>
                </div>

                {/* USD Virtual Cards and Features */}
                <div className="mt-[176px] relative">
                  <h2 className="text-[32px] text-[#2F3434] font-bold tracking-[-0.32px]">
                    USD Virtual Cards and Features
                  </h2>
                  <Image
                    className="absolute -bottom-0.5 left-0"
                    src={easySpendCryptoHeaderIcon}
                    alt=""
                  />
                </div>

                {/* Virtual Card Dashboard */}
                <div
                  className={clsx(
                    "mt-[124px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Virtual Card Dashboard</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      On the virtual card page, users can see their available
                      balance, Add money, send money, convert money and see
                      their recent transactions.
                    </p>
                  </div>
                  <Image
                    className="max-w-[591px] w-full h-auto"
                    src={easySpendVirtualCardVirtualCardDashboard}
                    alt=""
                  />
                </div>

                {/* Fund virtual card */}
                <div
                  className={clsx(
                    "mt-[124px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[591px] w-full h-auto"
                    src={easySpendVirtualCardFundVirtualCard}
                    alt=""
                  />
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Fund virtual card</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can fund their USD virtual card via bank transfer,
                      crypto wallet and naira account.
                    </p>
                  </div>
                </div>

                {/* Create virtual card */}
                <div
                  className={clsx(
                    "mt-[124px]",
                    "max-w-[1188px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Create virtual card</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can choose to create either Visa or Mastercard
                      virtual card, they can also customize the card
                    </p>
                  </div>
                  <Image
                    className="max-w-[591px] w-full h-auto"
                    src={easySpendVirtualCardCreateVirtualCard}
                    alt=""
                  />
                </div>

                {/* Send money from virtual card */}
                <div
                  className={clsx(
                    "mt-[124px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[591px] w-full h-auto"
                    src={easySpendVirtualCardSendMoney}
                    alt=""
                  />
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">
                      Send money from virtual card
                    </h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can send money to their naira account and also send
                      money to their crypto wallet.
                    </p>
                  </div>
                </div>

                {/* Bill Payment */}
                <div className="mt-[176px] relative">
                  <h2 className="text-[32px] text-[#2F3434] font-bold tracking-[-0.32px]">
                    Bill Payment
                  </h2>
                  <Image
                    className="absolute -bottom-0.5 left-0"
                    src={easySpendCryptoHeaderIcon}
                    alt=""
                  />
                </div>

                <div
                  className={clsx(
                    "mt-[32px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Pay Bills</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can pay for Airtime, cable TV, Electricity, Data,
                      Gift cards and also see their recent bill transactions.
                    </p>
                  </div>
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={easySpendBillPaymentPayBills}
                    alt=""
                  />
                </div>

                {/* Buy Airtime */}
                <div
                  className={clsx(
                    "mt-[200px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={easySpendBillPaymentBuyAirtime}
                    alt=""
                  />{" "}
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Buy Airtime</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can send money to their naira account and also send
                      money to their crypto wallet.
                    </p>
                  </div>
                </div>

                {/* Pay for Electricity */}
                <div
                  className={clsx(
                    "mt-[200px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">Pay for Electricity</h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can pay for Airtime, cable TV, Electricity, Data,
                      Gift cards and also see their recent bill transactions.
                    </p>
                  </div>
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={easySpendBillPaymentPayForElectricity}
                    alt=""
                  />
                </div>

                {/* Pay for Cable Subscription */}
                <div
                  className={clsx(
                    "mt-[200px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={easySpendBillPaymentCableSubscription}
                    alt=""
                  />
                  <div className="max-w-[361px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">
                      Pay for Cable Subscription
                    </h6>
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can send money to their naira account and also send
                      money to their crypto wallet.
                    </p>
                  </div>
                </div>

                {/* Pay for Data (International & Local) */}
                <div
                  className={clsx(
                    "mt-[200px]",
                    "max-w-[1200px]",
                    "flex gap-6 items-center justify-between",
                  )}
                >
                  <div className="max-w-[450px] text-[24px] text-[#262C2C]">
                    <h6 className="font-semibold">
                      Pay for Data (International & Local)
                    </h6>
                    <p className="max-w-[361px] mt-4 leading-[140%] tracking-[-0.24px]">
                      Users can pay for Airtime, cable TV, Electricity, Data,
                      Gift cards and also see their recent bill transactions.
                    </p>
                  </div>
                  <Image
                    className="max-w-[594px] w-full h-auto"
                    src={easySpendBillPaymentPayForData}
                    alt=""
                  />
                </div>

                {/* Loyalty Loans (Mobile) */}
                <div className="mt-[176px] relative">
                  <h2 className="text-[32px] text-[#2F3434] font-bold tracking-[-0.32px]">
                    Loyalty Loans (Mobile)
                  </h2>
                  <Image
                    className="absolute -bottom-0.5 left-0"
                    src={easySpendCryptoHeaderIcon}
                    alt=""
                  />
                </div>

                <div
                  className={clsx(
                    "mt-[32px]",
                    "max-w-[1200px]",
                    "flex gap-6 justify-between",
                  )}
                >
                  <div className="max-w-[712px] text-[24px] text-[#262C2C]">
                    <p className="mt-4 leading-[140%] tracking-[-0.24px]">
                      We prioritized implementing the loyalty loan feature for
                      the mobile app because it is one of the major selling
                      proposition for the platform and we want users to get use
                      to it. The loyalty loan is like a bonus so it is non
                      repayable.
                    </p>
                  </div>
                  <Image
                    className="max-w-[203px] w-full h-auto"
                    src={easySpendLoyaltyLoans}
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
                  Testing was conducted with 3 participants representing
                  Easyspend’s key audience segments.
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
                    92% of participants found the app intuitive and visually
                    clear
                  </li>

                  <li>
                    Users appreciated instant notifications after every
                    transaction
                  </li>
                  <li>
                    The virtual card set up process was highlighted as “Simple
                    and Fast”
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
                Post launch data indicated strong adoption and user satisfaction
              </p>
              <div className="text-[14px] lg:text-[20px] leading-[140%] tracking-[-0.14px] lg:tracking-[0.20px]">
                <ul className="list-disc ml-6 space-y-6">
                  <li>
                    <span className="font-bold">+60%</span> increase in active
                    users within the first three months.
                  </li>

                  <li>
                    <span className="font-bold">High retention rate</span>
                    with many users performing recurring payment weekly.
                  </li>
                  <li>
                    <span className="font-bold">Virtual card usage</span>{" "}
                    surpassed expectations used by 65% of users for
                    international subscription.
                  </li>
                  <li>
                    <span className="font-bold">
                      Customer satisfaction score rated 4.5
                    </span>
                    across app stores.
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
                    <span className="font-medium">Regulatory compliance:</span>{" "}
                    Maintaining adherence to CBN and international KYC/AML
                    standards while ensuring seamless UX.
                  </li>

                  <li>
                    <span className="font-medium">Current Volatility:</span>{" "}
                    Designing real-time conversion features that adapt to
                    fluctuating exchange rates.
                  </li>
                  <li>
                    <span className="font-medium">
                      Cross-platform consistency:
                    </span>{" "}
                    Synchronizing features between mobile apps and the web
                    dashboard.
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
                EasySpend reimagined how users interact with their money
                combining payments, crypto, and card management into one
                intuitive ecosystem. By prioritizing security, simplicity, and
                speed, the platform not only filled critical gaps in the fintech
                space but also earned user trust and loyalty.
                <br />
                EasySpend stands as a leading example of fintech innovation,
                empowering users to spend, convert, and control their finances
                anytime, anywhere with confidence.
              </div>
            </article>
          </Container>
        </section>

        {/* NEXT PROJECT */}
        <SubFooter first={"BuildCo"} link={"/case-study/buildco"} />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
