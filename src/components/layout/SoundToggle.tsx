"use client";

import { useEffect, useRef, useState } from "react";
import { audio } from "@/lib/assets";

export function SoundToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const mutedByUser = useRef(false);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.loop = true;
    el.volume = 0.32;

    const tryPlay = () => {
      if (mutedByUser.current) return;
      el.play()
        .then(() => setOn(true))
        .catch(() => {});
    };

    if (document.documentElement.classList.contains("intro-done")) tryPlay();
    window.addEventListener("pointerdown", tryPlay, { once: true });
    return () => window.removeEventListener("pointerdown", tryPlay);
  }, []);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (on) {
      mutedByUser.current = true;
      el.pause();
      setOn(false);
      return;
    }
    mutedByUser.current = false;
    el.play()
      .then(() => setOn(true))
      .catch(() => {});
  };

  return (
    <>
      <audio ref={audioRef} src={audio.tech} preload="auto" />
      <button
        type="button"
        onClick={toggle}
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
    </>
  );
}
