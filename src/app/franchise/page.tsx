import type { Metadata } from "next";
import Image from "next/image";
import { FranchiseForm } from "@/components/forms/FranchiseForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { PageIntro } from "@/components/ui/PageIntro";
import { media } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Franchise",
  description:
    "Explore franchise opportunities with FILFIL. A contemporary Mediterranean restaurant brand rooted in Levantine flavours.",
};

export default function FranchisePage() {
  return (
    <main>
      <PageIntro title="Grow with FILFIL." kicker="Let's Take FILFIL Further.">
        <p>
          FILFIL is a fresh approach to modern Mediterranean dining, built around
          true ingredients, bold flavours, distinctive design, and memorable
          experiences.
        </p>
        <p className="mt-4">
          As we continue to grow, we&apos;re interested in connecting with ambitious
          entrepreneurs and business partners who share our passion for great food,
          strong brands, and genuine hospitality.
        </p>
        <div className="mt-8">
          <ButtonLink href="#enquire">Franchise Enquiry</ButtonLink>
        </div>
      </PageIntro>

      <section className="bg-black py-24 text-beige md:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <h2 className="headline text-[clamp(2rem,5vw,4.5rem)]">
                The right partnerships can take FILFIL to exciting new places.
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-beige/75">
                Interested in exploring opportunities with FILFIL? Let&apos;s start a
                conversation.
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

      <section id="enquire" className="scroll-mt-28 bg-beige py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="headline text-4xl md:text-5xl">Start a conversation.</h2>
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
