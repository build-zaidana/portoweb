# ARCHITECTURE — Zaidana Studio

> **Bagaimana** situs ini dibangun. *Apa* dan *kenapa* ada di `PRD.md`. Dokumen ini dirawat Claude Code dan diperbarui di akhir setiap fase.
> Terakhir diperbarui: Fase 2 (2026-09-25).

## 1. Stack

| Bagian | Pilihan | Versi (saat Fase 1) |
|---|---|---|
| Framework | Astro, output **static** | 7.3 |
| Styling | Tailwind CSS 4 lewat `@tailwindcss/vite` + CSS scoped per komponen | 4.3 |
| Bahasa | TypeScript `astro/tsconfigs/strict` (TS 6) | 6.0 |
| Konten | Markdown + Content Collections (`glob()` loader, Zod 4 dari `astro/zod`) | — |
| Font | Astro Fonts API (diunduh saat build, di-self-host): Instrument Serif, General Sans, JetBrains Mono, Caveat | — |
| Format | Prettier + `prettier-plugin-astro` + `prettier-plugin-tailwindcss` | 3.9 |
| Host | Netlify (Fase 6) | — |
| Node | ≥ 22.12 (dev: 24) | — |

## 2. Struktur folder

```
.
├── astro.config.mjs        # site URL, Fonts API, env schema (SHOW_SAMPLES), integrasi, Tailwind
├── integrations/
│   └── sample-report.ts    # log build: daftar entri sample + apakah ikut build ini
├── scripts/
│   └── contrast.ts         # `npm run contrast`: tabel kontras WCAG dari tokens.css (exit 1 jika gagal)
├── public/                 # file statis apa adanya (favicon.svg)
├── src/
│   ├── content.config.ts   # schema Zod untuk collections: projects, writing, now
│   ├── content/            # SEMUA konten Markdown (lihat §5)
│   │   ├── projects/
│   │   ├── writing/
│   │   ├── now/
│   │   └── timeline.yaml # milestones /about (file() loader)
│   ├── lib/                # TypeScript murni, tanpa UI
│   │   ├── content.ts      # SATU-SATUNYA cara halaman membaca konten (guard sample + sort)
│   │   ├── contrast.ts     # parser token + rumus kontras (dipakai /styleguide & script)
│   │   ├── format.ts       # format tanggal
│   │   ├── hero.ts         # card untuk hero stack (dari collections + card "This site")
│   │   ├── motion.ts       # animasi transisi <main> antar halaman
│   │   └── site.ts         # nama situs, nav, `profile` (fakta yang boleh diklaim)
│   ├── styles/
│   │   ├── tokens.css      # design tokens (sumber tunggal)
│   │   └── global.css      # import Tailwind + mapping token → utility + base + komponen global
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head> (meta/OG/font/tema/ClientRouter), header, main, footer
│   ├── components/
│   │   ├── ThemeScript.astro # script inline anti-flash
│   │   ├── ThemeToggle.astro
│   │   ├── SiteHeader.astro  # nav pil + menu mobile
│   │   ├── SiteFooter.astro
│   │   ├── WhereNext.astro   # 4 pintu navigasi (daylight), dipakai di About
│   │   ├── Newsletter.astro  # akhir Home + setiap artikel; status jujur sampai Buttondown ada
│   │   ├── ProjectFigure.astro # gambar proyek + callout beranotasi (lovi)
│   │   ├── ui/               # Button, BackLink, StatusChip, SampleBadge, SketchIcon, SketchFilter, LabelStrip, ProgressiveFade
│   │   ├── cards/            # ProjectCard + ProjectArt (craft), WritingCard (notch), CalmCard (letters)
│   │   └── home/             # Hero, HeroStack (perilaku), HeroCardFace (isi card notebook), SkyBackdrop, StoryReveal
│   └── pages/              # routing berbasis file
│       ├── index.astro     # Home
│       ├── about.astro
│       ├── projects/       # index (daftar + filter status), [slug] (write-up + callout + outline)
│       ├── writing/        # index (per tahun), [slug] (artikel)
│       ├── now.astro       # surat bulanan + arsip
│       ├── contact.astro   # Netlify Forms; contact/thanks.astro untuk POST tanpa JS
│       ├── 404.astro
│       ├── rss.xml.ts      # @astrojs/rss dari lib/content (guard sample ikut berlaku)
│       └── styleguide.astro
├── public/cv-placeholder.pdf  # PRD F7, diganti CV asli
└── docs/                   # progress, keywords, referensi, screenshots per fase
```

