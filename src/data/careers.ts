export type JobListing = {
  id: string;
  title: string;
  department: string;
  type: "Full-time" | "Part-time" | "Seasonal";
  location: string;
  summary: string;
  description: string;
  responsibilities: string[];
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
    responsibilities: [
      "Greet guests, walk them through the menu, and take orders with care",
      "Keep the dining room, counter, and takeaway station guest-ready",
      "Run food, pack orders, and handle payments without slowing the line",
      "Flag guest notes to the kitchen and close loops before they become problems",
      "Leave every table and every shift looking like FILFIL",
    ],
    requirements: [
      "Warm, confident communicator in Arabic and English",
      "Comfortable on a busy floor during lunch and evening service",
      "Available for rotating shifts, including weekends",
      "Hospitality experience is a plus — the right energy is required",
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
    responsibilities: [
      "Prep ingredients to FILFIL specs and keep the line stocked",
      "Grill, assemble, and plate sandwiches, meals, snack boxes, and sides",
      "Hold ticket times without dropping quality or presentation",
      "Keep the station clean, labelled, and ready for the next rush",
      "Follow hygiene, food-safety, and closing checklists every shift",
    ],
    requirements: [
      "Kitchen experience preferred — hunger to learn is required",
      "Calm under pressure and sharp on hygiene",
      "Comfortable standing, lifting, and working a hot line",
      "Available for rotating shifts, including weekends",
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
    responsibilities: [
      "Open, run, and close the shift across kitchen and front of house",
      "Coach the crew in the moment and jump in wherever the line needs you",
      "Protect food quality, speed, and the guest experience",
      "Handle guest issues, cash-up, and shift notes with a clear head",
      "Set the tone — calm, sharp, and on-brand",
    ],
    requirements: [
      "Previous supervisory or senior hospitality experience",
      "Clear communicator who can coach without killing the vibe",
      "Strong sense of quality, timing, and guest care",
      "Available for rotating shifts, including weekends",
    ],
  },
];

export const generalPositionLabel = "General Application";
