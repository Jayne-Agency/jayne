import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referral Program Terms & Conditions",
  description: "Terms and conditions for the Clarity University® July Referral Program.",
  openGraph: {
    title: "Referral Program Terms & Conditions | Jayne Agency",
    description: "Terms and conditions for the Clarity University® July Referral Program.",
  },
};

export default function ReferralProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
