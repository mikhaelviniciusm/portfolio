import type { Locale, ProjectCategory } from "@/data/profile";

export interface TranslationDictionary {
  a11y: {
    skipToContent: string;
    primaryNav: string;
    openMenu: string;
    closeMenu: string;
    toggleThemeToLight: string;
    toggleThemeToDark: string;
    switchLanguage: string;
    backToTop: string;
    emailCopiedAnnouncement: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    stack: string;
    contact: string;
    downloadResume: string;
    downloadResumeShort: string;
  };
  hero: {
    statusBadge: string;
    headlinePrefix: string;
    roleTitle: string;
    subtitle: string;
    ctaProjects: string;
    ctaContact: string;
    telemetryLabel: string;
    telemetryRoleLabel: string;
    telemetryRole: string;
    telemetryFocusLabel: string;
    telemetryFocusValue: string;
    telemetryLocationLabel: string;
    telemetryLanguageLabel: string;
    telemetryLanguageValue: string;
    telemetryStackLabel: string;
    telemetryTabProfile: string;
    telemetryTabHighlights: string;
    telemetryHighlightsIntro: string;
  };
  about: {
    index: string;
    title: string;
    subtitle: string;
    mainEyebrow: string;
    mainTitle: string;
    mainParagraphOne: string;
    mainParagraphTwo: string;
    locationEyebrow: string;
    locationTitle: string;
    locationDetail: string;
    focusEyebrow: string;
    focusTitle: string;
    focusItems: string[];
    mindsetEyebrow: string;
    mindsetTitle: string;
    mindsetDescription: string;
    mindsetPillars: { label: string; detail: string }[];
    languageEyebrow: string;
    languageTitle: string;
    languagePortuguese: string;
    languageEnglish: string;
    viewCertificate: string;
  };
  experience: {
    index: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterWork: string;
    filterEducation: string;
    currentBadge: string;
    showDetails: string;
    hideDetails: string;
    workHeading: string;
    educationHeading: string;
    certificationsHeading: string;
    verifyCredential: string;
  };
  projects: {
    index: string;
    title: string;
    subtitle: string;
    featuredBadge: string;
    viewRepo: string;
    viewDemo: string;
    filters: Record<ProjectCategory, string>;
    emptyMessage: string;
    resultsCount: (count: number) => string;
  };
  stack: {
    index: string;
    title: string;
    subtitle: string;
  };
  contact: {
    index: string;
    title: string;
    subtitle: string;
    ctaHeading: string;
    ctaDescription: string;
    emailLabel: string;
    copyButton: string;
    copiedButton: string;
    sendEmailButton: string;
    channelsTitle: string;
    githubDesc: string;
    githubMainDesc: string;
    githubLegacyDesc: string;
    linkedinDesc: string;
    portfolioDesc: string;
    instagramDesc: string;
  };
  footer: {
    builtWith: string;
    backToTop: string;
  };
  command: {
    triggerLabel: string;
    triggerShort: string;
    placeholder: string;
    empty: string;
    groupNavigate: string;
    groupActions: string;
    groupLinks: string;
    actionCopyEmail: string;
    actionToggleTheme: string;
    actionToggleLocale: string;
    actionResume: string;
    hintClose: string;
    hintSelect: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
  "pt-BR": {
    a11y: {
      skipToContent: "Pular para o conteúdo principal",
      primaryNav: "Navegação principal",
      openMenu: "Abrir menu de navegação",
      closeMenu: "Fechar menu de navegação",
      toggleThemeToLight: "Ativar modo claro",
      toggleThemeToDark: "Ativar modo escuro",
      switchLanguage: "Alterar idioma para inglês",
      backToTop: "Voltar ao topo da página",
      emailCopiedAnnouncement: "Endereço de e-mail copiado para a área de transferência.",
    },
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      stack: "Stack & Infra",
      contact: "Contato",
      downloadResume: "Baixar Currículo (PDF)",
      downloadResumeShort: "Currículo (PDF)",
    },
    hero: {
      statusBadge: "Disponível para projetos & oportunidades",
      headlinePrefix: "Portfólio & Currículo",
      roleTitle:
        "Desenvolvedor Full-Stack & iOS | Entusiasta em Infraestrutura, Automação e Sistemas Corporativos",
      subtitle:
        "Uno a criticidade da operação de sistemas corporativos SAP na DK Systems à engenharia de software moderna — criando aplicativos nativos em SwiftUI, plataformas web multi-tenant, pipelines de CI/CD e infraestruturas self-hosted em Linux.",
      ctaProjects: "Explorar Projetos",
      ctaContact: "Entrar em Contato",
      telemetryLabel: "sys.profile // mikhael.dev",
      telemetryRoleLabel: "cargo_atual",
      telemetryRole: "Monitor de Sistemas SAP @ DK Systems",
      telemetryFocusLabel: "foco_atual",
      telemetryFocusValue: "iOS (SwiftUI) · Web Full-Stack · Docker & Self-Hosting",
      telemetryLocationLabel: "localização",
      telemetryLanguageLabel: "idiomas",
      telemetryLanguageValue: "Português (Nativo) · Inglês C1 (EF SET)",
      telemetryStackLabel: "stack_núcleo",
      telemetryTabProfile: "perfil",
      telemetryTabHighlights: "sistemas",
      telemetryHighlightsIntro: "Sistemas e apps em destaque",
    },
    about: {
      index: "01 · Sobre",
      title: "Sobre Mim",
      subtitle:
        "Visão de operação corporativa aplicada à criação de produtos digitais rápidos, seguros e sustentáveis",
      mainEyebrow: "Perfil Profissional",
      mainTitle: "Do monitoramento SAP à engenharia de software ponta a ponta",
      mainParagraphOne:
        "Estudante de Análise e Desenvolvimento de Sistemas na Unichristus e atualmente atuando no monitoramento de ambientes críticos SAP na DK Systems. Minha trajetória começou na base de infraestrutura e suporte técnico no TRT-7, consolidando uma visão prática de confiabilidade e atendimento.",
      mainParagraphTwo:
        "No dia a dia de código, foco em aplicações web modernas, desenvolvimento mobile nativo com SwiftUI, automação de builds (CI/CD) e ambientes Linux self-hosted. Fora do terminal, sou entusiasta de cultura pop, filmes, música e games — referências que influenciam meu cuidado com interfaces fluidas e acessíveis.",
      locationEyebrow: "Base Operacional",
      locationTitle: "Ceará, Brasil",
      locationDetail: "Maracanaú / Fortaleza (UTC-3) — Atuação presencial na RMF e remota.",
      focusEyebrow: "Foco Atual",
      focusTitle: "Onde concentro minha energia técnica",
      focusItems: [
        "Arquitetura de Software e APIs resilientes",
        "Desenvolvimento iOS nativo com SwiftUI e iCloud",
        "DevOps, Docker, CI/CD e infraestrutura Self-Hosted",
      ],
      mindsetEyebrow: "Mentalidade de Engenharia",
      mindsetTitle: "Resolver problemas reais com simplicidade e automação",
      mindsetDescription:
        "Acredito que bom software nasce da interseção entre código limpo, previsibilidade operacional e ótima experiência para quem usa.",
      mindsetPillars: [
        {
          label: "Código Limpo",
          detail: "Arquitetura legível, acessível (WCAG AA) e fácil de evoluir.",
        },
        {
          label: "Automação",
          detail: "Pipelines CI/CD e containers reproduzíveis para eliminar trabalho manual.",
        },
        {
          label: "Eficiência Operacional",
          detail: "Mentalidade de observabilidade e SLA herdada de ambientes críticos SAP.",
        },
      ],
      languageEyebrow: "Idiomas",
      languageTitle: "Comunicação técnica bilíngue",
      languagePortuguese: "Português — Nativo",
      languageEnglish: "Inglês — Nível C1 (Avançado)",
      viewCertificate: "Verificar certificado EF SET",
    },
    experience: {
      index: "02 · Trajetória",
      title: "Experiência & Formação",
      subtitle:
        "Histórico profissional em sistemas corporativos e infraestrutura, aliado à graduação tecnológica e certificações",
      filterAll: "Tudo",
      filterWork: "Experiência",
      filterEducation: "Formação & Certificações",
      currentBadge: "Atual",
      showDetails: "Ver destaques",
      hideDetails: "Ocultar destaques",
      workHeading: "Experiência Profissional",
      educationHeading: "Formação Acadêmica",
      certificationsHeading: "Certificações & Cursos",
      verifyCredential: "Ver credencial",
    },
    projects: {
      index: "03 · Projetos",
      title: "Vitrine de Projetos",
      subtitle:
        "Aplicativos nativos, sistemas fiscais self-hosted, contribuições open source e projetos acadêmicos em produção",
      featuredBadge: "Destaque",
      viewRepo: "Ver Código no GitHub",
      viewDemo: "Acessar Demo",
      filters: {
        all: "Todos",
        mobile: "Mobile (iOS / Android)",
        web: "Web & Sistemas",
        devops: "Open Source & DevOps",
      },
      emptyMessage: "Nenhum projeto encontrado para esta categoria.",
      resultsCount: (count: number) =>
        count === 1 ? "1 projeto exibido" : `${count} projetos exibidos`,
    },
    stack: {
      index: "04 · Stack & Infra",
      title: "Stack Tecnológica & Ferramentas",
      subtitle:
        "Tecnologias que utilizo no desenvolvimento de aplicativos, APIs, automação de entregas e sustentação de ambientes",
    },
    contact: {
      index: "05 · Contato",
      title: "Vamos construir algo sólido",
      subtitle:
        "Aberto a conversas sobre oportunidades em desenvolvimento Full-Stack, iOS, automação, freelances e projetos de infraestrutura",
      ctaHeading: "Envie uma mensagem direta",
      ctaDescription:
        "Copie meu endereço de e-mail com um clique ou acesse diretamente meus perfis técnicos e repositórios",
      emailLabel: "E-mail profissional",
      copyButton: "Copiar e-mail",
      copiedButton: "Copiado",
      sendEmailButton: "Abrir no app de e-mail",
      channelsTitle: "Canais & Repositórios",
      githubDesc: "Projetos, repositórios e contribuições de código",
      githubMainDesc: "Projetos iOS, Swift e Open Source",
      githubLegacyDesc: "Repositórios e contribuições de código",
      linkedinDesc: "Trajetória profissional e conexões",
      portfolioDesc: "Versão anterior em produção",
      instagramDesc: "Contato rápido e bastidores",
    },
    footer: {
      builtWith: "Desenvolvido por Mikhael Vinícius com Next.js, TypeScript e Tailwind CSS.",
      backToTop: "Voltar ao topo",
    },
    command: {
      triggerLabel: "Abrir paleta de comandos (Ctrl K)",
      triggerShort: "Comandos",
      placeholder: "Ir para seção ou executar ação...",
      empty: "Nenhum comando encontrado",
      groupNavigate: "Navegar",
      groupActions: "Ações rápidas",
      groupLinks: "Links externos",
      actionCopyEmail: "Copiar e-mail de contato",
      actionToggleTheme: "Alternar tema claro / escuro",
      actionToggleLocale: "Alternar idioma (PT-BR / EN)",
      actionResume: "Baixar Currículo (PDF)",
      hintClose: "fechar",
      hintSelect: "executar",
    },
  },
  en: {
    a11y: {
      skipToContent: "Skip to main content",
      primaryNav: "Primary navigation",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      toggleThemeToLight: "Switch to light mode",
      toggleThemeToDark: "Switch to dark mode",
      switchLanguage: "Switch language to Brazilian Portuguese",
      backToTop: "Back to top",
      emailCopiedAnnouncement: "Email address copied to clipboard.",
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      stack: "Stack & Infra",
      contact: "Contact",
      downloadResume: "Download Resume (PDF)",
      downloadResumeShort: "Resume (PDF)",
    },
    hero: {
      statusBadge: "Open to projects & new opportunities",
      headlinePrefix: "Portfolio & Resume",
      roleTitle:
        "Full-Stack & iOS Developer | Infrastructure, Automation & Enterprise Systems Specialist",
      subtitle:
        "Bridging mission-critical SAP operations at DK Systems with modern software engineering — building native SwiftUI apps, multi-tenant web platforms, CI/CD pipelines, and resilient self-hosted Linux infrastructure.",
      ctaProjects: "Explore Projects",
      ctaContact: "Get in Touch",
      telemetryLabel: "sys.profile // mikhael.dev",
      telemetryRoleLabel: "current_role",
      telemetryRole: "SAP Systems Monitor @ DK Systems",
      telemetryFocusLabel: "current_focus",
      telemetryFocusValue: "iOS (SwiftUI) · Full-Stack Web · Docker & Self-Hosting",
      telemetryLocationLabel: "location",
      telemetryLanguageLabel: "languages",
      telemetryLanguageValue: "Portuguese (Native) · English C1 (EF SET)",
      telemetryStackLabel: "core_stack",
      telemetryTabProfile: "profile",
      telemetryTabHighlights: "systems",
      telemetryHighlightsIntro: "Featured systems & apps",
    },
    about: {
      index: "01 · About",
      title: "About Me",
      subtitle:
        "Enterprise operations discipline applied to building fast, secure, and maintainable digital products",
      mainEyebrow: "Professional Summary",
      mainTitle: "From SAP system operations to end-to-end software engineering",
      mainParagraphOne:
        "Systems Analysis and Development student at Unichristus, currently operating and monitoring mission-critical SAP environments at DK Systems. My foundation began in IT support and infrastructure at TRT-7, building a strong grasp of service reliability and user empathy.",
      mainParagraphTwo:
        "On the engineering side, I focus on modern web platforms, native iOS development with SwiftUI, fiscal integrations, CI/CD automation, and self-hosted Linux architectures. Outside the terminal, I enjoy pop culture, films, music, and gaming — shaping how I craft accessible, engaging user experiences.",
      locationEyebrow: "Base Location",
      locationTitle: "Ceará, Brazil",
      locationDetail: "Maracanaú / Fortaleza (UTC-3) — Open to remote and local roles.",
      focusEyebrow: "Current Focus",
      focusTitle: "Where I invest my engineering time",
      focusItems: [
        "Software Architecture & resilient APIs",
        "Native iOS development with SwiftUI and iCloud",
        "DevOps, Docker, CI/CD, and Self-Hosted infrastructure",
      ],
      mindsetEyebrow: "Engineering Mindset",
      mindsetTitle: "Solving real problems through clean code and automation",
      mindsetDescription:
        "Great software lives at the intersection of clean architecture, operational predictability, and thoughtful user experience.",
      mindsetPillars: [
        {
          label: "Clean Code",
          detail: "Readable, accessible (WCAG AA), and maintainable implementations.",
        },
        {
          label: "Automation",
          detail: "CI/CD workflows and reproducible containers to eliminate manual friction.",
        },
        {
          label: "Operational Efficiency",
          detail: "Observability and SLA rigor shaped by enterprise SAP monitoring.",
        },
      ],
      languageEyebrow: "Languages & Credential",
      languageTitle: "Bilingual technical communication",
      languagePortuguese: "Portuguese — Native",
      languageEnglish: "English — C1 Level (Advanced)",
      viewCertificate: "Verify EF SET certificate",
    },
    experience: {
      index: "02 · Journey",
      title: "Experience & Education",
      subtitle:
        "Professional track across enterprise systems and IT infrastructure alongside formal education and certifications",
      filterAll: "All",
      filterWork: "Experience",
      filterEducation: "Education & Certifications",
      currentBadge: "Current",
      showDetails: "Show highlights",
      hideDetails: "Hide highlights",
      workHeading: "Work Experience",
      educationHeading: "Academic Background",
      certificationsHeading: "Certifications & Courses",
      verifyCredential: "Verify credential",
    },
    projects: {
      index: "03 · Projects",
      title: "Featured Projects",
      subtitle:
        "Native mobile apps, self-hosted fiscal engines, open-source contributions, and full-stack platforms",
      featuredBadge: "Featured",
      viewRepo: "View on GitHub",
      viewDemo: "Live Demo",
      filters: {
        all: "All",
        mobile: "Mobile (iOS / Android)",
        web: "Web & Systems",
        devops: "Open Source & DevOps",
      },
      emptyMessage: "No projects found in this category.",
      resultsCount: (count: number) =>
        count === 1 ? "Showing 1 project" : `Showing ${count} projects`,
    },
    stack: {
      index: "04 · Stack & Infra",
      title: "Tech Stack & Tooling",
      subtitle:
        "Technologies I use daily to craft apps, design APIs, automate delivery, and operate infrastructure",
    },
    contact: {
      index: "05 · Contact",
      title: "Let's build something reliable",
      subtitle:
        "Open to conversations around Full-Stack, iOS development, automation, freelance work, and infrastructure opportunities",
      ctaHeading: "Reach out directly",
      ctaDescription:
        "Copy my email address with one click or connect through any of my engineering profiles below",
      emailLabel: "Work email",
      copyButton: "Copy email",
      copiedButton: "Copied",
      sendEmailButton: "Open mail client",
      channelsTitle: "Channels & Repositories",
      githubDesc: "Projects, repositories, and open code",
      githubMainDesc: "iOS, Swift, and Open Source work",
      githubLegacyDesc: "Code repositories and contributions",
      linkedinDesc: "Professional history and network",
      portfolioDesc: "Previous live portfolio",
      instagramDesc: "Quick reach and updates",
    },
    footer: {
      builtWith: "Crafted by Mikhael Vinícius using Next.js, TypeScript, and Tailwind CSS.",
      backToTop: "Back to top",
    },
    command: {
      triggerLabel: "Open command palette (Ctrl K)",
      triggerShort: "Commands",
      placeholder: "Jump to section or run action...",
      empty: "No matching command",
      groupNavigate: "Navigate",
      groupActions: "Quick actions",
      groupLinks: "External links",
      actionCopyEmail: "Copy contact email",
      actionToggleTheme: "Toggle light / dark theme",
      actionToggleLocale: "Switch language (PT-BR / EN)",
      actionResume: "Download Resume (PDF)",
      hintClose: "close",
      hintSelect: "select",
    },
  },
};
