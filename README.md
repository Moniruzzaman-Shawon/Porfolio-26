<div align="center">

# `<Shawon/>`

### Modern Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live-porfolio--26.vercel.app-00ff88?style=for-the-badge&logo=vercel&logoColor=white)](https://porfolio-26-seven.vercel.app/)
[![Built with Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-7c3aed?style=for-the-badge&logo=anthropic&logoColor=white)](https://claude.ai/claude-code)
[![Tests](https://img.shields.io/badge/Tests-74%20Passing-00ff88?style=for-the-badge&logo=vitest&logoColor=white)](#testing)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

A dark-themed, high-performance developer portfolio with an admin panel, custom crosshair cursor, and smooth scroll animations — built entirely with AI.

**[View Live](https://porfolio-26-seven.vercel.app/)** &middot; **[Report Bug](https://github.com/Moniruzzaman-Shawon/Porfolio-26/issues)** &middot; **[Request Feature](https://github.com/Moniruzzaman-Shawon/Porfolio-26/issues)**

</div>

---

## Highlights

- **Midnight Terminal** design system — deep void backgrounds, neon green accents, glassmorphism cards
- **Gun-sight crosshair cursor** with trailing scope effect (desktop only)
- **Filterable portfolio** — 15 projects across 5 categories with real screenshots & custom SVG thumbnails
- **Certificate lightbox** — click-to-enlarge popup with spring animation
- **Admin dashboard** — JWT-protected CRUD panel for managing projects
- **Fully responsive** — optimized for Mobile, Tablet, Laptop, and Large Screens
- **74 unit tests** — utils, validations, auth, constants, and component tests

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 15 (App Router, RSC, ISR) |
| **Styling** | Tailwind CSS v4, custom design tokens |
| **Database** | SQLite via Prisma ORM |
| **Animation** | Framer Motion |
| **Auth** | JWT with jose (Edge-compatible) |
| **Validation** | Zod |
| **Testing** | Vitest + Testing Library |
| **Typography** | Syne, DM Sans, JetBrains Mono |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Typing effect cycling roles, profile photo with spinning ring, stat counters, social icons |
| **About** | Full-height profile image, bio paragraphs, highlight cards (Full Stack, Performance, Clean Code, Problem Solver) |
| **Skills** | 4 categorized blocks (Expertise, Frameworks, Familiar, Tools) + education card |
| **Services** | Service offerings with icon cards |
| **Portfolio** | Category-filtered project grid with thumbnails, tech tags, and action links |
| **Certificates** | HackerRank & Phitron certs with click-to-preview lightbox |
| **Contact** | Validated contact form with email, location, and social links |
| **Footer** | 3-column layout with nav links, social icons with hover glow, tech stack badge |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Moniruzzaman-Shawon/Porfolio-26.git
cd Porfolio-26

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env → set ADMIN_PASSWORD and JWT_SECRET

# Initialize database & seed projects
npm run db:setup

# Start dev server
npm run dev
```

Open **http://localhost:3000** and you're live.

---

## Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm test             # Run 74 unit tests
npm run test:watch   # Tests in watch mode
npm run db:setup     # Prisma generate + push + seed
npm run db:seed      # Re-seed database
```

---

## Project Structure

```
src/
  app/
    admin/            # Protected admin panel (login, dashboard, CRUD)
    api/              # REST API routes (projects, auth, contact)
  components/
    layout/           # Navbar, Footer, BackToTop, CustomCursor, GrainOverlay
    sections/         # Hero, About, Skills, Services, Portfolio, Certificates, Contact
    ui/               # Logo, SectionHeader, ProjectCard, ServiceCard, StatCounter
    motion/           # ScrollReveal, FadeIn, StaggerContainer
    admin/            # AdminSidebar, ProjectForm, ProjectTable
  lib/                # Constants, utils, auth, validations, Prisma client
  hooks/              # useScrollPosition, useMediaQuery
  __tests__/          # Unit tests (6 files, 74 tests)
prisma/
  schema.prisma       # Database schema
  seed.ts             # Seeds 15 projects
public/images/        # Profile photos, project thumbnails, certificate images
```

---

## Testing

```bash
npm test
```

```
 ✓ src/__tests__/lib/utils.test.ts         16 tests
 ✓ src/__tests__/lib/validations.test.ts   24 tests
 ✓ src/__tests__/lib/auth.test.ts           6 tests
 ✓ src/__tests__/lib/constants.test.ts     21 tests
 ✓ src/__tests__/components/Logo.test.tsx    4 tests
 ✓ src/__tests__/components/SectionHeader    3 tests

 Test Files  6 passed
 Tests       74 passed
```

---

## Admin Panel

Navigate to `/admin` and enter your password (set in `.env`). From the dashboard you can:

- View all projects with status indicators
- Create new projects with category, tech tags, and URLs
- Edit existing project details
- Delete projects with confirmation

---

## Built With Claude Code

> This entire project — every line of code, every SVG thumbnail, every test — was built using **[Claude Code](https://claude.ai/claude-code)**, Anthropic's AI coding assistant. From initial scaffolding to responsive polish, custom cursor design, certificate lightbox, unit tests, and deployment. Zero manual code.

---

## License

MIT License &mdash; see [LICENSE](LICENSE) for details.

Built by **Moniruzzaman Shawon** with [Claude Code](https://claude.ai/claude-code).
