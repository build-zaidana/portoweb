# Referensi Desain

> Dibaca Claude Code **sebelum** membuat UI apa pun. Ambil **prinsipnya**, jangan menyalin aset, logo, maskot, atau font berlisensi milik situs lain.
> Format: gambar → yang user suka (kata-kata user) → terjemahan ke prinsip desain.

---

## micro.so

**Kata user:** "aku suka micro karena font, pemilihan warna, dan layoutnya, navigation bar-nya juga terlihat rapi"

### 01-micro-hero-typography.png
- **Headline dua karakter font dalam satu kalimat:** sans geometris sangat tebal ("Meet your", "assistant") dipadu serif condensed yang lebih ringan ("most capable & intelligent"). Baris-barisnya saling mengunci seperti logotype, bukan sekadar tiga baris rata tengah.
- **Tipografi sebagai elemen visual utama.** Tidak ada foto atau gradient di hero, cukup huruf besar dan satu karakter ilustrasi yang "berinteraksi" dengan teks.
- **Ruang kosong sangat lega.** Hero hampir kosong, dan justru itu yang membuatnya terasa percaya diri.
- **Warna:** background abu-abu terang **netral** (bukan krem), teks near-black, nyaris tanpa warna aksen.
- 🔑 `css font-pairing serif sans` · `display typography` · `optical kerning` · `negative letter-spacing headline`

### 02-micro-hero-nav-product.png
- **Navbar berbentuk "pil" melayang di tengah:** rounded, border tipis, background terang, sedikit shadow, dan hanya berisi beberapa link + 1 tombol gelap. Terasa rapi karena kecil dan fokus.
- **Kontras warna di dalam headline:** frasa kunci hitam + sans tebal, frasa pendukung abu-abu + serif. Pola ini dipakai **konsisten sebagai sistem** di seluruh situs, bukan cuma untuk menonjolkan satu kata.
- **CTA:** tombol utama gelap solid + tombol sekunder outline. Hanya 2 tombol, jelas mana yang utama.
- **Produk ditampilkan sebagai "jendela"** dengan radius besar dan shadow sangat halus. Maskot mengintip dari balik jendela itu: detail kecil yang membuat situs diingat.
- 🔑 `floating navbar` · `pill navigation` · `backdrop-filter blur` · `sticky header` · `button hierarchy primary secondary`

### 03-micro-feature-sections.png
- **Section fitur:** judul serif condensed besar, subjudul sans abu-abu, daftar fitur 2 kolom dengan ikon garis kecil, tombol outline "Learn more". Semuanya **rata kiri**, bukan rata tengah.
- **Kartu UI di atas background lukisan langit bertekstur (gaya cat minyak).** Warnanya biru langit lembut, **cocok dengan palet biru langit `#A8C5D6` di brief.** Ini pembeda yang kuat: hangat, artistik, dan tidak terasa template.
- **Widget kecil yang personal di pojok kanan bawah** (music player "New Computer") + tombol dark mode. Memberi kepribadian tanpa mengganggu.
- 🔑 `left-aligned layout` · `painterly background texture` · `image-set() / avif` · `fixed position widget` · `theme toggle`

---

## craft.do

**Kata user:** "aku suka craft karena pemilihan warnanya tidak menusuk mata, navbarnya bagus, card-nya menarik (bukan sekadar kotak berwarna dengan tulisan, tapi ada gambarnya), font dan layoutnya juga oke"

### 04-craft-hero-megamenu.png
- **Warna tidak menusuk mata:** semua warna adalah **pastel dengan saturasi rendah dan kecerahan tinggi** (biru langit, periwinkle, kuning mentega, mint). Tidak ada warna yang "berteriak". Hitam hanya dipakai untuk logo, tombol utama, dan teks.
- **Hero dibingkai sebagai kartu besar** dengan sudut membulat dan sedikit jarak dari tepi layar. Background-nya gradient langit + awan bertekstur **halftone/dither** (titik-titik), bukan gambar awan realistis.
- **Navbar pil yang membuka jadi mega-menu:** saat di-hover, pil melebar jadi panel putih semi-transparan berisi grid item (ikon garis + judul + deskripsi 1 baris). Transisinya halus dan terasa "hidup".
- **Headline serif berbobot regular** (tidak tebal), besar, rata tengah. Tombol CTA berbentuk pil dengan shadow lembut.
- **Kolase bertekstur:** potongan kertas sobek, kertas bergaris, blob biru, dan huruf besar bergaris tipis di latar. Detail "buatan tangan" ini membuatnya hangat dan tidak terasa template.
- 🔑 `pastel color palette low saturation` · `halftone dither texture css` · `mega menu navigation` · `backdrop-filter` · `paper texture collage web design`

