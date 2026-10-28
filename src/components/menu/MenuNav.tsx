"use client";

import { useEffect, useRef, useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { menuCategories } from "@/data/menu";
import { cn } from "@/lib/cn";

function categoryFromHash() {
  const id = window.location.hash.slice(1);
  return menuCategories.some((category) => category.id === id)
    ? id
    : menuCategories[0]?.id;
}

function navLine() {
  const nav = document.querySelector<HTMLElement>('nav[aria-label="Menu categories"]');
  return (nav?.getBoundingClientRect().bottom ?? 0) + 8;
}

function scrollToCategory(id: string) {
  const section = document.getElementById(id);
  if (!section) return;

  const html = document.documentElement;
  const top = Math.max(0, window.scrollY + section.getBoundingClientRect().top - navLine());
  html.classList.add("menu-nav-jump");
  html.style.setProperty("scroll-behavior", "auto", "important");
  window.scrollTo({ top, behavior: "instant" });
  window.setTimeout(() => {
    html.classList.remove("menu-nav-jump");
    html.style.removeProperty("scroll-behavior");
  }, 50);
}

function categoryFromScroll() {
  const atBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (atBottom) return menuCategories.at(-1)?.id;

  const line = navLine();
  let current = menuCategories[0]?.id;

  for (const category of menuCategories) {
    const section = document.getElementById(category.id);
    if (!section) continue;
    if (section.getBoundingClientRect().top <= line + 1) current = category.id;
  }

  return current;
}

export function MenuNav() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(menuCategories[0]?.id);
  const listRef = useRef<HTMLUListElement>(null);
  const pending = useRef<string | null>(null);

  useEffect(() => {
    setActive(categoryFromHash());

    const sync = () => {
      if (pending.current) {
        if (categoryFromScroll() === pending.current) pending.current = null;
        return;
      }
      const next = categoryFromScroll();
      if (next) setActive((current) => (current === next ? current : next));
    };

    const onHash = () => {
      const id = categoryFromHash();
      if (!id) return;
      pending.current = id;
      setActive(id);
    };

    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("hashchange", onHash);
    window.addEventListener("popstate", onHash);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("popstate", onHash);
    };
  }, []);

  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (!list || !link) return;

    const listRect = list.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    if (linkRect.left < listRect.left + 16 || linkRect.right > listRect.right - 16) {
      list.scrollBy({
        left: linkRect.left - listRect.left - 24,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }
  }, [active, reduceMotion]);

  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-16 z-40 -mx-5 mb-12 border-y border-black/10 bg-beige md:top-20 md:-mx-10 lg:-mx-16"
    >
      <LayoutGroup id="menu-categories">
        <ul
          ref={listRef}
          className="flex gap-6 overflow-x-auto px-5 py-4 md:px-10 lg:px-16"
        >
          {menuCategories.map((category) => {
            const isActive = active === category.id;

            return (
              <li key={category.id} className="shrink-0">
                <a
                  href={`#${category.id}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    pending.current = category.id;
                    setActive(category.id);
                    scrollToCategory(category.id);
                    history.pushState(null, "", `#${category.id}`);
                    window.setTimeout(() => {
                      if (pending.current === category.id) pending.current = null;
                    }, 400);
                  }}
                  className={cn(
                    "eyebrow relative block whitespace-nowrap pb-1 transition-colors duration-200",
                    isActive ? "text-black" : "text-black/45 hover:text-black",
                  )}
                >
                  {category.name}
                  {isActive ? (
                    reduceMotion ? (
                      <span className="absolute inset-x-0 bottom-0 h-px bg-black" />
                    ) : (
                      <motion.span
                        layoutId="menu-category-underline"
                        className="absolute inset-x-0 bottom-0 h-px bg-black"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
      </LayoutGroup>
    </nav>
  );
}
