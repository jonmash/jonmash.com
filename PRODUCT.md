# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Jon for senior hardware leadership roles. They want to quickly confirm scope, seniority, and track record, and grab the CV.

Secondary: prospective Mash Engineering clients doing a background check, and peers or industry contacts.

## Product Purpose

Jon Mash's personal site: a one-page career record (bio, career history, education, CV, contact). Success is a reader leaving with a clear picture of what Jon has owned and a way to reach him or download the CV.

## Positioning

The person behind both the consultancy and the blog. This is the only property that names Jon's current employer (BRINC Drones) and holds the full career record.

## Operating Context

- Readers often arrive from LinkedIn, a recruiter pipeline, or a link from mashengineer.com / highzmash.com.
- The CV PDF is a primary artifact: `cv/CV-JonathanMash.pdf` (canonical) and the legacy path `downloads/CV-JonathanMash-latest.pdf` must keep working.

## Capabilities and Constraints

- Plain static HTML/CSS, no framework, no build step (deliberate; see README). Copy is edited in `index.html`.
- Hosting is migrating from GitHub Pages / old Linode VPS to Cloudflare Pages.
- Contact form uses the shared Web3Forms + hCaptcha handler; it delivers to jon@mashengineer.com.
- Legacy redirects (`shrtnr.html`, `/cv/`) must keep working.

## Brand Commitments

- Part of a three-site family with mashengineer.com and highzmash.com that must share a consistent visual feel through one shared design system. This site sits in the middle register: professional but personal.
- Open idea from Jon, not yet binding: a shared mascot across the three sites, wearing a golf shirt on this one (shirt and tie on mashengineer.com, hacker-casual on highzmash.com).
- Jon's reaction to the current family of sites: generic, AI-looking, no character. Direction preference: hardware-oriented and personal.

## Evidence on Hand

- Career timeline (verified with Jon): SPARQ Systems Nov 2010 to Apr 2016; Amazon Prime Air Apr 2016 to Nov 2020; Amazon Leo (Kuiper) Nov 2020 to Feb 2023; BRINC Drones (Director of Hardware) Feb 2023 to present. ePOWER research assistant 2009 to 2013. M.Sc. (2013) and B.Sc. in Electrical Engineering, Queen's University. Mash Engineering LLC founded Nov 2025.
- Experience framing: hardware design since 2004, programming since roughly 1999, professional since 2009.
- Headshot: `assets/images/headshot.png`.
- Must never be fabricated: titles, dates, team sizes, or achievements not in the record above or the CV.

## Product Principles

1. Scannable seniority: a hiring manager should grasp scope and level in under a minute.
2. Facts are precise: dates and titles match the CV exactly.
3. The person, not the resume template: the record should feel like Jon, consistent with the other two sites.
4. Zero-friction to the CV and to contact.

## Accessibility & Inclusion

WCAG 2.2 AA, matching mashengineer.com: semantic headings, visible focus rings, labelled form fields, reduced-motion respected. The contact form works without JS.
