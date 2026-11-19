# BreadWinners SACCO

Marketing site for BreadWinners, a Ugandan savings and credit co-operative with open membership. The app is Next.js App Router, TypeScript, and Tailwind CSS.

## Routes

- `/` home
- `/savings`
- `/loans`
- `/membership`
- `/about`
- `/contact`
- `/dashboard` layout preview only. It is not a signed-in account.

## Backend

There is no database, authentication, or API in this repository. Typed content lives in `src/data`. A future Supabase client should replace the getters in `src/data/index.ts` on the server. Do not put a service-role key in `NEXT_PUBLIC_` variables or in frontend code.

The contact form validates in the browser and does not send a message.

## Environment

Copy `.env.example` if you want a fixed site URL for Open Graph tags. It is optional. Vercel sets `VERCEL_URL` on its own. No secrets are required to build.

## Scripts

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment

Vercel project settings that match this repo:

- Framework: Next.js
- Root directory: repository root
- Install command: `npm install`
- Build command: `npm run build`
- Output: default (do not set a static export directory)
- Node.js: 20.9 or newer

Rates, fees, the office address, and the SASRA status shown in the interface are drafts marked TBC.
