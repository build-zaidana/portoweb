# Proposal 3 proyek pertama — Fase 5

> Dasar: **8–12 jam/minggu** sambil kuliah · bahasa yang **sedang dipelajari**: Go, TypeScript, Python ·
> tema: **How Things Work** + pendidikan / anak muda (PRD §1, KICKOFF Fase 5).
> Diurutkan **dari yang paling mudah**. Setiap proyek memakai satu bahasa sebagai "bahasa utama" supaya
> ketiganya terlatih, dan setiap proyek menghasilkan bahan tulisan mingguan (build in public).
>
> Aturan biaya: **Rp 0**. AI dijalankan **lokal (Ollama)** atau **di browser (WebLLM)**, bukan API berbayar.
> Free tier penyedia (hosting/AI) berubah-ubah: **cek batasnya saat mulai membangun**, jangan diasumsikan.

---

## Ringkasan

| # | Proyek | Bahasa utama | AI | MVP | Kesulitan |
|---|---|---|---|---|---|
| 1 | **What your browser sends** — penjelas HTTP interaktif | **Go** + TypeScript | Tidak | 2 minggu | ★☆☆ |
| 2 | **Plain-words glossary** — istilah software untuk usia 14–18 | **Python** | Ya, lokal (Ollama) | 3 minggu | ★★☆ |
| 3 | **Quiz from lecture notes** — kuis dengan sumber kalimat | **TypeScript** | Ya, di browser (WebLLM) | 4 minggu | ★★★ |

Urutan membangun: 1 → 2 → 3. Proyek 1 jadi pintu masuk "How Things Work" (tulisan pertamanya bisa langsung jadi isi `/learn` nanti). Proyek 2 menghasilkan kosakata yang dipakai proyek 1 dan 3. Proyek 3 memakai semua yang dipelajari sebelumnya.

---

## 1. What your browser sends ★☆☆

**Masalah & pengguna.** Pelajar dan developer pemula sering memakai web tiap hari tanpa tahu apa yang sebenarnya dikirim browser saat membuka sebuah halaman. Penjelasan HTTP di internet biasanya abstrak (diagram), bukan data milik pembaca sendiri.

**Ide.** Buka satu halaman → server kecil (Go) memantulkan **request asli milik pengunjung** (method, path, header, IP negara kasar, bahasa, user agent) → halaman menjelaskan setiap baris dalam bahasa sederhana: "Ini `Accept-Language`, browsermu memberi tahu server kamu membaca bahasa…". Tanpa menyimpan apa pun.

**Scope MVP (2 minggu, ~20 jam)**
- Go: endpoint `GET /echo` yang mengembalikan request sebagai JSON (header disaring: cookie & token tidak pernah ditampilkan).
- TypeScript: satu halaman yang menampilkan request itu sebagai "surat" baris per baris, dengan penjelasan per header (kamus penjelasan ditulis sendiri, ±15 header umum).
- Tidak ada database, tidak ada log isi request.
- *Opsional (kalau ada waktu):* tombol "kirim ulang dengan bahasa lain" untuk melihat header berubah.

**Stack.** Go (`net/http`, `encoding/json`) sebagai Netlify Function (Netlify mendukung function Go) · TypeScript di situs Astro ini (satu halaman `/learn/http` nanti) · test Go dengan `testing` + `httptest`.

**Skill yang didapat.** Dasar HTTP (method, header, status), Go standard library, menulis test di Go, serverless function, privasi data (apa yang tidak boleh ditampilkan/disimpan).

**Rp 0.** Satu host dengan situs (Netlify free tier). Tanpa AI, tanpa database.

**Risiko.** (1) Header sensitif ikut tampil → daftar *allowlist*, bukan *blocklist*, plus test. (2) Batas invocation free tier → halaman tetap berguna dengan contoh request statis kalau function mati. (3) Scope melebar ke TCP/TLS/DNS → simpan untuk tulisan lanjutan, bukan MVP.

**Konten mingguan.**
- M1: "What my browser told a server about me (and what I decided not to show)."
- M2: "My first Go test: checking that cookies never leak." + rilis MVP.
- Lanjutan (seri How Things Work): DNS dalam 5 menit, "what happens between typing a URL and seeing a page".

---

## 2. Plain-words glossary ★★☆

**Masalah & pengguna.** Remaja 14–18 yang mulai tertarik teknologi bertemu istilah (API, cache, cookie, deploy) yang dijelaskan dengan istilah lain lagi. Kamus yang ada ditulis untuk developer.

**Ide.** Sebuah **pipeline Python** yang membantu *menulis*, bukan menggantikan penulis: untuk setiap istilah, model lokal membuat draf penjelasan dengan aturan ketat (maks 60 kata, satu analogi sehari-hari, tanpa istilah teknis lain). Zaidana mengedit dan menyetujui, lalu hasilnya jadi file Markdown di situs (satu kartu per istilah).

