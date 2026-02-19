"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const addOns = [
  {
    title: "CU AI Add-On Session",
    price: "$450",
    description:
      "This course is a precision based approach specific to the Clarity University\u00AE brand platform. We are educating ChatGPT users at all levels, to use their brand platform as a driver of brand alignment when generating strategies, tactics or content on ChatGPT.",
    note: "This add-on is designed specifically for people who\u2019ve been through Clarity University\u00AE and have a completed brand platform workbook from the program.",
    stripeUrl: "https://buy.stripe.com/14A8wO2ZH5Gm8WXeSN9Ve0Z",
  },
  {
    title: "Post Week 4 Event Support",
    price: "$375",
    description:
      "After completing the Week 4 \u201CTest Your Message\u201D event, you\u2019ll have the opportunity to receive a final round of 1-on-1 support with our expert strategists. This 1-hour session is designed to help you refine the messaging you tested during the event, provide personalized feedback, and finalize your brand\u2019s position and promise. It\u2019s a focused, hands-on opportunity to ensure your messaging is clear, compelling, and aligned with your overall brand platform. This session can also include support on how to continue leveraging insights from your AI session or get additional AI guidance as it relates to your brand platform.",
    note: "This add-on is only available to participants who have purchased the Plus or ConsultPlus package and have attended the Week 4 \u201CTest Your Message\u201D session.",
    stripeUrl: "https://buy.stripe.com/00gcNyfRXavg5Us00K",
  },
];

const strategistPackages = [
  {
    title: "3-Month 1-Hour Strategist Support",
    price: "$1,500",
    description:
      "One hour each month with a strategist to review your brand platform progress, address any challenges, and help you refine your brand\u2019s direction as you implement key lessons.",
    stripeUrl: "https://buy.stripe.com/dR66pacFL0UG0A8aFj",
  },
  {
    title: "6-Month 1-Hour Strategist Support",
    price: "$2,500",
    description:
      "Enjoy the same expert strategist support for a longer period, allowing you to stay consistently aligned with your brand goals over six months.",
    stripeUrl: "https://buy.stripe.com/aEUfZK0X3cDociQ7t8",
  },
  {
    title: "3-Month 1.5-Hour Senior Strategist Consultation",
    price: "$3,300",
    description:
      "Receive in-depth, 1.5-hour monthly consultations from a senior strategist, providing advanced strategic insights and hands-on support for your brand platform. This is ideal for businesses seeking more detailed guidance and personalized recommendations.",
    stripeUrl: "https://buy.stripe.com/8wM28U8pv7j4dmU28P",
  },
  {
    title: "6-Month 1.5-Hour Senior Strategist Consultation",
    price: "$6,000",
    description:
      "For a premium level of senior support over a full six months, this option ensures you\u2019re guided by the highest level of expertise, giving you the clarity and confidence to take your brand to the next level.",
    stripeUrl: "https://buy.stripe.com/28o4h2dJP6f02IgeVC",
  },
];

export default function CUAddOns() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/clarity-university"
            className="text-[#f57214] hover:text-[#1a1a1a] transition-colors font-[family-name:var(--font-open-sans)] text-sm mb-6 inline-flex items-center gap-2"
          >
            <span>&larr;</span> Back to Clarity University
          </Link>
          <h1 className="text-4xl md:text-6xl leading-[1.05] text-[#1a1a1a] opacity-0 animate-fade-in mb-8 tracking-wide">
            Maximize Your Clarity University Experience with Our Exclusive Add-Ons
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] opacity-0 animate-fade-in animation-delay-100 font-[family-name:var(--font-open-sans)] leading-relaxed">
            Take your brand to the next level with tailored support and comprehensive resources designed to keep you on track, focused, and empowered.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
            We&apos;re here to provide you with the brand strategy tools you need to succeed, both in your Clarity University cohort, and beyond. Whether you&apos;re looking for a comprehensive review of your progress or ongoing strategic support, our add-on options are built to complement your journey toward brand clarity and growth.
          </p>
        </div>
      </section>

      {/* Individual Add-Ons */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {addOns.map((addon) => (
              <div
                key={addon.title}
                className="reveal bg-[#faf9f7] rounded-2xl p-8 lg:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 pb-6 border-b border-[#e5e0d8]">
                  <h3 className="text-2xl md:text-3xl text-[#1a1a1a]">
                    {addon.title}
                  </h3>
                  <span className="text-3xl md:text-4xl text-[#f57214] font-semibold shrink-0">
                    {addon.price}
                  </span>
                </div>
                <p className="text-lg text-[#8a8178] leading-relaxed mb-6 font-[family-name:var(--font-open-sans)]">
                  {addon.description}
                </p>
                {addon.note && (
                  <div className="bg-[#f5f1ea] rounded-lg p-4 mb-8">
                    <p className="text-sm text-[#8a8178] font-[family-name:var(--font-open-sans)]">
                      <strong className="text-[#1a1a1a]">Please note:</strong>{" "}
                      {addon.note}
                    </p>
                  </div>
                )}
                <a
                  href={addon.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg bg-[#f57214] text-white rounded-lg transition-all duration-300 w-full md:w-auto"
                >
                  Purchase
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategist Support */}
      <section className="py-16 lg:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Strategist Support Add-Ons
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-16 font-[family-name:var(--font-open-sans)]">
            Need expert guidance after the course? Choose one of our Strategist Support packages for dedicated, ongoing consultation tailored to your evolving needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {strategistPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="reveal bg-[#faf9f7] rounded-2xl p-8 flex flex-col"
              >
                <h3 className="text-xl md:text-2xl text-[#1a1a1a] mb-4">
                  {pkg.title}
                </h3>
                <p className="text-3xl md:text-4xl text-[#f57214] font-semibold mb-6">
                  {pkg.price}
                </p>
                <p className="text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)] flex-1 mb-8">
                  {pkg.description}
                </p>
                <a
                  href={pkg.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300 w-full"
                >
                  Purchase
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Have questions about our add-ons?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Talk it through with us.
          </p>
          <div className="reveal">
            <a
              href="https://form.typeform.com/to/Bsx0IpzP"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Book a call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
