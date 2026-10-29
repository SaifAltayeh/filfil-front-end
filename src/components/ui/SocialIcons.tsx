import { site } from "@/data/site";
import { cn } from "@/lib/cn";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
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
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        fill="currentColor"
        d="M14.2 3h2.3c.2 1.9 1.4 3.4 3.5 3.8v2.3c-1.2 0-2.3-.4-3.3-1.1v6.6c0 3.4-2.7 6-6.2 6S4.3 18 4.3 14.6c0-3.3 2.6-6 5.9-6.1v2.4c-2 .1-3.5 1.7-3.5 3.7 0 2 1.7 3.6 3.7 3.6s3.6-1.6 3.6-3.6V3Z"
      />
    </svg>
  );
}

export function SocialLinks({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <a
        href={site.instagram}
        className={cn("transition-opacity hover:opacity-60", iconClassName)}
        target="_blank"
        rel="noreferrer"
        aria-label="FILFIL on Instagram"
      >
        <InstagramIcon />
      </a>
      {site.tiktok ? (
        <a
          href={site.tiktok}
          className={cn("transition-opacity hover:opacity-60", iconClassName)}
          target="_blank"
          rel="noreferrer"
          aria-label="FILFIL on TikTok"
        >
          <TikTokIcon />
        </a>
      ) : null}
    </div>
  );
}