### 05-craft-cards-section.png
- **Card yang tidak generik:** tiap card punya **warna pastel berbeda** (periwinkle, biru langit, mint) + **ilustrasi/potongan UI yang miring dan bertumpuk**, dan gambarnya "bocor" sampai tepi bawah card. Judul serif + deskripsi abu-abu di atas. Ketiga card mirip strukturnya, tapi isinya unik.
- **Elemen dekoratif menembus batas card** (awan halftone menimpa sudut card kanan), jadi layout terasa berlapis dan tidak kaku.
- **Background section off-white hangat**, sehingga warna pastel card terlihat lembut.
- Headline serif Title Case rata tengah + subjudul sans abu-abu.
- ⚠️ **Jangan ditiru:** eyebrow ALL-CAPS kecil ("ORGANIZE") di atas heading. Skill `frontend-design` menandainya sebagai ciri desain AI/template.
- 🔑 `card design layered illustration` · `css transform rotate` · `overflow visible decorative element` · `bento cards`

---

## wabi.ai

**Kata user:** "aku suka pemilihan font dan warna fontnya, glass button seperti 'Get the app' dengan animasi yang membuat glass-nya semakin nyata, dan yang utama: animasi yang bisa nge-swipe card mockup untuk berganti antar card"

### 06 / 07 / 08-wabi-hero-card-stack-*.png (3 frame dari animasi yang sama)
- **Font & warna font:** headline **serif berbobot light/regular** ("Make it personal"), besar, jarak antarbaris rapat. Subjudul sans berwarna **abu-abu sedang**, jadi hierarkinya jelas tanpa perlu warna. Background abu-abu terang netral, teks near-black.
- **Subjudul yang berganti sinkron dengan card:** "love letters" → "tiny software" → "daily rituals". Kata di tengah kalimat berganti setiap kali card di kanan berpindah. Ada deretan avatar kecil bertumpuk di akhir kalimat, sebagai detail personal.
- **⭐ Card stack yang bisa di-swipe (paling disukai user):** beberapa mockup ditumpuk dengan **perspektif 3D** (miring, seperti kartu yang dipegang). Card depan bisa di-swipe/di-drag untuk berganti, lalu card berikutnya maju ke depan. Transisinya halus: posisi, rotasi, skala, dan bayangan ikut berubah.
- **Glass button "Get the app":** pil putih semi-transparan dengan highlight tipis di tepi atas (seperti pantulan cahaya), shadow lembut di bawah, dan animasi kilau/pantulan yang bergerak sehingga terasa seperti kaca sungguhan.
- **Layout split asimetris:** teks di kiri, visual di kanan, banyak ruang kosong. Navbar minimal (logo kiri, 1 tombol kanan). Footer kecil satu baris.
- 🔑 `css perspective rotateY rotateZ` · `card stack swipe carousel` · `pointer events drag gesture` · `framer motion drag` (sebagai pembanding; di Astro pakai vanilla JS atau `motion` kecil) · `text rotate animation` · `glassmorphism button css` · `backdrop-filter blur` · `inset box-shadow highlight` · `css @property animated gradient`

