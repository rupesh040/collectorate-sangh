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

`npm run build` generates all seven pages in `dist/`. Upload that generated folder to a static web host. The source ZIP excludes generated build folders. Development uses `.next/`; the project does not create an `out/` folder.

## Structure

```text
app/
  layout.tsx              Shared layout and metadata
  page.tsx                Homepage composition
  about/page.tsx
  office-bearers/page.tsx
  events/page.tsx
  samvidhan/page.tsx
  employee-information/page.tsx
  contact/page.tsx
  globals.css             Tailwind theme, local fonts, animation keyframes
components/
  Navbar.tsx              Responsive navigation
  LanguageProvider.tsx    Hindi/English selection and persistence
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
  UI.tsx                  Shared Tailwind utility strings
data/
  content.json            Complete hi and en website data
  type.ts                 All content and component prop types
  index.ts                Typed JSON data exports
public/assets/            Original images, icons, and local font files
next.config.ts            Static export configuration
postcss.config.js         Required Tailwind PostCSS plugin
tsconfig.json             TypeScript settings
```

## Editing content

Update `data/content.json`. Components import its typed exports from `data/index.ts`; all content types are defined in `data/type.ts`. Extend these three files together when adding data fields.

`content.json` contains matching `hi` and `en` objects for all pages, links, lists, tables, and accessibility labels. The navbar language buttons switch the whole website, preserve the current page, and save the preference in local storage. Components read the selected content through `useContent()`.

The Office Bearers page groups records by year under `leadership.years`. The 2022 tab preserves the previous roster. The 2026 tab contains the list elected on 12 September 2026, transcribed from the supplied PDF, including districts and phone numbers. Blank names in the document are stored as empty values and displayed as “Name not provided.” Both years are available in Hindi and English.

The build runs `scripts/prepare-static.cjs` to make Next.js route data available at the filenames requested by the browser when exporting on Windows. It leaves exports from other operating systems unchanged.

All layout, typography, responsive rules, hover states, and pseudo-elements use Tailwind utility classes in the TSX components. `components/UI.tsx` shares repeated utility strings for containers, buttons, cards, headings, tables, and reveal animations. `app/globals.css` contains only the Tailwind import, theme tokens, local font declarations, and two animation keyframes; it has no global layout or component selectors.

Routes: `/`, `/about/`, `/office-bearers/`, `/events/`, `/samvidhan/`, `/employee-information/`, and `/contact/`.

Original PDF and Google Sheet destinations are preserved. The reference's pending photos and PDF editions remain placeholders. Animations include hero entrance, scroll reveal, card and button hover, and gallery zoom; reduced-motion preferences are respected.

No `.mjs` configuration files, UI frameworks, animation libraries, or external font services are required.
