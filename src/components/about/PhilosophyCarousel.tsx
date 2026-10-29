"use client";

import { useEffect, useRef, useState } from "react";
import { philosophyPillars } from "@/data/philosophy";
import { cn } from "@/lib/cn";

export function PhilosophyCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const slides = () => [...root.querySelectorAll<HTMLElement>("[data-slide]")];

    const padEnd = () => {
      const slide = slides()[0];
      if (!slide) return;
      const pl = Number.parseFloat(getComputedStyle(root).paddingLeft);
      const extra = Math.max(0, root.clientWidth - slide.getBoundingClientRect().width - pl);
      root.style.paddingRight = `${extra}px`;
    };

    const sync = () => {
      const items = slides();
      const snapX =
        root.getBoundingClientRect().left +
        Number.parseFloat(getComputedStyle(root).paddingLeft);
      const next = items.findIndex((slide) => slide.getBoundingClientRect().right > snapX + 40);
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
    if (!root || !slide) return;
    const padding = Number.parseFloat(getComputedStyle(root).paddingLeft);
    const left =
      root.scrollLeft +
      (slide.getBoundingClientRect().left - root.getBoundingClientRect().left) -
      padding;
    root.scrollTo({ left, behavior: "smooth" });
  };

  return (
    <div
      ref={scrollerRef}
      className="-mx-5 flex snap-x snap-mandatory gap-8 overflow-x-auto overscroll-x-contain pt-16 pb-4 pl-5 scroll-ps-5 [scrollbar-width:none] md:-mx-10 md:pl-10 md:scroll-ps-10 lg:-mx-16 lg:pl-16 lg:scroll-ps-16 [&::-webkit-scrollbar]:hidden"
    >
      {philosophyPillars.map((pillar, index) => (
        <article
          key={pillar.id}
          data-slide
          onClick={() => goTo(index)}
          className={cn(
            "w-[min(78vw,22rem)] shrink-0 snap-start border-t border-black/10 pt-8 transition-opacity duration-300",
            index === active ? "opacity-100" : "opacity-30",
          )}
        >
          <p className="eyebrow mb-4">{pillar.number}</p>
          <h3 className="font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-[0.95] tracking-[-0.03em]">
            {pillar.title}.
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-black/70">{pillar.body}</p>
        </article>
      ))}
    </div>
  );
}
