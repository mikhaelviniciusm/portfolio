# Portfólio Pessoal — Mikhael Vinícius (`mikhael.dev`)

Portfólio e currículo interativo de **Mikhael Vinícius**, construído com **Next.js (App Router + Static Export)**, **React**, **TypeScript**, **Tailwind CSS v4** e **Framer Motion**.

## Principais Recursos

- **Direção Visual Bento Grid & Glassmorphism:** Cabeçalho fixo translúcido, estética minimalista técnica em Dark Mode padrão (`#0A0A0F` com acentos `#3B82F6` e `#06B6D4`) e alternância fluida para Light Mode sem flash inicial (FOUC).
- **Bilíngue (`PT-BR` / `EN`):** Troca instantânea de idioma com persistência no navegador.
- **Micro-interações Performáticas:** Spotlight que acompanha o ponteiro via variáveis CSS (sem re-renders), botões com resposta magnética sutil e animações de entrada (`whileInView`) respeitando `prefers-reduced-motion`.
- **Seções Completas:** Hero com painel técnico, Sobre Mim em Bento Grid, Timeline Interativa (experiência profissional, formação e certificações), Vitrine de Projetos filtrável por categoria, Stack Tecnológica por domínio e Contato com cópia rápida de e-mail.
- **SEO & Acessibilidade (WCAG AA):** Metadados completos (Open Graph, Twitter Cards), dados estruturados JSON-LD (`Person`), navegação por teclado, link de salto (*Skip to content*) e contrastes validados.

## Estrutura do Projeto

- [`src/data/profile.ts`](src/data/profile.ts) — Dados estruturados de perfil, experiências, formação, certificações, projetos e stack tecnológica.
- [`src/i18n/translations.ts`](src/i18n/translations.ts) — Dicionário completo de interface em Português do Brasil (`pt-BR`) e Inglês (`en`).
- [`src/app/layout.tsx`](src/app/layout.tsx) — Fontes (`Plus Jakarta Sans` e `JetBrains Mono`), prevenção de FOUC, SEO e JSON-LD.
- [`src/app/globals.css`](src/app/globals.css) — Tokens semânticos de tema claro/escuro e utilitários visuais.
- [`src/components/`](src/components/) — Seções modulares e primitivos reutilizáveis (`SpotlightCard`, `MagneticButton`, `Reveal`).

## Como Rodar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar servidor de desenvolvimento
npm run dev

# 3. Validar tipagem, lint e build estático
npx tsc --noEmit
npm run lint
npm run build
```

O comando `npm run build` gera a pasta estática `out/` pronta para publicação.

## Personalização Rápida

1. **Atualizar dados profissionais, datas, projetos ou links:** edite [`src/data/profile.ts`](src/data/profile.ts).
2. **Ajustar textos da interface (`PT-BR` / `EN`):** edite [`src/i18n/translations.ts`](src/i18n/translations.ts).
3. **Atualizar e-mail ou URL de currículo PDF:** ajuste `PROFILE_CONTACT.email` e `PROFILE_CONTACT.resumeUrl` em [`src/data/profile.ts`](src/data/profile.ts) e o schema JSON-LD em [`src/app/layout.tsx`](src/app/layout.tsx).
