"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
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
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-[#6b6b6b] mb-6 opacity-0 animate-fade-in">
            Hi, we&apos;re Jayne.
          </p>
          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] leading-[1] tracking-tight text-[#1a1a1a] opacity-0 animate-fade-in animation-delay-100">
            Something changed.
          </h1>
        </div>
      </section>

      {/* The Diagnosis */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center reveal-stagger">
          <p className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-snug mb-4">
            Maybe you felt it coming.
          </p>
          <p className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-snug mb-12">
            Maybe it blindsided you.
          </p>
          <p className="text-lg md:text-xl text-[#6b6b6b]">
            Either way, yesterday&apos;s story doesn&apos;t work anymore.
          </p>
        </div>
      </section>

      {/* The Failed Attempts */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="reveal text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-snug mb-12">
            You&apos;ve probably already tried to fix it.
          </h2>
          <div className="reveal-stagger text-lg md:text-xl text-[#6b6b6b] space-y-2">
            <p>Hired the marketing people.</p>
            <p>Refreshed the logo.</p>
            <p>Spent money on things that felt like progress but weren&apos;t.</p>
          </div>
        </div>
      </section>

      {/* The Reframe */}
      <section className="py-32 lg:py-48 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="reveal text-sm md:text-base text-[#6b6b6b] uppercase tracking-widest mb-12">
            After 17 years and thousands of businesses
          </p>
          <div className="reveal">
            <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.1] mb-4">
              The problem isn&apos;t your marketing.
            </h2>
            <p className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.1]">
              It&apos;s your <span className="text-[#ff6b00] italic">alignment.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Three Problems */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-24 lg:space-y-32">

          <div className="reveal">
            <p className="text-lg md:text-xl text-[#6b6b6b] mb-4">
              When your team can&apos;t explain what you do in the same way twice—that&apos;s not a messaging problem.
            </p>
            <p className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a]">
              It&apos;s a <span className="text-[#ff6b00]">strategy</span> problem.
            </p>
          </div>

          <div className="reveal text-right">
            <p className="text-lg md:text-xl text-[#6b6b6b] mb-4">
              When you keep attracting the wrong clients and losing the right ones—that&apos;s not a sales problem.
            </p>
            <p className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a]">
              It&apos;s a <span className="text-[#ff6b00]">positioning</span> problem.
            </p>
          </div>

          <div className="reveal">
            <p className="text-lg md:text-xl text-[#6b6b6b] mb-4">
              When growth stalls and you can&apos;t figure out what to do next—that&apos;s not a tactics problem.
            </p>
            <p className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a]">
              It&apos;s a <span className="text-[#ff6b00]">clarity</span> problem.
            </p>
          </div>

        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-32 lg:py-48 px-6">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-snug mb-8">
            We work with leaders who know they&apos;re on the brink of something—
          </h2>
          <p className="text-xl md:text-2xl text-[#ff6b00] italic mb-8 font-[family-name:var(--font-playfair)]">
            a transaction, a transition, a transformation
          </p>
          <p className="text-lg md:text-xl text-[#6b6b6b]">
            —but can&apos;t quite name what&apos;s broken or how to move forward.
          </p>
        </div>
      </section>

      {/* The Promise */}
      <section className="py-32 lg:py-48 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="reveal text-sm md:text-base text-[#6b6b6b] uppercase tracking-widest mb-12">
            What we do
          </p>
          <div className="reveal">
            <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.1] mb-4">
              We help you name the problem.
            </h2>
            <p className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.1]">
              Then we build the path through it.
            </p>
          </div>
          <div className="reveal mt-16">
            <Link
              href="/contact"
              className="inline-block px-10 py-5 text-lg font-medium bg-[#1a1a1a] text-white rounded-full hover:bg-[#ff6b00] transition-colors duration-300"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </section>

      {/* The Pathways */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

            <Link href="/work-with-us/strategy-partnership" className="group">
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors mb-4">
                Strategy Partnership
              </h3>
              <p className="text-[#6b6b6b] mb-4">
                For organizations navigating transactions, transitions, and transformations.
              </p>
              <span className="text-[#ff6b00] text-sm font-medium">
                Learn more →
              </span>
            </Link>

            <Link href="/work-with-us/clarity-university" className="group">
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors mb-4">
                Clarity University
              </h3>
              <p className="text-[#6b6b6b] mb-4">
                For founders and CEOs who need the methodology on their timeline.
              </p>
              <span className="text-[#ff6b00] text-sm font-medium">
                Explore courses →
              </span>
            </Link>

            <Link href="/work-with-us/strategy-sprint" className="group">
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors mb-4">
                Strategy Sprint
              </h3>
              <p className="text-[#6b6b6b] mb-4">
                For growing businesses ready to solve their most critical challenge.
              </p>
              <span className="text-[#ff6b00] text-sm font-medium">
                See how it works →
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* The Close */}
      <section className="py-32 lg:py-48 px-6 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] text-white leading-tight mb-6">
            Change is coming whether you&apos;re ready or not.
          </h2>
          <p className="text-lg text-white/50 mb-3">
            The question is:
          </p>
          <p className="text-2xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#ff6b00] italic mb-12">
            Will you steer it, or will it steer you?
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 text-lg font-medium bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-colors duration-300"
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
