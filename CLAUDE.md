# CLAUDE.md — Zaidana Studio

> Dibaca otomatis setiap sesi. File ini sengaja **pendek**: berisi aturan kerja + peta dokumen.
> Prioritas kalau ada konflik: **instruksi user di chat > CLAUDE.md > PRD.md > ARCHITECTURE.md > asumsi sendiri.**

## Peta dokumen

| File | Isi | Kapan dibaca |
|---|---|---|
| `PRD.md` | Apa yang dibangun & kenapa: tujuan, persona, sitemap, requirements, arah visual | Sebelum mengerjakan fitur/halaman/copy apa pun |
| `ARCHITECTURE.md` | Bagaimana dibangun: struktur folder, stack, data flow, design tokens, konvensi. **Kamu yang menulis dan merawatnya** (dibuat di Fase 1) | Sebelum menulis/mengubah kode |
| `docs/progress.md` | Log per fase: yang selesai, keputusan, yang tertunda | Awal setiap sesi baru |
| `docs/references/` | Screenshot referensi + catatan apa yang user suka (README.md) | **Wajib dibaca sebelum membuat UI** |
| `docs/keywords.md` | Daftar keyword untuk dipelajari user, dikelompokkan per topik | Tambahkan setiap ada keyword baru |
| `KICKOFF.md` | Rencana fase & gate | Referensi urutan kerja |

**Tools proyek:**
- MCP: **Playwright** (buka dev server, screenshot, emulasi dark/reduced-motion) · **Context7** (docs terbaru, pakai sebelum menulis kode Astro/Tailwind)
- Skill: **`frontend-design`** (WAJIB dipakai setiap membuat/mengubah UI) · `design-critique`, `accessibility-review`, `ux-copy` · `/gate`, `/resume`, `/check` (dijalankan user)
- Subagent: `design-critic` (memuat design-critique + accessibility-review), `copy-reviewer` (memuat ux-copy), `code-tidy` (merapikan kode di `/gate`, dengan verifikasi visual: kualitas tidak boleh turun)
- **Prioritas kalau skill bertabrakan dengan dokumen proyek:** PRD.md & CLAUDE.md menang. Contoh: frontend-design boleh mengusulkan arah estetika, tapi harus di dalam palet, font, dan batas animasi proyek ini.

## Konteks satu paragraf

Website personal branding (**English**) untuk Zaidana: mahasiswa SE, Fullstack + AI, menargetkan remote junior/intern SWE di luar negeri. Narasinya "learning & building in public", bukan expert. Rilis v1 = kerangka dengan **konten dummy berlabel jelas**.

## Aturan kerja

1. **Komunikasi ke user dalam Bahasa Indonesia** (istilah teknis Inggris boleh). **Semua teks di website dalam English.**
2. **Jangan overclaim.** Klaim tentang Zaidana hanya boleh berasal dari PRD §1, §4, dan dari user. Dummy boleh, dengan syarat `sample: true` + label "Sample". Jangan pernah menulis testimoni, angka pengalaman, atau skill palsu sebagai fakta.
3. **Bertahap dengan gate.** Selesaikan fase → tunjukkan hasil → **STOP**, tunggu "lanjut".
4. **Tanya kalau ambigu** (AskUserQuestion, beri opsi + rekomendasi). Jangan menebak untuk keputusan yang mahal diubah.
5. **Kualitas hasil nomor satu.** Jangan menyederhanakan kode atau desain demi "mudah dipahami pemula". Pakai solusi terbaik untuk situsnya, tetap rapi dan konsisten.
6. **Penjelasan = keyword, bukan paragraf.** Setiap keputusan desain/teknis penting cukup ditulis 1 baris dengan format:
   `🔑 <keputusan singkat> — <keyword1> · <keyword2> · <keyword3>`
   Aturan keyword supaya mudah dicari user di Google/docs:
   - English, pakai istilah resmi persis seperti di dokumentasi (mis. `CSS custom properties`, bukan "variabel warna")
   - Beri prefix teknologi supaya pencarian tidak ambigu: `astro view transitions`, `tailwind @theme`, `css clamp()`, `wcag 1.4.3 contrast`
   - Nama API/properti/fungsi ditulis persis (`prefers-reduced-motion`, `IntersectionObserver`, `defineCollection`)
   - Tanpa penjelasan panjang. User akan mencari sendiri.
   Setiap keyword baru juga **ditambahkan ke `docs/keywords.md`** (lihat format di file itu).
7. **Cek dokumentasi resmi** (Astro, Tailwind, dll.) untuk API terbaru. Jangan mengandalkan ingatan soal versi.
8. **Verifikasi sebelum bilang selesai:** `npm run build` bersih, screenshot Playwright light/dark × 1440/390px disimpan ke `docs/screenshots/`, **lihat sendiri screenshot-nya lalu kritik**, cek kontras teks.
9. **Commit per langkah logis** (Conventional Commits). Update `docs/progress.md` dan `ARCHITECTURE.md` di akhir setiap fase.

