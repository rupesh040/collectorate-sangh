# Collectorate Karmachari Sangh

Recreation of https://dynamic-beijinho-ecfd6e.netlify.app/ using Next.js App Router, TypeScript (`.tsx`), and Tailwind CSS v4.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://127.0.0.1:3000.

```bash
npm run typecheck
npm run build
```

`npm run build` generates all seven pages in `out/`. Upload that folder to any static web host. Next.js generates `next-env.d.ts` automatically; keep this TypeScript support file.

## Structure

```text
app/
  layout.tsx              Shared layout and metadata
  page.tsx                Homepage composition
  [slug]/page.tsx          Six statically generated inner pages
  globals.css             Tailwind, local fonts, component styles, animations
components/
  Navbar.tsx              Responsive navigation
  Hero.tsx
  Facts.tsx
  About.tsx
  VisionMission.tsx
  OfficeBearers.tsx
  Constitution.tsx
  DocumentCard.tsx
  EditionGrid.tsx
  KeyPoints.tsx
  Events.tsx
  Gallery.tsx              Accessible image lightbox
  EmployeeInformation.tsx
  Contact.tsx
  Footer.tsx
  PageHeader.tsx
  SectionHeading.tsx
  Icon.tsx
data/
  content.json            All website text, links, images, lists, and tables
  type.ts                 All content and component prop types
  index.ts                Typed JSON data exports
public/assets/            Original images, icons, and local font files
next.config.ts            Static export configuration
postcss.config.js         Required Tailwind PostCSS plugin
tsconfig.json             TypeScript settings
```

## Editing content

Update `data/content.json`. Components import its typed exports from `data/index.ts`; all content types are defined in `data/type.ts`. Extend these three files together when adding data fields.

Routes: `/`, `/about/`, `/office-bearers/`, `/events/`, `/samvidhan/`, `/employee-information/`, and `/contact/`.

Original PDF and Google Sheet destinations are preserved. The reference's pending photos and PDF editions remain placeholders. Animations include hero entrance, scroll reveal, card and button hover, and gallery zoom; reduced-motion preferences are respected.

No `.mjs` configuration files, UI frameworks, animation libraries, or external font services are required.
