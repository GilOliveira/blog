# Gil's Blog

## Prepare

1. Get dependencies:

- [Hugo](https://gohugo.io/)
- [pnpm](https://pnpm.io/)

2. Checkout with submodules:

```sh
git clone --recurse-submodules git@github.com:GilOliveira/blog
```

3. Copy `template.env` to `.env` and fill in [Tina Cloud](https://app.tina.io/) tokens.

4. Install npm packages with pnpm.

```sh
pnpm instal
```

## Run Development Server

```sh
pnpm dev
```

> [!IMPORTANT]  
> `pnpm dev` must be run before push to production to update the Tina CMS schema.

## Build locally

```sh
pnpm build
```
