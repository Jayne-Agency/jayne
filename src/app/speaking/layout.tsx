import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking Engagements",
  description: "Bring brand clarity to your audience. Book Brooke Foley for keynotes, panels, podcasts, and custom speaking engagements on brand strategy and leadership.",
  openGraph: {
    title: "Speaking Engagements | Jayne Agency",
    description: "Bring brand clarity to your audience. Book Brooke Foley for keynotes, panels, podcasts, and custom speaking engagements on brand strategy and leadership.",
  },
};

export default function SpeakingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
