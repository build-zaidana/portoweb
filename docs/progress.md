# Progress Log

> Diperbarui Claude Code di akhir setiap fase (lewat `/gate`). Dibaca di awal setiap sesi (lewat `/resume`).

## Status

| Fase | Nama | Status |
|---|---|---|
| 0 | Review & rencana | ✅ Selesai (Gate 0, 2026-09-25) |
| 1 | Fondasi | ✅ Selesai (Gate 1, 2026-09-25) |
| 2 | Home + About | 🟡 Selesai, menunggu "lanjut" (Gate 2) |
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
- 2026-09-25 — Hero: konsep **A (card stack) + baris logistik** dari C.
- 2026-09-25 — Zona waktu **WIB (UTC+7)**. Jam/minggu & tanggal mulai **tidak ditampilkan** (belum pasti).
- 2026-09-25 — Bukti non-sample di layar pertama: **github.com/build-zaidana**.
- 2026-09-25 — Nav memakai "Projects" (bukan "Work") supaya konsisten dengan URL & tombol.
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

#### Revisi setelah review user (2026-09-25)
User: animasi terasa kaku di semua bagian (tombol, card, ganti tema, pindah halaman) + setuju memperbaiki light mode dan ukuran judul card.
- Sistem motion baru: easing spring `linear()`, model hover-lift / press / release yang sama di semua komponen, hover hanya di perangkat pointer.
- Tombol: lift + press spring; secondary terisi tinta dari bawah; primary dapat bayangan.
- Card proyek naik 6px + panel ilustrasi bergerak bertahap; card tulisan naik 4px + tile masuk ke coakan.
- Ganti tema: tema baru menyebar melingkar dari tombol (View Transition), transisi lain dibekukan selama pergantian.
- Pindah halaman: header diam, pil halaman aktif bergeser ke link baru, konten keluar/masuk dengan arah.
- Light mode lebih hangat: `--surface` batu hangat `#e6e1d7` (jarak jelas dari halaman), `--paper` `#f3f1ec`. Judul card 26 → 30px.
- 🔑 Easing pegas tanpa library — css linear() easing · spring animation damping ratio
- 🔑 Tema menyebar dari tombol — ::view-transition-new(root) · element.animate() pseudoElement · view-transition-name
- 🔑 Header diam, pil aktif bergeser — astro transition:name · astro transition:animate · ::view-transition-group()
- 🔑 Hover tidak nyangkut di HP — @media (hover: hover) · clip-path inset() transition

### Fase 2 — Home + About (2026-09-25)
**Selesai:**
- 3 wireframe hero (`docs/wireframes/hero-concepts.html`, screenshot di `docs/screenshots/fase-2/hero-concept-*.png`). User memilih A + logistik.
- **Home:** hero (headline, kalimat yang berganti sesuai card depan, CTA, logistik, link GitHub asli) + card stack 3D yang bisa di-swipe/tombol/keyboard di atas langit (awan halftone siang / bintang malam) + stiker "Open to remote roles"; paragraf cerita dengan scroll reveal (satu-satunya); proyek dengan progressive blur; tulisan (asimetris, judul menempel); "Currently" (card calm); penutup: card berhamburan sekali + CTA besar + wordmark raksasa di footer.
- **About:** cerita + foto placeholder (bingkai persegi), card "What I'm looking for" (peran, lokasi, zona waktu, CV placeholder), "How I think" (3 prinsip PRD §4, baris editorial), learning timeline (2 entri asli + 2 sample), "Where to next?" dengan petunjuk dari konten asli.
- Collection baru `timeline` (YAML, `file()` loader). Laporan sample ikut memindai YAML/JSON.
- Kritik `copy-reviewer` & `design-critic` (7/10) → semua temuan Tinggi + Sedang diperbaiki: kalimat hero tidak lagi mengklaim sample sebagai fakta (label Sample + kata kerja dari status proyek + frasa pendek), fokus Fullstack + AI di layar pertama, judul card mobile tidak terpotong, langit malam lebih terlihat, blur mobile hanya menutupi ilustrasi, CTA utama solid, pintu "Where to next?" berisi konten asli.

- `code-tidy`: 4 file dirapikan, identik per pixel. Temuannya membuka 2 bug nyata (overlay blur menghalangi klik, rasio foto desktop) → diperbaiki dan diverifikasi.
- Lighthouse mobile (build production + sample): `/` dan `/about` = A11y 100 · Best Practices 100 · SEO 100 · Agentic 100 (setelah card stack diganti `<div role="group">`; `role` itu tidak sah di `<article>`). Trace Home Slow 4G + CPU 4×: LCP 1.73 s, CLS 0.

**Keputusan:**
- 🔑 Card hero diambil dari collections + satu card yang selalu asli ("This site") — astro content collections · getCollection · progressive enhancement
- 🔑 Card stack tanpa autoplay, swipe/tombol/keyboard, card belakang `inert` — pointer events · setPointerCapture · inert attribute · aria-roledescription carousel
- 🔑 Kalimat hero diumumkan sopan ke screen reader — aria-live polite · wcag 4.1.3 status messages
- 🔑 Langit orisinal tanpa gambar — svg feTurbulence · feColorMatrix · svg mask · seeded PRNG mulberry32
- 🔑 Scroll reveal tanpa JS — animation-timeline view() · view-timeline-name · animation-range · @supports
- 🔑 Penutup sekali jalan, drift hanya saat terlihat — IntersectionObserver · requestAnimationFrame · @media (scripting: enabled)
- 🔑 Progressive blur — backdrop-filter · mask-image linear-gradient · pointer-events none
- 🔑 Stiker teks melingkar — svg textPath · textLength
- 🔑 Timeline dari satu file data — astro file() loader · yaml

**Tertunda:**
- Kartu "This site" menaut ke profil GitHub; ganti ke repo situs kalau repo ini dipublikasikan.
- Copy masih draf → Fase 4 (nada dinilai sudah baik oleh `copy-reviewer`; sisa poin minor dicatat di sana).
- Di production (tanpa sample) Home hanya berisi hero + cerita + penutup sampai konten asli ada (Fase 5).
- Newsletter (Buttondown) di Home → Fase 3 bersama form kontak.
- `/projects`, `/writing`, `/now`, `/contact` masih 404 → Fase 3.
- Performa: CSS render-blocking + ukuran DOM (span per kata di story, bintang di langit) → evaluasi di Fase 6.
- Keputusan user: apakah card "This site" menyebut bahwa situs dibangun bersama AI coding assistant (usulan `copy-reviewer`).

**Catatan untuk fase berikutnya:**
- Halaman detail proyek: callout beranotasi (lovi) + format Problem → Approach → Result → Learnings.
- Pil nav aktif sudah siap bergeser saat halaman Projects/Writing/Now ada.
- Tambahkan field `phrase` di proyek/tulisan asli supaya kalimat hero tetap enak dibaca.

