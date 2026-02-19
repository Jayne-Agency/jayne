"use client";

export function NewsletterSignup() {
  return (
    <div className="reveal">
      <h3 className="text-3xl md:text-4xl text-[#1a1a1a] leading-tight mb-4 font-[family-name:var(--font-playfair)]">
        Devil&apos;s Advocate
      </h3>
      <p className="text-xl text-[#8a8178] mb-8 font-[family-name:var(--font-open-sans)]">
        Sharp brand strategy insights delivered to your inbox. Subscribe to our newsletter.
      </p>
      <iframe
        src="https://devilsadvocatebyjayneagency.substack.com/embed"
        width="100%"
        height="150"
        className="rounded-lg"
        style={{ border: "none", background: "transparent" }}
        title="Devil's Advocate newsletter signup"
      />
    </div>
  );
}
