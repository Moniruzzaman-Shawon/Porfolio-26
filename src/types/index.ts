export type Category = "webapp" | "api" | "ai" | "tools" | "experiments";

export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: Category;
  techTags: string[];
  thumbnailUrl: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  date: string;
  degree: string;
  school: string;
  description: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface CertificateItem {
  name: string;
  issuer: string;
  credentialId: string;
  verifyUrl: string;
  thumbnailUrl: string;
  issuerLogo: "hackerrank" | "phitron";
}

export type PlatformId = "hackerrank" | "leetcode" | "codeforces";

export interface PlatformBadge {
  name: string;
  stars: 1 | 2 | 3 | 4 | 5;
  level: string;
}

export interface ProblemBreakdown {
  easy: number;
  medium: number;
  hard: number;
  total: number;
}

export interface PlatformStats {
  platform: PlatformId;
  username: string;
  profileUrl: string;
  rating?: number;
  rankTitle?: string;
  globalRanking?: number;
  problemsSolved: number;
  breakdown?: ProblemBreakdown;
  contestRating?: number;
  badges?: PlatformBadge[];
}
