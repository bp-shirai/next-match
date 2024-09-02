import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Password must be at least 4 characters").max(12),
});

export type LoginSchema = z.infer<typeof loginSchema>;
