"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const story = [
  {
    heading: "Your supplier base is growing, demand is growing, resources are shrinking.",
    body: "We serve 1000+ suppliers each year, looking to sell into 200+ enterprises. Everywhere we go—from trade shows to workshops, on-sites to virtual events—we hear the same thing. The supplier base keeps growing, but so do demands. More suppliers to manage with higher standards on each one. Everyone knows the answer is to vet them, qualify them, and then mentor them—only supply chain leaders rarely have the time to do that properly.",
  },
  {
    heading: "More effort doesn’t always equal more progress.",
    body: "Supplier development eats up time nobody has. Even after you’ve gotten a supplier ready to stand in front of supply chain leaders, after the countless “programs,” “fast tracks,” and cohorts, something’s still missing. There’s still a longer-term strategic gap.",
  },
  {
    heading: "We close that gap.",
    body: "Meaningfully and measurably change how confident and clear your suppliers are in what they sell and how they contract for the long haul. Whether it’s one supplier or a hundred, we help them untangle the strategy and the message so they can scale with clarity and alignment.",
  },
];

const paths = [
  {
    name: "Path 1",
    summary: "Brand Strategy Education for up to 20 suppliers",
    price: "$7,500",
    recommended: false,
    features: [
      "1 Digital Interactive Workbook",
      "2 Educational Sessions with pre- and post-impact measurement",
      "1 (2 hr) Brand Strategy Primer (Intro to Brand Strategy)",
      "1 (1 hr) Refining Your Brand Platform (with an interactive Q&A session)",
    ],
  },
  {
    name: "Path 2",
    summary: "Education + Hand Holding",
    price: "$28,000",
    recommended: true,
    features: [
      "1 Digital Interactive Workbook",
      "4 Educational Sessions with pre- and post-impact measurement and analysis",
      "1 (2 hr) Brand Strategy Primer",
      "1 (1 hr) Refining Your Brand Platform (with an interactive Q&A session)",
      "1 (2 hr) Ground Your Pitch Workshop with live pitch coaching for 5 participants",
      "1 (1.5 hr) AI Module (Turning Your Platform into Action)",
      "20 paid 1-year subscriptions to Jayne Agency’s Substack (unlimited complimentary sign-ups available)",
      "20% off Clarity University® for 6 months (including Add-Ons)",
    ],
  },
  {
    name: "Path 3",
    summary: "Single Clarity University® Seats",
    price: "$1,600 / $2,500 / $5,500",
    recommended: false,
    features: [
      "Complete brand strategy education, tools, support, and community access",
      "4-week program",
      "Comprehensive brand strategy frameworks and guided implementation",
      "Live working sessions with strategists and cohort collaboration",
      "One-on-one refinement sessions for asset development",
      "Real-time pitch testing and peer feedback",
      "Impact and analysis reporting (ConsultPlus package only)",
      "Session dates available on website",
    ],
  },
];

export default function EnterpriseSolutions() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm md:text-base text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6 opacity-0 animate-fade-in">
            Support suppliers in being 100% enterprise ready
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] opacity-0 animate-fade-in animation-delay-100">
            Impact supplier growth in a measurable and reportable way.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-12">
            {story.map((item) => (
              <div key={item.heading} className="border-t border-[#e5e0d8] pt-8">
                <h2 className="text-2xl md:text-3xl text-[#f57214] mb-4 leading-snug">{item.heading}</h2>
                <p className="text-lg md:text-xl text-[#1a1a1a] leading-relaxed font-[family-name:var(--font-open-sans)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paths */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-4">
            Enterprise Solutions
          </p>
          <h2 className="reveal text-3xl md:text-4xl text-[#1a1a1a] leading-tight mb-12">
            Choose a path for your supplier base.
          </h2>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {paths.map((path) => (
              <div
                key={path.name}
                className={`rounded-2xl p-8 bg-[#faf9f7] border flex flex-col h-full ${
                  path.recommended ? "border-[#f57214] shadow-sm" : "border-[#e5e0d8]"
                }`}
              >
                {path.recommended && (
                  <span className="inline-block self-start text-xs font-semibold uppercase tracking-widest text-white bg-[#f57214] rounded-full px-3 py-1 mb-4 font-[family-name:var(--font-open-sans)]">
                    Most popular
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-2">{path.name}</h3>
                <p className="text-base text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)] mb-6 min-h-[3rem]">
                  {path.summary}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {path.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm text-[#1a1a1a] leading-relaxed font-[family-name:var(--font-open-sans)]"
                    >
                      <span className="text-[#f57214] shrink-0 mt-0.5">&#10003;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-3xl md:text-4xl text-[#f57214] mt-auto">{path.price}</p>
              </div>
            ))}
          </div>

          <p className="reveal mt-8 text-sm text-[#8a8178] font-[family-name:var(--font-open-sans)]">
            More information on Clarity University&reg; single seats is available on the{" "}
            <Link href="/clarity-university" className="text-[#f57214] hover:text-[#1a1a1a] transition-colors">
              Clarity University page
            </Link>
            . Terms and conditions apply.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to change the way your suppliers reach market-ready status&mdash;and be able to track it?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Contact Bradley Pierce to build a path for your supplier base.
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:Bradley.Pierce@jayneagency.com"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg bg-[#f57214] text-white rounded-lg transition-all duration-300"
            >
              Bradley.Pierce@jayneagency.com
            </a>
            <a
              href="https://form.typeform.com/to/Bsx0IpzP"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Book a call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
