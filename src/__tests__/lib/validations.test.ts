import { describe, it, expect } from "vitest";
import { projectSchema, contactSchema, loginSchema } from "@/lib/validations";

describe("projectSchema", () => {
  const validProject = {
    name: "Test Project",
    description: "A test project description",
    category: "webapp" as const,
    techTags: ["React", "Node.js"],
    featured: false,
    order: 0,
  };

  it("accepts valid project data", () => {
    const result = projectSchema.safeParse(validProject);
    expect(result.success).toBe(true);
  });

  it("rejects empty name", () => {
    const result = projectSchema.safeParse({ ...validProject, name: "" });
    expect(result.success).toBe(false);
  });

  it("rejects name over 100 characters", () => {
    const result = projectSchema.safeParse({ ...validProject, name: "a".repeat(101) });
    expect(result.success).toBe(false);
  });

  it("rejects empty description", () => {
    const result = projectSchema.safeParse({ ...validProject, description: "" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid category", () => {
    const result = projectSchema.safeParse({ ...validProject, category: "invalid" });
    expect(result.success).toBe(false);
  });

  it("accepts all valid categories", () => {
    const categories = ["webapp", "api", "ai", "tools", "experiments"];
    categories.forEach((category) => {
      const result = projectSchema.safeParse({ ...validProject, category });
      expect(result.success).toBe(true);
    });
  });

  it("rejects empty techTags array", () => {
    const result = projectSchema.safeParse({ ...validProject, techTags: [] });
    expect(result.success).toBe(false);
  });

  it("accepts optional URLs as null", () => {
    const result = projectSchema.safeParse({
      ...validProject,
      thumbnailUrl: null,
      liveUrl: null,
      githubUrl: null,
    });
    expect(result.success).toBe(true);
  });

  it("accepts optional URLs as empty string", () => {
    const result = projectSchema.safeParse({
      ...validProject,
      liveUrl: "",
      githubUrl: "",
    });
    expect(result.success).toBe(true);
  });

  it("accepts valid URLs", () => {
    const result = projectSchema.safeParse({
      ...validProject,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/user/repo",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid URLs", () => {
    const result = projectSchema.safeParse({
      ...validProject,
      liveUrl: "not-a-url",
    });
    expect(result.success).toBe(false);
  });

  it("defaults featured to false", () => {
    const { featured, ...withoutFeatured } = validProject;
    const result = projectSchema.parse(withoutFeatured);
    expect(result.featured).toBe(false);
  });

  it("defaults order to 0", () => {
    const { order, ...withoutOrder } = validProject;
    const result = projectSchema.parse(withoutOrder);
    expect(result.order).toBe(0);
  });
});

describe("contactSchema", () => {
  const validContact = {
    name: "John Doe",
    email: "john@example.com",
    message: "Hello, I'd like to get in touch with you about a project.",
  };

  it("accepts valid contact data", () => {
    const result = contactSchema.safeParse(validContact);
    expect(result.success).toBe(true);
  });

  it("rejects name shorter than 2 characters", () => {
    const result = contactSchema.safeParse({ ...validContact, name: "J" });
    expect(result.success).toBe(false);
  });

  it("rejects name over 100 characters", () => {
    const result = contactSchema.safeParse({ ...validContact, name: "a".repeat(101) });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = contactSchema.safeParse({ ...validContact, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects empty email", () => {
    const result = contactSchema.safeParse({ ...validContact, email: "" });
    expect(result.success).toBe(false);
  });

  it("rejects message shorter than 10 characters", () => {
    const result = contactSchema.safeParse({ ...validContact, message: "Hi" });
    expect(result.success).toBe(false);
  });

  it("rejects message over 2000 characters", () => {
    const result = contactSchema.safeParse({ ...validContact, message: "a".repeat(2001) });
    expect(result.success).toBe(false);
  });

  it("accepts minimum valid message (10 chars)", () => {
    const result = contactSchema.safeParse({ ...validContact, message: "Hello there" });
    expect(result.success).toBe(true);
  });
});

describe("loginSchema", () => {
  it("accepts valid password", () => {
    const result = loginSchema.safeParse({ password: "my-secret" });
    expect(result.success).toBe(true);
  });

  it("rejects empty password", () => {
    const result = loginSchema.safeParse({ password: "" });
    expect(result.success).toBe(false);
  });

  it("rejects missing password", () => {
    const result = loginSchema.safeParse({});
    expect(result.success).toBe(false);
  });
});
