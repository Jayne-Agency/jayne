"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PregisCaseStudy() {
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
            Pregis
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            How do you create alignment across 10+ product brands without losing what makes each one valuable?
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Pregis was known for protective packaging and had approximately 10 brands plus 2 programs (Insypre and Renew) and was preparing for growth.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              But nobody was listening. The marketing team was breaking under the pressure of serving so many masters in the face of growth while trying to maintain brand guidelines.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              It was a lot to untangle&mdash;sales versus marketing, legacy ownership, fiefdoms, favorites, side conversations...
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The Problem</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">A house of brands is expensive. A branded house has costs to it. They are different.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The Solution</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">For Pregis to break through $1B, they needed to ALIGN. 10+ brands and 2 programs needed to become One Pregis. Using urgency as the driver, we untangled conversations around turf, ownership, and sales, and facilitated strategy around brand, risk management, legacy, accountability, and ROI.</p>
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
            <div className="text-5xl md:text-7xl lg:text-9xl text-[#f57214] leading-none mb-4">
              1 Pregis
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16 font-[family-name:var(--font-open-sans)]">
              62% Growth
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Company Culture Accelerated</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Alignment went from being an overlooked commodity to a high value cultural collateral.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Increased Industry Awareness</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Participation and engagement at trade shows skyrocketed as &ldquo;One Pregis&rdquo; hit the trade show floor.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Marketing Made Simple</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">The internal marketing team went from being a support function to &ldquo;brand stewards&rdquo;, with a solid brand strategy, reimagined hierarchy, freshly updated style guide and updated protection for the brand mark.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to get your house in order?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about aligning your brands for growth.
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
