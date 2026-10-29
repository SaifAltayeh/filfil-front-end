"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { easeOutExpo } from "@/lib/motion";

export function SuccessDialog({
  open,
  onClose,
  title = "Form submitted.",
  message = "Your form has been submitted. We’ll be in touch soon.",
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-5"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: easeOutExpo }}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="form-success-title"
            tabIndex={-1}
            className="w-full max-w-md bg-beige p-8 text-black outline-none md:p-10"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="form-success-title" className="headline text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-black/75">{message}</p>
            <div className="mt-8">
              <Button onClick={onClose}>Close</Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
