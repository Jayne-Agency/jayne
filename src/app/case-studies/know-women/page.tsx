"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function KnowWomenCaseStudy() {
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
            The KNOW Women Book Naming
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            I want to unite my EMPIRE.
          </h1>
          <p className="text-3xl md:text-4xl text-[#f57214] leading-snug opacity-0 animate-fade-in animation-delay-200">
            Uniting local chapters into a single national product.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal-stagger space-y-8">
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Sarah Benken, CEO of The KNOW Women, was tangled inside of what every community-focused brand leader eventually faces when it&apos;s time to scale.
            </p>
            <p className="text-3xl md:text-4xl text-[#f57214] leading-snug italic">
              How do I UNITE my empire?
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              The KNOW Women, a media company dedicated to driving visibility to high achieving women, was launching a new strategy&mdash;uniting local KNOW Women chapters into a single NATIONAL PRODUCT.
            </p>
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              But what to <span className="text-[#f57214]">name it?</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Scope */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            The scope
          </p>
          <div className="reveal-stagger space-y-12">
            <div className="border-t border-[#e5e0d8] pt-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">5</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Cities consolidated</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">A national book launch consolidating the &ldquo;best of&rdquo; across Charlotte, Chicago, Houston, Phoenix, and Tampa.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <p className="text-5xl md:text-6xl text-[#f57214] mb-4">100s</p>
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Of women, businesses, and identities</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">To represent and celebrate in a single name.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            The problem
          </p>
          <div className="reveal-stagger space-y-8">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug">
              The hardest part of naming is letting go of the ideas that are <span className="text-[#f57214]">almost wickedly smart.</span>
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              (We worked through 500+ options.)
            </p>
            <p className="text-2xl md:text-3xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              Because almost wickedly smart is the enemy of a true breakthrough.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-lg md:text-xl text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-12">
            The solution
          </p>
          <div className="reveal">
            <p className="text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-6">
              All that and a bag of chips.
            </p>
            <p className="text-xl md:text-2xl text-[#8a8178] leading-snug font-[family-name:var(--font-open-sans)]">
              A proven methodology in developing naming criteria, naming best practices, built off of a proven brand strategy methodology&mdash;allowing the visionary and team members to &ldquo;try it on.&rdquo;
            </p>
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
              500+
            </div>
            <p className="text-xl md:text-2xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">
              names evaluated&mdash;one breakthrough chosen
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
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">A new product fit the portfolio</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">A new product came to market and fit cohesively into an existing, thriving portfolio.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Subjectivity, removed</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">The KNOW team went through a structured naming process&mdash;including the scoring criteria methodology&mdash;designed to remove subjectivity from decision making. By design, the team never defaulted to something mediocre under pressure.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">A clean launch</h3>
              <p className="text-xl text-[#8a8178] font-[family-name:var(--font-open-sans)]">The product launched cleanly. It integrated into the existing suite without an ounce of friction, and the KNOW Women audience welcomed the book with open arms&mdash;ecstatic about a new product that represented the growth of the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <span className="text-6xl lg:text-7xl text-[#f57214] leading-none font-serif">&ldquo;</span>
            <p className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug italic mt-4 mb-8">
              Jayne stuck with the naming project until we found the perfect name. The team did not let us settle for just ok, they were committed and I appreciate that. I loved the scoring process too! The book was well received. It feels like the perfect final addition to our print product suite.
            </p>
            <p className="text-base md:text-lg text-[#8a8178] font-[family-name:var(--font-open-sans)]">
              &mdash; Sarah Benken Foushee, Founder &amp; CEO, The KNOW Women
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            If you&apos;re somewhere between an idea and the right name for it, let&apos;s talk.
          </h2>
          <div className="reveal mt-10">
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
