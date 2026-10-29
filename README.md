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

```sh
cd client
pnpm build
npx wrangler pages deploy build --project-name signature-work
```

Atau hubungkan repo ini ke Cloudflare Pages dengan root directory `client`,
build command `pnpm build`, output directory `build`.

## Lisensi

**All rights reserved.** Kode, desain, dan teks di repo ini milik
Alexander F. J. Lapod. Tidak ada izin menyalin, mengubah, mengehost ulang, atau
mendistribusikan tanpa persetujuan tertulis. Teks lengkap: [LICENSE](LICENSE).

Dependensi pihak ketiga (SvelteKit, Tailwind, dan font) tetap memakai lisensi
masing-masing.
