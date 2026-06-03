# Deployment

## Platform

Verixa is deployed on **Vercel**. The `main` branch deploys to production automatically on push. Pull requests get isolated preview deployments.

## Environment Variables

Set the following in the Vercel project settings under **Settings → Environment Variables**:

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | Postgres connection string |
| `NEXTAUTH_SECRET` | Yes | Random secret for session signing |
| `NEXTAUTH_URL` | Yes | Canonical URL (e.g. `https://verixa.com`) |
| `GOOGLE_CLIENT_ID` | No | Google OAuth (if enabled) |
| `GOOGLE_CLIENT_SECRET` | No | Google OAuth (if enabled) |

Never commit these to the repository.

## Production Deploy Checklist

- [ ] All environment variables set in Vercel dashboard.
- [ ] Database migrations applied (`npx prisma migrate deploy`).
- [ ] `npm run build` passes locally.
- [ ] `npm run lint` passes with no errors.
- [ ] Core pages load and are visually correct on mobile and desktop.
- [ ] Contact form submits without error.
- [ ] Auth flows (register, login, logout) work end-to-end.

## Database Migrations in CI

Run migrations as part of the deploy command in Vercel:

```
npx prisma migrate deploy && next start
```

Set this as the **Start Command** in Vercel project settings.

## Preview Environments

Each PR automatically receives a Vercel preview URL. Use it to test changes before merging. Preview environments share the same `DATABASE_URL` unless a separate preview database is configured.

## Rollback

To roll back a production deploy:
1. Go to Vercel → Deployments.
2. Find the last stable deployment.
3. Click **Promote to Production**.

Database migrations are not automatically rolled back — write a corrective migration if needed.
