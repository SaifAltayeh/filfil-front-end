export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookie = "filfil-locale";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function localeMeta(locale: Locale) {
  return locale === "ar"
    ? { code: "ar", dir: "rtl" as const, name: "العربية" }
    : { code: "en", dir: "ltr" as const, name: "English" };
}
