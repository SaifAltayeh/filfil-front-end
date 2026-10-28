import type { Metadata } from "next";
import Image from "next/image";
import { CateringForm } from "@/components/forms/CateringForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { PageIntro } from "@/components/ui/PageIntro";
import { media } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Bring FILFIL to the table. Catering for team lunches, office gatherings, celebrations, and special occasions in Amman.",
};

export default function CateringPage() {
  return (
    <main>
      <PageIntro title="Good food. Great gatherings." kicker="Bring FILFIL to the Table.">
        <p>
          From team lunches and office gatherings to celebrations and special
          occasions, FILFIL brings bold Mediterranean flavours to every gathering.
        </p>
        <p className="mt-4">
          Our catering selection features freshly prepared favourites, delicious
          bites, and food made for sharing.
        </p>
        <p className="mt-4">Because good company deserves great food.</p>
        <div className="mt-8">
          <ButtonLink href="#enquire">Enquire About Catering</ButtonLink>
        </div>
      </PageIntro>

      <section className="bg-beige pb-8">
        <Container>
          <ImageReveal>
            <Image
              src={media.tableGreenWall.src}
              alt={media.tableGreenWall.alt}
              width={media.tableGreenWall.width}
              height={media.tableGreenWall.height}
              className="aspect-[16/8] h-auto w-full object-cover"
              sizes="100vw"
              priority
            />
          </ImageReveal>
        </Container>
      </section>

      <section className="bg-beige py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <ImageReveal>
                <Image
                  src={media.cateringSpread.src}
                  alt={media.cateringSpread.alt}
                  width={media.cateringSpread.width}
                  height={media.cateringSpread.height}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </ImageReveal>
              <p className="mt-8 max-w-sm text-lg leading-relaxed">
                Tell us about your event. We&apos;ll follow up with availability and a
                tailored selection. Catering packages will be published here as they
                are confirmed.
              </p>
            </Reveal>
            <div id="enquire" className="scroll-mt-32 lg:col-span-6 lg:col-start-7">
              <Reveal>
                <h2 className="headline mb-10 text-4xl md:text-5xl">Enquire.</h2>
                <CateringForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
