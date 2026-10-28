export type DietaryTag = "vegetarian" | "vegan";

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description?: string;
  dietary?: DietaryTag[];
  note?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  intro?: string;
  note?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "shawarma-sandwich",
    name: "Shawarma Sandwich",
    items: [
      {
        id: "chicken-shawarma",
        name: "Chicken Shawarma",
        price: 2.25,
        description: "Chicken, garlic sauce, pickles, wrapped in shrak bread.",
      },
      {
        id: "beef-shawarma",
        name: "Beef Shawarma",
        price: 2.5,
        description:
          "Beef, tahini sauce, sumac onion, parsley topped with double tahini sauce, wrapped in shrak bread.",
      },
      {
        id: "batata-sandwich",
        name: "Batata Sandwich",
        price: 2.0,
        description:
          "Fries dusted with special seasoning, garlic sauce, pickles, wrapped in shrak bread.",
        dietary: ["vegetarian"],
      },
    ],
  },
  {
    id: "shawarma-meal",
    name: "Shawarma Meal",
    note: "Sweet potato upgrade: +1.75 JD.",
    items: [
      {
        id: "chicken-meal-single",
        name: "Chicken Shawarma Meal (single)",
        price: 3.9,
        description: "Garlic sauce, crispy fries, pickles.",
      },
      {
        id: "chicken-meal-double",
        name: "Chicken Shawarma Meal (double)",
        price: 4.9,
      },
      {
        id: "beef-meal-single",
        name: "Beef Shawarma Meal (single)",
        price: 4.5,
        description: "Tahini sauce, crispy fries, pickles.",
      },
      {
        id: "beef-meal-double",
        name: "Beef Shawarma Meal (double)",
        price: 5.5,
      },
      {
        id: "mix-meal-double",
        name: "Mix Shawarma Meal (double)",
        price: 6.0,
      },
      {
        id: "shawarma-meal-triple",
        name: "Shawarma Meal (triple)",
        price: 7.5,
      },
      {
        id: "halloumi-meal",
        name: "Halloumi Shawarma Meal",
        price: 5.5,
        description: "Pesto tahini sauce, garlic sauce, crispy fries, pickles.",
        dietary: ["vegetarian"],
      },
    ],
  },
  {
    id: "signature-snack-box",
    name: "Signature Snack Box",
    items: [
      {
        id: "filfil-sweet-fries",
        name: "Filfil Sweet Fries",
        price: 4.75,
        description:
          "Sweet potato fries topped with garlic sauce, and a pinch of cilantro.",
        dietary: ["vegetarian"],
      },
      {
        id: "truffle-sweet-fries",
        name: "Truffle Sweet Fries",
        price: 5.9,
        description:
          "Crispy sweet potato fries topped with truffle mayo, parmesan cheese, and a drizzle of hot honey.",
        dietary: ["vegetarian"],
      },
      {
        id: "falafel-rolls",
        name: "Falafel Rolls",
        price: 3.9,
        description: "Crispy vegan falafel rolls, served with sumac tahini sauce.",
        dietary: ["vegan"],
      },
      {
        id: "chicken-snack-box",
        name: "Chicken Shawarma Snack Box",
        price: 3.75,
        description:
          "Crispy fries, topped with chicken shawarma, cheese, garlic sauce and pickles.",
      },
      {
        id: "beef-snack-box",
        name: "Beef Shawarma Snack Box",
        price: 4.25,
        description:
          "Crispy fries, topped with beef shawarma, tahini sauce, pomegranate sauce and finished with a touch of pistachio nut.",
      },
    ],
  },
  {
    id: "sides-add-ons",
    name: "Sides & Add-Ons",
    items: [
      { id: "french-fries", name: "French Fries", price: 2.0, dietary: ["vegetarian"] },
      {
        id: "sweet-potato-fries",
        name: "Sweet Potato Fries",
        price: 3.0,
        dietary: ["vegetarian"],
      },
      {
        id: "mozzarella-fingers",
        name: "Mozzarella Fingers",
        price: 3.9,
        dietary: ["vegetarian"],
      },
      { id: "garlic-sauce", name: "Garlic Sauce", price: 0.5, dietary: ["vegetarian"] },
      {
        id: "vegan-garlic-sauce",
        name: "Vegan Garlic Sauce",
        price: 0.75,
        dietary: ["vegan"],
      },
      {
        id: "spicy-garlic-sauce",
        name: "Spicy Garlic Sauce",
        price: 0.5,
        dietary: ["vegetarian"],
      },
      { id: "tahini-sauce", name: "Tahini Sauce", price: 0.5, dietary: ["vegan"] },
      {
        id: "truffle-mayo-sauce",
        name: "Truffle Mayo Sauce",
        price: 0.75,
        dietary: ["vegetarian"],
      },
      {
        id: "pesto-tahini-sauce",
        name: "Pesto Tahini Sauce",
        price: 0.75,
        dietary: ["vegetarian"],
      },
      { id: "hot-honey-sauce", name: "Hot Honey Sauce", price: 0.75 },
      { id: "cheese-sauce", name: "Cheese Sauce", price: 0.5, dietary: ["vegetarian"] },
      {
        id: "pomegranate-sauce",
        name: "Pomegranate Sauce",
        price: 0.5,
        dietary: ["vegan"],
      },
      { id: "ranch", name: "Ranch", price: 0.5, dietary: ["vegetarian"] },
      { id: "red-sriracha", name: "Red Sriracha", price: 0.5, dietary: ["vegan"] },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    items: [
      { id: "lemonade", name: "Lemonade", price: 2.5 },
      { id: "real-orange", name: "Real Orange", price: 2.5 },
      { id: "brewed-ice-tea", name: "Brewed Ice Tea", price: 3.0 },
      { id: "ayran", name: "Ayran", price: 2.0, dietary: ["vegetarian"] },
      { id: "soda-drinks", name: "Soda Drinks", price: 0.5 },
      { id: "redbull", name: "Redbull", price: 2.25 },
      { id: "still-water", name: "Still Water", price: 0.5, dietary: ["vegan"] },
      { id: "sparkling-water", name: "Sparkling Water", price: 2.0, dietary: ["vegan"] },
    ],
  },
];

export function formatPrice(price: number) {
  return `${price.toFixed(2)} JD`;
}
