import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Homepage | IBK",
    template: "%s | IBK",
  },
  description:
    "Hi, my name is Ibukun Abejide, a passionate product designer on a mission to build successful products for millions of users across the world. I have experience working in the Fintech, E-commerce, EdTech and AI sectors and have also helped more than 100 people get into tech.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: [{
      url: "https://ibukunabejide.com/opengraph-image.png",
      width: 1200,
      height: 630
    }]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
