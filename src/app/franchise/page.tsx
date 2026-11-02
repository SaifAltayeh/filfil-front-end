import type { Metadata } from "next";
import Image from "next/image";
import { FranchiseForm } from "@/components/forms/FranchiseForm";
import { FranchiseModel } from "@/components/franchise/FranchiseModel";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { Brand } from "@/components/ui/Brand";
import { PageIntro } from "@/components/ui/PageIntro";
import { getMessages } from "@/i18n/get-messages";
import { media } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Franchise",
  description:
    "Explore franchise opportunities with filfil. A contemporary Mediterranean restaurant brand rooted in Levantine flavours.",
};

export default async function FranchisePage() {
  const t = await getMessages();

  return (
    <main>
      <PageIntro title={<>{t.franchise.title} <Brand />.</>} kicker={t.franchise.kicker}>
        {t.franchise.intro.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? undefined : "mt-4"}>
            {paragraph}
          </p>
        ))}
        <h2 className="font-display mt-10 text-lg font-bold tracking-[-0.03em] text-black md:text-xl">
          {t.franchise.noExperienceTitle}
        </h2>
        <p className="mt-4">{t.franchise.noExperienceBody}</p>
        <p className="font-display mt-6 text-lg tracking-[-0.03em] text-black md:text-xl">
          {t.franchise.closing}
        </p>
        <div className="mt-8">
          <ButtonLink href="#enquire">{t.franchise.enquireCta}</ButtonLink>
        </div>
      </PageIntro>

      <section className="bg-black py-24 text-beige md:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <h2 className="headline text-[clamp(2rem,5vw,4.5rem)]">
                {t.franchise.partnersTitle} <Brand /> {t.franchise.partnersEnd}
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-beige/75">
                {t.franchise.partnersBody}
              </p>
            </Reveal>
            <Reveal className="lg:col-span-5 lg:col-start-8">
              <ImageReveal>
                <Image
                  src={media.merchTee.src}
                  alt={media.merchTee.alt}
                  width={media.merchTee.width}
                  height={media.merchTee.height}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </ImageReveal>
            </Reveal>
          </div>
        </Container>
      </section>

      <FranchiseModel />

      <section id="enquire" className="scroll-mt-28 bg-beige py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="headline text-4xl md:text-5xl">{t.franchise.formTitle}</h2>
            </Reveal>
            <div className="lg:col-span-7 lg:col-start-6">
              <FranchiseForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
