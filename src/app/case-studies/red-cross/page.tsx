"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function RedCrossCaseStudy() {
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
            American Red Cross&reg;
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            How do we reposition the most recognized 501c3 around what people need most but expect least?
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              The American Red Cross had 4 pillars to its brand. The brand was losing support publicly, and financially. Disaster Relief (donation only) was the most known pillar, while preparedness (donation and a revenue stream) was struggling for engagement.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              People were not donating. And they also weren&apos;t engaging in purchasing preparedness tool kits or accepting the essential preparedness education and walk-throughs that volunteers all over the globe provided.
            </p>
          </div>
        </div>
      </section>

      {/* The Question */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-8 font-[family-name:var(--font-open-sans)]">
              Research showed something unexpected:
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug mb-8 font-[family-name:var(--font-open-sans)]">
              When asked, no one demonstrated rejecting preparedness training or tool kits. They weren&apos;t angry.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              They just didn&apos;t even recall <span className="text-[#f57214]">being asked</span>.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Preparedness as an overall pillar was invisible, hidden behind Relief, which was so public, and so visible.
            </p>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug mb-8 font-[family-name:var(--font-open-sans)]">
              Lost in the shadows of the dramatic impact AFTER disaster hits,
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug mb-4 font-[family-name:var(--font-open-sans)]">
              the question wasn&apos;t &ldquo;why don&apos;t you want to engage in Preparedness efforts&rdquo;.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              It was <span className="text-[#f57214]">&ldquo;Are you aware of how much risk you can prevent for your loved ones if you are prepared?&rdquo;</span>
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-4">
              The Preparedness Pillar wasn&apos;t failing because people didn&apos;t want it.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              It was invisible, lost in the shadow of a 98% recognized global brand, positioned for aftermath, vs. prevention.
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Global User Research</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">User centered research methodology drove carefully constructed custom surveys and interviews to prove out the brand platform and identify critical gaps that went undetected for years in standardized testing.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Inclusive Nuances</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Identify 3 critical gaps related to the crucial nuances of visible and invisible diversity - factors that did not factor from a marketing and communications perspective, but mattered a TON out in the field.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Strategic Imperatives</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Deep critical insights and strategic imperatives serve as a foothold - not just for Preparedness, but for the whole American Red Cross Brand.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">04</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Repositioning Preparedness</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Getting the whole organization prepared to consider let alone approve a repositioning made the difference in adoption and implementation, for staff, volunteers, partners, donors and beneficiaries.</p>
            </div>
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
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug mb-4">
              4 Words; 1 Tag Line; 100% Acceptance
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16 font-[family-name:var(--font-open-sans)]">
              95% engagement Global Community Impact
            </p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Understanding motivation</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">The preparedness education team now understands what motivates individuals to take steps to be better prepared before disasters and emergencies.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Applied knowledge</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Insights were applied directly to the Be Red Cross Ready program with measurable improvements.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Brand-wide foundation</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">The findings became a foothold for strengthening not just Preparedness, but the entire American Red Cross brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to reposition?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about finding the insights that standard testing misses.
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
