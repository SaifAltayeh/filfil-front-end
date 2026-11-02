import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { getMessages } from "@/i18n/get-messages";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the filfil website.",
};

export default async function PrivacyPage() {
  const t = await getMessages();

  return (
    <main>
      <PageIntro title={t.privacy.title} />
      <section className="bg-beige pb-24">
        <Container>
          <div className="max-w-2xl space-y-10 text-lg leading-relaxed">
            {t.privacy.sections.map((section) => (
              <article key={section.title}>
                <h2 className="headline mb-4 text-3xl">{section.title}.</h2>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
