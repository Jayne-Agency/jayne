"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function EchoCaseStudy() {
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
            <span className="transition-transform duration-300 hover:-translate-x-1">←</span>
            All Case Studies
          </Link>
          <p className="text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-6 opacity-0 animate-fade-in">
            Echo Global Logistics
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            How do you shift culture inside and out and prove the ROI?
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Echo Global Logistics wanted to outrank their category market #1 leader.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              The top spot would cost more money than Echo, or anyone, could throw at it.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Echo decided the budget wasn&apos;t going to be the differentiator, or what stood in their way. They needed something money couldn&apos;t buy.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              And inside the company, things were getting complicated. Echo was merging two strong cultures, growing rapidly, and building out a brand-new sales hub all at once.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              AND, Sales, Customer Service, and Account Management had one job day after day, which was doing whatever it took to get every shipment from point A to point B.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Research Echo already had in hand showed its most valuable asset, its differentiator, wasn&apos;t their shipments.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              It was the people moving them. Employees who go above and beyond, just like everyday superheroes.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              The question wasn&apos;t &ldquo;how do we outspend the market leader?&rdquo; It was &ldquo;how do we make our people impossible to ignore?&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* The Work */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Jayne made Echo&apos;s real differentiator tangible and distinctly ownable.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Working hand-in-hand with Echo&apos;s internal marketing team, two cultures united over one promise of being the UNCOMPLICATORS.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Enter <em>The Uncomplicator and the Logistics League</em>. We launched one icon that extended across print, digital, social media, the website, and yes&mdash;three-dimensional bobbleheads.
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The problem</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Two merging cultures, a &ldquo;whatever it takes&rdquo; mandate up the chain, and a leaderboard publishers said couldn&apos;t be bought under any circumstance.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The solution</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Unite everyone behind one ownable promise&mdash;uncomplicating&mdash;and give it a face the entire industry could rally behind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-16 lg:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-8">
            The result
          </p>
          <div className="reveal-stagger space-y-8">
            <div>
              <div className="text-3xl md:text-4xl text-[#f57214] mb-1">#1</div>
              <p className="text-sm text-[#8a8178] font-[family-name:var(--font-open-sans)]">Top 3PL in the Inbound Logistics industry vote</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-[#f57214] mb-1">5 yrs</div>
              <p className="text-sm text-[#8a8178] font-[family-name:var(--font-open-sans)]">Holding first place</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-[#f57214] mb-1">3</div>
              <p className="text-sm text-[#8a8178] font-[family-name:var(--font-open-sans)]">Award shows won: Effie, MarCom Gold, The Drum Marketing Awards</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-[#f57214] mb-1">1.8K</div>
              <p className="text-sm text-[#8a8178] font-[family-name:var(--font-open-sans)]">Sales, account management, and customer service reps engaged</p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Bigger than a campaign</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">The tone, personality&mdash;and bobblehead&mdash;spread from Echo&apos;s own channels into the wider logistics industry and beyond.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">One unified culture</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Two formidable cultures became one iconic identity.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Built-in runway</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Five years on, Echo is still using elements of the campaign.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <blockquote className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-6">
              &ldquo;Jayne took our previously conducted market research and developed a campaign based on the consumer insight that our employees go above and beyond&mdash;like everyday superheroes. Then their creative team brought this insight to life with our Logistics League superheroes.&rdquo;
            </blockquote>
            <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">
              &mdash; Chris Clemmensen, SVP of Marketing, Echo Global Logistics
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to make your culture your competitive advantage?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about what your people make possible.
          </p>
          <div className="reveal">
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
