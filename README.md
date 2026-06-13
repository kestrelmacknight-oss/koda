# Koda Website

Static website for [koda.fyi](https://koda.fyi) — built with plain HTML, CSS, and vanilla JavaScript.
No build step. No dependencies. No framework. Push to Git and it deploys.

---

## File structure

```
koda-site/
├── index.html              # Landing page
├── terms.html              # Terms & Conditions
├── privacy.html            # Privacy Policy
├── 404.html                # Custom error page
├── robots.txt              # Search engine directives
├── sitemap.xml             # XML sitemap (update dates on each publish)
├── _headers                # Cloudflare Pages: security headers
├── _redirects              # Cloudflare Pages: URL redirects
├── css/
│   └── style.css           # All styles — edit here, not in HTML files
├── js/
│   └── main.js             # Nav, fade-in, smooth scroll
└── assets/
    └── icons/
        └── favicon.svg     # SVG favicon — works in all modern browsers
```

---

## Deploying to Cloudflare Pages

### First time

1. Push this folder to a GitHub (or GitLab) repository.

2. Log into [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages** → **Create a project** → **Connect to Git**.

3. Select your repository.

4. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` *(or the subfolder if the site is not at root)*

5. Click **Save and Deploy**. Cloudflare will deploy in about 30 seconds.

6. Add your custom domain under **Custom domains** → `koda.fyi` and `www.koda.fyi`.
   The `_redirects` file already handles www → non-www.

### Every subsequent update

```bash
git add .
git commit -m "Update landing page copy"
git push
```

Cloudflare Pages detects the push and deploys automatically. Zero downtime.

---

## Before going live — required changes

Search the HTML files for `[INSERT` and fill in every placeholder:

| File | Placeholder | What to put |
|---|---|---|
| `terms.html` | `[INSERT STATE OF INCORPORATION]` | Your LLC's state (e.g. Delaware) |
| `terms.html` | `[INSERT DATE BEFORE PUBLISHING]` | Today's date (e.g. January 15, 2025) |
| `terms.html` | `[INSERT MAILING ADDRESS]` | Your registered business address |
| `privacy.html` | `[INSERT DATE BEFORE PUBLISHING]` | Same effective date |
| `privacy.html` | `[INSERT ADDRESS]` | Same address |
| `sitemap.xml` | `2024-01-01` (×3) | Actual publish date in YYYY-MM-DD |

**Download links** — search `href="#"` in `index.html` and replace with your actual installer URLs:
```html
<!-- Windows -->
<a href="https://releases.koda.fyi/KodaSetup-v0.34-Windows.exe" ...>

<!-- macOS -->
<a href="https://releases.koda.fyi/KodaAlpha-v0.34-macOS.dmg" ...>

<!-- Linux -->
<a href="https://releases.koda.fyi/KodaAlpha-v0.34-Linux-x86_64.AppImage" ...>
```

**OG image** — add a 1200×630 PNG to `assets/og-image.png` and the meta tags in `index.html` will reference it. A dark-theme image with the Koda logo and the headline works well.

---

## Updating content

All styles are in `css/style.css` — never in the HTML files. Edit the stylesheet once; every page picks up the changes.

The colour palette is defined as CSS variables at the top of `style.css` under `:root`. Change `--violet`, `--mint`, or `--bg` there and the whole site updates.

### Adding a new page

1. Copy `terms.html` as a template — it has the nav, interior hero pattern, and footer already wired.
2. Update the `<title>`, `<meta name="description">`, and `<link rel="canonical">` for the new page.
3. Add it to the nav on all pages if it belongs there.
4. Add it to `sitemap.xml`.

### Changing download links

The three desktop download buttons and two mobile "coming soon" items are in `index.html` around `id="download"`. Update the `href` values when new builds are posted.

---

## Security headers

The `_headers` file sets security headers on every Cloudflare Pages response:

- `Content-Security-Policy` — allows only fonts from Google Fonts, nothing else external
- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff` — prevents MIME sniffing
- `Permissions-Policy` — disables camera, mic, geolocation access via browser API

If you add a third-party script (e.g. Plausible analytics), add its domain to the `script-src` directive in `_headers`.

---

## Recommended: privacy-respecting analytics

Since Koda is privacy-first, avoid Google Analytics. Good alternatives:

- **[Plausible](https://plausible.io)** — open source, GDPR-compliant, no cookies ($9/month)
- **[Fathom](https://usefathom.com)** — simple, no cookies ($14/month)
- **Cloudflare Web Analytics** — free, built into Cloudflare Pages, no cookies

To add Plausible, add one line before `</body>` in each HTML file:
```html
<script defer data-domain="koda.fyi" src="https://plausible.io/js/plausible.js"></script>
```
And add `https://plausible.io` to the `script-src` directive in `_headers`.

---

## Built by

GryphonHeart LLC — [legal@koda.fyi](mailto:legal@koda.fyi)
