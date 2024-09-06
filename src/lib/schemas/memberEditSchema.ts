import { z } from "zod";

export const memberEditSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

export type MemberEditSchema = z.infer<typeof memberEditSchema>;
