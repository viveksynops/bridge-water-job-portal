# SEO Strategy

## Foundations

- All pages use Next.js `generateMetadata` or the static `metadata` export.
- Canonical URLs are set via `alternates.canonical` in metadata.
- `robots.txt` and `sitemap.xml` are generated at build time.

## Metadata Patterns

### Static page (e.g. homepage)

```ts
export const metadata: Metadata = {
  title: "Verixa | Global Job Finder Plus Portal",
  description:
    "Connect top talent with leading opportunities through Verixa's job portal.",
  openGraph: {
    title: "Verixa | Global Job Finder Plus Portal",
    description: "Connect top talent with leading opportunities.",
    url: "https://verixa.com",
    siteName: "Verixa",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verixa | Global Job Finder Plus Portal",
    description: "Connect top talent with leading opportunities.",
    images: ["/og-image.png"],
  },
};
```

### Dynamic page (e.g. job detail)

```ts
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const job = await getJob(params.id);
  return {
    title: `${job.title} at ${job.employer.companyName} | Verixa`,
    description: job.description.slice(0, 160),
    alternates: { canonical: `https://verixa.com/jobs/${params.id}` },
  };
}
```

## Sitemap

Add `app/sitemap.ts` returning all job listing URLs dynamically:

```ts
import { MetadataRoute } from "next";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const jobs = await getAllOpenJobs();
  return [
    { url: "https://verixa.com", changeFrequency: "weekly", priority: 1 },
    { url: "https://verixa.com/jobs", changeFrequency: "daily", priority: 0.9 },
    ...jobs.map((j) => ({
      url: `https://verixa.com/jobs/${j.id}`,
      lastModified: j.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
```

## Structured Data

Add `application/ld+json` JobPosting schema to job detail pages to enable Google rich results.

```json
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Frontend Developer (React)",
  "description": "...",
  "datePosted": "2026-06-01",
  "employmentType": "FULL_TIME",
  "hiringOrganization": { "@type": "Organization", "name": "Acme Corp" },
  "jobLocation": { "@type": "Place", "address": "Remote" },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": { "@type": "QuantitativeValue", "value": 3500, "unitText": "MONTH" }
  }
}
```

## Performance (Core Web Vitals)

- Use `next/image` with `priority` on above-the-fold images.
- Provide accurate `sizes` attributes to avoid oversized image downloads.
- Keep Largest Contentful Paint (LCP) < 2.5 s.
- Use Server Components by default — avoid client bundles on marketing pages.

## Content Guidelines

- Job titles are the primary keyword — use exact match in `<h1>` and `<title>`.
- Location and job type should appear in the meta description.
- Avoid duplicate content across listing pages — use canonical tags.
