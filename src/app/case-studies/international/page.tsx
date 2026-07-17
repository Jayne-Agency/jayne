"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function InternationalCaseStudy() {
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
            International
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            When it&apos;s a win-win&hellip; &amp; <em>another</em> win.
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              With limited resources and increased demand on performance, International wanted to start from the inside out to strengthen their supply chain by developing businesses to protect market share, options, capabilities and services.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Developing suppliers became a greater pressure than ever before. Yet, leadership was aware each supplier needed the same careful attention&mdash;often for different reasons.
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Custom programming</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Leverage the bones of existing custom education (saves on cost <em>and</em> time) to allow for a mindful approach designed for International&apos;s suppliers.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Mastery of the methodology</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Workbook, neuropsyche tested exercises and open &ldquo;classroom&rdquo; synchronous and asynchronous learning allowed for fast paced, deep dive learning.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Immediate impact</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Leveraging proven methodologies, the International suppliers were able to quickly master their 11 Second Elevator pitches, and Jayne Agency tools allowed for tangible measurements of the overall investment in the suppliers and their development.</p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Supplier awareness of the 10 assets of their brand</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Sentiment moved from &ldquo;Hesitant&rdquo; to &ldquo;Confident&rdquo; within a 1 hour period for 90% of the cohort.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Founders and CEOs with validation</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Each participant was able to identify the difference between a goal, objective and a position and promise by the time the session was over.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">International suppliers connected with their evidence based &ldquo;Why&rdquo;</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">By using guided exercises for user centered design the entire cohort was able to reach back into time to define (and defend) their &ldquo;why&rdquo;.</p>
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
          <div className="reveal">
            <div className="text-4xl md:text-5xl lg:text-6xl text-[#f57214] leading-tight">
              Increased confidence in supplier pitching within the enterprise, and out.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to strengthen your brand position and promise by increasing the strength of those in your supply chain?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s get to work.
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
