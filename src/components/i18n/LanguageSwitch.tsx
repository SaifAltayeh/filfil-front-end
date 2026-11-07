"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { buttonClassName } from "@/components/ui/Button";
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
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          router.refresh();
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        });
      }}
      aria-label={label}
      className={cn(
        buttonClassName({ variant: "outline", tone: "light" }),
        "!px-7 !py-3.5 !text-[0.88rem] !tracking-[0.1em] sm:!px-8 sm:!py-4 sm:!text-[0.95rem] sm:!tracking-[0.14em]",
        className,
      )}
    >
      {name}
    </button>
  );
}
