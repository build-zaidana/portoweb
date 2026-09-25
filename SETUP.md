# SETUP — Claude Code di aplikasi Claude Desktop

Cukup dilakukan sekali.

## 1. Prasyarat (cek di PowerShell)

```powershell
node -v   # butuh v20 ke atas (disarankan versi LTS terbaru)
npm -v
git --version
```

Kalau ada yang belum terinstall: **Node.js LTS** dari nodejs.org, **Git** dari git-scm.com. Setelah install, restart aplikasi Claude.

Opsional tapi disarankan, set identitas git:
```powershell
git config --global user.name "Zaidana"
git config --global user.email "emailmu@contoh.com"
```

## 2. Buka proyek

1. Buka aplikasi Claude → tab **Code**.
2. Pilih folder `C:\Users\adria\AgentPlayground\ClaudeCode\Zaidana-FullstackandDesign`.
3. **Pasang konfigurasi** (sekali saja). Paste pesan ini ke Claude Code:
   ```
   Pindahkan konfigurasi dari folder _setup ke tempatnya:
   - _setup/mcp.json → .mcp.json (di root)
   - isi _setup/claude/ → .claude/ (settings.json, skills/, agents/)
   Jangan ubah isinya. Setelah semua terpindah dan dicek, hapus folder _setup,
   lalu tampilkan daftar isi .claude/ untuk konfirmasi.
   ```
   Setujui izin tulis yang diminta. Lalu **tutup dan buka lagi sesi Claude Code** supaya semuanya terbaca.
4. Saat ditanya **trust folder / izinkan MCP server dari `.mcp.json`**, pilih **izinkan** untuk `playwright` dan `context7`.

## 3. Cek setup berjalan

Ketik di Claude Code:
```
/mcp
```
→ `playwright` dan `context7` harus berstatus *connected*. Kalau `playwright` gagal: pastikan `node -v` jalan, lalu restart aplikasi.

Lalu ketik `/` dan pastikan `/gate`, `/resume`, `/check`, `/design-critique`, `/accessibility-review`, `/ux-copy` muncul di daftar. Skill `frontend-design` juga harus muncul di daftar itu.

Tes cepat:
```
Pakai Playwright buka https://docs.astro.build lalu ambil screenshot. Pakai Context7 cari cara setup Tailwind di Astro.
```

## 4. Mulai

Nyalakan **Plan Mode** (Shift+Tab sampai muncul "plan"), lalu paste prompt dari `KICKOFF.md`.

## Isi folder `.claude/` (supaya kamu paham)

| File | Fungsi |
|---|---|
| `CLAUDE.md` | Aturan & konteks yang dibaca otomatis setiap sesi |
| `.claude/settings.json` | **Permissions.** Perintah aman (npm run, git commit, Playwright) jalan tanpa bertanya; `git push` selalu minta izin; `rm -rf` & baca `.env` diblokir |
| `.mcp.json` | **Tools eksternal.** Playwright = Claude bisa membuka browser & "melihat" desainnya sendiri. Context7 = docs Astro/Tailwind versi terbaru, supaya tidak memakai API usang |
| `.claude/skills/gate` | `/gate 1` → build, screenshot, kritik, update progress, commit, lalu berhenti |
| `.claude/skills/resume` | `/resume` → di sesi baru, baca semua dokumen & lanjutkan dari posisi terakhir |
| `.claude/skills/design-critique` | `/design-critique` → kritik desain terstruktur: kesan pertama, usability, hierarki, konsistensi, a11y, *distinctiveness* |
| `.claude/skills/accessibility-review` | `/accessibility-review` → audit WCAG 2.1 AA lengkap |
| `.claude/skills/ux-copy` | `/ux-copy` → tulis/review teks tombol, CTA, pesan error, empty state |
| `.claude/skills/frontend-design` | Skill resmi Anthropic (dipasang sebagai skill proyek, tanpa perlu install plugin). Aktif saat membuat UI: mendorong arah estetika yang jelas dan menghindari pola desain AI |
| `.claude/agents/code-tidy.md` | Merapikan kode di `/gate`. Membandingkan screenshot & ukuran build sebelum/sesudah, dan otomatis membatalkan perubahan yang menurunkan kualitas |
| `docs/keywords.md` | Daftar keyword dari setiap keputusan, dikelompokkan per topik, untuk kamu cari sendiri |
| `.claude/skills/check` | `/check` atau `/check /about` → audit kontras, a11y, responsif, dark mode (tanpa mengubah file) |
| `.claude/agents/design-critic.md` | Subagent yang mengkritik desain secara tegas sebelum ditunjukkan ke kamu (memuat skill design-critique + accessibility-review) |
| `.claude/agents/copy-reviewer.md` | Subagent yang memeriksa copy English: overclaim, klise AI, nada (memuat skill ux-copy) |
| `docs/progress.md` | Log keputusan & status tiap fase: "memori" proyek antar sesi |

## Alur kerja harian

```
/resume            → Claude melaporkan posisi terakhir
"lanjut"           → Claude mengerjakan fase
(review hasilnya, beri feedback)
/gate N            → verifikasi + commit + berhenti
/clear             → bersihkan konteks sebelum fase berikutnya
```

Kalau ingin mengizinkan perintah tambahan hanya untuk dirimu, buat `.claude/settings.local.json` (tidak ikut di-commit).

## Plugin untuk nanti (jangan dipasang sekarang)

- **Fase 6:** `netlify-skills@claude-plugins-official` *atau* `vercel@claude-plugins-official` (sesuai host), plus `chrome-devtools-mcp@claude-plugins-official` untuk audit performa.
- **Setelah launch** (saat kamu membangun ulang sendiri): `learning-output-style@claude-plugins-official`.
