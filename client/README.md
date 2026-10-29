# Signature Work - client

Portfolio situs pribadi Alexander F. J. Lapod. SvelteKit murni, sepenuhnya statis,
tanpa server saat runtime.

## Stack

| Bagian | Pilihan |
| --- | --- |
| Framework | SvelteKit 2 + Svelte 5 (runes) |
| Styling | Tailwind CSS v4 lewat `@tailwindcss/vite` (tanpa `tailwind.config`) |
| Build | Vite 7, output statis `build/` |
| Deploy | Cloudflare Pages / Workers Static Assets |
| Font | Instrument Serif, Inter, JetBrains Mono (Google Fonts) |

Folder `../server` (Rust/Axum) sengaja tidak dipakai situs ini. Jangan diikutkan
saat deploy.

## Perintah

Semua perintah dijalankan dari folder `client/`.

```sh
pnpm install
pnpm dev        # server pengembangan
pnpm check      # svelte-check + TypeScript
pnpm build      # hasil statis ke build/
pnpm preview    # pratinjau hasil build
pnpm deploy     # build lalu `wrangler pages deploy build`
```

Prasyarat: Node 20+, pnpm 11+. Repo ini terikat ke store pnpm v11; kalau muncul
`ERR_PNPM_UNEXPECTED_STORE`, hapus `node_modules` lalu `pnpm install` sekali.

## Struktur

```
src/
  app.css                     token tema Tailwind v4, util kustom
  app.html                    shell, meta dasar, pemuatan font
  lib/
    content.ts                SEMUA teks dan data situs
    components/
      Aurora.svelte           latar gradien hangat (canvas, hormati reduced-motion)
      Nav.svelte              header tetap + scroll-spy
      Hero.svelte             nama tanda tangan yang bisa digeser
      Marquee.svelte          pita skill
      SectionHeading.svelte
      WorkList.svelte
      About.svelte
      Capabilities.svelte
      Path.svelte
      Contact.svelte
      Footer.svelte
  routes/
    +layout.ts                prerender = true
    +layout.svelte            susunan global
    +page.svelte              komposisi section
static/                       favicon, robots.txt
```

## Mengubah isi

Semua konten ada di `src/lib/content.ts`. Tidak perlu menyentuh komponen untuk
mengganti teks, proyek, skill, atau tautan.

- `profile` - nama, peran, bio, fakta.
- `work` - daftar proyek unggulan (judul, deskripsi, stack, status, tautan).
- `capabilities` - kelompok keahlian.
- `path` - pengalaman dan pendidikan.
- `contact` - `email`, `github`, `linkedin`. **Isi `email` dan `linkedin`;
  entri dengan nilai kosong otomatis disembunyikan.**
- `marquee`, `nav`, `site` - pita skill, menu, dan metadata.

## Deploy ke Cloudflare

Build ini statis, jadi tidak ada Worker yang dijalankan per request dan tidak
kena batas CPU 10 ms paket gratis.

Pilih salah satu:

1. Dashboard Pages: hubungkan repo, build command `pnpm build`, output `build`.
2. CLI: `pnpm deploy` (butuh login `wrangler` sekali).

Batas paket gratis yang relevan: Pages 500 build/bulan, 20.000 file, 25 MiB per
file. Tidak ada kuota request/bandwidth untuk aset statis.

## Catatan desain

- Palet: `espresso #1a0f0a`, `cocoa #2c1810`, `cream #fefae0`, `tan #d9b99b`,
  `ember #e2844c`.
- Gerak dibatasi: satu marquee CSS, satu canvas aurora, satu spring untuk nama.
  Semua dihentikan saat `prefers-reduced-motion: reduce`.
- Nama di hero bisa digeser; lepas dan ia kembali ke posisi semula dengan inersia.

## Lisensi

**All rights reserved.** Kode, desain, dan teks di repo ini milik
Alexander F. J. Lapod. Tidak ada izin menyalin, mengubah, mengehost ulang, atau
mendistribusikan tanpa persetujuan tertulis. Teks lengkap ada di
[`../LICENSE`](../LICENSE). Dependensi pihak ketiga tetap memakai lisensinya
masing-masing: SvelteKit, Svelte, Vite, dan Tailwind CSS (MIT), serta typeface
Instrument Serif, Inter, dan JetBrains Mono (SIL OFL).
