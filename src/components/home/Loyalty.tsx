import { ButtonLink } from "@/components/ui/Button";
import { Brand } from "@/components/ui/Brand";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { getMessages } from "@/i18n/get-messages";

export async function Loyalty() {
  const t = await getMessages();

  return (
    <section id="loyalty" className="bg-beige py-24 md:py-32 lg:py-40">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:justify-between lg:gap-16">
            <div className="max-w-2xl">
              <h2 className="headline max-w-[12ch] text-[clamp(2.4rem,6vw,6.2rem)]">
                {t.loyalty.titleBefore} <Brand />. {t.loyalty.titleAfter}
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-black/70">
                <p>{t.loyalty.body}</p>
                <p>{t.loyalty.closing}</p>
                <ButtonLink href={site.loyaltyUrl} variant="solid" className="mt-4">
                  {t.loyalty.cta}
                </ButtonLink>
              </div>
            </div>
            <a
              href={site.loyaltyUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={t.loyalty.qrLabel}
              className="block w-fit shrink-0 lg:translate-y-10"
            >
              <img
                src="/assets/media/loyalty-qr.svg"
                alt={t.loyalty.qrLabel}
                width={320}
                height={320}
                className="h-56 w-56 bg-white p-4 md:h-72 md:w-72 lg:h-80 lg:w-80"
              />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
