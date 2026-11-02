"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useI18n } from "@/i18n/provider";

type Step = {
  title: string;
  body: string;
  points: readonly string[];
};

function useDesktop(query = "(min-width: 768px)") {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const sync = () => setMatches(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [query]);

  return matches;
}

function StepCard({
  step,
  index,
  total,
  arabic,
}: {
  step: Step;
  index: number;
  total: number;
  arabic: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const isLast = index === total - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.93]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.88]);
  const number = String(index + 1).padStart(2, "0");

  return (
    <li
      ref={ref}
      className="sticky top-[18vh] flex h-[82vh] items-center justify-center"
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        style={reduce ? undefined : { scale, opacity: fade }}
        className="flex h-[min(58vh,460px)] w-[min(90vw,500px)] flex-col justify-between rounded-[18px] border border-black/10 bg-[#efe6d8] px-8 py-9 shadow-[0_24px_50px_rgba(0,0,0,0.12)] md:px-10 md:py-10"
      >
        <div>
          <h3
            className={
              arabic
                ? "max-w-[14ch] text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.15]"
                : "headline max-w-[11ch] text-[clamp(34px,4.2vw,52px)]"
            }
          >
            {step.title}
          </h3>
          <p className="mt-8 max-w-[32ch] text-[15px] leading-7 text-black/70">{step.body}</p>
        </div>
        <div className="flex items-end justify-between gap-6">
          <ul className="space-y-1 text-[15px] font-medium leading-6">
            {step.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="headline text-[64px] leading-none md:text-[72px]">{number}</p>
        </div>
      </motion.article>
    </li>
  );
}

export function FranchiseProcess({
  heading,
  lines,
  steps,
}: {
  heading: string;
  lines: readonly string[];
  steps: readonly Step[];
}) {
  const { locale } = useI18n();
  const arabic = locale === "ar";
  const desktop = useDesktop();
  const reduce = Boolean(useReducedMotion());

  if (!desktop || reduce) {
    return (
      <div className="mx-auto mt-20 w-full max-w-[1600px] px-5 md:px-10 lg:px-16">
        <h3 className="headline text-[clamp(2rem,5vw,3.4rem)]">{heading}</h3>
        <ol className="mx-auto mt-10 w-full max-w-[500px] space-y-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col justify-between rounded-[18px] border border-black/10 bg-[#efe6d8] px-6 py-7"
            >
              <div>
                <p className="headline text-sm">{String(index + 1).padStart(2, "0")}</p>
                <h4
                  className={
                    arabic
                      ? "mt-3 text-[28px] font-extrabold leading-[1.15]"
                      : "headline mt-3 text-[30px]"
                  }
                >
                  {step.title}
                </h4>
                <p className="mt-4 text-[15px] leading-7 text-black/70">{step.body}</p>
              </div>
              <ul className="mt-6 space-y-1 text-[15px] font-medium">
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className="relative mt-20 pb-32">
      <h3 className="sr-only">{heading}</h3>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <p
          className={`sticky top-[12vh] text-center font-extrabold text-black/10 blur-[10px] ${
            arabic
              ? "text-[clamp(72px,16vw,220px)] leading-[1.05]"
              : "headline text-[clamp(92px,20vw,280px)]"
          }`}
        >
          {lines.map((line, index) => (
            <span key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </p>
      </div>
      <ol className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pt-[12vh] md:px-10 lg:px-16">
        {steps.map((step, index) => (
          <StepCard
            key={step.title}
            step={step}
            index={index}
            total={steps.length}
            arabic={arabic}
          />
        ))}
      </ol>
    </div>
  );
}
