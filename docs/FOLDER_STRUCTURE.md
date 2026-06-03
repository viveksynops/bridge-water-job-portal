# Folder Structure

```
job-portal/
├── app/                          # Next.js App Router
│   ├── globals.css               # Tailwind v4 + shadcn theme tokens
│   ├── layout.tsx                # Root layout (fonts, metadata)
│   └── page.tsx                  # Homepage — composes section components
│
├── components/
│   ├── ui/                       # shadcn/ui primitives (do not edit manually)
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   │
│   ├── logo-mark.tsx             # Verixa brand mark SVG
│   ├── progress-bar.tsx          # Reusable progress bar
│   ├── site-header.tsx           # Top nav + CTA button
│   ├── hero-section.tsx          # Above-the-fold hero
│   ├── featured-section.tsx      # Bento grid (images + cards)
│   ├── job-success-card.tsx      # Gradient card with hiring progress bars
│   ├── career-panel.tsx          # Dark "Boost Your Career" panel
│   ├── profile-mockup.tsx        # UI mockup — profile completion
│   ├── upload-mockup.tsx         # UI mockup — document upload
│   ├── process-section.tsx       # 2-col process cards
│   ├── popular-jobs-section.tsx  # Job listing cards
│   ├── success-rate-card.tsx     # Floating success-rate card
│   ├── success-rate-section.tsx  # Image + overlaid success-rate card
│   ├── companies-section.tsx     # Dark section — best companies
│   ├── testimonials-section.tsx  # 3-col portrait testimonials
│   ├── contact-section.tsx       # Gradient wrapper + contact form
│   └── footer-section.tsx        # Footer nav + watermark
│
├── lib/
│   └── utils.ts                  # cn() — clsx + tailwind-merge
│
├── public/
│   └── images/                   # Static image assets
│       ├── candidate-workspace.png
│       ├── hiring-team.png
│       ├── popular-jobs-interview.png
│       ├── job-success-meeting.png
│       ├── best-companies-interview.png
│       ├── testimonial-sarah.png
│       ├── testimonial-steve.png
│       ├── testimonial-lee.png
│       └── footer-workspace.png
│
├── docs/                         # Project documentation
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   ├── FOLDER_STRUCTURE.md
│   ├── COMPONENTS.md
│   ├── DATABASE.md
│   ├── API_SPEC.md
│   ├── TASKS.md
│   ├── DEVELOPMENT_WORKFLOW.md
│   ├── UI_UX_GUIDELINES.md
│   ├── DEPLOYMENT.md
│   ├── SEO_STRATEGY.md
│   └── SECURITY.md
│
├── AGENTS.md
├── CLAUDE.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── README.md
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

## Conventions

- **Route groups** `(name)/` keep layouts isolated without affecting the URL.
- **`components/ui/`** — only shadcn/ui primitives; install via CLI, do not hand-edit.
- **`components/`** — application-specific compositions, one component per file.
- **`lib/`** — pure utility functions and singleton clients (db, auth).
- **`public/images/`** — all static images; use `next/image` with `fill` + `sizes` for responsive loading.