**Aturan penempatan:** komponen yang dipakai di lebih dari 1 halaman → `components/`. Logika tanpa markup → `lib/`. Teks yang dipakai berulang (nama, nav) → `lib/site.ts`, bukan di-hardcode.

## 3. Data flow konten

```
src/content/**/*.md
   │  (glob loader, divalidasi schema Zod di content.config.ts; frontmatter salah = build gagal)
   ▼
astro:content  getCollection()
   │
   ▼
src/lib/content.ts   getVisibleEntries() / getProjects() / getWriting() / getLatestNow()
   │  • sample: true  → hanya tampil di `astro dev` atau jika SHOW_SAMPLES=true
   │  • draft: true   → disembunyikan di production (writing)
   │  • urutan default: terbaru dulu (projects: featured dulu)
   ▼
pages/*.astro  →  components/cards/*  →  HTML statis
```

Paralel dengan itu, `integrations/sample-report.ts` membaca frontmatter langsung dari disk saat `astro:build:done` dan mencetak daftar file sample yang masih ada (PRD F3).

**Jangan** memanggil `getCollection()` langsung dari halaman: guard sample bisa terlewat.

**Fakta tentang Zaidana** (peran, negara, zona waktu, GitHub, CV) hanya diambil dari `profile` di `src/lib/site.ts`. Klaim baru harus ditambahkan di sana dulu (sumber: PRD §1/§4 atau jawaban user).

**Hero stack:** `getHeroCards()` mengambil proyek teratas, entri /now terbaru, dan tulisan terbaru, lalu selalu menambahkan card asli "This site". Kata kerja kalimat hero mengikuti status proyek (idea → planning, building → building, shipped → improving). Field opsional `phrase` di proyek/tulisan dipakai untuk kalimat, dengan fallback judul berkutip. Kalau card depan adalah sample, kalimatnya ikut berlabel Sample.

**Isi card (notebook):** card adalah halaman kertas dot-grid tanpa garis margin (`HeroStack`). `HeroCardFace` menggambar isi spesifik per jenis card sebagai "printout" lurus, ditambah checklist (progres situs dari `siteProgress` di `site.ts`, topik belajar lain dari /now) yang disembunyikan di layar < 768px. Field opsional di konten: `heroNote` (catatan tangan, proyek/tulisan/now), `highlight` (frasa yang distabilo di paragraf pembuka artikel, diambil otomatis dari body), `snippet` (kode di entri /now). Tanpa field itu, card tetap tampil tanpa elemen tersebut.

## 4. Design tokens

Sumber tunggal: `src/styles/tokens.css`. Ada 2 jenis token:

| Jenis | Ditulis di | Contoh | Kenapa |
|---|---|---|---|
| Berubah per tema (warna) | `:root { --x: light-dark(#light, #dark) }` | `--paper`, `--ink`, `--accent` | Satu deklarasi untuk dua mode. Tanpa JS pun ikut tema OS lewat `color-scheme: light dark` |
| Statis | `@theme static { … }` | `--font-display`, `--text-step-3`, `--radius-lg`, `--ease-out` | Tailwind langsung membuat utility (`font-display`, `text-step-3`, `rounded-lg`) dan variabelnya tetap tersedia untuk CSS komponen |

Warna dipetakan ke utility Tailwind di `global.css` lewat `@theme inline` (`bg-paper`, `text-ink-soft`, …). Durasi animasi (`--dur-1…4`) ada di `:root` dan otomatis **0ms** saat `prefers-reduced-motion: reduce`.

### Palet

