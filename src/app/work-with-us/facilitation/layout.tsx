import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facilitation",
  description: "Expert facilitation through change and uncertainty for brands. Three packages — Untangle Uncertainty, Control the Controllables, and Brand Transformation Company Wide — for leaders navigating board pressure, performance demands, and brand fundamentals that feel soft.",
  openGraph: {
    title: "Facilitation | Jayne Agency",
    description: "Expert facilitation through change and uncertainty for brands. Three packages for leaders navigating board pressure, performance demands, and brand fundamentals that feel soft.",
  },
};

export default function FacilitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
