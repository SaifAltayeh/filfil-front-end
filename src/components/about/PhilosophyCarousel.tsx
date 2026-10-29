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

    const sync = () => {
      const slides = [...root.querySelectorAll<HTMLElement>("[data-slide]")];
      const mid = root.getBoundingClientRect().left + root.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      slides.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        const dist = Math.abs(rect.left + rect.width / 2 - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = index;
        }
      });
      setActive(best);
    };

    sync();
    root.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      root.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const goTo = (index: number) => {
    const root = scrollerRef.current;
    const slide = root?.querySelectorAll<HTMLElement>("[data-slide]")[index];
    slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div
      ref={scrollerRef}
      className="-mx-5 flex snap-x snap-mandatory gap-8 overflow-x-auto pt-16 pb-4 [scrollbar-width:none] [scroll-padding-inline:max(1.25rem,calc(50%-11rem))] px-[max(1.25rem,calc(50%-11rem))] md:-mx-10 lg:-mx-16 [&::-webkit-scrollbar]:hidden"
    >
      {philosophyPillars.map((pillar, index) => (
        <article
          key={pillar.id}
          data-slide
          onClick={() => goTo(index)}
          className={cn(
            "w-[min(78vw,22rem)] shrink-0 snap-center border-t border-black/10 pt-8 transition-opacity duration-300",
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
