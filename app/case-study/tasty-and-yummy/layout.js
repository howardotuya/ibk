import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tasty and Yummy",
  description:
    "Design a new web-based platform that allows users to discover, share, and interact with recipes. As part of the design process, you will conduct user research, create prototypes, and demonstrate your critical thinking and ideation skills.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/tasty-and-yummy",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
