// Client context comes verbatim from the old site's our-work page.
// To add a piece: drop the image in /public/portfolio and add an entry here.
// The first piece's image is used as the client's cover on the portfolio index.
// caseStudy is optional — only set it when a case study page exists for the client.

export type PortfolioPiece = {
  image: string;
  alt: string;
  width: number;
  height: number;
};

export type PortfolioClient = {
  slug: string;
  client: string;
  headline: string;
  problem: string;
  approach: string;
  process: string;
  solutions: string;
  caseStudy?: string;
  // "contain" centers a logo-style cover on the white card instead of cropping it.
  coverFit?: "contain";
  pieces: PortfolioPiece[];
};

export const portfolioClients: PortfolioClient[] = [
  {
    slug: "pepsico",
    client: "PepsiCo®",
    headline: "Closing the gap on a $250MM+ diverse spend",
    problem: "Moving from a Supplier Diversity program to an enterprise platform",
    approach: "Call all advocates to help create opportunity and awareness",
    process: "Condense timing and approvals by using an approved style guide",
    solutions: "Help PepsiCo appeal to the PepsiCo culture",
    caseStudy: "/case-studies/pepsico",
    pieces: [
      { image: "/portfolio/pepsico-01.png", alt: "PepsiCo® creative work, piece 1", width: 1956, height: 1200 },
      { image: "/portfolio/pepsico-02.png", alt: "PepsiCo® creative work, piece 2", width: 2338, height: 1436 },
      { image: "/portfolio/pepsico-03.png", alt: "PepsiCo® creative work, piece 3", width: 1952, height: 1196 },
      { image: "/portfolio/pepsico-00.png", alt: "PepsiCo® creative work, piece 4", width: 1954, height: 1198 },
    ],
  },
  {
    slug: "hornitos",
    client: "Hornitos® Tequila",
    headline: "83% open rate. 79% attendance.",
    problem: "Hornitos was a globally renowned mixing tequila, but in the U.S., bartenders overlooked it, preferring familiar brands.",
    approach: "Create a consumer (and bartender) event around mixology — make the tequila and its flexible nature unforgettable.",
    process: "Training NYC bartenders live as a means to force education and mixology usage",
    solutions: "Branded mixology handbook developed to further engage bartenders and consumers post event",
    caseStudy: "/case-studies/hornitos",
    pieces: [
      { image: "/portfolio/hornitos-00.png", alt: "Hornitos® Tequila creative work, piece 1", width: 1218, height: 1582 },
      { image: "/portfolio/hornitos-04.png", alt: "Hornitos® Tequila creative work, piece 2", width: 2858, height: 1622 },
      { image: "/portfolio/hornitos-01.png", alt: "Hornitos® Tequila creative work, piece 3", width: 1462, height: 1458 },
      { image: "/portfolio/hornitos-05.png", alt: "Hornitos® Tequila creative work, piece 4", width: 1942, height: 1192 },
      { image: "/portfolio/hornitos-02.png", alt: "Hornitos® Tequila creative work, piece 5", width: 1036, height: 692 },
      { image: "/portfolio/hornitos-03.png", alt: "Hornitos® Tequila creative work, piece 6", width: 1036, height: 690 },
    ],
  },
  {
    slug: "echo",
    client: "Echo Global Logistics",
    headline: "2nd place 2018. 1st place 2019–2024.",
    problem: "Overtake market leader C.H. Robinson in the Inbound Logistics industry shoot out — a leadership position the publisher said was unattainable without insurmountable funding",
    approach: "Previously conducted research revealed Echo's most valuable asset was its people — make that primary differentiator tangible and distinctly ownable",
    process: "Worked hand-in-hand daily with Echo's internal marketing team to unite two merging cultures over the promise of being the “uncomplicators”",
    solutions: "The Uncomplicator and the Logistics League: one icon extended across print, digital, social media, the website and three-dimensional bobbleheads — a “culture cult” in the logistics industry",
    caseStudy: "/case-studies/echo",
    pieces: [
      { image: "/portfolio/echo-01.png", alt: "Introducing The Uncomplicator and the Logistics League campaign graphic", width: 512, height: 315 },
      { image: "/portfolio/echo-04.png", alt: "The Uncomplicator and the Logistics League comic book cover", width: 512, height: 315 },
      { image: "/portfolio/echo-00.png", alt: "Vote Echo as your Uncomplicator campaign takeover on the Inbound Logistics website", width: 512, height: 315 },
      { image: "/portfolio/echo-02.png", alt: "The Uncomplicator bobblehead", width: 512, height: 315 },
      { image: "/portfolio/echo-03.png", alt: "Echo logo beside the Vote Echo 2021 number one Top 3PL winner badge", width: 512, height: 176 },
    ],
  },
  {
    slug: "big-lots",
    client: "Big Lots!",
    headline: "3X more shopping in store. 3X more shopping online.",
    problem: "No e-commerce in 2013 — needed to catch up",
    approach: "Start with 13M current loyalty customers to develop personas for e-commerce build",
    process: "Delivered 2 weeks early by designing mobile before desktop",
    solutions: "Built a shopping experience centered around the thrill of search, directly aligning with her persona",
    pieces: [
      { image: "/portfolio/big-lots-00.png", alt: "Big Lots! creative work, piece 1", width: 1126, height: 818 },
      { image: "/portfolio/big-lots-01.png", alt: "Big Lots! creative work, piece 2", width: 1944, height: 1186 },
      { image: "/portfolio/big-lots-02.png", alt: "Big Lots! creative work, piece 3", width: 1946, height: 1192 },
    ],
  },
  {
    slug: "meatheads",
    client: "Meatheads",
    headline: "Turned a “no way” into 79% willingness to try",
    problem: "Needed to shift their brand to best represent their values",
    approach: "Change the way fast casual dining talked about made to order",
    process: "Cut to the chase — redesigned the brand platform and identity within an 8 week period",
    solutions: "By removing negative connotations and infusing positive ones, the logo remained “the same” to the average eye but created a whole new emotional connection",
    pieces: [
      { image: "/portfolio/meatheads-00.png", alt: "Meatheads creative work, piece 1", width: 3202, height: 2016 },
      { image: "/portfolio/meatheads-01.png", alt: "Meatheads creative work, piece 2", width: 1486, height: 1936 },
      { image: "/portfolio/meatheads-02.png", alt: "Meatheads creative work, piece 3", width: 826, height: 1074 },
      { image: "/portfolio/meatheads-03.png", alt: "Meatheads creative work, piece 4", width: 818, height: 1068 },
      { image: "/portfolio/meatheads-06.png", alt: "Meatheads creative work, piece 5", width: 1894, height: 742 },
      { image: "/portfolio/meatheads-05.png", alt: "Meatheads creative work, piece 6", width: 1886, height: 788 },
      { image: "/portfolio/meatheads-08.png", alt: "Meatheads creative work, piece 7", width: 1730, height: 1144 },
      { image: "/portfolio/meatheads-07.png", alt: "Meatheads creative work, piece 8", width: 1838, height: 1210 },
      { image: "/portfolio/meatheads-04.png", alt: "Meatheads creative work, piece 9", width: 3252, height: 1358 },
    ],
  },
  {
    slug: "county-care",
    client: "CountyCare",
    headline: "150K+ applications completed",
    problem: "Needed to sign up 130K applicants",
    approach: "Use real people from the ER to create an emotional connection",
    process: "Secured award winning resources with respect to a 501(c)(3), and leveraged existing properties as the most valuable media resource available",
    solutions: "Developed a new way to talk about insurance, the cost of it, and who paid for it in a way that crossed all cultures and racial boundaries",
    pieces: [
      { image: "/portfolio/county-care-00.png", alt: "CountyCare creative work, piece 1", width: 1942, height: 1190 },
      { image: "/portfolio/county-care-01.png", alt: "CountyCare creative work, piece 2", width: 1944, height: 1184 },
      { image: "/portfolio/county-care-02.png", alt: "CountyCare creative work, piece 3", width: 1880, height: 994 },
    ],
  },
  {
    slug: "crisp-market",
    client: "Crisp Market",
    headline: "76% likely to purchase. 89% repeat purchase.",
    problem: "0% awareness",
    approach: "Bring a healthy, fresh, great-tasting environment into a lobby",
    process: "Create a customer-centric outreach program including high-end giveaways",
    solutions: "Reduced initial launch cost from $250K to $6K. Provided a restaurant-like experience that was all automation and self-service.",
    pieces: [
      { image: "/portfolio/crisp-market-00.png", alt: "Crisp Market creative work, piece 1", width: 1884, height: 1174 },
      { image: "/portfolio/crisp-market-01.png", alt: "Crisp Market creative work, piece 2", width: 1904, height: 1106 },
      { image: "/portfolio/crisp-market-02.png", alt: "Crisp Market creative work, piece 3", width: 1918, height: 1116 },
    ],
  },
  {
    slug: "willow-research",
    client: "Willow Research",
    headline: "From non-existent to award-winning",
    problem: "Spun off new opportunity with no brand identity or platform, just reputation",
    approach: "Develop a brand that exposed the layers and depths to their research methodology",
    process: "Leveraged Willow's unique “winnowing” as a basis for the brand. Brand strategy in less than 2 weeks. Identity in less than 6.",
    solutions: "An award winning tone and personality that is demonstrated across the logo, website and entire system",
    pieces: [
      { image: "/portfolio/willow-research-00.png", alt: "Willow Research creative work, piece 1", width: 1954, height: 1194 },
      { image: "/portfolio/willow-research-01.png", alt: "Willow Research creative work, piece 2", width: 1948, height: 1192 },
      { image: "/portfolio/willow-research-02.png", alt: "Willow Research creative work, piece 3", width: 1954, height: 1194 },
      { image: "/portfolio/willow-research-03.png", alt: "Willow Research creative work, piece 4", width: 1946, height: 1186 },
    ],
  },
  {
    slug: "supply-hive",
    client: "Supply Hive",
    headline: "A brand the CEO felt proud to present",
    problem: "Serial entrepreneur has unique insights and an AI data platform but no way to tell the story in a simple way",
    approach: "Break down the brand, create an ownable identity with a killer tagline, make the obvious ownable",
    process: "Naming, identity, and secured channel strategy through legal and trademarked within 6 weeks",
    solutions: "Just like the solution it represents, the more the brand gets known, the more the brand knows",
    coverFit: "contain",
    pieces: [
      { image: "/portfolio/supply-hive-00.png", alt: "Supply Hive creative work, piece 1", width: 2664, height: 1552 },
      { image: "/portfolio/supply-hive-01.png", alt: "Supply Hive creative work, piece 2", width: 2370, height: 1884 },
      { image: "/portfolio/supply-hive-03.png", alt: "Supply Hive creative work, piece 3", width: 3058, height: 1892 },
      { image: "/portfolio/supply-hive-02.png", alt: "Supply Hive creative work, piece 4", width: 2974, height: 1992 },
    ],
  },
  {
    slug: "ella",
    client: "Ella: Know Who You Are",
    headline: "Launch a personal brand, secure celebrity day rates",
    problem: "Needed to establish personal brand",
    approach: "Evolve Tuck's renown Ella L.J. Bell Smith's personal brand into celebrity status nationally",
    process: "Leveraging Ella's natural event calendar to create a marketing plan's worth of content",
    solutions: "Separate Ella's personal brand from Tuck School of Business, as well as ASCENT (her 501c3), to create a more powerful draw for all 3 organizations",
    pieces: [
      { image: "/portfolio/ella-00.png", alt: "Ella: Know Who You Are creative work, piece 1", width: 1948, height: 1202 },
      { image: "/portfolio/ella-01.png", alt: "Ella: Know Who You Are creative work, piece 2", width: 1950, height: 1190 },
      { image: "/portfolio/ella-02.png", alt: "Ella: Know Who You Are creative work, piece 3", width: 1950, height: 1196 },
    ],
  },
  {
    slug: "syncrofy",
    client: "Syncrofy",
    headline: "$850K in new sales within the first 6 months of repositioning",
    problem: "Had trouble getting prospects to move past initial sales process — they didn't believe the EDI self service software was real",
    approach: "User research on both adopters and decliners",
    process: "Recommended a digital only sales kit",
    solutions: "Very short video clips were used to bring the proprietary user experience of self-service to life",
    pieces: [
      { image: "/portfolio/syncrofy-00.png", alt: "Syncrofy creative work, piece 1", width: 1764, height: 1116 },
      { image: "/portfolio/syncrofy-01.png", alt: "Syncrofy creative work, piece 2", width: 1900, height: 882 },
    ],
  },
  {
    slug: "forevercar",
    client: "ForeverCar.com",
    headline: "Reduced path to completed purchase to under 9 minutes",
    problem: "Stop selling to 1x car purchasers",
    approach: "Begin by completing a purchase with 2x car owners",
    process: "Used existing template design to create a high-end purchase path",
    solutions: "Bring the “purchase path” into the upfront of the marketing materials",
    pieces: [
      { image: "/portfolio/forevercar-00.png", alt: "ForeverCar.com creative work, piece 1", width: 1954, height: 1204 },
      { image: "/portfolio/forevercar-03.png", alt: "ForeverCar.com creative work, piece 2", width: 1954, height: 1198 },
      { image: "/portfolio/forevercar-02.png", alt: "ForeverCar.com creative work, piece 3", width: 1954, height: 1198 },
      { image: "/portfolio/forevercar-01.png", alt: "ForeverCar.com creative work, piece 4", width: 1908, height: 1142 },
    ],
  },
  {
    slug: "remeter",
    client: "(RE)meter",
    headline: "Multiple enterprise-level “testers” turned buyers",
    problem: "No way to sell/explain the product in a way that felt valuable",
    approach: "Stabilized the user experience (Bootstrap, built on proprietary code mixed with open-source) and developed a brand that was relevant",
    process: "Developed name, brand, credit score rating, trade show materials and marketing materials while parallel pathing the user experience",
    solutions: "Built a brand AROUND the credit score and data platform so that additional products could be innovated — on a subscription service",
    pieces: [
      { image: "/portfolio/remeter-03.png", alt: "(RE)meter creative work, piece 1", width: 1944, height: 1190 },
      { image: "/portfolio/remeter-04.png", alt: "(RE)meter creative work, piece 2", width: 1938, height: 1176 },
      { image: "/portfolio/remeter-00.png", alt: "(RE)meter creative work, piece 3", width: 1948, height: 1192 },
      { image: "/portfolio/remeter-01.png", alt: "(RE)meter creative work, piece 4", width: 1948, height: 1188 },
      { image: "/portfolio/remeter-02.png", alt: "(RE)meter creative work, piece 5", width: 1944, height: 1192 },
    ],
  },
  {
    slug: "microautomation",
    client: "MicroAutomation",
    headline: "Emergency Operations Solution",
    problem: "Very niche audience with hard to engage personas",
    approach: "Use research, critical insights and strategic imperatives to guide the marketing cycle and tap the unspoken emotional driver of all Public Safety Answering Points (PSAPs): peace and calm through any transition",
    process: "Create a marketing tool, virtually, as an integrated team",
    solutions: "Allowing prospects to investigate the product through four different ways",
    pieces: [
      { image: "/portfolio/microautomation-00.png", alt: "MicroAutomation creative work, piece 1", width: 880, height: 1140 },
      { image: "/portfolio/microautomation-01.png", alt: "MicroAutomation creative work, piece 2", width: 874, height: 1140 },
      { image: "/portfolio/microautomation-03.png", alt: "MicroAutomation creative work, piece 3", width: 878, height: 1142 },
      { image: "/portfolio/microautomation-02.png", alt: "MicroAutomation creative work, piece 4", width: 878, height: 1144 },
    ],
  },
  {
    slug: "industrial-loss-consultants",
    client: "Industrial Loss Consultants",
    headline: "Increased qualified lead generation by 22%",
    problem: "No brand, highly saturated market",
    approach: "Bring a provable argument to a regulatory compliant bound service: loss consulting",
    process: "Focus on the core expertise in the brand's DNA — Industrial and Technical Machines. Remove all distractions to focus on developing killer case studies",
    solutions: "Case studies that are really white papers in disguise as case studies",
    pieces: [
      { image: "/portfolio/industrial-loss-consultants-00.png", alt: "Industrial Loss Consultants creative work, piece 1", width: 1986, height: 888 },
      { image: "/portfolio/industrial-loss-consultants-01.png", alt: "Industrial Loss Consultants creative work, piece 2", width: 1708, height: 1096 },
      { image: "/portfolio/industrial-loss-consultants-02.png", alt: "Industrial Loss Consultants creative work, piece 3", width: 1682, height: 1070 },
    ],
  },
];
