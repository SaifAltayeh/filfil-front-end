"use server";

import { cookies } from "next/headers";
import { isLocale, localeCookie, type Locale } from "./locale";

export async function setLocale(locale: Locale) {
  if (!isLocale(locale)) return;
  const jar = await cookies();
  jar.delete("filfil-locale");
  jar.set(localeCookie, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
