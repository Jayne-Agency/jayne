"use client";

import { useState, type FormEvent } from "react";

const SUBSTACK_URL = "https://devilsadvocatebyjayneagency.substack.com";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const url = `${SUBSTACK_URL}/subscribe?email=${encodeURIComponent(email)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <div className="reveal">
      <h3 className="text-3xl md:text-4xl text-[#1a1a1a] leading-tight mb-4 font-[family-name:var(--font-playfair)]">
        Devil&apos;s Advocate
      </h3>
      <p className="text-xl text-[#8a8178] mb-8 font-[family-name:var(--font-open-sans)]">
        Sharp brand strategy insights delivered to your inbox. Subscribe to our newsletter.
      </p>
      {submitted ? (
        <div className="max-w-lg px-5 py-4 rounded-lg bg-[#faf9f7] border border-[#e8e4dc] font-[family-name:var(--font-open-sans)]">
          <p className="text-lg text-[#1a1a1a]">
            Thanks for subscribing! Complete your signup in the Substack tab.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg"
        >
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-5 py-4 text-lg rounded-lg border border-[#e8e4dc] bg-[#faf9f7] text-[#1a1a1a] placeholder-[#8a8178] font-[family-name:var(--font-open-sans)] focus:outline-none focus:border-[#f57214] transition-colors"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg bg-[#1a1a1a] text-white rounded-lg transition-all duration-300 hover:bg-[#333] cursor-pointer"
          >
            Subscribe
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </button>
        </form>
      )}
    </div>
  );
}
