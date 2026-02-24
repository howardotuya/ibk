export const metadata = {
  title: "BaristaBuddy",
  description:
    "BaristaBuddy is a coffee machine management platform for service operations, asset tracking, work orders, inventory, and technician workflows.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/baristabuddy",
  },
};

export default function Layout({ children }) {
  return children;
}
