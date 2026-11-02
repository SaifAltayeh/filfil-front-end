import { FranchiseProcess } from "@/components/franchise/FranchiseProcess";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getMessages } from "@/i18n/get-messages";

export async function FranchiseModel() {
  const t = await getMessages();

  return (
    <section className="bg-beige py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="headline max-w-[16ch] text-[clamp(2.2rem,5.5vw,5.2rem)]">
            {t.franchise.modelTitle}
          </h2>
          <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-black/70">
            {t.franchise.modelIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Container>

      <FranchiseProcess
        heading={t.franchise.howItWorks}
        lines={t.franchise.howLines}
        steps={t.franchise.steps}
      />
    </section>
  );
}
