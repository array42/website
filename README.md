# array42.com

ARRAY42 institutional website — Nuxt 4 + Tailwind on Cloudflare Workers.

## Develop

```sh
pnpm install
pnpm dev
```

## Build & deploy

```sh
pnpm build     # nuxt build (nitro cloudflare_module preset)
pnpm preview   # wrangler dev against .output
pnpm deploy    # build + wrangler deploy
```

Routes: `/`, `/privacy`, `/boxlabels-privacy-policy`.
