# Copy deck — Fase 4

> Semua teks situs (English) dalam satu tempat, supaya maknanya bisa dinilai sebelum dipasang.
> Sumber fakta: PRD §1, §4, `src/lib/site.ts` (`profile`). Nada: warm, humble, professional, clear (PRD §4).
>
> **Cara baca:**
> - **A / B** = dua alternatif untuk bagian penting. ⭐ = rekomendasi (alasan 1 kalimat).
> - 🇮🇩 = terjemahan singkat untuk menilai makna, bukan untuk dipasang.
> - 🟨 **[DATA]** = kalimat yang butuh jawaban/data dari Zaidana. Selama belum ada, kalimat itu **tidak tampil** (tidak diisi tebakan).
> - Teks tanpa alternatif = sudah dicek dan dipertahankan (sudah lolos review `copy-reviewer` di Fase 3), atau hanya dirapikan kecil.

## Keputusan (2026-09-25)

- Bagian penting: **semua ⭐** (headline A, perkenalan A, tombol B "See my projects", judul & intro About A, CTA penutup A).
- AI coding assistant: **tidak disebut** (§7 opsi B). Footer tetap "Built in public with Astro."
- Logistik: **"Start date and weekly hours: happy to discuss"** di About dan Contact (`profile.availability`), diganti angka asli nanti.

---

## 1. Home — Hero (bagian penting)

### 1a. Headline

| | Copy | 🇮🇩 |
|---|---|---|
| **A** ⭐ (sekarang) | Learning to build software that helps people. | Belajar membangun software yang membantu orang. |
| **B** | Software that makes people's work a little easier. | Software yang membuat pekerjaan orang sedikit lebih mudah. |

⭐ A: kata "Learning" langsung jujur soal tahap karier, dan itu inti narasi situs ("learning in public"); B lebih catchy tapi terbaca seperti klaim produk yang belum ada.

### 1b. Baris perkenalan (di atas headline)

| | Copy | 🇮🇩 |
|---|---|---|
| **A** ⭐ | I'm Zaidana, a Software Engineering student in Indonesia, focused on fullstack and AI. | Saya Zaidana, mahasiswa Software Engineering di Indonesia, fokus di fullstack dan AI. |
| **B** | Hi, I'm Zaidana. I study Software Engineering in Indonesia and work on fullstack and AI projects. | Hai, saya Zaidana. Saya kuliah Software Engineering di Indonesia dan mengerjakan proyek fullstack dan AI. |

⭐ A: satu kalimat berisi tiga fakta yang dicari Rian (siapa, di mana, fokus), tanpa pembuka "Hi" yang mirip template.

### 1c. Tombol hero

| | Primary | Secondary | 🇮🇩 |
|---|---|---|---|
| **A** (sekarang) | Let's talk | See what I'm building | Ayo ngobrol · Lihat yang sedang saya bangun |
| **B** ⭐ | Let's talk | See my projects | Ayo ngobrol · Lihat proyek saya |

⭐ B: "what I'm building" kurang tepat untuk proyek berstatus *idea*; "See my projects" jelas dan cocok untuk semua status.

### 1d. Baris logistik (tetap)
- Open to remote internships and junior roles in fullstack and AI
- Time zone: UTC+7 (WIB, Jakarta)
- 🟨 **[DATA]** *Overlap: I can work until 21:00 WIB, which covers mornings in Europe.* → butuh jam overlap asli (lihat §8).
- My code is public on github.com/build-zaidana

---

## 2. Home — bagian lain

