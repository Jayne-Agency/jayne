"use client";

export default function ReferralProgram() {
  const terms = [
    {
      title: "Eligibility.",
      body: "The program is open to individuals 18 years of age or older. Employees, contractors, and immediate family members of CU or Jayne Agency are not eligible to participate. The program is void where prohibited.",
    },
    {
      title: "Program period.",
      body: "Referrals must be submitted between July 1 and July 31, 2026 to qualify. Introductions received outside this window are not eligible.",
    },
    {
      title: "What counts as a qualified referral.",
      body: "A qualified referral is a direct email introduction to bradley.pierce@jayneagency.com connecting CU with a decision-maker at a business that (a) is not already in conversation with or a current client of CU or Jayne Agency, (b) has not previously been referred by another participant, and (c) responds or agrees to an introductory conversation. An intro that is unsolicited, declined, unresponsive, or to a business already in our pipeline does not count toward any reward.",
    },
    {
      title: "Consent and anti-spam.",
      body: "You must have a genuine, pre-existing relationship with any person you introduce and reasonable grounds to believe they welcome the introduction. You may not send unsolicited bulk email, use purchased or scraped contact lists, or otherwise contact people in violation of applicable anti-spam laws (including the CAN-SPAM Act). Referrals made in violation of this section will be disqualified.",
    },
    {
      title: "The 1-hour session (per sign-up).",
      body: "For each qualified referral that enrolls in a paid CU program, you earn one 60-minute one-on-one strategy session. Reward sessions are capped at a maximum of 5 per participant during the program period.",
    },
    {
      title: "The 30-minute session (guaranteed).",
      body: "Submit at least three (3) qualified referrals during the program period and you earn one complimentary 30-minute one-on-one session, regardless of whether any referral enrolls. This is limited to one 30-minute session per participant and is not combinable with the per-sign-up reward for the same three referrals.",
    },
    {
      title: "Credit and duplicates.",
      body: "Where the same business is referred by more than one participant, credit goes to the first qualified referral received, based on email timestamp. CU's records are final on questions of timing and eligibility.",
    },
    {
      title: "Self-referrals excluded.",
      body: "You may not refer yourself, your own businesses, or entities you own, control, or are affiliated with.",
    },
    {
      title: "Redemption and expiration.",
      body: "Earned sessions must be scheduled and completed within 60 days of being earned, subject to strategist availability, and expire after that date. Sessions have no cash value and cannot be transferred, sold, or exchanged.",
    },
    {
      title: "Scheduling and no-shows.",
      body: "Sessions are by appointment. A missed appointment without 24 hours' notice forfeits that session.",
    },
    {
      title: "Right to modify or end the program.",
      body: "CU may change, pause, or end this program at any time, and may disqualify any participant or referral it determines, in its sole discretion, to be fraudulent, abusive, or in violation of these terms.",
    },
    {
      title: "Governing law.",
      body: "This program and these terms are governed by the laws of the State of Illinois, without regard to its conflict-of-laws rules, and any disputes will be resolved in the state or federal courts located in Illinois.",
    },
  ];

  return (
    <main className="font-[family-name:var(--font-playfair)]">
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm md:text-base text-[#f57214] uppercase tracking-widest font-semibold font-[family-name:var(--font-open-sans)] mb-4">
            Terms &amp; Conditions
          </p>
          <h1 className="text-4xl md:text-5xl leading-[1.1] text-[#1a1a1a]">
            Clarity University&reg; July Referral Program
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
            Clarity University&reg; (&ldquo;CU&rdquo;) is operated by Jayne Agency. By
            participating in this referral program, you agree to the terms below.
          </p>
          <p className="mt-4 text-sm text-[#8a8178] font-[family-name:var(--font-open-sans)]">
            Last updated July 1, 2026
          </p>
        </div>
      </section>

      {/* Terms */}
      <section className="pb-24 lg:pb-32 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          {terms.map((term, i) => (
            <div key={i} className="border-t border-[#e5e0d8] pt-8">
              <h2 className="text-xl md:text-2xl text-[#1a1a1a] leading-snug mb-3">
                {term.title}
              </h2>
              <p className="text-base md:text-lg text-[#8a8178] leading-relaxed font-[family-name:var(--font-open-sans)]">
                {term.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
