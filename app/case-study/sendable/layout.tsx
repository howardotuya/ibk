export const metadata = {
  title: "Sendable",
  description:
    "Sendable is a golf coaching platform that connects golfers with instructors, manages bookings and payouts, and provides admin tools for growth and revenue operations.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/sendable",
  },
};

export default function Layout({ children }) {
  return children;
}