**Scope MVP (3 minggu, ~30 jam)**
- Python CLI: `glossary draft "cache"` → draf dari model lokal lewat Ollama → disimpan sebagai Markdown berstatus `draft`.
- Pemeriksa otomatis: panjang kata, skor keterbacaan (mis. Flesch reading ease), daftar kata terlarang (jargon), dan cek bahwa istilah lain yang dipakai sudah ada di glosarium.
- 20 istilah pertama yang **sudah diedit manusia**, tampil di situs sebagai kartu.
- *Opsional:* bandingkan 2 model lokal dan tulis hasilnya.

**Stack.** Python 3 (`typer` untuk CLI, `httpx` ke Ollama API lokal, `textstat` untuk keterbacaan, `pytest`) · Markdown → content collection Astro.

**Skill yang didapat.** Python tooling (CLI, packaging, test), prompt design dengan aturan terukur, evaluasi output AI dengan angka (bukan "kelihatannya bagus"), alur *human-in-the-loop*.

**Rp 0.** Ollama menjalankan model open-weight di laptop sendiri, gratis. Situs hanya menampilkan Markdown statis, jadi tidak ada biaya AI saat orang membaca. *Syarat:* laptop cukup kuat untuk model kecil (±3–8B parameter); kalau tidak, draf ditulis manual dan pemeriksanya tetap dipakai.

**Risiko.** (1) Draf AI salah secara fakta → setiap istilah wajib diedit dan disetujui manusia; label "reviewed by me" hanya untuk yang sudah dicek. (2) Laptop lambat → pakai model lebih kecil, proses di malam hari. (3) Menulis 20 istilah lebih lama dari coding → targetkan 5 istilah/minggu.

**Konten mingguan.**
- M1: "I asked a local model to explain 'cache' to a 15-year-old. Here's what it got wrong."
- M2: "Measuring 'easy to read' with a number (and where the number lies)."
- M3: rilis 20 istilah + "what I'd change in the prompt".
- Setiap istilah bisa jadi posting pendek sendiri.

---

## 3. Quiz from lecture notes ★★★

**Masalah & pengguna.** Mahasiswa membaca ulang catatan kuliah dan merasa sudah belajar, padahal membaca ulang hampir tidak menguji apa pun. Membuat soal latihan sendiri butuh waktu.

**Ide.** Tempel satu halaman catatan → dapat 5 soal pilihan ganda, dan **setiap jawaban menunjuk kalimat sumbernya** di catatan, sehingga soal yang keliru mudah ketahuan. Semua jalan **di browser** pengguna: catatan tidak pernah dikirim ke server.

**Scope MVP (4 minggu, ~40 jam)**
- TypeScript: form tempel catatan → pecah jadi kalimat bernomor → minta model membuat 5 soal dalam format JSON yang divalidasi (Zod) → tampilkan soal + highlight kalimat sumber.
- Model di browser lewat **WebLLM** (WebGPU). Kalau browser tidak mendukung WebGPU: tampilkan pesan jelas + contoh hasil yang sudah direkam.
- Validasi: soal ditolak kalau kalimat sumbernya tidak ada di catatan (anti-halusinasi sederhana).
- *Opsional:* ekspor soal ke Markdown; mode "tunjukkan jawaban setelah memilih".

**Stack.** TypeScript (Astro island atau Vite + TS murni), WebLLM, Zod, Vitest. *(Alternatif server: Go atau Python + Ollama untuk dipakai sendiri, bukan untuk demo publik.)*

**Skill yang didapat.** Structured output dari LLM + validasi skema, grounding sederhana (jawaban harus punya sumber), Web Worker agar UI tidak macet, pengalaman pengguna untuk proses lambat (loading, progres unduh model), privasi *local-first*.

**Rp 0.** Model berjalan di perangkat pengunjung, tidak ada server AI. Hosting statis di Netlify.

**Risiko.** (1) Unduhan model besar (ratusan MB–1 GB) → pakai model kecil, beri tahu ukurannya sebelum mengunduh, simpan di cache browser. (2) Tidak semua perangkat punya WebGPU → fallback ke contoh + penjelasan. (3) Kualitas soal dari model kecil kurang bagus → batasi ke soal fakta sederhana, ukur "berapa soal perlu diedit" pada 1 mata kuliah selama 2 minggu (sudah jadi rencana *Result*).

**Konten mingguan.**
- M1: "Why the quiz never sends your notes anywhere (local-first AI in the browser)."
- M2: "Making a small model return valid JSON: schemas, retries, and failures."
- M3: "Catching made-up answers: every answer needs a source sentence."
- M4: rilis + angka nyata dari uji 2 minggu.

---

## Apa yang berubah di situs

- 3 proyek sample diganti 3 file proyek **asli berstatus `idea`** (tanpa `sample: true`), jadi ketiganya **tampil di production**.
- Isi setiap halaman proyek mengikuti Problem → Approach → Result → Learnings. Result dan Learnings jujur: belum dibangun.
- Untuk status `idea`, label tanggal menjadi **"Added"** (bukan "Started"), supaya tidak mengklaim pekerjaan sudah dimulai.
- Proyek 1 mendapat ilustrasi mini-UI baru (`request`): baris request HTTP + status `200 OK`.
