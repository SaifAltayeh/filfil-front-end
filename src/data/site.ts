export const site = {
  name: "FILFIL",
  legalName: "FILFIL",
  slogan: "NEXT LEVEL FOOD.",
  tagline: "Levantine Roots. Mediterranean Inspiration.",
  messages: {
    ingredients: "TRUE INGREDIENTS. BOLD FLAVOURS.",
    feeling: "COME FOR THE FOOD. STAY FOR THE FEELING.",
  },
  description:
    "FILFIL is a contemporary Mediterranean restaurant in Sweifieh Village, Amman. Levantine roots, Mediterranean inspiration, and next level food.",
  location: {
    name: "FILFIL",
    area: "Sweifieh Village",
    city: "Amman",
    country: "Jordan",
    display: "Sweifieh Village, Amman, Jordan.",
    mapsQuery: "FILFIL Sweifieh Village Amman Jordan",
  },
  get url() {
    return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  },
  get email() {
    return process.env.NEXT_PUBLIC_CONTACT_EMAIL || null;
  },
  get phone() {
    return process.env.NEXT_PUBLIC_CONTACT_PHONE || null;
  },
  get instagram() {
    return process.env.NEXT_PUBLIC_INSTAGRAM_URL || null;
  },
  get tiktok() {
    return process.env.NEXT_PUBLIC_TIKTOK_URL || null;
  },
  get mapsEmbedUrl() {
    if (process.env.NEXT_PUBLIC_MAPS_EMBED_URL) {
      return process.env.NEXT_PUBLIC_MAPS_EMBED_URL;
    }
    return "https://maps.google.com/maps?q=FILFIL%20Sweifieh%20Village%20Amman%20Jordan&output=embed";
  },
} as const;

export type SiteConfig = typeof site;
