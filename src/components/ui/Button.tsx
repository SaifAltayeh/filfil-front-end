import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "ghost";
type Tone = "dark" | "light";

const styles: Record<Variant, Record<Tone, string>> = {
  solid: {
    dark: "bg-black text-beige hover:bg-beige hover:text-black",
    light: "bg-beige text-black hover:bg-black hover:text-beige",
  },
  outline: {
    dark: "border border-black text-black hover:bg-black hover:text-beige",
    light: "border border-beige text-beige hover:bg-beige hover:text-black",
  },
  ghost: {
    dark: "text-black hover:opacity-60",
    light: "text-beige hover:opacity-60",
  },
};

const base =
  "inline-flex max-w-full items-center justify-center rounded-full px-5 py-3 text-center text-[0.68rem] font-medium tracking-[0.16em] uppercase transition-colors duration-300 sm:px-6 sm:text-[0.72rem] sm:tracking-[0.22em]";

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  tone?: Tone;
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "outline",
  tone = "dark",
}: Common & { href: string }) {
  return (
    <Link href={href} className={cn(base, styles[variant][tone], className)}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  className,
  variant = "solid",
  tone = "dark",
  type = "button",
  disabled,
}: Common & { type?: "button" | "submit"; disabled?: boolean }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        base,
        styles[variant][tone],
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
}
