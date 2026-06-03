# Database

## Recommended Stack

- **Database**: PostgreSQL (hosted on Supabase or Neon)
- **ORM**: Prisma
- **Connection**: Single client singleton in `lib/db.ts`

## Proposed Schema (MVP)

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      Role     @default(CANDIDATE)
  createdAt DateTime @default(now())

  candidateProfile CandidateProfile?
  employerProfile  EmployerProfile?
  applications     Application[]
}

enum Role {
  CANDIDATE
  EMPLOYER
  ADMIN
}

model CandidateProfile {
  id        String  @id @default(cuid())
  userId    String  @unique
  user      User    @relation(fields: [userId], references: [id])
  cvUrl     String?
  headline  String?
  location  String?
}

model EmployerProfile {
  id          String @id @default(cuid())
  userId      String @unique
  user        User   @relation(fields: [userId], references: [id])
  companyName String
  website     String?
  jobs        Job[]
}

model Job {
  id           String          @id @default(cuid())
  title        String
  salary       String?
  location     String?
  type         JobType
  description  String
  tags         String[]
  employerId   String
  employer     EmployerProfile @relation(fields: [employerId], references: [id])
  applications Application[]
  createdAt    DateTime        @default(now())
  closedAt     DateTime?
}

enum JobType {
  REMOTE
  HYBRID
  ON_SITE
}

model Application {
  id        String            @id @default(cuid())
  jobId     String
  job       Job               @relation(fields: [jobId], references: [id])
  userId    String
  user      User              @relation(fields: [userId], references: [id])
  status    ApplicationStatus @default(PENDING)
  coverNote String?
  createdAt DateTime          @default(now())

  @@unique([jobId, userId])
}

enum ApplicationStatus {
  PENDING
  REVIEWING
  SHORTLISTED
  REJECTED
  HIRED
}
```

## Migrations

Run migrations with:
```bash
npx prisma migrate dev --name <migration-name>
```

Never edit migration files manually. Revert by creating a new corrective migration.

## Seeding

```bash
npx prisma db seed
```

Seed file lives at `prisma/seed.ts`.
