"use client";

import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";

export function Brand({ className }: { className?: string }) {
  const { locale } = useI18n();

  return (
    <span className={cn("normal-case", className)}>{locale === "ar" ? "فلفل" : "filfil"}</span>
  );
}

export function BrandCta({ label }: { label: string }) {
  return (
    <span className="inline-flex items-baseline gap-[0.4em]">
      <span>{label}</span>
      <span>
        <Brand />.
      </span>
    </span>
  );
}
