import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clarity University",
  description: "Clarity University by Jayne Agency - educational programs teaching evidence-based brand strategy methodology to business leaders and entrepreneurs.",
  openGraph: {
    title: "Clarity University | Jayne Agency",
    description: "Clarity University by Jayne Agency - educational programs teaching evidence-based brand strategy methodology to business leaders and entrepreneurs.",
  },
};

export default function ClarityUniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
