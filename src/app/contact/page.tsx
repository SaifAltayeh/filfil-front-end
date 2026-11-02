import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageIntro } from "@/components/ui/PageIntro";
import { getMessages } from "@/i18n/get-messages";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Say hello to filfil in Sweifieh Village, Amman. Questions, ideas, feedback, or just a hello.",
};

function ContactDetails({
  location,
  instagram,
  tiktok,
  spotify,
}: {
  location: string;
  instagram: string;
  tiktok: string;
  spotify: string;
}) {
  return (
    <div className="max-w-sm">
      <p className="text-xl leading-snug md:text-2xl">{location}</p>
      <div className="mt-6 flex flex-col gap-2 text-lg">
        {site.phone ? (
          <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="nav-link w-fit">
            {site.phone}
          </a>
        ) : null}
        {site.email ? (
          <a href={`mailto:${site.email}`} className="nav-link w-fit">
            {site.email}
          </a>
        ) : null}
        <a href={site.instagram} className="nav-link w-fit" target="_blank" rel="noreferrer">
          {instagram}
        </a>
        {site.tiktok ? (
          <a href={site.tiktok} className="nav-link w-fit" target="_blank" rel="noreferrer">
            {tiktok}
          </a>
        ) : null}
        {site.spotify ? (
          <a href={site.spotify} className="nav-link w-fit" target="_blank" rel="noreferrer">
            {spotify}
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default async function ContactPage() {
  const t = await getMessages();

  return (
    <main>
      <PageIntro
        title={t.contact.title}
        kicker={t.contact.kicker}
        aside={
          <ContactDetails
            location={t.site.location}
            instagram={t.common.instagram}
            tiktok={t.common.tiktok}
            spotify={t.common.spotify}
          />
        }
      >
        {t.contact.intro.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? undefined : "mt-4"}>
            {paragraph}
          </p>
        ))}
        <div className="mt-8">
          <ButtonLink href="#enquire">{t.contact.getInTouch}</ButtonLink>
        </div>
      </PageIntro>

      <section className="bg-beige pb-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div id="enquire" className="scroll-mt-32 lg:col-span-6">
              <Reveal>
                <h2 className="headline mb-10 text-4xl md:text-5xl">{t.contact.write}</h2>
                <ContactForm />
              </Reveal>
            </div>

            <Reveal className="lg:col-span-5 lg:col-start-8">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={t.contact.map}
                className="relative block aspect-[4/5] overflow-hidden bg-black/5 lg:h-full lg:min-h-[36rem] lg:aspect-auto"
              >
                <iframe
                  title={t.contact.mapTitle}
                  src={site.mapsEmbedUrl}
                  className="pointer-events-none h-full w-full border-0"
                  loading="lazy"
                  tabIndex={-1}
                />
              </a>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