| Peran | Token | Light | Dark |
|---|---|---|---|
| Halaman | `--paper` | `#f3f1ec` warm-neutral (lebih abu dari krem AI `#F4F1EA`) | `#161915` malam kehijauan |
| Card calm | `--surface` | `#e6e1d7` batu hangat, satu langkah jelas dari halaman | `#1f231e` |
| Panel, nav | `--surface-raised` | `#fdfcf9` | `#292e28` |
| Teks | `--ink` / `--ink-soft` | `#2a2a2a` / `#5c5a55` | `#eceae4` / `#a8a79e` |
| Aksen teks (link, focus) | `--accent` | `#4a5d44` sage tua | `#aec2a5` sage muda |
| Aksen permukaan | `--sage` `--sky` `--tan` | `#8b9d83` `#a8c5d6` `#c9a88c` | sama / sedikit lebih terang |
| Teks di atas isian aksen | `--on-fill` | `#2a2a2a` | `#161915` |
| Card proyek | `--surface` (batu hangat, sama untuk semua card; warna dari ilustrasi + chip status) | `#e6e1d7` | `#1f231e` |
| Tint chip card hero | `--tint-sage/sky/tan` | pastel terang | versi gelap berwarna |
| Strip label | `--tape` + `--on-tape` | `#1c1c1a` / `#f1efe9` | sama (plastik hitam) |
| Card tulisan gelap | `--deep-sage`, `--deep-ink` + `--on-deep(-soft)` | `#3e4b39`, `#2a2a2a` | `#33402f`, `#332c25` (selalu lebih terang dari halaman) |

Sage = aksen utama, sky = pendukung, tan = isian hover yang hangat. **Tidak ada navy/biru tua.** `--sage`, `--sky`, dan `--tan` terlalu terang untuk teks, jadi hanya dipakai sebagai permukaan (sesuai CLAUDE.md).

### Kontras (dihasilkan `npm run contrast`, juga tampil di `/styleguide`)

