# SourceEve Group of Companies

Official website of **SourceEve Group of Companies**: *Connecting People, Products & Possibilities.*

A real multi-page static website (plain HTML, CSS and JavaScript, no build step). Every page is its own `.html` file, so each page opens fresh from the top.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home (trending exports carousel, businesses, values) |
| `about.html` | About Us, vision, mission, values, global reach |
| `businesses.html` | Our Businesses (three image tabs) |
| `staffing.html` | SourceEve Staffing Solutions |
| `events.html` | SourceEve Events & Exhibitions |
| `exports.html` | SourceEve Import Export (product categories) |
| `spices.html`, `ground-spices.html`, `fruits.html`, `vegetables.html`, `dry-fruits.html`, `home-furnishing.html` | Product pages with tap-to-zoom images |
| `markets.html` | Our Markets |
| `contact.html` | Contact form that opens WhatsApp |

Shared files: `style.css` (design) and `main.js` (menu, carousel, zoom, WhatsApp).

## Setup

1. Open `main.js` and edit the two lines at the top:

   ```js
   const WA="919999999999";          // WhatsApp number with country code, no + or spaces
   const MAIL="info@sourceeve.com";  // company email
   ```

2. Add your photos to the `images/` folder. `images/IMAGE-LIST.txt` lists every file name.
   Product photos go in `images/products/` (for example `images/products/turmeric.jpg`).
   `.jpg`, `.png`, `.webp` and `.jpeg` all work. Missing photos show a coloured tile.

## Deploy on Vercel

1. Upload all files (HTML, `style.css`, `main.js`, `images/`) to the root of a GitHub repository.
2. In Vercel choose **Add New Project** and import the repository.
3. Set **Framework Preset** to *Other*. Leave the build command empty. Click **Deploy**.

## Notes

Target markets and product categories describe business interests, not a guarantee that every destination or product is currently active. Availability, certifications, customs and shipping depend on each transaction.

&copy; 2026 SourceEve Group of Companies. All rights reserved.

## EmailJS setup (inquiry form and product request cards)

Both forms send email through EmailJS to the client's Gmail. Nothing works until you add your own public values.

1. Create an account at emailjs.com, then **Email Services > Add New Service > Gmail** and connect the client's Gmail. Copy the **Service ID**.
2. **Email Templates**: create two templates. In each, set **To Email** to the client's Gmail and **Reply To** to `{{reply_to}}`.
   - Inquiry template. Subject: `{{subject}}`. Body: Name `{{from_name}}`, Company `{{company}}`, Email `{{from_email}}`, Interested in `{{interest}}`, Message `{{message}}`, Sent `{{submitted_at}}`, Page `{{page_url}}`.
   - Product request template. Subject: `{{subject}}`. Body: Category `{{category}}`, Product `{{product_name}}`, Quantity `{{quantity}}`, Contact `{{contact}}`, Message `{{message}}`, Sent `{{submitted_at}}`, Page `{{page_url}}`.
3. **Account > General**: copy the **Public Key**.
4. Open `main.js` and fill the `EMAILJS` block at the top (4 values). Use only these public values. Never put passwords or private keys in the site.
5. In EmailJS, restrict the allowed domains to your Vercel domain, then send a real test from the contact page and from a product page.
