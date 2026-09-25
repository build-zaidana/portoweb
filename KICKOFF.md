# KICKOFF — Prompt pertama untuk Claude Code

> **Setup:** ikuti `SETUP.md` dulu (sekali saja), lalu buka Claude Code di folder `Zaidana-FullstackandDesign`.
> Mulai di **Plan Mode** (Shift+Tab) untuk Fase 0. Copy-paste seluruh blok di bawah sebagai pesan pertama.

---

```markdown
Baca CLAUDE.md dan PRD.md sampai habis sebelum melakukan apa pun.

Kita membangun "Zaidana Studio" secara BERTAHAP. Setiap fase diakhiri GATE:
tunjukkan hasil, ringkas keputusan + alasan, update docs/progress.md, lalu
BERHENTI dan tunggu saya bilang "lanjut".
Untuk menutup fase, saya akan mengetik /gate N (atau kamu ikuti langkah di
.claude/skills/gate/SKILL.md). Pakai subagent design-critic & copy-reviewer untuk
mengkritik hasilmu sendiri sebelum menunjukkannya ke saya.

Keputusan yang SUDAH final (jangan ditanyakan lagi):
- Bahasa situs: English. Komunikasi dengan saya: Bahasa Indonesia.
- Palet warna = pilihan; kamu yang menyusun kombinasi terbaik + alasannya.
- Animasi: sesuai batas di CLAUDE.md.
- Proyek & tulisan: pakai dummy berlabel "Sample" dulu.
- Stack: Astro + Tailwind, konten Markdown, deploy gratis (Netlify/Vercel).
- Font: serif (Fraunces/Instrument Serif) untuk headline + General Sans untuk body.
- Ikon: satu gaya, sketsa tangan (placeholder dulu, nanti saya gambar sendiri).
- Arah desain & alokasi efek: ikuti "Cara menerapkan ke Zaidana Studio" di
  docs/references/README.md.

## FASE 0 — Review & rencana (tanpa kode)
1. Review PRD.md secara kritis: apa yang lemah, kurang, atau berisiko untuk tujuan
   G1–G3 dan persona Rian? Usulkan perubahan (maks 5, masing-masing 1 kalimat).
2. Baca docs/references/README.md + lihat SEMUA screenshot-nya (9 situs, ini selera
   saya yang sudah dikonfirmasi, prioritas tertinggi). Buka situs aslinya via
   Playwright hanya untuk melihat MOTION yang tidak tertangkap screenshot
   (terutama wabi.ai card stack, lovi.care scroll reveal, integratedbio.com).
   Rangkum dalam 1 tabel: situs → prinsip yang diambil → dipakai di halaman mana.
3. Tanyakan pertanyaan terbuka PRD §10 lewat AskUserQuestion (dengan rekomendasi).
4. Tampilkan rencana eksekusi Fase 1–6 secara ringkas.
🛑 GATE 0

## FASE 1 — Fondasi
- Scaffold Astro + Tailwind (versi stabil terbaru, cek docs via Context7), TypeScript
  strict, Prettier, git. Struktur folder mengikuti konvensi Astro. Folder ini SUDAH berisi
  dokumen & .claude/: kalau create-astro menolak karena folder tidak kosong, scaffold
  di subfolder sementara lalu pindahkan isinya ke root. JANGAN menimpa/menghapus file
  yang sudah ada.
- Tulis ARCHITECTURE.md: struktur folder (+ fungsi tiap folder), data flow konten,
  design tokens, konvensi penamaan, cara menambah artikel/proyek, keputusan +
  alasannya (format ADR singkat).
- Design tokens (CSS variables) untuk light & dark. Susun palet dari PRD §8,
  sertakan tabel kontras yang dihitung.
- Theme toggle tanpa flash. Content Collections (projects, writing, now) dengan
  schema + field `sample`. Guard build production untuk entri sample (PRD F3).
- Halaman /styleguide: semua token, tipografi, tombol, link, kartu, dan state
  hover/focus di kedua mode.
🛑 GATE 1 — kirim screenshot /styleguide light & dark.

## FASE 2 — Home (Hero) + About
1. Buat 3 konsep Hero yang BERBEDA secara ide (bukan beda warna). Konsep A WAJIB
   usulan ⭐ card stack di docs/references/README.md; B dan C alternatif darimu. Dalam bentuk
   wireframe grayscale. Jelaskan kelebihan/kekurangan masing-masing untuk Rian.
   Minta saya memilih.
2. Bangun versi high-fi Home + About. Pastikan Rian paham dalam 5 detik:
   siapa, fokus apa, sedang mencari apa, ke mana melihat bukti.
3. Screenshot → kritik diri pakai checklist anti-AI-slop di CLAUDE.md → perbaiki
   minimal 1 putaran → baru tunjukkan ke saya, beserta keputusan desain dalam format 🔑.
🛑 GATE 2

## FASE 3 — Halaman lain
Projects (list + detail: Problem → Approach → Result → Learnings), Writing
(list + detail + RSS), Now, Contact (form berfungsi), newsletter Buttondown,
404. Isi dengan dummy berlabel sesuai PRD §9.
🛑 GATE 3

## FASE 4 — Copywriting (English)
Copy untuk setiap halaman sesuai nada di PRD §4. Untuk bagian penting (hero,
about intro, CTA): 2 alternatif + rekomendasi (1 kalimat). Beri terjemahan Indonesia
singkat supaya saya bisa menilai maknanya. Tandai kalimat yang butuh data dari saya.
🛑 GATE 4

## FASE 5 — 3 proyek pertama (asli)
Tanyakan dulu berapa jam/minggu yang saya punya. Lalu rancang 3 proyek realistis
dikerjakan sambil kuliah, selaras dengan Fullstack + AI dan misi pendidikan /
dampak digital pada anak muda. Salah satunya menjadi batu loncatan ke
"How Things Work". Untuk tiap proyek: masalah & penggunanya, scope MVP 2–4
minggu, stack (pakai bahasa yang sedang saya pelajari), skill yang didapat,
cara menjaga biaya Rp 0 (termasuk API AI), risiko, dan ide konten build-in-public
mingguan. Urutkan dari yang paling mudah. Buat file proyek berstatus `idea`
untuk menggantikan dummy.
🛑 GATE 5

## FASE 6 — Launch
Jalankan Definition of Done + Lighthouse, sitemap, robots, OG image, deploy,
README untuk saya (cara run, menambah konten, deploy). Laporkan semua sisa
entri `sample` yang masih harus diganti.

Mulai FASE 0 sekarang.
```

---

## Tips selama jalan

- **Ganti sesi di setiap gate** kalau percakapan sudah panjang: `/clear`, lalu ketik *"Baca CLAUDE.md, PRD.md, ARCHITECTURE.md, dan docs/progress.md. Lanjutkan Fase N."* Dengan dokumen ini, konteks tidak hilang.
- **Keputusan baru → minta Claude Code menulisnya ke dokumen** (PRD untuk *apa*, ARCHITECTURE untuk *bagaimana*), supaya tidak ditanya ulang.
- **Siapkan Playwright** (`npx playwright install chromium`) supaya Claude Code bisa "melihat" desainnya sendiri.
- **Screenshot > URL.** Kalau suka bagian tertentu dari sebuah situs, screenshot lalu drag ke terminal.
- **Minta kritik:** *"Apa 3 kelemahan terbesar halaman ini dari sudut pandang Rian?"*
