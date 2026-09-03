# Manual TODOs

Items below need content/assets from you that I cannot provide. Once each is done,
please reset/verify the related `og:image`, social links, or placeholder comments.

## Assets / content you need to add

- [ ] **Open Graph share image** — Add a 1200×630 brand graphic at `public/og-image.jpg`.
      This is referenced by `og:image` / `twitter:image` in `src/layouts/Layout.astro`.
      Until the file exists, social link previews will show a missing image.

- [ ] **Caryl's photo** — Replace the placeholder (gradient box + nurse icon) on the
      About page. See `src/pages/about.astro` (search for `TODO: replace placeholder
      with a photo of Caryl`).

- [ ] **Admin & Technology service image** — `src/constants.ts` still uses
      `technology-companion.jpeg` (a placeholder) for the Admin & Technology package.
      Search for the `TODO: replace placeholder image` comment.

- [ ] **Social media URLs** — All three links in `socialLinks` (`src/constants.ts`)
      currently point to `href="#"`. Fill in real Facebook / Twitter / Instagram
      profile URLs.

- [ ] **Medical facilities list** — `src/constants.ts` notes a TODO that the procedures
      list should also cover Cure Day Hospital Paardevlei and Summerhill Surgical
      Centre Dennegeur.

- [ ] **Dedicated subscriptions page** — There's a TODO to build a dedicated
      subscriptions page with full detail per plan.

## Optional cleanup

- [ ] **Compress large page-header source images** — `contact-header.jpg` (~5.6 MB),
      `faq-header.jpg` (~1.8 MB) and `her-banner-wr.jpg` (~1.4 MB) are stored at full
      resolution. They are downscaled at build time, but you may want to replace them
      with smaller sources to slim the repo.

- [ ] **`dist/` + `dist.zip` committed** — Build output is present in the repo even
      though it's in `.gitignore`. Consider removing these from git history if desired.
