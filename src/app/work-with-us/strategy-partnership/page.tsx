import Link from "next/link";

export default function StrategyPartnership() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center bg-[#1a1a1a] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Link href="/work-with-us" className="inline-flex items-center text-[#ff6b00] hover:text-[#ff8c3a] mb-8 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to all options
              </Link>
              <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
                For Enterprise
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[0.95] text-white mb-8">
                Strategy<br /><span className="italic text-[#ff6b00]">Partnership</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-xl leading-relaxed mb-8">
                Your dedicated strategic partner. Embedded with your team, aligned to your outcomes, guaranteed to deliver results.
              </p>
              <div className="flex flex-wrap gap-6 text-white/60">
                <div>
                  <span className="block text-3xl font-bold text-white">12</span>
                  <span className="text-sm">Month Minimum</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-white">$15K</span>
                  <span className="text-sm">/Month</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-white">ROI</span>
                  <span className="text-sm">Guaranteed</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-white mb-6">Schedule a Conversation</h3>
              <p className="text-white/60 mb-8">Let&apos;s discuss your strategic challenges and see if a Partnership makes sense for your organization.</p>
              <Link
                href="#"
                className="w-full inline-flex items-center justify-center px-8 py-5 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
              >
                Request a Meeting
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-center text-white/40 text-sm mt-4">Executive-level conversation. No sales pitch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Proof */}
      <section className="py-16 bg-[#0a0a0a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-2">$800MM</p>
              <p className="text-white/50">PepsiCo supplier diversity outcomes</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-2">83%</p>
              <p className="text-white/50">Campaign engagement rate</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-2">15+</p>
              <p className="text-white/50">Years partnering with enterprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-8">
                This is for you if...
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You&apos;re navigating <strong className="text-[#1a1a1a]">complex brand architecture</strong> across multiple business units</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">Your decisions <strong className="text-[#1a1a1a]">impact millions</strong> in revenue and brand equity</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You need a partner who can <strong className="text-[#1a1a1a]">keep pace with your complexity</strong></p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You want a team that&apos;s <strong className="text-[#1a1a1a]">accountable to outcomes</strong>, not just deliverables</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You can commit to a <strong className="text-[#1a1a1a]">12-month strategic relationship</strong></p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-8">
                This is NOT for you if...
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You need a one-time project (see Strategy Sprint)</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You want an order-taker, not a strategic advisor</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">Decision-making takes months of committee review</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You&apos;re under $20M revenue (see Strategy Sprint)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-6">
              What&apos;s Included
            </h2>
            <p className="text-xl text-[#666666]">Everything you need for sustained strategic excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Dedicated Strategy Team</h3>
              <p className="text-[#666666]">A senior strategist embedded with your team, supported by our full research and creative capabilities. They know your business inside out.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Executive Advisory</h3>
              <p className="text-[#666666]">Direct access to our leadership for board presentations, high-stakes decisions, and strategic counsel when it matters most.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Quarterly Strategy Sessions</h3>
              <p className="text-[#666666]">Deep-dive reviews to assess progress, refine direction, and ensure strategy adapts to market conditions.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Brand Architecture</h3>
              <p className="text-[#666666]">Comprehensive strategy across your portfolio—parent brand, sub-brands, product lines, and acquisitions.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Team Enablement</h3>
              <p className="text-[#666666]">Training and workshops to build internal strategic capability. We make your team better, not dependent.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Performance Guarantee</h3>
              <p className="text-[#666666]">We tie our success to measurable business outcomes. If we don&apos;t deliver, we work until we do—at no additional cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-6">
              The Investment
            </h2>
          </div>

          <div className="bg-[#1a1a1a] rounded-3xl p-10 lg:p-16 text-center">
            <p className="text-white/60 mb-4">Starting at</p>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-5xl md:text-6xl font-bold text-white">$15,000</span>
              <span className="text-xl text-white/60">/month</span>
            </div>
            <p className="text-white/60 mb-8">12-month minimum commitment</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">Dedicated strategist</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">Executive access</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">Quarterly reviews</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">Brand architecture</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">Team training</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">ROI guarantee</span>
              </div>
            </div>
            <p className="text-white/40 text-sm">Custom pricing available for larger engagements and multi-brand portfolios</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6 text-white">
            Let&apos;s talk about your strategic challenges
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Request a meeting with our team. We&apos;ll listen to your situation, share relevant case studies, and give you an honest assessment of whether a Partnership makes sense.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
          >
            Request a Meeting
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-6 text-sm text-white/40">
            Executive conversation. No sales deck.
          </p>
        </div>
      </section>
    </>
  );
}
