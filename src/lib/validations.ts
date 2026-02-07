import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  description: z.string().min(1, "Description is required").max(500),
  category: z.enum(["webapp", "api", "ai", "tools", "experiments"]),
  techTags: z.array(z.string()).min(1, "At least one tech tag is required"),
  thumbnailUrl: z.string().url().nullable().optional().or(z.literal("")),
  liveUrl: z.string().url().nullable().optional().or(z.literal("")),
  githubUrl: z.string().url().nullable().optional().or(z.literal("")),
  featured: z.boolean().default(false),
  order: z.number().int().default(0),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export const loginSchema = z.object({
  password: z.string().min(1, "Password is required"),
});

export type ProjectInput = z.infer<typeof projectSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
