import { ButtonLink } from "@/components/ui/Button";
import { Brand } from "@/components/ui/Brand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function Loyalty() {
  return (
    <section id="loyalty" className="bg-beige py-24 md:py-32 lg:py-40">
      <Container>
        <Reveal>
          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-16">
            <h2 className="headline lg:col-span-7 text-[clamp(2.4rem,6vw,6.2rem)]">
              Join the <Brand />. family
            </h2>
            <p className="font-display text-xl leading-snug tracking-[-0.03em] lg:col-span-5 lg:text-2xl">
              Good food comes with good perks.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-black/70 md:mt-12">
            <p>
              Become part of the filfil family and enjoy more than just great food. Get
              access to our loyalty program, be the first to hear about new menu
              launches, receive exclusive invitations, and unlock special offers
              reserved just for our members.
            </p>
            <p>Because being part of the family has its perks.</p>
            <ButtonLink href={site.loyaltyUrl} variant="solid" className="mt-4">
              Join the Family
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
