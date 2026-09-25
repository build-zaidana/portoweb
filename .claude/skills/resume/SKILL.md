---
name: resume
description: Lanjutkan pekerjaan di sesi baru — baca semua dokumen proyek, laporkan posisi terakhir, lalu lanjutkan fase berikutnya.
disable-model-invocation: true
---

Ini sesi baru. Sebelum melakukan apa pun:

1. Baca `CLAUDE.md`, `PRD.md`, `KICKOFF.md`, `ARCHITECTURE.md` (jika ada), dan `docs/progress.md`.
2. Jalankan `git log --oneline -15` dan `git status`.
3. Laporkan dalam ≤ 8 baris (Bahasa Indonesia):
   - Fase terakhir yang disetujui & fase yang akan dikerjakan
   - Keputusan final yang relevan untuk fase itu
   - Pekerjaan yang belum di-commit / belum selesai (jika ada)
   - Rencana langkah untuk fase ini
4. Tunggu user bilang "lanjut" sebelum mulai mengubah file.
