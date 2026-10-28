import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { cvRules } from "./validation";

export type SubmissionType = "contact" | "catering" | "franchise" | "careers";

export type ActionResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };

function rootDir() {
  return process.cwd();
}

async function persistLocal(type: SubmissionType, payload: Record<string, unknown>) {
  const dir = path.join(rootDir(), "data", "submissions", type);
  await mkdir(dir, { recursive: true });
  const id = randomUUID();
  const file = path.join(dir, `${Date.now()}-${id}.json`);
  await writeFile(
    file,
    JSON.stringify({ id, type, createdAt: new Date().toISOString(), ...payload }, null, 2),
    "utf8",
  );
  return id;
}

async function notifyEmail(type: SubmissionType, payload: Record<string, unknown>) {
  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.CONTACT_INBOX_EMAIL;
  if (!apiKey || !inbox) return;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "FILFIL Website <noreply@filfil.local>",
      to: [inbox],
      subject: `New ${type} enquiry — FILFIL`,
      text: JSON.stringify(payload, null, 2),
    }),
  });

  if (!response.ok) {
    throw new Error("Email delivery failed.");
  }
}

export async function saveSubmission(
  type: SubmissionType,
  payload: Record<string, unknown>,
): Promise<ActionResult> {
  try {
    await persistLocal(type, payload);
    try {
      await notifyEmail(type, payload);
    } catch {
      // Local persistence succeeded. Email is optional until credentials exist.
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "We couldn’t send that just now. Please try again in a moment.",
    };
  }
}

export async function saveCareerApplication(
  payload: Record<string, unknown>,
  cv: File,
): Promise<ActionResult> {
  const extension = path.extname(cv.name || "").toLowerCase();
  if (!cvRules.extensions.includes(extension)) {
    return {
      ok: false,
      error: "Please upload a PDF, DOC, or DOCX file.",
      fieldErrors: { cv: "Please upload a PDF, DOC, or DOCX file." },
    };
  }
  if (cv.size > cvRules.maxBytes) {
    return {
      ok: false,
      error: "Please keep your CV under 5MB.",
      fieldErrors: { cv: "Please keep your CV under 5MB." },
    };
  }

  try {
    const dir = path.join(rootDir(), "data", "uploads", "careers");
    await mkdir(dir, { recursive: true });
    const id = randomUUID();
    const filename = `${Date.now()}-${id}${extension}`;
    const filepath = path.join(dir, filename);
    const buffer = Buffer.from(await cv.arrayBuffer());
    await writeFile(filepath, buffer);

    await persistLocal("careers", {
      ...payload,
      cv: {
        originalName: cv.name,
        storedAs: filename,
        size: cv.size,
        type: cv.type,
      },
    });

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "We couldn’t send that just now. Please try again in a moment.",
    };
  }
}

export function flattenZodError(error: { flatten: () => { fieldErrors: Record<string, string[] | undefined> } }) {
  const fieldErrors: Record<string, string> = {};
  const flat = error.flatten();
  for (const [key, messages] of Object.entries(flat.fieldErrors)) {
    if (messages?.[0]) fieldErrors[key] = messages[0];
  }
  return fieldErrors;
}
