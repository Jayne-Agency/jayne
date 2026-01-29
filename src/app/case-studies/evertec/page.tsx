"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function EverTecCaseStudy() {
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
            Pregis EverTec
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            The only time half beats whole? When orders jump from $1 million to half a billion.
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              In the vortex of a pandemic and surging ecommerce demand, packaging waste became a global concern. Governments and consumers were pushing back hard. Environmental &ldquo;damage&rdquo; was piling up.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Pregis had a product with a 99% curbside recyclable promise. But research revealed distributors and retailers tolerated this feature&mdash;they didn&apos;t value it.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              User testing uncovered the real value hiding in plain sight: <span className="text-[#f57214]">durability</span>. Not sustainability.
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Frame the Problem</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Explaining the product itself was nearly impossible. Was it a durability play? The cardboard was already stocked. Was it an environmental claim? And that&apos;s where the power of naming comes in.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Naming Strategy</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">By pulling on the tenets of strategic naming, both the earth-friendly and durable technology became a single thought, solving multiple issues at once&mdash;replacing cardboard boxes on shelves and removing them from the waste stream, all in one name: EverTec.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Execute the Rebrand</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Swift rebranding from the working name to the EverTec brand with 100% engagement, full support of the sales and marketing teams, largest volume clients and end retailers, creating demand that far outpaced supply.</p>
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
              80%
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16 font-[family-name:var(--font-open-sans)]">
              of small corrugated boxes removed from waste stream
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">14</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">product lines and growing</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">500MM+</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">units sold</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">12+</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">Name and Brand Strategy awards</p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Strategic Clarity</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">By positioning a commodity as a solution the sales team was able to drive volume and relationship in mass.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Culture Alignment</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Brand pride due to the name and logo (representing a patented production process) created momentum needed to meet demands.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Market Position</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">What was once a commodity envelope was now a packaging solution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to unpack your value?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about what your customers actually want to pay for.
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
