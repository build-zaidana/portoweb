---
name: gate
description: Tutup fase yang sedang berjalan — verifikasi, screenshot, kritik desain, update dokumen, commit, lalu berhenti menunggu persetujuan.
disable-model-invocation: true
argument-hint: "[nomor fase]"
---

Kita menutup **Fase $ARGUMENTS**. Jalankan urutan ini, jangan ada yang dilewati:

1. **Build:** `npm run build`. Kalau gagal, perbaiki dulu.
2. **Screenshot:** jalankan dev server, lalu pakai Playwright MCP untuk mengambil screenshot setiap halaman yang diubah di fase ini: light & dark × 1440px & 390px. Simpan ke `docs/screenshots/fase-$ARGUMENTS/`. Matikan dev server setelah selesai.
3. **Kritik:** delegasikan ke subagent `design-critic` (untuk UI) dan/atau `copy-reviewer` (untuk teks). Perbaiki semua temuan prioritas tinggi, lalu ulangi langkah 1–2 bila ada perubahan.
3b. **Rapikan kode:** delegasikan ke subagent `code-tidy` untuk file yang diubah di fase ini. Agent itu wajib membandingkan screenshot dan ukuran build sebelum/sesudah, lalu me-revert perubahan apa pun yang menurunkan kualitas. Kalau fase ini hanya mengubah sedikit kode, langkah ini boleh dilewati (sebutkan di laporan).
4. **Checklist:** jalankan Definition of Done di CLAUDE.md, tandai ✅/❌ per item.
5. **Dokumen:** update `docs/progress.md` (selesai, keputusan, tertunda, catatan untuk fase berikutnya) dan `docs/keywords.md` (keyword baru dari fase ini). Update `ARCHITECTURE.md` kalau ada perubahan struktur.
6. **Commit** dengan pesan Conventional Commits.
7. **Laporan ke user (Bahasa Indonesia, markdown):**
   - Ringkasan 3–5 poin apa yang dibangun
   - Keputusan penting, format `🔑 keputusan — keyword · keyword` (1 baris per keputusan)
   - Hasil checklist
   - Hal yang butuh keputusan user
   - Path screenshot

Lalu **BERHENTI**. Jangan mulai fase berikutnya sampai user bilang "lanjut".
