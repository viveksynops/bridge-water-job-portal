# Development Workflow

## Local Setup

```bash
git clone <repo-url>
cd job-portal
npm install
npm run dev        # starts on http://localhost:3000
```

## Environment

Copy `.env.example` to `.env.local` and fill in values before running the app.

```bash
cp .env.example .env.local
```

Required variables are documented in `docs/ARCHITECTURE.md`.

## Daily Workflow

1. Pull latest from `main`.
2. Create a feature branch (see `CONTRIBUTING.md` for naming).
3. Make changes.
4. Verify visually in the browser — check both desktop and mobile viewports.
5. Open a pull request against `main`.

## Validation Commands

The project owner runs these — do not run them automatically:

```bash
npm run lint      # ESLint
npm run build     # Next.js production build check
```

If you believe a build check is needed, ask first.

## Database (future)

```bash
npx prisma migrate dev --name <name>   # apply and generate new migration
npx prisma studio                      # visual DB browser
npx prisma db seed                     # seed local database
```

## Image Assets

Place all static images in `public/images/`. Reference them with `next/image`:

```tsx
<Image
  src="/images/my-photo.png"
  alt="Descriptive alt text"
  fill
  sizes="(min-width: 1024px) 40vw, 100vw"
  className="object-cover"
/>
```

Always provide a descriptive `alt` and a meaningful `sizes` string.

## Adding a shadcn/ui Component

```bash
npx shadcn add <component-name>
```

This writes to `components/ui/`. Do not hand-edit generated files.

## Debugging

- Next.js dev errors appear in both the terminal and the browser overlay.
- Use React DevTools for component inspection.
- For Server Component errors, check the terminal — they do not surface in the browser overlay.
