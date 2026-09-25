# Progress Log

> Diperbarui Claude Code di akhir setiap fase (lewat `/gate`). Dibaca di awal setiap sesi (lewat `/resume`).

## Status

| Fase | Nama | Status |
|---|---|---|
| 0 | Review & rencana | ✅ Selesai (Gate 0, 2026-09-25) |
| 1 | Fondasi | ✅ Selesai (Gate 1, 2026-09-25) |
| 2 | Home + About | ✅ Selesai (Gate 2, 2026-09-25) |
| 3 | Halaman lain | ✅ Selesai (Gate 3, 2026-09-25) |
| 4 | Copywriting | ✅ Selesai (Gate 4, 2026-09-25) |
| 5 | 3 proyek pertama | ✅ Selesai (Gate 5, 2026-09-26) |
| 6 | Launch | 🔄 Siap deploy, menunggu akun Netlify user |

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
- 2026-09-25 — Card hero bergaya **Notebook** (option 1 dari 2 mockup): kertas dot-grid + garis margin berwarna aksen, isi spesifik per entri, catatan tangan, stabilo. Selotip washi dihapus (user: kurang bagus).
- 2026-09-25 — Font tulisan tangan **Caveat** (self-host, 1 bobot), hanya untuk catatan margin.
- 2026-09-25 — Ikon "build" diganti **palu** (wrench terbaca seperti bulan sabit).
- 2026-09-25 — Nav memakai "Projects" (bukan "Work") supaya konsisten dengan URL & tombol.
- 2026-09-25 — Card proyek: **batu hangat** (`--surface`) untuk semua card. Hero: **strip label ketikan** menggantikan stiker. /now **tidak** bergaya jurnal.
- 2026-09-25 — Contact: **tanpa email & sosial** (belum ada; muncul otomatis saat diisi di `site.ts`). Newsletter: **belum ada akun Buttondown**, tampil status jujur + RSS.
- 2026-09-25 — Copy (Gate 4): semua rekomendasi ⭐ di `docs/copy-deck.md`; AI coding assistant **tidak disebut**; logistik = "Start date and weekly hours: happy to discuss".
- 2026-09-25 — Waktu proyek **8–12 jam/minggu**; bahasa yang sedang dipelajari **Go, TypeScript, Python**; tema pertama **How Things Work**.
- 2026-09-25 — 3 proyek asli (status `idea`) menggantikan sample: What your browser sends (Go) → Plain-words glossary (Python + Ollama) → Quiz from lecture notes (TypeScript + WebLLM). AI Rp 0: lokal/di browser.
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

#### Revisi setelah review user (2026-09-25)
User: ikon wrench terlihat seperti bulan sabit bertangkai; card stack terlalu polos.
- Ikon `build` digambar ulang sebagai palu (dicek di 16/24/64px).
- 2 mockup hi-fi (Notebook vs Collage, `docs/screenshots/fase-2/card-options-*.png`) → user memilih Notebook.
- `HeroCardFace.astro` baru: mini-kuis, kode dengan syntax highlight, paragraf pembuka artikel asli + stabilo, miniatur situs ini, catatan tangan (Caveat), selotip washi, tekstur kertas. Isi berasal dari field opsional baru: `heroNote` (proyek/tulisan/now), `highlight` (tulisan), `snippet` (now).
- Card muat di 360–1440px tanpa terpotong dan tanpa scroll horizontal (dicek per card, termasuk saat card dilempar).
- 🔑 Font tulisan tangan hanya untuk catatan — astro fonts api · fontsource caveat
- 🔑 Highlighter kode tanpa library — regex tokenizer · set:html · html escaping
- 🔑 Tekstur kertas tanpa gambar — svg feTurbulence data uri · mix-blend-mode multiply
- 🔑 Selotip dengan ujung sobek — css clip-path polygon · repeating-linear-gradient
- Catatan kerja: dev server kadang menahan CSS lama setelah file diedit lewat skrip; `touch <file>` memaksa watcher memuat ulang.

