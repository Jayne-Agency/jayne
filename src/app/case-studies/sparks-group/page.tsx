"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function SparksGroupCaseStudy() {
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

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#8a8178] hover:text-[#f57214] transition-colors mb-8"
          >
            <span className="transition-transform duration-300 hover:-translate-x-1">←</span>
            All Case Studies
          </Link>
          <p className="text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
            Sparks Group SPS
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            How does a company with no marketing materials scale nationally?
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            SPS was the only female-owned national contract sanitation provider. They had the operations. They had nothing to show for it.
          </p>
        </div>
      </section>

      {/* The Question */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4">
              The question wasn&apos;t
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-relaxed line-through decoration-[#f57214]/50 mb-8">
              &ldquo;how do we market our services?&rdquo;
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4">
              It was
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              &ldquo;how do we create brand materials that support national scaling?&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-12">
            The approach
          </p>
          <div className="reveal-stagger space-y-12">
            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">01</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The Problem</h3>
              <p className="text-xl text-[#8a8178]">Create brand materials that support national scaling.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The Solution</h3>
              <p className="text-xl text-[#8a8178]">Align leadership on position and promise. Build the full brand platform—strategy, identity, naming, trademark, website, social strategy, and content. Operate as a fractional CMO integrated across internal and external efforts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#f57214] uppercase tracking-widest mb-12">
            The result
          </p>
          <div className="reveal">
            <div className="text-6xl md:text-7xl lg:text-8xl text-[#f57214] leading-none mb-4">
              Multi-Year
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16">
              growth partnership established
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">Fractional</div>
              <p className="text-lg text-[#8a8178]">CMO services ongoing</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">Integrated</div>
              <p className="text-lg text-[#8a8178]">team environment between organizations</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">Scalable</div>
              <p className="text-lg text-[#8a8178]">foundation for repeatable growth</p>
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
            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Brand presence</h3>
              <p className="text-xl text-[#8a8178]">From zero materials to complete platform.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Growth capability</h3>
              <p className="text-xl text-[#8a8178]">Can now pursue new plants and partnerships with credibility.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Operational integration</h3>
              <p className="text-xl text-[#8a8178]">Marketing aligned with business development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kicker */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Now when they walk into the room,
            </p>
            <p className="text-3xl md:text-4xl text-[#8a8178] leading-snug mt-2">
              they have something to show.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to build your brand foundation?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about how we can make that happen.
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
