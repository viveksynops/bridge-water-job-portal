# Tasks

This file tracks high-level engineering tasks. Move items between sections as they progress.

## Done

- [x] Project scaffold (Next.js 16, Tailwind v4, shadcn/ui)
- [x] Homepage built (header, hero, featured, process, jobs, testimonials, contact, footer)
- [x] Homepage refactored — all sections extracted into individual components
- [x] `docs/` directory created with full project documentation

## In Progress

_(none)_

## Backlog — MVP

### Foundation
- [ ] Set up Prisma + PostgreSQL connection (`lib/db.ts`)
- [ ] Configure NextAuth.js (credentials provider)
- [ ] Add `User`, `CandidateProfile`, `EmployerProfile` models and migrations

### Jobs
- [ ] Job listing page (`app/jobs/page.tsx`) with search + filters
- [ ] Job detail page (`app/jobs/[id]/page.tsx`)
- [ ] Employer job post form (`app/employer/jobs/new/page.tsx`)
- [ ] `GET /api/jobs` route handler
- [ ] `POST /api/jobs` route handler

### Applications
- [ ] Application submission form with CV upload
- [ ] `POST /api/jobs/:id/apply` route handler
- [ ] Candidate application status dashboard
- [ ] Employer applicant review dashboard

### Auth
- [ ] Register page (candidate + employer flows)
- [ ] Login page
- [ ] Session-aware navigation (show/hide CTA based on auth state)

## Backlog — P2

- [ ] Email job alerts (Resend or SendGrid)
- [ ] Saved jobs / bookmarks
- [ ] Employer subscription / billing (Stripe)
- [ ] SEO: dynamic `generateMetadata` per job listing
- [ ] Sitemap generation (`app/sitemap.ts`)