| Mode | Text | Background | Ratio | AA | Usage |
|---|---|---|---|---|---|
| light | `--ink` | `--paper` | 12.72:1 | ✅ | Body text, headings |
| light | `--ink-soft` | `--paper` | 6.10:1 | ✅ | Secondary text, meta |
| light | `--accent` | `--paper` | 6.33:1 | ✅ | Links, focus ring |
| light | `--ink` | `--surface` | 11.02:1 | ✅ | Text on calm cards, project cards |
| light | `--ink-soft` | `--surface` | 5.29:1 | ✅ | Secondary text on calm and project cards |
| light | `--ink` | `--surface-raised` | 13.99:1 | ✅ | Nav, raised panels |
| light | `--on-tape` | `--tape` | 14.84:1 | ✅ | Label strip (hero) |
| light | `--ink` | `--tint-sage` | 11.39:1 | ✅ | Hero card chip (sage) |
| light | `--ink` | `--tint-sky` | 11.73:1 | ✅ | Hero card chip (sky) |
| light | `--ink` | `--tint-tan` | 11.45:1 | ✅ | Hero card chip (tan) |
| light | `--on-deep` | `--deep-sage` | 8.26:1 | ✅ | Writing card (deep sage) |
| light | `--on-deep` | `--deep-ink` | 12.81:1 | ✅ | Writing card (charcoal) |
| light | `--on-deep-soft` | `--deep-sage` | 5.40:1 | ✅ | Writing card meta (deep sage) |
| light | `--on-deep-soft` | `--deep-ink` | 8.37:1 | ✅ | Writing card meta (charcoal) |
| light | `--paper` | `--ink` | 12.72:1 | ✅ | Primary button label |
| light | `--accent` | `--tint-sky` | 5.84:1 | ✅ | Handwritten notes on hero cards (sky) |
| light | `--accent` | `--tint-sage` | 5.67:1 | ✅ | Handwritten notes on hero cards (sage) |
| light | `--accent` | `--tint-tan` | 5.70:1 | ✅ | Handwritten notes on hero cards (tan) |
| light | `--accent` | `--surface-raised` | 6.96:1 | ✅ | Code keywords |
| light | `--code-type` | `--surface-raised` | 5.69:1 | ✅ | Code type names and numbers |
| light | `--on-fill` | `--sage` | 4.95:1 | ✅ | Text on sage fill (hover states) |
| light | `--on-fill` | `--sky` | 7.94:1 | ✅ | Arrow button on sky |
| light | `--on-fill` | `--tan` | 6.47:1 | ✅ | Hover fill on tan |
| dark | `--ink` | `--paper` | 14.74:1 | ✅ | Body text, headings |
| dark | `--ink-soft` | `--paper` | 7.34:1 | ✅ | Secondary text, meta |
| dark | `--accent` | `--paper` | 9.34:1 | ✅ | Links, focus ring |
| dark | `--ink` | `--surface` | 13.25:1 | ✅ | Text on calm cards, project cards |
| dark | `--ink-soft` | `--surface` | 6.59:1 | ✅ | Secondary text on calm and project cards |
| dark | `--ink` | `--surface-raised` | 11.52:1 | ✅ | Nav, raised panels |
| dark | `--on-tape` | `--tape` | 14.84:1 | ✅ | Label strip (hero) |
| dark | `--ink` | `--tint-sage` | 12.29:1 | ✅ | Hero card chip (sage) |
| dark | `--ink` | `--tint-sky` | 12.83:1 | ✅ | Hero card chip (sky) |
| dark | `--ink` | `--tint-tan` | 12.71:1 | ✅ | Hero card chip (tan) |
| dark | `--on-deep` | `--deep-sage` | 9.11:1 | ✅ | Writing card (deep sage) |
| dark | `--on-deep` | `--deep-ink` | 11.43:1 | ✅ | Writing card (charcoal) |
| dark | `--on-deep-soft` | `--deep-sage` | 5.37:1 | ✅ | Writing card meta (deep sage) |
| dark | `--on-deep-soft` | `--deep-ink` | 6.73:1 | ✅ | Writing card meta (charcoal) |
| dark | `--paper` | `--ink` | 14.74:1 | ✅ | Primary button label |
| dark | `--accent` | `--tint-sky` | 8.13:1 | ✅ | Handwritten notes on hero cards (sky) |
| dark | `--accent` | `--tint-sage` | 7.79:1 | ✅ | Handwritten notes on hero cards (sage) |
| dark | `--accent` | `--tint-tan` | 8.05:1 | ✅ | Handwritten notes on hero cards (tan) |
| dark | `--accent` | `--surface-raised` | 7.30:1 | ✅ | Code keywords |
| dark | `--code-type` | `--surface-raised` | 7.65:1 | ✅ | Code type names and numbers |
| dark | `--on-fill` | `--sage` | 6.12:1 | ✅ | Text on sage fill (hover states) |
| dark | `--on-fill` | `--sky` | 10.90:1 | ✅ | Arrow button on sky |
| dark | `--on-fill` | `--tan` | 9.79:1 | ✅ | Hover fill on tan |

Pasangan baru **wajib** ditambahkan ke `TEXT_PAIRS` di `src/lib/contrast.ts` sebelum dipakai. Jangan memakai `color-mix()` untuk warna **teks**, karena hasilnya tidak bisa diverifikasi skrip. `color-mix()` hanya boleh untuk latar dan dekorasi.

### Tipografi

| Token | Ukuran | Font | Dipakai untuk |
|---|---|---|---|
| `text-step-5` | 56 → 128px (fluid) | Instrument Serif | Hero, wordmark footer |
| `text-step-4` | 44 → 76px | Instrument Serif | Judul halaman |
| `text-step-3` | 32 → 44px | Instrument Serif | Judul section |
| `text-step-2` | 30px | Instrument Serif | Judul card |
| `text-step-1` | 20px | General Sans | Lead |
| `text-step-0` | 17px / 1.6 | General Sans | Body |
| `text-step--1` | 14px | General Sans | Meta, tombol, chip |

