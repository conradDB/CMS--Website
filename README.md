# CMS — Every move. Connected.

A self-contained redesign for CMS Systems. The site uses local HTML, CSS, JavaScript, fonts, original CMS branding and procedural Three.js artwork. There are no runtime CDN requests, API keys, AI hosting requirements or production Node.js services.

## Develop and verify

Use Node.js 20 or newer:

```sh
npm ci --cache /tmp/cms-npm-cache --no-audit --no-fund
npm run dev
npm test
npm run build
```

Development uses port 3000; change it with `npm run dev -- --port 8080`. Development, testing and production builds bundle `src/scene.js` into the local `assets/scene.js` file with esbuild. The generated bundle is committed so the source checkout can also be served directly.

Tests use `/usr/bin/chromium`. Set `CHROMIUM_PATH` to another Chromium executable if required. The browser test configuration enables Chromium's software WebGL renderer and runs one worker to avoid graphics contention in cloud environments.

## Deploy to Vercel

Import `conradDB/CMS--Website`, select branch `main`, and keep Root Directory at `./`. The included `vercel.json` uses Framework Other, installs with `npm ci`, builds with `npm run build`, and serves `dist/`. No environment variables are required. Subsequent pushes to the connected production branch trigger Vercel deployments.

## Deploy to your own server

Run `npm run build`. Copy the **contents** of `dist/` into the static web directory. Keep `index.html`, `styles.css`, `app.js`, `experience.js`, `content.js`, `web.config`, and `assets/` together. Relative asset URLs support a subdirectory deployment.

`web.config` supplies IIS default document and asset MIME settings. Other static servers can ignore it. This build is tested with Chromium and a local static HTTP server; the organisation's live IIS server has not been tested.

The deployment ZIP contains these ready-to-serve files. The source ZIP also includes editable source, the lockfile, content provenance and tests, excluding dependencies and generated reports.

## Design and behaviour

- An original nine-spoke chrome and CMS-blue form introduces the automotive software story. It rotates, responds to pointer movement, and changes position and scale through the page.
- A pinned, three-part editorial story advances with scrolling or explicit numbered controls.
- A connected 3D network surrounds the central statement. All models and studio lighting are generated locally; no downloaded models, video streams or HDR services are required.
- Nine product modules are available through keyboard-operated tabs and full detail dialogs. Sell / Operate / Grow controls provide entry points without hiding modules.
- Four illustrative customer journey chapters connect enquiry, sale, service and reporting.
- Original CMS eco / Wilson artwork appears throughout. Light and dark themes respect system preferences and save the visitor's selection.
- An animation pause control and device reduced-motion preference keep illustrations static in their reserved spaces. Local SVG illustrations also cover browsers without WebGL or a lost graphics context.
- Rendering pauses while the page is hidden, when a modal or Wilson guide is open, and in sections without a visible 3D object. Pixel density is capped, with a lower resolution for software graphics.

## Content and functional boundaries

The supplied `docs/CONTENT-SOURCE.md` is the product and legal content source. All nine product descriptions and legal/privacy/cookie/POPIA text remain available. Contacts, offices, reseller information and integration names are retained. The supplied logo files are preserved unchanged in `assets/brand/`; legacy alternatives are retained but not substituted for the current artwork.

The 3D form is an original visual metaphor, not a CMS hardware product. Customer records and dashboards are illustrative. No customer totals, revenue claims or testimonials have been invented. The reference recording informed the editorial rhythm and visual continuity; its artwork and implementation were not copied.

Wilson's website guide is explicitly a **scripted local demo**, not the production AI assistant. It cannot access customer records or take actions in CMS. The enquiry form validates input and prepares an email; the visitor reviews and sends it through their email application. A copyable enquiry is also available.

Social, reseller, email and telephone links are user-initiated outbound actions. The PAIA PDF links to CMS's existing website because a local approved copy is unavailable. No external services are called automatically when the page loads.

Manrope is a proposed presentation typeface; the supplied corporate extract names Roboto. Previous product URLs are not rewritten by this static build; plan redirects if replacing the existing corporate website.

## Verification

The 22 browser checks cover local-only asset loading, page errors, both themes, saved preferences, keyboard navigation, all nine complete product dialogs, product-to-enquiry handoff, form validation, safe Wilson text rendering, legal content, widths of 360/390/768/1440px, axe WCAG A/AA scans in both themes, scroll progression, 3D placement after resizing, animation pause/resume, device reduced-motion behaviour, business-goal selection, original logos and WebGL fallback. Automated scans do not constitute comprehensive accessibility certification. Desktop and mobile screenshots are reviewed separately.

## Source map

- `index.html` — page, dialogs and forms
- `styles.css` — responsive composition, themes and CSS motion
- `app.js` — product details, customer journey, theme, enquiry and Wilson guide
- `experience.js` — editorial scrolling and business-goal controls
- `src/scene.js` — procedural 3D geometry, lighting and scene transitions
- `content.js` — full product and legal copy
- `assets/` — local bundle, original branding, fallback illustrations, fonts and licences
- `scripts/` — bundling, development server and production build
- `tests/` — functional, responsive, motion and accessibility checks
