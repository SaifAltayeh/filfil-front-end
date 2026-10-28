"use client";

import { motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/ui/Button";
import { media, videos } from "@/lib/assets";
import { easeOutExpo } from "@/lib/motion";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="hero" className="relative h-svh overflow-hidden bg-black text-beige">
      <div className="absolute inset-0">
        <picture className="block h-full w-full">
          <source media="(max-width: 767px)" srcSet={media.heroPosterMobile.src} />
          <img
            src={media.heroPosterDesktop.src}
            alt=""
            className="h-full w-full object-cover"
          />
        </picture>
        {reduced ? null : (
          <>
            <video
              className="absolute inset-0 hidden h-full w-full object-cover md:block"
              autoPlay
              muted
              loop
              playsInline
              poster={media.heroPosterDesktop.src}
              preload="metadata"
              aria-hidden
            >
              <source src={videos.heroDesktop} type="video/mp4" />
            </video>
            <video
              className="absolute inset-0 h-full w-full object-cover md:hidden"
              autoPlay
              muted
              loop
              playsInline
              poster={media.heroPosterMobile.src}
              preload="metadata"
              aria-hidden
            >
              <source src={videos.heroMobile} type="video/mp4" />
            </video>
          </>
        )}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-black/20" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-8 md:px-10 md:pb-14 lg:px-16">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: easeOutExpo }}
        >
          <h1 className="headline max-w-[12ch] text-[clamp(2.8rem,12vw,10rem)] text-beige">
            Next
            <br />
            Level
            <br />
            Food.
          </h1>
        </motion.div>

        <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:justify-between md:gap-8">
          <motion.p
            className="max-w-sm text-base text-beige/85 md:text-xl"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOutExpo }}
          >
            Levantine Roots. Mediterranean Inspiration.
          </motion.p>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: easeOutExpo }}
          >
            <ButtonLink href="/menu" variant="outline" tone="light">
              Explore Our Menu
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
