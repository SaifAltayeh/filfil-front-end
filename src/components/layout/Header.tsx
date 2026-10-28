"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { MenuOverlay } from "@/components/navigation/MenuOverlay";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [path, setPath] = useState(pathname);
  const [overHero, setOverHero] = useState(isHome);
  const [open, setOpen] = useState(false);

  if (path !== pathname) {
    setPath(pathname);
    setOpen(false);
    setOverHero(pathname === "/");
  }

  useEffect(() => {
    if (pathname !== "/") return;
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { threshold: 0.45 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const overDark = pathname === "/" && (overHero || open);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 h-16 transition-[background-color,border-color,color] duration-500 md:h-20",
          overDark
            ? "border-b border-transparent bg-transparent text-beige"
            : "border-b border-black/10 bg-beige text-black",
        )}
      >
        <div className="flex h-full items-center justify-between px-5 md:px-10 lg:px-16">
          <Logo variant={overDark ? "light" : "dark"} priority />
          <button
            type="button"
            className="eyebrow flex items-center gap-3 py-2"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
          >
            Menu
            <span aria-hidden className="flex flex-col gap-1.5">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </span>
          </button>
        </div>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
