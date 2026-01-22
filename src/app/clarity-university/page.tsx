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

      {/* Content */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-xl md:text-2xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">
            Coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
