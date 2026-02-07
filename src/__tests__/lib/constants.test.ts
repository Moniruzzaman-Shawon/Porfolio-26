import { describe, it, expect } from "vitest";
import {
  siteMetadata,
  navItems,
  socialLinks,
  stats,
  roles,
  skillBlocks,
  services,
  education,
  certificates,
  categoryLabels,
  platformStats,
} from "@/lib/constants";

describe("constants integrity", () => {
  describe("siteMetadata", () => {
    it("has required fields", () => {
      expect(siteMetadata.title).toBeTruthy();
      expect(siteMetadata.description).toBeTruthy();
      expect(siteMetadata.author).toBeTruthy();
      expect(siteMetadata.email).toContain("@");
      expect(siteMetadata.location).toBeTruthy();
    });
  });

  describe("navItems", () => {
    it("has at least 4 navigation items", () => {
      expect(navItems.length).toBeGreaterThanOrEqual(4);
    });

    it("all items have label and href", () => {
      navItems.forEach((item) => {
        expect(item.label).toBeTruthy();
        expect(item.href).toMatch(/^#/);
      });
    });

    it("has no duplicate hrefs", () => {
      const hrefs = navItems.map((item) => item.href);
      expect(new Set(hrefs).size).toBe(hrefs.length);
    });
  });

  describe("socialLinks", () => {
    it("has at least 2 social links", () => {
      expect(socialLinks.length).toBeGreaterThanOrEqual(2);
    });

    it("all links have valid URLs", () => {
      socialLinks.forEach((link) => {
        expect(link.href).toMatch(/^https?:\/\//);
        expect(link.name).toBeTruthy();
        expect(link.icon).toBeTruthy();
      });
    });
  });

  describe("stats", () => {
    it("has exactly 3 stat items", () => {
      expect(stats).toHaveLength(3);
    });

    it("all values are positive numbers", () => {
      stats.forEach((stat) => {
        expect(stat.value).toBeGreaterThan(0);
        expect(stat.label).toBeTruthy();
      });
    });
  });

  describe("roles", () => {
    it("has at least 2 roles for typing effect", () => {
      expect(roles.length).toBeGreaterThanOrEqual(2);
    });

    it("includes Software Engineer", () => {
      expect(roles).toContain("Software Engineer");
    });

    it("includes Full Stack Developer", () => {
      expect(roles).toContain("Full Stack Developer");
    });
  });

  describe("skillBlocks", () => {
    it("has all 4 blocks", () => {
      expect(skillBlocks.expertise).toBeDefined();
      expect(skillBlocks.frameworks).toBeDefined();
      expect(skillBlocks.familiar).toBeDefined();
      expect(skillBlocks.tools).toBeDefined();
    });

    it("each block has at least 3 skills", () => {
      Object.values(skillBlocks).forEach((skills) => {
        expect(skills.length).toBeGreaterThanOrEqual(3);
      });
    });

    it("tools include Claude Code and Cursor", () => {
      expect(skillBlocks.tools).toContain("Claude Code");
      expect(skillBlocks.tools).toContain("Cursor");
    });
  });

  describe("services", () => {
    it("has at least 3 services", () => {
      expect(services.length).toBeGreaterThanOrEqual(3);
    });

    it("all services have name, description, icon", () => {
      services.forEach((service) => {
        expect(service.name).toBeTruthy();
        expect(service.description).toBeTruthy();
        expect(service.icon).toBeTruthy();
      });
    });
  });

  describe("education", () => {
    it("has at least 1 education entry", () => {
      expect(education.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("certificates", () => {
    it("has exactly 3 certificates", () => {
      expect(certificates).toHaveLength(3);
    });

    it("all certificates have required fields", () => {
      certificates.forEach((cert) => {
        expect(cert.name).toBeTruthy();
        expect(cert.issuer).toBeTruthy();
        expect(cert.credentialId).toBeTruthy();
        expect(cert.verifyUrl).toMatch(/^https?:\/\//);
        expect(cert.thumbnailUrl).toBeTruthy();
        expect(["hackerrank", "phitron"]).toContain(cert.issuerLogo);
      });
    });

    it("has unique credential IDs", () => {
      const ids = certificates.map((c) => c.credentialId);
      expect(new Set(ids).size).toBe(ids.length);
    });
  });

  describe("categoryLabels", () => {
    it("covers all project categories plus 'all'", () => {
      expect(categoryLabels.webapp).toBeTruthy();
      expect(categoryLabels.api).toBeTruthy();
      expect(categoryLabels.ai).toBeTruthy();
      expect(categoryLabels.tools).toBeTruthy();
      expect(categoryLabels.experiments).toBeTruthy();
    });
  });

  describe("platformStats", () => {
    it("has exactly 3 platform entries", () => {
      expect(platformStats).toHaveLength(3);
    });

    it("covers all three platforms", () => {
      const platforms = platformStats.map((p) => p.platform);
      expect(platforms).toContain("hackerrank");
      expect(platforms).toContain("leetcode");
      expect(platforms).toContain("codeforces");
    });

    it("all entries have required fields", () => {
      platformStats.forEach((p) => {
        expect(p.username).toBeTruthy();
        expect(p.profileUrl).toMatch(/^https?:\/\//);
        expect(p.problemsSolved).toBeGreaterThan(0);
      });
    });

    it("leetcode has a problem breakdown", () => {
      const leetcode = platformStats.find((p) => p.platform === "leetcode");
      expect(leetcode?.breakdown).toBeDefined();
      expect(leetcode!.breakdown!.easy + leetcode!.breakdown!.medium + leetcode!.breakdown!.hard).toBe(leetcode!.breakdown!.total);
    });

    it("hackerrank has badges", () => {
      const hackerrank = platformStats.find((p) => p.platform === "hackerrank");
      expect(hackerrank?.badges).toBeDefined();
      expect(hackerrank!.badges!.length).toBeGreaterThan(0);
      hackerrank!.badges!.forEach((badge) => {
        expect(badge.name).toBeTruthy();
        expect(badge.stars).toBeGreaterThanOrEqual(1);
        expect(badge.stars).toBeLessThanOrEqual(5);
      });
    });

    it("codeforces has rating and rank", () => {
      const codeforces = platformStats.find((p) => p.platform === "codeforces");
      expect(codeforces?.rating).toBeDefined();
      expect(codeforces?.rankTitle).toBeTruthy();
    });

    it("has unique platforms", () => {
      const platforms = platformStats.map((p) => p.platform);
      expect(new Set(platforms).size).toBe(platforms.length);
    });
  });
});
