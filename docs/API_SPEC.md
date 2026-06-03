# API Specification

All API routes live under `app/api/`. They use Next.js Route Handlers and return JSON.

## Authentication

Protected routes require a valid session cookie set by NextAuth.js. Include credentials on all requests from the browser (`credentials: "include"`).

---

## Jobs

### `GET /api/jobs`
Returns a paginated list of open job listings.

**Query params**

| Param | Type | Description |
|---|---|---|
| `q` | string | Keyword search (title, description) |
| `location` | string | Filter by location |
| `type` | `REMOTE \| HYBRID \| ON_SITE` | Filter by job type |
| `page` | number | Page number (default: 1) |
| `limit` | number | Results per page (default: 20, max: 50) |

**Response `200`**
```json
{
  "data": [
    {
      "id": "clx123",
      "title": "Frontend Developer (React)",
      "salary": "$3500",
      "location": "Remote",
      "type": "REMOTE",
      "tags": ["3 - 4 Years", "Creative"],
      "employer": { "companyName": "Acme Corp" },
      "createdAt": "2026-06-01T10:00:00Z"
    }
  ],
  "total": 84,
  "page": 1,
  "limit": 20
}
```

---

### `GET /api/jobs/:id`
Returns a single job listing.

**Response `200`** — full Job object including description.
**Response `404`** — `{ "error": "Not found" }`

---

### `POST /api/jobs` _(employer only)_
Creates a new job listing.

**Body**
```json
{
  "title": "Senior Designer",
  "salary": "$7000",
  "location": "New York",
  "type": "HYBRID",
  "description": "Full markdown description...",
  "tags": ["5+ Years", "Lead"]
}
```

**Response `201`** — created Job object.

---

### `DELETE /api/jobs/:id` _(employer only)_
Closes a job listing (sets `closedAt`).

**Response `200`** — `{ "success": true }`

---

## Applications

### `POST /api/jobs/:id/apply` _(candidate only)_
Submits an application for a job.

**Body (multipart/form-data)**

| Field | Type | Required |
|---|---|---|
| `coverNote` | string | no |
| `cv` | file | yes |

**Response `201`** — created Application object.
**Response `409`** — already applied.

---

### `GET /api/applications` _(candidate only)_
Returns the current candidate's applications.

---

### `GET /api/employer/applications` _(employer only)_
Returns all applications for the employer's jobs.

**Query params**: `jobId`, `status`, `page`, `limit`.

---

### `PATCH /api/applications/:id/status` _(employer only)_
Updates application status.

**Body**
```json
{ "status": "SHORTLISTED" }
```

---

## Auth

Handled by NextAuth.js at `/api/auth/[...nextauth]`. Supports:
- Credentials (email + password, bcrypt hashed)
- Google OAuth (optional, P2)