## Design principles

**Warna:** palet di PRD §8 adalah **menu, bukan kewajiban**. Pilih kombinasi paling kuat (tulis keputusannya dalam format 🔑). Aksesibilitas tetap berlaku untuk warna yang *dipakai untuk teks*: kontras ≥ 4.5:1 (hitung dan tampilkan). Warna aksen yang terlalu terang untuk teks tetap boleh dipakai sebagai permukaan, border, atau ilustrasi. Tidak boleh navy/biru tua.

**Animasi:** halus dan bermakna. Durasi 150–400ms, easing lembut, utamakan CSS.
- **Setiap interaksi user wajib punya feedback yang halus:** hover, focus, press, buka/tutup, toggle tema, transisi halaman (Astro View Transitions).
- **Gerakan yang tidak dipicu user dibuat hemat:** hanya di **dua momen yang diorkestrasi**, yaitu **pembuka** (card stack di hero) dan **penutup** (card melayang + wordmark di footer). Lihat usulan ⭐ di `docs/references/README.md`. Jangan pakai fade-up di setiap section saat scroll, karena itu pola khas situs AI. Pengecualian yang disetujui user: **satu** paragraf dengan scroll text reveal (gaya lovi.care), karena digerakkan oleh scroll pembaca. Animasi yang berjalan sendiri wajib berhenti saat di luar layar dan bisa di-pause.
- Tidak ada parallax berat, loop autoplay, atau scroll-jacking. `prefers-reduced-motion` → matikan gerakan non-esensial.

**Ikon:** satu gaya untuk seluruh situs, yaitu **ikon sketsa tangan orisinal** (lihat daylightcomputer.com di `docs/references/README.md`). Jangan mencampur ikon sketsa dengan set ikon generik (Heroicons/Lucide dll.), kecuali untuk ikon utilitas UI yang sangat kecil (panah, tutup, menu), dan itu pun dengan stroke yang senada.

### Anti "AI slop" (maksud user: desain yang terasa generik, seperti buatan template/AI)

Hindari:
- Gradient ungu→biru, glow neon, glassmorphism di mana-mana, blob abstrak di background
- Hero template: "Hi, I'm X 👋" + foto bulat + dua tombol + tagline "passionate developer"
- Grid 3 kartu identik dengan ikon + judul + 2 baris teks, diulang di setiap section
- Emoji sebagai ikon, badge "✨ New", teks gradient
- Semua section berbentuk sama: judul center → subjudul abu-abu → grid
- Copy kosong: "passionate", "innovative", "cutting-edge", "seamless", "leverage", "unlock"
- Rounded-2xl + shadow lembut di *setiap* elemen, semua spacing sama rata
- Eyebrow label ALL-CAPS di atas setiap heading, satu kata di headline diberi warna/italic berbeda
- Nomor 01 / 02 / 03 padahal kontennya bukan urutan, `→` ditempel di setiap tombol/link, font monospace untuk label kecil
- Fade-and-slide-up di setiap section saat scroll

**⚠️ Risiko terbesar proyek ini:** background krem + heading serif kontras tinggi adalah pola *nomor satu* situs buatan AI saat ini (lihat skill `frontend-design`). Brief memilih arah ini, jadi tetap diikuti, tapi **pembedanya harus datang dari tempat lain**: aksen sage/biru langit (bukan terracotta/oranye), layout yang tidak template, dan **satu elemen yang benar-benar memorable**. Sisanya tenang dan disiplin.

Gantinya:
- **Tipografi editorial** sebagai elemen visual utama (heading serif besar, kontras ukuran yang berani)
- **Hierarki & ritme yang bervariasi**: section berbeda punya layout berbeda, asimetri terkontrol, whitespace lega
- **Detail personal yang spesifik**: learning timeline, catatan di margin, "Currently learning", potongan kode asli, tanggal nyata
- Copy yang konkret dan spesifik, bukan kata sifat
- Tes cepat: *"Kalau namanya diganti, apakah situs ini masih terasa milik orang lain?"* Kalau iya, berarti masih generik.

## Definition of Done (per halaman)

- [ ] Build bersih, TypeScript strict tanpa error
- [ ] Responsif 360–1440px+, tanpa horizontal scroll
- [ ] Light & dark (system + toggle, tersimpan, tanpa flash)
- [ ] Kontras teks ≥ 4.5:1 di kedua mode
- [ ] Keyboard nav, focus ring terlihat, HTML semantik, alt text
- [ ] Reduced motion dihormati
- [ ] Lighthouse ≥ 95 semua kategori
- [ ] Meta + Open Graph
- [ ] Screenshot light/dark × desktop/mobile di `docs/screenshots/`
