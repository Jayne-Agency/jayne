"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PalletTraderCaseStudy() {
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
            PalletTrader &mdash; A Bettaway Supply Chain Company
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            Supporting a founder to disrupt (not just poke) an entire industry.
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Pallets move nearly everything that ships on a truck. Yet outside of the biggest operations, they&apos;re treated like a commodity&mdash;hard to track, hard to manage, easy to lose.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Bettaway Supply Chain&apos;s CEO was building a product to democratize that. They had a name that held sentimental meaning, ready to launch.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              The question Jayne was asked to answer: would it mean something to the market&mdash;and cause the <span className="text-[#f57214]">baseline disruption</span> the CEO envisioned?
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">User Research</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Testing the beloved name, alongside the top options Jayne ideated, through user research allowed Jayne to evaluate each option against the same eight criteria: strategic alignment, usability, virality, ownability, likability, memorability, competitive threat, and IP legitimacy.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Following the data, not the sentiment</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">The original name held up&mdash;landing in the top three. But one name scored higher, clearly and consistently, across every measure that mattered to the market.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Building an award-winning identity</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Once the strategic winner was cleared legally for ownership, the creative team generated an agreed-upon mood board and concept statement, which allowed the team to lead the client to easily evaluate 30 visual directions, narrow down to 5, and eliminate&mdash;until three strong options remained, and one final answer stood clear. It went through the trademark process and was rolled out nationally, digitally, and embedded into the product.</p>
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
              1
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-16 font-[family-name:var(--font-open-sans)]">
              award-winning identity and tagline
            </p>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">300</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">sketches generated</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl text-[#f57214] mb-2">20</div>
              <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">initial designs developed</p>
            </div>
          </div>

          <div className="reveal border-t border-[#e5e0d8] pt-8">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              A powerful brand that has changed how pallets are bought, sold, tracked&mdash;<span className="text-[#f57214]">TRADED.</span>
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">A Name That Works Everywhere</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">&ldquo;PalletTrader&rdquo; was ownable, and protected legally. It scored as the clear winner on usability, virality, ownability, likability, competitive threat, and IP legitimacy&mdash;and could be defended to anyone on the globe.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">A Founder Who Trusted the Process</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">He trusted it more than his own attachment. The research didn&apos;t dismiss his instinct. It gave him a reason to move past it, and a stronger idea to move toward.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">A Brand Built to Adopt and Disrupt</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Because every name, then logo and tagline, went through the same evaluation criteria, the final identity wasn&apos;t a matter of taste. It was the answer needed to launch an innovation, challenge conventional industry thinking, and disrupt an entire category&mdash;creating the adoption needed to set Bettaway Supply Chain up as a market leader.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to fall in love with the right idea for the right reasons?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s talk about how to make what you envision become legally protected and real.
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
