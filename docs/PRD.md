# Product Requirements Document — Verixa Job Portal

## Overview

Verixa is a web-based job portal that connects job seekers with employers. The platform focuses on a clean, fast discovery experience for candidates and a streamlined hiring workflow for employers.

## Goals

- Allow candidates to browse, search, and apply for jobs.
- Allow employers to post job listings and review applications.
- Provide a frictionless onboarding flow for both user types.

## User Personas

### Candidate
- Age: 22–45
- Goal: Find a role that matches skills and salary expectations.
- Pain point: Generic job boards with low-quality matches.

### Employer / Recruiter
- Goal: Source qualified candidates quickly.
- Pain point: High volume of irrelevant applications.

## Core Features (MVP)

| Feature | Priority | Notes |
|---|---|---|
| Homepage with job listings preview | P0 | Static data, no auth required |
| Job search with keyword + location filter | P0 | |
| Job detail page | P0 | |
| Candidate registration & login | P1 | Email/password |
| Employer registration & login | P1 | |
| Job application submission | P1 | Upload CV, cover letter |
| Employer job posting | P1 | |
| Application status tracking | P2 | Candidate-facing dashboard |
| Job alerts via email | P2 | |
| Employer applicant dashboard | P2 | |

## Out of Scope (v1)

- Payment / subscription billing
- Video interviews
- AI-powered matching
- Mobile native apps

## Success Metrics

- Time-to-apply < 3 minutes for returning candidates.
- Job listing load time < 1 s (LCP).
- 70 % of employers post a second listing within 30 days.
