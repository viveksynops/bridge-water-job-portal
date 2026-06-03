<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Context

This repository is a job portal application built with Next.js App Router, React, TypeScript, Tailwind CSS, and shadcn/ui.

Use the existing project conventions:

- App routes live in `app/`.
- Shared UI primitives live in `components/ui/`.
- Shared utilities live in `lib/`.
- Static assets live in `public/`.
- Import local modules through the configured `@/*` path alias.

# shadcn/ui

This project uses shadcn/ui. Before creating a generic UI primitive by hand, check whether a shadcn component should be installed or reused.

Use existing shadcn components from `components/ui` first. If a needed primitive is missing, ask before installing it when network access or registry access is required.

Create custom components only for application-specific composition, such as job cards, candidate sections, dashboard shells, or page-specific marketing sections.

# Validation Commands

Do not run these commands automatically:

- `npm run lint`
- `npm run build`

The project owner will run them. If you believe one of these commands is needed, ask first and wait for approval before running it.

# Implementation Notes

- Keep the current app theme unless the user explicitly asks to change it.
- Match requested screenshots closely for spacing, typography, hierarchy, and layout.
- Keep changes scoped to the requested task.
- Do not revert user changes unless explicitly asked.
