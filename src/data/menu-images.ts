import { media, type MediaAsset } from "@/lib/assets";

const byItem: Record<string, MediaAsset> = {
  "chicken-shawarma": media.productChickenShawarma,
  "beef-shawarma": media.productBeefShawarma,
  "batata-sandwich": media.snackBoxes,
  "chicken-meal-single": media.productChickenShawarma,
  "chicken-meal-double": media.productChickenShawarma,
  "beef-meal-single": media.productBeefShawarma,
  "beef-meal-double": media.productBeefShawarma,
  "mix-meal-double": media.guestsEating,
  "shawarma-meal-triple": media.guestsEating,
  "halloumi-meal": media.snackBoxes,
  "filfil-sweet-fries": media.productTruffleFries,
  "truffle-sweet-fries": media.productTruffleFries,
  "falafel-rolls": media.productFalafelRolls,
  "chicken-snack-box": media.snackBoxes,
  "beef-snack-box": media.snackBoxes,
  "french-fries": media.productTruffleFries,
  "sweet-potato-fries": media.productTruffleFries,
  "mozzarella-fingers": media.snackBoxes,
  "brewed-ice-tea": media.productIcedTea,
  lemonade: media.drinkPortrait,
  "real-orange": media.drinkPortrait,
  ayran: media.drinksToast,
  "soda-drinks": media.drinkInHand,
  redbull: media.drinkInHand,
  "still-water": media.drinksToast,
  "sparkling-water": media.drinksToast,
};

const byCategory: Record<string, MediaAsset> = {
  "sides-add-ons": media.sauces,
  beverages: media.productIcedTea,
};

export function imageForMenuItem(itemId: string, categoryId: string): MediaAsset {
  return byItem[itemId] ?? byCategory[categoryId] ?? media.snackBoxes;
}
