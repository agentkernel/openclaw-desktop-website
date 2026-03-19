#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
WEB_DIR="$PROJECT_DIR/web"

cd "$WEB_DIR"

show_menu() {
  echo ""
  echo "========================================"
  echo "   OpenClaw Desktop Website Manager"
  echo "========================================"
  echo ""
  echo "  1) 启动开发服务器 (Start Dev Server)"
  echo "  2) 启动生产服务器 (Start Production Server)"
  echo "  3) 停止服务器 (Stop Server)"
  echo "  4) 构建项目 (Build Project)"
  echo "  5) 仅检查类型 (Type Check Only)"
  echo "  6) 查看日志 (View Logs)"
  echo "  0) 退出 (Exit)"
  echo ""
  echo -n "请选择操作 (Select option): "
}

check_node() {
  if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed."
    exit 1
  fi
}

check_pnpm() {
  if ! command -v pnpm &> /dev/null; then
    echo "Installing pnpm..."
    npm install -g pnpm
  fi
}

check_deps() {
  if [ ! -d "$WEB_DIR/node_modules" ]; then
    echo "Installing dependencies..."
    pnpm install
  fi
}

start_dev() {
  echo "Starting development server on http://localhost:3000 ..."
  pnpm run dev
}

start_prod() {
  echo "Building project..."
  pnpm run build
  echo "Starting production server on http://localhost:3000 ..."
  pnpm run start
}

stop_server() {
  PID=$(lsof -ti:3000 2>/dev/null) || true
  if [ -n "$PID" ]; then
    echo "Stopping process on port 3000 (PID: $PID)..."
    kill -TERM "$PID" 2>/dev/null || kill -9 "$PID" 2>/dev/null
    echo "Server stopped."
  else
    echo "No server running on port 3000."
  fi
}

build_project() {
  pnpm run build
}

type_check() {
  echo "Running TypeScript check..."
  npx tsc --noEmit
}

view_logs() {
  PID=$(lsof -ti:3000 2>/dev/null) || true
  if [ -n "$PID" ]; then
    echo "Server is running on port 3000 (PID: $PID)"
    echo "This script doesn't capture logs yet. Use a separate terminal."
  else
    echo "No server running."
  fi
}

check_node
check_pnpm

while true; do
  show_menu
  read -r choice
  case $choice in
    1) check_deps; start_dev ;;
    2) check_deps; start_prod ;;
    3) stop_server ;;
    4) check_deps; build_project ;;
    5) type_check ;;
    6) view_logs ;;
    0) echo "Goodbye!"; exit 0 ;;
    *) echo "Invalid option. Please try again." ;;
  esac
done
