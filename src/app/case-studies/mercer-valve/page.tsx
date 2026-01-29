"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MercerValveCaseStudy() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#8a8178] hover:text-[#f57214] transition-colors mb-8 font-[family-name:var(--font-open-sans)]"
          >
            <span className="transition-transform duration-300 hover:-translate-x-1">&larr;</span>
            All Case Studies
          </Link>
          <p className="text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6 opacity-0 animate-fade-in">
            Mercer Valve Co.
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            How do we protect a 36 year legacy from competitors stealing our story?
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              For 36 years, Mercer Valve Co. had been a premier provider of high-quality pressure relief valves, with a patent known as Auto Seat Technology&reg;.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              They&apos;d built it on the strength of their patented solution alone. No marketing. No brand investment.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Then competitors started claiming they sold <span className="text-[#f57214]">&ldquo;Mercer-like valves.&rdquo;</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Question */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4 font-[family-name:var(--font-open-sans)]">
              The problem wasn&apos;t product quality.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-relaxed mb-8 font-[family-name:var(--font-open-sans)]">
              The problem was that Mercer Valve Co. had become the <span className="text-[#f57214]">Kleenex of valves</span>&mdash;a benchmark everyone borrowed from.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Without a modern day marketing infrastructure and social presence, it was hard to protect what they&apos;d built in a highly competitive marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              Research revealed competitors were promoting <span className="text-[#f57214]">faulty products</span> using Mercer Valve Co.&apos;s credibility.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              By not branding themselves, Mercer Valve Co. was allowing their own reputation to sell someone else&apos;s failures.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            The approach
          </p>
          <div className="reveal-stagger space-y-12">
            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">01</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Define the brand</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Develop a brand that spoke to the power of safety as only Mercer Valve Co. could define it&mdash;backed by 36 years of protecting people, equipment, and communities.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Reclaim the position</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Develop sales and marketing strategies to reclaim the proven position of safety (as in life-saving) and the promise of reliability, both internally and externally (nationally and globally).</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Combat the perception</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Create campaigns that allow Mercer Valve Co. to compete on safety, lead times, testing, and repair services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Campaign */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              The campaign that emerged:
            </p>
            <p className="text-4xl md:text-5xl text-[#f57214] leading-snug italic">
              &ldquo;Because Safety Takes Time.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            The result
          </p>
          <div className="reveal">
            <div className="text-5xl md:text-7xl lg:text-9xl text-[#f57214] leading-none mb-4">
              95%
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16 font-[family-name:var(--font-open-sans)]">
              employee engagement
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">36</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">years of legacy protected</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">9+</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">years of ongoing partnership</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Changed */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            What changed
          </p>
          <div className="reveal-stagger space-y-8">
            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Defensible position</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Mercer Valve Co. now has a highly defensible position in the marketplace&mdash;competitors can no longer borrow their equity unchallenged.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Ongoing Sales Stabilization and Expansion</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Marketing and sales work hand in hand to identify purchasing gaps, customer needs, and service.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Integrated partnership</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Jayne Agency continues as Mercer Valve Co.&apos;s outsourced marketing arm, crafting messaging and creative that inspires employees, partners, and clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to protect what you&apos;ve built?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about reclaiming your rightful position.
          </p>
          <div className="reveal">
            <a
              href="https://form.typeform.com/to/Bsx0IpzP"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Book a call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
