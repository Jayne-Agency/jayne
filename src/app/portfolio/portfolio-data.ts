// To add a client: drop images in /public/portfolio and add an entry here.
// The first piece's image is used as the client's cover on the portfolio index.
// caseStudy is optional — only set it when a case study page exists for the client.

export type PortfolioPiece = {
  title: string;
  blurb: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

export type PortfolioClient = {
  slug: string;
  client: string;
  description: string;
  caseStudy?: string;
  pieces: PortfolioPiece[];
};

export const portfolioClients: PortfolioClient[] = [
  {
    slug: "pepsico",
    client: "PepsiCo®",
    description:
      "Campaign creative and program storytelling for PepsiCo's Supplier Diversity Platform.",
    caseStudy: "/case-studies/pepsico",
    pieces: [
      {
        title: "Calling All Advocates",
        blurb:
          "Campaign creative for PepsiCo's Supplier Diversity Platform — putting the mission in the brand language employees already knew.",
        image: "/portfolio/pepsico-calling-all-advocates.png",
        alt: "PepsiCo Supplier Diversity Platform campaign creative — Calling All Advocates, featuring Quaker Oats",
        width: 1956,
        height: 1200,
      },
      {
        title: "The Supplier Diversity Program",
        blurb:
          "A one-page program story: $800MM in diverse spend, 335 suppliers, 23 categories — the numbers that rallied leadership around the $1B goal.",
        image: "/portfolio/pepsico-supplier-diversity-program.png",
        alt: "PepsiCo Supplier Diversity Program infographic — 800MM forecasted spend, 335 current diverse suppliers, 23 categories of spend",
        width: 1954,
        height: 1198,
      },
    ],
  },
];
