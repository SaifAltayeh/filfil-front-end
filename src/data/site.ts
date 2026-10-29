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
    lat: 31.948179,
    lng: 35.864729,
  },
  get url() {
    return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  },
  get email() {
    return process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@filfiljo.com";
  },
  get phone() {
    return process.env.NEXT_PUBLIC_CONTACT_PHONE || "+962 7 9763 6510";
  },
  get instagram() {
    return process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/filfiljo/";
  },
  get tiktok() {
    return process.env.NEXT_PUBLIC_TIKTOK_URL || "https://www.tiktok.com/@filfiljo";
  },
  get mapsUrl() {
    const { lat, lng } = this.location;
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  },
  get mapsEmbedUrl() {
    if (process.env.NEXT_PUBLIC_MAPS_EMBED_URL) {
      return process.env.NEXT_PUBLIC_MAPS_EMBED_URL;
    }
    const { lat, lng } = this.location;
    return `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
  },
} as const;

export type SiteConfig = typeof site;
