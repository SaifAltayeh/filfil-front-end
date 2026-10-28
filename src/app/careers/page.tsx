import type { Metadata } from "next";
import Image from "next/image";
import { CareerForm } from "@/components/forms/CareerForm";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { PageIntro } from "@/components/ui/PageIntro";
import { jobs } from "@/data/careers";
import { media } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the FILFIL crew in Amman. Explore open positions or submit a general application.",
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

      <section className="bg-beige pb-8">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <ImageReveal>
              <Image
                src={media.guestsLaughing.src}
                alt={media.guestsLaughing.alt}
                width={media.guestsLaughing.width}
                height={media.guestsLaughing.height}
                className="aspect-[4/5] h-auto w-full object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </ImageReveal>
            <Reveal className="flex flex-col justify-end">
              <p className="text-lg leading-relaxed md:text-xl">
                We value teamwork, positive energy, fresh ideas, and people who take
                pride in what they do. We&apos;re growing, evolving, and always looking
                for great people to grow with us.
              </p>
              <p className="mt-6 text-lg">Think you&apos;d be a great fit? We&apos;d love to hear from you.</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="positions" className="scroll-mt-28 bg-beige py-24">
        <Container>
          <Reveal>
            <h2 className="headline mb-10 text-4xl md:text-6xl">Open positions.</h2>
          </Reveal>
          {jobs.length === 0 ? (
            <Reveal>
              <p className="max-w-xl text-lg leading-relaxed">
                There are no listed vacancies right now. That doesn&apos;t mean we
                aren&apos;t looking. Send a general application and we&apos;ll keep you in
                mind as FILFIL grows.
              </p>
            </Reveal>
          ) : (
            <ul className="divide-y divide-black/15 border-y border-black/15">
              {jobs.map((job) => (
                <li key={job.id} className="grid gap-4 py-8 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <h3 className="text-2xl">{job.title}</h3>
                    <p className="eyebrow mt-3 text-black/50">
                      {job.department} · {job.type}
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-lg leading-relaxed">{job.summary}</p>
                    <p className="mt-4">{job.description}</p>
                    <ul className="mt-4 list-disc pl-5 text-black/75">
                      {job.requirements.map((requirement) => (
                        <li key={requirement}>{requirement}</li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <ButtonLink href="#apply">Apply for this role</ButtonLink>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <section id="apply" className="scroll-mt-28 bg-beige pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="headline text-4xl md:text-5xl">Apply.</h2>
              <p className="mt-6 max-w-sm text-lg leading-relaxed">
                Role-specific and general applications are both welcome. Attach your
                CV and tell us why FILFIL feels like the right next step.
              </p>
            </Reveal>
            <div className="lg:col-span-7 lg:col-start-6">
              <CareerForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
