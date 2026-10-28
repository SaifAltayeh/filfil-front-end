export const faqs = [
  {
    id: "different",
    question: "What makes FILFIL different?",
    answer:
      "FILFIL brings together Levantine roots, Mediterranean inspiration, carefully selected ingredients, and creative flavours. We give familiar favourites a fresh perspective while creating an atmosphere people love spending time in.",
  },
  {
    id: "location",
    question: "Where is FILFIL located?",
    answer: "You can find FILFIL at Sweifieh Village, Amman, Jordan.",
  },
  {
    id: "catering",
    question: "Does FILFIL offer catering?",
    answer:
      "Yes! FILFIL welcomes catering enquiries for team lunches, office gatherings, celebrations, and special occasions. Visit our Catering page to tell us about your event.",
  },
  {
    id: "vegetarian",
    question: "Are vegetarian options available?",
    answer:
      "Our menu includes vegetarian choices such as Falafel Rolls. Explore the menu or contact our team about specific dietary requirements.",
  },
  {
    id: "franchise",
    question: "Can I explore franchise opportunities with FILFIL?",
    answer:
      "Absolutely. We're interested in connecting with entrepreneurs and business partners who share our vision. Visit the Franchise page to submit an enquiry.",
  },
  {
    id: "careers",
    question: "How can I apply to join the FILFIL team?",
    answer:
      "Visit our Careers page to explore available positions or submit a general application.",
  },
] as const;

export type FaqItem = (typeof faqs)[number];
