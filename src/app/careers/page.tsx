import type { Metadata } from "next";
import Image from "next/image";
import { OpenPositions } from "@/components/careers/OpenPositions";
import { CareerForm } from "@/components/forms/CareerForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { PageIntro } from "@/components/ui/PageIntro";
import { generalPositionLabel } from "@/data/careers";
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

      <section className="bg-beige">
        <div className="grid lg:grid-cols-2">
          <ImageReveal>
            <Image
              src={media.guestsEating.src}
              alt={media.guestsEating.alt}
              width={media.guestsEating.width}
              height={media.guestsEating.height}
              className="h-full min-h-[28rem] w-full object-cover lg:min-h-[80vh]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </ImageReveal>
          <Reveal className="flex flex-col justify-end px-5 py-16 md:px-10 md:py-20 lg:px-16">
            <p className="max-w-md text-lg leading-relaxed md:text-xl">
              We value teamwork, positive energy, fresh ideas, and people who take
              pride in what they do. We&apos;re growing, evolving, and always looking
              for great people to grow with us.
            </p>
            <p className="mt-6 max-w-md text-lg">
              Think you&apos;d be a great fit? We&apos;d love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="positions" className="scroll-mt-28 bg-beige py-24">
        <Container>
          <Reveal>
            <h2 className="headline mb-10 text-4xl md:text-6xl">Open positions.</h2>
          </Reveal>
          <OpenPositions />
        </Container>
      </section>

      <section id="general" className="scroll-mt-28 bg-beige pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="headline text-4xl md:text-5xl">General positions.</h2>
              <p className="mt-6 max-w-sm text-lg leading-relaxed">
                No listing that fits? Send a general application and we&apos;ll keep you
                in mind as FILFIL grows.
              </p>
            </Reveal>
            <div className="lg:col-span-7 lg:col-start-6">
              <CareerForm defaultPosition={generalPositionLabel} lockedPosition />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
