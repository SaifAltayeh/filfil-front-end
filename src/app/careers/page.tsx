import type { Metadata } from "next";
import Image from "next/image";
import { OpenPositions } from "@/components/careers/OpenPositions";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { PageIntro } from "@/components/ui/PageIntro";
import { media } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the FILFIL crew in Amman. Explore open positions and apply directly from the listing.",
};

export default function CareersPage() {
  return (
    <main>
      <PageIntro title="Join the FILFIL crew." kicker="Good People Make Great Things Happen.">
        <p>At FILFIL, great food starts with great people.</p>
        <p className="mt-4">
          We&apos;re building a team of passionate, creative, and ambitious individuals
          who believe in good food, genuine hospitality, and doing things a little
          differently.
        </p>
        <p className="mt-4">
          From our kitchen to our guest experience, every person plays a part in
          making FILFIL what it is.
        </p>
        <div className="mt-8">
          <ButtonLink href="#positions">View Open Positions</ButtonLink>
        </div>
      </PageIntro>

      <section className="bg-beige pb-8">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <ImageReveal>
              <Image
                src={media.guestsLaughing.src}
                alt={media.guestsLaughing.alt}
                width={media.guestsLaughing.width}
                height={media.guestsLaughing.height}
                className="aspect-[4/5] h-auto w-full object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </ImageReveal>
            <Reveal className="flex flex-col justify-end">
              <p className="text-lg leading-relaxed md:text-xl">
                We value teamwork, positive energy, fresh ideas, and people who take
                pride in what they do. We&apos;re growing, evolving, and always looking
                for great people to grow with us.
              </p>
              <p className="mt-6 text-lg">Think you&apos;d be a great fit? We&apos;d love to hear from you.</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="positions" className="scroll-mt-28 bg-beige py-24">
        <Container>
          <Reveal>
            <h2 className="headline mb-10 text-4xl md:text-6xl">Open positions.</h2>
          </Reveal>
          <OpenPositions />
        </Container>
      </section>
    </main>
  );
}
