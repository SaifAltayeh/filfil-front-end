import type { Metadata } from "next";
import Image from "next/image";
import { OpenPositions } from "@/components/careers/OpenPositions";
import { CareerForm } from "@/components/forms/CareerForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { Brand } from "@/components/ui/Brand";
import { PageIntro } from "@/components/ui/PageIntro";
import { getMessages } from "@/i18n/get-messages";
import { media } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the filfil crew in Amman. Explore open positions and apply directly from the listing.",
};

export default async function CareersPage() {
  const t = await getMessages();

  return (
    <main>
      <PageIntro title={<>{t.careers.title} <Brand />{t.careers.titleEnd}</>} kicker={t.careers.kicker}>
        {t.careers.intro.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? undefined : "mt-4"}>
            {paragraph}
          </p>
        ))}
        <div className="mt-8">
          <ButtonLink href="#positions">{t.careers.viewPositions}</ButtonLink>
        </div>
      </PageIntro>

      <section className="bg-beige pb-8 md:pb-12">
        <ImageReveal>
          <Image
            src={media.nextLevelShawarma.src}
            alt={media.nextLevelShawarma.alt}
            width={media.nextLevelShawarma.width}
            height={media.nextLevelShawarma.height}
            className="aspect-[16/10] h-auto w-full object-cover md:aspect-[21/9]"
            sizes="100vw"
            priority
          />
        </ImageReveal>
      </section>

      <section id="positions" className="scroll-mt-28 bg-beige py-24">
        <Container>
          <Reveal>
            <h2 className="headline mb-10 text-4xl md:text-6xl">{t.careers.openTitle}</h2>
          </Reveal>
          <OpenPositions />
        </Container>
      </section>

      <section id="general" className="scroll-mt-28 bg-beige pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="headline text-4xl md:text-5xl">{t.careers.generalTitle}</h2>
              <p className="mt-6 max-w-sm text-lg leading-relaxed">
                {t.careers.generalBody}
              </p>
            </Reveal>
            <div className="lg:col-span-7 lg:col-start-6">
              <CareerForm positionAsText />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
