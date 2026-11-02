"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitCatering } from "@/lib/actions";
import { cateringSchema, type CateringInput } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { SuccessDialog } from "@/components/ui/SuccessDialog";
import { useI18n } from "@/i18n/provider";
import { Field, FormStatus, Select, TextArea, TextInput } from "./Field";

const eventTypes = [
  "Team Lunch",
  "Office Gathering",
  "Celebration",
  "Special Occasion",
  "Other",
] as const;

export function CateringForm() {
  const { t } = useI18n();
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CateringInput>({ resolver: zodResolver(cateringSchema) });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, value ?? ""));
    const result = await submitCatering(formData);
    if (result.ok) {
      setSuccess(true);
      return;
    }
    setServerError(result.error);
  });

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <Field label={t.forms.fullName} htmlFor="name" error={errors.name?.message}>
        <TextInput id="name" autoComplete="name" {...register("name")} />
      </Field>
      <Field label={t.forms.company} htmlFor="company" optional error={errors.company?.message}>
        <TextInput id="company" autoComplete="organization" {...register("company")} />
      </Field>
      <Field label={t.forms.email} htmlFor="email" error={errors.email?.message}>
        <TextInput id="email" type="email" autoComplete="email" {...register("email")} />
      </Field>
      <Field label={t.forms.phone} htmlFor="phone" error={errors.phone?.message}>
        <TextInput id="phone" type="tel" autoComplete="tel" {...register("phone")} />
      </Field>
      <Field label={t.forms.eventType} htmlFor="eventType" error={errors.eventType?.message}>
        <Select id="eventType" defaultValue="" {...register("eventType")}>
          <option value="" disabled>
            {t.forms.selectEvent}
          </option>
          {eventTypes.map((type) => (
            <option key={type} value={type}>
              {t.forms.events[type]}
            </option>
          ))}
        </Select>
      </Field>
      <Field label={t.forms.eventDate} htmlFor="eventDate" error={errors.eventDate?.message}>
        <TextInput id="eventDate" type="date" {...register("eventDate")} />
      </Field>
      <Field label={t.forms.guests} htmlFor="guests" error={errors.guests?.message}>
        <TextInput id="guests" inputMode="numeric" {...register("guests")} />
      </Field>
      <Field label={t.forms.location} htmlFor="location" error={errors.location?.message}>
        <TextInput id="location" {...register("location")} />
      </Field>
      <Field label={t.forms.details} htmlFor="details" optional error={errors.details?.message}>
        <TextArea id="details" {...register("details")} />
      </Field>
      <FormStatus error={serverError} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t.common.sending : t.common.submitEnquiry}
      </Button>
    </form>
    <SuccessDialog
      open={success}
      title={t.common.formSubmittedTitle}
      message={t.common.formSubmittedCatering}
      onClose={() => {
        setSuccess(false);
        reset();
      }}
    />
    </>
  );
}
