"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContact } from "@/lib/actions";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { Field, FormStatus, TextArea, TextInput } from "./Field";

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, value ?? ""));
    const result = await submitContact(formData);
    if (result.ok) {
      setSuccess(true);
      return;
    }
    setServerError(result.error);
  });

  if (success) return <FormStatus success />;

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <Field label="Full Name" htmlFor="name" error={errors.name?.message}>
        <TextInput id="name" autoComplete="name" {...register("name")} />
      </Field>
      <Field label="Email Address" htmlFor="email" error={errors.email?.message}>
        <TextInput id="email" type="email" autoComplete="email" {...register("email")} />
      </Field>
      <Field label="Phone Number" htmlFor="phone" optional error={errors.phone?.message}>
        <TextInput id="phone" type="tel" autoComplete="tel" {...register("phone")} />
      </Field>
      <Field label="Subject" htmlFor="subject" error={errors.subject?.message}>
        <TextInput id="subject" {...register("subject")} />
      </Field>
      <Field label="Message" htmlFor="message" error={errors.message?.message}>
        <TextArea id="message" {...register("message")} />
      </Field>
      <FormStatus error={serverError} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending" : "Send Message"}
      </Button>
    </form>
  );
}
