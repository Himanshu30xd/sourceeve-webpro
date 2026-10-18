# SourceEve Group of Companies

Official website of **SourceEve Group of Companies**: *Connecting People, Products & Possibilities.*

A single-file static website (plain HTML, CSS and JavaScript, no build step) presenting the group's three businesses:

- **SourceEve Staffing Solutions**: overseas recruitment and workforce solutions
- **SourceEve Events & Exhibitions**: event management and exhibition solutions
- **SourceEve Export Imports**: international trade and global sourcing

## Features

- Clean, responsive design for mobile, tablet and desktop
- Hamburger side menu with sub-menus, plus top navigation on desktop
- Auto-sliding "Trending Exports" carousel (every 3 seconds, swipe and arrow support)
- Our Businesses page with three image tabs
- Product cards for spices, fresh produce and home furnishing
- WhatsApp enquiry: floating button and contact form that opens WhatsApp with the message ready
- Light scroll animations (respects reduced-motion settings)

## Pages

All pages live inside `index.html` and are switched with the URL hash:

| URL | Page |
| --- | --- |
| `/#/` | Home |
| `/#/about` | About Us (also `/about/mission`, `/about/values`, `/about/reach`) |
| `/#/businesses` | Our Businesses |
| `/#/staffing` | Staffing Solutions |
| `/#/events` | Events & Exhibitions |
| `/#/exports` | Export Imports |
| `/#/markets` | Our Markets |
| `/#/contact` | Contact (also `/contact/employer`, `/contact/supplier`, `/contact/event`) |

## Project structure

```
index.html      the entire website
images/         logo and photos (see below)
README.md
```

## Setup

1. Open `index.html` and edit the two lines at the top of the script:

   ```js
   const WA="919999999999";          // WhatsApp number with country code, no + or spaces
   const MAIL="info@sourceeve.com";  // company email
   ```

2. Add your photos to the `images/` folder using these names:

   `logo.png`, `hero.jpg`, `staffing.jpg`, `events.jpg`, `exports.jpg`,
   `turmeric.jpg`, `chilli.jpg`, `cardamom.jpg`, `pepper.jpg`, `cumin.jpg`, `cinnamon.jpg`,
   `fruits.jpg`, `vegetables.jpg`, `furnishing.jpg`

   If an image is missing, a placeholder photo or a colour tile is shown instead.

## Run locally

Open `index.html` in any browser. No installation needed.

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project** and import the repository.
3. Set **Framework Preset** to *Other*. Leave the build command empty.
4. Click **Deploy**.

## Notes

Target markets and product categories listed on the site describe business interests, not a guarantee that every destination or category is currently active. Product availability, certifications, customs and shipping depend on each transaction.

&copy; 2026 SourceEve Group of Companies. All rights reserved.
