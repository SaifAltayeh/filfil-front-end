export type JobListing = {
  id: string;
  title: string;
  department: string;
  type: "Full-time" | "Part-time" | "Seasonal";
  location: string;
  summary: string;
  description: string;
  requirements: string[];
};

export const jobs: JobListing[] = [];

export const generalPositionLabel = "General Application";
