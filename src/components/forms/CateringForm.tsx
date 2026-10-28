"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitCatering } from "@/lib/actions";
import { cateringSchema, type CateringInput } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { Field, FormStatus, Select, TextArea, TextInput } from "./Field";

const eventTypes = [
  "Team Lunch",
  "Office Gathering",
  "Celebration",
  "Special Occasion",
  "Other",
];

export function CateringForm() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
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

  if (success) return <FormStatus success />;

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <Field label="Full Name" htmlFor="name" error={errors.name?.message}>
        <TextInput id="name" autoComplete="name" {...register("name")} />
      </Field>
      <Field label="Company Name" htmlFor="company" optional error={errors.company?.message}>
        <TextInput id="company" autoComplete="organization" {...register("company")} />
      </Field>
      <Field label="Email Address" htmlFor="email" error={errors.email?.message}>
        <TextInput id="email" type="email" autoComplete="email" {...register("email")} />
      </Field>
      <Field label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
        <TextInput id="phone" type="tel" autoComplete="tel" {...register("phone")} />
      </Field>
      <Field label="Type of Event" htmlFor="eventType" error={errors.eventType?.message}>
        <Select id="eventType" defaultValue="" {...register("eventType")}>
          <option value="" disabled>
            Select an event type
          </option>
          {eventTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Event Date" htmlFor="eventDate" error={errors.eventDate?.message}>
        <TextInput id="eventDate" type="date" {...register("eventDate")} />
      </Field>
      <Field label="Number of Guests" htmlFor="guests" error={errors.guests?.message}>
        <TextInput id="guests" inputMode="numeric" {...register("guests")} />
      </Field>
      <Field label="Location" htmlFor="location" error={errors.location?.message}>
        <TextInput id="location" {...register("location")} />
      </Field>
      <Field label="Additional Details" htmlFor="details" optional error={errors.details?.message}>
        <TextArea id="details" {...register("details")} />
      </Field>
      <FormStatus error={serverError} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending" : "Submit Enquiry"}
      </Button>
    </form>
  );
}
