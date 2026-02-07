import type { NavItem, SocialLink, StatItem, ServiceItem, EducationItem, CertificateItem } from "@/types";

export const siteMetadata = {
  title: "Moniruzzaman Shawon \u2014 Software Engineer",
  description:
    "I design and build modern, high-performing websites and web applications. A Software Engineer building fast, scalable web applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: "Moniruzzaman Shawon",
  email: "m.zaman.djp@gmail.com",
  location: "Dhaka, Bangladesh",
  tagline: "I design and build modern, high-performing websites and web applications.",
  bio: "A Software Engineer building fast, scalable web applications. I specialize in frontend engineering, backend APIs, and database-driven systems.",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/Moniruzzaman-Shawon", icon: "Github" },
  { name: "LinkedIn", href: "https://linkedin.com/in/moniruzzaman-shawon", icon: "Linkedin" },
  { name: "YouTube", href: "https://youtube.com/", icon: "Youtube" },
  { name: "Hugging Face", href: "https://huggingface.co/shawon17", icon: "Bot" },
];

export const stats: StatItem[] = [
  { value: 15, suffix: "+", label: "Projects Built" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "", label: "Categories" },
];

export const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "AI Learner",
];

export const skillBlocks = {
  expertise: ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript", "React", "Node", "Express", "MongoDB"],
  frameworks: ["Next.js", "Django", "Spring Boot", "React Router", "Firebase"],
  familiar: ["TypeScript", "Python", "C++", "Java"],
  tools: ["Git", "Figma", "Netlify", "Scikit-learn", "Jupyter Notebook", "Anaconda", "Claude Code", "Cursor"],
};

export const services: ServiceItem[] = [
  {
    name: "Software Engineering",
    description: "I build reliable, scalable software with clean architecture, strong problem-solving, and maintainable code\u2014focused on performance, security, and real-world requirements.",
    icon: "Code2",
  },
  {
    name: "Web Application Development",
    description: "Modern web apps using React/Next.js with backend APIs, authentication, dashboards, and integrations\u2014built to be fast and user-friendly.",
    icon: "Monitor",
  },
  {
    name: "Backend & API Development",
    description: "Secure REST APIs with Node/Express or Django\u2014database design, authentication, validation, and deployment-ready structure.",
    icon: "Webhook",
  },
  {
    name: "Deployment & Optimization",
    description: "Hosting, CI-friendly setup, performance optimization, and production best practices for smooth delivery and updates.",
    icon: "CloudUpload",
  },
];

export const education: EducationItem[] = [
  {
    date: "Graduated: 2024",
    degree: "B.Sc. in Computer Science & Engineering",
    school: "North South University, Dhaka",
    description: "Data Structures, Machine Learning, Artificial Intelligence, Software Engineering.",
  },
];

export const categoryLabels: Record<string, string> = {
  all: "All",
  webapp: "Web Applications",
  api: "System & API",
  ai: "AI & Data Science",
  tools: "Utilities & Tools",
  experiments: "Game & Experiments",
};

export const certificates: CertificateItem[] = [
  {
    name: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    credentialId: "e68afd243e75",
    verifyUrl: "https://www.hackerrank.com/certificates/e68afd243e75",
    thumbnailUrl: "/images/certs/hackerrank-js-intermediate.svg",
    issuerLogo: "hackerrank",
  },
  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    credentialId: "5421ee691a06",
    verifyUrl: "https://www.hackerrank.com/certificates/5421ee691a06",
    thumbnailUrl: "/images/certs/hackerrank-problem-solving.svg",
    issuerLogo: "hackerrank",
  },
  {
    name: "CS Fundamentals with Phitron",
    issuer: "Phitron",
    credentialId: "PHBATCH66222931004",
    verifyUrl: "https://phitron.io/verification?validationNumber=PHBATCH66222931004",
    thumbnailUrl: "/images/certs/phitron-cs-fundamentals.png",
    issuerLogo: "phitron",
  },
];
