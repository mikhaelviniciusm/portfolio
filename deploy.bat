@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo   Deploy do Portfolio - Mikhael Vinicius
echo ========================================================
echo.

if "%1"=="" (
    echo Uso: deploy.bat usuario@ip_da_vps [caminho_remoto]
    echo Exemplo: deploy.bat root@123.45.67.89 /home/ubuntu/portfolio
    exit /b 1
)

set VPS_HOST=%1
set REMOTE_PATH=%2
if "%REMOTE_PATH%"=="" set REMOTE_PATH=/opt/portfolio

echo [1/3] Gerando build estatico de producao...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo Erro ao gerar o build estatico!
    exit /b %ERRORLEVEL%
)

echo.
echo [2/3] Sincronizando arquivos com a VPS (%VPS_HOST%:%REMOTE_PATH%)...
ssh %VPS_HOST% "mkdir -p %REMOTE_PATH%"
scp -r Dockerfile nginx.conf docker-compose.yml out %VPS_HOST%:%REMOTE_PATH%/

echo.
echo [3/3] Subindo o container na VPS via Docker Compose...
ssh %VPS_HOST% "cd %REMOTE_PATH% && docker compose up -d --build && docker ps | grep mikhael-portfolio"

echo.
echo ========================================================
echo   Deploy concluido com sucesso na VPS!
echo ========================================================
