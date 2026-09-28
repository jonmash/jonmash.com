# jonmash.com

Jon Mash's personal site: a one-page career record (bio, career history, education,
CV, contact). Plain static HTML/CSS, no build step, no framework, no JS dependencies —
deployed straight to GitHub Pages.

## Why no framework

This is deliberately the smallest of the three `jonmash/*` web properties. A
single page of mostly-static content doesn't need React or a bundler; a plain
page loads faster, has less to go wrong, and needs no build step to review or
edit. If this site grows multiple routes later, revisit — don't add a framework
pre-emptively.

## Structure

```
index.html                       the entire site
assets/styles/tokens.css         shared design tokens (MAS-5) — copied, see note below
assets/styles/jonmash-accent.css this property's accent color override (placeholder — see Open items)
assets/styles/components.css     shared component styles (MAS-5) — copied, trimmed to what this page uses
assets/styles/main.css           page-specific styles only
assets/scripts/contact.js        progressive-enhancement for the contact form (works without JS too)
cv/CV-JonathanMash.pdf           the CV — canonical path
cv/index.html                    redirects /cv/ to the PDF above
downloads/CV-JonathanMash-latest.pdf   legacy path, kept working (pre-migration URL)
shrtnr.html                      legacy path, redirects to github.com/jonmash/shrtnr
404.html, robots.txt, sitemap.xml, CNAME
.github/workflows/deploy.yml     builds nothing, just publishes the repo to Pages
```

To change copy: edit `index.html` directly. There's no separate content/data
file — for a single static page with no templating, that indirection would add
a build step for no benefit. If this site gains more pages, revisit.

## Design system

`tokens.css` and `components.css` are copied from
`jonmash/mash-engineering-website` (`design-system/` on the
`design/tokens-and-page-system` branch, MAS-5), which is the shared source of
truth across `mashengineer.com`, `jonmash.com`, and `highzmash.com`. **MAS-12**
is planned to turn this into a real shared package consumed by all three repos;
until that lands, if the source changes, update the copies here by hand.

Only `jonmash-accent.css` is unique to this property (one accent color per
property, per the design system's rule). That file is currently a **placeholder**
reusing the firm's blue — see Open items below.

## Deploy

Push to `main` → GitHub Actions publishes to GitHub Pages (`.github/workflows/deploy.yml`).
DNS/Cloudflare proxying, TTL changes, and the actual cutover from the Linode VPS
are handled outside this repo — see MAS-11.

## Open items (not blockers, but don't guess these — ask)

- **Contact form access key.** `index.html`'s form has a placeholder
  `REPLACE_WITH_WEB3FORMS_ACCESS_KEY` — Sol needs to provision (or share) a
  Web3Forms access key for `me@jonmash.com` before submissions actually reach
  an inbox. One-line change once that exists.
- **Accent color.** MAS-5 explicitly left jonmash.com's accent hue undecided
  (Mira's call). `jonmash-accent.css` reuses the firm's blue as a verified,
  contrast-safe placeholder — swap the three values there when Mira specifies
  the real one.
- **Headshot / OG image.** No photo asset exists yet, so the Person `image`
  field (JSON-LD) and `og:image` are both omitted rather than pointing at a
  placeholder or a 404. Add both together once a real image exists.
- **LinkedIn `sameAs`.** Withheld from the JSON-LD `sameAs` array until Jon
  confirms the LinkedIn profile's Website field points back at `jonmash.com`
  (MAS-10 §5.4/§8-Q3 — LinkedIn returns HTTP 999 to automated fetch, so this
  can't be verified by tooling).
- **`mashengineer.com` / `highzmash.com` in `sameAs`.** Also withheld until
  those sites actually link back here (MAS-12/MAS-6 — the reciprocal identity
  strip hasn't shipped on either site yet).
- **Identity strip / `highzmash.com` link.** MAS-10 §3.5's ratified policy is
  variant B (one-directional, freshness-gated per §3.4: 4+ posts, one within
  90 days) — same rule `mashengineer.com`'s `identityStrip.js` applies.
  `highzmash.com` currently has 2 posts, so the link to it is withheld here
  too, consistent with the other property. Add it back (on all sites at once)
  once the gate is met.
