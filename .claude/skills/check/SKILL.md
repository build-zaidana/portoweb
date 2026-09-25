---
name: check
description: Audit cepat kualitas situs — build, kontras warna, aksesibilitas, responsif, reduced motion, dan entri sample yang tersisa. Pakai kapan saja, bukan hanya di akhir fase.
disable-model-invocation: true
argument-hint: "[halaman opsional, mis. /about]"
---

Target audit: `$ARGUMENTS` (kalau kosong, audit seluruh situs). **Jangan mengubah file**, cukup laporkan.

1. `npm run build`: error/warning?
2. **Kontras:** hitung rasio kontras setiap pasangan warna teks/background yang dipakai (light & dark) dari design tokens. Tampilkan tabel; tandai yang < 4.5:1 (teks normal) atau < 3:1 (teks ≥ 24px / elemen UI).
3. **Playwright MCP** di dev server:
   - Cek tidak ada horizontal scroll di 360px, 390px, 768px, 1440px
   - Tab melalui halaman: apakah fokus terlihat dan urutannya logis?
   - Emulasikan `prefers-reduced-motion: reduce`: apakah animasi berhenti?
   - Emulasikan dark mode: apakah ada flash / warna yang lupa diganti?
   - Console: ada error JS?
4. **Semantik:** satu `<h1>` per halaman, heading berurutan, gambar punya alt, link punya teks yang jelas.
5. **Konten:** daftar semua entri `sample: true` yang masih ada.

Output: tabel temuan dengan kolom **Prioritas (Tinggi/Sedang/Rendah) · Temuan · Lokasi · Saran perbaikan**. Tanyakan apakah user ingin temuan itu diperbaiki.
