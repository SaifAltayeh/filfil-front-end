"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { philosophyBrief } from "@/data/philosophy";
import { media } from "@/lib/assets";

const WORDS = philosophyBrief.quote.split(/\s+/);
const IMAGE = media.tableGreenWall;
const quoteClass =
  "mx-auto max-w-3xl text-center font-sans text-[clamp(1.6rem,3.1vw,2.5rem)] leading-[1.2] tracking-[-0.01em] text-balance";

function BriefWord({
  word,
  index,
  progress,
}: {
  word: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = (index / WORDS.length) * 0.38;
  const end = ((index + 1) / WORDS.length) * 0.38;
  const opacity = useTransform(progress, [start, end], [0.14, 1]);
  const label = index === 0 ? `“${word}` : index === WORDS.length - 1 ? `${word}”` : word;

  return (
    <motion.span className="inline-block" style={{ opacity }}>
      {label}
      {index < WORDS.length - 1 ? "\u00a0" : null}
    </motion.span>
  );
}

export function Philosophy() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const quoteOpacity = useTransform(scrollYProgress, [0.36, 0.48], [1, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.4, 0.52], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.4, 0.78], [0.14, 1]);
  const imageRadiusPx = useTransform(scrollYProgress, [0.4, 0.78], ["114px", "24px"]);
  const captionOpacity = useTransform(scrollYProgress, [0.62, 0.76], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.62, 0.76], [12, 0]);
  const washOpacity = useTransform(scrollYProgress, [0.58, 0.72], [0, 1]);

  if (reduced) {
    return (
      <section id="philosophy" aria-label="Our philosophy" className="bg-beige">
        <div className="mx-auto max-w-[1440px] px-5 pt-28 pb-10 sm:px-6 sm:pt-32">
          <p className={quoteClass}>“{philosophyBrief.quote}”</p>
        </div>
        <div className="relative mx-3 aspect-[16/10] overflow-hidden rounded-2xl bg-black/5 sm:mx-4">
          <Image
            src={IMAGE.src}
            alt={IMAGE.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/55 to-transparent"
          />
          <p className="headline absolute inset-x-0 bottom-0 max-w-md p-6 text-[clamp(1.6rem,4vw,2.6rem)] text-white sm:p-10">
            {philosophyBrief.caption}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      aria-label="Our philosophy"
      className="relative h-[240svh] bg-beige"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div
          className="mx-auto max-w-[1440px] px-4 pt-28 sm:px-6 sm:pt-32"
          style={{ opacity: quoteOpacity }}
        >
          <p className="sr-only">“{philosophyBrief.quote}”</p>
          <p aria-hidden className={quoteClass}>
            {WORDS.map((word, index) => (
              <BriefWord key={`${word}-${index}`} word={word} index={index} progress={scrollYProgress} />
            ))}
          </p>
        </motion.div>

        <motion.div
          className="absolute inset-x-3 bottom-3 top-[calc(4rem+0.75rem)] overflow-hidden bg-black/5 will-change-transform sm:inset-x-4 sm:bottom-4 md:top-[calc(5rem+1rem)]"
          style={{
            borderRadius: imageRadiusPx,
            opacity: imageOpacity,
            scale: imageScale,
          }}
        >
          <Image
            src={IMAGE.src}
            alt={IMAGE.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/55 to-transparent"
            style={{ opacity: washOpacity }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10"
            style={{ opacity: captionOpacity, y: captionY }}
          >
            <p className="headline max-w-md text-[clamp(1.6rem,4vw,2.6rem)]">
              {philosophyBrief.caption}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
