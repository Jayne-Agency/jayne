import Link from "next/link";

export default function ClarityUniversity() {
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
                DIY Option
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[0.95] text-white mb-8">
                Clarity<br /><span className="italic text-[#ff6b00]">University</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-xl leading-relaxed mb-8">
                Learn the exact methodology we use with Fortune 500 clients. Build your brand strategy yourself. Fraction of the cost.
              </p>
              <div className="flex flex-wrap gap-6 text-white/60">
                <div>
                  <span className="block text-3xl font-bold text-white">12+</span>
                  <span className="text-sm">Hours of Training</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-white">$997</span>
                  <span className="text-sm">One-Time</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-white">Lifetime</span>
                  <span className="text-sm">Access</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-3xl p-8 lg:p-10">
              <div className="mb-6">
                <span className="inline-block bg-[#ff6b00] text-white text-sm font-bold px-4 py-2 rounded-full">COMING SOON</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-white mb-6">Join the Waitlist</h3>
              <p className="text-white/60 mb-8">Be first to know when Clarity University opens. Early-bird pricing for waitlist members.</p>
              <Link
                href="#"
                className="w-full inline-flex items-center justify-center px-8 py-5 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
              >
                Join Waitlist
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-center text-white/40 text-sm mt-4">No spam. Just launch updates.</p>
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
                  <p className="text-lg text-[#666666]">You&apos;re a <strong className="text-[#1a1a1a]">founder or solopreneur</strong> who wants to understand strategy, not outsource it</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You&apos;re <strong className="text-[#1a1a1a]">bootstrapping</strong> and need to be smart with your budget</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You <strong className="text-[#1a1a1a]">learn by doing</strong> and want to build your own strategy skills</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You want <strong className="text-[#1a1a1a]">enterprise-level frameworks</strong> at a price that makes sense</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You can <strong className="text-[#1a1a1a]">invest time</strong> to save money</p>
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
                  <p className="text-lg text-[#666666]">You want someone to do it all for you</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You don&apos;t have 2-3 hours per week to dedicate</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You have complex brand architecture (see Strategy Partnership)</p>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-[#666666]">You need personalized 1:1 guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-24 lg:py-32 bg-[#f5f3ef] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] mb-6">
              The Curriculum
            </h2>
            <p className="text-xl text-[#666666]">12+ hours of video training. Same frameworks we use with Fortune 500s.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8">
              <div className="text-4xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">01</div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Brand Foundation</h3>
              <p className="text-[#666666]">Define your purpose, vision, and values. Build the foundation everything else sits on.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <div className="text-4xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">02</div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Customer Research</h3>
              <p className="text-[#666666]">Understand what your customers really want—not what they say. Interview frameworks that reveal truth.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <div className="text-4xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">03</div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Competitive Analysis</h3>
              <p className="text-[#666666]">Map your competitive landscape. Find the gaps. Position yourself in uncontested space.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <div className="text-4xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">04</div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Positioning Strategy</h3>
              <p className="text-[#666666]">Carve out your unique market position. Stop competing on price. Own a category of one.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <div className="text-4xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">05</div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Messaging Framework</h3>
              <p className="text-[#666666]">Build messaging that converts. Headlines, value props, and talking points for every audience.</p>
            </div>
            <div className="bg-white rounded-3xl p-8">
              <div className="text-4xl font-[family-name:var(--font-playfair)] text-[#ff6b00] mb-4">06</div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Go-to-Market</h3>
              <p className="text-[#666666]">Turn strategy into action. Build a 90-day roadmap. Know exactly what to do first.</p>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-4 p-6 bg-[#f5f3ef] rounded-2xl">
              <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">12+ Hours Video Training</h3>
                <p className="text-[#666666]">On-demand lessons you can watch at your own pace</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[#f5f3ef] rounded-2xl">
              <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">Templates & Worksheets</h3>
                <p className="text-[#666666]">Fillable frameworks to build your strategy as you learn</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[#f5f3ef] rounded-2xl">
              <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">Private Community</h3>
                <p className="text-[#666666]">Connect with other founders. Get feedback. Share wins.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[#f5f3ef] rounded-2xl">
              <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">Monthly Group Coaching</h3>
                <p className="text-[#666666]">Live Q&A sessions to troubleshoot your specific challenges</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[#f5f3ef] rounded-2xl">
              <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">Lifetime Access</h3>
                <p className="text-[#666666]">All updates and new content included forever</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-[#f5f3ef] rounded-2xl">
              <svg className="w-6 h-6 text-[#ff6b00] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">30-Day Guarantee</h3>
                <p className="text-[#666666]">Full refund if it&apos;s not for you. No questions asked.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-[#1a1a1a] rounded-3xl text-center max-w-2xl mx-auto">
            <p className="text-white/60 mb-2">Launch Price</p>
            <p className="text-5xl font-bold text-white mb-2">$997</p>
            <p className="text-[#ff6b00] font-semibold mb-4">One-time payment. Lifetime access.</p>
            <p className="text-white/40 text-sm">Price increases to $1,497 after launch</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#ff6b00] text-white text-sm font-bold px-4 py-2 rounded-full mb-8">COMING SOON</div>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] leading-tight mb-6 text-white">
            Join the waitlist for early access
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Be the first to know when Clarity University opens. Waitlist members get early-bird pricing and exclusive bonuses.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group"
          >
            Join the Waitlist
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-6 text-sm text-white/40">
            No spam. Just launch updates and early-bird access.
          </p>
        </div>
      </section>
    </>
  );
}
