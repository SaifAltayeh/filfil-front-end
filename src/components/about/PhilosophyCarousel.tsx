"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";

export function PhilosophyCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { t, locale } = useI18n();
  const pillars = t.about.pillars;
  const arabic = locale === "ar";

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const slides = () => [...root.querySelectorAll<HTMLElement>("[data-slide]")];

    const padEnd = () => {
      const slide = slides()[0];
      if (!slide) return;
      const padStart = Number.parseFloat(getComputedStyle(root).paddingInlineStart);
      const extra = Math.max(0, root.clientWidth - slide.getBoundingClientRect().width - padStart);
      root.style.paddingInlineEnd = `${extra}px`;
    };

    const sync = () => {
      const items = slides();
      const rtl = getComputedStyle(root).direction === "rtl";
      const rootRect = root.getBoundingClientRect();
      const padStart = Number.parseFloat(getComputedStyle(root).paddingInlineStart);
      const startX = rtl ? rootRect.right - padStart : rootRect.left + padStart;
      const next = items.findIndex((slide) => {
        const rect = slide.getBoundingClientRect();
        return rtl ? rect.left < startX - 40 : rect.right > startX + 40;
      });
      setActive(next === -1 ? Math.max(0, items.length - 1) : next);
    };

    const layout = () => {
      padEnd();
      sync();
    };

    layout();
    const ro = new ResizeObserver(layout);
    ro.observe(root);
    root.addEventListener("scroll", sync, { passive: true });
    return () => {
      ro.disconnect();
      root.removeEventListener("scroll", sync);
    };
  }, []);

  const goTo = (index: number) => {
    const root = scrollerRef.current;
    const slide = root?.querySelectorAll<HTMLElement>("[data-slide]")[index];
    slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        className="-mx-5 flex cursor-grab snap-x snap-mandatory gap-10 overflow-x-auto overscroll-x-contain pt-16 pb-4 ps-5 scroll-ps-5 [scrollbar-width:none] md:-mx-10 md:gap-14 md:ps-10 md:scroll-ps-10 lg:-mx-16 lg:ps-16 lg:scroll-ps-16 md:cursor-auto [&::-webkit-scrollbar]:hidden"
      >
        {pillars.map((pillar, index) => (
          <article
            key={pillar.title}
            data-slide
            onClick={() => goTo(index)}
            className={cn(
              "w-[min(86vw,28rem)] shrink-0 snap-start overflow-hidden border-t border-black/10 pt-8 transition-opacity duration-300",
              index === active ? "opacity-100" : "opacity-30",
            )}
          >
            <p className="eyebrow mb-4">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-snug tracking-[-0.03em]">
              {arabic ? pillar.title : `${pillar.title}.`}
            </h3>
            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-black/70">
              {pillar.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-2 md:hidden" role="tablist" aria-label={arabic ? "الشرائح" : "Slides"}>
        {pillars.map((pillar, index) => (
          <button
            key={pillar.title}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`${index + 1}`}
            onClick={() => goTo(index)}
            className={cn(
              "h-2 rounded-full transition-[width,background-color] duration-300",
              index === active ? "w-6 bg-black" : "w-2 bg-black/25",
            )}
          />
        ))}
      </div>
    </div>
  );
}
