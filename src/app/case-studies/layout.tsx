import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real results from real clients. Explore how Jayne Agency has helped organizations like PepsiCo, Eaton, American Red Cross, and Nationwide achieve brand clarity and business growth.",
  openGraph: {
    title: "Case Studies | Jayne Agency",
    description: "Real results from real clients. Explore how Jayne Agency has helped organizations like PepsiCo, Eaton, American Red Cross, and Nationwide achieve brand clarity and business growth.",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
