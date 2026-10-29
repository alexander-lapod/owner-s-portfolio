# Signature Work

Portfolio situs pribadi Alexander F. J. Lapod. SvelteKit murni, statis, tanpa
server saat runtime.

| Folder | Isi | Dipakai situs? |
| --- | --- | --- |
| `client/` | SvelteKit 2 + Svelte 5 + Tailwind CSS v4 | Ya. Inilah yang di-deploy |
| `server/` | Kerangka Rust (Axum + Tokio + sqlx), masih hello-world | Tidak. Disimpan untuk rencana backend |

## Mulai

```sh
cd client
pnpm install
pnpm dev
```

Panduan lengkap (perintah, struktur, cara mengubah konten, deploy Cloudflare)
ada di [client/README.md](client/README.md).

## Deploy

Target: Cloudflare Workers Static Assets. [`wrangler.jsonc`](wrangler.jsonc) di
root menunjuk `./client/build` sebagai direktori aset.

Build lokal lalu deploy manual:

```sh
cd client && pnpm build && cd ..
npx wrangler deploy
```

### Workers Builds (deploy dari repo)

Set di dashboard, dengan **root directory = root repo** (bukan `client`):

| Field | Nilai |
| --- | --- |
| Build command | `cd client && pnpm install --frozen-lockfile && pnpm build` |
| Deploy command | `npx wrangler deploy` |

Kalau root directory diubah ke `client`, pindahkan `wrangler.jsonc` ke dalam
`client/` dan ubah `assets.directory` menjadi `./build`, serta build command
menjadi `pnpm install --frozen-lockfile && pnpm build`.

Alternatif Cloudflare Pages: root directory `client`, build command
`pnpm build`, output directory `build`. Tidak perlu `wrangler.jsonc` untuk jalur
ini.

## Lisensi

**All rights reserved.** Kode, desain, dan teks di repo ini milik
Alexander F. J. Lapod. Tidak ada izin menyalin, mengubah, mengehost ulang, atau
mendistribusikan tanpa persetujuan tertulis. Teks lengkap: [LICENSE](LICENSE).

Dependensi pihak ketiga (SvelteKit, Tailwind, dan font) tetap memakai lisensi
masing-masing.
