import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "The design work behind the strategy. Explore creative Jayne Agency has produced for clients like PepsiCo — campaigns, platforms, and brand storytelling.",
  openGraph: {
    title: "Portfolio | Jayne Agency",
    description:
      "The design work behind the strategy. Explore creative Jayne Agency has produced for clients like PepsiCo — campaigns, platforms, and brand storytelling.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
