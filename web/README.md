# OpenClaw Desktop Website

Official download portal and documentation site for [OpenClaw Desktop](https://github.com/agentkernel/openclaw-desktop).

## Features

- **One-click download** – Links to GitHub Releases for Windows installer
- **Bilingual** – English and 简体中文
- **Feishu guide** – Step-by-step Feishu (飞书) deployment and troubleshooting for Chinese users
- **Quick start** – Installation and usage instructions

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
pnpm start
```

## Structure

- `/` – Home (en)
- `/zh` – Home (中文)
- `/feishu` – Feishu deployment guide (en)
- `/zh/feishu` – 飞书完整配置与故障排除 (zh)

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- next-intl (i18n)
