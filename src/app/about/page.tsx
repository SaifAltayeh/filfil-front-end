import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { PageIntro } from "@/components/ui/PageIntro";
import { AboutIntroVideo } from "@/components/about/AboutIntroVideo";
import { PhilosophyCarousel } from "@/components/about/PhilosophyCarousel";
import { Brand } from "@/components/ui/Brand";
import { getMessages } from "@/i18n/get-messages";
import { media } from "@/lib/assets";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "filfil is a fresh take on modern Mediterranean food in Amman. Levantine roots, Mediterranean inspiration, and a place people want to come back to.",
};

export default async function AboutPage() {
  const t = await getMessages();

  return (
    <main>
      <PageIntro title={<>{t.about.title} <Brand />.</>} kicker={t.about.kicker}>
        {t.about.intro.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? undefined : "mt-4"}>
            {paragraph}
          </p>
        ))}
      </PageIntro>

      <section className="bg-beige pb-8 md:pb-12">
        <Container>
          <ImageReveal>
            <AboutIntroVideo />
          </ImageReveal>
        </Container>
      </section>

      <section className="bg-beige py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow mb-6">{t.about.who}</p>
              <p className="font-display text-[clamp(1.8rem,3.2vw,2.8rem)] leading-[1.05] tracking-[-0.03em]">
                {t.about.whoTitle}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed lg:col-span-6 lg:col-start-7">
              {t.about.whoBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="headline pt-4 text-3xl md:text-4xl">{t.about.feeling}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-black py-24 text-beige md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow mb-8 text-beige/55">{t.about.storyEyebrow}</p>
              <h2 className="headline text-[clamp(2.2rem,5vw,4.8rem)]">
                {t.about.storyTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-beige/80 lg:col-span-6 lg:col-start-7">
              {t.about.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-12 md:gap-5">
            <Reveal className="md:col-span-7">
              <ImageReveal>
                <Image
                  src={media.storyLeft.src}
                  alt={media.storyLeft.alt}
                  width={media.storyLeft.width}
                  height={media.storyLeft.height}
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
                    src={media.storyRightBelow.src}
                    alt={media.storyRightBelow.alt}
                    width={media.storyRightBelow.width}
                    height={media.storyRightBelow.height}
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
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <p className="eyebrow mb-8">{t.about.foodEyebrow}</p>
              <h2 className="headline max-w-[16ch] text-[clamp(2.2rem,5.5vw,5.5rem)]">
                {t.about.foodTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="space-y-4 text-lg leading-relaxed lg:col-span-5 lg:col-start-8">
              {t.about.foodIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
          </div>

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

          <PhilosophyCarousel />
        </Container>
      </section>

      <section className="bg-black py-24 text-beige md:py-32">
        <Container>
          <Reveal>
            <p className="headline text-[clamp(2rem,6vw,5.5rem)]">
              {t.site.ingredients}
              <br />
              {t.about.way} <Brand /> {t.about.wayEnd}
            </p>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
