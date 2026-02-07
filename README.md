# Portfolio — Moniruzzaman Shawon

A modern, dark-themed developer portfolio built with **Next.js 15**, **Tailwind CSS v4**, **Prisma**, and **Framer Motion**. Features an admin panel for project CRUD, responsive design across all breakpoints, custom crosshair cursor, and 74 unit tests.

> This entire project was built using **[Claude Code](https://claude.ai/claude-code)** — Anthropic's CLI-based AI coding assistant.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components, ISR)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Database**: SQLite via Prisma ORM
- **Animation**: Framer Motion (scroll reveals, layout transitions)
- **Auth**: JWT (jose) with Edge-compatible middleware
- **Validation**: Zod schemas
- **Icons**: Lucide React
- **Testing**: Vitest + Testing Library (74 tests)
- **Fonts**: Syne, DM Sans, JetBrains Mono

## Features

- **Hero** — Animated typing effect, profile photo, stat counters, social links
- **About** — Full-height profile image, bio, highlight cards
- **Skills** — 4 skill blocks (Expertise, Frameworks, Familiar, Tools) + education card
- **Services** — Service cards with icons and descriptions
- **Portfolio** — Filterable project grid with 15 projects, category tabs, real screenshots and custom SVG thumbnails
- **Certificates** — 3 certificates with click-to-enlarge lightbox popup
- **Contact** — Form with Zod validation
- **Admin Panel** — Protected CRUD dashboard at `/admin` (JWT auth)
- **Custom Cursor** — Gun-sight crosshair with trailing scope effect (desktop only)
- **Responsive** — Mobile (<=640px), Tablet (641-1024px), Laptop (1025-1440px), Large Screens (>1440px)

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your ADMIN_PASSWORD and JWT_SECRET

# Initialize database
npm run db:setup

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm test` | Run all unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run db:setup` | Generate Prisma client, push schema, seed data |
| `npm run db:seed` | Re-seed the database |

## Project Structure

```
src/
  app/              # Next.js App Router pages & API routes
    admin/          # Admin panel (login, dashboard, CRUD)
    api/            # REST API (projects, auth, contact)
  components/
    layout/         # Navbar, Footer, BackToTop, CustomCursor
    sections/       # Hero, About, Skills, Services, Portfolio, Certificates, Contact
    ui/             # Logo, SectionHeader, ProjectCard, ServiceCard
    motion/         # ScrollReveal animation wrapper
    admin/          # Admin sidebar, forms
  lib/              # Constants, utils, auth, validations, Prisma client
  hooks/            # useScrollPosition, useMediaQuery
  __tests__/        # Unit tests (Vitest)
prisma/
  schema.prisma     # Database schema
  seed.ts           # Seed 15 projects
public/
  images/           # Profile photos, project thumbnails, certificate images
```

## Admin Panel

Navigate to `/admin` and log in with the password set in your `.env` file. From the dashboard you can create, edit, and delete projects.

## Built With Claude Code

This project was entirely designed, coded, and tested using **Claude Code** — from initial scaffolding to responsive polish, custom SVG thumbnails, unit tests, and deployment prep. No manual code was written.

## License

MIT License - see [LICENSE](LICENSE) file.
