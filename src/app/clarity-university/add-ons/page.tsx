"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const addOns = [
  {
    title: "Brand Acceleration AI Lab",
    price: "$450",
    description:
      "Move your business at the speed of clarity. The Brand Acceleration AI Lab is an AI framework with anchored guardrails that both fuel and protect your brand platform. Plan, operate, and generate content in ways that look and sound like you, no matter how fast you want to go.",
    note: "There are a lot of AI tools out there, we know. For the purposes of this session we\u2019re demonstrating brand platform applications using ChatGPT. Our approach works across most major language models.",
    stripeUrl: "https://buy.stripe.com/14A8wO2ZH5Gm8WXeSN9Ve0Z",
  },
];

const strategistPackages = [
  {
    title: "Single Session",
    price: "$375",
    description:
      "Whether you have questions from your cohort or need a strategic sounding board for your brand, bring it on. This strategic 1:1 is yours to use for anything your brand might need.",
    stripeUrl: "https://buy.stripe.com/00gcNyfRXavg5Us00K",
  },
  {
    title: "3-Pack",
    price: "$1,125",
    description:
      "Monthly 1-hour calls with a strategist help review what\u2019s working over time, keep you accountable to the work you put into your brand, and help course correct wherever need be.",
    stripeUrl: "https://buy.stripe.com/7sYaEW0RzfgW0qrdOJ9Ve1c",
  },
  {
    title: "6-Pack",
    price: "$2,100",
    description:
      "Double the hours, double the impact. Get the same monthly calls with a strategist, extended across six months.",
    stripeUrl: "https://buy.stripe.com/bJe4gy9o55Gm8WX11X9Ve1b",
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
            <span>&larr;</span> Back to Clarity University&reg;
          </Link>
          <h1 className="text-4xl md:text-6xl leading-[1.05] text-[#1a1a1a] opacity-0 animate-fade-in mb-8 tracking-wide">
            Brand clarity doesn&apos;t graduate, it grows!
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] opacity-0 animate-fade-in animation-delay-100 font-[family-name:var(--font-open-sans)] leading-relaxed">
            Looking to accelerate progress? The Clarity University&reg; Growth Stack is built to complement wherever you are on your brand strategy journey.
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
            1:1 Strategic Office Hours
          </h2>
          <p className="reveal text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-16 font-[family-name:var(--font-open-sans)]">
            Clarity University&reg; strategists are ready to help. These sessions allow you to continuously tap into support that enables you to pressure-test decisions, refine positioning (the market changes fast these days, have you noticed?), and make sure what you built at Clarity University&reg; works to help your brand excel amidst change.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
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
            Not sure how to best leverage the growth stack &mdash; ideate here
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Tell us what you&apos;re working on right now and we&apos;ll help you decide.
          </p>
          <div className="reveal">
            <a
              href="https://form.typeform.com/to/Bsx0IpzP"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Talk to a strategist
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
