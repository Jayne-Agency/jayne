"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function AboutUs() {
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
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center pt-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
            About Us
          </p>
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] mb-8 opacity-0 animate-fade-in animation-delay-100">
            Making the world more <span className="italic text-[#f57214]">gooder.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8a8178] max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            We&apos;re strategists, storytellers, and builders who believe every business deserves radical clarity.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-3xl md:text-4xl text-[#1a1a1a] leading-snug mb-12">
            Our Story
          </h2>
          <div className="reveal-stagger space-y-8 text-xl text-[#8a8178] leading-relaxed">
            <p>
              Since 2009, Jayne Agency has served businesses across every industry, from startups to Fortune 50 companies. We&apos;ve equipped business leaders to build dependable, scalable, repeatable revenue through evidence-based strategies.
            </p>

            <p>
              Our journey began with a simple observation: too many businesses struggle not because they lack talent or ambition, but because they lack clarity. They don&apos;t know what makes them different. They can&apos;t articulate why they matter. And without that foundation, every marketing dollar is a gamble.
            </p>

            <p>
              So we built something different. A methodology refined over three decades of experience working within hundreds of brands. A team of Jayniacs—black belt strategists in branding, marketing, and user-experience—who demystify what &apos;brand&apos; and &apos;marketing&apos; really mean.
            </p>

            <p className="text-[#1a1a1a] text-2xl md:text-3xl leading-snug">
              We help founders and CEOs get clear on their strategy and then execute it effortlessly across their whole business.
            </p>

            <p>
              We boldly rebuilt what strategy looks like at every level: enterprise, SME, and those just getting started. Cutting the timeline, right-sizing the cost, and raising the bar on outcomes. Designed for business leaders who need to move fast and spend smart.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-6">
            Our principles
          </p>
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] mb-16">
            What we believe
          </h2>

          <div className="reveal-stagger space-y-12">
            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Clarity over complexity</h3>
              <p className="text-xl text-[#8a8178]">The best strategies are simple enough to remember and clear enough to act on. We cut through the noise to find your signal.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Evidence over opinion</h3>
              <p className="text-xl text-[#8a8178]">We don&apos;t guess. Every recommendation is backed by data, research, and proven frameworks that actually work.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Outcomes over outputs</h3>
              <p className="text-xl text-[#8a8178]">Pretty decks don&apos;t pay the bills. We measure success by the results we deliver, not the hours we bill.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Partnership over projects</h3>
              <p className="text-xl text-[#8a8178]">We&apos;re not vendors who disappear after delivery. We&apos;re partners invested in your long-term success.</p>
            </div>

            <div className="border-t border-[#e5e0d8] pt-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Bold over safe</h3>
              <p className="text-xl text-[#8a8178]">Playing it safe is the riskiest thing you can do. We help you make bold moves with confidence.</p>
            </div>

            <div className="border-t border-b border-[#e5e0d8] pt-8 pb-8">
              <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-3">Action over analysis</h3>
              <p className="text-xl text-[#8a8178]">Strategy without execution is just theory. We don&apos;t just plan—we help you move.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Jayniacs Section */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-base md:text-lg text-[#9d968c] uppercase tracking-widest mb-6">
            The Team
          </p>
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] mb-8">
            Meet the Jayniacs
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-16">
            We&apos;re a team of black belt strategists in branding, marketing, and user-experience. We eject bad advertising habits and deliver strategy based on the brand promise—the part of your story that&apos;s ownable, unmistakable, and crystal clear.
          </p>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl md:text-6xl text-[#f57214] mb-4">15+</div>
              <h3 className="text-xl text-[#1a1a1a] mb-3">Years in Business</h3>
              <p className="text-[#8a8178]">Serving organizations of all sizes since 2009.</p>
            </div>

            <div>
              <div className="text-5xl md:text-6xl text-[#f57214] mb-4">100s</div>
              <h3 className="text-xl text-[#1a1a1a] mb-3">Brands Served</h3>
              <p className="text-[#8a8178]">From startups to Fortune 50 companies.</p>
            </div>

            <div>
              <div className="text-5xl md:text-6xl text-[#f57214] mb-4">30+</div>
              <h3 className="text-xl text-[#1a1a1a] mb-3">Years of Experience</h3>
              <p className="text-[#8a8178]">Methodology refined over three decades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto reveal">
          <p className="text-3xl md:text-4xl lg:text-5xl italic text-[#1a1a1a] leading-tight">
            &ldquo;Brand clarity and alignment for all. That&apos;s not just our mission—it&apos;s our obsession.&rdquo;
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="reveal text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
            Ready to work together?
          </h2>
          <p className="reveal text-xl text-[#8a8178] mb-10">
            Let&apos;s talk about how we can help your business reach its most important goals.
          </p>
          <div className="reveal">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300"
            >
              Let&apos;s talk
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
