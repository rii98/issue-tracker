import { z } from "zod";

// VALIDATING SCHEMA FOR ISSUES
export const CreateIssueSchema = z.object({
  title: z.string().min(1, "Title should be at least one character.").max(255),
  description: z.string().min(1, "Description is required"),
});