#### Revisi kedua card hero (2026-09-25)
User: "ada yang kurang pas", selotip jelek, minta tekstur. Diagnosis 4 masalah → semua dikerjakan:
1. Setengah card kosong → card lebih pendek (3:3.85), kutipan artikel lebih panjang, checklist asli (progres situs dari `siteProgress`, topik belajar lain).
2. Card pastel melebur dengan langit pastel → badan card = kertas (`--surface-raised`) + dot-grid + garis margin berwarna aksen; pastel pindah ke chip.
3. Gaya/sudut bercampur → preview jadi "printout" lurus berbayangan tipis; hanya catatan tangan yang miring.
4. Stiker berebut sudut dengan selotip → selotip dihapus; stiker di kanan bawah (desktop) / kanan atas (mobile, supaya tidak menutupi tombol Next).
- Perbandingan: `docs/screenshots/fase-2/hero-cards-before-after.png`. Semua card utuh di 360/390/1440px, tanpa scroll horizontal.
- 🔑 Kertas dot-grid tanpa gambar — css radial-gradient pattern · background-size · multiple backgrounds
- 🔑 Aturan @media harus setelah aturan dasar yang ditimpa — css cascade source order · specificity
- 🔑 Kutipan artikel dari beberapa paragraf — markdown excerpt · text truncation

#### Revisi ketiga: warna card proyek + strip label (2026-09-25)
User: garis margin di card hero dihapus; warna card proyek "kurang pas"; minta mockup gaya journaling (foto scrapbook).
- Garis margin vertikal di card hero dihapus, padding kiri = kanan.
- Mockup (`docs/screenshots/fase-2/mock-*.png`): 4 opsi warna card proyek, strip label di hero, /now bergaya jurnal.
- User awalnya memilih **B · warna = status** (sudah diterapkan), lalu mengganti ke **A · batu hangat**: semua card `--surface`, warna hanya dari ilustrasi dan chip status. Token `--tint-building` dihapus.
- **Strip label ketikan** ("Open to remote roles") menggantikan stiker bundar, di pojok kanan atas frame langit. `Sticker.astro` dihapus, `LabelStrip.astro` baru.
- /now bergaya jurnal **ditolak** → /now di Fase 3 tetap mengikuti gaya situs yang tenang.
- Kontras lolos (teks di `--surface` 11.02/5.29 light, 13.25/6.59 dark; tape 14.84). Build 0 error, tanpa scroll horizontal di 360/390/1440.
- 🔑 Satu permukaan untuk semua card, warna dari konten — design tokens surface · wcag 1.4.1 use of color
- 🔑 Huruf timbul yang tidak sejajar — per-character span · text-shadow emboss · seeded PRNG mulberry32
- 🔑 Nama kelas bentrok dengan utility Tailwind — tailwind grid-column col-* · tailwind utility collision

### Fase 3 — Halaman lain (2026-09-25)

**Selesai:**
- `/projects`: daftar editorial (satu baris lebar per proyek, beda dari grid di Home) + filter status berupa segmented control (radio native, filter murni CSS `:has()`, pil bergeser + pengumuman jumlah lewat JS kecil). Empty state jujur per filter dan saat belum ada proyek.
- `/projects/[slug]`: header + fakta (Started/Updated/Stack/Code/Demo), gambar beranotasi ala lovi (`ProjectFigure`, field `callouts` di schema; di HP jadi daftar bernomor), outline "On this page" yang menandai section aktif (IntersectionObserver), lalu link proyek berikutnya.
- `/writing`: dikelompokkan per tahun dengan angka tahun sticky, waktu baca, tag, RSS. `/writing/[slug]`: satu kolom baca, older/newer, lalu newsletter.
- `/rss.xml` (`@astrojs/rss`) + `<link rel="alternate">` di semua halaman.
- `/now`: ditulis seperti surat bulanan (kolom sempit, bulan sebagai headline), potongan kode, arsip bulan sebelumnya (`<details>` beranimasi).
- `/contact`: Netlify Forms (honeypot), berfungsi tanpa JS (POST → `/contact/thanks`); dengan JS terkirim di tempat, validasi inline dengan `aria-invalid` + `aria-describedby`, fokus pindah ke konfirmasi. Logistik di kiri: peran, zona waktu, GitHub, CV.
- `Newsletter` di akhir Home dan setiap artikel: "No newsletter yet" + RSS/GitHub sampai `newsletter.username` diisi.
- `404` ramah + `BackLink`. Style Markdown global (`.markdown`), style field form global, token `--danger`, blok kode memakai tema Shiki `css-variables` yang dipetakan ke token.
- Review `design-critic` + `copy-reviewer` diterapkan: /now dibedakan dari Projects/Writing, pintu WhereNext yang menunjuk halaman sendiri dihapus (tinggal di About), janji tanpa tanggal ("on its way", "starts soon") diganti fakta + langkah nyata, istilah "notes" dirapikan, target sentuh 44px.
- Verifikasi: build 0 error (production & `SHOW_SAMPLES=true`), 58/58 pasangan kontras lolos, tanpa scroll horizontal di 360/390/1440, Lighthouse mobile 100 (A11y/BP/SEO/Agentic) di /projects, detail proyek, /contact. Screenshot: `docs/screenshots/fase-3/`.
- 🔑 Filter tanpa JS — css :has() · input type=radio · segmented control
- 🔑 Anotasi di atas gambar — css custom properties · css calc() · absolute positioning hotspot
- 🔑 Section aktif di outline — IntersectionObserver rootMargin · aria-current
- 🔑 Form kontak tanpa backend — netlify forms · honeypot field · progressive enhancement
- 🔑 Error form yang terbaca screen reader — aria-invalid · aria-describedby · :user-invalid
- 🔑 Warna kode dari token — shiki css-variables theme · astro-code
- 🔑 Buka-tutup arsip yang halus — ::details-content · interpolate-size
- 🔑 RSS — @astrojs/rss · rel=alternate