Instrument Serif hanya punya satu bobot yang tipis, jadi **tidak dipakai di bawah 30px** (pengecualian: judul card hero 24–28px). **Caveat** (`--font-hand`) hanya untuk catatan tangan di card hero, tidak untuk teks lain. JetBrains Mono **hanya untuk kode**, tidak untuk label (anti-slop).

### Radius, elevasi, motion

- Radius mengikuti hierarki: `sm` 8px (chip) · `md` 14px (mini-UI, tile) · `lg` 22px (card) · `xl` 32px (card calm/proyek) · pill (tombol, nav).
- Elevasi: light mode memakai `--shadow-lift` (bayangan hangat, hanya untuk yang "terangkat"). Dark mode memakai kecerahan permukaan, dan `--shadow-tint` bernilai transparan.
- Motion: lihat §6b.
- Efek kaca (`.glass`) **hanya** untuk nav pil dan CTA utama.

## 5. Cara menambah konten

**Artikel baru:** buat `src/content/writing/<slug>.md`. URL-nya akan menjadi `/writing/<slug>`.

```md
---
title: Judul (maks 90 karakter)
description: 1 kalimat (maks 180)
publishedAt: 2026-10-01
tags: [learning]
draft: false # true = tidak tampil di production
---

Isi artikel…
```

**Proyek baru:** buat `src/content/projects/<slug>.md` dengan field `title`, `summary`, `status` (`idea | building | shipped`), `stack`, `startedAt`, `tint` (`sage | sky | tan`, hanya untuk chip card hero; card proyek selalu `--surface`), dan opsional `updatedAt`, `repo`, `demo`, `featured`, `callouts` (2–4 anotasi: `label`, `note`, `x`/`y` = persen dari kotak ilustrasi, `side: left|right`). Body memakai heading **Problem → Approach → Result → Learnings** (heading `##` otomatis menjadi outline "On this page").

**Update /now:** buat file baru per bulan `src/content/now/YYYY-MM.md` (field `month`, `learning`, `building`, `reading`). Entri terbaru otomatis menjadi /now.

**Mengganti konten sample:** hapus file dengan `sample: true` (daftarnya dicetak setiap `npm run build`), lalu tulis file asli **tanpa** field `sample`.

## 6. Tema (light/dark)

1. `ThemeScript.astro` (inline, di `<head>`) mengisi `<html data-theme>` dari `localStorage.theme`, atau dari preferensi OS jika belum ada pilihan, **sebelum** halaman digambar. Karena itu tidak ada flash.
2. Saat navigasi ClientRouter, event `astro:before-swap` mengisi tema ke dokumen baru sebelum ditukar.
3. `ThemeToggle.astro` menyimpan pilihan dan memakai `document.startViewTransition` untuk crossfade (dilewati saat reduced motion).
4. Tanpa JS, `color-scheme: light dark` membuat `light-dark()` mengikuti OS.

## 6b. Motion

Semua gerakan dipicu user, kecuali dua momen yang diorkestrasi dan satu reveal yang digerakkan scroll:
1. **Pembuka (Home):** kata-kata hero naik pelan (3 blok), lalu card "dibagikan" ke tumpukan satu per satu (`HeroStack`, `@media (scripting: enabled)`).
2. **Penutup (Home):** card kecil berhamburan dari tengah **sekali** saat section penutup pertama kali terlihat (IntersectionObserver). Setelah itu hanya bergeser sedikit mengikuti pointer, dan hanya saat terlihat.
3. **Scroll reveal (Home, satu paragraf):** CSS `animation-timeline: view()`, tanpa JS, penuh tinta sebelum posisi baca.

Card stack **tidak pernah autoplay**. Durasi 150–400ms. `prefers-reduced-motion` membuat semua `--dur-*` bernilai 0ms, transform hover/press dimatikan, dan ClientRouter menonaktifkan transisi halaman.

