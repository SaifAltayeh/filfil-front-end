import { media } from "@/lib/assets";

export const featuredProducts = [
  {
    id: "chicken-shawarma",
    name: "Chicken Shawarma",
    caption: "Chicken Shawarma, garlic sauce, shrak bread",
    href: "/menu#shawarma-sandwich",
    price: 2.25,
    image: media.productChickenShawarma,
  },
  {
    id: "truffle-sweet-fries",
    name: "Truffle Sweet Fries",
    caption: "Truffle Sweet Fries, parmesan, hot honey",
    href: "/menu#signature-snack-box",
    price: 5.9,
    image: media.productTruffleFries,
  },
  {
    id: "falafel-rolls",
    name: "Falafel Rolls",
    caption: "Falafel Rolls, sumac tahini sauce",
    href: "/menu#signature-snack-box",
    price: 3.9,
    image: media.productFalafelRolls,
  },
  {
    id: "beef-shawarma",
    name: "Beef Shawarma",
    caption: "Beef Shawarma, tahini, sumac onion",
    href: "/menu#shawarma-sandwich",
    price: 2.5,
    image: media.productBeefShawarma,
  },
  {
    id: "brewed-ice-tea",
    name: "Brewed Ice Tea",
    caption: "Brewed Ice Tea, FILFIL, Amman",
    href: "/menu#beverages",
    price: 3.0,
    image: media.productIcedTea,
  },
  {
    id: "signature-snack-box",
    name: "Signature Snack Box",
    caption: "Signature Snack Box, made for sharing",
    href: "/menu#signature-snack-box",
    price: 3.75,
    image: media.snackBoxes,
  },
] as const;
