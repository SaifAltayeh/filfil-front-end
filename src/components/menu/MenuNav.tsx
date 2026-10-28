"use client";

import { useEffect, useState } from "react";
import { menuCategories } from "@/data/menu";
import { cn } from "@/lib/cn";

export function MenuNav() {
  const [active, setActive] = useState(menuCategories[0]?.id);

  useEffect(() => {
    const sections = menuCategories
      .map((category) => document.getElementById(category.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-16 z-40 -mx-5 mb-12 border-y border-black/10 bg-beige md:top-20 md:-mx-10 lg:-mx-16"
    >
      <ul className="flex gap-6 overflow-x-auto px-5 py-4 md:px-10 lg:px-16">
        {menuCategories.map((category) => (
          <li key={category.id} className="shrink-0">
            <a
              href={`#${category.id}`}
              className={cn(
                "eyebrow whitespace-nowrap pb-1",
                active === category.id ? "border-b border-black" : "text-black/45 hover:text-black",
              )}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
