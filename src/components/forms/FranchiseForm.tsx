"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitFranchise } from "@/lib/actions";
import { franchiseSchema, type FranchiseInput } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { SuccessDialog } from "@/components/ui/SuccessDialog";
import { Field, FormStatus, TextArea, TextInput } from "./Field";

export function FranchiseForm() {
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
      <Field label="Full Name" htmlFor="name" error={errors.name?.message}>
        <TextInput id="name" autoComplete="name" {...register("name")} />
      </Field>
      <Field label="Company Name" htmlFor="company" optional error={errors.company?.message}>
        <TextInput id="company" autoComplete="organization" {...register("company")} />
      </Field>
      <Field label="Country / City of Interest" htmlFor="city" error={errors.city?.message}>
        <TextInput id="city" {...register("city")} />
      </Field>
      <Field label="Email Address" htmlFor="email" error={errors.email?.message}>
        <TextInput id="email" type="email" autoComplete="email" {...register("email")} />
      </Field>
      <Field label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
        <TextInput id="phone" type="tel" autoComplete="tel" {...register("phone")} />
      </Field>
      <Field
        label="Business Background / Experience"
        htmlFor="background"
        error={errors.background?.message}
      >
        <TextArea id="background" {...register("background")} />
      </Field>
      <Field label="Message" htmlFor="message" optional error={errors.message?.message}>
        <TextArea id="message" {...register("message")} />
      </Field>
      <FormStatus error={serverError} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending" : "Submit Enquiry"}
      </Button>
      </form>
      <SuccessDialog
        open={success}
        title="Form submitted."
        message="Your form has been submitted. We'll be in touch soon."
        onClose={() => {
          setSuccess(false);
          reset();
        }}
      />
    </>
  );
}
