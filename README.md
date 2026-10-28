# FILFIL

Contemporary Mediterranean restaurant website for FILFIL, Sweifieh Village, Amman.

Built with Next.js App Router, TypeScript, Tailwind CSS, Motion, React Hook Form, and Zod.

## Local development

From this folder (`filfil-front-end`):

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

Node.js 20.9+ is recommended. This project was generated with Next.js 16.

## Project structure

```text
src/
  app/                 Pages, metadata, sitemap, robots
  components/          Layout, homepage, menu, forms, UI
  data/                Menu, FAQs, navigation, careers, site copy
  lib/                 Assets, validation, server actions
  i18n/                Locale placeholder for future Arabic / RTL
public/assets/
  logos/               Official FILFIL wordmark
  media/               Web-optimized photography
  videos/              Desktop and mobile hero videos
  menu/                Official menu artwork
_source/               Original extracted photography (local only)
```

Original supplied files (`filfil logo.png`, `menu.jpeg`, `filfil pics.zip`, hero videos) are kept in the project root.

## Replacing photographs

1. Add the new file to `public/assets/media/`.
2. Update the matching entry in `src/lib/assets.ts`.
3. Keep originals in `_source/` if you want an unoptimized archive.

Hero videos live at:

- `public/assets/videos/hero-desktop.mp4`
- `public/assets/videos/hero-mobile.mp4`

Posters are `public/assets/media/hero-poster-desktop.jpg` and `hero-poster-mobile.jpg`.

## Updating the menu

Edit `src/data/menu.ts`.

- Prices are numbers in Jordanian Dinars.
- `formatPrice()` renders them as `2.25 JD`.
- Add `dietary` only when confirmed (`vegetarian` or `vegan`).
- Category notes such as the sweet-potato upgrade live on the category object.

## Editing FAQs

Edit `src/data/faq.ts`. The homepage accordion reads this file.

## Careers listings

Edit `src/data/careers.ts`.

The array is empty on purpose — do not invent open roles. When a role is confirmed, add a `JobListing` object. The careers page will list it and the application form will include it.

## Forms

Server actions live in `src/lib/actions.ts`.

Without extra credentials, submissions are stored locally:

- Enquiries: `data/submissions/{contact|catering|franchise|careers}/`
- CVs: `data/uploads/careers/`

These folders are gitignored. Local filesystem storage is for development. It will not persist on serverless hosts such as Vercel.

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata and sitemap |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public email, when confirmed |
| `NEXT_PUBLIC_CONTACT_PHONE` | Public phone, when confirmed |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Official Instagram URL |
| `NEXT_PUBLIC_TIKTOK_URL` | Official TikTok URL |
| `NEXT_PUBLIC_MAPS_EMBED_URL` | Optional verified Google Maps embed URL |
| `RESEND_API_KEY` | Optional email delivery |
| `CONTACT_INBOX_EMAIL` | Inbox for Resend |
| `SUPABASE_URL` | Optional production database |
| `SUPABASE_SERVICE_ROLE_KEY` | Optional private storage / records |

Do not invent contact details, hours, ratings, or social URLs. Leave them empty until official values are supplied.

## Remaining production setup

- Add official email, phone, Instagram, and TikTok to `.env.local`.
- Replace the Google Maps search embed with a verified place embed if you have an API key or official maps URL.
- Connect Resend or another mail provider so enquiries are emailed, not only stored.
- Connect Supabase (or another backend) for persistent enquiry records, authenticated admin, and private CV storage.
- Add a CMS later if non-developers need to edit menu prices, FAQs, or jobs. The current data files are the local CMS.
- Review `src/app/privacy/page.tsx` with legal counsel.
- Compress or CDN-host the hero videos for production bandwidth.
- Add Arabic copy into the data files and switch `src/i18n/locale.ts` to `ar` / `rtl` when translations exist. There is no language switcher until then.

## Brand

- Logo: official `filfil.` wordmark
- Colors: `#E1D8CB` and `#000000`
- Type: Archivo Black and Archivo Narrow
