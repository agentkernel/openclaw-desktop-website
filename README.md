# OpenClaw Desktop Website

OpenClaw Desktop 官方下载入口网站与文档站点。

![OpenClaw Desktop](https://raw.githubusercontent.com/agentkernel/openclaw-desktop-website/main/web/public/screenshots/homepage.png)

## 功能特点

| 功能 | 说明 |
|------|------|
| 下载入口 | 一键下载 Windows 安装包 |
| 中英双语 | `/en` 英文、`/zh` 中文 |
| 飞书配置 | 完整的飞书机器人配置指南 |
| 免费 API | 汇总国内免费 AI 模型接口 |
| 竞品对比 | 与扣子、通义等平台对比 |

## 项目结构

```
openclaw-desktop-website/
├── web/                          # Next.js 网站项目
│   ├── app/
│   │   ├── [locale]/            # 国际化路由
│   │   │   ├── page.tsx        # 首页（下载 + 功能介绍）
│   │   │   ├── feishu/         # 飞书配置指南页
│   │   │   ├── free-api/       # 免费 API 页
│   │   │   └── alternatives/   # 竞品对比页
│   │   └── layout.tsx          # 根布局
│   ├── messages/                # i18n 翻译文件
│   │   ├── en.json             # 英文
│   │   └── zh.json             # 中文
│   └── public/                 # 静态资源
├── scripts/                     # 管理脚本
└── README.md
```

## 本地运行

### 1. 安装依赖

```bash
cd web
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm dev
```

### 3. 访问网站

- 英文版：http://localhost:3000
- 中文版：http://localhost:3000/zh

## 生产环境部署

### 构建

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 技术栈

| 技术 | 用途 |
|------|------|
| Next.js 14 | React 框架（App Router） |
| Tailwind CSS | 样式 |
| next-intl | 国际化 |
| TypeScript | 类型检查 |

## 安装 OpenClaw Desktop（用户指南）

### 第一步：下载

访问 https://github.com/agentkernel/openclaw-desktop-website/releases 下载 `OpenClaw-Setup-0.1.0.exe`

### 第二步：运行安装程序

双击 `.exe` 文件，如果 Windows 弹出安全提示，点击「仍要运行」。

### 第三步：配置向导

首次运行会显示设置向导：

```
┌─────────────────────────────────────┐
│        OpenClaw 设置向导              │
├─────────────────────────────────────┤
│                                     │
│  1. 选择 AI 模型                    │
│     ○ 通义千问 (推荐)                │
│     ○ 文心一言                       │
│     ○ 智谱 GLM                       │
│     ○ 讯飞星火                       │
│                                     │
│  2. 填入 API 密钥                   │
│     ┌─────────────────────────┐    │
│     │ API Key: ____________   │    │
│     └─────────────────────────┘    │
│                                     │
│  3. 选择连接平台                    │
│     ☑ 飞书                         │
│     ☐ Telegram                     │
│     ☐ Discord                     │
│                                     │
│           [下一步]                   │
└─────────────────────────────────────┘
```

### 第四步：开始使用

配置完成后，OpenClaw 在系统托盘运行。直接给机器人发消息测试！

## 飞书配置详细步骤

如果需要配置飞书机器人，参考以下步骤：

### 1. 创建飞书应用

访问 [飞书开放平台](https://open.feishu.cn) → 开发者后台 → 创建企业自建应用

### 2. 获取凭证

在应用页面找到「凭证与基础信息」，复制：
- App ID（格式：`cli_xxxx`）
- App Secret

### 3. 配置权限

在「权限管理」中添加：
- `im:message` - 发送和接收消息
- `im:message.group_at_msg` - 接收群聊@消息
- `im:message.receive_v1` - 接收消息事件

### 4. 发布应用

创建版本并发布后生效

### 5. 在 OpenClaw 中配置

打开 OpenClaw → 通道设置 → 飞书 → 填入 App ID 和 App Secret

## 获取免费 API 密钥

国内主流 AI 模型都有免费额度：

| 平台 | 免费额度 | 申请链接 |
|------|---------|---------|
| 通义千问 | 100万 Token/月 | [百炼平台](https://bailian.console.aliyun.com) |
| 文心一言 | 100-500万 Token/月 | [百度智能云](https://cloud.baidu.com) |
| 智谱 GLM | 100万 Token/月 | [智谱AI](https://open.bigmodel.cn) |
| 讯飞星火 | 无限次 | [讯飞开放平台](https://xinghuo.xfyun.cn) |

详细申请步骤请访问网站的「免费API」页面。

## 相关链接

| 链接 | 地址 |
|------|------|
| OpenClaw Desktop 下载 | https://github.com/agentkernel/openclaw-desktop/releases |
| OpenClaw 主仓库 | https://github.com/agentkernel/openclaw-desktop |
| OpenClaw 官网 | https://github.com/agentkernel/openclaw |
| 本网站源码 | https://github.com/agentkernel/openclaw-desktop-website |

## License

GPL-3.0 License
