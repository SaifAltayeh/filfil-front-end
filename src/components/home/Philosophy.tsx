"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ButtonLink } from "@/components/ui/Button";
import { philosophyBrief } from "@/data/philosophy";
import { media } from "@/lib/assets";

const IMAGE = media.tableGreenWall;

function BriefCopy() {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="space-y-5 text-base leading-relaxed text-black/80 md:text-lg lg:col-span-7">
        {philosophyBrief.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="flex items-start lg:col-span-4 lg:col-start-9 lg:justify-end">
        <ButtonLink href="/about">About FILFIL</ButtonLink>
      </div>
    </div>
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
          <BriefCopy />
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
          <BriefCopy />
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
