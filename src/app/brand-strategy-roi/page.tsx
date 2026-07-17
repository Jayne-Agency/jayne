"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const tiers = [
  {
    name: "Diagnose",
    tagline: "“Brand” is a suspected bottleneck, but can you prove it?",
    investment: "$18–36K+",
    recommended: false,
    rows: [
      { label: "Timeline", value: "3–4 weeks" },
      { label: "Brand Intake Session", value: "1 full day" },
      { label: "Stakeholder interviews", value: "4–6" },
      { label: "Audiences", value: "1" },
      { label: "Culture survey", value: true },
      { label: "Insights & imperatives debrief", value: false },
      { label: "Platform pressure test", value: false },
      { label: "C-suite alignment workshop", value: false },
      { label: "Org-wide rollout", value: false },
    ],
  },
  {
    name: "Realign",
    tagline: "Strategy isn’t the workhorse it could be. Leadership needs to buy-in and giddy-up.",
    investment: "$40–68K+",
    recommended: true,
    rows: [
      { label: "Timeline", value: "6–8 weeks" },
      { label: "Brand Intake Session", value: "1 full day" },
      { label: "Stakeholder interviews", value: "6–8" },
      { label: "Audiences", value: "2" },
      { label: "Culture survey", value: true },
      { label: "Insights & imperatives debrief", value: true },
      { label: "Platform pressure test", value: true },
      { label: "C-suite alignment workshop", value: true },
      { label: "Org-wide rollout", value: false },
    ],
  },
  {
    name: "Transform",
    tagline: "The brand needs a new platform and it needs it rolled across board, staff, and agencies NOW.",
    investment: "$80–120K+",
    recommended: false,
    rows: [
      { label: "Timeline", value: "10–14 weeks" },
      { label: "Brand Intake Session", value: "2 days" },
      { label: "Stakeholder interviews", value: "9–12" },
      { label: "Audiences", value: "3" },
      { label: "Culture survey", value: true },
      { label: "Insights & imperatives debrief", value: true },
      { label: "Platform pressure test", value: true },
      { label: "C-suite alignment workshop", value: true },
      { label: "Org-wide rollout", value: true },
    ],
  },
];

const familiar = [
  "Leadership is frustrated. Selling the brand—the same way, every time—is complicated.",
  "The board is asking questions, but internal teams aren’t responding with confidence and conviction.",
  "A rebrand just isn’t moving the pipeline. Dependable, scalable, repeatable revenue feels out of grasp.",
];

const trustedBy = ["PepsiCo", "Eaton", "Red Cross", "Pregis", "Echo Global Logistics", "Nationwide"];

export default function BrandStrategyROI() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] opacity-0 animate-fade-in">
            Brand Strategy <em className="text-[#f57214]">ROI</em>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)] opacity-0 animate-fade-in animation-delay-100">
            One story, energized teams, engaged customers, a board that&apos;s supporting you all year long&mdash;and you&apos;ve got the hardcore metrics to prove it. That&apos;s what happens when leadership aligns the brand with what the business delivers day in and day out.
          </p>
          <p className="mt-6 text-sm md:text-base text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] opacity-0 animate-fade-in animation-delay-200">
            A proprietary, repeatable method &mdash; evidence based
          </p>
        </div>
      </section>

      {/* Sound familiar */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            Sound familiar?
          </p>
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-10">
            {familiar.map((text, i) => (
              <div key={i} className="border-t border-[#e5e0d8] pt-6">
                <p className="text-xl text-[#1a1a1a] leading-relaxed font-[family-name:var(--font-open-sans)]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included — tiers */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-4">
            What&apos;s included?
          </p>
          <h2 className="reveal text-3xl md:text-4xl text-[#1a1a1a] leading-tight mb-12 max-w-2xl">
            Choose the path that meets your brand where it is.
          </h2>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 bg-[#faf9f7] border ${
                  tier.recommended ? "border-[#f57214] shadow-sm" : "border-[#e5e0d8]"
                }`}
              >
                {tier.recommended && (
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white bg-[#f57214] rounded-full px-3 py-1 mb-4 font-[family-name:var(--font-open-sans)]">
                    Recommended
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">{tier.name}</h3>
                <p className="text-base text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)] mb-6 min-h-[4.5rem]">
                  {tier.tagline}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.rows.map((row) => (
                    <li
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 border-b border-[#e5e0d8] pb-3 font-[family-name:var(--font-open-sans)]"
                    >
                      <span className="text-sm text-[#1a1a1a]">{row.label}</span>
                      {typeof row.value === "boolean" ? (
                        row.value ? (
                          <span className="text-[#f57214] font-semibold shrink-0">&#10003;</span>
                        ) : (
                          <span className="text-[#c4bdb2] shrink-0">&mdash;</span>
                        )
                      ) : (
                        <span className="text-sm text-[#8a8178] text-right shrink-0">{row.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="text-xs uppercase tracking-widest text-[#8a8178] font-semibold font-[family-name:var(--font-open-sans)] mb-1">
                  Investment
                </p>
                <p className="text-3xl md:text-4xl text-[#f57214]">{tier.investment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="py-16 lg:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="reveal text-sm md:text-base text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6">
            Track record
          </p>
          <div className="reveal flex flex-wrap gap-x-8 gap-y-3 text-lg md:text-xl text-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
            <span>18 yrs</span>
            <span className="text-[#c4bdb2]">&middot;</span>
            <span>500+ engagements</span>
            <span className="text-[#c4bdb2]">&middot;</span>
            <span>$20K&ndash;$2B clients</span>
            <span className="text-[#c4bdb2]">&middot;</span>
            <span>Fortune 10s</span>
            <span className="text-[#c4bdb2]">&middot;</span>
            <span>4K hrs primary research</span>
          </div>

          <p className="reveal mt-12 text-sm md:text-base text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6">
            Trusted by
          </p>
          <div className="reveal flex flex-wrap gap-x-8 gap-y-3 text-xl md:text-2xl text-[#1a1a1a]">
            {trustedBy.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Let&apos;s name the problem and build a path through it to dependable, scalable, repeatable revenue.
          </h2>
          <div className="reveal mt-10">
            <a
              href="https://form.typeform.com/to/Bsx0IpzP"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
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
