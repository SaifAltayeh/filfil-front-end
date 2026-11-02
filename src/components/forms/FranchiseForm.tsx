"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitFranchise } from "@/lib/actions";
import { franchiseSchema, type FranchiseInput } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { SuccessDialog } from "@/components/ui/SuccessDialog";
import { useI18n } from "@/i18n/provider";
import { Field, FormStatus, TextArea, TextInput } from "./Field";

export function FranchiseForm() {
  const { t } = useI18n();
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FranchiseInput>({ resolver: zodResolver(franchiseSchema) });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, value ?? ""));
    const result = await submitFranchise(formData);
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
      <Field label={t.forms.city} htmlFor="city" error={errors.city?.message}>
        <TextInput id="city" {...register("city")} />
      </Field>
      <Field label={t.forms.email} htmlFor="email" error={errors.email?.message}>
        <TextInput id="email" type="email" autoComplete="email" {...register("email")} />
      </Field>
      <Field label={t.forms.phone} htmlFor="phone" error={errors.phone?.message}>
        <TextInput id="phone" type="tel" autoComplete="tel" {...register("phone")} />
      </Field>
      <Field
        label={t.forms.background}
        htmlFor="background"
        error={errors.background?.message}
      >
        <TextArea id="background" {...register("background")} />
      </Field>
      <Field label={t.forms.message} htmlFor="message" optional error={errors.message?.message}>
        <TextArea id="message" {...register("message")} />
      </Field>
      <FormStatus error={serverError} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t.common.sending : t.common.submitEnquiry}
      </Button>
      </form>
      <SuccessDialog
        open={success}
        title={t.common.formSubmittedTitle}
        message={t.common.formSubmittedMessage}
        onClose={() => {
          setSuccess(false);
          reset();
        }}
      />
    </>
  );
}
