# Keywords

> Daftar istilah dari setiap keputusan di proyek ini, untuk dipelajari sendiri. Diisi Claude Code di akhir setiap fase.
> Cara pakai: copy keyword → cari di Google / dokumentasi resminya. Keyword sudah ditulis persis seperti istilah resminya.

## Format

| Keyword | Topik | Dipakai di | Fase |
|---|---|---|---|
| `astro content collections` | Astro | `src/content.config.ts` | 1 |

<!-- Kelompokkan per topik: Astro · Tailwind/CSS · Design/Typography · Accessibility · Animation · Performance · Deploy · Git. Jangan duplikat; kalau keyword sudah ada, tambahkan lokasi baru di kolom "Dipakai di". -->

## Astro

| Keyword | Topik | Dipakai di | Fase |
|---|---|---|---|
| `astro static output` | Astro | deploy ke Netlify tanpa adapter | 0 |
| `astro fonts api` | Astro | astro.config.mjs (fonts) | 1 |
| `fontProviders.fontshare` | Astro | General Sans | 1 |
| `astro:env envField` | Astro | SHOW_SAMPLES | 1 |
| `astro integration hooks` | Astro | integrations/sample-report.ts | 1 |
| `astro:build:done` | Astro | integrations/sample-report.ts | 1 |
| `astro content collections` | Astro | src/content.config.ts | 1 |
| `glob() loader` | Astro | src/content.config.ts | 1 |
| `astro/zod` | Astro | src/content.config.ts | 1 |
| `ClientRouter` | Astro | BaseLayout.astro | 1 |
| `astro:before-swap` | Astro | ThemeScript.astro | 1 |
| `astro:page-load` | Astro | ThemeToggle, SiteHeader | 1 |
| `astro scoped styles :global()` | Astro | cards, styleguide | 1 |
| `vite ?raw import` | Astro / Vite | styleguide.astro (tokens.css?raw) | 1 |
| `astro file() loader` | Astro | src/content.config.ts (timeline) | 2 |
| `set:text` | Astro | HeroStack (mini code) | 2 |
| `Astro.slots.has` | Astro | ProgressiveFade, CalmCard | 2 |
| `set:html` | Astro | HeroCardFace (kode ter-highlight) | 2 |

## Tailwind / CSS

| Keyword | Topik | Dipakai di | Fase |
|---|---|---|---|
| `animation-timeline view()` | CSS | scroll text reveal (1 paragraf) | 0 |
| `@supports` | CSS | fallback scroll reveal | 0 |
| `css perspective` | CSS | card stack hero | 0 |
| `cubic-bezier(0.22, 1, 0.36, 1)` | CSS | easing card stack (dari wabi) | 0 |
| `background-size underline animation` | CSS | hover card Writing (dari integratedbio) | 0 |
| `css light-dark()` | CSS | tokens.css | 1 |
| `color-scheme` | CSS | tokens.css | 1 |
| `tailwind @theme` | Tailwind | tokens.css (@theme static) | 1 |
| `tailwind @theme inline` | Tailwind | global.css | 1 |
| `tailwind @custom-variant` | Tailwind | global.css (dark) | 1 |
| `css shape() function` | CSS | WritingCard.astro (notch) | 1 |
| `css :has() selector` | CSS | ProjectCard, WritingCard (focus) | 1 |
| `grid-template-rows 0fr 1fr transition` | CSS | SiteHeader (menu mobile) | 1 |
| `backdrop-filter` | CSS | global.css (.glass) | 1 |
| `box-decoration-break` | CSS | WritingCard (underline per baris) | 1 |
| `css clamp()` | CSS | tokens.css (text-step-3..5) | 1 |
| `view-timeline-name` | CSS | StoryReveal | 2 |
| `animation-range` | CSS | StoryReveal | 2 |
| `@media (scripting: enabled)` | CSS | HeroStack deal-in, SiteFooter scatter | 2 |
| `-webkit-line-clamp` | CSS | HeroStack card text, WhereNext hints | 2 |
| `transform-style preserve-3d` | CSS | HeroStack deck | 2 |
| `touch-action pan-y` | CSS | HeroStack (swipe vs scroll) | 2 |
| `mask-image linear-gradient` | CSS | ProgressiveFade | 2 |
| `css clip-path polygon` | CSS | HeroCardFace (selotip sobek) | 2 |
| `repeating-linear-gradient` | CSS | HeroCardFace (selotip, kertas bergaris) | 2 |
| `overflow: clip` | CSS | Hero (frame di mobile) | 2 |

## Design / Typography

