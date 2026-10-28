import { media, type MediaAsset } from "@/lib/assets";

const byItem: Record<string, MediaAsset> = {
  "chicken-shawarma": media.productChickenShawarma,
  "beef-shawarma": media.productBeefShawarma,
  "batata-sandwich": media.productWrapsBox,
  "chicken-meal-single": media.productChickenShawarma,
  "chicken-meal-double": media.productChickenShawarma,
  "beef-meal-single": media.productBeefShawarma,
  "beef-meal-double": media.productBeefShawarma,
  "mix-meal-double": media.guestsEating,
  "shawarma-meal-triple": media.guestsEating,
  "halloumi-meal": media.productWrapsBox,
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

export const categoryGalleries: Record<string, MediaAsset[]> = {
  "shawarma-sandwich": [
    media.productChickenShawarma,
    media.productBeefShawarma,
    media.productWrapsBox,
  ],
  "shawarma-meal": [media.guestsEating, media.productWrapsBox, media.guestsSharing],
  "signature-snack-box": [
    media.productTruffleFries,
    media.snackBoxes,
    media.productFalafelRolls,
  ],
  "sides-add-ons": [media.sauces, media.productTruffleFries, media.oliveOilShatta],
  beverages: [media.productIcedTea, media.drinkPortrait, media.drinksToast],
};

export function galleryForCategory(categoryId: string): MediaAsset[] {
  return (
    categoryGalleries[categoryId] ?? [
      media.snackBoxes,
      media.productChickenShawarma,
      media.guestsEating,
    ]
  );
}

export function imageForMenuItem(itemId: string, categoryId: string): MediaAsset {
  return byItem[itemId] ?? byCategory[categoryId] ?? media.snackBoxes;
}
