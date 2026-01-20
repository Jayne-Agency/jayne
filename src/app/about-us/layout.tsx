import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Jayne Agency - brand strategists who have helped hundreds of businesses from $20K to $2B build dependable, scalable, repeatable revenue since 2009.",
  openGraph: {
    title: "About Us | Jayne Agency",
    description: "Meet Jayne Agency - brand strategists who have helped hundreds of businesses from $20K to $2B build dependable, scalable, repeatable revenue since 2009.",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