**Motion yang diukur (Playwright, Gate 0):**
- Stack memakai `perspective` ±1200px. Card depan miring **3–4°**, card di belakangnya `scale(.85)` + miring **−2.6°** + opacity .95. Jadi kedalamannya datang dari skala + rotasi kecil, bukan rotasi 3D yang ekstrem.
- **Tidak berganti otomatis** (diam selama ≥ 4 detik). Pergantian hanya lewat drag/swipe.
- Saat card ditekan, card mengecil ke `scale(.975)` (feedback "dipegang"). Setelah dilepas, card berpindah dengan `transform 0.22s` + `top 0.4s`, easing `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out yang cepat lalu melambat), opacity 0.3s.
- Frasa di subjudul ("daily rituals" → "tiny software") berganti bersamaan dengan card, lewat crossfade huruf demi huruf dari kiri ke kanan.
- 🔑 `cubic-bezier(0.22, 1, 0.36, 1) ease-out-quint` · `pointerdown pointermove pointerup` · `setPointerCapture` · `transform scale press feedback`

**Catatan aksesibilitas untuk card swipe (wajib):**
- Harus bisa dioperasikan **tanpa swipe**: tombol prev/next + keyboard (panah kiri/kanan).
- Kalau berganti otomatis, wajib ada tombol **pause** dan berhenti saat di-hover/fokus. 🔑 `wcag 2.2.2 pause stop hide`
- Pergantian teks diumumkan ke screen reader. 🔑 `aria-live polite` · `aria-roledescription carousel`
- `prefers-reduced-motion` → tanpa animasi 3D, cukup crossfade atau tampilan statis.

---

## cosmos.so

**Kata user:** "aku lebih suka motion-nya, tulisan COSMOS di bawah, dan fade blur-nya"

### 09-cosmos-gallery-progressive-blur.png
- **Fade blur (progressive blur):** galeri gambar masonry makin ke bawah makin **buram dan memudar** ke warna background secara bertahap, bukan terpotong tajam. CTA diletakkan di atas area buram itu, jadi terbaca jelas tapi galerinya tetap terasa "berlanjut".
- Header juga punya fade putih tipis di bawahnya, jadi konten yang di-scroll menghilang halus di bawah navbar.
- **CTA sangat besar:** kalimat pendek ("Dream with us.") + tombol pil hitam raksasa + tombol outline kecil di bawahnya.
- 🔑 `progressive blur css` · `mask-image linear-gradient` · `backdrop-filter blur layered` · `masonry layout css columns` · `fade out edge scroll`

### 10-cosmos-floating-cards-footer-wordmark.png
- **Motion:** puluhan kartu gambar kecil **melayang miring secara acak** di sekitar CTA. Sebagian buram dan transparan seolah jauh di belakang (efek kedalaman / depth of field). Gerakannya pelan, seperti mengambang.
- **Tulisan "COSMOS" raksasa di footer:** wordmark selebar layar dan terpotong di tepi bawah viewport. Tegas, percaya diri, dan jadi penutup halaman yang diingat. Link footer kecil abu-abu di atasnya.
- 🔑 `oversized footer wordmark` · `font-size clamp vw` · `overflow hidden clip` · `floating cards animation css keyframes` · `depth of field blur opacity` · `mouse parallax` · `IntersectionObserver pause offscreen`

---

## lovi.care

**Kata user:** "aku suka banget motion-nya, dan adanya logo/ikon di antara tulisan juga cukup menarik, **tapi jangan overdo**"

### 11-lovi-scroll-text-reveal-inline-icons.png
- **Motion: teks yang "terisi" saat di-scroll.** Paragraf besar awalnya pudar (abu-abu/ungu muda), lalu kata demi kata berubah jadi hitam mengikuti scroll. Gerakannya dikendalikan scroll pembaca, jadi terasa tenang dan tidak memaksa.
- **Ikon kecil di tengah kalimat:** ikon bergradasi lembut diselipkan tepat sebelum kata kuncinya ("Set your ◎ goals", "track changes with ◐ face scanner"). Ikon jadi penanda visual, dan teksnya tetap bisa dibaca tanpa ikon.
- Satu kolom sempit, rata kiri, ukuran teks besar, banyak ruang kosong. Font sans humanis dengan karakter unik (huruf "k").
- 🔑 `scroll-driven animations` · `animation-timeline view()` · `scroll text reveal word by word` · `gsap scrolltrigger` (pembanding) · `inline svg icon in text` · `vertical-align middle icon`

### 12-lovi-hero-annotation-callouts.png
- **Callout/anotasi:** kartu kecil ("Oily", "Wrinkles", "Pigmentation") dihubungkan garis tipis + titik ke bagian tertentu gambar. Tiap callout berisi judul + chip keterangan. Rasanya seperti "menjelaskan" gambar.
- Headline sans rata tengah, subjudul kecil, badge pil kecil di atas headline.
- 🔑 `annotation callout ui` · `svg line draw animation` · `stroke-dashoffset` · `absolute positioning hotspot`

**Motion yang diukur (Playwright, Gate 0):**
- Paragrafnya dipecah **per huruf** (±650 `<span>`). Ada 2 lapisan: teks pudar (lavender muda) di bawah, dan salinan hitam di atasnya yang opacity-nya naik 0 → 1 **huruf demi huruf, dikendalikan posisi scroll** (scrub, bukan dipicu sekali). Kira-kira 60 huruf ter-reveal per ±200px scroll, dan tepinya bergradasi ±6–8 huruf, jadi terasa seperti tinta yang meresap.
- Tidak ada gerakan posisi (`transform: none`), hanya opacity. Karena itu terasa tenang.
- Untuk Zaidana: pakai CSS `animation-timeline: view()` per **kata** (bukan per huruf) supaya DOM tetap ringan dan screen reader membaca kalimat utuh (teks asli tetap satu node, efeknya di lapisan `aria-hidden`).

**Batas supaya tidak overdo (permintaan user):**
- Scroll text reveal **hanya di satu paragraf** di seluruh situs (usulan: paragraf cerita singkat di Home atau pembuka About).
- Ikon di dalam kalimat **maksimal 3 per paragraf**, **hanya** di paragraf itu. Ikon orisinal **bergaya sketsa tangan** (gaya daylight, lihat di bawah) dengan warna palet situs. Bukan emoji, bukan ikon 3D mengilap.
- Reduced-motion atau browser yang belum mendukung: teks langsung tampil penuh, tanpa efek.
- Kontras: warna pudar hanya untuk **status sebelum terbaca**. Setelah ter-reveal, teks harus kontras penuh. Jangan biarkan ada teks penting yang berhenti dalam kondisi pudar.

---

## integratedbio.com

**Kata user:** "aku suka motion-nya dan bentuk card-nya yang unik"

### 13-integratedbio-notched-cards.png
- **Bentuk card unik (notched card):** sudut kanan bawah card "dicoak" dengan lekukan miring yang halus, lalu tombol panah kotak-membulat berwarna **hijau lime muda** duduk tepat di coakan itu. Card dan tombol terlihat seperti dua potongan puzzle yang pas.
- **Variasi warna card dalam satu grid:** putih → hijau-abu gelap (mirip **sage gelap**) → charcoal. Strukturnya sama, tapi warnanya membuat ritme. Satu card utama besar (gambar kiri, teks kanan) di atas 3 card kecil.
- **Palet natural & tenang:** abu-abu terang, hijau-abu, charcoal, satu aksen lime lembut. Sangat dekat dengan sage di brief.
- Heading raksasa ("Newsroom") yang sebagian tertutup logo pil, jadi terasa berlapis. Navbar pil dengan item aktif berwarna gelap.
- **Motion (diamati via Playwright, Gate 0):** motion-nya ada di **hover card**, bukan saat scroll. (1) Judul mendapat underline yang tumbuh dari kiri per baris (`background-size` 0.3s `cubic-bezier(0.16,1,0.3,1)`). (2) Tombol panah di coakan **mengecil** (~`scale(.87)`) dan warna lime-nya memudar menjadi warna card (0.6s `cubic-bezier(0.25,1,0.5,1)`), seolah tombolnya "masuk" ke coakan. Tenang, informatif, dan hanya dipicu user.
  - 🔑 `background-size underline animation` · `linear-gradient text underline` · `transform scale hover` · `cubic-bezier easing`
- ⚠️ **Jangan ditiru:** label monospace ALL-CAPS ("PUBLICATIONS", "READ ARTICLE", tanggal). Skill `frontend-design` menandainya sebagai ciri template.
- 🔑 `inverted border radius css` · `css notch corner` · `clip-path path()` · `css shape() function` · `mask-image radial-gradient corner` · `svg mask card` · `featured card grid layout`

---

## letters.app

**Kata user:** "aku suka card-nya dengan warna calm-nya, dan tombol Letters/Transcribe yang ada di bawah"

### 14-letters-calm-cards-segmented-control.png
- **Card calm:** card besar abu-abu sangat terang di atas background putih, **tanpa border dan tanpa shadow**, sudut sangat membulat. Isinya rata kiri: chip pil kecil (ikon + nama), judul sans medium 2 baris, lalu **ilustrasi mini-UI** yang melayang di tengah (potongan antarmuka: tombol upload, bar transkripsi dengan waveform). Di bawah ada tombol pil putih "About Letters ›".
- Warnanya nyaris monokrom: putih, abu-abu terang, teks near-black, dan sedikit biru lembut di ilustrasi. Tenang karena **perbedaannya hanya dari nada abu-abu**, bukan warna.
- **Tombol "Letters / Transcribe" di bawah = segmented control:** wadah pil abu-abu berisi 2 pilihan. Pilihan aktif berupa pil putih yang "terangkat" (shadow tipis), yang tidak aktif berupa teks abu-abu. Dipakai untuk mengganti konten "How Letters works" tanpa pindah halaman.
- Ikon kecil di dalam headline ("Save ▭ hours", "How ⚇ Letters works"), pola yang sama dengan lovi.care.
- 🔑 `segmented control` · `tabs role="tablist" aria-selected` · `sliding pill indicator animation` · `FLIP animation` · `mini ui illustration card` · `borderless card design`

---

## useorigin.com

**Kata user:** "aku suka warna gelapnya, font-nya juga oke, ada motion simpel di tombol 'More about spending', dan background titik-titik juga oke"

### 15-origin-dark-cards-carousel-controls.png
- **Warna gelap yang enak dilihat:** background hampir hitam, card sedikit lebih terang, dan panel di dalam card lebih terang lagi. **Kedalaman dibuat dari tingkat kecerahan + border 1px tipis, bukan dari shadow.** Teks utama putih, teks sekunder abu-abu, dan warna (biru, hijau, merah) hanya muncul kecil di data.
- **Font:** headline serif besar dengan jarak antarbaris rapat, body sans bersih.
  - ⚠️ Pola "satu kata miring" (*Track* your entire…) **tidak diambil**. Skill `frontend-design` menandai aksen satu kata di headline sebagai ciri desain AI/template.
- **Motion di tombol "More about spending":** label tombol mengikuti card yang sedang aktif di carousel di bawahnya, dan ada **garis progres tipis** di bawah tombol yang terisi selama card tampil sebelum berganti. Simpel, tapi memberi tahu "sesuatu sedang berjalan".
- **Carousel card horizontal dengan kontrol prev / pause / next** di bawahnya. Card di tepi terpotong dan pudar. Contoh bagus kontrol carousel yang **aksesibel** (ada tombol pause).
- 🔑 `dark mode elevation surface lightness` · `1px border rgba white` · `carousel progress indicator` · `animation-play-state paused` · `accessible carousel pause button` · `wcag 2.2.2`

### 16-origin-dark-dot-grid.png
- **Background titik-titik:** pola titik kecil yang sangat samar, **memudar ke tepi** dengan bentuk elips (lebih terlihat di tengah, hilang di pinggir). Memberi tekstur tanpa mengganggu teks.
- Satu titik hijau kecil sebagai penanda "live", dan notifikasi berbentuk pil yang bertumpuk (ada 2 lapisan samar di belakangnya).
- ⚠️ **Tidak diambil:** navigasi dan label huruf kapital monospace ("PRODUCTS", "GET STARTED →"). Ditandai skill `frontend-design` sebagai ciri template.
- 🔑 `css dot grid background radial-gradient` · `background-size pattern` · `mask-image radial-gradient ellipse` · `stacked notification ui` · `status indicator pulse`

---

## daylightcomputer.com

**Kata user:** "aku suka karena ada sketch icon-nya, dan layout-nya juga cukup oke"

### 17-daylight-sketch-icon-nav-cards.png
- **Ikon sketsa tangan:** garis putih yang tidak sempurna seperti kapur/spidol, dengan ujung membulat dan ketebalan sedikit bervariasi. Terasa manusiawi dan hangat, kebalikan dari ikon digital yang "terlalu rapi".
- **Layout navigasi:** headline + deskripsi di kiri, 4 card navigasi di kanan (Product / Specs / FAQ / Support). Tiap card berisi ikon besar di atas + bar label dengan panah di bawah. Card yang aktif/di-hover berubah jadi **warna amber hangat**.
- Background gelap yang **hangat** (hitam kehijauan/zaitun), bukan hitam netral.
- Penanda section kecil berupa **tiga titik fase bulan** (●◗◗) di atas headline. Detail kecil yang personal.
- 🔑 `hand-drawn svg icons` · `excalidraw export svg` · `rough.js` · `svg stroke-linecap round` · `card hover fill transition` · `warm dark background`

### 18-daylight-stamped-app-icons.png
- **Ikon bergaya cap/letterpress:** logo aplikasi digambar ulang monokrom abu-abu tua dengan tekstur seperti dicap tinta, di atas tile beige lembut dengan shadow sangat halus. Konsisten walaupun sumber logonya beda-beda.
- Headline light dengan jarak huruf rapat, subjudul sans, latar off-white hangat, rata kiri.
- 🔑 `svg grain texture filter` · `feTurbulence feDisplacementMap` · `monochrome icon set consistency` · `letterpress texture css`

### 19-daylight-hero-framed-sticker.png
- **Hero dibingkai:** foto/video full-bleed di dalam frame bersudut membulat yang sedikit masuk dari tepi layar (pola yang sama dengan craft).
- **Navbar sebagai panel melayang di kanan atas** + **stiker bundar** ("Daylight Kids") yang menempel miring di pojok panel. Terasa playful tanpa berlebihan.
- Thumbnail video kecil dengan tombol play di kiri bawah, panel newsletter + CTA di kanan bawah. Elemen UI "mengambang" di atas visual.
- 🔑 `inset rounded hero frame` · `circular text badge svg textPath` · `floating ui panel` · `video thumbnail play button`

---

## Cara menerapkan ke Zaidana Studio (usulan, dikonfirmasi di Gate 2)

**Benang merah dari micro.so + craft.do + wabi.ai + cosmos.so + lovi.care + integratedbio.com + letters.app + useorigin.com + daylightcomputer.com:** tenang dan lega, tipografi serif sebagai elemen utama, abu-abu untuk hierarki teks, navbar/tombol pil yang rapi, warna lembut yang tidak menusuk mata. micro memberi *kerapian & ketegasan tipografi*, craft memberi *kehangatan, pastel, dan card yang kaya*, wabi memberi *interaksi yang terasa nyata (swipe, kaca)*, cosmos memberi *kedalaman (blur, melayang) dan penutup yang berani*, lovi memberi *cara bercerita lewat scroll dan anotasi*, integratedbio memberi *bentuk card yang khas dan palet hijau-abu yang natural*, letters memberi *ketenangan lewat nada abu-abu dan kontrol yang sederhana*, origin memberi *dark mode yang berlapis dan detail motion yang informatif*, daylight memberi *sentuhan tangan manusia lewat ikon sketsa*.

### ⭐ Usulan pembuka & penutup yang memorable (menggabungkan semua referensi)
**Hero dengan card stack yang bisa di-swipe:**
- Kiri: headline serif ("Learning to build software that helps people" atau sejenisnya, final di Fase 4) + subjudul abu-abu dengan **satu frasa yang berganti** sinkron dengan card, misalnya "I'm building… / I'm learning… / I'm writing about…".
- Kanan: tumpukan card miring 3D (gaya wabi). Tiap card = satu hal nyata dari perjalanan belajar (proyek, catatan belajar, tulisan terbaru), dengan **warna pastel + ilustrasi bertumpuk** (gaya craft) dan **tekstur langit** di latarnya (micro/craft).
- Tombol CTA utama memakai **glass button** (gaya wabi). Efek kaca **hanya** di CTA + navbar, tidak di mana-mana.
- **Penutup (gaya cosmos), sebagai pasangan hero:** di section Contact/footer, **card-card yang sama dari hero "berhamburan" melayang** di sekitar CTA "Let's talk" (kedalaman lewat blur + transparansi), lalu wordmark **"ZAIDANA" raksasa** di paling bawah, terpotong tepi layar. Pembuka dan penutup memakai card yang sama, jadi terasa satu cerita.
- **Tengah (gaya lovi), satu kali saja:** paragraf cerita singkat ("I'm a Software Engineering student learning to build… I write about… I'm looking for…") dengan **scroll text reveal** + maks. 3 ikon kecil di dalam kalimat (mis. ikon untuk *building*, *AI*, *education*). Ini jembatan antara hero dan daftar proyek.
- **Progressive blur** dipakai di akhir daftar Projects/Writing di halaman Home: daftar memudar ke blur, lalu tombol "See all" di atasnya.
- Selebihnya situs **tenang dan disiplin** (sesuai prinsip "spend boldness in one place" di skill frontend-design). Boldness dipusatkan di **pembuka (hero)** dan **penutup (footer)**.


| Dari referensi | Versi Zaidana |
|---|---|
| Sans tebal + serif dalam satu headline (micro) | General Sans tebal + Fraunces/Instrument Serif, dipakai konsisten sebagai sistem |
| Background netral (micro) / off-white hangat (craft) | **Warm-neutral terang**, di antara abu-abu micro dan krem. Bandingkan dengan krem `#F5F1EB` di Fase 1 untuk menghindari pola "krem + serif" |
| Pastel rendah saturasi (craft) | Turunkan palet brief ke versi pastel: sage, biru langit, coklat muda/mentega. Dipakai untuk **permukaan card**, bukan teks |
| Navbar pil (micro) + mega-menu halus (craft) | Navbar pil: Work · Writing · Now · About + tombol "Let's talk". Mega-menu **tidak perlu** (link-nya sedikit), tapi ambil transisi pil yang melebar/halus saat interaksi |
| Langit bertekstur (micro: lukisan, craft: halftone) | **Satu elemen memorable:** langit/awan bertekstur (halftone atau painterly) bernuansa biru langit + sage, misalnya di hero atau di balik card proyek. Aset harus orisinal |
| Card pastel berbeda warna + ilustrasi miring bertumpuk (craft) | **Card proyek:** tiap proyek punya warna pastel sendiri + potongan visual proyeknya (screenshot, sketsa, diagram) yang miring dan bocor ke tepi card. Dummy memakai ilustrasi abstrak |
| Section rata kiri (micro) vs rata tengah (craft) | Variasikan: hero rata tengah, section konten rata kiri. Tidak semua section berbentuk sama |
| Serif light + subjudul abu-abu (wabi) | Headline serif berbobot regular/light, subjudul General Sans abu-abu hangat (cek kontras) |
| Card stack swipe 3D (wabi) | Hero Zaidana (lihat usulan ⭐ di atas). Vanilla JS/pointer events atau library animasi kecil. Wajib aksesibel |
| Glass button + kilau bergerak (wabi) | CTA utama + navbar pil saja. Kilau bergerak halus saat hover, mati saat reduced-motion |
| Layout split kiri-kanan (wabi) | Dipakai di hero. Section lain divariasikan |
| Progressive blur (cosmos) | Akhir preview Projects/Writing di Home + fade di bawah navbar saat scroll |
| Kartu melayang + depth blur (cosmos) | Section Contact/footer, memakai card dari hero. Bergerak pelan atau bereaksi ke kursor; berhenti saat di luar layar; statis saat reduced-motion |
| Wordmark raksasa di footer (cosmos) | "ZAIDANA" (atau "Zaidana Studio") selebar layar, terpotong di bawah. Pakai font headline supaya konsisten |
| Scroll text reveal + ikon di dalam kalimat (lovi) | Satu paragraf cerita di Home/About. Maks. 3 ikon orisinal. Lihat batasan "tidak overdo" di bagian lovi |
| Callout beranotasi dengan garis (lovi) | **Halaman detail proyek:** screenshot proyek diberi 2–4 callout yang menjelaskan keputusan ("Why I used X", "What I learned here"). Pas dengan tujuan PRD: *tunjukkan cara berpikir, bukan hanya hasil* |
| Notched card + tombol panah di coakan (integratedbio) | **Card tulisan di halaman Writing** (dan preview Writing di Home): 1 artikel terbaru besar + grid kecil. Variasi warna: permukaan terang → sage gelap → charcoal. Tombol di coakan pakai aksen lembut (sage muda / biru langit), bukan lime. Card proyek tetap gaya craft, jadi tiap section punya karakter sendiri |
| Palet hijau-abu natural (integratedbio) | Validasi arah sage di brief. Sage gelap bisa jadi warna card gelap dan juga dasar dark mode |
| Card calm abu-abu tanpa shadow + ilustrasi mini-UI (letters) | Card untuk **halaman Now & About** (mis. "What I'm building" / "What I'm learning"). Ilustrasi mini-UI juga dipakai **di dalam card proyek**: potongan kecil antarmuka proyek itu sendiri, bukan ikon generik |
| Segmented control dengan pil aktif yang bergeser (letters) | Filter di halaman Projects (mis. *All / Web / AI*) dan pengalih di Home "*Building / Learning*". Pil aktif bergeser halus saat diklik (animasi karena interaksi user, jadi aman). Wajib aksesibel sebagai tabs |
| Dark mode berlapis dari kecerahan + border 1px (origin) | **Dasar dark mode Zaidana:** background gelap, card satu tingkat lebih terang, panel dalam card lebih terang lagi, border 1px tipis, tanpa shadow. Aksen sage terang dipakai hemat. Bandingkan `#1E1E1E` (brief) dengan versi lebih gelap di Fase 1 |
| Background titik-titik yang memudar ke tepi (origin) | **Pasangan tekstur langit:** light mode = langit/awan bertekstur, **dark mode = titik-titik seperti bintang di langit malam**. Satu konsep "langit" di dua mode |
| Garis progres di bawah tombol, sinkron dengan carousel (origin) | Dipasang di **card stack hero**: garis progres tipis menunjukkan kapan card berganti otomatis, plus tombol prev / pause / next yang kecil dan rapi. Sekaligus memenuhi syarat aksesibilitas pause |
| **Ikon sketsa tangan (daylight)** | **Satu gaya ikon untuk seluruh situs:** ikon sketsa buatan sendiri (garis tidak sempurna, ujung membulat). Dipakai juga untuk **ikon di dalam paragraf gaya lovi**, jadi tidak ada dua gaya ikon. Pas dengan cerita "sedang belajar", seperti coretan di buku catatan. Buat di Excalidraw/tablet lalu ekspor SVG, atau pakai rough.js. Harus orisinal |
| Headline kiri + 4 card navigasi berikon (daylight) | Section **"Where to next"** di akhir About/Home: *Projects / Writing / Now / Contact*, masing-masing dengan ikon sketsa. Saat di-hover card terisi warna aksen hangat (coklat muda/sage). Gaya card mengikuti sistem card |
| Stiker bundar di pojok panel (daylight) | **Stiker "Open to internships"** menempel miring di pojok navbar/hero. Sinyal G1 yang jelas untuk Rian, dan sedikit playful. Diam saja, atau berputar pelan hanya saat di-hover |
| Titik fase bulan sebagai penanda section (daylight) | Opsional: penanda section kecil bertema langit (fase bulan), cocok dengan konsep langit siang/malam. Hanya jika tidak terasa ramai |
| Background gelap yang hangat (daylight) | Pertimbangkan dark mode **hangat** (hitam kehijauan, cocok dengan sage), bukan hitam netral. Bandingkan di Fase 1 dengan versi origin |
| Maskot (micro) / kolase kertas (craft) | Opsional, pilih **salah satu** saja supaya tidak ramai. Kemungkinan tidak perlu karena card stack sudah jadi elemen utama |
| Music player widget (micro) | Widget kecil **"Currently learning"** di pojok. Pas dengan narasi build in public |

