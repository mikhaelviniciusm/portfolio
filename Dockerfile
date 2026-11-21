FROM nginx:alpine-slim

# Remove a página padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia a configuração otimizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos estáticos gerados pelo Next.js e garante permissões corretas para o worker nginx
COPY out/ /usr/share/nginx/html/
RUN find /usr/share/nginx/html -type d -exec chmod 755 {} + \
    && find /usr/share/nginx/html -type f -exec chmod 644 {} +

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
