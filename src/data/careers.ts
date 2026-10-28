export type JobListing = {
  id: string;
  title: string;
  department: string;
  type: "Full-time" | "Part-time" | "Seasonal";
  location: string;
  summary: string;
  description: string;
  requirements: string[];
};

export const jobs: JobListing[] = [
  {
    id: "front-of-house",
    title: "Front of House",
    department: "Guest Experience",
    type: "Full-time",
    location: "Sweifieh Village, Amman",
    summary: "Be the first smile guests meet — service as considered as the food.",
    description:
      "You’ll welcome guests, keep the floor moving, and make FILFIL feel like a place people want to stay.",
    requirements: [
      "Warm, confident communicator in Arabic and English",
      "Comfortable on a busy floor during lunch and evening service",
      "Pride in a clean station and a genuine guest experience",
    ],
  },
  {
    id: "kitchen-crew",
    title: "Kitchen Crew",
    department: "Kitchen",
    type: "Full-time",
    location: "Sweifieh Village, Amman",
    summary: "Prep, grill, and plate the food that made FILFIL FILFIL.",
    description:
      "You’ll work the line on shawarma, snack boxes, and sides — true ingredients, consistent flavour, no shortcuts.",
    requirements: [
      "Kitchen experience preferred, hunger to learn required",
      "Calm under pressure and sharp on hygiene",
      "Available for rotating shifts including weekends",
    ],
  },
  {
    id: "shift-supervisor",
    title: "Shift Supervisor",
    department: "Operations",
    type: "Full-time",
    location: "Sweifieh Village, Amman",
    summary: "Run the shift, back the crew, keep the standard high.",
    description:
      "You’ll lead service, support both kitchen and floor, and keep FILFIL feeling tight when it gets busy.",
    requirements: [
      "Previous supervisory or senior hospitality experience",
      "Clear communicator who can coach without killing the vibe",
      "Strong sense of quality, timing, and guest care",
    ],
  },
];

export const generalPositionLabel = "General Application";