| Keyword | Topik | Dipakai di | Fase |
|---|---|---|---|
| `font-display swap` | Typography | Instrument Serif, General Sans | 0 |
| `self-host fonts` | Typography | folder font lokal | 0 |
| `ITF Free Font License` | Typography | lisensi General Sans (Fontshare) | 0 |
| `font preload` | Typography | BaseLayout (<Font preload>) | 1 |
| `text-wrap balance` | Typography | global.css (h1–h3) | 1 |
| `svg feTurbulence` | Illustration | SketchFilter.astro | 1 |
| `feDisplacementMap` | Illustration | SketchFilter.astro | 1 |
| `svg textPath` | Illustration | Sticker | 2 |
| `svg feColorMatrix` | Illustration | SkyBackdrop (clouds) | 2 |
| `svg mask halftone` | Illustration | SkyBackdrop | 2 |
| `seeded PRNG mulberry32` | Illustration | SkyBackdrop (stars) | 2 |
| `fontsource caveat` | Typography | Catatan tangan di card hero | 2 |
| `svg feTurbulence data uri` | Illustration | HeroStack (tekstur kertas) | 2 |
| `mix-blend-mode multiply` | Illustration | HeroStack (tekstur kertas) | 2 |

## Accessibility

| Keyword | Topik | Dipakai di | Fase |
|---|---|---|---|
| `wcag 2.2.2 pause stop hide` | A11y | card stack hero | 0 |
| `aria-roledescription carousel` | A11y | card stack hero | 0 |
| `aria-hidden` | A11y | lapisan efek scroll reveal | 0 |
| `pointer events` | A11y / JS | drag card stack (pointerdown/move/up) | 0 |
| `wcag 1.4.3 contrast` | A11y | scripts/contrast.ts | 1 |
| `relative luminance` | A11y | src/lib/contrast.ts | 1 |
| `stretched link pattern` | A11y | ProjectCard, WritingCard | 1 |
| `skip link` | A11y | BaseLayout.astro | 1 |
| `visually hidden clip-path inset(50%)` | A11y | BaseLayout (skip link) | 1 |
| `disclosure pattern aria-expanded` | A11y | SiteHeader (menu mobile) | 1 |
| `:focus-visible` | A11y | global.css | 1 |
| `wcag 2.5.5 target size` | A11y | nav, tombol 44px | 1 |
| `inert attribute` | A11y | HeroStack (back cards) | 2 |
| `aria-live polite` | A11y | Hero phrase | 2 |
| `wcag 4.1.3 status messages` | A11y | Hero phrase | 2 |
| `sr-only opens in a new tab` | A11y | Hero proof link | 2 |

## Animation

| Keyword | Topik | Dipakai di | Fase |
|---|---|---|---|
| `View Transition API startViewTransition` | Animation | ThemeToggle.astro | 1 |
| `prefers-reduced-motion` | Animation | tokens.css (--dur-* = 0ms) | 1 |
| `css linear() easing` | Animation | tokens.css (--ease-spring) | 1 |
| `spring animation damping ratio` | Animation | --ease-spring (zeta 0.72) | 1 |
| `@media (hover: hover)` | Animation / CSS | Button, ProjectCard, WritingCard | 1 |
| `clip-path inset() transition` | Animation | Button secondary fill | 1 |
| `text-underline-offset transition` | Animation | global.css (.link) | 1 |
| `transition-delay stagger` | Animation | SiteHeader menu, ProjectArt | 1 |
| `::view-transition-new(root)` | Animation | ThemeToggle (circle reveal) | 1 |
| `element.animate() pseudoElement` | Animation | ThemeToggle | 1 |
| `view-transition-name` | Animation | global.css (theme switching) | 1 |
| `astro transition:name` | Astro | SiteHeader (nav-indicator), BaseLayout (page-main) | 1 |
| `astro transition:animate` | Astro | SiteHeader (none), BaseLayout (custom) | 1 |
| `TransitionDirectionalAnimations` | Astro | src/lib/motion.ts | 1 |
| `::view-transition-group()` | Animation | global.css (nav-indicator) | 1 |
| `setPointerCapture` | Animation / JS | HeroStack drag | 2 |
| `IntersectionObserver` | Animation / JS | SiteFooter scatter | 2 |
| `requestAnimationFrame` | Animation / JS | SiteFooter pointer drift | 2 |
| `depth of field blur opacity` | Animation | SiteFooter floaters | 2 |

## Performance / SEO

| Keyword | Topik | Dipakai di | Fase |
|---|---|---|---|
| `largest contentful paint` | Performance | trace Fase 1 (1.43 s) | 1 |
| `render-blocking resources` | Performance | catatan Fase 6 | 1 |
| `meta robots noindex` | SEO | /styleguide | 1 |
| `open graph meta tags` | SEO | BaseLayout.astro | 1 |

## Deploy / Tooling

| Keyword | Topik | Dipakai di | Fase |
|---|---|---|---|
| `netlify forms` | Deploy | form kontak | 0 |
| `netlify.toml` | Deploy | konfigurasi deploy | 0 |
| `GoatCounter` | Analytics | usulan analytics gratis (belum diputuskan) | 0 |
| `prettier-plugin-astro` | Tooling | .prettierrc.mjs | 1 |
| `prettier-plugin-tailwindcss` | Tooling | .prettierrc.mjs | 1 |
| `.gitattributes eol=lf` | Git | .gitattributes | 1 |
| `conventional commits` | Git | riwayat commit | 1 |
| `node type stripping` | Tooling | scripts/contrast.ts | 1 |
| `typescript types compiler option` | Tooling | tsconfig.json (TS 6) | 1 |

