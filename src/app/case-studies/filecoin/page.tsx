"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FilecoinCaseStudy() {
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
            Filecoin
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            The proof was irrefutable, the story needed some humanizing.
          </h1>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Filecoin launched in 2020 with a cryptographic proof system no competitor could replicate and a story almost no one outside Web3 could understand.
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              RWO spent four years building the content engine that changed that.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <div>
              <p className="text-sm text-[#8a8178] font-[family-name:var(--font-open-sans)] mb-1 uppercase tracking-wider">Storage utilization</p>
              <div className="text-3xl md:text-4xl text-[#f57214] mb-1">18% &rarr; 30%</div>
              <p className="text-sm text-[#8a8178] font-[family-name:var(--font-open-sans)]">Q4 2023 to Q3 2024</p>
            </div>
            <div>
              <p className="text-sm text-[#8a8178] font-[family-name:var(--font-open-sans)] mb-1 uppercase tracking-wider">Orbit events reported on</p>
              <div className="text-3xl md:text-4xl text-[#f57214] mb-1">136</div>
              <p className="text-sm text-[#8a8178] font-[family-name:var(--font-open-sans)]">Across 21 countries in 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quotes */}
      <section className="pt-8 pb-24 lg:pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              RWO built the content engine of a lifetime &mdash; one worthy of driving adoption of the network &mdash; worthy of storing humanity&apos;s most important datasets and information.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug">
              An unbelievable case study on teammanship, volume, mainstream media, and fintech as we know it.
            </p>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            The RWO approach
          </p>
          <div className="reveal-stagger space-y-12">
            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">01</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The problem</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">When Filecoin&apos;s mainnet launched in October 2020, they were the only storage provider that could claim daily cryptographic proof that every byte of stored data exists, is intact, and is retrievable. Except no one but the engineers who built it understood what that meant. The community was growing fast inside Web3. Outside of it, the story was hard to digest because most people don&apos;t speak &ldquo;Web3.&rdquo;</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">02</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">The solution</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">RWO built a strategy-first content engine designed to rapidly, clearly and simply translate Filecoin&apos;s proof mechanisms into stories that researchers, enterprise IT teams, policy makers, and storage clients could understand and rally behind. The content strategy spanned every channel where Filecoin&apos;s audiences lived&mdash;identifying the highest-leverage narratives: data verifiability, storage provenance, and the growing intersection of AI and decentralized infrastructure. From there, RWO coordinated content creation, marketing best-practices, set publishing cadences, and tracked KPIs continuously, building brand awareness and genuine community in parallel.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">03</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-4">The channels</h3>
              <ul className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)] space-y-2">
                <li>Content strategy</li>
                <li>Twitter / X campaigns</li>
                <li>Whitepaper development</li>
                <li>Podcast production</li>
                <li>Social media management</li>
                <li>KPI tracking</li>
                <li>Newsletters</li>
              </ul>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">04</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-6">What changed</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-[#f57214] font-[family-name:var(--font-open-sans)] mb-2">New audiences reached</h4>
                  <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Filecoin found audiences it had never spoken to before and invited them into the ecosystem. People who never understood what distributed storage was, or why it was pertinent to the broader conversation around verifiable storage, began joining the conversation.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#f57214] font-[family-name:var(--font-open-sans)] mb-2">Existing community fortification</h4>
                  <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Followers became participants. Participants became advocates. Advocates became partners.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#f57214] font-[family-name:var(--font-open-sans)] mb-2">Brand awareness</h4>
                  <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">Filecoin and Filecoin Foundation built a consistent, recognizable presence.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#f57214] font-[family-name:var(--font-open-sans)] mb-2">Engagement</h4>
                  <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">A content system that consistently performed and performed and performed and performed and performed.</p>
                </div>
              </div>
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
              60%
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] mb-4 font-[family-name:var(--font-open-sans)]">
              growth in data utilization
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <blockquote className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-6">
              &ldquo;Read Write Own has helped us reach new audiences and foster a genuine community among our existing followers. The team is both responsive and proactive, providing top-notch social media strategies that have boosted our brand awareness and engagement.&rdquo;
            </blockquote>
            <p className="text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">
              &mdash; Rachel Green Horn, Director of Marketing and Communications, Filecoin Foundation, 2023
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to give your technology the story it deserves?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10 font-[family-name:var(--font-open-sans)]">
            Let&apos;s build it.
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
