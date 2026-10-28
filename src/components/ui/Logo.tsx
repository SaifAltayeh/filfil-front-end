import Image from "next/image";
import Link from "next/link";
import { logos } from "@/lib/assets";
import { cn } from "@/lib/cn";

export function Logo({
  variant = "dark",
  className,
  imageClassName,
  priority = false,
}: {
  variant?: "dark" | "light";
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" aria-label="FILFIL home" className={cn("inline-flex items-center", className)}>
      <Image
        src={variant === "light" ? logos.light : logos.dark}
        alt="filfil."
        width={284}
        height={139}
        priority={priority}
        className={cn("h-7 w-auto md:h-8", imageClassName)}
      />
    </Link>
  );
}
