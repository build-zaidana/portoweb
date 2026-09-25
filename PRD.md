# PRD — Zaidana Studio

> **Product Requirements Document.** Menjawab *apa* yang dibangun dan *kenapa*. Tidak membahas *bagaimana* (itu di `ARCHITECTURE.md`).
> Status: v1 · Pemilik: Zaidana · Terakhir diperbarui: 2026-09-25

## 1. Ringkasan

Website personal branding untuk Zaidana, mahasiswa Software Engineering (21, Indonesia) yang fokus di Fullstack + AI. Website ini menampilkan **perjalanan belajar yang jujur** ("building in public"), bukan klaim keahlian. Rilis pertama adalah **kerangka yang siap diisi**, memakai konten dummy yang nanti diganti dengan proyek dan tulisan asli.

**Bahasa situs: English.** Target utamanya recruiter dan tech lead di luar negeri.

## 2. Tujuan & metrik sukses

| # | Tujuan | Sinyal sukses (dicek manual + analytics gratis tanpa cookie, lihat F8) |
|---|---|---|
| G1 | Mendapat peluang kerja remote (junior/intern SWE, luar negeri) | Ada pesan masuk lewat form kontak/email; link CV diklik (diukur lewat F8) |
| G2 | Menjadi pusat konten & perjalanan belajar | ≥ 2 tulisan per bulan terbit; halaman Now diperbarui tiap bulan; tanggal terbit/update terlihat jelas di setiap halaman |
| G3 | Membangun jejaring | Subscriber newsletter bertambah; ada balasan/diskusi |

**Non-goals (v1):** komentar blog, login, CMS, multi-bahasa, analytics berbayar, e-commerce.

## 3. Persona

**Rian, 32, tech lead di startup remote (persona utama).** Sibuk, praktis, men-scan halaman dalam < 30 detik. Tidak peduli gelar. Yang dia cari: proyek nyata, cara berpikir, dan kemampuan komunikasi.
→ *Kebutuhan:* dalam 1 layar pertama dia harus tahu siapa Zaidana, fokusnya apa, sedang mencari apa, dan ke mana melihat bukti. **Buktinya harus nyata:** minimal 1 link non-sample (GitHub profile atau repo latihan asli) terlihat di layar pertama, walaupun semua proyek masih sample.
→ *Kebutuhan logistik (remote):* peran yang dicari, zona waktu (WIB, UTC+7) dan jam overlap yang bisa disediakan, ketersediaan (mulai kapan), dan jam per minggu harus bisa ditemukan dalam 1 klik (About dan Contact).

**Sesama mahasiswa/developer (persona sekunder).** Ingin belajar bersama.
→ *Kebutuhan:* tulisan yang mudah dicerna, bisa subscribe, dan jelas cara mengajak diskusi.

## 4. Positioning

**Value proposition** (makna final; kalimat bahasa Inggrisnya boleh dipoles):
> I build software that solves real problems and makes people's work easier. I'm on my way to becoming a fullstack engineer focused on AI — and I document my learning in the open, so others can grow alongside me.

**Diferensiasi:** tidak mengklaim ahli. Yang ditawarkan: cara berpikir rasional berbasis data, rasa ingin tahu yang tinggi, dan kebiasaan berbagi ilmu lewat diskusi terbuka.

**Nada:** hangat, humble, profesional, jelas. Tanpa jargon yang tidak perlu.
- ❌ "I'm an experienced software engineer who has mastered many technologies."
- ✅ "I'm learning to build software that genuinely helps people. Every project is a chance to learn — and I enjoy sharing what I find."

## 5. Struktur situs (sitemap)

| Prioritas | Halaman | Tujuan | Isi |
|---|---|---|---|
| **MVP** | `/` Home | G1 G2 G3 | Hero (nama, value prop, status "Open to remote internships", CTA, **≥ 1 link bukti non-sample**) → sorotan proyek → tulisan terbaru → "Currently learning" → newsletter |
| **MVP** | `/about` | G1 | Cerita singkat, learning timeline, filosofi, cara berpikir, apa yang dicari (peran, zona waktu & jam overlap, ketersediaan, jam/minggu), link CV |
| **MVP** | `/projects` + `/projects/[slug]` | G1 | 3–5 proyek dengan format **Problem → Approach → Result → Learnings**, stack, status (idea / building / shipped), repo, demo |
| **MVP** | `/writing` + `/writing/[slug]` | G2 | Daftar artikel, tag, waktu baca, RSS |
| **MVP** | `/now` | G1 G2 | Apa yang sedang dipelajari/dibangun bulan ini (konsep nownownow.com). Murah dirawat, sinyal kuat bahwa kamu aktif |
| **MVP** | `/contact` | G1 G3 | Form, email, GitHub, X, Instagram, ajakan "let's talk tech", ringkasan zona waktu & ketersediaan |
| **MVP** | Newsletter | G3 | Form subscribe di Home dan di akhir setiap artikel (bukan halaman terpisah) |
| **MVP** | `/404` | — | Ramah, berisi link kembali |
| Nanti | `/learn` (How Things Work) | G2 | Penjelasan sederhana. Tunggu sampai ada ≥ 3 tulisan |
| Nanti | `/uses` | G3 | Tools & setup |
| Nanti | GitHub activity/repos | G1 | Fetch saat build. Tampilkan hanya jika repo sudah layak dilihat |

