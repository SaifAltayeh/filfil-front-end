import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { PageIntro } from "@/components/ui/PageIntro";
import { philosophyPillars } from "@/data/philosophy";
import { media } from "@/lib/assets";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FILFIL is a fresh take on modern Mediterranean food in Amman. Levantine roots, Mediterranean inspiration, and a place people want to come back to.",
};

const story = [
  "FILFIL started with a simple idea: to reimagine the Mediterranean food we love.",
  "Inspired by the rich flavours of the Levant, we wanted to celebrate our roots while creating something modern, exciting, and a little unexpected.",
  "Not another traditional restaurant. Not another ordinary shawarma spot. Something different.",
  "We started with familiar favourites, quality ingredients, and bold flavours, giving each dish our own creative twist.",
  "What began as a small restaurant in Amman is growing into a bigger vision: a modern Mediterranean dining experience that brings together great food, good people, and a welcoming atmosphere.",
  "And we're just getting started.",
];

export default function AboutPage() {
  return (
    <main>
      <PageIntro title="This is FILFIL." kicker="Rooted in Tradition. Inspired by Everything.">
        <p>
          FILFIL is a fresh take on modern Mediterranean food in Sweifieh Village,
          Amman. Levantine roots, Mediterranean inspiration, and a place people want
          to come back to.
        </p>
        <p className="mt-4">
          We take the flavours we grew up loving and give them a contemporary twist
          — true ingredients, bold flavours, and a feeling that lasts longer than
          the meal.
        </p>
      </PageIntro>

      <section className="bg-beige pb-8 md:pb-12">
        <Container>
          <ImageReveal>
            <Image
              src={media.guestsSharing.src}
              alt={media.guestsSharing.alt}
              width={media.guestsSharing.width}
              height={media.guestsSharing.height}
              className="aspect-[16/10] h-auto w-full object-cover md:aspect-[21/9]"
              sizes="100vw"
              priority
            />
          </ImageReveal>
        </Container>
      </section>

      <section className="bg-beige py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow mb-6">Who we are</p>
              <p className="font-display text-[clamp(1.8rem,3.2vw,2.8rem)] leading-[1.05] tracking-[-0.03em]">
                A fresh take on modern Mediterranean food.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed lg:col-span-6 lg:col-start-7">
              <p>
                Our roots are Levantine, our inspiration comes from across the
                Mediterranean, and our creativity knows no boundaries.
              </p>
              <p>
                We take familiar flavours and reimagine them with carefully selected
                ingredients, thoughtful preparation, and a passion for trying something
                different.
              </p>
              <p>
                We believe great food should be full of flavour, made with care, and
                enjoyed without compromise.
              </p>
              <p>
                But FILFIL is about more than what&apos;s on your plate. It&apos;s about
                bringing people together. A place to meet friends, enjoy good food and
                drinks, share conversations, unwind, and simply enjoy being there.
              </p>
              <p className="headline pt-4 text-3xl md:text-4xl">
                Come for the food. Stay for the feeling.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-black py-24 text-beige md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow mb-8 text-beige/55">Our Story</p>
              <h2 className="headline text-[clamp(2.2rem,5vw,4.8rem)]">
                A fresh take on something familiar.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-beige/80 lg:col-span-6 lg:col-start-7">
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-12 md:gap-5">
            <Reveal className="md:col-span-7">
              <ImageReveal>
                <Image
                  src={media.tableGreenWall.src}
                  alt={media.tableGreenWall.alt}
                  width={media.tableGreenWall.width}
                  height={media.tableGreenWall.height}
                  className="aspect-[4/3] h-auto w-full object-cover"
                  sizes="(min-width: 768px) 58vw, 100vw"
                />
              </ImageReveal>
            </Reveal>
            <div className="grid gap-4 md:col-span-5">
              <Reveal>
                <ImageReveal>
                  <Image
                    src={media.merchTee.src}
                    alt={media.merchTee.alt}
                    width={media.merchTee.width}
                    height={media.merchTee.height}
                    className="aspect-[4/3] h-auto w-full object-cover"
                    sizes="(min-width: 768px) 38vw, 100vw"
                  />
                </ImageReveal>
              </Reveal>
              <Reveal delay={0.08}>
                <ImageReveal>
                  <Image
                    src={media.guestsLaughing.src}
                    alt={media.guestsLaughing.alt}
                    width={media.guestsLaughing.width}
                    height={media.guestsLaughing.height}
                    className="aspect-[4/3] h-auto w-full object-cover"
                    sizes="(min-width: 768px) 38vw, 100vw"
                  />
                </ImageReveal>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-beige py-24 md:py-32">
        <Container>
          <Reveal>
            <p className="eyebrow mb-8">Food Philosophy</p>
            <h2 className="headline max-w-[16ch] text-[clamp(2.2rem,5.5vw,5.5rem)]">
              What goes into our food matters.
            </h2>
            <p className="mt-6 text-2xl">True Ingredients. Bold Flavours.</p>
            <div className="measure mt-8 space-y-4 text-lg leading-relaxed">
              <p>We believe great food starts with ingredients you can trust.</p>
              <p>
                Our philosophy is simple: carefully selected ingredients, thoughtful
                preparation, and exciting flavours.
              </p>
              <p>
                We take inspiration from Mediterranean food traditions while creating
                dishes that feel fresh, modern, and full of character.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            <ImageReveal>
              <Image
                src={media.oliveOilShatta.src}
                alt={media.oliveOilShatta.alt}
                width={media.oliveOilShatta.width}
                height={media.oliveOilShatta.height}
                className="aspect-[4/5] h-auto w-full object-cover md:aspect-[4/3]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </ImageReveal>
            <ImageReveal>
              <Image
                src={media.sauces.src}
                alt={media.sauces.alt}
                width={media.sauces.width}
                height={media.sauces.height}
                className="aspect-[4/5] h-auto w-full object-cover md:aspect-[4/3]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </ImageReveal>
          </div>

          <div className="mt-16 grid gap-10 border-t border-black/10 pt-16 sm:grid-cols-2 lg:grid-cols-3">
            {philosophyPillars.map((pillar) => (
              <Reveal key={pillar.id}>
                <article>
                  <p className="eyebrow mb-4">{pillar.number}</p>
                  <h3 className="font-display text-[clamp(1.5rem,2.2vw,2rem)] leading-[0.95] tracking-[-0.03em]">
                    {pillar.title}.
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-black/70">{pillar.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black py-24 text-beige md:py-32">
        <Container>
          <Reveal>
            <p className="headline text-[clamp(2rem,6vw,5.5rem)]">
              True ingredients.
              <br />
              Bold flavours.
              <br />
              That&apos;s the FILFIL way.
            </p>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
