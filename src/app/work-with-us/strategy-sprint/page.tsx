import Link from "next/link";

export default function StrategySprint() {
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
                Most Popular
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[0.95] text-white mb-8">
                Strategy<br /><span className="italic text-[#ff6b00]">Sprint</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-xl leading-relaxed mb-8">
                Get complete brand clarity in 6 weeks. Walk away with positioning, messaging, and a 90-day roadmap to stop blending in and start getting chosen.
              </p>
              <div className="flex flex-wrap gap-6 text-white/60">
                <div>
                  <span className="block text-3xl font-bold text-white">6</span>
                  <span className="text-sm">Weeks</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-white">$25K</span>
                  <span className="text-sm">Investment</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-white">100%</span>
                  <span className="text-sm">Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-white mb-6">Book a Discovery Call</h3>
              <p className="text-white/60 mb-8">See if Strategy Sprint is right for your business. No pitch, no pressure—just clarity.</p>
              <Link
                href="#"
                className="w-full inline-flex items-center justify-center px-8 py-5 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
              >
                Book Your Call
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-center text-white/40 text-sm mt-4">Free 30-minute call. No obligation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* This is for you if... */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* This IS for you */}
            <div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-8">
                This is for you if...
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You&apos;re between <strong className="text-[#1a1a1a]">$1M-$20M in revenue</strong> and ready to break through to the next level</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You&apos;re <strong className="text-[#1a1a1a]">competing on price</strong> when you know you should be competing on value</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">Your team has <strong className="text-[#1a1a1a]">different answers</strong> to &quot;what do we stand for?&quot;</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You want <strong className="text-[#1a1a1a]">clarity fast</strong>—not a 6-month engagement that never ends</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You can invest <strong className="text-[#1a1a1a]">$25,000</strong> to fix your positioning permanently</p>
                </div>
              </div>
            </div>

            {/* This is NOT for you */}
            <div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-8">
                This is NOT for you if...
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You&apos;re looking for a &quot;logo refresh&quot; or new brand colors</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You haven&apos;t found product-market fit yet</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You want someone to &quot;just make it pretty&quot;</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You&apos;re not ready to invest time alongside money</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You need ongoing agency support (see Strategy Partnership instead)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-6">
              How It Works
            </h2>
            <p className="text-xl text-[#666666]">6 weeks from kickoff to complete clarity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 lg:p-10">
              <div className="text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-6">1</div>
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-2">Discovery</h3>
              <p className="text-[#ff6b00] font-semibold text-sm mb-4">WEEKS 1-2</p>
              <p className="text-[#666666]">Deep dive into your business, customers, and competition. Stakeholder interviews, market research, competitive analysis. We find the gaps everyone else misses.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 lg:p-10">
              <div className="text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-6">2</div>
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-2">Strategy</h3>
              <p className="text-[#ff6b00] font-semibold text-sm mb-4">WEEKS 3-4</p>
              <p className="text-[#666666]">We develop your positioning, messaging framework, and differentiation strategy. You&apos;ll know exactly what to say, how to say it, and why it works.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 lg:p-10">
              <div className="text-6xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-6">3</div>
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-2">Activation</h3>
              <p className="text-[#ff6b00] font-semibold text-sm mb-4">WEEKS 5-6</p>
              <p className="text-[#666666]">We deliver everything you need to execute: complete brand guidelines, messaging playbook, and a 90-day implementation roadmap with priorities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-6">
              Everything You Get
            </h2>
            <p className="text-xl text-[#666666]">Here&apos;s exactly what&apos;s included in your $25,000 investment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-6 bg-[#f5f3ef] rounded-2xl">
              <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">Brand Positioning Document</h3>
                <p className="text-[#666666]">Your unique market position, articulated clearly enough that anyone on your team can explain it</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[#f5f3ef] rounded-2xl">
              <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">Messaging Framework</h3>
                <p className="text-[#666666]">Headline copy, value propositions, and talking points for every key audience</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[#f5f3ef] rounded-2xl">
              <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">Competitive Analysis</h3>
                <p className="text-[#666666]">Deep dive into your competitive landscape with actionable differentiation opportunities</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[#f5f3ef] rounded-2xl">
              <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">Brand Voice Guidelines</h3>
                <p className="text-[#666666]">Tone, personality, and writing style guide so everyone sounds like the same brand</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[#f5f3ef] rounded-2xl">
              <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">90-Day Implementation Roadmap</h3>
                <p className="text-[#666666]">Prioritized action plan so you know exactly what to do first, second, third</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[#f5f3ef] rounded-2xl">
              <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">2 Follow-Up Strategy Sessions</h3>
                <p className="text-[#666666]">60-minute calls at 30 and 60 days post-delivery to troubleshoot implementation</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-[#1a1a1a] rounded-3xl text-center">
            <p className="text-white/60 mb-2">Total Value</p>
            <p className="text-4xl font-bold text-white mb-2">$40,000+</p>
            <p className="text-[#ff6b00] font-semibold">Your Investment: $25,000</p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24 lg:py-32 bg-[#ff6b00] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white mb-8">
            The Clarity Guarantee
          </h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            If you complete the Strategy Sprint and don&apos;t have complete clarity on your positioning and messaging, we&apos;ll keep working with you until you do—at no additional cost.
          </p>
          <p className="text-lg text-white/70">
            We&apos;ve delivered hundreds of Strategy Sprints. We&apos;ve never had to invoke this guarantee. But it&apos;s here so you can say yes with zero risk.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-16 text-center">
            Questions You Might Have
          </h2>

          <div className="space-y-8">
            <div className="border-b border-[#e5e3df] pb-8">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">How much time do I need to commit?</h3>
              <p className="text-[#666666]">Plan for 2-3 hours per week during the 6-week engagement. This includes stakeholder interviews, review sessions, and feedback rounds. The more engaged you are, the better the outcome.</p>
            </div>
            <div className="border-b border-[#e5e3df] pb-8">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Can we pay in installments?</h3>
              <p className="text-[#666666]">Yes. We offer a 50/50 split: half at kickoff, half at delivery. For qualified businesses, we also offer monthly payment plans.</p>
            </div>
            <div className="border-b border-[#e5e3df] pb-8">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">What if we need ongoing support after?</h3>
              <p className="text-[#666666]">Many Sprint clients upgrade to a Strategy Partnership after seeing results. We also offer implementation support on a project basis. But the Sprint is designed to be complete—you&apos;ll have everything you need to execute.</p>
            </div>
            <div className="border-b border-[#e5e3df] pb-8">
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">How is this different from hiring a branding agency?</h3>
              <p className="text-[#666666]">Most agencies focus on visual identity (logos, colors, fonts). We focus on strategic positioning and messaging. The visuals are decoration. The strategy is what makes you money. Many clients use our strategy to brief their design teams.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">What results can I expect?</h3>
              <p className="text-[#666666]">Our clients typically see: higher close rates (because messaging resonates), premium pricing (because value is clear), faster sales cycles (because differentiation is obvious), and aligned teams (because everyone finally speaks the same language).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6 text-white">
            Ready to stop blending in?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Book a free discovery call. We&apos;ll talk about your business, diagnose your biggest positioning gaps, and tell you honestly if Strategy Sprint is right for you.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
          >
            Book Your Discovery Call
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-6 text-sm text-white/40">
            Free 30-minute call. No pitch. No pressure.
          </p>
        </div>
      </section>
    </>
  );
}
