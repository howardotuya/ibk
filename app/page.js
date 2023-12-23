import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

// IMAGE IMPORTATION
import prifinaLeft from "@/public/images/PNG/prifina-left.png";
import prifinaRight from "@/public/images/SVG/prifina-right.svg";
import oppiaLeft from "@/public/images/PNG/oppia-left.png";
import oppiaRight from "@/public/images/SVG/oppia-right.svg";
import jogovest from "@/public/images/SVG/jogovest.svg";
import buttonBlack from "@/public/images/PNG/button.png";

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        <main>
          {/* HERO SECTION */}
          <div className="pt-20 px-20 flex flex-col gap-10">
            {/* TOP */}
            <article className="">
              <h1 className="max-w-[895px] text-[72px] leading-[100%] font-medium tracking-[-2.88px]">
                Designing digital solutions that simplifies lives
              </h1>
            </article>

            {/* MIDDLE */}
            <article className="flex gap-24 items-end">
              {/* left */}
              <article className="flex flex-col gap-4">
                <h6 className="cod-gray-500 font-semibold tracking-[-0.32px]">
                  Some companies I have worked with
                </h6>
                {/* LIST OF COMPANIES */}
                <article className="flex items-center gap-[52px]">
                  {/* PRIFINA */}
                  <article className="flex items-center gap-2">
                    {/* LEFT */}
                    <Image
                      className="w-[50px] h-[50px]"
                      src={prifinaLeft}
                      alt=""
                    />
                    {/* RIGHT */}
                    <Image className="" src={prifinaRight} alt="" />
                  </article>

                  {/* OPPIA */}
                  <article className="flex items-center gap-2">
                    {/* LEFT */}
                    <Image
                      className="w-6 h-[23.517px]"
                      src={oppiaLeft}
                      alt=""
                    />
                    {/* RIGHT */}
                    <Image className="" src={oppiaRight} alt="" />
                  </article>

                  {/* JOGOVEST */}
                  <article>
                    <Image src={jogovest} alt="" />
                  </article>
                </article>
              </article>

              {/* right */}
              <article>
                <p className="max-w-[534px] cod-gray-700 text-[18px] leading-[140%] tracking-[-.18px]">
                  Hi, my name is Ibukun Abejide, a passionate product designer
                  on a mission to build successful products for millions of
                  users across the world. I have experience working in the
                  Fintech, E-commerce, EdTech and AI sectors and have also
                  helped more than 100 people get into tech.
                </p>
              </article>
            </article>

            {/* BOTTOM */}
            <article className="flex items-center gap-24 justify-between">
              {/* left */}
              <article>
                <p className="jaffa-600 italic text-[24px] tracking-[-0.96px]">
                  “Design isn’t finished until somebody is using it” - Brenda
                  Laurel
                </p>
              </article>

              {/* right */}
              <article className="relative shrink-0">
                <Link className="absolute absolute-center whitespace-nowrap leading-6 block font-bold text-black text-[20px]" href={""}>Download resume</Link>

                {/* BUTTON IMAGE - CENTERED */}
                <Image className="w-[333.108px] h-auto" src={buttonBlack} alt="" /> 
              </article>
            </article>
          </div>

          {/* DIVIDER */}
        </main>
      </Container>
    </>
  );
}
