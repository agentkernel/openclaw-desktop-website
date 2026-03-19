# OpenClaw Desktop Website

OpenClaw Desktop 官方下载入口网站与文档站点。

## 项目结构

```
openclaw-desktop-website/
├── web/                  # OpenClaw Desktop 官网（Next.js）
│   ├── app/            # App Router 页面
│   ├── messages/       # i18n 中英文翻译
│   └── ...
├── scripts/            # 管理脚本
├── local_manifest.tsv  # 本地 manifest
└── remote_manifest.tsv # 远程 manifest
```

## OpenClaw Desktop 官网

- **下载入口**：一键跳转 GitHub Releases 下载 Windows 安装包
- **中英双语**：next-intl 实现 /en、/zh 路由
- **飞书配置**：中文用户完整的飞书部署与故障排除指南
- **免费 API**：免费大模型 API 配置指南
- **替代方案**：其他 AI 桌面客户端对比

### 本地运行

```bash
cd web
pnpm install
pnpm dev
```

访问 http://localhost:3000（英文）、http://localhost:3000/zh（中文）。

### 构建

```bash
cd web
pnpm build
pnpm start
```

## 技术栈

- Next.js 14 (App Router)
- Tailwind CSS
- next-intl
- TypeScript

## 相关链接

- [OpenClaw Desktop](https://github.com/agentkernel/openclaw-desktop)
- [OpenClaw](https://github.com/openclaw/openclaw)