**Tertunda / untuk user:**
- Logistik PRD §3 (jam overlap, mulai kapan, jam/minggu) belum tampil di Contact/About: menunggu jawaban user (Fase 4).
- Email kerja, akun X/Instagram, akun Buttondown: isi di `src/lib/site.ts` (`contact`, `newsletter`) saat sudah ada.
- Card hero "This site": keputusan menyebut AI coding assistant (Fase 4).

**Catatan kerja:**
- Nama kelas yang bentrok dengan Tailwind lagi: `.outline` (menjadi `outline: 1px solid`). Sekarang `.toc`.
- Content store dev server bisa basi setelah file konten diedit lewat skrip; restart `astro dev --force` bila nilai tidak berubah.
- Python di Windows menulis CRLF dalam mode teks; pakai `newline=""` saat menulis file proyek.

### Fase 4 — Copywriting (2026-09-25)

**Selesai:**
- `docs/copy-deck.md`: semua teks situs per halaman, 2 alternatif + rekomendasi untuk hero, intro About, CTA penutup, terjemahan Indonesia, dan tanda 🟨 [DATA] untuk kalimat yang butuh data.
- User memilih semua ⭐. Diterapkan: tombol hero kedua "See my projects", lead proyek di Home disamakan dengan /projects ("Things I've built or plan to build…"), baris **Availability** di About dan Contact dari `profile.availability`.
- AI coding assistant tidak disebut (keputusan user); keputusan yang tertunda sejak Fase 2 ditutup.
- Build 0 error, tanpa scroll horizontal; tampilan baris baru dicek di 390/1440.
- 🔑 Satu sumber untuk fakta logistik — single source of truth · astro props from config

**Tertunda (butuh data dari user, tampil otomatis saat diisi di `src/lib/site.ts`):**
- Jam overlap, tanggal mulai, jam per minggu (ganti `profile.availability`).
- Foto About, CV asli, email kerja, X/Instagram, Buttondown.

### Fase 5 — 3 proyek pertama (2026-09-25)

**Selesai:**
- Pertanyaan awal dijawab: 8–12 jam/minggu, Go + TypeScript + Python, tema How Things Work + bebas.
- `docs/project-proposals.md`: 3 proyek dari yang paling mudah, masing-masing dengan masalah & pengguna, scope MVP 2–4 minggu, stack, skill, cara Rp 0, risiko, dan ide konten mingguan.
  1. **What your browser sends** (Go + TS, tanpa AI, 2 minggu): request asli pengunjung dijelaskan baris per baris; batu loncatan ke "How Things Work".
  2. **Plain-words glossary** (Python + Ollama lokal, 3 minggu): draf AI + pemeriksa terukur + review manusia, 20 istilah.
  3. **Quiz from lecture notes** (TypeScript + WebLLM di browser, 4 minggu): 5 soal dengan kalimat sumber, catatan tidak pernah dikirim ke server.
- 3 sample proyek diganti file asli berstatus `idea` (tanpa `sample`) → proyek kini tampil di production. Result/Learnings jujur: belum dibangun.
- Status `idea` memakai label **"Added"** (bukan "Started"); chip card hero menampilkan status asli ("Idea"), bukan selalu "Building".
- Ilustrasi mini-UI baru `request` (baris request HTTP + `200 OK`); tipe varian ilustrasi kini diambil dari schema (satu sumber).
- Build production 12 halaman, 0 error; kontras 0 gagal; tanpa scroll horizontal di 390/1440. Screenshot: `docs/screenshots/fase-5/`.
- 🔑 AI tanpa biaya — ollama local models · webllm webgpu · local-first
- 🔑 Output AI yang bisa dicek — structured output json schema · zod validation · grounding
- 🔑 Tipe varian dari schema — astro CollectionEntry data type · zod enum