| Token | Nilai | Dipakai untuk |
|---|---|---|
| `--dur-1` | 150ms | Tekan (press down), perubahan warna cepat |
| `--dur-2` | 240ms | Warna & bayangan saat hover |
| `--dur-3` | 320ms | Buka/tutup, underline, isian tombol |
| `--dur-4` | 400ms | Lift, perjalanan card, reveal tema, konten halaman masuk |
| `--ease-spring` | `linear()` pegas teredam (ζ 0.72, overshoot ±4%) | Lift, lepas tekan, pil nav |
| `--ease-out` | `cubic-bezier(.22,1,.36,1)` (diukur dari wabi.ai) | Warna, fade, konten masuk |
| `--ease-soft` | `cubic-bezier(.25,1,.5,1)` (integratedbio) | Warna tile di card tulisan |
| `--ease-in-out` | `cubic-bezier(.65,0,.35,1)` | Reveal tema, kilau kaca |

**Model interaksi (sama di semua komponen):** hover → naik 2–6px dengan spring (hanya `@media (hover: hover)`, supaya hover tidak "nyangkut" di layar sentuh). Press → turun dan mengecil ke 97–99% dalam 150ms. Lepas → spring kembali ke posisi awal.

| Interaksi | Implementasi |
|---|---|
| Tombol primary | Lift + bayangan hangat + warna sedikit ke arah sage |
| Tombol secondary | Lift + isian tinta naik dari bawah (`clip-path: inset()`), teks berubah ke `--paper` |
| Tombol glass | Lift + kilau bergerak + bayangan |
| Card proyek | Card naik 6px + bayangan. Panel ilustrasi naik dan meluruskan diri, lapisan belakang menyusul 60ms kemudian |
| Card tulisan | Card naik 4px, underline judul tumbuh (400ms), tile panah masuk ke coakan, panah maju 4px |
| Link teks | Underline naik mendekat ke teks (`text-underline-offset`) + menebal warnanya |
| Ganti tema | View Transition: tema baru menyebar sebagai lingkaran dari tombol (400ms). Selama transisi, transisi CSS lain dibekukan dan semua elemen jadi satu snapshot (`data-theme-switching`) |
| Pindah halaman | Header diam (`transition:animate="none"`). Pil halaman aktif bergeser ke link baru (`transition:name="nav-indicator"`, spring 400ms). `<main>` keluar 160ms naik, masuk 400ms dari bawah (`src/lib/motion.ts`), arah dibalik saat back |
| Menu mobile | Panel tumbuh (`grid-template-rows`), item muncul berurutan 30ms |

## 7. Konvensi

- **Penamaan:** komponen `PascalCase.astro`; modul `lib/` `camelCase.ts`; token CSS `kebab-case`; slug konten `kebab-case` (menjadi URL).
- **Urutan @media:** aturan `@media` yang menimpa harus ditulis **setelah** aturan dasarnya (specificity sama → yang terakhir menang). Bug ini sudah terjadi dua kali (foto About, checklist hero).
- **Styling:** Tailwind untuk layout/spacing sederhana di halaman. Efek kompleks (notch, glass, card) memakai `<style>` scoped di komponen dengan `var(--token)`. Hindari nama kelas yang bentrok dengan utility Tailwind (kasus nyata: `.underline`, `.col-1`/`.col-2` yang di Tailwind 4 menjadi `grid-column`, dan `.outline`).
- **Scan Tailwind:** Tailwind hanya memindai kode. `docs/`, `.claude/`, dan `*.md` di root dikecualikan dengan `@source not` di `global.css`, karena teks dokumentasi sempat menghasilkan ±2 KB kelas CSS yang tidak terpakai.
- **Scoped CSS + komponen anak:** selector yang menargetkan root komponen anak butuh `:global()`. Untuk mengubah warna di dalam komponen anak, gunakan custom property (contoh: `--badge-fg` di `SampleBadge`), bukan selector dari luar.
- **A11y:** satu gaya focus global (`:focus-visible`, outline `--focus`). Target sentuh ≥ 44px. Card yang bisa diklik memakai pola *stretched link* (satu `<a>` di judul, `::after` menutupi card). Skip link memakai pola *visually hidden* (clip).
- **Copy UI:** sentence case, tanpa ALL CAPS, tanpa `→` di teks tombol.
- **Commit:** Conventional Commits (`feat(ui): …`, `fix(tokens): …`, `docs: …`).

