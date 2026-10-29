import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FeaturedMarquee } from "./FeaturedMarquee";

export function FeaturedProducts() {
  return (
    <section className="overflow-hidden bg-beige py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="flex max-w-2xl flex-col gap-8 md:max-w-none md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-8">The menu</p>
              <h2 className="headline text-[clamp(2.4rem,6vw,6.5rem)]">
                Featured
                <br />
                products.
              </h2>
              <p className="measure mt-6 text-lg leading-relaxed text-black/70">
                True ingredients. Bold flavours.
              </p>
            </div>
            <ButtonLink href="/menu" className="self-start md:self-auto">
              View Full Menu
            </ButtonLink>
          </div>
        </Reveal>
      </Container>

      <FeaturedMarquee />
    </section>
  );
}
