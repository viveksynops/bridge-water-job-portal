# Architecture

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| UI primitives | shadcn/ui (Radix UI) |
| Icons | lucide-react |
| Fonts | Inter (display), Geist Mono (code) |
| Database | TBD (Postgres via Prisma recommended) |
| Auth | TBD (NextAuth.js recommended) |
| Deployment | Vercel |

## Rendering Strategy

- **Static pages** (homepage, marketing): Server Components, no client JS unless interactive.
- **Dynamic pages** (search results, dashboards): Server Components with streaming where possible.
- **Interactive UI** (filters, forms, modals): `"use client"` components isolated to the leaf level.

## Directory Layout

```
app/                     # Next.js App Router routes
  (marketing)/           # Route group — public marketing pages
  (auth)/                # Route group — login, register
  (candidate)/           # Route group — candidate dashboard
  (employer)/            # Route group — employer dashboard
  api/                   # Route handlers (REST or tRPC)

components/
  ui/                    # shadcn/ui primitives (never edited by hand)
  logo-mark.tsx          # Brand mark
  progress-bar.tsx       # Shared utility component
  site-header.tsx
  hero-section.tsx
  featured-section.tsx
  process-section.tsx
  popular-jobs-section.tsx
  success-rate-section.tsx
  companies-section.tsx
  testimonials-section.tsx
  contact-section.tsx
  footer-section.tsx
  job-success-card.tsx
  career-panel.tsx
  success-rate-card.tsx
  profile-mockup.tsx
  upload-mockup.tsx

lib/
  utils.ts               # cn() helper
  db.ts                  # Prisma client singleton (future)
  auth.ts                # NextAuth config (future)

public/
  images/                # Static images
```

## Data Flow (future)

```
Browser → Next.js Server Component → Database (Prisma)
                                   ↘ External API (e.g. job board feed)
```

Form submissions use Server Actions. No client-side fetch for mutations.

## Environment Variables

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Postgres connection string |
| `NEXTAUTH_SECRET` | Session signing key |
| `NEXTAUTH_URL` | Canonical app URL |
