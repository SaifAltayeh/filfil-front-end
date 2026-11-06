"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobs, generalPositionLabel, generalPositionLabelAr } from "@/data/careers";
import { submitCareer } from "@/lib/actions";
import { careerSchema, type CareerInput } from "@/lib/validation";
import { Button, buttonClassName } from "@/components/ui/Button";
import { useI18n } from "@/i18n/provider";
import { Field, FormStatus, Select, TextArea, TextInput } from "./Field";

export function CareerForm({
  defaultPosition,
  lockedPosition = false,
  positionAsText = false,
}: {
  defaultPosition?: string;
  lockedPosition?: boolean;
  positionAsText?: boolean;
}) {
  const { t, locale } = useI18n();
  const arabic = locale === "ar";
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [cvName, setCvName] = useState<string | null>(null);
  const positions = [
    { value: generalPositionLabel, label: arabic ? generalPositionLabelAr : generalPositionLabel },
    ...jobs.map((job) => ({
      value: job.title,
      label: arabic ? job.titleAr : job.title,
    })),
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CareerInput>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      position: positionAsText ? "" : (defaultPosition ?? generalPositionLabel),
    },
  });

  const onSubmit = handleSubmit(async (values, event) => {
    setServerError(null);
    setCvError(null);
    const form = event?.target as HTMLFormElement;
    const formData = new FormData(form);
    Object.entries(values).forEach(([key, value]) => formData.set(key, value ?? ""));
    const result = await submitCareer(formData);
    if (result.ok) {
      setSuccess(true);
      return;
    }
    setServerError(result.error);
    if (result.fieldErrors?.cv) setCvError(result.fieldErrors.cv);
  });

  if (success) return <FormStatus success />;

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <Field label={t.forms.fullName} htmlFor="name" error={errors.name?.message}>
        <TextInput id="name" autoComplete="name" {...register("name")} />
      </Field>
      <Field label={t.forms.email} htmlFor="email" error={errors.email?.message}>
        <TextInput id="email" type="email" autoComplete="email" {...register("email")} />
      </Field>
      <Field label={t.forms.phone} htmlFor="phone" error={errors.phone?.message}>
        <TextInput id="phone" type="tel" autoComplete="tel" {...register("phone")} />
      </Field>
      {positionAsText ? (
        <Field label={t.forms.position} htmlFor="position" error={errors.position?.message}>
          <TextInput id="position" placeholder={t.forms.positionPlaceholder} {...register("position")} />
        </Field>
      ) : lockedPosition ? (
        <input type="hidden" {...register("position")} />
      ) : (
        <Field label={t.forms.position} htmlFor="position" error={errors.position?.message}>
          <Select id="position" {...register("position")}>
            {positions.map((position) => (
              <option key={position.value} value={position.value}>
                {position.label}
              </option>
            ))}
          </Select>
        </Field>
      )}
      <Field label={t.forms.experience} htmlFor="experience" error={errors.experience?.message}>
        <TextInput id="experience" {...register("experience")} />
      </Field>
      <Field label={t.forms.cv} error={cvError ?? undefined}>
        <input
          id="cv"
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf"
          required
          className="sr-only"
          onChange={(event) => setCvName(event.target.files?.[0]?.name ?? null)}
        />
        <label htmlFor="cv" className={buttonClassName({ variant: "solid", className: "w-fit cursor-pointer" })}>
          {cvName ? t.forms.cvReplace : t.forms.cvChoose}
        </label>
        <p className="pt-3 text-sm text-black/55">
          {cvName ? cvName : t.forms.cvHint}
        </p>
      </Field>
      <Field label={t.forms.message} htmlFor="message" error={errors.message?.message}>
        <TextArea id="message" {...register("message")} />
      </Field>
      <FormStatus error={serverError} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t.common.sending : t.forms.submitApplication}
      </Button>
    </form>
  );
}
