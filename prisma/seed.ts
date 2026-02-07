import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const projects = [
  // ========= Web Applications =========
  {
    name: "HemoGrid",
    slug: "hemogrid",
    description: "A web platform focused on real-world workflows with a clean user interface and scalable design.",
    category: "webapp",
    techTags: JSON.stringify(["React", "Node.js", "MongoDB", "Tailwind"]),
    thumbnailUrl: "/images/projects/hemogrid.png",
    liveUrl: null,
    githubUrl: "https://github.com/Moniruzzaman-Shawon/hemogrid-client",
    featured: true,
    order: 0,
  },
  {
    name: "PhiMart",
    slug: "phimart",
    description: "An e-commerce interface that supports product browsing, user interaction, and smooth shopping experience.",
    category: "webapp",
    techTags: JSON.stringify(["React", "Django", "DRF", "PostgreSQL"]),
    thumbnailUrl: "/images/projects/placeholder-webapp.svg",
    liveUrl: null,
    githubUrl: "https://github.com/Moniruzzaman-Shawon/Phimart-Client",
    featured: false,
    order: 1,
  },
  {
    name: "Elite Car Doctor",
    slug: "elite-car-doctor",
    description: "A car service booking experience built for users to explore services and interact through a modern UI.",
    category: "webapp",
    techTags: JSON.stringify(["React", "Node.js", "Express", "MongoDB"]),
    thumbnailUrl: "/images/projects/elite-car-doctor.png",
    liveUrl: null,
    githubUrl: "https://github.com/Moniruzzaman-Shawon/elite-car-doc",
    featured: false,
    order: 2,
  },
  {
    name: "Post Dart",
    slug: "post-dart",
    description: "A social posting platform for creating and managing posts with a modern user experience. (Private project)",
    category: "webapp",
    techTags: JSON.stringify(["React", "Django", "Firebase"]),
    thumbnailUrl: "/images/projects/placeholder-webapp.svg",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    order: 3,
  },

  // ========= System & API =========
  {
    name: "HemoGrid API",
    slug: "hemogrid-api",
    description: "Backend API system that manages data securely and supports application workflows.",
    category: "api",
    techTags: JSON.stringify(["Node.js", "Express", "MongoDB"]),
    thumbnailUrl: "/images/projects/placeholder-node-api.svg",
    liveUrl: null,
    githubUrl: "https://github.com/Moniruzzaman-Shawon/hemogrid",
    featured: false,
    order: 4,
  },
  {
    name: "Elite Car Doctor API",
    slug: "elite-car-doctor-api",
    description: "Server-side service that supports booking, user management, and system operations.",
    category: "api",
    techTags: JSON.stringify(["Node.js", "Express", "MongoDB"]),
    thumbnailUrl: "/images/projects/placeholder-node-api.svg",
    liveUrl: null,
    githubUrl: "https://github.com/Moniruzzaman-Shawon/elite-car-server",
    featured: false,
    order: 5,
  },
  {
    name: "Post Dart API",
    slug: "post-dart-api",
    description: "API and server operations for a posting platform (authentication, database handling). (Private project)",
    category: "api",
    techTags: JSON.stringify(["Django", "DRF", "PostgreSQL"]),
    thumbnailUrl: "/images/projects/placeholder-django-api.svg",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    order: 6,
  },

  // ========= AI & Data Science =========
  {
    name: "Fake News Detection",
    slug: "fake-news-detection",
    description: "A machine learning project that classifies news as real or fake using NLP and supervised learning.",
    category: "ai",
    techTags: JSON.stringify(["Python", "Scikit-learn", "NLP"]),
    thumbnailUrl: "/images/projects/fake-news-detection.svg",
    liveUrl: null,
    githubUrl: "https://github.com/Moniruzzaman-Shawon/fake-news-detection-python",
    featured: false,
    order: 7,
  },
  {
    name: "Diabetes Prediction",
    slug: "diabetes-prediction",
    description: "A data-driven prediction system that estimates diabetes risk using machine learning models.",
    category: "ai",
    techTags: JSON.stringify(["Python", "Scikit-learn", "Pandas"]),
    thumbnailUrl: "/images/projects/diabetes-prediction.svg",
    liveUrl: null,
    githubUrl: "https://github.com/Moniruzzaman-Shawon/diabetes-prediction-using-ml",
    featured: false,
    order: 8,
  },
  {
    name: "Video Games Hit Prediction",
    slug: "video-games-hit-prediction",
    description: "An interactive ML app that predicts whether a video game will be a commercial hit based on key features and patterns.",
    category: "ai",
    techTags: JSON.stringify(["Python", "Gradio", "Scikit-learn"]),
    thumbnailUrl: "/images/projects/video-games-prediction.svg",
    liveUrl: "https://huggingface.co/spaces/shawon17/Video-Games-Hit-Prediction",
    githubUrl: null,
    featured: false,
    order: 9,
  },
  {
    name: "Student HSC GPA Predictor",
    slug: "student-hsc-gpa-predictor",
    description: "A practical prediction tool that estimates a student's HSC GPA using input attributes with end-to-end model deployment.",
    category: "ai",
    techTags: JSON.stringify(["Python", "Gradio", "Scikit-learn"]),
    thumbnailUrl: "/images/projects/student-gpa-predictor.svg",
    liveUrl: "https://huggingface.co/spaces/shawon17/Student-HSC-GPA-Predictor",
    githubUrl: null,
    featured: false,
    order: 10,
  },

  // ========= Utilities & Tools =========
  {
    name: "QR Code Generator",
    slug: "qr-code-generator",
    description: "A simple utility that generates QR codes for links and text. (Private project)",
    category: "tools",
    techTags: JSON.stringify(["TypeScript", "React", "Vite"]),
    thumbnailUrl: "/images/projects/placeholder-tools.svg",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    order: 11,
  },
  {
    name: "Workflow Automation Tool",
    slug: "workflow-automation-tool",
    description: "A productivity helper tool designed to automate repeated workflow tasks. (Private project)",
    category: "tools",
    techTags: JSON.stringify(["Python", "Automation"]),
    thumbnailUrl: "/images/projects/placeholder-tools.svg",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    order: 12,
  },
  {
    name: "Workflow Automation Dashboard",
    slug: "workflow-automation-dashboard",
    description: "A control dashboard UI for the workflow automation tool. (Private project)",
    category: "tools",
    techTags: JSON.stringify(["React", "Tailwind", "Dashboard"]),
    thumbnailUrl: "/images/projects/placeholder-tools.svg",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    order: 13,
  },

  // ========= Game & Experiments =========
  {
    name: "Tower Defense",
    slug: "tower-defense",
    description: "An experimental game project exploring gameplay logic, mechanics, and interactive systems.",
    category: "experiments",
    techTags: JSON.stringify(["Game Dev", "JavaScript"]),
    thumbnailUrl: "/images/projects/tower-defense.png",
    liveUrl: null,
    githubUrl: "https://github.com/Moniruzzaman-Shawon/Tower-Defense",
    featured: false,
    order: 14,
  },
];

async function main() {
  console.log("Seeding database...");

  // Clear existing projects
  await prisma.project.deleteMany();

  for (const project of projects) {
    await prisma.project.create({ data: project });
  }

  console.log(`Seeded ${projects.length} projects.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
