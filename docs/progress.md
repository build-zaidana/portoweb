# Progress Log

> Diperbarui Claude Code di akhir setiap fase (lewat `/gate`). Dibaca di awal setiap sesi (lewat `/resume`).

## Status

| Fase | Nama | Status |
|---|---|---|
| 0 | Review & rencana | ✅ Selesai (Gate 0, 2026-09-25) |
| 1 | Fondasi | 🟡 Selesai, menunggu "lanjut" (Gate 1) |
| 2 | Home + About | ⏳ |
| 3 | Halaman lain | ⏳ |
| 4 | Copywriting | ⏳ |
| 5 | 3 proyek pertama | ⏳ |
| 6 | Launch | ⏳ |

## Keputusan final

- 2026-09-24 — Bahasa situs: English. Komunikasi dengan user: Bahasa Indonesia.
- 2026-09-24 — Palet warna di PRD §8 = pilihan, tidak wajib dipakai semua.
- 2026-09-24 — Proyek & tulisan memakai dummy berlabel "Sample" sampai konten asli siap.
- 2026-09-24 — Stack: Astro + Tailwind, Markdown, hosting gratis.
- 2026-09-25 — Host: **Netlify** (Netlify Forms untuk form kontak).
- 2026-09-25 — Font heading: **Instrument Serif**. Body: General Sans. Kode: JetBrains Mono.
- 2026-09-25 — Foto diri: **ada, hanya di About**, bingkai persegi bersudut. Placeholder dulu.
- 2026-09-25 — Domain: **ditunda**, pakai `*.netlify.app` dulu.
- 2026-09-25 — 5 usulan review PRD disetujui: sample dikecualikan dari production (flag `SHOW_SAMPLES`), bukti non-sample di layar pertama, logistik remote, analytics gratis tanpa cookie (F8), target 2 tulisan/bulan.

## Log

<!-- Format per fase:
### Fase N — Nama (YYYY-MM-DD)
**Selesai:** ...
**Keputusan:** 🔑 ... — keyword · keyword
**Tertunda:** ...
**Catatan untuk fase berikutnya:** ...
-->

### Fase 0 — Review & rencana (2026-09-25)
**Selesai:**
- Review kritis PRD, menghasilkan 5 usulan perubahan (lihat bagian *Tertunda*).
- 19 screenshot referensi dianalisis. Motion wabi.ai, lovi.care, dan integratedbio.com diukur langsung via Playwright, lalu hasilnya dicatat di `docs/references/README.md`.
- 4 pertanyaan terbuka PRD §10 dijawab user. PRD §8 dan §10 sudah diperbarui.
- Rencana Fase 1–6 disusun.

**Keputusan:**
- 🔑 Netlify sebagai host — netlify forms · astro static output · netlify.toml
- 🔑 Instrument Serif hanya untuk display ≥ 28px — font-display swap · self-host fonts · @fontsource
- 🔑 Card stack hero TANPA autoplay (mengikuti wabi yang asli), jadi syarat tombol pause tidak berlaku. Garis progres origin dipakai sebagai indikator posisi, bukan timer — wcag 2.2.2 pause stop hide · aria-roledescription carousel
- 🔑 Scroll reveal per kata (bukan per huruf seperti lovi) — animation-timeline view() · @supports · aria-hidden

**Usulan PRD (disetujui user "setuju 1–5", sudah diterapkan di PRD):**
1. F3 bertabrakan dengan rilis v1 → usulan: entri sample *dikecualikan* dari production, tampil hanya di dev/preview (flag env).
2. Tambah persyaratan "bukti nyata di layar pertama": minimal 1 link non-sample (GitHub profile / repo latihan asli).
3. Tambah detail "apa yang dicari" untuk Rian: peran, zona waktu (UTC+7) & jam overlap, ketersediaan, jam/minggu.
4. Sinyal G1 "link CV diklik" tidak bisa dicek tanpa analytics → usulan analytics gratis tanpa cookie (GoatCounter / Cloudflare Web Analytics), atau metriknya dihapus.
5. Target G2 "≥ 1 tulisan/minggu" berisiko → usulan 2 tulisan/bulan + Now bulanan, dan tanggal ditampilkan jelas.

**Catatan untuk fase berikutnya:**
- Fase 1 harus membandingkan krem `#F5F1EB` vs warm-neutral yang lebih abu, dan dark `#1E1E1E` vs hitam kehijauan hangat, lalu hitung kontras semua pasangan teks.
- General Sans dari Fontshare: cek lisensi self-host (ITF Free Font License) sebelum memasukkan file font ke repo.
- Folder belum jadi repo git. `git init` dilakukan di awal Fase 1.

