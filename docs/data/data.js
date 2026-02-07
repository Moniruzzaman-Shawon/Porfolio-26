// ================= PROFILE =================
export const PROFILE = {
  name: "Moniruzzaman Shawon",
  role: "Software Engineer || Web Developer || Programmer",
  tagline: "I design and build modern, high-performing websites and web applications.",
  bio: "A Software Engineer building fast, scalable web applications. I specialize in frontend engineering, backend APIs, and database-driven systems.",
  location: "Dhaka, Bangladesh",

  // use BASE_URL for GitHub Pages / subpath hosting
  logo: `${import.meta.env.BASE_URL}icons/logodev.png`,
  photo: `${import.meta.env.BASE_URL}images/shawon.jpg`,

  resume: "YOUR_RESUME_LINK",
  socials: [
    { label: "GitHub", icon: "bi-github", href: "YOUR_GITHUB" },
    { label: "LinkedIn", icon: "bi-linkedin", href: "YOUR_LINKEDIN" },
    { label: "YouTube", icon: "bi-youtube", href: "YOUR_YOUTUBE" },
    { label: "Hugging Face", icon: "bi-robot", href: "https://huggingface.co/shawon17" },
  ],
};

// ================= PROJECT CATEGORIES (NO "ALL") =================
export const PROJECT_CATEGORIES = [
  "Web Applications",
  "System & API",
  "AI & Data Science",
  "Utilities & Tools",
  "Game & Experiments",
];

// ================= PROJECTS =================
export const PROJECTS = [
  // ========= Web Applications =========
  {
    title: "HemoGrid",
    category: "Web Applications",
    desc: "A web platform focused on real-world workflows with a clean user interface and scalable design.",
    link: "https://github.com/Moniruzzaman-Shawon/hemogrid-client",
  },
  {
    title: "PhiMart",
    category: "Web Applications",
    desc: "An e-commerce interface that supports product browsing, user interaction, and smooth shopping experience.",
    link: "https://github.com/Moniruzzaman-Shawon/Phimart-Client",
  },
  {
    title: "Elite Car Doctor",
    category: "Web Applications",
    desc: "A car service booking experience built for users to explore services and interact through a modern UI.",
    link: "https://github.com/Moniruzzaman-Shawon/elite-car-doc",
  },
  {
    title: "Post Dart",
    category: "Web Applications",
    desc: "A social posting platform for creating and managing posts with a modern user experience. (Private project)",
    link: null, // ✅ PRIVATE
  },

  // ========= System & API =========
  {
    title: "HemoGrid API",
    category: "System & API",
    desc: "Backend API system that manages data securely and supports application workflows.",
    link: "https://github.com/Moniruzzaman-Shawon/hemogrid",
  },
  {
    title: "Elite Car Doctor API",
    category: "System & API",
    desc: "Server-side service that supports booking, user management, and system operations.",
    link: "https://github.com/Moniruzzaman-Shawon/elite-car-server",
  },
  {
    title: "Post Dart API",
    category: "System & API",
    desc: "API and server operations for a posting platform (authentication, database handling). (Private project)",
    link: null, // ✅ PRIVATE
  },

  // ========= AI & Data Science =========
  {
    title: "Fake News Detection",
    category: "AI & Data Science",
    desc: "A machine learning project that classifies news as real or fake using NLP and supervised learning.",
    link: "https://github.com/Moniruzzaman-Shawon/fake-news-detection-python",
  },
  {
    title: "Diabetes Prediction",
    category: "AI & Data Science",
    desc: "A data-driven prediction system that estimates diabetes risk using machine learning models.",
    link: "https://github.com/Moniruzzaman-Shawon/diabetes-prediction-using-ml",
  },
  {
    title: "Video Games Hit Prediction (Hugging Face Space)",
    category: "AI & Data Science",
    desc: "An interactive ML app that predicts whether a video game will be a commercial hit based on key features and patterns learned from historical data.",
    link: "https://huggingface.co/spaces/shawon17/Video-Games-Hit-Prediction",
  },
  {
    title: "Student HSC GPA Predictor (Hugging Face Space)",
    category: "AI & Data Science",
    desc: "A practical prediction tool that estimates a student's HSC GPA using input attributes, demonstrating end-to-end model deployment with a clean UI.",
    link: "https://huggingface.co/spaces/shawon17/Student-HSC-GPA-Predictor",
  },

  // ========= Utilities & Tools =========
  {
    title: "QR Code Generator",
    category: "Utilities & Tools",
    desc: "A simple utility that generates QR codes for links and text. (Private project)",
    link: null, // ✅ PRIVATE
  },
  {
    title: "Workflow Automation Tool",
    category: "Utilities & Tools",
    desc: "A productivity helper tool designed to automate repeated workflow tasks. (Private project)",
    link: null, // ✅ PRIVATE (Prolific Hook)
  },
  {
    title: "Workflow Automation Dashboard",
    category: "Utilities & Tools",
    desc: "A control dashboard UI for the workflow automation tool. (Private project)",
    link: null, // ✅ PRIVATE (Prolific Hook UI)
  },

  // ========= Game & Experiments =========
  {
    title: "Tower Defense",
    category: "Game & Experiments",
    desc: "An experimental game project exploring gameplay logic, mechanics, and interactive systems.",
    link: "https://github.com/Moniruzzaman-Shawon/Tower-Defense",
  },
];

// ================= SKILLS =================
export const SKILL_BLOCKS = {
  expertise: [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "JavaScript",
    "React",
    "Node",
    "Express",
    "MongoDB",
  ],
  frameworks: ["Next.js", "Django", "Spring Boot", "React Router", "Firebase"],
  familiar: ["TypeScript", "Python", "C++", "Java"],
  tools: [
    "Git",
    "Figma",
    "Netlify",
    "Scikit-learn",
    "Jupyter Notebook",
    "Anaconda",
  ],
};

// ================= EDUCATION =================
export const EDUCATION = {
  degree: "B.Sc. in Computer Science & Engineering",
  school: "North South University, Dhaka",
  grad: "Graduated: 2024",
  courses: [
    "Data Structures",
    "Machine Learning",
    "Artificial Intelligence",
    "Software Engineering",
  ],
};

// ================= SERVICES =================
export const SERVICES = [
  {
    title: "Software Engineering",
    desc:
      "I build reliable, scalable software with clean architecture, strong problem-solving, and maintainable code—focused on performance, security, and real-world requirements.",
  },
  {
    title: "Web Application Development",
    desc:
      "Modern web apps using React/Next.js with backend APIs, authentication, dashboards, and integrations—built to be fast and user-friendly.",
  },
  {
    title: "Backend & API Development",
    desc:
      "Secure REST APIs with Node/Express or Django—database design, authentication, validation, and deployment-ready structure.",
  },
  {
    title: "Deployment & Optimization",
    desc:
      "Hosting, CI-friendly setup, performance optimization, and production best practices for smooth delivery and updates.",
  },
];
