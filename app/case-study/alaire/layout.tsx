export const metadata = {
  title: "Alaire",
  description:
    "Alaire is a personalized styling platform that uses a service quiz, moodboards, and admin request management to deliver tailored fashion experiences.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + "/case-study/alaire",
  },
};

export default function Layout({ children }) {
  return children;
}
