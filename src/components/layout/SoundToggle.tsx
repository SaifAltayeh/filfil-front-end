"use client";

import { useEffect, useState } from "react";
import {
  isSoundtrackPlaying,
  startSoundtrack,
  subscribeSoundtrack,
  toggleSoundtrack,
  unlockSoundtrackOnGesture,
} from "@/lib/soundtrack";

export function SoundToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    startSoundtrack();
    const retries = [80, 250, 600, 1200, 2400].map((ms) => window.setTimeout(startSoundtrack, ms));
    const unlock = unlockSoundtrackOnGesture();
    const unsubscribe = subscribeSoundtrack(setOn);
    setOn(isSoundtrackPlaying());

    return () => {
      retries.forEach(clearTimeout);
      unlock();
      unsubscribe();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggleSoundtrack}
      aria-pressed={on}
      aria-label={on ? "Mute soundtrack" : "Play soundtrack"}
      className="flex h-10 w-10 items-center justify-center"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path fill="currentColor" d="M4 9h3.2L12 5.2v13.6L7.2 15H4V9Z" />
        {on ? (
          <path
            d="M16.2 8.2c1.7 1.4 2.7 3.3 2.7 3.8s-1 2.4-2.7 3.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M16 9.5 20.5 14.5M20.5 9.5 16 14.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        )}
      </svg>
    </button>
  );
}
