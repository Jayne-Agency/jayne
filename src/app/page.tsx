import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Above the Fold - Tension + Recognition */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-20 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-[#767676] mb-6 opacity-0 animate-fade-in-up">
            Hi, we&apos;re Jayne.
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] leading-[1] tracking-tight text-[#1a1a1a] opacity-0 animate-fade-in-up animation-delay-100">
            Something changed.
          </h1>

          {/* Subtle scroll indicator */}
          <div className="mt-24 opacity-0 animate-fade-in-up animation-delay-400">
            <div className="inline-flex flex-col items-center text-[#a3a3a3]">
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* The Diagnosis */}
      <section className="py-32 lg:py-48 bg-[#faf9f7]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-6 mb-16">
            <p className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-snug">
              Maybe you felt it coming.
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-snug">
              Maybe it blindsided you.
            </p>
          </div>
          <p className="text-xl md:text-2xl text-[#767676] leading-relaxed">
            Either way, yesterday&apos;s story doesn&apos;t work anymore.
          </p>
        </div>
      </section>

      {/* The Failed Attempts */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-snug mb-16">
            You&apos;ve probably already tried to fix it.
          </h2>

          <div className="space-y-4 text-lg md:text-xl text-[#a3a3a3]">
            <p>Hired the marketing people.</p>
            <p>Refreshed the logo.</p>
            <p>Spent money on things that felt like progress but weren&apos;t.</p>
          </div>
        </div>
      </section>

      {/* The Reframe */}
      <section className="py-32 lg:py-48 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-base md:text-lg text-[#a3a3a3] mb-16 leading-relaxed">
            Here&apos;s what we&apos;ve learned after 17 years and thousands of businesses:
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-tight mb-4">
            The problem isn&apos;t your marketing.
          </h2>

          <p className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-tight">
            It&apos;s your <span className="text-[#ff6b00] italic">alignment.</span>
          </p>
        </div>
      </section>

      {/* The Examples - Staggered Layout */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-32 lg:space-y-40">
          {/* Example 1 - Left aligned */}
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-[#767676] leading-relaxed mb-6">
              When your team can&apos;t explain what you do in the same way twice—
            </p>
            <p className="text-base md:text-lg text-[#a3a3a3] mb-3">that&apos;s not a messaging problem.</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a]">
              It&apos;s a <span className="font-semibold">strategy</span> problem.
            </p>
          </div>

          {/* Example 2 - Right aligned */}
          <div className="max-w-2xl ml-auto text-right">
            <p className="text-xl md:text-2xl text-[#767676] leading-relaxed mb-6">
              When you keep attracting the wrong clients and losing the right ones—
            </p>
            <p className="text-base md:text-lg text-[#a3a3a3] mb-3">that&apos;s not a sales problem.</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a]">
              It&apos;s a <span className="font-semibold">positioning</span> problem.
            </p>
          </div>

          {/* Example 3 - Left aligned */}
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-[#767676] leading-relaxed mb-6">
              When growth stalls and you can&apos;t figure out what to do next—
            </p>
            <p className="text-base md:text-lg text-[#a3a3a3] mb-3">that&apos;s not a tactics problem.</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a]">
              It&apos;s a <span className="font-semibold">clarity</span> problem.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-32 lg:py-48 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white leading-tight mb-12">
            We work with visionaries who know they&apos;re on the brink of something—
          </h2>

          <p className="text-xl md:text-2xl lg:text-3xl text-[#ff6b00] italic mb-12">
            a transaction, a transition, a transformation—
          </p>

          <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
            but can&apos;t quite name what&apos;s broken or how to move forward.
          </p>
        </div>
      </section>

      {/* The Promise */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-tight mb-4">
            We help you name the problem.
          </h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-tight mb-20">
            Then we build the path through it.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium bg-[#1a1a1a] text-white rounded-full hover:bg-[#ff6b00] transition-all duration-300"
          >
            Let&apos;s talk
          </Link>
        </div>
      </section>

      {/* The Pathways */}
      <section id="offerings" className="py-24 lg:py-32 bg-[#faf9f7]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Strategy Partnership */}
            <Link href="/work-with-us/strategy-partnership" className="group bg-white p-8 lg:p-10 rounded-2xl hover:shadow-lg transition-all duration-300 border border-[#e5e3df] hover:border-[#ff6b00]/30">
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors mb-4">
                Strategy Partnership
              </h3>
              <p className="text-[#767676] mb-6 leading-relaxed">
                For organizations $50K–$4B navigating transactions, transitions, and transformations.
              </p>
              <span className="inline-flex items-center text-[#ff6b00] font-medium">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Clarity University */}
            <Link href="/work-with-us/clarity-university" className="group bg-white p-8 lg:p-10 rounded-2xl hover:shadow-lg transition-all duration-300 border border-[#e5e3df] hover:border-[#ff6b00]/30">
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors mb-4">
                Clarity University
              </h3>
              <p className="text-[#767676] mb-6 leading-relaxed">
                For founders and CEOs who need the methodology on their timeline and budget.
              </p>
              <span className="inline-flex items-center text-[#ff6b00] font-medium">
                Explore courses
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Strategy Sprint */}
            <Link href="/work-with-us/strategy-sprint" className="group bg-white p-8 lg:p-10 rounded-2xl hover:shadow-lg transition-all duration-300 border border-[#e5e3df] hover:border-[#ff6b00]/30">
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] group-hover:text-[#ff6b00] transition-colors mb-4">
                Strategy Sprint
              </h3>
              <p className="text-[#767676] mb-6 leading-relaxed">
                For growing businesses ready to solve their most critical challenge—fast.
              </p>
              <span className="inline-flex items-center text-[#ff6b00] font-medium">
                See how it works
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* The Close */}
      <section className="py-32 lg:py-48 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white leading-tight mb-8">
            Change is coming whether you&apos;re ready or not.
          </h2>

          <p className="text-lg md:text-xl text-white/50 mb-4">
            The question is:
          </p>

          <p className="text-2xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-[#ff6b00] italic">
            Will you steer it, or will it steer you?
          </p>
        </div>
      </section>

    </>
  );
}
