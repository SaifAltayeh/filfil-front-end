export const logos = {
  dark: "/assets/logos/filfil-mark.png",
  light: "/assets/logos/filfil-mark-light.png",
} as const;

export const videos = {
  heroDesktop: "/assets/videos/hero-desktop.mp4",
  heroMobile: "/assets/videos/hero-mobile.mp4",
} as const;

export const media = {
  heroPosterDesktop: {
    src: "/assets/media/hero-poster-desktop.jpg",
    alt: "Sharing FILFIL falafel rolls at the table",
    width: 2400,
    height: 1800,
  },
  heroPosterMobile: {
    src: "/assets/media/hero-poster-mobile.jpg",
    alt: "Close-up of grilled FILFIL shawarma",
    width: 1200,
    height: 2133,
  },
  snackBoxes: {
    src: "/assets/media/snack-boxes.jpg",
    alt: "FILFIL signature snack boxes with sweet fries, shawarma wraps, and falafel rolls",
    width: 1920,
    height: 2400,
  },
  cateringSpread: {
    src: "/assets/media/catering-spread.jpg",
    alt: "FILFIL catering spread of snack boxes, sauces, and drinks against green tile",
    width: 1920,
    height: 2400,
  },
  cateringTable: {
    src: "/assets/media/catering-table.jpg",
    alt: "Sharing table of FILFIL food, drinks, and branded bags",
    width: 2400,
    height: 1920,
  },
  tableGreenWall: {
    src: "/assets/media/table-green-wall.jpg",
    alt: "FILFIL catering table set against the restaurant’s green tile wall",
    width: 2400,
    height: 1920,
  },
  guestsEating: {
    src: "/assets/media/guests-eating.jpg",
    alt: "Two guests eating FILFIL shawarma sandwiches",
    width: 1920,
    height: 2400,
  },
  guestsSharing: {
    src: "/assets/media/guests-sharing.jpg",
    alt: "Friends sharing FILFIL shawarma with snack boxes on the table",
    width: 1920,
    height: 2400,
  },
  guestsLaughing: {
    src: "/assets/media/guests-laughing.jpg",
    alt: "Guests laughing together over FILFIL food",
    width: 1920,
    height: 2400,
  },
  drinksToast: {
    src: "/assets/media/drinks-toast.jpg",
    alt: "Two FILFIL iced drinks raised in a toast",
    width: 1920,
    height: 2400,
  },
  drinkPortrait: {
    src: "/assets/media/drink-portrait.jpg",
    alt: "Guest holding a branded FILFIL iced drink",
    width: 1920,
    height: 2400,
  },
  drinkInHand: {
    src: "/assets/media/drink-in-hand.jpg",
    alt: "Iced FILFIL drink held against the green tile wall",
    width: 1920,
    height: 2400,
  },
  merchTee: {
    src: "/assets/media/merch-tee.jpg",
    alt: "FILFIL Shawarma Addict t-shirt held in front of the restaurant counter",
    width: 1920,
    height: 2400,
  },
  sauces: {
    src: "/assets/media/sauces.jpg",
    alt: "Stacked FILFIL sauce cups including tahini, truffle, and garlic",
    width: 1920,
    height: 2400,
  },
  oliveOilShatta: {
    src: "/assets/media/olive-oil-shatta.jpg",
    alt: "FILFIL extra virgin olive oil and shatta, proudly made in Jordan",
    width: 1920,
    height: 2400,
  },
  officialMenu: {
    src: "/assets/menu/official-menu.jpeg",
    alt: "Official FILFIL menu",
    width: 1024,
    height: 1600,
  },
  og: {
    src: "/assets/media/og.jpg",
    alt: "FILFIL — Next Level Food",
    width: 1200,
    height: 630,
  },
  productChickenShawarma: {
    src: "/assets/media/product-chicken-shawarma.jpg",
    alt: "FILFIL chicken shawarma wraps with garlic sauce",
    width: 1400,
    height: 1750,
  },
  productBeefShawarma: {
    src: "/assets/media/product-beef-shawarma.jpg",
    alt: "FILFIL beef shawarma wraps",
    width: 1400,
    height: 1750,
  },
  productTruffleFries: {
    src: "/assets/media/product-truffle-fries.jpg",
    alt: "FILFIL sweet potato fries with sauce and parmesan",
    width: 1400,
    height: 1750,
  },
  productFalafelRolls: {
    src: "/assets/media/product-falafel-rolls.jpg",
    alt: "FILFIL falafel rolls served with tahini sauce",
    width: 1400,
    height: 1750,
  },
  productIcedTea: {
    src: "/assets/media/product-iced-tea.jpg",
    alt: "FILFIL brewed iced tea",
    width: 1400,
    height: 1750,
  },
} as const;

export type MediaAsset = (typeof media)[keyof typeof media];