**Kenapa Newsletter digabung dan tidak jadi halaman sendiri:** orang subscribe tepat setelah membaca sesuatu yang bagus. Halaman terpisah jarang dikunjungi.
**Kenapa ada `/now`:** saat proyek masih sedikit, halaman ini yang membuktikan kamu aktif belajar.

## 6. Kebutuhan fungsional

- F1. Light & dark mode: mengikuti sistem, ada toggle manual, pilihan tersimpan, tidak ada flash saat load.
- F2. Konten dari file Markdown dengan schema yang divalidasi (blog, projects, now).
- F3. **Konten dummy:** setiap entri dummy memakai `sample: true` dan label visual "Sample". Entri sample **dikecualikan otomatis dari build production** dan hanya tampil di dev atau di deploy preview yang menyalakan flag env `SHOW_SAMPLES=true`. Build mencetak daftar entri sample yang masih ada, supaya konten palsu tidak ikut tayang tanpa sengaja dan tetap mudah dilacak. *(Diubah di Gate 0: versi awal "build gagal" membuat rilis v1 yang berisi dummy tidak bisa di-deploy.)*
- F4. RSS feed, sitemap, robots.txt, meta + Open Graph image per halaman.
- F5. Form kontak yang berfungsi di hosting gratis. Form newsletter memakai Buttondown.
- F6. Transisi halaman dan micro-interaction yang halus, dan mati saat `prefers-reduced-motion`.
- F7. CV (PDF) bisa diunduh dari About dan Contact (placeholder dulu).
- F8. Analytics gratis, tanpa cookie, dan tanpa banner consent (GoatCounter atau Cloudflare Web Analytics, dipilih di Fase 6) untuk mengukur kunjungan dan klik link CV/kontak. Tidak ada data pribadi yang dikumpulkan.

## 7. Kebutuhan non-fungsional

- Lighthouse ≥ 95 di semua kategori; JS yang dikirim ke browser seminimal mungkin.
- Aksesibilitas: WCAG AA untuk **teks** (kontras ≥ 4.5:1), navigasi keyboard, HTML semantik.
- Responsif 360px – 1440px+.
- Biaya Rp 0 sampai membeli domain (~Rp 150–200 rb/tahun).
- Kualitas kode setara production: konsisten, bertipe (TypeScript strict), terstruktur. Tidak disederhanakan demi keterbacaan pemula.

## 8. Arah visual

**Palet = pilihan, tidak wajib dipakai semua.** Sage `#8B9D83` · Krem `#F5F1EB` · Biru langit `#A8C5D6` · Coklat muda `#C9A88C` · Charcoal `#2A2A2A` · Dark: `#1E1E1E` + sage yang lebih terang. Pilih kombinasi paling kuat (disarankan: 1 aksen utama + 1 aksen pendukung). **Tidak boleh biru tua/navy.**

**Tipografi:** Instrument Serif (heading, diputuskan di Gate 0) · **General Sans** (body, dari Fontshare, gratis, self-host) · JetBrains Mono (kode). *Inter tidak dipakai karena terlalu umum di situs buatan AI/template, dan General Sans memang ada di brief asli.*

**Rasa yang dituju:** calm, hangat, editorial, personal. Referensi: micro.so, craft.do, wabi.ai, cosmos.so, lovi.care, integratedbio.com, letters.app, useorigin.com, daylightcomputer.com.

**Anti "AI slop":** lihat `CLAUDE.md` §5.

## 9. Konten dummy (sampai konten asli siap)

- 3 proyek sample yang mencerminkan arah proyek sungguhan (pendidikan + AI). Proposal proyek asli dibuat di Fase 5.
- 2 artikel sample, 1 entri Now sample.
- Semuanya ditandai `sample: true` dan berlabel "Sample" di UI.

## 10. Pertanyaan terbuka

Semua pertanyaan awal sudah dijawab (Gate 0, 2026-09-25):

- ~~Host~~ → **Netlify**. Netlify Forms dipakai untuk form kontak (F5) tanpa backend.
- ~~Font heading~~ → **Instrument Serif** (Regular + Italic, khusus ukuran display). Body tetap General Sans.
- ~~Foto diri~~ → **Ada, hanya di About**, dibingkai persegi bersudut (bukan lingkaran). Placeholder dulu. Hero tetap card stack.
- ~~Domain~~ → **Ditunda.** Pakai subdomain gratis Netlify (`*.netlify.app`) sampai siap membeli domain.
