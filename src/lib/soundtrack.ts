const SRC = "/assets/audio/tech.mp3";

let audio: HTMLAudioElement | null = null;
let mutedByUser = false;
const listeners = new Set<(playing: boolean) => void>();

function notify() {
  const playing = Boolean(audio && !audio.paused);
  listeners.forEach((listener) => listener(playing));
}

function getAudio() {
  if (typeof window === "undefined") return null;
  if (!audio) {
    audio = new Audio(SRC);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.32;
    audio.setAttribute("playsinline", "true");
    audio.setAttribute("webkit-playsinline", "true");
    audio.addEventListener("play", notify);
    audio.addEventListener("pause", notify);
  }
  return audio;
}

export function startSoundtrack() {
  if (mutedByUser) return;
  const el = getAudio();
  if (!el) return;
  void el.play().then(notify).catch(() => {});
}

export function toggleSoundtrack() {
  const el = getAudio();
  if (!el) return;

  if (!el.paused) {
    mutedByUser = true;
    el.pause();
    notify();
    return;
  }

  mutedByUser = false;
  void el.play().then(notify).catch(() => {});
}

export function isSoundtrackPlaying() {
  return Boolean(audio && !audio.paused);
}

export function subscribeSoundtrack(listener: (playing: boolean) => void) {
  listeners.add(listener);
  listener(isSoundtrackPlaying());
  return () => {
    listeners.delete(listener);
  };
}

export function unlockSoundtrackOnGesture() {
  if (typeof window === "undefined") return () => {};

  const unlock = () => startSoundtrack();
  const events = ["pointerdown", "touchstart", "keydown", "click", "scroll"] as const;
  events.forEach((event) => window.addEventListener(event, unlock, { once: true, passive: true }));

  return () => {
    events.forEach((event) => window.removeEventListener(event, unlock));
  };
}
