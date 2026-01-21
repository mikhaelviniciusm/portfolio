# Portfólio | Mikhael

Site estático em HTML, CSS e JavaScript para apresentar informações, projetos e contato, com modo claro/escuro e navegação responsiva.

## Recursos
- Seções: Início, Sobre mim, Stacks mais usadas, Projetos, Formação, Experiência e Contato
- Modo claro/escuro com preferência salva em localStorage
- Menu responsivo com hambúrguer, ripple em botoes e animações simples
- Avatares e elementos interativos (corações no rodapé)
- Layout responsivo e fontes Google (Poppins)

## Tecnologias
- HTML5, CSS3
- JavaScript

## Estrutura
```
.
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  └─ main.js
└─ assets/
   ├─ header/   ├─ home/   ├─ projects/
   ├─ skills/   ├─ education/   ├─ experience/
   └─ footer/contact/
```

## Como rodar localmente
1) Baixe ou clone este repositório.
2) Abra index.html direto no navegador ou sirva a pasta com um servidor simples (melhor para fontes/caminhos relativos):
   - Python 3: python -m http.server 8000
   - Node (se tiver http-server): npx http-server . -p 8000
3) Acesse http://localhost:8000.

## Como publicar no GitHub Pages
1) Crie o repositorio no GitHub.
2) Envie os arquivos (veja o proximo tópico).
3) No GitHub: Settings -> Pages -> Source: Deploy from a branch; Branch: main (ou master), pasta / (root); salve.
4) Aguarde o deploy e abra a URL indicada pelo GitHub Pages.

## Como versionar e enviar ao GitHub
```
git init
git add .
git commit -m "chore: primeira versao"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

## Customização
- Conteúdo: edite textos e imagens em index.html e na pasta assets/.
- Estilo: ajuste cores, espaçaamentos e temas em css/style.css.
- Interação: personalize animações e comportamento em js/main.js.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte LICENSE.
