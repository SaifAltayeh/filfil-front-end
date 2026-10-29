"use client";

import { useReducedMotion } from "motion/react";
import { media, videos } from "@/lib/assets";

export function AboutIntroVideo() {
  const reduced = useReducedMotion();

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[21/9]">
      <img
        src={media.guestsSharing.src}
        alt={media.guestsSharing.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {reduced ? null : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={media.guestsSharing.src}
          preload="metadata"
          aria-hidden
        >
          <source src={videos.aboutGuests} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
