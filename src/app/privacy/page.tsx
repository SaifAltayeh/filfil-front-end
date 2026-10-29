import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the FILFIL website.",
};

const sections = [
  {
    title: "Who we are",
    body: "This website is operated by FILFIL, a restaurant based in Sweifieh Village, Amman, Jordan.",
  },
  {
    title: "What we collect",
    body: "If you send a contact, catering, franchise, or careers form, we collect the details you submit. That typically includes your name, email address, phone number, and the content of your message. Careers applications may also include a CV file.",
  },
  {
    title: "How we use it",
    body: "We use this information to respond to enquiries, assess partnership or employment interest, and operate the restaurant’s communications. We do not sell personal information.",
  },
  {
    title: "How long we keep it",
    body: "Enquiry records and CV files are retained only as long as needed to handle the request and any related follow-up, unless a longer period is required by law.",
  },
  {
    title: "Your choices",
    body: "You may ask us to access, update, or delete information you have sent through this website. Contact details will be published here once official channels are confirmed.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageIntro title="Privacy." />
      <section className="bg-beige pb-24">
        <Container>
          <div className="max-w-2xl space-y-10 text-lg leading-relaxed">
            {sections.map((section) => (
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