### Fase 1 — Fondasi (2026-09-25)
**Selesai:**
- Repo git + scaffold Astro 7.3 + Tailwind 4.3 (Vite plugin), TypeScript strict (TS 6), Prettier (+ plugin Astro & Tailwind), `.gitattributes` LF.
- Design tokens light/dark di `src/styles/tokens.css` memakai `light-dark()`. Skrip `npm run contrast` dan tabel di /styleguide dihitung dari file yang sama (40 pasangan, semua ≥ 4.5:1).
- Font self-host lewat Astro Fonts API: Instrument Serif, General Sans (Fontshare), JetBrains Mono.
- Theme toggle tanpa flash (inline script + `astro:before-swap`): tersimpan, ikut OS bila belum memilih, crossfade View Transition.
- Content Collections `projects` / `writing` / `now` (Zod) + field `sample`. Guard ada di `src/lib/content.ts`, dan integrasi build melaporkan entri sample.
- Komponen: BaseLayout (meta/OG/ClientRouter/skip link), SiteHeader (nav pil kaca + menu mobile), ThemeToggle, Button (primary/secondary/glass), StatusChip, SampleBadge, SketchIcon (+ filter goresan), 3 card (ProjectCard + ProjectArt, WritingCard notch, CalmCard).
- Halaman `/styleguide` (noindex) + home placeholder yang jujur.
- Konten sample sesuai PRD §9: 3 proyek, 2 tulisan, 1 Now.
- Kritik `design-critic` (7/10): temuan Tinggi & Sedang sudah diperbaiki (ikon lebih "sketsa", ilustrasi berbeda per proyek, card featured, tint-sky gelap menjauhi navy, target nav 44px).
- Lighthouse (mobile, build production): `/` A11y 100 · BP 100 · SEO 100. `/styleguide` A11y 100 · BP 100 · SEO 63 (sengaja `noindex`). Trace Slow 4G + CPU 4×: LCP 1.43 s, CLS 0.

**Keputusan:**
- 🔑 Token warna ditulis sekali dengan `light-dark()` — css light-dark() · color-scheme · css custom properties
- 🔑 Token statis di `@theme static`, warna di `@theme inline` — tailwind @theme · tailwind @theme inline · tailwind theme variables
- 🔑 Kontras dihitung dari tokens.css saat build — wcag 1.4.3 contrast · relative luminance · vite ?raw import
- 🔑 Font self-host lewat Fonts API — astro fonts api · fontProviders.fontshare · font preload
- 🔑 Sample dikecualikan di production, bukan build gagal — astro:env envField · astro integration hooks · astro:build:done
- 🔑 Tema tanpa flash — astro:before-swap · localStorage · prefers-color-scheme
- 🔑 Notch card dengan `clip-path: shape()` + fallback — css shape() function · @supports · clip-path
- 🔑 Card bisa diklik tanpa membungkus seluruh card dengan `<a>` — stretched link pattern · css :has() selector · :focus-visible
- 🔑 Menu mobile tumbuh tanpa JS yang mengukur tinggi — grid-template-rows 0fr 1fr transition · aria-expanded · disclosure pattern
- 🔑 Ikon placeholder bergaya sketsa — svg feTurbulence · feDisplacementMap · stroke-linecap round

**Tertunda:**
- OG image default (`/og-default.png`) belum dibuat. `og:image` untuk sementara dihilangkan, bukan dibiarkan rusak → Fase 6.
- `/projects`, `/writing`, `/now`, `/about`, `/contact` masih 404 (terlihat lewat link nav + prefetch) → Fase 2–3.
- CSS render-blocking (±550 ms di Slow 4G) → evaluasi `build.inlineStylesheets` di Fase 6.
- Ikon final digambar user sendiri (placeholder sudah satu gaya).
- `shape()` belum ada di browser lama. Fallback card biasa sudah ada, cek ulang di Fase 6.

**Catatan untuk fase berikutnya:**
- Hero (Fase 2): card stack memakai `--ease-out` + token durasi. Isi card = konten sample/asli dari collections. Tidak autoplay.
- Pakai `getProjects()/getWriting()` dari `src/lib/content.ts`, jangan `getCollection()` langsung.
- Pasangan warna teks baru → tambahkan ke `TEXT_PAIRS` dulu.
- Label monospace hanya boleh di /styleguide.
