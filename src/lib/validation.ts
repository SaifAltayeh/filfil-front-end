import { z } from "zod";

const phone = z
  .string()
  .trim()
  .min(6, "Please enter a valid phone number.")
  .max(30, "Please enter a valid phone number.");

const optionalPhone = z
  .string()
  .trim()
  .max(30)
  .optional()
  .or(z.literal(""));

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: optionalPhone,
  subject: z.string().trim().min(2, "Please add a subject.").max(160),
  message: z.string().trim().min(10, "Please tell us a little more.").max(4000),
});

export const cateringSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address."),
  phone,
  eventType: z.string().trim().min(2, "Please choose an event type."),
  eventDate: z.string().trim().min(4, "Please choose an event date."),
  guests: z
    .string()
    .trim()
    .min(1, "Please estimate the number of guests.")
    .max(10),
  location: z.string().trim().min(2, "Please add a location.").max(200),
  details: z.string().trim().max(4000).optional().or(z.literal("")),
});

export const franchiseSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  city: z.string().trim().min(2, "Please add a country or city.").max(160),
  email: z.string().trim().email("Please enter a valid email address."),
  phone,
  background: z
    .string()
    .trim()
    .min(10, "Please share a little about your background.")
    .max(4000),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
});

export const careerSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  phone,
  position: z.string().trim().min(2, "Please choose a position.").max(160),
  experience: z.string().trim().min(1, "Please add your years of experience.").max(40),
  message: z
    .string()
    .trim()
    .min(10, "Please introduce yourself in a few sentences.")
    .max(4000),
});

export const cvRules = {
  maxBytes: 5 * 1024 * 1024,
  mimeTypes: [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  extensions: [".pdf", ".doc", ".docx"],
};

export type ContactInput = z.infer<typeof contactSchema>;
export type CateringInput = z.infer<typeof cateringSchema>;
export type FranchiseInput = z.infer<typeof franchiseSchema>;
export type CareerInput = z.infer<typeof careerSchema>;
