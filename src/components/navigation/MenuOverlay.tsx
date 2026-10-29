"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { mainNav } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialIcons";
import { easeOutExpo } from "@/lib/motion";

export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const root = document.getElementById("site-menu");
      if (!root) return;
      const focusable = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[80] flex min-h-svh flex-col overflow-hidden bg-black text-beige"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
        >
          <div className="flex items-center justify-between px-5 pt-[max(2.5rem,env(safe-area-inset-top))] pb-4 md:px-10 md:pt-12 md:pb-5 lg:px-16">
            <Logo variant="light" />
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="eyebrow flex items-center gap-3 py-2"
              aria-label="Close menu"
            >
              Close
              <span aria-hidden className="relative block h-4 w-5">
                <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 rotate-45 bg-beige" />
                <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 -rotate-45 bg-beige" />
              </span>
            </button>
          </div>

          <nav className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto px-5 py-8 pb-24 md:px-10 lg:px-16">
            <motion.ul
              className="flex flex-col gap-2 md:gap-3"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: reduced ? 0 : 0.07, delayChildren: 0.12 },
                },
              }}
            >
              {mainNav.map((item, index) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: reduced ? 0 : 28 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.55, ease: easeOutExpo },
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="headline group flex items-baseline gap-4 text-[clamp(2rem,8vw,7rem)] text-beige"
                  >
                    <span className="eyebrow hidden pt-2 text-beige/50 sm:inline">
                      0{index + 1}
                    </span>
                    <span className="transition-opacity duration-300 group-hover:opacity-60">
                      {item.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          <div className="absolute right-5 bottom-8 z-10 flex items-center md:right-10 md:bottom-10 lg:right-16">
            <SocialLinks />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
