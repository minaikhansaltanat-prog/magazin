# 5K — Buy · Play · Earn

Adaptive web portal for **5K**, a Kazakhstan e-commerce platform combining a product catalog,
a loyalty points system (**5K Points**), gamified tasks (**5K Game**), a referral program
(**5K Earn**) and promotions (**Flash 5K**, **Secret 5K**). Fully bilingual — Russian and Kazakh.

This is the frontend implementation: static HTML/Tailwind pages with a shared JS component
shell (header, footer, mobile drawer, i18n, carousels). It ships mock/demo data — there is no
backend, database or authentication wired up yet.

## Run locally

```
npm install
npm start
```

Serves the site at `http://localhost:3000`.

## Screenshots (QA)

```
npm run screenshot -- http://localhost:3000
```

Saves a full-page screenshot to `temporary screenshots/` (git-ignored).

## Structure

- `index.html`, `catalog.html`, `product.html`, `cart.html`, `checkout.html` — shopping flow
- `points.html`, `game.html`, `earn.html`, `promotions.html` — loyalty & gamification
- `about.html`, `contacts.html`, `faq.html`, `help.html`, `legal.html`, `profile.html`, `favorites.html`
- `js/app.js` — shared header/footer/menu/carousel/i18n shell
- `js/i18n.js` — RU/KZ translation dictionary (every page)
- `js/products.js` — mock product catalog + catalog filtering/sorting
- `css/styles.css` — design tokens and custom components (Tailwind CDN handles utilities)

## Not yet implemented

Real backend/API, PostgreSQL, OTP auth, payments, admin panel — see the project's technical
specification for the full roadmap.
