import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/data/faq";

export function FaqSection() {
  return (
    <section className="bg-beige py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-black" />
              FAQ
            </p>
            <h2 className="font-display mt-6 max-w-[12ch] text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[0.95] tracking-[-0.035em]">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:row-span-2">
            <Accordion items={faqs} />
          </Reveal>

          <Reveal className="lg:col-span-5 lg:self-end lg:pb-2">
            <p className="text-xl font-medium md:text-2xl">Still have a question?</p>
            <p className="mt-2 max-w-xs text-black/60">
              Don&apos;t worry — write to us from the contact page and we&apos;ll help you out.
            </p>
            <ButtonLink href="/contact" variant="solid" className="mt-6">
              Contact Us
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
