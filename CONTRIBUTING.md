# Contributing to Verixa Job Portal

## Getting Started

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000).

## Branch Naming

| Type | Pattern | Example |
|---|---|---|
| Feature | `feat/<short-description>` | `feat/job-filters` |
| Fix | `fix/<short-description>` | `fix/mobile-nav` |
| Docs | `docs/<short-description>` | `docs/api-spec` |
| Chore | `chore/<short-description>` | `chore/upgrade-deps` |

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add job search filter by location
fix: correct navbar active state on mobile
docs: add API_SPEC for job listings endpoint
```

## Pull Requests

- Keep PRs scoped to a single concern.
- Reference any related issue in the PR description.
- All PRs must pass lint before merge (`npm run lint`).

## Code Style

- TypeScript strict mode is enforced.
- Use Tailwind utility classes; avoid inline `style=` except for dynamic values.
- Do not create new `components/ui/` primitives by hand — install from shadcn/ui.
- No `console.log` left in merged code.

## Do Not

- Run `npm run build` or `npm run lint` automatically — the project owner runs these.
- Commit `.env` files or secrets.
- Install new npm packages without discussion.
