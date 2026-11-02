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
  const short = locale === "en" ? t.common.arabic : t.common.english;

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
        "eyebrow py-2 !text-[15px] leading-none transition-opacity hover:opacity-60 disabled:opacity-50",
        className,
      )}
    >
      {short}
    </button>
  );
}
