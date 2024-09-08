import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";

// IMAGE IMPORTATION
import header from "@/public/images/PNG/peerless/header.png";
import goal from "@/public/images/PNG/peerless/goal.png";
import form1 from "@/public/images/PNG/peerless/dash1.png";
import form2 from "@/public/images/PNG/peerless/dash2.png";
import form3 from "@/public/images/PNG/peerless/dash3.png";
import form4 from "@/public/images/PNG/peerless/dash4.png";
import form5 from "@/public/images/PNG/peerless/dash5.png";
import form6 from "@/public/images/PNG/peerless/dash6.png";
import form7 from "@/public/images/PNG/peerless/dash7.png";
import testing from "@/public/images/PNG/peerless/testing.png";
import prototype from "@/public/images/PNG/peerless/peerless.gif";

// METADATA
export const metadata = {
  title: "Peerless",
  description:
    "Designed a digital banking platform to serve customer base of 20,000 with the capability to handle 7 million transactions per day",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/peerless",
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
                Peerless
              </h1>
              <p className="text-[24px] lg:text-[48px] font-medium leading-[120%] tracking-[-0.96px] lg:tracking-[-1.92px]">
                Designed a digital banking platform to serve customer base of
                20,000 with the capability to handle 7 million transactions per
                day
              </p>
            </div>
          </Container>
        </section>

        {/* REST OF THE BODY */}
        <section className="px-5 xl:px-0">
          <Container>
            {/* Project overview */}
            <section className="pt-0 pb-6 lg:py-[38px] flex flex-col gap-4 lg:gap-10">
              <article className="max-w-[375px] lg:max-w-none flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Project overview
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  The Peerless digital banking platform is designed to serve a
                  customer base of 20,000 with the capability to handle
                  approximately 7 million transactions per day. The goal was to
                  create a seamless, user-friendly experience that empowers
                  users to manage their finances efficiently and securely.
                </p>
              </article>
            </section>

            {/* PROBLEM STATEMENT AND GOAL */}
            <article className="pt-4 pb-6 lg:pt-0 lg:pb-8 grid lg:grid-cols-[1fr_auto] items-center gap-10 lg:gap-6 ">
              <article className="flex flex-col gap-8 lg:gap-10">
                {/* PROBLEM STATEMENT */}
                <article className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                    Problem Statement
                  </h2>
                  <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                    The primary challenge was to design a scalable, intuitive
                    banking platform that could handle a high volume of
                    transactions while providing a seamless user experience. The
                    platform needed to address issues related to complex
                    navigation, security concerns, and user engagement.
                  </p>
                </article>

                {/* GOAL */}
                <article className="flex flex-col gap-4 lg:gap-6">
                  <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                    Goal
                  </h2>
                  <ul className="text-[14px] lg:text-[18px] leading-[140%] flex flex-col gap-4 lg:gap-4 list-decimal pl-4 lg:pl-6">
                    <li className="max-w-[1018px]">
                      Simplify complex banking processes.
                    </li>
                    <li>Enhance transaction security.</li>
                    <li className="max-w-[875px]">
                      Ensure a seamless user experience for a diverse customer
                      base.
                    </li>
                  </ul>
                </article>
              </article>

              {/* IMAGE */}
              <article className="max-w-[569px] w-full h-auto shrink-0 flex-0 rounded-[4px] overflow-hidden">
                <Image src={goal} alt="" placeholder="blur" />
              </article>
            </article>

            <section className="pt-4 pb-8 lg:pt-8 lg:pb-[65px] flex flex-col gap-4 lg:gap-10">
              <article className="flex flex-col gap-4 lg:gap-6">
                <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                  Research Methodology and Findings
                </h2>
                <p className="text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal lg:tracking-[-0.18px]">
                  The first thing I did was to analyze existing digital banking
                  platforms to identify strengths, weaknesses, and opportunities
                  for innovation because according to Jakob’s law, users prefer
                  it when a site works in the same way as all the other sites
                  they already know. I also conducted in-depth interviews with a
                  diverse group of users to understand their banking habits,
                  challenges, and expectations.
                </p>
              </article>
            </section>

            <section className="pt-8 pb-10 lg:py-10 flex flex-col gap-4 lg:gap-8">
              <article className="flex flex-col gap-5 lg:gap-[60px]">
                {/* HEADER */}
                <div>
                  <h2 className="cod-gray-800 text-[24px] lg:text-[40px] font-semibold">
                    Design Solutions
                  </h2>
                  <p className="mt-4 lg:mt-6 text-[14px] lg:text-[18px] text-[#0C0D0D] tracking-[-0.14px] lg:tracking-[-0.18px]">
                    Before I jumped into the design solution, it was important
                    to define what success mean to the users and the business.
                  </p>
                </div>

                {/*  */}
                <div className="w-full flex flex-col gap-[52px] lg:gap-[105px]">
                  <div className="w-full flex gap-6 lg:gap-16">
                    <div className="max-w-[536px] w-full h-auto">
                      <Image src={form1} alt="" />
                    </div>
                    <div className="pt-[6px] lg:pt-16 max-w-[538px] w-full">
                      <h6 className="text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px] text-[#434747] font-semibold">
                        Dashboard
                      </h6>
                      <p className="mt-2 lg:mt-6 text-[12px] lg:text-[18px] leading-[140%] text-[#0C0D0D]">
                        As a Bank Officer, you need to log in to land on the
                        dashboard page. It is a home page in the online banking
                        system. It shows the accounts that have been verified,
                        pending loans, Total Deposits, Total Withdrawals. On the
                        left, you can find the following Navigation: Dashboard,
                        Account, Transactions, and loans.
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex gap-6 lg:gap-16">
                    <div className="max-w-[536px] w-full h-auto">
                      <Image src={form2} alt="" />
                    </div>
                    <div className="pt-[6px] lg:pt-16 max-w-[538px] w-full">
                      <h6 className="text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px] text-[#434747] font-semibold">
                        Account
                      </h6>
                      <p className="mt-2 lg:mt-6 text-[12px] lg:text-[18px] leading-[140%] text-[#0C0D0D]">
                        Thanks to the Account feature, you can keep bank
                        customers’ accounts on track. Not only does it help you
                        monitor and analyze how customers use their accounts,
                        You can create new accounts and also forecast and track
                        key account metrics. This allows you to keep current
                        clients satisfied and deliver exceptional banking
                        services on a daily basis. The 3 dots take you to see
                        each customer’s full details.
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex gap-6 lg:gap-16">
                    <div className="max-w-[536px] w-full h-auto">
                      <Image src={form3} alt="" />
                    </div>
                    <div className="pt-[6px] lg:pt-16 max-w-[538px] w-full">
                      <h6 className="text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px] text-[#434747] font-semibold">
                        Transactions
                      </h6>
                      <p className="mt-2 lg:mt-6 text-[12px] lg:text-[18px] leading-[140%] text-[#0C0D0D]">
                        With the Transaction feature, you can see all the
                        available transactions both withdrawal and deposits. All
                        the information you will find in the table includes the
                        following columns: Account Name, Type, From, To,
                        Deposit/Withdrawal Date, Status.
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex gap-6 lg:gap-16">
                    <div className="max-w-[536px] w-full h-auto">
                      <Image src={form4} alt="" />
                    </div>
                    <div className="pt-[6px] lg:pt-16 max-w-[538px] w-full">
                      <h6 className="text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px] text-[#434747] font-semibold">
                        Account Opening
                      </h6>
                      <p className="mt-2 lg:mt-6 text-[12px] lg:text-[18px] leading-[140%] text-[#0C0D0D]">
                        This feature allows you to create account for
                        prospective customers.
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex gap-6 lg:gap-16">
                    <div className="max-w-[536px] w-full h-auto">
                      <Image src={form5} alt="" />
                    </div>
                    <div className="pt-[6px] lg:pt-16 max-w-[538px] w-full">
                      <h6 className="text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px] text-[#434747] font-semibold">
                        Loans
                      </h6>
                      <p className="mt-2 lg:mt-6 text-[12px] lg:text-[18px] leading-[140%] text-[#0C0D0D]">
                        This feature contains Loan number, Loan amount, Loan
                        tenure, origination date, interest rate, type of loan,
                        and status of loan. You can also check the Mortgage and
                        Interest Calculator.
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex gap-6 lg:gap-16">
                    <div className="max-w-[536px] w-full h-auto">
                      <Image src={form6} alt="" />
                    </div>
                    <div className="pt-[6px] lg:pt-16 max-w-[538px] w-full">
                      <h6 className="text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px] text-[#434747] font-semibold">
                        Mortgage
                      </h6>
                      <p className="mt-2 lg:mt-6 text-[12px] lg:text-[18px] leading-[140%] text-[#0C0D0D]">
                        This feature contains the Mortgage tenure, Loan Number,
                        Loan Repayment, Loan Status, Origination Date, Amount
                        Disbursed.
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex gap-6 lg:gap-16">
                    <div className="max-w-[536px] w-full h-auto">
                      <Image src={form7} alt="" />
                    </div>
                    <div className="pt-[6px] lg:pt-16 max-w-[538px] w-full">
                      <h6 className="text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px] text-[#434747] font-semibold">
                        Interest Calculator
                      </h6>
                      <p className="mt-2 lg:mt-6 text-[12px] lg:text-[18px] leading-[140%] text-[#0C0D0D]">
                        As a bank officer, you can calculate the loan repayment
                        of a customer based on the interest rate.
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
                <p className="max-w-[1048px] text-[14px] lg:text-[18px] leading-[140%] lg:leading-normal">
                  I Informed the user to go through the platform and make sure
                  that they understood what it was about before the test began
                  so that there were no incorrect answers. I told them to
                  describe their reasoning out loud for each action they took
                  and Insist that they speak openly and honestly about their
                  experiences.
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
        <SubFooter first={"Peekpile"} link={"/case-study/peekpile"} />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
