"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { setLocale } from "@/i18n/set-locale";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";

export function LanguageSwitch({ className }: { className?: string }) {
  const { locale, t } = useI18n();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const next = locale === "en" ? "ar" : "en";
  const label = locale === "en" ? t.common.switchToArabic : t.common.switchToEnglish;
  const name = locale === "en" ? t.common.arabic : t.common.english;

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        startTransition(async () => {
          await setLocale(next);
          router.refresh();
        });
      }}
      aria-label={label}
      className={cn(
        "inline-flex min-w-[220px] items-center rounded-xl border-2 border-beige px-6 py-3 text-left text-lg text-beige transition-opacity hover:opacity-70 disabled:opacity-50",
        className,
      )}
    >
      {name}
    </button>
  );
}