| Bagian | Copy | Catatan |
|---|---|---|
| Paragraf scroll reveal | I'm learning to build fullstack apps and AI tools that make people's work easier. I write down what I learn in the open, so others can learn with me. | Tetap. Ini value prop PRD §4 dalam versi pendek. |
| Proyek: judul | Things I'm building | Tetap. |
| Proyek: lead | ~~Small tools for students and young learners.~~ → **Things I've built or plan to build. Each write-up covers the problem, my approach, and what I learned.** | Disamakan dengan /projects (klaim "for students" belum ada buktinya). |
| Proyek: tombol | See all projects | Tetap. |
| Tulisan: judul | Notes along the way | Tetap ("note" = satu tulisan, konsisten dengan RSS & newsletter). |
| Tulisan: lead | What I learn, written down while it's still fresh. Mistakes included. | Tetap. |
| Currently | Currently · Updated September 2026 | Tetap. |

---

## 3. About — intro (bagian penting)

### 3a. Judul

| | Copy | 🇮🇩 |
|---|---|---|
| **A** ⭐ (sekarang) | Learning to build, and writing it down. | Belajar membangun, dan menuliskannya. |
| **B** | Curious about how things work, and learning in the open. | Penasaran bagaimana sesuatu bekerja, dan belajar secara terbuka. |

⭐ A: pendek, konkret, dan menggemakan headline Home tanpa mengulangnya persis; B memakai dua frasa abstrak.

### 3b. Paragraf pembuka

**A** ⭐ (sekarang, dirapikan)
> I'm Zaidana, a 21-year-old Software Engineering student in Indonesia. I'm learning fullstack development and AI, and I care most about software that makes people's work easier, especially in education and in how young people use technology.
>
> I'm early in my career, so this site shows the work while it's happening: projects with notes on what I'd change, short write-ups of what I learn, and a now page with what I'm working on this month.

🇮🇩 Saya Zaidana, 21 tahun, mahasiswa SE di Indonesia. Saya belajar fullstack dan AI, dan paling peduli pada software yang memudahkan pekerjaan orang, terutama di pendidikan dan cara anak muda memakai teknologi. Saya masih di awal karier, jadi situs ini menunjukkan pekerjaan saat sedang berlangsung: proyek beserta catatan apa yang akan saya ubah, tulisan singkat tentang yang saya pelajari, dan halaman now.

**B**
> I study Software Engineering in Indonesia and spend most of my free time building small fullstack and AI projects. I'm drawn to problems in education and in how young people use technology.
>
> Nothing here is finished. That's the point: you can see how I work, what I get wrong, and how I fix it.

🇮🇩 Saya kuliah SE di Indonesia dan menghabiskan sebagian besar waktu luang membangun proyek kecil fullstack dan AI. Saya tertarik pada masalah di pendidikan dan cara anak muda memakai teknologi. Belum ada yang selesai, dan memang itu intinya: kamu bisa melihat cara saya bekerja, kesalahan saya, dan cara saya memperbaikinya.

⭐ A: semua klaimnya ada di PRD; B lebih berkarakter tapi "most of my free time" adalah klaim kebiasaan yang belum dikonfirmasi. 🟨 **[DATA]** kalau B terasa lebih "kamu", konfirmasi dulu kalimat itu benar.

### 3c. Bagian lain About

| Bagian | Copy | Catatan |
|---|---|---|
| What I'm looking for | Role · Based in · Time zone · CV | Tetap. |
| + baris baru | 🟨 **[DATA]** *Overlap:* … · *Available from:* … · *Hours per week:* … | PRD §3 minta ini "1 klik" dari halaman mana pun. Tampil hanya kalau diisi. |
| How I think | Look at the evidence before deciding. · Stay curious about how things work. · Learn out loud. | Tetap (PRD §4 Diferensiasi). |
| Timeline | Learning timeline · The milestones so far, newest first. | Tetap. |
| Foto | Photo coming soon (placeholder) | 🟨 **[DATA]** foto asli (bingkai persegi, Gate 0). |

---

## 4. CTA penutup (footer, bagian penting)

| | Headline | Tombol | 🇮🇩 |
|---|---|---|---|
| **A** ⭐ (sekarang) | Hiring for a remote internship or junior role? Or just want to talk tech? | Let's talk | Sedang merekrut intern/junior remote? Atau sekadar ingin ngobrol soal teknologi? · Ayo ngobrol |
| **B** | If you're hiring a remote intern or junior developer, I'd like to hear from you. | Send a message | Kalau kamu sedang merekrut intern/junior developer remote, saya ingin mendengar kabarmu. · Kirim pesan |

