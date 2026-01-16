"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function EverTecCaseStudy() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const approachData = [
    {
      whatWeDid: "Counseled founders and leadership on research clarity",
      whatItCreated: "Alignment across ownership, marketing, and sales",
    },
    {
      whatWeDid: "Embedded as an extension of the Pregis marketing team",
      whatItCreated: "Strategic partnership with CMO, SVP, and product innovator",
    },
    {
      whatWeDid: "Pivoted the Amazon pitch from eco to durability",
      whatItCreated: "Harder-hitting narrative for all stakeholders",
    },
    {
      whatWeDid: "Created focus and alignment before acquisition",
      whatItCreated: "Transaction value increased by industry-watershed multiples",
    },
    {
      whatWeDid: "Secured evidence-based brand positioning",
      whatItCreated: "Largest single-source packaging volume in Amazon history",
    },
  ];

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 text-[#8a8178] hover:text-[#f57214] transition-colors mb-8"
          >
            <span className="transition-transform duration-300 hover:-translate-x-1">←</span>
            All Results
          </Link>
          <p className="text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
            Pregis EverTec
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            What happens when you discover your product&apos;s real value?
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            From eco-friendly promise to durability powerhouse.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              In the vortex of a pandemic, a multi-million dollar deal, and public outrage at packaging waste.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug">
              The sale of TMS EcoMailer to Pregis was an industry watershed.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              But the product&apos;s <span className="text-[#f57214]">true value</span> was hiding in plain sight.
            </p>
          </div>
        </div>
      </section>

      {/* Complication */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="reveal flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            <div className="flex-1 bg-white border border-[#e5e0d8] rounded-2xl p-8 md:p-12">
              <p className="text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-6">
                The complication
              </p>
              <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4">
                Everyone assumed the value was
              </p>
              <p className="text-2xl md:text-3xl text-[#8a8178] leading-relaxed line-through decoration-[#f57214]/50 mb-8">
                &ldquo;eco-friendly packaging.&rdquo;
              </p>
              <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4">
                The research revealed something different:
              </p>
              <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
                &ldquo;Customers would pay more for <span className="text-[#f57214]">durability</span>.&rdquo;
              </p>
            </div>
            <div className="hidden lg:block shrink-0 w-32">
              <Image
                src="/top tangle.png"
                alt="Tangled complexity"
                width={128}
                height={180}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal bg-white border border-[#e5e0d8] rounded-2xl p-8 md:p-12">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-8">
              The eco-friendly promise was <span className="text-[#f57214]">tolerated</span> by distributors and retailers—but not at a higher price point.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              What they would pay more for? Less breakage. Fewer returns. Longer customer lifetime value.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach - Two Column Table */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-12">
            The approach
          </p>
          <div className="reveal bg-[#f8f6f3] rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#e5e0d8]">
              <div className="px-8 py-6">
                <h3 className="text-xl md:text-2xl text-[#1a1a1a] font-semibold">What We Did</h3>
              </div>
              <div className="px-8 py-6 md:border-l border-[#e5e0d8]">
                <h3 className="text-xl md:text-2xl text-[#1a1a1a] font-semibold">What It Created</h3>
              </div>
            </div>
            {/* Table Rows */}
            {approachData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 ${
                  index !== approachData.length - 1 ? "border-b border-[#e5e0d8]" : ""
                }`}
              >
                <div className="px-8 py-6">
                  <p className="text-lg md:text-xl text-[#1a1a1a] leading-relaxed">{row.whatWeDid}</p>
                </div>
                <div className="px-8 py-6 md:border-l border-[#e5e0d8]">
                  <p className="text-lg md:text-xl text-[#8a8178] leading-relaxed">{row.whatItCreated}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="reveal flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-12">
                <p className="text-base md:text-lg text-[#f57214] uppercase tracking-widest">
                  Impact
                </p>
                <div className="hidden lg:block w-64">
                  <Image
                    src="/Arrow from Trevor.png"
                    alt="Untangled clarity"
                    width={256}
                    height={80}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="bg-white border border-[#e5e0d8] rounded-2xl p-8 md:p-12">
                <div className="text-7xl md:text-8xl lg:text-9xl text-[#f57214] leading-none mb-4">
                  80%
                </div>
                <p className="text-xl md:text-2xl text-[#8a8178] mb-16">
                  of small corrugated boxes displaced
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl md:text-5xl text-[#f57214] mb-2">100%</div>
                    <p className="text-lg text-[#8a8178]">rebrand engagement</p>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl text-[#f57214] mb-2">14+</div>
                    <p className="text-lg text-[#8a8178]">product line expansion</p>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl text-[#f57214] mb-2">#1</div>
                    <p className="text-lg text-[#8a8178]">Amazon protective packaging supplier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Changed */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-12">
            What changed
          </p>
          <div className="reveal-stagger space-y-8">
            <div className="bg-white border border-[#e5e0d8] rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Transaction value multiplied</h3>
              <p className="text-xl text-[#8a8178]">Clear alignment and focus prior to acquisition increased the transaction value for Warburg Pinkus in industry-watershed multiples.</p>
            </div>

            <div className="bg-white border border-[#e5e0d8] rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Amazon relationship transformed</h3>
              <p className="text-xl text-[#8a8178]">Became the largest volume of protective packaging purchased by Amazon from a single source provider in history.</p>
            </div>

            <div className="bg-white border border-[#e5e0d8] rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Commodity to solution</h3>
              <p className="text-xl text-[#8a8178]">Created billions of dollars of displacement and redirection from what was once a commodity to a 14+ product packaging solution line.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kicker */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              The product didn&apos;t change.
            </p>
            <p className="text-3xl md:text-4xl text-[#8a8178] leading-snug mt-2">
              The story did.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to discover your real value?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about what your customers actually want to pay for.
          </p>
          <div className="reveal">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Book a call
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
