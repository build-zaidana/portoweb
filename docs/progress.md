# Progress Log

> Diperbarui Claude Code di akhir setiap fase (lewat `/gate`). Dibaca di awal setiap sesi (lewat `/resume`).

## Status

| Fase | Nama | Status |
|---|---|---|
| 0 | Review & rencana | 🟡 Selesai, menunggu "lanjut" (Gate 0) |
| 1 | Fondasi | ⏳ |
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

**Tertunda (menunggu persetujuan user di Gate 0):**
1. F3 bertabrakan dengan rilis v1 → usulan: entri sample *dikecualikan* dari production, tampil hanya di dev/preview (flag env).
2. Tambah persyaratan "bukti nyata di layar pertama": minimal 1 link non-sample (GitHub profile / repo latihan asli).
3. Tambah detail "apa yang dicari" untuk Rian: peran, zona waktu (UTC+7) & jam overlap, ketersediaan, jam/minggu.
4. Sinyal G1 "link CV diklik" tidak bisa dicek tanpa analytics → usulan analytics gratis tanpa cookie (GoatCounter / Cloudflare Web Analytics), atau metriknya dihapus.
5. Target G2 "≥ 1 tulisan/minggu" berisiko → usulan 2 tulisan/bulan + Now bulanan, dan tanggal ditampilkan jelas.

**Catatan untuk fase berikutnya:**
- Fase 1 harus membandingkan krem `#F5F1EB` vs warm-neutral yang lebih abu, dan dark `#1E1E1E` vs hitam kehijauan hangat, lalu hitung kontras semua pasangan teks.
- General Sans dari Fontshare: cek lisensi self-host (ITF Free Font License) sebelum memasukkan file font ke repo.
- Folder belum jadi repo git. `git init` dilakukan di awal Fase 1.