### Sistem card (supaya tidak berantakan)
Ada 3 gaya card dari referensi: **pastel + ilustrasi miring** (craft → Projects), **coakan + tombol panah** (integratedbio → Writing), **abu-abu calm tanpa shadow** (letters → Now/About). Supaya tetap terasa satu situs:
- Semua card memakai **token yang sama**: radius, padding, jarak antar card, gaya chip, dan tombol pil.
- Perbedaannya hanya di **permukaan** (warna/bentuk sudut) dan **isi visual**, bukan di aturan dasarnya.
- Satu section = satu gaya card. Jangan campur dua gaya dalam satu grid.

## Yang TIDAK diambil
- Maskot, logo, ilustrasi, lukisan, kolase, ikon 3D, foto, dan screenshot produk milik micro.so / craft.do / wabi.ai / cosmos.so / lovi.care / integratedbio.com / letters.app / useorigin.com / daylightcomputer.com
- Font berlisensi milik situs-situs tersebut
- Ikon aplikasi pihak lain (logo Spotify, Notion, dll. di daylight) — bukan milik kita
- QR code dan deretan avatar orang (wabi), search bar besar (cosmos) — tidak relevan untuk portfolio
- Eyebrow label ALL-CAPS (craft), label monospace ALL-CAPS (integratedbio, origin), satu kata miring di headline (origin), dan mega-menu penuh (terlalu besar untuk situs personal)
- Screenshot produk bergaya SaaS (Zaidana belum punya produk; kartu diisi proyek/tulisan)
