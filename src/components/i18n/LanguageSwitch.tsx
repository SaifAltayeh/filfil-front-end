"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { localeMeta, locales, type Locale } from "@/i18n/locale";
import { setLocale } from "@/i18n/set-locale";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";

export function LanguageSwitch({
  className,
  placement = "down",
  align = "end",
}: {
  className?: string;
  placement?: "down" | "up";
  align?: "start" | "end";
}) {
  const { locale, t } = useI18n();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (next: Locale) => {
    setOpen(false);
    if (next === locale || pending) return;
    startTransition(async () => {
      await setLocale(next);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      router.refresh();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        disabled={pending}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${t.common.english} / ${t.common.arabic}`}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1.5 py-2 text-current"
      >
        <span aria-hidden className="text-[0.85rem] leading-none font-medium tracking-[0.14em]">
          {localeMeta(locale).short}
        </span>
        <svg
          viewBox="0 0 12 8"
          className={cn("h-2 w-2.5 transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        >
          <path
            d="M1 1.5 6 6.5 11 1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <ul
          id={menuId}
          role="listbox"
          aria-label={`${t.common.english} / ${t.common.arabic}`}
          className={cn(
            "absolute z-[90] min-w-[5.5rem] bg-beige py-2 text-black shadow-[0_16px_40px_rgba(0,0,0,0.16)] ring-1 ring-black/10",
            placement === "up" ? "bottom-full mb-3" : "top-full mt-3",
            align === "start" ? "start-0" : "end-0",
          )}
        >
          {locales.map((code) => {
            const active = code === locale;
            const meta = localeMeta(code);
            return (
              <li key={code} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  aria-label={meta.name}
                  onClick={() => choose(code)}
                  className={cn(
                    "block w-full px-5 py-2 text-start text-[0.95rem] leading-none tracking-[0.12em]",
                    active ? "text-black" : "text-black/40",
                  )}
                >
                  {meta.short}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
