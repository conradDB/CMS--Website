# CMS — Every move. Connected.

A self-contained website redesign for CMS Systems, built with HTML, CSS and vanilla JavaScript. No AI hosting platform, CDN, analytics service, API key, or production Node.js process is needed to run the website. Local fonts and artwork are included.

## Run locally

From this repository, run `npm run dev` with Node.js 20 or newer. The development server uses port 3000; change it with `npm run dev -- --port 8080`. Use the static server for local review; managed browser policies in this environment block direct `file://` navigation.

For development tools and automated checks:

```sh
npm ci --cache /tmp/cms-npm-cache --no-audit --no-fund
npm test
npm run build
```

Browser tests use `/usr/bin/chromium`. Set `CHROMIUM_PATH` to another installed Chromium executable when needed. Dependencies are development-only. The build script itself uses Node.js standard libraries.

## Deploy to Vercel

Import `conradDB/CMS--Website` into Vercel and select the `main` branch. Keep Root Directory at `./`. The included `vercel.json` sets Framework to Other, runs `npm ci` and `npm run build`, and serves `dist/`. No environment variables are required. Click Deploy; Vercel supplies the public URL. Subsequent pushes to the connected production branch redeploy automatically.

## Deploy

`npm run build` creates `dist/`. Copy the **contents** of `dist/` into the site's static web directory. `index.html` must sit at the website root alongside `styles.css`, `motion.css`, `app.js`, `motion.js`, `content.js`, `web.config`, and `assets/`. Relative URLs also support deployment in a subdirectory.

The included `web.config` configures the default document and WebP/WOFF2 MIME types on IIS. It does not require ASP.NET application code. Other static servers can ignore this file. Existing IIS sites may have inherited settings; test in a staging directory before replacing an existing production site. This build has been verified with Chromium and a local static server, not on the organisation's live IIS instance.

For the competition, `CMS-Website-deploy.zip` contains the deployable files and deployment notes. `CMS-Website-source.zip` contains the editable project, lockfile, content source and tests. The source archive excludes dependencies, generated test reports and screenshot artifacts.

## What's included

- Independently styled light and dark themes with system preference detection and saved manual selection.
- Cinematic showroom entrance with staggered typography, parallax, animated connection paths and three rotating journey previews.
- Four scroll-driven customer journey chapters in a pinned desktop scene; direct touch-friendly chapter selection on mobile. Scenes include stock matching, customer care and reporting visuals.
- Interactive orbital ecosystem selector connecting all nine CMS modules, with full product copy preserved in accessible detail dialogs.
- Wilson's clearly labelled scripted website guide: product exploration, support contacts and demo routing.
- Demo enquiry form with validation, an explicit email hand-off and copyable enquiry text.
- Integrations, company history, South African offices, MENA reseller, training, campaigns and support contacts.
- Source legal/privacy/cookie/POPIA text, and a link to CMS's existing PAIA PDF.
- Keyboard-operated tabs, modal focus handling, skip navigation, a visible animation pause control, saved motion preferences and device reduced-motion support.
- Original supplied CMS eco / Wilson artwork in the header, footer and Wilson scene; original icon artwork for the ecosystem, chat launcher and favicon.

## Important content and asset notes

This is a first design implementation for review, not a published production replacement.

1. **Original logo integrated:** artwork supplied by the user in `logos.zip` is preserved unchanged in `assets/brand/`. The current full-colour CMS eco / Wilson lock-up is used in both themes, with a light backing in dark mode. Other supplied legacy variants are retained as source assets but are not substituted for the current lock-up.
2. The showroom image was generated for this concept. The interface visuals and customer examples are illustrative, not CMS screenshots or live records. No usage counts, revenue claims or customer testimonials are invented.
3. Wilson's website demo is deterministic and runs locally. It does not connect to Wilson's production AI, access customer records or execute product actions. The actual CMS in-product assistant is described only as a helper that guides users when stuck.
4. The enquiry form prepares a `mailto:` message and does not submit a lead to a server. The visitor must open their email application, review and send it. A copyable fallback is included. A real web submission endpoint can be connected when the approved CMS endpoint is supplied.
5. The PAIA PDF remains an explicitly outbound link to CMS's existing site; it was not downloadable in this environment. Social links, reseller links, email and telephone actions are also outbound user-initiated actions. No external services are called automatically when the website loads.
6. Product content and legal text come from `docs/CONTENT-SOURCE.md`, supplied by the user. No live statistics endpoint is called. Integration names are text labels rather than recreated partner logos. Manrope is a proposed presentation typeface; corporate guidance in the supplied extract lists Roboto, so typography is a design choice for review.
7. Existing product page URLs are not rewritten by this static build; content is available through the product explorer. If this replaces the current live site, arrange redirects for the former product URLs as part of deployment planning.

## Verification

20 Playwright checks cover local asset loading with no page errors or external requests, theme persistence, motion preferences, keyboard navigation, all nine detail dialogs, product-to-enquiry handoff, form validation, Wilson responses and safe text rendering, legal content, responsive widths of 360/390/768/1440px, axe WCAG A/AA scans of the initial page in both themes, scroll-driven scene progression, animation pause/resume, device reduced-motion behavior, ecosystem connection selection and original-logo loading. Automated scans are not a claim of comprehensive accessibility certification. Desktop/mobile screenshots were also reviewed.

## Structure

- `index.html` — page layout, dialogs and forms
- `styles.css` — themes, layouts and motion
- `app.js` — interactions and local state
- `motion.js` / `motion.css` — cinematic entrance, pinned storytelling, orbital ecosystem and motion preferences
- `content.js` — full product and legal copy
- `assets/` — local artwork and fonts, with font licences
- `scripts/` — static development server and build
- `tests/` — browser validation
