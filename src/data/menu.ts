export type DietaryTag = "vegetarian" | "vegan";

export type MenuItem = {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  description?: string;
  descriptionAr?: string;
  dietary?: DietaryTag[];
  note?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  nameAr: string;
  intro?: string;
  note?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "shawarma-sandwich",
    name: "Shawarma Sandwich",
    nameAr: "ساندويش شاورما",
    items: [
      {
        id: "chicken-shawarma",
        name: "Chicken Shawarma",
        nameAr: "شاورما دجاج",
        price: 2.25,
        description: "Chicken, garlic sauce, pickles, wrapped in shrak bread.",
        descriptionAr: "دجاج، صلصة ثوم، مخلل، ملفوفة بخبز الشراك.",
      },
      {
        id: "beef-shawarma",
        name: "Beef Shawarma",
        nameAr: "شاورما لحم",
        price: 2.5,
        description:
          "Beef, tahini sauce, sumac onion, parsley topped with double tahini sauce, wrapped in shrak bread.",
        descriptionAr:
          "لحم، صلصة طحينة، بصل سماق، بقدونس مع صلصة طحينة مضاعفة، ملفوفة بخبز الشراك.",
      },
      {
        id: "batata-sandwich",
        name: "Batata Sandwich",
        nameAr: "ساندويش بطاطا",
        price: 2.0,
        description:
          "Fries dusted with special seasoning, garlic sauce, pickles, wrapped in shrak bread.",
        descriptionAr: "بطاطا مقلية بتتبيلة خاصة، صلصة ثوم، مخلل، ملفوفة بخبز الشراك.",
        dietary: ["vegetarian"],
      },
    ],
  },
  {
    id: "shawarma-meal",
    name: "Shawarma Meal",
    nameAr: "وجبة شاورما",
    note: "Sweet potato upgrade: +1.75 JD.",
    items: [
      {
        id: "chicken-meal-single",
        name: "Chicken Shawarma Meal (single)",
        nameAr: "وجبة شاورما دجاج (فردية)",
        price: 3.9,
        description: "Garlic sauce, crispy fries, pickles.",
        descriptionAr: "صلصة ثوم، بطاطا مقرمشة، مخلل.",
      },
      {
        id: "chicken-meal-double",
        name: "Chicken Shawarma Meal (double)",
        nameAr: "وجبة شاورما دجاج (مزدوجة)",
        price: 4.9,
      },
      {
        id: "beef-meal-single",
        name: "Beef Shawarma Meal (single)",
        nameAr: "وجبة شاورما لحم (فردية)",
        price: 4.5,
        description: "Tahini sauce, crispy fries, pickles.",
        descriptionAr: "صلصة طحينة، بطاطا مقرمشة، مخلل.",
      },
      {
        id: "beef-meal-double",
        name: "Beef Shawarma Meal (double)",
        nameAr: "وجبة شاورما لحم (مزدوجة)",
        price: 5.5,
      },
      {
        id: "mix-meal-double",
        name: "Mix Shawarma Meal (double)",
        nameAr: "وجبة شاورما مكس (مزدوجة)",
        price: 6.0,
      },
      {
        id: "shawarma-meal-triple",
        name: "Shawarma Meal (triple)",
        nameAr: "وجبة شاورما (ثلاثية)",
        price: 7.5,
      },
      {
        id: "halloumi-meal",
        name: "Halloumi Shawarma Meal",
        nameAr: "وجبة شاورما حلوم",
        price: 5.5,
        description: "Pesto tahini sauce, garlic sauce, crispy fries, pickles.",
        descriptionAr: "صلصة طحينة بيستو، صلصة ثوم، بطاطا مقرمشة، مخلل.",
        dietary: ["vegetarian"],
      },
    ],
  },
  {
    id: "signature-snack-box",
    name: "Signature Snack Box",
    nameAr: "بوكس السناك المميز",
    items: [
      {
        id: "filfil-sweet-fries",
        name: "Filfil Sweet Fries",
        nameAr: "بطاطا فلفل الحلوة",
        price: 4.75,
        description:
          "Sweet potato fries topped with garlic sauce, and a pinch of cilantro.",
        descriptionAr: "بطاطا حلوة مغطاة بصلصة الثوم ورشة كزبرة.",
        dietary: ["vegetarian"],
      },
      {
        id: "truffle-sweet-fries",
        name: "Truffle Sweet Fries",
        nameAr: "بطاطا حلوة بالكمأة",
        price: 5.9,
        description:
          "Crispy sweet potato fries topped with truffle mayo, parmesan cheese, and a drizzle of hot honey.",
        descriptionAr: "بطاطا حلوة مقرمشة مع مايونيز الكمأة وجبن البارميزان ورشة عسل حار.",
        dietary: ["vegetarian"],
      },
      {
        id: "falafel-rolls",
        name: "Falafel Rolls",
        nameAr: "رولات فلافل",
        price: 3.9,
        description: "Crispy vegan falafel rolls, served with sumac tahini sauce.",
        descriptionAr: "رولات فلافل نباتية مقرمشة، تقدَّم مع صلصة طحينة بسماق.",
        dietary: ["vegan"],
      },
      {
        id: "chicken-snack-box",
        name: "Chicken Shawarma Snack Box",
        nameAr: "بوكس سناك شاورما دجاج",
        price: 3.75,
        description:
          "Crispy fries, topped with chicken shawarma, cheese, garlic sauce and pickles.",
        descriptionAr: "بطاطا مقرمشة مع شاورما دجاج وجبن وصلصة ثوم ومخلل.",
      },
      {
        id: "beef-snack-box",
        name: "Beef Shawarma Snack Box",
        nameAr: "بوكس سناك شاورما لحم",
        price: 4.25,
        description:
          "Crispy fries, topped with beef shawarma, tahini sauce, pomegranate sauce and finished with a touch of pistachio nut.",
        descriptionAr: "بطاطا مقرمشة مع شاورما لحم وصلصة طحينة وصلصة رمان ولمسة فستق.",
      },
    ],
  },
  {
    id: "sides-add-ons",
    name: "Sides & Add-Ons",
    nameAr: "الإضافات والصلصات",
    items: [
      { id: "french-fries", name: "French Fries", nameAr: "بطاطا مقلية", price: 2.0, dietary: ["vegetarian"] },
      {
        id: "sweet-potato-fries",
        name: "Sweet Potato Fries",
        nameAr: "بطاطا حلوة",
        price: 3.0,
        dietary: ["vegetarian"],
      },
      {
        id: "mozzarella-fingers",
        name: "Mozzarella Fingers",
        nameAr: "أصابع موزاريلا",
        price: 3.9,
        dietary: ["vegetarian"],
      },
      { id: "garlic-sauce", name: "Garlic Sauce", nameAr: "صلصة ثوم", price: 0.5, dietary: ["vegetarian"] },
      {
        id: "vegan-garlic-sauce",
        name: "Vegan Garlic Sauce",
        nameAr: "صلصة ثوم نباتية",
        price: 0.75,
        dietary: ["vegan"],
      },
      {
        id: "spicy-garlic-sauce",
        name: "Spicy Garlic Sauce",
        nameAr: "صلصة ثوم حارة",
        price: 0.5,
        dietary: ["vegetarian"],
      },
      { id: "tahini-sauce", name: "Tahini Sauce", nameAr: "صلصة طحينة", price: 0.5, dietary: ["vegan"] },
      {
        id: "truffle-mayo-sauce",
        name: "Truffle Mayo Sauce",
        nameAr: "صلصة مايونيز بالكمأة",
        price: 0.75,
        dietary: ["vegetarian"],
      },
      {
        id: "pesto-tahini-sauce",
        name: "Pesto Tahini Sauce",
        nameAr: "صلصة طحينة بيستو",
        price: 0.75,
        dietary: ["vegetarian"],
      },
      { id: "hot-honey-sauce", name: "Hot Honey Sauce", nameAr: "صلصة عسل حار", price: 0.75 },
      { id: "cheese-sauce", name: "Cheese Sauce", nameAr: "صلصة جبن", price: 0.5, dietary: ["vegetarian"] },
      {
        id: "pomegranate-sauce",
        name: "Pomegranate Sauce",
        nameAr: "صلصة رمان",
        price: 0.5,
        dietary: ["vegan"],
      },
      { id: "ranch", name: "Ranch", nameAr: "راتش", price: 0.5, dietary: ["vegetarian"] },
      { id: "red-sriracha", name: "Red Sriracha", nameAr: "سيراتشا حمراء", price: 0.5, dietary: ["vegan"] },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    nameAr: "المشروبات",
    items: [
      { id: "lemonade", name: "Lemonade", nameAr: "ليموناضة", price: 2.5 },
      { id: "real-orange", name: "Real Orange", nameAr: "برتقال طبيعي", price: 2.5 },
      { id: "brewed-ice-tea", name: "Brewed Ice Tea", nameAr: "شاي مثلج مخمّر", price: 3.0 },
      { id: "ayran", name: "Ayran", nameAr: "عيران", price: 2.0, dietary: ["vegetarian"] },
      { id: "soda-drinks", name: "Soda Drinks", nameAr: "مشروبات غازية", price: 0.5 },
      { id: "redbull", name: "Redbull", nameAr: "ريد بول", price: 2.25 },
      { id: "still-water", name: "Still Water", nameAr: "مياه عادية", price: 0.5, dietary: ["vegan"] },
      { id: "sparkling-water", name: "Sparkling Water", nameAr: "مياه غازية", price: 2.0, dietary: ["vegan"] },
    ],
  },
];

export function formatPrice(price: number, arabic = false) {
  return arabic ? `${price.toFixed(2)} د.أ.` : `${price.toFixed(2)} JD`;
}
