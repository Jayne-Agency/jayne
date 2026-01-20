import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us",
  description: "Our 10 brand assets methodology delivers a proven path to dependable, repeatable, and scalable revenue. Learn about our strategy sprint and brand platform process.",
  openGraph: {
    title: "Work With Us | Jayne Agency",
    description: "Our 10 brand assets methodology delivers a proven path to dependable, repeatable, and scalable revenue. Learn about our strategy sprint and brand platform process.",
  },
};

export default function WorkWithUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
