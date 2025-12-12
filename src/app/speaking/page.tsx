import Link from "next/link";

export default function Speaking() {
  const topics = [
    "The fundamental 10 assets of a brand platform",
    "Women and leadership / authentic leadership",
    "Increasing the power of the buy-and-sell cycle within the supply chain",
    "Elevating the diverse supply chain",
    "Engagement through brand strategy and storytelling",
    "A better time to horizon - brand and venture capital",
    "Customized brand strategy topics available upon request",
  ];

  const engagementTypes = [
    { title: "Keynotes", description: "Inspiring talks that move audiences to action" },
    { title: "Panels & Moderator", description: "Expert perspective and thoughtful facilitation" },
    { title: "Judgeship", description: "Creative, marketing, and business pitch competitions" },
    { title: "Podcasts", description: "Deep-dive conversations on brand and strategy" },
    { title: "Academia", description: "Guest teaching and speaking for universities" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-[#f5f3ef] font-[family-name:var(--font-open-sans)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-[#ff6b00] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-32">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
              Speaking Engagements
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] leading-[0.95] text-[#1a1a1a] mb-8">
              Bring brand clarity to your audience.
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] max-w-2xl leading-relaxed mb-10">
              Leverage Jayne Agency&apos;s brand strategy thought leadership for your business, community, or members—in-person or virtual.
            </p>
            <Link
              href="/work-with-us"
              className="inline-flex items-center justify-center px-12 py-6 text-lg font-bold bg-[#ff6b00] text-white rounded-full hover:bg-[#1a1a1a] transition-all duration-300 group"
            >
              Book a Call
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Topics Section - Dark */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a] font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left side - heading */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white leading-[1.1] mb-6">
                  Topics that inform & empower.
                </h2>
                <p className="text-xl text-white/50">
                  Choose from the list, or work with us to create a custom solution for your audience.
                </p>
              </div>
            </div>

            {/* Right side - topics list */}
            <div className="lg:col-span-8">
              {topics.map((topic, i) => (
                <div key={i} className="border-t border-white/10 py-6 group flex items-start gap-6">
                  <span className="text-[#ff6b00] font-[family-name:var(--font-playfair)] text-2xl mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-xl md:text-2xl text-white group-hover:text-[#ff6b00] transition-colors">
                    {topic}
                  </p>
                </div>
              ))}
              <div className="border-t border-white/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Speaker */}
      <section className="py-24 lg:py-32 bg-white font-[family-name:var(--font-open-sans)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-[#f5f3ef] rounded-2xl overflow-hidden">
                <img
                  src="/brooke.png"
                  alt="Brooke Foley"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ff6b00] rounded-2xl -z-10"></div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#ff6b00] font-bold mb-6">
                About the Speaker
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-[#1a1a1a] leading-[1.1] mb-6">
                Brooke Foley
              </h2>
              <p className="text-xl md:text-2xl text-[#ff6b00] font-[family-name:var(--font-playfair)] italic mb-8">
                Agent of Intrigue
              </p>

              <div className="space-y-6 text-lg text-[#666666] leading-relaxed">
                <p>
                  Co-founder and CEO of Jayne Agency and Clarity University.
                </p>
                <p>
                  Previously Razorfish Chief Creative Officer and Executive Creative Director at DDB and Ogilvy.
                </p>
                <p>
                  Led creative and strategy work at Kraft, Microsoft, TD Ameritrade, Pepsico, Abbott and many other organizations from SMEs to Fortune 50.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}
