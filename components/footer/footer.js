import Link from "next/link";
import Button from "../button/button";
import Container from "../container/container";
import Divider from "../divider/divider";
import Testimonials from "../testimonials/testimonials";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#014921] py-10 lg:py-20 text-white relative md:z-[9999] px-5 xl:px-0">
        <Container>
          {/* TOP */}
          <article className="flex flex-col gap-6 lg:gap-10">
            <h2 className="text-[24px] lg:text-[56px] font-medium leading-[100%] tracking-[-0.96px] lg:tracking-[-2.24px]">
              I have got great reviews
            </h2>
            {/* TESTIMONIALS */}
            <Testimonials />
          </article>

          {/* DIVIDER */}
          <article className="py-10 lg:pt-20 lg:pb-[61px]">
            <Divider bgColor={"bg-[#0E6D35]"} />
          </article>

          {/* BOTTOM */}
          <article className="flex flex-col gap-6 lg:gap-10">
            {/* TEXT */}
            <h2 className="max-w-[679px] text-[32px] lg:text-[64px] font-medium">
              Let’s build great experience together
            </h2>

            {/* LINKS */}
            <article className="flex items-center gap-8">
              <article>
                <Button
                  text={"Get in touch"}
                  route={"mailto:ibukunabejide8@gmail.com"}
                />
              </article>
              <article className="flex items-center gap-6">
                {/* TWITTER */}
                <Link
                  className="shrink-0"
                  href="https://twitter.com/abejideibukun"
                  target="_blank"
                >
                  <article className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </article>
                </Link>

                {/* LINKEDIN */}
                <Link
                  className="shrink-0"
                  href="https://www.linkedin.com/in/abejideibukun"
                  target="_blank"
                >
                  <article className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 9H2V21H6V9Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </article>
                </Link>

                {/* Instagram */}
                <Link
                  className="shrink-0"
                  href="https://instagram.com/abejideibukunatanda?igshid=MDM4ZDc5MmU="
                  target="_blank"
                >
                  <article className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 11.3701C16.1234 12.2023 15.9813 13.0523 15.5938 13.7991C15.2063 14.5459 14.5932 15.1515 13.8416 15.5297C13.0901 15.908 12.2385 16.0397 11.4078 15.906C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1903 8.22774 13.4229 8.09408 12.5923C7.96042 11.7616 8.09208 10.91 8.47034 10.1584C8.8486 9.40691 9.4542 8.7938 10.201 8.4063C10.9478 8.0188 11.7978 7.87665 12.63 8.00006C13.4789 8.12594 14.2649 8.52152 14.8717 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.5 6.5H17.51"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </article>
                </Link>
              </article>
            </article>
          </article>
        </Container>
      </footer>
    </>
  );
}
