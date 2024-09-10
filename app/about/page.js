import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Divider from "@/components/divider/divider";
import Link from "next/link";
import Button from "@/components/button/button";

// IMAGE IMPORTATION
import about from "@/public/images/PNG/about-new.jpeg";
import about1 from "@/public/images/PNG/about1.png";
import mabout1 from "@/public/images/PNG/mabout1.png";
import gallery1 from "@/public/images/PNG/gallery1.png";
import gallery2 from "@/public/images/PNG/gallery2.png";
import gallery3 from "@/public/images/PNG/gallery3.png";
import gallery4 from "@/public/images/PNG/gallery4.png";
import Footer from "@/components/footer/footer";

// METADATA
export const metadata = {
  title: "About",
  description:
    "Hi, my name is Ibukun Abejide, a passionate product designer on a mission to build successful products for millions of users across the world. I have experience working in the Fintech, E-commerce, EdTech and AI sectors and have also helped more than 100 people get into tech.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/about",
  },
};

export default function About() {
  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <div className="pt-5 lg:pt-10 px-5 xl:px-0">
        <Container>
          <main>
            {/* HERO SECTION */}
            <section className="grid items-start lg:grid-cols-[auto_1fr] gap-4 lg:gap-8">
              {/* IMAGE - LEFT */}
              <article className="flex justify-start items-start">
                <div className="relative w-full max-w-[408px] lg:w-[408px] h-[282px] lg:h-[460px] overflow-hidden rounded-[16px] border-[4px] border-[#E5E8E8]">
                  <Image
                    className="object-cover object-[center_24%] lg:object-center"
                    src={about}
                    alt="Ibukun"
                    fill
                  />
                </div>
              </article>

              {/* TEXT - RIGHT */}
              <article className="py-4 lg:pt-[96.5px] lg:pb-0 flex flex-col gap-6">
                <h1 className="text-[32px] lg:text-[72px] font-medium leading-[100%] tracking-[-1.28px] lg:tracking-[-2.88px]">
                  About IBK
                </h1>

                <p className="cod-gray-700 text-justify text-[14px] lg:text-[18px] leading-[120%] lg:leading-[140%]">
                  My name is Ibukun Abejide, I am a Product Designer, I worked
                  at Oppia Foundation, a platform for educating less privilege
                  children where I contributed to the implementation of the
                  voice and language feature which resulted into 10,000 more
                  users across Africa.{" "}
                  <span>
                    <br />
                    <br />
                  </span>
                  My favorite part of being a designer is the ability to
                  understand user&apos;s needs, solve their problems and also
                  ensure the company is making good business decisions. Asides
                  from being a designer, I have also mentored over 100 people
                  who are passionate about design.{" "}
                </p>
              </article>
            </section>

            {/* GRID - 4 in 1 */}
            <section className="pt-5 pb-14 lg:py-20 grid lg:grid-cols-2  gap-5">
              {/* 1 */}
              <article className="p-10 bg-[#EFFEF3] rounded-[12px] flex flex-col gap-4 lg:gap-6">
                {/* header */}
                <h4 className="max-w-[329px] text-[24px] lg:text-[32px] leading-normal font-semibold">
                  My journey into the creative space
                </h4>
                {/* SUB TEXT */}
                <article className="cod-gray-700 text-[14px] lg:text-[16px] leading-[140%]">
                  <p>
                    Before I became a Product Designer, I was a Customer
                    Representative officer at the bank where I assisted a lot of
                    customers in solving transaction and loan issues. I learnt
                    how to communicate effectively and I also gained the trust
                    of customers. <br />
                    <br /> I love to evolve and face new challenges, that was
                    why I transitioned into tech. Check out my recent interview
                    on{" "}
                    <Link
                      target="_blank"
                      href="https://www.youtube.com/playlist?list=PLn5O3WWmVpuKiWkfzhmPMO0MSdiqbvQUa"
                      className="font-bold"
                    >
                      not just design podcast
                    </Link>{" "}
                    for more gist on my journey into tech.
                  </p>
                </article>
              </article>

              {/* 2 */}
              <article className="p-10 bg-[#EFFEF3] rounded-[12px] flex flex-col gap-4 lg:gap-6">
                {/* header */}
                <h4 className="text-[24px] lg:text-[32px] leading-normal font-semibold">
                  My Achievements so far..
                </h4>
                {/* SUB TEXT */}
                <article className="cod-gray-700 text-[14px] lg:text-[16px] leading-[140%]">
                  <p>
                    1. Helped more than 100 people transition into Product
                    Design.
                  </p>
                  <br />
                  <p>
                    2. Worked on multiple features on an EdTech product that
                    increased the number of users to 10,000.
                  </p>
                  <br />
                  <p>
                    3. Contributed to the development and implementation of a
                    social media strategy for the RoadTrip Community.
                  </p>
                  <br />
                </article>
              </article>

              {/* 3 */}
              <article className="p-10 bg-[#EFFEF3] rounded-[12px] flex flex-col gap-4 lg:gap-6">
                {/* header */}
                <h4 className="text-[24px] lg:text-[32px] leading-normal font-semibold">
                  Reasons why you should work with me
                </h4>
                {/* SUB TEXT */}
                <article className="cod-gray-700 text-[14px] lg:text-[16px] leading-[140%]">
                  <p>
                    1. Over the years, I have demonstrated team spirit and I
                    have successfully collaborated with members on the team.
                  </p>
                  <br />
                  <p>2. I work and communicate efficiently.</p>
                  <br />
                  <p>3. I am not only creative, I am also business oriented.</p>
                  <br />
                </article>
              </article>

              {/* 4 */}
              <article className="p-10 bg-[#EFFEF3] rounded-[12px] flex flex-col gap-4">
                {/* HEADING */}
                <h4 className="text-[24px] lg:text-[32px] leading-normal font-semibold">
                  Favorites
                </h4>

                {/* CONTENTS */}
                <article className="cod-gray-700 text-[14px] lg:text-[16px] leading-[140%] flex flex-col gap-8">
                  {/* 4.1 - BOOKS */}
                  <article className="flex flex-col gap-4">
                    {/* BOOKS - SUBHEADING */}
                    <article className="flex items-center gap-2">
                      {/* BOOKS ICON */}
                      <article>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22.1307 19.1851L13.5544 23.0626C13.0257 23.3119 12.4744 23.2876 11.9682 22.9951L1.1419 17.4976C0.832527 17.2988 0.740652 17.0082 0.759402 16.8057C0.778152 16.6032 0.825027 16.3838 1.36878 16.2263L2.17128 15.9301L13.0313 21.8494L20.7488 18.6957L22.1307 19.1851Z"
                            fill="#01579B"
                          />
                          <path
                            d="M13.4513 22.4419C13.2369 22.5425 13.0015 22.5905 12.7648 22.5821C12.5281 22.5736 12.2968 22.5088 12.0901 22.3931L1.52068 17.0681C1.37068 16.9856 1.32568 16.7962 1.41568 16.65C1.64818 16.2656 2.07568 15.0506 1.37068 14.0419L13.3069 19.7887L13.4513 22.4419Z"
                            fill="#F5F5F5"
                          />
                          <path
                            d="M21.6732 18.7462L13.4513 22.4419C13.1794 22.56 12.6376 22.77 12.0132 22.35C12.5063 22.3856 12.8532 22.1812 13.0313 21.8494C13.2057 21.5269 13.1532 20.9981 12.9413 20.7C12.8119 20.52 12.4651 20.2331 12.3132 20.0719L21.2063 16.5937C21.9938 16.2694 22.7326 16.755 22.8507 17.3456C22.9819 18.0131 22.1307 18.5587 21.6732 18.7462Z"
                            fill="#94C6D6"
                          />
                          <path
                            d="M22.0838 16.305L13.5957 20.0925C13.0613 20.3044 12.4632 20.2763 11.9513 20.0175L1.1063 14.5088C1.0013 14.4563 0.845676 14.3119 0.783801 14.115C0.682551 13.7869 0.810051 13.3744 1.19443 13.2432L12.9469 19.2338L20.9944 15.7894L22.0838 16.305Z"
                            fill="#01579B"
                          />
                          <path
                            d="M22.7231 16.8543L21.7988 16.5187L19.8938 16.6293L13.5975 19.4399C13.0631 19.6518 12.465 19.6237 11.9531 19.3649L1.10626 13.8581C0.826881 13.7156 0.886881 13.3012 1.19438 13.2431L9.01126 9.74619C9.23438 9.70494 9.46313 9.72931 9.67126 9.81744L20.8256 15.1349C20.8256 15.1349 22.5975 16.3481 22.7231 16.8543Z"
                            fill="#0091EA"
                          />
                          <path
                            d="M19.7868 16.6838C19.7868 16.6838 20.9606 16.2244 21.8831 16.2657C22.8056 16.3069 23.1262 16.9538 23.1262 16.9538C22.9518 16.1607 22.1325 15.7557 22.1325 15.7557L9.94497 9.61878C9.8606 9.58315 9.54935 9.51003 9.07122 9.7069C8.68497 9.86628 7.4231 10.4569 7.4231 10.4569L19.7868 16.6838Z"
                            fill="#616161"
                          />
                          <path
                            d="M23.1788 17.1037C23.0907 16.7531 22.8732 16.3781 22.4719 16.1962C21.9432 15.9581 21.1894 16.0199 20.7075 16.2712L19.7869 16.6799V17.3287L20.9513 16.8112C22.0838 16.3068 22.5863 17.0624 22.6294 17.2406C22.8094 17.9662 22.4607 18.3862 21.4313 18.8587L19.7588 19.6124V20.2649L21.6825 19.4081C22.5338 19.0668 23.505 18.4256 23.1788 17.1037Z"
                            fill="#424242"
                          />
                          <path
                            d="M6.18942 16.9331L2.95129 12.4575L3.45942 12.2306L7.10254 17.2368L6.18942 16.9331ZM10.3425 18.9956L9.76504 18.5381L19.7869 16.4925V16.8206L18.3825 17.3531L10.3425 18.9956Z"
                            fill="#01579B"
                          />
                          <path
                            d="M2.77502 8.6587L15.4331 6.5437L20.9625 12.6318C21.2419 12.9262 21.09 13.4137 20.6925 13.4943L7.62377 16.1756L2.77502 8.6587Z"
                            fill="#9CCC65"
                          />
                          <path
                            d="M20.6925 12.9694L7.71374 15.5982L7.67249 16.2169L20.6925 13.5469C21.06 13.47 21.2137 13.05 21.0131 12.7538C20.9419 12.8588 20.8331 12.9413 20.6925 12.9694ZM21.3919 15.8063C21.5287 16.0238 21.405 16.3107 21.1537 16.3613L9.20624 18.7838C8.48811 18.9319 7.78311 18.4613 7.71936 17.73C7.66499 17.1113 8.08311 16.5507 8.69249 16.4232L20.1825 13.8432L21.3919 15.8063Z"
                            fill="#689F38"
                          />
                          <path
                            d="M10.4231 15.0187L5.66437 8.20874L2.94937 8.92687C2.32125 9.55124 2.55562 10.5769 2.55562 10.5769C2.55562 10.5769 6.7125 17.2481 7.36875 18.1012C8.025 18.9544 8.98312 18.8212 8.98312 18.8212L10.6012 18.495L10.4325 15.4762L10.4231 15.0187Z"
                            fill="#616161"
                          />
                          <path
                            d="M10.4232 15.0638L8.13755 15.5363C7.51317 15.6769 7.40067 16.2638 7.40067 16.2638L1.88255 8.35693C1.88255 8.35693 1.09692 9.30756 1.61817 10.1157L7.3688 18.1013C7.99692 18.9957 8.98317 18.8288 8.98317 18.8288L10.6013 18.5026L10.4344 15.5438L10.4232 15.0638Z"
                            fill="#424242"
                          />
                          <path
                            d="M20.6719 15.5625C20.73 15.69 20.655 15.8381 20.5182 15.8662L9.09379 18.21C8.37567 18.3581 7.86754 17.8818 7.89379 17.2331C7.92754 16.4137 8.38692 16.0668 8.99442 15.9412L20.475 13.5956C20.475 13.5956 20.085 14.0343 20.3832 14.8556C20.4844 15.1387 20.5932 15.39 20.6719 15.5625Z"
                            fill="#B9E4EA"
                          />
                          <path
                            d="M8.47692 15.6937L3.5813 8.76746"
                            stroke="#424242"
                            stroke-width="2.071"
                            stroke-miterlimit="10"
                          />
                          <path
                            d="M8.86131 12.7406L2.56506 9.56812L2.31006 10.0706L9.58506 13.7775L8.86131 12.7406Z"
                            fill="#424242"
                          />
                          <path
                            d="M20.3981 12.0056L19.9368 11.4994L12.8437 14.7544L8.86121 12.7838L9.53996 13.755L12.1781 15.1031L14.1431 14.8013L20.3981 12.0056Z"
                            fill="#689F38"
                          />
                          <path
                            d="M22.1288 10.7532L13.5544 14.6307C13.0257 14.8801 12.4744 14.8557 11.9682 14.5632L1.1419 9.06568C0.832527 8.86693 0.740652 8.57631 0.759402 8.37381C0.778152 8.17131 0.825027 7.95193 1.36878 7.79443L1.8769 7.60693L12.9994 13.0651L22.0313 9.32818L22.1288 10.7532Z"
                            fill="#C62828"
                          />
                          <path
                            d="M13.4494 14.01C13.2349 14.1106 12.9996 14.1586 12.7628 14.1502C12.5261 14.1417 12.2948 14.0769 12.0881 13.9612L1.51873 8.63624C1.36873 8.55374 1.32373 8.36436 1.41373 8.21811C1.64623 7.83374 2.07373 6.61874 1.36873 5.60999L13.0387 11.5462L13.4494 14.01Z"
                            fill="#F5F5F5"
                          />
                          <path
                            d="M21.6712 10.3143L13.4494 14.01C13.1775 14.1281 12.6356 14.3381 12.0112 13.9181C12.5044 13.9537 12.8512 13.7493 13.0294 13.4175C13.2037 13.095 13.1512 12.5662 12.9394 12.2681C12.81 12.0881 12.4631 11.8012 12.3112 11.64L21.2044 8.16185C21.9919 7.83747 22.7306 8.3231 22.8487 8.91372C22.98 9.58122 22.1287 10.1268 21.6712 10.3143Z"
                            fill="#94C6D6"
                          />
                          <path
                            d="M22.0838 7.87307L13.5956 11.6606C13.0613 11.8724 12.4632 11.8443 11.9513 11.5856L1.1044 6.07682C0.9919 6.02057 0.82315 5.87619 0.768775 5.67182C0.68815 5.36807 0.79315 4.96869 1.19253 4.81119L11.1319 2.70557L22.0838 7.87307Z"
                            fill="#C62828"
                          />
                          <path
                            d="M22.7213 8.42255L21.7969 8.08693L19.8919 8.19755L13.5956 11.0082C13.0613 11.2201 12.4632 11.1919 11.9513 10.9332L1.1044 5.42443C0.825025 5.28193 0.9244 4.90505 1.19253 4.80943L9.01128 1.31443C9.2344 1.27318 9.46315 1.29755 9.67128 1.38568L20.8256 6.70318C20.8256 6.70318 22.5956 7.91443 22.7213 8.42255Z"
                            fill="#F44336"
                          />
                          <path
                            d="M19.7869 8.24994C19.7869 8.24994 20.7638 7.90682 21.6863 7.94807C22.6088 7.98932 23.1282 8.51994 23.1282 8.51994C22.9388 7.67244 22.1344 7.32182 22.1344 7.32182L9.94692 1.18494C9.86255 1.14932 9.5513 1.07619 9.07317 1.27307C8.68692 1.43244 7.42505 2.02307 7.42505 2.02307L19.7869 8.24994Z"
                            fill="#616161"
                          />
                          <path
                            d="M20.9025 7.84881L8.43188 1.55818L8.84438 1.37256L21.5269 7.72881L20.9025 7.84881Z"
                            fill="#424242"
                          />
                          <path
                            d="M23.1768 8.67192C23.0887 8.3213 22.9406 7.98192 22.5225 7.80567C21.9881 7.58067 21.5006 7.5338 20.7056 7.83942L19.785 8.24817V8.89692L20.9493 8.37942C21.54 8.10192 22.41 8.16192 22.6275 8.8088C22.8656 9.51755 22.4587 9.95442 21.4293 10.4269L19.7568 11.1807V11.8332L21.6806 10.9763C22.5337 10.635 23.505 9.9938 23.1768 8.67192Z"
                            fill="#424242"
                          />
                        </svg>
                      </article>
                      {/* BOOKS TEXT */}
                      <h6 className="font-semibold text-[#0C0D0D]">Books</h6>
                    </article>

                    {/* BOOKS - LIST OF TEXTS */}
                    <article className="flex flex-col gap-4 text-[14px] lg:text-[16px]">
                      <Link
                        className="underline"
                        href="https://austinkleon.com/steal/"
                        target="_blank"
                      >
                        Steal like an artist
                      </Link>
                      <Link
                        className="underline"
                        href="https://www.goodreads.com/en/book/show/257789"
                        target="_blank"
                      >
                        How to sell yourself
                      </Link>
                      <Link
                        className="underline"
                        href="https://www.uxpin.com/studio/ebooks/the-indispensable-designer-a-guide-to-influential-design-signup"
                        target="_blank"
                      >
                        The indispensable Designer
                      </Link>
                      <p></p>
                      <p></p>
                      <p> </p>
                    </article>
                  </article>

                  {/* 4.2 - PODCAST */}
                  <article className="flex flex-col gap-4">
                    {/* PODCAST - SUBHEADING */}
                    <article className="flex items-center gap-2">
                      {/* PODCAST ICON */}
                      <article>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3.79741 21.0084C4.54968 20.8624 4.98601 19.8499 4.77197 18.747C4.55793 17.644 3.77458 16.8681 3.02231 17.0141C2.27004 17.1601 1.83371 18.1726 2.04775 19.2756C2.26179 20.3786 3.04514 21.1544 3.79741 21.0084Z"
                            fill="#616161"
                          />
                          <path
                            d="M2.88938 11.2575C2.76938 13.7231 2.95688 16.4625 3.26625 19.0969"
                            stroke="#616161"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                          />
                          <path
                            d="M21.9502 19.2734C22.1642 18.1704 21.7279 17.1579 20.9756 17.012C20.2233 16.866 19.44 17.6418 19.2259 18.7448C19.0119 19.8478 19.4482 20.8603 20.2005 21.0063C20.9528 21.1522 21.7361 20.3764 21.9502 19.2734Z"
                            fill="#616161"
                          />
                          <path
                            d="M21.1106 11.2575C21.2306 13.7231 21.0431 16.4625 20.7337 19.0969"
                            stroke="#616161"
                            stroke-width="1.125"
                            stroke-miterlimit="10"
                          />
                          <path
                            d="M21.3619 12.4894C20.3925 12.4444 19.5881 11.7169 19.4625 10.755C19.3219 9.66563 18.96 8.4075 18.0525 7.2C16.6256 5.30438 14.5369 4.30125 12.0094 4.30125C10.2375 4.30125 7.7475 4.80375 5.94562 7.2C5.02687 8.4225 4.66875 9.70687 4.53187 10.8131C4.4175 11.73 3.675 12.4406 2.75062 12.4838L2.63812 12.4894C1.98937 12.5194 1.45312 11.9831 1.49062 11.3362C1.58062 9.75562 1.97812 6.94875 3.5625 4.84125C5.54625 2.20125 8.54625 0.75 12.0094 0.75C15.4594 0.75 18.4519 2.20125 20.4356 4.8375C22.0219 6.94687 22.4175 9.75563 22.5094 11.3344C22.5469 11.9831 22.0106 12.5194 21.3619 12.4894Z"
                            fill="#616161"
                          />
                          <path
                            d="M7.26187 23.1169C5.43937 23.37 3.34874 22.0256 2.92687 18.915C2.50687 15.8175 3.97874 13.935 5.47124 13.6462L7.26187 23.1169Z"
                            fill="#424242"
                          />
                          <path
                            d="M7.36687 13.005L5.78062 13.2769C5.13937 13.4006 4.63687 13.8975 4.50562 14.5387C4.32937 15.4031 4.21687 16.785 4.58062 18.6694C4.94624 20.5519 5.56687 21.7912 6.05624 22.5281C6.41624 23.0719 7.06874 23.3456 7.70999 23.22L9.29624 22.9481C10.0631 22.8 10.2525 20.4525 9.71812 17.7075C9.18562 14.9625 8.13374 12.8569 7.36687 13.005Z"
                            fill="#757575"
                          />
                          <path
                            opacity="0.5"
                            d="M9.45185 22.5257C10.0913 22.4016 10.2106 20.2449 9.71846 17.7085C9.22627 15.1721 8.30891 13.2166 7.66948 13.3406C7.03005 13.4647 6.91068 15.6214 7.40287 18.1578C7.89506 20.6942 8.81242 22.6497 9.45185 22.5257Z"
                            fill="#424242"
                          />
                          <path
                            d="M9.34687 17.7806C9.68062 19.4981 9.75374 20.9287 9.51187 20.9756C9.26999 21.0225 8.80124 19.6687 8.46937 17.9512C8.13562 16.2337 8.0625 14.8031 8.30437 14.7562C8.54625 14.7094 9.01312 16.0631 9.34687 17.7806Z"
                            fill="url(#paint0_linear_165_225)"
                          />
                          <path
                            d="M16.7381 23.1169C18.5606 23.37 20.6512 22.0256 21.0731 18.915C21.4931 15.8175 20.0212 13.935 18.5287 13.6462L16.7381 23.1169Z"
                            fill="#424242"
                          />
                          <path
                            d="M16.6331 13.005L18.2194 13.2769C18.8606 13.4006 19.3631 13.8975 19.4944 14.5387C19.6706 15.4031 19.7831 16.785 19.4194 18.6694C19.0537 20.5519 18.4331 21.7912 17.9437 22.5281C17.5837 23.0719 16.9312 23.3456 16.29 23.22L14.7037 22.9481C13.9369 22.8 13.7475 20.4525 14.2819 17.7075C14.8144 14.9625 15.8662 12.8569 16.6331 13.005Z"
                            fill="#757575"
                          />
                          <path
                            opacity="0.5"
                            d="M16.5963 18.1563C17.0885 15.6199 16.9692 13.4632 16.3297 13.3391C15.6903 13.2151 14.7729 15.1706 14.2808 17.707C13.7886 20.2434 13.9079 22.4001 14.5474 22.5242C15.1868 22.6483 16.1042 20.6927 16.5963 18.1563Z"
                            fill="#424242"
                          />
                          <path
                            d="M14.6531 17.7806C14.3194 19.4981 14.2462 20.9287 14.4881 20.9756C14.73 21.0225 15.1987 19.6687 15.5306 17.9512C15.8644 16.2337 15.9375 14.8031 15.6956 14.7562C15.4537 14.7094 14.9869 16.0631 14.6531 17.7806Z"
                            fill="url(#paint1_linear_165_225)"
                          />
                          <path
                            d="M22.3294 11.6437C21.7987 12.0037 21.1444 11.5987 20.9437 11.0512C20.7112 9.68624 20.2519 8.10187 19.3519 6.79499C17.6662 4.20937 14.8331 2.91374 12 2.91187C9.16687 2.91374 6.33374 4.20937 4.64812 6.79499C3.74812 8.10187 3.29062 9.68812 3.05624 11.0512C2.85562 11.5987 2.20124 12.0037 1.67062 11.6437C1.62749 11.6137 1.56187 11.5387 1.49437 11.4975C1.54687 12.0694 2.04562 12.5137 2.63812 12.4875L2.80124 12.48C3.95999 12.4894 4.41937 11.7525 4.52624 10.8619C4.65937 9.74624 5.01374 8.43937 5.94749 7.19999C7.74562 4.80937 10.2281 4.30312 12 4.30124C13.7719 4.30312 16.2544 4.80937 18.0525 7.19999C18.9712 8.42249 19.3294 9.70687 19.4662 10.8131C19.5825 11.7412 20.0325 12.4894 21.2981 12.4856L21.36 12.4894C21.9525 12.5175 22.4512 12.0712 22.5037 11.4994C22.4381 11.5387 22.3725 11.6137 22.3294 11.6437Z"
                            fill="#424242"
                          />
                          <path
                            d="M2.74687 7.80188C2.5725 7.67813 2.43562 7.54126 2.685 6.60001C2.98687 5.46563 4.3875 3.27001 7.20937 1.81501C7.7325 1.54501 9.00375 1.14188 9.39187 1.84126C9.75937 2.50501 7.98375 2.98876 7.3575 3.32438C5.71875 4.20563 4.53562 5.44876 3.9 6.43126C3.6975 6.74438 3.16312 8.09438 2.74687 7.80188Z"
                            fill="#757575"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_165_225"
                              x1="8.51993"
                              y1="17.9423"
                              x2="9.05927"
                              y2="17.8377"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.2016" stop-color="#212121" />
                              <stop
                                offset="1"
                                stop-color="#212121"
                                stop-opacity="0"
                              />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_165_225"
                              x1="15.48"
                              y1="17.9424"
                              x2="14.9407"
                              y2="17.8378"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.2016" stop-color="#212121" />
                              <stop
                                offset="1"
                                stop-color="#212121"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </article>
                      {/* PODCAST TEXT */}
                      <h6 className="font-semibold text-[#0C0D0D]">Podcast</h6>
                    </article>

                    {/* BOOKS - LIST OF TEXTS */}
                    <article className="flex flex-col gap-4 text-[14px] lg:text-[16px]">
                      <Link
                        className="underline"
                        href="https://isaidwhatisaidpodcast.com/episodes/"
                        target="_blank"
                      >
                        I said what I said
                      </Link>
                      <Link
                        className="underline"
                        href="https://podcasts.apple.com/ng/podcast/road-to-30-podcast/id1459267077"
                        target="_blank"
                      >
                        Road to 30
                      </Link>
                      <Link
                        className="underline"
                        target="_blank"
                        href="https://www.youtube.com/playlist?list=PLn5O3WWmVpuKiWkfzhmPMO0MSdiqbvQUa"
                      >
                        Not Just Design
                      </Link>
                    </article>
                  </article>
                </article>
              </article>
            </section>
          </main>
        </Container>
      </div>

      {/* GALLERY */}
      <div className="bg-[#0C0D0D] px-5 xl:px-0">
        <Container>
          <section className="bg-[#0C0D0D] pt-10 pb-14 lg:py-20 flex flex-col items-center lg:items-start gap-5 lg:gap-10">
            {/* TEXT */}
            <h2 className="text-[24px] lg:text-[48px] font-medium lg:tracking-[-1.92px] text-white text-center">
              Some of my Favorite moments
            </h2>

            {/* IMAGERY GRID */}
            <article className="max-w-[500px] lg:max-w-none flex gap-2 lg:gap-5 justify-start items-start w-full">
              {/* 1 - 2 */}
              <article className="max-w-[168px] lg:max-w-none flex flex-col gap-2 lg:gap-5 w-full flex-1">
                {/* 1 grid */}
                <article className="relative rounded-[4px] overflow-hidden h-[174px] lg:h-[504px] flex flex-col justify-end items-end">
                  {/* WHITE BG + TEXT */}
                  <article className="bg-white relative z-[1] w-full py-2 lg:py-6 flex justify-center items-center text-[8px] lg:text-[24px]">
                    <p>At Landmark Beach, Lagos</p>
                  </article>

                  {/* IMAGE BG */}
                  <Image
                    className=" object-cover object-center"
                    src={gallery1}
                    placeholder="blur"
                    alt=""
                    fill
                  />
                </article>

                {/* 2 grid */}
                <article className="relative rounded-[4px] overflow-hidden h-[208px] lg:h-[743px] flex flex-col justify-end items-end">
                  {/* WHITE BG + TEXT */}
                  <article className="bg-white relative z-[1] w-full py-2 lg:py-6 flex justify-center items-center text-[8px] lg:text-[24px]">
                    <p>At Zuma Rock, Abuja</p>
                  </article>

                  {/* IMAGE BG */}
                  <Image
                    className=" object-cover object-center"
                    src={gallery3}
                    alt=""
                    placeholder="blur"
                    fill
                  />
                </article>
              </article>

              {/* 3 - 4 */}
              <article className="flex flex-col gap-2 lg:gap-5 w-full flex-1">
                {/* 3 grid */}
                <article className="relative rounded-[4px] overflow-hidden h-[243px] lg:h-[743px] flex flex-col justify-end items-end">
                  {/* WHITE BG + TEXT */}
                  <article className="bg-white relative z-[1] w-full py-2 lg:py-6 flex justify-center items-center text-[8px] lg:text-[24px]">
                    <p>At a wedding party in Abuja</p>
                  </article>

                  {/* IMAGE BG */}
                  <Image
                    className=" object-cover object-center"
                    src={gallery2}
                    placeholder="blur"
                    alt=""
                    fill
                  />
                </article>

                {/* 4 grid */}
                <article className="relative rounded-[4px] overflow-hidden h-[167px] lg:h-[504px] flex flex-col justify-end items-end">
                  {/* WHITE BG + TEXT */}
                  <article className="bg-white relative z-[1] w-full py-2 lg:py-6 flex justify-center items-center text-[8px] lg:text-[24px]">
                    <p>Family Dinner</p>
                  </article>

                  {/* IMAGE BG */}
                  <Image
                    className=" object-cover object-center"
                    src={gallery4}
                    placeholder="blur"
                    alt=""
                    fill
                  />
                </article>
              </article>
            </article>
          </section>
        </Container>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
