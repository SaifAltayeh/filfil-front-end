import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageIntro } from "@/components/ui/PageIntro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Say hello to FILFIL in Sweifieh Village, Amman. Questions, ideas, feedback, or just a hello.",
};

function ContactDetails() {
  return (
    <div className="max-w-sm">
      <p className="text-xl leading-snug md:text-2xl">{site.location.display}</p>
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
          Instagram
        </a>
        {site.tiktok ? (
          <a href={site.tiktok} className="nav-link w-fit" target="_blank" rel="noreferrer">
            TikTok
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        title="Say hello."
        kicker="We'd Love to Hear From You."
        aside={<ContactDetails />}
      >
        <p>
          Got a question, an idea, some feedback, or just want to say hello?
          We&apos;re all ears.
        </p>
        <p className="mt-4">
          Whether you&apos;re a guest, a potential partner, or someone who simply loves
          good food, we&apos;d love to hear from you.
        </p>
        <p className="mt-4">Drop us a message.</p>
        <div className="mt-8">
          <ButtonLink href="#enquire">Get in Touch</ButtonLink>
        </div>
      </PageIntro>

      <section className="bg-beige pb-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div id="enquire" className="scroll-mt-32 lg:col-span-6">
              <Reveal>
                <h2 className="headline mb-10 text-4xl md:text-5xl">Write to us.</h2>
                <ContactForm />
              </Reveal>
            </div>

            <Reveal className="lg:col-span-5 lg:col-start-8">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open FILFIL on Google Maps"
                className="relative block aspect-[4/5] overflow-hidden bg-black/5 lg:h-full lg:min-h-[36rem] lg:aspect-auto"
              >
                <iframe
                  title="FILFIL location map"
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
