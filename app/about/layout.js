import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'About',
  description:
    "Hi, my name is Ibukun Abejide, a passionate product designer on a mission to build successful products for millions of users across the world. I have experience working in the Fintech, E-commerce, EdTech and AI sectors and have also helped more than 100 people get into tech.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/about",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
