import Link from "next/link";

export default function StrategyPartnership() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-[#1a1a1a] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        {/* Large decorative element */}
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-32">
          <div className="max-w-4xl">
            <Link href="/work-with-us" className="inline-flex items-center text-[#ff6b00] hover:text-[#ff8c3a] mb-8 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Work With Us
            </Link>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
              For Enterprise
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] leading-[0.95] text-white mb-8">
              Strategy<br /><span className="italic text-[#ff6b00]">Partnership</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed">
              Deep, ongoing partnership for established enterprises navigating complex markets. Guaranteed outcomes, built for scale.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.1] mb-6">
                  Who it&apos;s for
                </h2>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg text-[#666666] leading-relaxed">
                Strategy Partnership is designed for established enterprises with complex challenges that require sustained strategic attention. You&apos;re not looking for a one-time project—you need an ongoing partner who understands your business deeply.
              </p>
              <p className="text-lg text-[#666666] leading-relaxed">
                This is ideal if you&apos;re navigating competing priorities across multiple business units, managing brand architecture challenges, or need executive-level strategic counsel on an ongoing basis.
              </p>
              <p className="text-xl text-[#1a1a1a] font-semibold leading-relaxed">
                If your decisions impact millions in revenue and you need a partner who can keep pace with your complexity, this is for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-16">
            What&apos;s included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Dedicated Strategy Team</h3>
              <p className="text-[#666666]">A dedicated team of senior strategists who know your business inside and out, available when you need them.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Executive Advisory</h3>
              <p className="text-[#666666]">Direct access to our senior leadership for high-stakes decisions and board-level presentations.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Comprehensive Brand Strategy</h3>
              <p className="text-[#666666]">Full-scope brand strategy including positioning, architecture, messaging, and go-to-market planning.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Guaranteed Outcomes</h3>
              <p className="text-[#666666]">We tie our success to yours with performance guarantees and measurable business outcomes.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Ongoing Optimization</h3>
              <p className="text-[#666666]">Continuous refinement based on market feedback, competitive shifts, and business performance data.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Team Enablement</h3>
              <p className="text-[#666666]">Training and workshops to ensure your internal teams can execute and maintain strategic alignment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6 text-white">
            Ready for a strategic partner?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how a Strategy Partnership can help your enterprise achieve its most ambitious goals.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
          >
            Schedule a Conversation
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
