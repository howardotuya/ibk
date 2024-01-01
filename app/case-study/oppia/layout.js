import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oppia",
  description:
    "Oppia Foundation is a platform that provides education for those who lack access to it. Statistics shows that 61 million children aren’t able to attend primary education worldwide and 17 million will never be able to step their foot in school if the trend continues.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/oppia",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
