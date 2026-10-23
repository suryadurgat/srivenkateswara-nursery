# Sri Venkateswara Nursery: Reference Prototype

A clickable prototype of the e-commerce website, mobile app and admin panel described in the project proposal (v1.0, 22 Oct 2026). It's for presenting to the client and gathering feedback before development starts.

## How to open

No install or server is needed. Double-click **`index.html`** to open it in Chrome, Edge or Safari.

Google Fonts load from the internet. Offline, the pages fall back to system fonts and everything else still works.

## What's inside

| Page | What it shows | Proposal § |
|---|---|---|
| `index.html` | **Presentation landing page**: objectives, deliverables, product range, live feature explorer, app & admin previews, tech stack, timeline | All |
| `home.html` | Storefront homepage | 4.1 |
| `shop.html` | Catalogue: filters, search suggestions, sorting | 4.2 |
| `product.html?id=103` | Product detail: gallery, care, reviews, pin-code check | 4.3 |
| `cart.html` | Cart → delivery → payment → confirmation | 4.5 |
| `account.html` | OTP login, orders & tracking, wishlist, addresses | 4.4 |
| `bulk-orders.html` | Bulk & event orders, Request-a-Quote | 4.9 |
| `offers.html` | Festival campaigns, coupons, countdown | 4.10 |
| `care-tips.html` | Blog / plant-care articles | 4.7 |
| `contact.html` | Contact, map, hours, enquiry form, FAQ | 4.8 |
| `admin.html` | Owner dashboard: orders, products, inventory, quotes, campaigns, reports, roles | 4.6 |
| `mobile-app.html` | 9 mobile app screen concepts | 5.1–5.5 |
| `overview.html` | Technical blueprint: architecture, data model, API, security, timeline, risks, technical Q&A (printable) | 6–8 |

## Demo credentials

- **Customer OTP:** `123456` (any 10-digit mobile number)
- **Coupons:** `DIWALI20` (20% off, min ₹499), `WELCOME10`, `FREESHIP`
- **Admin:** the login is pre-filled. Choose the *Owner* or *Staff* role to see role-based access.
- **Serviceable pin codes (sample):** anything starting with `50`–`53`; `520`–`522` are next-day zones.

## Suggested presentation flow (about 15 minutes)

1. **`index.html`**: scroll through the landing page. In *Explore every feature, live*, click through the modules.
2. **Live order demo:** open the website, search "rose", open a product, add it to the cart, apply `DIWALI20`, check out and pay (simulated Razorpay).
3. **Admin panel:** sign in as Owner. The order you just placed appears on the dashboard and in Orders (marked *Live demo*). Change its status to show customer notifications.
4. Show **Bulk Quotes** (prepare a quote) and **Festival Offers** (toggle a campaign).
5. **Mobile app** screens.
6. **Project Blueprint** (`overview.html`) for technical questions: architecture, API, security, the payment-failure scenarios and the *Anticipated technical questions* section.

To start a demo fresh, use **Admin → Settings & Staff → Reset demo data**, or clear the site data in your browser.

## Notes

- Built as static HTML/CSS/JS so it can be reviewed without servers. Production uses the stack in the proposal (Next.js, React Native, Node/Express, MongoDB + MySQL, Razorpay).
- Data is stored in the browser (`localStorage`) for the demo only.
- Plant illustrations stand in for real product photography.
- Phone, WhatsApp, email, address, customer names and figures are **sample placeholders**, to be replaced with the client's real details.
