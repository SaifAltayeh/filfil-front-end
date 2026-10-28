export const locale = {
  code: "en",
  dir: "ltr",
  name: "English",
} as const;

export type LocaleCode = typeof locale.code;
export type LocaleDir = typeof locale.dir;
