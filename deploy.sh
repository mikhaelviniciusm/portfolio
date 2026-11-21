#!/usr/bin/env bash
set -e

VPS_HOST="$1"
REMOTE_PATH="${2:-/opt/portfolio}"

if [ -z "$VPS_HOST" ]; then
    echo "Uso: ./deploy.sh usuario@ip_da_vps [caminho_remoto]"
    echo "Exemplo: ./deploy.sh root@123.45.67.89 /opt/portfolio"
    exit 1
fi

echo "==> [1/3] Gerando build estático de produção..."
npm run build

echo "==> [2/3] Enviando arquivos para a VPS ($VPS_HOST:$REMOTE_PATH)..."
ssh "$VPS_HOST" "mkdir -p $REMOTE_PATH"
scp -r Dockerfile nginx.conf docker-compose.yml out "$VPS_HOST:$REMOTE_PATH/"

echo "==> [3/3] Subindo/recriando container Docker na VPS..."
ssh "$VPS_HOST" "cd $REMOTE_PATH && docker compose up -d --build && docker ps | grep mikhael-portfolio"

echo "==> Deploy concluído com sucesso!"
