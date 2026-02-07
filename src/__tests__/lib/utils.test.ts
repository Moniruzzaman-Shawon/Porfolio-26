import { describe, it, expect } from "vitest";
import { cn, slugify, formatDate } from "@/lib/utils";

describe("cn (classname merge)", () => {
  it("merges simple class strings", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("resolves Tailwind conflicts (last wins)", () => {
    expect(cn("px-4", "px-6")).toBe("px-6");
  });

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible");
  });

  it("handles undefined and null inputs", () => {
    expect(cn("base", undefined, null, "end")).toBe("base end");
  });

  it("returns empty string for no inputs", () => {
    expect(cn()).toBe("");
  });
});

describe("slugify", () => {
  it("converts simple text to slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("removes special characters", () => {
    expect(slugify("Hello, World!")).toBe("hello-world");
  });

  it("trims leading and trailing hyphens", () => {
    expect(slugify("--hello--")).toBe("hello");
  });

  it("collapses multiple hyphens", () => {
    expect(slugify("hello   world")).toBe("hello-world");
  });

  it("handles mixed case and symbols", () => {
    expect(slugify("Elite Car Doctor API")).toBe("elite-car-doctor-api");
  });

  it("handles single word", () => {
    expect(slugify("HemoGrid")).toBe("hemogrid");
  });

  it("handles numbers", () => {
    expect(slugify("Project 123")).toBe("project-123");
  });

  it("returns empty string for empty input", () => {
    expect(slugify("")).toBe("");
  });
});

describe("formatDate", () => {
  it("formats a Date object", () => {
    const result = formatDate(new Date("2025-01-15"));
    expect(result).toContain("Jan");
    expect(result).toContain("2025");
    expect(result).toContain("15");
  });

  it("formats an ISO string", () => {
    const result = formatDate("2024-06-01T00:00:00.000Z");
    expect(result).toContain("Jun");
    expect(result).toContain("2024");
  });

  it("returns a consistent format (Mon DD, YYYY)", () => {
    const result = formatDate("2025-12-25");
    expect(result).toMatch(/Dec\s+25,\s+2025/);
  });
});
