# OpenClaw Desktop Website

OpenClaw Desktop 官方下载入口网站与文档站点。

## 项目结构

```
openclaw-desktop-website/
├── cobrain-skills/       # Cobrain 全栈开发技能包（OpenClaw/Cursor 兼容）
│   ├── cobrain-main/     # 主协调技能
│   ├── cobrain-plan/     # 任务规划
│   ├── cobrain-frontend/ # 前端开发
│   ├── cobrain-backend/  # 后端开发
│   ├── cobrain-database/ # 数据库
│   ├── cobrain-devops/   # DevOps
│   ├── cobrain-debug/    # 调试测试
│   ├── cobrain-design/  # 设计
│   └── cobrain-init/    # 初始化
├── web/                  # OpenClaw Desktop 官网
│   ├── app/
│   ├── messages/        # i18n (en, zh)
│   └── ...
├── .cobrain/             # Cobrain 任务流（可选）
└── .cursor/              # Cursor 命令
```

## Cobrain Skills 技能包

将 Cobrain 多窗口协作开发体系迁移为 OpenClaw/Cursor 可识别的 SKILL.md 格式：

- **文档驱动状态**：task-flow.xml、unit-task.xml、constitution.md、project-profile.yaml
- **主从协调**：cobrain-main 汇总进度与分派；子技能专注各自领域
- **跨对话持久化**：通过文件系统恢复状态

详见 [cobrain-skills/README.md](cobrain-skills/README.md)。

## OpenClaw Desktop 官网

- **下载入口**：一键跳转 GitHub Releases 下载 Windows 安装包
- **中英双语**：next-intl 实现 /en、/zh 路由
- **飞书配置**：中文用户完整的飞书部署与故障排除指南
  - 飞书 SDK npm 404 / @larksuiteoapi/node-sdk 缺失
  - 飞书配对码与配置位置（channels.feishu）
- **快速开始**：安装与使用步骤

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
