"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function WBENCCaseStudy() {
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
            WBENC
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            What if the real pitch problem isn&apos;t how you present—but what you say?
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            WBENC runs pitch competitions for women business owners. The pitches weren&apos;t landing. The problem wasn&apos;t delivery.
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
              &ldquo;how do we teach better presentation skills?&rdquo;
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-relaxed mb-4">
              It was
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              &ldquo;how do we give participants brand clarity before pitch training can work?&rdquo;
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
              <p className="text-xl text-[#8a8178]">Participants needed brand clarity before pitch training would work.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The Solution</h3>
              <p className="text-xl text-[#8a8178]">Develop the AMPLIFY curriculum—three sessions focused on message, voice, and delivery. Incorporate the 10 Assets methodology tested across 5,000+ brand platforms. Provide hands-on coaching through virtual sessions and onsite support at competitions.</p>
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
            <div className="text-7xl md:text-8xl lg:text-9xl text-[#f57214] leading-none mb-4">
              800+
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16">
              WBEs coached through the program
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">75</div>
              <p className="text-lg text-[#8a8178]">semi-finalists received group coaching</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">24</div>
              <p className="text-lg text-[#8a8178]">live contestants received real-time coaching</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">#1</div>
              <p className="text-lg text-[#8a8178]">best pitch series in WBENC history</p>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Pitch quality</h3>
              <p className="text-xl text-[#8a8178]">Every pitch was better than the last. Everyone was prepared, on time, with a clear ask.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Participant confidence</h3>
              <p className="text-xl text-[#8a8178]">Moved from hesitant to confident across the cohort.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Program reputation</h3>
              <p className="text-xl text-[#8a8178]">Elevated WBENC&apos;s brand through participant success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Kicker */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              The pitch is a gateway.
            </p>
            <p className="text-3xl md:text-4xl text-[#8a8178] leading-snug mt-2">
              Now they know what they&apos;re inviting through it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to find your clarity?
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
