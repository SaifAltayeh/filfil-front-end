import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function PageIntro({
  eyebrow,
  title,
  kicker,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  kicker?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("bg-beige pt-28 pb-14 md:pt-32 md:pb-20", className)}>
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-6">
            {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
            <h1 className="headline max-w-[11ch] text-[clamp(2rem,4.2vw,3.4rem)]">{title}</h1>
          </Reveal>
          {kicker || children ? (
            <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
              {kicker ? (
                <p className="font-display text-lg font-bold tracking-[-0.03em] md:text-xl">
                  {kicker}
                </p>
              ) : null}
              {children ? (
                <div
                  className={cn(
                    "text-base leading-relaxed text-black/75 md:text-lg",
                    kicker ? "mt-5" : null,
                  )}
                >
                  {children}
                </div>
              ) : null}
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
