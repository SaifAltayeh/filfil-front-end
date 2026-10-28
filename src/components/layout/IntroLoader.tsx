"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { featuredProducts } from "@/data/featured";
import { easeOutExpo } from "@/lib/motion";

const STEP_MS = 160;
const EXIT_MS = 400;
const HOLD_MS = 80;
const COUNT = featuredProducts.length;

export function IntroLoader() {
  const reduced = useReducedMotion();
  const [status, setStatus] = useState<"pending" | "active" | "exiting" | "gone">("pending");
  const [index, setIndex] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timers: number[] = [];
    let percentTimer = 0;
    const originalOverflow = document.body.style.overflow;

    const finish = () => {
      document.documentElement.classList.add("intro-done");
      document.body.style.overflow = originalOverflow;
      setStatus("gone");
    };

    timers.push(
      window.setTimeout(() => {
        if (reduced) {
          finish();
          return;
        }

        setStatus("active");
        document.body.style.overflow = "hidden";

        featuredProducts.forEach((_, i) => {
          timers.push(window.setTimeout(() => setIndex(i), i * STEP_MS));
        });

        const playTime = COUNT * STEP_MS;
        const tickMs = Math.max(12, Math.round(playTime / 100));
        percentTimer = window.setInterval(() => {
          setPercent((current) => {
            if (current >= 99) {
              window.clearInterval(percentTimer);
              return 100;
            }
            return current + 1;
          });
        }, tickMs);

        timers.push(window.setTimeout(() => setStatus("exiting"), playTime + HOLD_MS));
        timers.push(window.setTimeout(finish, playTime + HOLD_MS + EXIT_MS));
      }, 0),
    );

    return () => {
      timers.forEach(clearTimeout);
      window.clearInterval(percentTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [reduced]);

  if (status === "gone") return null;

  return (
    <motion.div
      className="intro-loader fixed inset-0 z-[100] flex items-center justify-center bg-beige text-black"
      aria-hidden
      initial={{ opacity: 1 }}
      animate={{ opacity: status === "exiting" ? 0 : 1 }}
      transition={{ duration: EXIT_MS / 1000, ease: easeOutExpo }}
    >
      <p className="headline pointer-events-none absolute top-6 left-5 text-[clamp(4.5rem,14vw,12rem)] sm:top-10 sm:left-10">
        Loading.
      </p>

      <div
        className="relative"
        style={{ width: "clamp(132px, 16vw, 190px)", aspectRatio: "3 / 4" }}
      >
        {featuredProducts.map((product, i) => (
          <motion.div
            key={product.id}
            className="absolute inset-0 overflow-hidden rounded-2xl border border-black/10 bg-black/5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              i === index
                ? { opacity: 1, scale: 1, zIndex: 2 }
                : i < index
                  ? { opacity: 0, scale: 1.08, zIndex: 1 }
                  : { opacity: 0, scale: 0.5, zIndex: 0 }
            }
            transition={{ duration: 0.28, ease: easeOutExpo }}
          >
            <Image
              src={product.image.src}
              alt=""
              fill
              sizes="190px"
              className="object-cover"
              priority={i < 3}
            />
          </motion.div>
        ))}
      </div>

      <p className="headline pointer-events-none absolute right-5 bottom-6 text-[clamp(4.5rem,14vw,12rem)] tabular-nums sm:right-10 sm:bottom-10">
        {percent}
        <span className="text-[0.35em]">%</span>
      </p>
    </motion.div>
  );
}
