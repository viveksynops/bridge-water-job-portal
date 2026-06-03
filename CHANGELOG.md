# Changelog

All notable changes to this project will be documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Added
- Extracted all homepage sections into individual reusable components under `components/`.
- `SiteHeader`, `HeroSection`, `FeaturedSection`, `ProcessSection`, `PopularJobsSection`, `SuccessRateSection`, `CompaniesSection`, `TestimonialsSection`, `ContactSection`, `FooterSection`.
- Shared primitives: `LogoMark`, `ProgressBar`.
- Sub-components: `JobSuccessCard`, `CareerPanel`, `SuccessRateCard`, `ProfileMockup`, `UploadMockup`.

### Fixed
- Typo in contact form label: "Your massage" → "Your message".
- Typo in footer link: "Chagelog" → "Changelog".

---

## [0.1.0] - 2026-06-03

### Added
- Initial project scaffold from Create Next App.
- Tailwind CSS v4, shadcn/ui, and lucide-react configured.
- Full homepage built in `app/page.tsx`: header, hero, featured bento, process, popular jobs, success rate, companies, testimonials, contact form, footer.
