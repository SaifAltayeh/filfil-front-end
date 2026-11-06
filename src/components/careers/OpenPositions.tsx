"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CareerForm } from "@/components/forms/CareerForm";
import { Button } from "@/components/ui/Button";
import { jobTypeLabels, jobs, type JobListing } from "@/data/careers";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";

function JobBlock({ job }: { job: JobListing }) {
  const { locale, t } = useI18n();
  const arabic = locale === "ar";
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const title = arabic ? job.titleAr : job.title;
  const department = arabic ? job.departmentAr : job.department;
  const type = arabic ? jobTypeLabels[job.type].ar : jobTypeLabels[job.type].en;
  const location = arabic ? job.locationAr : job.location;
  const summary = arabic ? job.summaryAr : job.summary;
  const description = arabic ? job.descriptionAr : job.description;
  const responsibilities = arabic ? job.responsibilitiesAr : job.responsibilities;
  const requirements = arabic ? job.requirementsAr : job.requirements;

  useEffect(() => {
    if (!applyOpen) return;
    formRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [applyOpen]);

  const toggleDetails = () => {
    setDetailsOpen((current) => {
      if (current) setApplyOpen(false);
      return !current;
    });
  };

  return (
    <li className="py-8 md:py-10">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-2xl">{title}</h3>
          <p className="eyebrow mt-3 text-black/50">
            {department} · {type}
          </p>
          <p className="mt-2 text-sm text-black/55">{location}</p>
        </div>
        <button
          type="button"
          aria-expanded={detailsOpen}
          aria-controls={panelId}
          onClick={toggleDetails}
          className="flex h-10 w-10 shrink-0 items-center justify-center text-2xl leading-none"
          aria-label={detailsOpen ? `${t.common.close} ${title}` : `${t.careers.apply} ${title}`}
        >
          <span
            aria-hidden
            className={cn("transition-transform duration-300", detailsOpen && "rotate-45")}
          >
            +
          </span>
        </button>
      </div>

      {detailsOpen ? (
        <div id={panelId} className="mt-8 md:max-w-4xl md:pl-0">
          <p className="text-lg leading-relaxed">{summary}</p>
          <p className="mt-4 text-black/75">{description}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">{t.careers.responsibilities}</p>
              <ul className="space-y-3 text-sm leading-relaxed text-black/75 md:text-[15px]">
                {responsibilities.map((item) => (
                  <li key={item} className="pl-4 -indent-4">
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">{t.careers.requirements}</p>
              <ul className="space-y-3 text-sm leading-relaxed text-black/75 md:text-[15px]">
                {requirements.map((item) => (
                  <li key={item} className="pl-4 -indent-4">
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Button variant="outline" onClick={() => setApplyOpen((current) => !current)}>
              {applyOpen ? t.common.close : t.careers.applyRole}
            </Button>
          </div>

          {applyOpen ? (
            <div ref={formRef} className="mt-10 border-t border-black/15 pt-10">
              <p className="eyebrow mb-6">
                {t.careers.apply} · {title}
              </p>
              <CareerForm key={job.id} defaultPosition={job.title} lockedPosition />
            </div>
          ) : null}
        </div>
      ) : null}
    </li>
  );
}

export function OpenPositions() {
  const { t } = useI18n();

  if (jobs.length === 0) {
    return <p className="max-w-xl text-lg leading-relaxed">{t.careers.empty}</p>;
  }

  return (
    <ul className="divide-y divide-black/15 border-y border-black/15">
      {jobs.map((job) => (
        <JobBlock key={job.id} job={job} />
      ))}
    </ul>
  );
}
