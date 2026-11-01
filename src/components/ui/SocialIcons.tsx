import { site } from "@/data/site";
import { cn } from "@/lib/cn";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden>
      <path
        fill="currentColor"
        d="M14.2 3h2.3c.2 1.9 1.4 3.4 3.5 3.8v2.3c-1.2 0-2.3-.4-3.3-1.1v6.6c0 3.4-2.7 6-6.2 6S4.3 18 4.3 14.6c0-3.3 2.6-6 5.9-6.1v2.4c-2 .1-3.5 1.7-3.5 3.7 0 2 1.7 3.6 3.7 3.6s3.6-1.6 3.6-3.6V3Z"
      />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden>
      <path
        fill="currentColor"
        d="M12 1.6C6.27 1.6 1.6 6.27 1.6 12S6.27 22.4 12 22.4 22.4 17.73 22.4 12 17.73 1.6 12 1.6Zm4.59 15.05a.72.72 0 0 1-.99.24c-2.71-1.66-6.12-2.03-10.14-1.11a.72.72 0 1 1-.32-1.4c4.38-1 8.16-.58 11.21 1.28a.72.72 0 0 1 .24.99Zm1.23-2.74a.9.9 0 0 1-1.24.3c-3.1-1.9-7.83-2.46-11.5-1.34a.9.9 0 1 1-.52-1.73c4.14-1.24 9.32-.62 12.86 1.55a.9.9 0 0 1 .4 1.22Zm.1-2.85C14.68 8.95 9.34 8.76 6.2 9.7a1.08 1.08 0 1 1-.65-2.06c3.6-1.14 9.57-.92 13.33 1.31a1.08 1.08 0 1 1-1.16 1.81Z"
      />
    </svg>
  );
}

const socials = [
  { href: () => site.instagram, label: "filfil on Instagram", icon: InstagramIcon },
  { href: () => site.tiktok, label: "filfil on TikTok", icon: TikTokIcon },
  { href: () => site.spotify, label: "filfil on Spotify", icon: SpotifyIcon },
] as const;

export function SocialLinks({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      {socials.map((item) => {
        const href = item.href();
        if (!href) return null;
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={href}
            className={cn(
              "flex h-7 w-7 items-center justify-center text-current transition-opacity hover:opacity-60",
              iconClassName,
            )}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
