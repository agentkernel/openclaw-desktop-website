# OpenClaw Desktop Website Manager

$ProjectDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$WebDir = Join-Path $ProjectDir "web"

function Show-Menu {
    Write-Host ""
    Write-Host "========================================"
    Write-Host "   OpenClaw Desktop Website Manager"
    Write-Host "========================================"
    Write-Host ""
    Write-Host "  1) 启动开发服务器 (Start Dev Server)"
    Write-Host "  2) 启动生产服务器 (Start Production Server)"
    Write-Host "  3) 停止服务器 (Stop Server)"
    Write-Host "  4) 构建项目 (Build Project)"
    Write-Host "  5) 仅检查类型 (Type Check Only)"
    Write-Host "  6) 查看端口占用 (Check Port 3000)"
    Write-Host "  0) 退出 (Exit)"
    Write-Host ""
}

function Check-Node {
    if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
        Write-Host "Error: Node.js is not installed." -ForegroundColor Red
        exit 1
    }
}

function Check-Pnpm {
    if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
        Write-Host "Installing pnpm..." -ForegroundColor Yellow
        npm install -g pnpm
    }
}

function Check-Deps {
    $nodeModules = Join-Path $WebDir "node_modules"
    if (-not (Test-Path $nodeModules)) {
        Write-Host "Installing dependencies..." -ForegroundColor Yellow
        pnpm install
    }
}

function Start-Dev {
    Set-Location $WebDir
    Write-Host "Starting development server on http://localhost:3000 ..." -ForegroundColor Green
    pnpm run dev
}

function Start-Prod {
    Set-Location $WebDir
    Write-Host "Building project..." -ForegroundColor Yellow
    pnpm run build
    Write-Host "Starting production server on http://localhost:3000 ..." -ForegroundColor Green
    pnpm run start
}

function Stop-Server {
    $process = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess
    if ($process) {
        $proc = Get-Process -Id $process -ErrorAction SilentlyContinue
        Write-Host "Stopping process on port 3000 (PID: $process)..."
        Stop-Process -Id $process -Force
        Write-Host "Server stopped." -ForegroundColor Green
    } else {
        Write-Host "No server running on port 3000." -ForegroundColor Gray
    }
}

function Build-Project {
    Set-Location $WebDir
    pnpm run build
}

function Type-Check {
    Set-Location $WebDir
    Write-Host "Running TypeScript check..." -ForegroundColor Yellow
    npx tsc --noEmit
}

function Check-Port {
    $conn = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
    if ($conn) {
        $proc = Get-Process -Id $conn.OwningProcess -ErrorAction SilentlyContinue
        Write-Host "Port 3000 is in use:" -ForegroundColor Yellow
        Write-Host "  PID: $($conn.OwningProcess)"
        Write-Host "  Process: $($proc.ProcessName)"
        Write-Host "  Status: $($conn.State)"
    } else {
        Write-Host "Port 3000 is free." -ForegroundColor Green
    }
}

Check-Node
Check-Pnpm

while ($true) {
    Show-Menu
    $choice = Read-Host "请选择操作 (Select option)"
    switch ($choice) {
        "1" { Check-Deps; Start-Dev }
        "2" { Check-Deps; Start-Prod }
        "3" { Stop-Server }
        "4" { Check-Deps; Build-Project }
        "5" { Type-Check }
        "6" { Check-Port }
        "0" { Write-Host "Goodbye!"; exit 0 }
        default { Write-Host "Invalid option. Please try again." -ForegroundColor Red }
    }
}
