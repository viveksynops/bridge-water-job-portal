# Security

## Authentication & Sessions

- Sessions are managed by NextAuth.js with `NEXTAUTH_SECRET` — never hardcode this value.
- Passwords are hashed with bcrypt (min cost factor: 12) before storage — plain-text passwords are never stored.
- Session tokens are `HttpOnly`, `Secure`, `SameSite=Lax` cookies.
- Implement account lockout after 10 failed login attempts within 15 minutes.

## Authorization

- Role checks are enforced server-side in every route handler and Server Action.
- Never trust client-supplied `userId` or `role` — derive identity from the server session.
- Candidates cannot read other candidates' applications; employers cannot read other employers' data.

## Input Validation

- Validate all user input with [Zod](https://zod.dev) at the API boundary.
- Reject requests that fail schema validation with `400 Bad Request` before touching the database.
- Sanitize all rich-text / markdown fields before rendering to prevent XSS.

## File Uploads

- CV uploads are stored in a private cloud bucket (e.g. Vercel Blob or S3) — never served from `public/`.
- Validate MIME type and file extension server-side (accept only PDF, DOC, DOCX).
- Enforce a file size limit (max 5 MB).
- Generate a random key for each uploaded file; do not expose original filenames in URLs.

## SQL / ORM

- All database access goes through Prisma — parameterised queries only.
- Never interpolate user input into raw SQL strings.

## HTTP Headers

Add the following security headers in `next.config.ts`:

```ts
headers: async () => [
  {
    source: "/(.*)",
    headers: [
      { key: "X-Frame-Options", value: "DENY" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      {
        key: "Content-Security-Policy",
        value: "default-src 'self'; img-src 'self' data: https:; script-src 'self'",
      },
    ],
  },
],
```

## Secrets Management

- Store all secrets in environment variables — never commit them to the repository.
- Rotate `NEXTAUTH_SECRET` if it is ever exposed.
- Use Vercel's encrypted environment variable store for production.

## Dependency Management

- Run `npm audit` regularly and resolve high/critical advisories promptly.
- Pin major versions; review changelogs before upgrading Next.js or React.

## Reporting Vulnerabilities

Report security issues privately to the project owner — do not open a public GitHub issue.
