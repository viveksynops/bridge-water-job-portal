# Component Reference

## Primitive / Shared

### `LogoMark`
Path: `components/logo-mark.tsx`
Pure SVG mark + wordmark. No props.

### `ProgressBar`
Path: `components/progress-bar.tsx`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | Fill percentage (0–100) |
| `className` | `string` | `""` | Extra classes on the fill bar |

---

## Page Sections

### `SiteHeader`
Path: `components/site-header.tsx`
Top navigation bar with logo, nav links, and "Get Started" CTA.

### `HeroSection`
Path: `components/hero-section.tsx`
Centered hero with badge, headline, subtext, and two CTA buttons.

### `FeaturedSection`
Path: `components/featured-section.tsx`
3-column bento grid: large candidate image, `JobSuccessCard`, team image, and `CareerPanel` spanning 2 columns.

### `JobSuccessCard`
Path: `components/job-success-card.tsx`
Gradient-wrapped card showing Remote Hiring and In House Hiring progress bars.

### `CareerPanel`
Path: `components/career-panel.tsx`
Dark panel with headline, sub-copy, and a nested Review card.

### `ProcessSection`
Path: `components/process-section.tsx`
2-column section: `ProfileMockup` card and `UploadMockup` card.

### `ProfileMockup`
Path: `components/profile-mockup.tsx`
Layered card UI showing a "Complete Profile" checklist mockup.

### `UploadMockup`
Path: `components/upload-mockup.tsx`
Layered card UI showing a drag-and-drop document upload mockup.

### `PopularJobsSection`
Path: `components/popular-jobs-section.tsx`
Section with gradient image frame and 4 job listing cards (title, salary, tags).

### `SuccessRateSection`
Path: `components/success-rate-section.tsx`
Copy + feature list on the left; image with overlaid `SuccessRateCard` on the right.

### `SuccessRateCard`
Path: `components/success-rate-card.tsx`
Floating card with Remote and In-House Hiring progress bars.

### `CompaniesSection`
Path: `components/companies-section.tsx`
Dark background section: image with overlaid Review card, plus copy and feature list.

### `TestimonialsSection`
Path: `components/testimonials-section.tsx`
3-column grid of portrait cards with gradient overlay and quote text.

### `ContactSection`
Path: `components/contact-section.tsx`
Gradient wrapper containing a two-column layout: CTA copy and a contact form (Name, Phone, Subject, Message).

### `FooterSection`
Path: `components/footer-section.tsx`
4-column footer grid (copy, Company, Support, Social nav links), credits row, footer image, and large watermark.

---

## shadcn/ui Primitives (`components/ui/`)

Installed components — see [shadcn/ui docs](https://ui.shadcn.com) for full API.

| Component | File |
|---|---|
| Badge | `badge.tsx` |
| Button | `button.tsx` |
| Card / CardHeader / CardTitle / CardContent | `card.tsx` |
| Input | `input.tsx` |
| Label | `label.tsx` |
| Textarea | `textarea.tsx` |
