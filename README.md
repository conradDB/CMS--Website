# Luxurytime Atelier — Shopify theme

An original Luxurytime redesign built on **Shopify Dawn 15.5.0**. The homepage uses a dark horology presentation, large editorial typography, an interactive mechanical watch, an exploded-view scroll story, live Shopify collections, a macro craftsmanship image and an ivory editorial section.

The deliverable is a Shopify Online Store 2.0 theme. Upload the **theme ZIP**, not the source ZIP, to Shopify to preview it with your real catalogue.

## Upload and preview

[Download the upload-ready Shopify theme ZIP](https://github.com/conradDB/CMS--Website/raw/refs/heads/main/downloads/Luxurytime-Atelier-Shopify.zip).

This repository now contains the Luxurytime Shopify theme. The previous CMS website remains in Git history. This theme runs on Shopify; it is not a standalone Vercel website.

1. In Shopify admin, open **Online Store → Themes**.
2. Choose **Import theme → Upload zip file** (some admin versions label this **Add theme → Upload zip file**).
3. Upload `Luxurytime-Atelier-Shopify.zip`.
4. On the new theme, choose **Customize / Edit theme**. Select your approved logo, featured collection and collection tiles. The homepage automatically uses All products when no featured collection is selected.
5. Choose **Preview** to review the unpublished theme on desktop and mobile, including a real product, its variants, cart and checkout handoff.

Uploading the ZIP adds a theme to the library; it does not publish it automatically. Publishing is a separate Shopify admin action.

## Standalone HTML preview

[Download the HTML preview](https://github.com/conradDB/CMS--Website/raw/refs/heads/main/downloads/Luxurytime-Preview.html) or [the smaller ZIP download](https://github.com/conradDB/CMS--Website/raw/refs/heads/main/downloads/Luxurytime-Preview.zip).

Save the HTML file and open it in a modern browser. If downloading the ZIP, extract it first and open `Luxurytime-Preview.html`. The preview embeds its images, fonts, animation and demo catalogue; it does not need a web server or internet connection. Product and collection pages use illustrative designs. Search, shopping bag and newsletter controls explain the preview limitations without submitting data. The Shopify theme ZIP remains the file to upload to Shopify.

Rebuild this preview with `npm run preview:html`. The exporter shares the Liquid renderer with the development preview and leaves storefront theme files unchanged.

## Configure the design

- **Theme settings → Logo:** select the approved Luxurytime artwork. Until then, the header displays the Shopify shop name as an editorial wordmark.
- **Luxurytime · Watch story:** edit the chapter labels, headings, descriptions and shop button. The supplied four chapters map to the assembled watch, close-up, exploded view and reassembled watch. Animation can be disabled here. Visitors can pause it independently.
- **Luxurytime · Timepieces:** choose a featured collection and 4–8 products. Images, titles, vendors, prices, currencies and availability come from Shopify, with links to native product pages.
- **Luxurytime · Collections:** choose up to five collection blocks, for example your actual watch brands. With no blocks, the theme displays up to five existing collections.
- **Luxurytime · Editorial:** replace the included illustrative craftsmanship image if desired. Edit the headline and link to an existing collection or page.
- **Luxurytime · Perspective:** edit the final editorial message and collection button.
- **Header and footer:** choose the store's menus, social links and newsletter settings. Shopify's policy links remain available in the native footer.

The typography is bundled locally in `assets/luxurytime.css`; it overrides Dawn's font picker to preserve the custom design. Colours for native product, collection, cart and content pages use the theme's colour schemes.

## Shopify shopping foundation

Dawn's product pages, variant selector, product form, cart drawer, cart page, collection filters, search, accounts, newsletter forms and checkout handoff are retained. The custom homepage links to Shopify routes and actual products. It does not invent inventory or prices, calculate tax or shipping, or replace Shopify checkout.

A newly uploaded theme does not automatically copy settings, app embeds, app blocks, custom scripts or metafield bindings from the existing theme. Re-enable the store's required app embeds and product-detail blocks in the new theme editor. Use Dawn's existing dynamic-source support to bind the store's actual watch specifications; no unknown metafield names have been guessed.

## Visual assets and provenance

The supplied recording informed the visual direction: dark navy, restrained serif typography, a large watch, separated mechanical layers, collections and macro imagery. No artwork, logos, code or video frames were copied from that reference.

- `src/watch-model.js`: original procedural watch geometry, dial artwork, bracelet, movement and separated layers. It is an **illustrative design study**, not a representation of a listed luxury brand or an item offered for sale.
- `src/studio.js`: locally generated photographic lighting environment. No external 3D model or HDR downloads are needed.
- `assets/lt-watch-poster.png` and `lt-watch-detail.png`: static renders of that original model, used as fallback/editorial art.
- `assets/lt-atelier.webp`: original AI-generated illustrative macro watchmaking image. It does not document Luxurytime's premises, staff or repair services.
- Cormorant Garamond and DM Sans are bundled with their licences, along with a licensed symbols font.
- The original Dawn licence is preserved in `LICENSE.md` and `assets/DAWN-LICENSE.txt`. The Three.js licence is included in assets.

Access to the current Luxurytime website was blocked in the build environment. Its existing logo, theme settings and live storefront copy could not be inspected or migrated. The new theme reads product and collection data from Shopify when installed; merchant-approved brand and editorial content can be selected in the editor.

## Development

Requires Node.js 22 or newer. Packaging the source locally also uses Python 3. From this directory:

```sh
npm ci --cache /tmp/luxurytime-npm-cache --no-audit --no-fund
npm run build
npm run preview
```

The local preview serves on port 3100. It renders the **same custom homepage Liquid sections** using LiquidJS and labelled illustrative product fixtures. Its header/footer, product preview and modal controls are development scaffolding; they are not the Shopify commerce runtime and are excluded from the upload ZIP. Preview forms do not submit customer data.

```sh
npm run check
npm test
npm run package
```

`npm run check` runs Shopify Theme Check. The cloud environment uses `SHOPIFY_CLI_NO_ANALYTICS=1 XDG_CONFIG_HOME=/tmp/luxurytime-cli` when invoking Shopify CLI. These are local tooling settings, not storefront credentials.

Browser checks use `/usr/bin/chromium`, or the executable specified by `CHROMIUM_PATH`. Software WebGL is enabled for cloud testing; one worker avoids GPU contention. To regenerate the original watch stills, start the preview server and run `node scripts/capture.mjs`.

## Validation scope

Shopify Theme Check covers Liquid, schemas, template structure and asset references. The original Dawn 15.5.0 baseline has nine lint warnings; these were checked separately so inherited warnings can be distinguished from custom changes.

Browser checks cover the shared homepage sections, local assets, JavaScript errors, four scroll chapters, exploded layers, keyboard controls, saved motion preferences, device reduced motion, no-WebGL fallback, no-JavaScript rendering, responsive widths, preview navigation, custom-element reload and an automated WCAG A/AA scan. Desktop/mobile visual captures are also reviewed.

**Store-specific shopping behaviour has not been tested against Luxurytime's Shopify admin or checkout.** Verify variants, inventory, app integrations, discounts, shipping, payments and checkout in Shopify's unpublished theme preview. Local design-preview tests are not a claim of a completed live checkout or comprehensive accessibility certification.

## Source map

- `sections/lt-*.liquid` — editable Luxurytime homepage sections
- `snippets/lt-*.liquid` — Shopify product and collection tiles
- `assets/luxurytime.css` — custom visual system and responsive styles
- `src/luxurytime.js` — story progression, controls, accessibility and renderer lifecycle
- `src/watch-model.js` / `src/studio.js` — original 3D model and lighting
- `assets/luxurytime.js` — bundled storefront JavaScript
- `templates/index.json` — default homepage section arrangement
- `scripts/preview.mjs` — local Liquid design preview only
- `scripts/package.mjs` — clean Shopify and source archives
- Remaining theme files — the Dawn shopping foundation, with limited header, footer and theme-setting changes
