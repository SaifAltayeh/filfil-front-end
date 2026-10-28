export const mainNav = [
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/franchise", label: "Franchise" },
  { href: "/contact", label: "Contact Us" },
  { href: "/careers", label: "Careers" },
] as const;

export const footerNav = [
  ...mainNav,
  { href: "/privacy", label: "Privacy Policy" },
] as const;

export type NavItem = (typeof mainNav)[number];
