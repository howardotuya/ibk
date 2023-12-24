import Container from "@/components/container/container";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Divider from "@/components/divider/divider";
import Link from "next/link";
import Button from "@/components/button/button";

// IMAGE IMPORTATION
import about1 from "@/public/images/PNG/about1.png"
import mabout1 from "@/public/images/PNG/mabout1.png"
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <Container>
        <main>
          {/* HERO SECTION */}
          <section className="grid grid-cols-[auto_1fr] gap-4 pr-[120px]">
            {/* IMAGE - LEFT */}
            <article>
              <Image className="w-full max-w-[546px] h-auto" src={about1} alt="" />
            </article>
            {/* TEXT - RIGHT */}
            <article className="pt-[148px] flex flex-col gap-6">
              <h1 className="text-[72px] font-medium leading-[100%] tracking-[-2.88px]">About IBK</h1>
              <p className="cod-gray-700 text-justify text-[18px] leading-[140%]">
                My name is Ibukun Abejide, I am a Product Designer currently
                working at Prifina. Prior to that, I worked at Oppia Foundation,
                a platform for educating less privilege children where I
                contributed to the implementation of the voice and language
                feature which resulted into 10,000 more users across Africa. My
                favorite part of being a designer is the ability to understand
                user&apos;s needs, solve their problems and also ensure the company
                is making good business decisions. Asides from being a designer,
                I have also mentored over 100 people who are passionate about
                design.{" "}
              </p>
            </article>
          </section>

          <section className="py-20">

          </section>
        </main>
      </Container>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
