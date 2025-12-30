import Link from "next/link";

export default function ClarityUniversity() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-[#1a1a1a] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        {/* Large decorative element */}
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-32">
          <div className="max-w-4xl">
            <Link href="/" className="inline-flex items-center text-[#ff6b00] hover:text-[#ff8c3a] mb-8 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Work With Us
            </Link>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
              For Entrepreneurs & Small Teams
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] leading-[0.95] text-white mb-8">
              Clarity<br /><span className="italic text-[#ff6b00]">University</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed">
              Learn our proven methodology at your own pace. Enterprise-level strategy education that fits your budget.
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
                Clarity University is designed for solopreneurs, small business owners, and startup founders who want to build their own brand strategy but aren&apos;t ready for a full agency engagement.
              </p>
              <p className="text-lg text-[#666666] leading-relaxed">
                Maybe you&apos;re bootstrapping and need to be scrappy with your budget. Maybe you&apos;re the kind of founder who wants to understand the &quot;why&quot; behind every decision. Maybe you just learn better by doing.
              </p>
              <p className="text-xl text-[#1a1a1a] font-semibold leading-relaxed">
                If you want to build strategy skills that will serve you for the rest of your career, this is where you start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-16">
            What you&apos;ll learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Brand Foundation</h3>
              <p className="text-[#666666]">Define your brand&apos;s purpose, vision, and values. Understand what makes you different and why it matters to your customers.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Positioning Strategy</h3>
              <p className="text-[#666666]">Learn how to carve out your unique space in the market. Stop competing on price and start competing on value.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Messaging That Converts</h3>
              <p className="text-[#666666]">Craft messages that resonate with your ideal customers. Learn the frameworks behind copy that actually sells.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Customer Research</h3>
              <p className="text-[#666666]">Discover what your customers really want (not what they say they want). Learn research techniques used by top agencies.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Competitive Analysis</h3>
              <p className="text-[#666666]">Understand your competitive landscape and find opportunities others are missing. Turn competitors into your strategic advantage.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Go-to-Market Planning</h3>
              <p className="text-[#666666]">Build a practical plan to bring your strategy to life. Prioritize actions that move the needle and skip the busywork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-16">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-7xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-6">1</div>
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Learn</h3>
              <p className="text-[#666666]">Work through our video lessons and frameworks at your own pace. Each module builds on the last, giving you a complete strategy toolkit.</p>
            </div>
            <div>
              <div className="text-7xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-6">2</div>
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Apply</h3>
              <p className="text-[#666666]">Use our templates and worksheets to apply each concept to your own business. You&apos;ll build your strategy as you learn.</p>
            </div>
            <div>
              <div className="text-7xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-6">3</div>
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-4">Connect</h3>
              <p className="text-[#666666]">Join our community of founders and get feedback on your work. Learn from others&apos; challenges and share your wins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6 text-white">
            Ready to build your strategy?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Join Clarity University and get the same strategic frameworks we use with Fortune 500 clients.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
          >
            Join Clarity University
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
