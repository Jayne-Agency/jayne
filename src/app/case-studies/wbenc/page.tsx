"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function WBENCCaseStudy() {
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
            WBENC (Women&apos;s Business Enterprise National Council)
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            Everyone wants to be a pitch coach. Nobody wants to be an analytics party &ldquo;downer&rdquo; defining the sum total value (ROI) for contestants and people who attend the pitch based on brand metrics.
          </h1>
          <p className="text-3xl md:text-4xl text-[#f57214] leading-snug opacity-0 animate-fade-in animation-delay-200">
            Except us.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              WBENC Pitch Academy is a long-standing professional development program.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Because of its success, the program had grown to include non-certified SMBs, opening up an unprecedented need for brand support.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              As a result sponsors, judges, participants and reputable supply chains were looking for more.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              Our requirement: <span className="text-[#f57214]">&ldquo;Every brand involved needs to level up.&rdquo;</span>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Framing the Problem</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Many WBEs had invested in marketing. Websites, logos, presentation coaching, campaigns, but still struggled to articulate what made their business worth contracting, even after attending multiple development programs.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Solution</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">What gets measured, elevates. Attendance (highest ever). In-session surveys, open-ended submissions, participation, engagement, transformation, feedback loops and readiness.</p>
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
              800+
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">
              WBEs elevated through the program
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Tangible brand clarity</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">WBENC staff and programming team were able to speak to the transformation with qualitative and quantitative data. Every pitch on a national stage was BETTER. Everyone was prepared, on time and had a clear ask of the room. Judges had never been happier.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Gateway protection</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">For the WBEs, for the WBENC brand, for sponsors, for participants. &ldquo;Pitches are gateways, and if you don&apos;t know what you&apos;re inviting into the gateway, you can&apos;t protect your brand.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to define success metrics for your brand?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about what you actually want to say.
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
