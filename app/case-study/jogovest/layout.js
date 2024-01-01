import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jogovest",
  description:
    "Jogovest is the first life time digital product designed to tokenize investments across Africa. It seeks to solve the problem of investors who are unable to acquire potential investments and returns due to tied up capital.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/jogovest",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