⭐ A: dua pertanyaan menyapa dua persona sekaligus (Rian dan sesama developer, PRD §3); B hanya menyapa perekrut.

---

## 5. Contact

| Bagian | Copy | Catatan |
|---|---|---|
| Judul | Let's talk | Tetap (sama dengan tombol yang membawa ke sini). |
| Lead | Hiring for a remote internship or junior role, building something in education or AI, or just want to talk tech? Send a note and I'll reply by email. | Tetap. |
| Form | Name · Email ("I'll reply to this address.") · What's it about? (A remote role / A project together / Just saying hi) · Message ("If it's about a role, a link to the job post helps.") · **Send message** | Tetap. |
| Email & sosial | — | 🟨 **[DATA]** email kerja, X, Instagram (belum ada, disembunyikan). |
| Sukses | Thanks, your message was sent. I'll reply to the email address you gave. | Tetap. |
| Gagal | It didn't send. Please try again, or reach me on GitHub. | Tetap (diganti "email me at …" setelah ada email). |

---

## 6. Halaman lain (sudah dirapikan di Fase 3, dipertahankan)

- **Projects:** "Things I've built or plan to build. Each write-up covers the problem, my approach, what happened, and what I learned, including what didn't work." Empty: "No project write-ups yet. My practice code is on GitHub."
- **Detail proyek:** Code "Not public" · Demo "No live demo yet" · "Next project".
- **Writing:** "What I learn, written down while it's still fresh. Plain explanations, the mistakes I made, and what fixed them." · "Follow with RSS".
- **Now:** "I update this now page about once a month." · "Also this month".
- **Newsletter:** "No newsletter yet. For now, follow new notes with RSS or watch the code on GitHub." (Saat Buttondown aktif: "Get new notes by email".)
- **404:** "This page isn't here. The link might be old or mistyped. Try one of these:"

---

## 7. Card hero "This site" (keputusan tertunda sejak Fase 2)

Situs ini dibangun bersama AI coding assistant (Claude Code). Menyebutkannya atau tidak?

| | Copy (footer + card) | 🇮🇩 |
|---|---|---|
| **A** ⭐ | Footer: "Built in public with Astro and Claude Code." · About/proyek situs: "I use an AI coding assistant for parts of the build; the decisions and reviews are mine." | Dibangun terbuka dengan Astro dan Claude Code. Saya memakai AI coding assistant untuk sebagian pengerjaan; keputusan dan review-nya dari saya. |
| **B** | Footer tetap: "Built in public with Astro." Tidak disebut. | — |

⭐ A: fokus situs adalah AI dan kejujuran; tech lead menghargai orang yang tahu cara memakai AI dengan benar, dan ketahuan belakangan terasa lebih buruk daripada disebut di depan. 🟨 **[DATA]** hanya pakai A kalau kalimat "the decisions and reviews are mine" memang benar menurutmu.

---

## 8. Pertanyaan data untuk Zaidana (🟨)

1. **Jam overlap**: sampai jam berapa (WIB) kamu bisa online untuk tim di zona lain? (mis. "until 21:00 WIB")
2. **Mulai kapan** bisa magang/kerja? (bulan/tahun, atau "flexible")
3. **Jam per minggu** yang tersedia? (mis. "20 hours a week during semester, full-time on breaks")
4. **Foto** untuk About, dan **CV** asli (PDF).
5. **Email kerja**, akun **X/Instagram**, akun **Buttondown** (kapan pun siap).

Kalau 1–3 masih belum pasti, opsi aman: satu baris **"Start date and weekly hours: happy to discuss."** (🇮🇩 "Tanggal mulai dan jam per minggu: bisa didiskusikan.")