## 8. Perintah

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Dev server (sample tampil). Alternatif background: `npx astro dev --background`, hentikan dengan `npx astro dev stop` |
| `npm run build` | `astro check` (TypeScript strict), lalu build static ke `dist/` + laporan sample |
| `SHOW_SAMPLES=true npm run build` | Build preview yang menyertakan sample |
| `npm run contrast` | Tabel kontras WCAG, gagal jika ada pasangan < 4.5:1 |
| `npm run format` / `format:check` | Prettier |

## 9. Keputusan (ADR singkat)

| # | Keputusan | Alasan | Alternatif yang ditolak |
|---|---|---|---|
| 001 | Astro static + Netlify | Situs konten, JS minimal, Netlify Forms untuk kontak tanpa backend | Vercel (form butuh serverless + layanan pihak ketiga) |
| 002 | Tailwind 4 via Vite plugin, token di CSS | Cara resmi Astro ≥ 5.2; token tetap CSS biasa sehingga bisa dipakai di CSS scoped | Integrasi Tailwind 3 (legacy) |
| 003 | `light-dark()` untuk token warna | Satu deklarasi per token, mode tanpa JS gratis, parser kontras sederhana | Blok `[data-theme=dark]` terpisah (duplikasi, mudah tidak sinkron) |
| 004 | Astro Fonts API (Fontsource + Fontshare) | Self-host otomatis, preload, fallback metrik teroptimasi, tanpa request ke pihak ketiga | Unduh zip Fontshare manual / CDN Google Fonts |
| 005 | Sample dikecualikan dari production (bukan build gagal) | v1 berisi dummy tetap bisa di-deploy; preview bisa menyertakan sample lewat `SHOW_SAMPLES` | Build gagal (versi PRD awal, memblokir rilis) |
| 006 | Kontras dihitung dari `tokens.css` saat build | Angka di styleguide/dokumen tidak mungkin berbeda dari CSS asli | Tabel manual di dokumen |
| 007 | Notch card memakai `clip-path: shape()` + `@supports` | Bentuk responsif tanpa SVG/ukuran tetap; browser lama mendapat card biasa | `clip-path: path()` (ukuran piksel tetap), mask berlapis (rumit) |
| 008 | Dark `--deep-ink` coklat hangat, bukan hitam | Di dark mode, yang terangkat harus lebih terang dari halaman (prinsip origin) | Hitam pekat (terlihat seperti lubang) |
| 009 | TS 6: `"types": ["node"]` di tsconfig | TS 6 tidak lagi memuat `@types/*` otomatis; dibutuhkan untuk `integrations/` dan `scripts/` | — |
| 010 | Easing spring via CSS `linear()` | Terasa fisik dan halus tanpa library JS; tetap CSS murni dan ikut reduced motion | Library animasi (Motion/GSAP), menambah JS |
| 011 | Pil nav aktif transparan + View Transition bernama | Pil bisa bergeser antar halaman tanpa menutupi label | Pil hitam solid (label tertutup saat bergeser) |
| 012 | Card hero dari collections + 1 card selalu asli | Hero tidak pernah kosong di production, dan sample tetap mengikuti guard | Card hardcoded di komponen |
| 013 | Kalimat hero dari status + `phrase` + label Sample | Tidak mengklaim ide sebagai "building", grammar tidak rusak oleh judul | Menempel judul mentah |
| 014 | Langit dari SVG filter (bukan gambar) | Orisinal, ringan, otomatis ikut tema lewat token | Foto/ilustrasi awan (aset berlisensi, berat) |
| 015 | Scroll reveal dengan CSS scroll-driven animations | Nol JS, mudah dimatikan, fallback teks penuh | GSAP ScrollTrigger |
| 016 | Timeline sebagai collection `file()` YAML | Satu file mudah diedit, ikut guard sample | Array di halaman (lolos dari guard) |
| 017 | Card hero bergaya notebook dengan isi dari field konten | Personal dan spesifik, tapi tetap data-driven (tidak ada klaim hardcoded) | Skeleton generik (terlalu polos), kolase (bertabrakan dengan tumpukan) |
| 018 | Semua card proyek memakai batu hangat (`--surface`) | Pilihan user setelah mockup: tenang dan disiplin, warna datang dari ilustrasi dan chip status | Tiga pastel per proyek (kusam, acak), warna = status (sempat diterapkan, lalu diganti), kertas notebook (mengulang motif hero), pastel lebih jenuh |
| 019 | Strip label ketikan menggantikan stiker bundar di hero | Lebih khas dan terbaca; diambil dari referensi journaling tanpa membawa gaya scrapbook | Stiker bundar, /now bergaya jurnal (ditolak user: terlalu ramai) |
| 020 | Filter status proyek = radio native + CSS `:has()`; JS hanya untuk pil bergeser & pengumuman | Berfungsi tanpa JS, aksesibel sebagai radio group | Tabs ARIA dengan JS penuh, library filter |
| 021 | Form kontak Netlify Forms dengan progressive enhancement (POST biasa → /contact/thanks; fetch di tempat bila ada JS) | Rp 0, tanpa backend, tetap jalan tanpa JS | Formspree (batas bulanan), serverless function |
| 022 | Blok kode Markdown memakai tema Shiki `css-variables` yang dipetakan ke token | Warna kode ikut light/dark dan kontrasnya terverifikasi skrip | Dua tema Shiki bawaan (warna di luar palet, kontras tidak terkontrol) |
| 023 | /now ditulis seperti surat (kolom sempit, bulan sebagai headline) | Membedakan halaman dari Projects/Writing yang berkerangka sama (review design-critic) | Baris label + ikon seperti Projects, gaya jurnal/scrapbook (ditolak user) |
| 024 | Newsletter & kontak tidak menampilkan yang belum ada (email, sosial, form Buttondown) | Jujur: tidak ada form yang tidak mengirim ke mana-mana | Form placeholder "coming soon" |
| 025 | Proyek asli berstatus `idea` menggantikan sample; label "Added" untuk ide; chip hero memakai status asli | Situs production punya isi nyata tanpa mengklaim pekerjaan yang belum dimulai | Menunggu proyek selesai dulu (situs kosong), tetap memakai sample |
| 026 | AI di proyek dijalankan lokal (Ollama) atau di browser (WebLLM) | Rp 0 dan privasi (catatan pengguna tidak dikirim ke server) | API berbayar, free tier penyedia yang batasnya berubah |
| 029 | Transisi antar halaman top-level mengikuti urutan nav: halaman lama bergeser ke arah asal + blur (180ms), halaman baru masuk dari sisi berlawanan, section-nya bertahap 70ms (`--nav-x`, `data-nav-stagger`, diputuskan di `astro:before-swap` lewat `navMotion()` di lib/motion.ts) | Halaman tanpa elemen bersama tetap terasa menyambung dan punya arah (feedback user) | Fade saja (terasa putus), slide penuh selebar layar (terlalu dramatis untuk nada situs) |
| 028 | Shared element transition: judul proyek/tulisan dan ilustrasi proyek berpindah dari daftar ke detail (`transition:name` + `view-transition-class: morph`); pasangan hanya menampilkan snapshot baru yang diskalakan, elemen tanpa pasangan pudar mengikuti ritme halaman | Transisi terasa menyambung dan bisa diikuti mata; tanpa bayangan ganda | Hanya fade `<main>` (terasa putus), crossfade bawaan (teks ganda saat ukuran berubah) |
| 027 | Lebar konten maks `--page-max: 88rem` + `--gutter: clamp(1.25rem, 5vw - 0.5rem, 6rem)` | Di 1920px, batas lama 76rem menyisakan ±36% layar kosong (feedback user); tepi tetap lega di 1440 (64px) dan 20px di HP | Tetap 76rem, full-bleed tanpa batas |
