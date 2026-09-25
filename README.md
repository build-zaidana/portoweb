# Zaidana Studio

Situs personal Zaidana: mahasiswa Software Engineering yang belajar fullstack dan AI secara terbuka.
Dibangun dengan **Astro** (statis), **Tailwind CSS 4**, dan **TypeScript**, di-host di **Netlify**.

> Dokumen lain: `PRD.md` (apa & kenapa) · `ARCHITECTURE.md` (bagaimana, token desain, keputusan) · `docs/progress.md` (log per fase).

---

## Menjalankan di komputer sendiri

Butuh **Node.js 22.12+**.

```bash
npm install
npm run dev          # http://localhost:4321 (konten sample ikut tampil)
```

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Server pengembangan, reload otomatis |
| `npm run build` | Cek tipe (`astro check`) + build ke `dist/` seperti production (tanpa sample) |
| `npm run preview` | Menyajikan hasil build untuk dicek sebelum deploy |
| `npm run contrast` | Menghitung kontras semua pasangan warna teks dari `src/styles/tokens.css` |
| `npm run format` | Merapikan kode dengan Prettier |

Kalau dev server terlihat memakai konten atau CSS lama setelah file diedit, hentikan lalu jalankan `npx astro dev --force`.

---

## Menambah dan mengubah konten

Semua konten ada di `src/content/` dan divalidasi otomatis: kalau ada field yang salah, `npm run build` gagal dan memberi tahu di mana salahnya.

### Tulisan baru → `src/content/writing/<slug>.md`

```md
---
title: Judul tulisan (maks 90 karakter)
description: Satu kalimat ringkasan (maks 180)
publishedAt: 2026-10-01
tags: [learning]
draft: false        # true = tidak tampil di production
---

Isi tulisan dalam Markdown. Heading pakai `##`.
```

URL-nya menjadi `/writing/<slug>`. Otomatis masuk RSS (`/rss.xml`) dan sitemap.

### Proyek baru → `src/content/projects/<slug>.md`

```md
---
title: Nama proyek
summary: Satu kalimat, apa dan untuk siapa (maks 160)
status: idea          # idea | building | shipped
stack: [Go, TypeScript]
startedAt: 2026-10-01
updatedAt: 2026-11-01 # opsional
repo: https://github.com/build-zaidana/...   # opsional, muncul sebagai link "Repository"
demo: https://...                             # opsional
art: request          # ilustrasi sementara: form | cards | chart | request
tint: sky             # warna chip di card hero: sage | sky | tan
featured: true        # opsional, tampil paling depan di hero
callouts:             # opsional, 2–4 anotasi di gambar proyek
  - label: Judul pendek
    note: Satu kalimat keputusan
    x: 40             # posisi titik, persen dari ilustrasi
    y: 20
    side: left        # kartu di kiri atau kanan
---

## Problem
## Approach
## Result
## Learnings
```

Update status saat proyek berjalan (`idea` → `building` → `shipped`). Kalimat di hero ("Right now I'm planning/building/improving …") dan chip status ikut berubah sendiri.

### Update halaman /now → buat file baru tiap bulan `src/content/now/YYYY-MM.md`

```md
---
month: 2026-10-01
location: Indonesia (UTC+7)
learning: [TypeScript generics, ...]
building: [...]
reading: [...]
---
```

Entri terbaru otomatis menjadi /now. Bulan sebelumnya pindah ke bagian "Earlier months".

### Timeline di About → `src/content/timeline.yaml`

### Data pribadi & kontak → `src/lib/site.ts`

Semua fakta tentang kamu yang boleh tampil di situs ada di satu file ini. Isi saat sudah siap, dan situs akan menampilkannya otomatis:

| Yang diisi | Field | Muncul di |
|---|---|---|
| Email kerja | `contact.email` | Contact |
| X / Instagram | `contact.social` (`{ label, href }`) | Contact |
| Akun Buttondown | `newsletter.username` | Form newsletter di Home dan akhir artikel |
| Kode GoatCounter (mis. `zaidana`) | `analytics.goatcounter` | Script analytics (hanya di production). Mencatat kunjungan + klik CV, kontak, GitHub |
| Jam overlap, mulai kapan, jam/minggu | `profile.availability` | About, Contact |
| CV asli | ganti `public/cv-placeholder.pdf`, lalu ubah `profile.cv` (`href`, `placeholder: false`) | About, Contact |
| Progres situs | `siteProgress` | Card "This site" di hero |

Foto About: ganti placeholder di `src/pages/about.astro` (bingkai persegi, sesuai keputusan Gate 0).

### Konten sample (dummy)

Entri dengan `sample: true` hanya tampil di `npm run dev` dan di deploy preview. **Tidak pernah tampil di production.** Setiap `npm run build` mencetak daftar sample yang masih ada. Untuk menggantinya, hapus file sample lalu tulis file asli tanpa field `sample`.

Sisa sample saat launch (2026-09-26):
- `src/content/now/2026-09.md`
- `src/content/writing/reading-an-error-message.md`
- `src/content/writing/what-an-api-is.md`
- `src/content/timeline.yaml` (2 entri)

Selama sample ini belum diganti, production menampilkan empty state yang jujur: /writing "No notes published yet", /now "No update yet", tanpa section Writing dan Currently di Home.

---

## Deploy (Netlify)

Konfigurasi ada di `netlify.toml`: perintah build, folder `dist`, Node 22, header keamanan, cache aset, dan `SHOW_SAMPLES=true` khusus deploy preview.

**Cara 1: sambungkan repo GitHub (disarankan, deploy otomatis setiap push)**
1. Buat repo di GitHub, lalu push proyek ini.
2. Di [app.netlify.com](https://app.netlify.com): **Add new site → Import an existing project → GitHub** → pilih repo.
3. Netlify membaca `netlify.toml`, jadi pengaturan build tidak perlu diisi manual. Klik **Deploy**.
4. **Site configuration → Site details → Change site name** → `zaidana` (untuk `zaidana.netlify.app`). Kalau namanya sudah dipakai orang lain, ganti juga `site` di `astro.config.mjs`.
5. **Forms:** buka tab Forms → aktifkan form detection. Form "contact" muncul setelah deploy berikutnya. Atur notifikasi email di **Forms → Form notifications**.

**Cara 2: tanpa GitHub (Netlify CLI)**
```bash
npx netlify-cli login
npx netlify-cli deploy --build --prod
```

**Domain sendiri (nanti):** Netlify → Domain management → Add a domain, lalu ubah `site` di `astro.config.mjs` ke domain baru. Sitemap, robots.txt, RSS, dan Open Graph mengikuti otomatis.

---

## Sebelum setiap rilis

- [ ] `npm run build` tanpa error
- [ ] `npm run contrast`: semua ✅
- [ ] Cek tampilan di `npm run preview` (light & dark, HP & desktop)
- [ ] Tidak ada sample yang tidak sengaja ikut (lihat log build)