**Sisa sample (dicetak setiap build):** entri /now 2026-09, 2 tulisan, 2 entri timeline. Diganti saat konten asli ditulis (Fase 6 melaporkan daftarnya).

#### Revisi: lebar halaman (2026-09-25)
User: kiri-kanan terlalu kosong. Terukur: di 1920px konten hanya 1216px (345px kosong tiap sisi).
- `.wrap` sekarang `min(100% - 2 × --gutter, --page-max)` dengan `--page-max: 88rem` dan gutter cair (`clamp(1.25rem, 5vw - 0.5rem, 6rem)`): 1920px → konten 1408px (tepi 249px), 1440px → tepi 64px, HP tetap 20px.
- Tanpa scroll horizontal di 360/390/768/1024/1280/1440/1920. Build 0 error.
- 🔑 Lebar konten responsif — css min() · css clamp() · fluid gutter

#### Revisi: dekorasi daun & transisi halaman (2026-09-25)
- Mockup daun (A garis, B kertas, lalu tanaman besar) di `docs/screenshots/mockups/`. **Keputusan user: tidak pakai daun**, halaman dibiarkan kosong dulu.
- Transisi antar halaman diperhalus: judul proyek/tulisan dan ilustrasi proyek **berpindah dan berubah ukuran** dari daftar (Home, /projects, /writing) ke halaman detail, dan sebaliknya saat Back. Elemen lain pudar mengikuti ritme `<main>` (160ms keluar, 400ms masuk). Header/footer ikut ritme yang sama.
- Tanpa bayangan ganda: pasangan hanya menampilkan snapshot baru; judul memakai `inline-size: fit-content` supaya yang diskalakan adalah teksnya.
- Reduced motion: semua animasi view transition dimatikan (terverifikasi 0 animasi berjalan). Build 0 error.
- 🔑 Elemen yang berpindah antar halaman — astro transition:name · view-transition-class · ::view-transition-group
- 🔑 Hanya animasikan elemen tanpa pasangan — ::view-transition-old :only-child · document.getAnimations()
- Revisi lanjutan (user: halaman yang sedikit kesamaannya perlu animasi lebih menarik): antar halaman top-level kini **punya arah sesuai urutan menu** (Home → Projects → Writing → Now → About → Contact). Halaman lama bergeser ke sisi asal + blur 4px (180ms); halaman baru masuk dari sisi berlawanan, section-nya mendarat bertahap (mulai 120ms, jeda 70ms) sambil blur menajam. Daftar ↔ detail tetap memakai morph. Dicek frame demi frame (100/180/300ms) tanpa tumpang tindih teks.
- 🔑 Arah transisi dari urutan nav — astro:before-swap event.newDocument · css custom properties inheritance ::view-transition · staggered animation-delay

### Fase 6 — Launch (2026-09-26)

**Selesai:**
- Sitemap (`@astrojs/sitemap`, tanpa /styleguide & /contact/thanks), `robots.txt` dari `site`, `<link rel="sitemap">`.
- Gambar Open Graph default 1200×630 (`public/og-default.png`, dirender dari komponen situs sendiri) + `og:image:width/height/alt`, `twitter:card summary_large_image` di semua halaman; `apple-touch-icon.png`.
- `netlify.toml`: build, Node 22, cache immutable untuk `/_astro/*`, header keamanan (nosniff, frame DENY, referrer, permissions), `SHOW_SAMPLES=true` hanya di deploy preview.
- Performa: CSS di-inline (`build.inlineStylesheets: "always"`) → LCP mobile (Slow 4G + CPU 4×) 3,0 s → **2,4 s**, CLS 0.
- Lighthouse mobile, build production: **100/100/100/100** (Accessibility, Best Practices, SEO, Agentic) di /, /about, /projects, detail proyek, /writing, /now, /contact. `/404.html`: SEO 66 karena `noindex` (disengaja).
- `README.md` (Bahasa Indonesia): cara run, menambah konten, data di `site.ts`, deploy, checklist rilis, daftar sisa sample.
- 🔑 Sitemap & robots — @astrojs/sitemap filter · astro endpoint robots.txt
- 🔑 Kartu share link — open graph og:image · twitter summary_large_image
- 🔑 CSS tanpa request tambahan — astro build.inlineStylesheets · render-blocking resources · largest contentful paint

**Sisa sample (tidak tampil di production):** `now/2026-09.md`, `writing/reading-an-error-message.md`, `writing/what-an-api-is.md`, `timeline.yaml` (2 entri).

**Menunggu user:** akun Netlify (deploy), pilihan analytics F8 (GoatCounter / Cloudflare Web Analytics).
