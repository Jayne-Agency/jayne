"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ClarityUniversity() {
  useScrollReveal();

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] opacity-0 animate-fade-in mb-8">
            Clarity University
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] opacity-0 animate-fade-in animation-delay-100 font-[family-name:var(--font-open-sans)]">
            MBA-level brand strategy education + hands-on guidance for solopreneurs, small business, and early stage startups.
          </p>
        </div>
      </section>

      {/* Recognize Any of These? */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-16">
            Recognize Any of These?
          </h2>

          <div className="space-y-12">
            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#1a1a1a] mb-2">Feeling Disconnected?</p>
              <p className="text-xl md:text-2xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Struggling to resonate with your audience?</p>
            </div>

            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#1a1a1a] mb-2">Lost for Words?</p>
              <p className="text-xl md:text-2xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Don&apos;t have a strong 11-second elevator pitch?</p>
            </div>

            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#1a1a1a] mb-2">Market Shifts?</p>
              <p className="text-xl md:text-2xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Finding it hard to adapt your messaging to changing customer needs?</p>
            </div>

            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#1a1a1a] mb-2">Content Creation Struggles?</p>
              <p className="text-xl md:text-2xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Difficulty in crafting engaging, relevant content?</p>
            </div>

            <div className="reveal">
              <p className="text-2xl md:text-3xl text-[#1a1a1a] mb-2">Feeling the pressure of Time and Money?</p>
              <p className="text-xl md:text-2xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Don&apos;t Know Where to Start?</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
