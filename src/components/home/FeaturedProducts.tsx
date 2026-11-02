import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getMessages } from "@/i18n/get-messages";
import { FeaturedMarquee } from "./FeaturedMarquee";

export async function FeaturedProducts() {
  const t = await getMessages();

  return (
    <section className="overflow-hidden bg-beige py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="flex max-w-2xl flex-col gap-8 md:max-w-none md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-8">{t.home.featuredEyebrow}</p>
              <h2 className="headline text-[clamp(2.4rem,6vw,6.5rem)]">
                {t.home.featuredTitle.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="measure mt-6 text-lg leading-relaxed text-black/70">{t.home.featuredBody}</p>
            </div>
            <ButtonLink href="/menu" className="self-start md:self-auto">
              {t.home.viewMenu}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>

      <FeaturedMarquee />
    </section>
  );
}
