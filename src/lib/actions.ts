"use server";

import {
  careerSchema,
  cateringSchema,
  contactSchema,
  franchiseSchema,
} from "./validation";
import {
  flattenZodError,
  saveCareerApplication,
  saveSubmission,
  type ActionResult,
} from "./submissions";

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function submitContact(formData: FormData): Promise<ActionResult> {
  const parsed = contactSchema.safeParse({
    name: readString(formData, "name"),
    email: readString(formData, "email"),
    phone: readString(formData, "phone"),
    subject: readString(formData, "subject"),
    message: readString(formData, "message"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      error: "Please check the highlighted fields.",
      fieldErrors: flattenZodError(parsed.error),
    };
  }

  return saveSubmission("contact", parsed.data);
}

export async function submitCatering(formData: FormData): Promise<ActionResult> {
  const parsed = cateringSchema.safeParse({
    name: readString(formData, "name"),
    company: readString(formData, "company"),
    email: readString(formData, "email"),
    phone: readString(formData, "phone"),
    eventType: readString(formData, "eventType"),
    eventDate: readString(formData, "eventDate"),
    guests: readString(formData, "guests"),
    location: readString(formData, "location"),
    details: readString(formData, "details"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      error: "Please check the highlighted fields.",
      fieldErrors: flattenZodError(parsed.error),
    };
  }

  return saveSubmission("catering", parsed.data);
}

export async function submitFranchise(formData: FormData): Promise<ActionResult> {
  const parsed = franchiseSchema.safeParse({
    name: readString(formData, "name"),
    company: readString(formData, "company"),
    city: readString(formData, "city"),
    email: readString(formData, "email"),
    phone: readString(formData, "phone"),
    background: readString(formData, "background"),
    message: readString(formData, "message"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      error: "Please check the highlighted fields.",
      fieldErrors: flattenZodError(parsed.error),
    };
  }

  return saveSubmission("franchise", parsed.data);
}

export async function submitCareer(formData: FormData): Promise<ActionResult> {
  const parsed = careerSchema.safeParse({
    name: readString(formData, "name"),
    email: readString(formData, "email"),
    phone: readString(formData, "phone"),
    position: readString(formData, "position"),
    experience: readString(formData, "experience"),
    message: readString(formData, "message"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      error: "Please check the highlighted fields.",
      fieldErrors: flattenZodError(parsed.error),
    };
  }

  const cv = formData.get("cv");
  if (!(cv instanceof File) || cv.size === 0) {
    return {
      ok: false,
      error: "Please attach your CV.",
      fieldErrors: { cv: "Please attach your CV." },
    };
  }

  return saveCareerApplication(parsed.data, cv);
}
