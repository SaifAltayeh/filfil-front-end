import Image from "next/image";
import { BrandCta } from "@/components/ui/Brand";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { getMessages } from "@/i18n/get-messages";
import { media } from "@/lib/assets";

const images = [media.guestsSharing, media.drinksToast, media.guestsLaughing] as const;

export async function Experience() {
  const t = await getMessages();

  return (
    <section className="bg-black text-beige">
      <Container className="py-24 md:py-32 lg:py-40">
        <Reveal>
          <p className="eyebrow mb-8 text-beige/55">{t.home.experienceEyebrow}</p>
        </Reveal>
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-8">
            <h2 className="headline text-[clamp(2.4rem,6vw,6.4rem)]">
              {t.home.experienceTitle.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="flex h-full flex-col justify-between gap-8 lg:col-span-4">
            <p className="text-lg leading-relaxed text-beige/75">{t.home.experienceBody}</p>
            <ButtonLink href="/about" tone="light" className="self-start">
              <BrandCta label={t.home.discover} />
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-6 lg:gap-10">
          {t.home.moments.map((moment, index) => {
            const image = images[index];
            return (
              <Reveal key={moment.number} delay={index * 0.08} className={index === 1 ? "md:mt-16" : undefined}>
                <article>
                  <ImageReveal className="img-zoom">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
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
            );
          })}
        </div>
      </Container>
    </section>
  );
}
