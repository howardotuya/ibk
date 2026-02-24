export const metadata = {
  title: "BuildCO",
  description:
    "BuildCO is an e-commerce platform for furniture, home fittings, power tools, machinery rental, and artisan hire, including a B2B direct-ordering system with credit and site management workflows.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/buildco",
  },
};

export default function Layout({ children }) {
  return children;
}
