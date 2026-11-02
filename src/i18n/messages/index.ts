import { ar } from "./ar";
import { en } from "./en";
import type { Locale } from "../locale";

export type Messages = typeof en;

export const dictionaries: Record<Locale, Messages> = { en, ar };
