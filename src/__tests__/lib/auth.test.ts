import { describe, it, expect, vi, beforeEach } from "vitest";
import { verifyPassword, signToken, verifyToken } from "@/lib/auth";

describe("auth", () => {
  beforeEach(() => {
    vi.stubEnv("ADMIN_PASSWORD", "test-password-123");
    vi.stubEnv("JWT_SECRET", "test-jwt-secret-key-for-testing");
  });

  describe("verifyPassword", () => {
    it("returns true for correct password", async () => {
      const result = await verifyPassword("test-password-123");
      expect(result).toBe(true);
    });

    it("returns false for incorrect password", async () => {
      const result = await verifyPassword("wrong-password");
      expect(result).toBe(false);
    });

    it("returns false for empty string", async () => {
      const result = await verifyPassword("");
      expect(result).toBe(false);
    });
  });

  describe("verifyToken", () => {
    it("rejects an invalid token", async () => {
      const valid = await verifyToken("invalid.token.here");
      expect(valid).toBe(false);
    });

    it("rejects an empty string", async () => {
      const valid = await verifyToken("");
      expect(valid).toBe(false);
    });

    it("rejects a random JWT-shaped string", async () => {
      const valid = await verifyToken("eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4ifQ.fake");
      expect(valid).toBe(false);
    });
  });
});
