import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { media } from "@/lib/assets";

const moments = [
  {
    number: "01",
    title: "Catch-ups",
    body: "Spontaneous tables, snack boxes in the middle, and people you actually want to sit with.",
    image: media.guestsSharing,
  },
  {
    number: "02",
    title: "Drinks",
    body: "Refreshing pours, a toast, and a reason not to rush the next thing.",
    image: media.drinksToast,
  },
  {
    number: "03",
    title: "Stay a little longer",
    body: "Conversations that run long. The food is why you came. This is why you stay.",
    image: media.guestsLaughing,
  },
] as const;

export function Experience() {
  return (
    <section className="bg-black text-beige">
      <Container className="py-24 md:py-32 lg:py-40">
        <Reveal>
          <p className="eyebrow mb-8 text-beige/55">The FILFIL Experience</p>
        </Reveal>
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-8">
            <h2 className="headline text-[clamp(2.4rem,6vw,6.4rem)]">
              Come for the food.
              <br />
              Stay for the feeling.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="flex h-full flex-col justify-between gap-8 lg:col-span-4">
            <p className="text-lg leading-relaxed text-beige/75">
              Great food is only part of it. FILFIL is a place for catch-ups,
              drinks, and moments worth sharing — in Sweifieh Village, Amman.
            </p>
            <ButtonLink href="/about" tone="light" className="self-start">
              Discover FILFIL
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-6 lg:gap-10">
          {moments.map((moment, index) => (
            <Reveal key={moment.number} delay={index * 0.08} className={index === 1 ? "md:mt-16" : undefined}>
              <article>
                <ImageReveal className="img-zoom">
                  <Image
                    src={moment.image.src}
                    alt={moment.image.alt}
                    width={moment.image.width}
                    height={moment.image.height}
                    className="aspect-[3/4] h-auto w-full object-cover"
                    sizes="(min-width: 768px) 32vw, 100vw"
                  />
                </ImageReveal>
                <p className="eyebrow mt-5 text-beige/45">{moment.number}</p>
                <h3 className="font-display mt-3 text-[clamp(1.6rem,2.4vw,2.1rem)] leading-[0.95] tracking-[-0.03em]">
                  {moment.title}
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-beige/65">
                  {moment.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
