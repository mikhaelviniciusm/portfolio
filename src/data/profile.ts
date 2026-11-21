export type Locale = "pt-BR" | "en";

export type LocalizedText = Record<Locale, string>;

export type LocalizedList = Record<Locale, string[]>;

export type ProjectCategory = "all" | "mobile" | "web" | "devops";

export interface ExperienceItem {
  id: string;
  kind: "work" | "education";
  role: LocalizedText;
  organization: string;
  location: string;
  period: LocalizedText;
  current?: boolean;
  summary: LocalizedText;
  highlights: LocalizedList;
  tags: string[];
  needsReview?: boolean;
}

export interface CertificationItem {
  id: string;
  title: LocalizedText;
  issuer: string;
  year: string;
  workload?: LocalizedText;
  credentialUrl: string;
}

export interface ProjectItem {
  id: string;
  featured: boolean;
  categories: Exclude<ProjectCategory, "all">[];
  eyebrow: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedList;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  statusLabel: LocalizedText;
}

export interface TechDomainGroup {
  id: string;
  iconKey: "mobile" | "backend" | "devops" | "enterprise";
  title: LocalizedText;
  description: LocalizedText;
  items: string[];
}

export const PROFILE_CONTACT = {
  displayName: "Mikhael Vinícius",
  fullName: "Mikhael Vinicius Martins de Lima",
  brandHandle: "mikhael.dev",
  monogram: "MV",
  email: "contato@mikhael.dev.br",
  location: {
    city: "Maracanaú / Fortaleza",
    state: "CE",
    country: {
      "pt-BR": "Ceará, Brasil",
      en: "Ceará, Brazil",
    } as LocalizedText,
    timezone: "UTC-3",
  },
  resumeUrl: "/curriculo.pdf",
  portfolioUrl: "https://portfolio.mikhael.dev.br/",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/mikhaelviniciusm",
  githubPrimary: "https://github.com/mikhaelviniciusm",
  githubLegacy: "https://github.com/mikhaelviniciusm",
  linkedin: "https://br.linkedin.com/in/mikhaelvinicius",
  portfolio: "https://mikhael.is-a.dev/",
  instagram: "https://www.instagram.com/mikhaelvinicius",
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "dk-systems-sap",
    kind: "work",
    current: true,
    needsReview: true,
    role: {
      "pt-BR": "Monitor de Sistemas SAP",
      en: "SAP Systems Monitor",
    },
    organization: "DK Systems",
    location: "Fortaleza, CE",
    period: {
      "pt-BR": "04/2026 – Atual",
      en: "04/2026 – Present",
    },
    summary: {
      "pt-BR":
        "Monitoramento contínuo de ambientes críticos SAP em regime de escala, atuação preventiva sobre incidentes, garantia de disponibilidade operacional e suporte técnico de alta confiabilidade.",
      en: "Continuous monitoring of mission-critical SAP landscapes under shift schedules, preventive incident analysis, operational availability assurance, and high-reliability technical support.",
    },
    highlights: {
      "pt-BR": [
        "Acompanhamento em tempo real de jobs, filas, logs e métricas de saúde em paisagens SAP corporativas.",
        "Triagem rápida, escalonamento estruturado e prevenção de gargalos operacionais com foco em SLA.",
        "Visão prática de continuidade de negócios aplicada à observabilidade de sistemas.",
      ],
      en: [
        "Real-time tracking of background jobs, queues, system logs, and health metrics across enterprise SAP landscapes.",
        "Rapid triage, structured escalation, and bottleneck prevention focused on strict SLA compliance.",
        "Hands-on business continuity mindset applied to system observability.",
      ],
    },
    tags: [
      "SAP",
      "Zabbix",
      "Acelerato",
      "Monitoramento Crítico",
      "SLA & Incidentes",
      "Operações 24/7",
    ],
  },
  {
    id: "trt7-intern",
    kind: "work",
    needsReview: true,
    role: {
      "pt-BR": "Estagiário de Suporte de TI",
      en: "IT Support Intern",
    },
    organization: "Tribunal Regional do Trabalho da 7ª Região (TRT-7)",
    location: "Fortaleza, CE",
    period: {
      "pt-BR": "05/2025 – 04/2026",
      en: "05/2025 – 04/2026",
    },
    summary: {
      "pt-BR":
        "Atuação no atendimento a chamados técnicos, implantação e configuração de softwares, testes de rede e conectividade, diagnóstico de hardware, suporte a periféricos e controle de inventário de ativos de TI.",
      en: "Technical ticket resolution, software provisioning and configuration, network and connectivity diagnostics, hardware troubleshooting, peripheral support, and IT asset inventory management.",
    },
    highlights: {
      "pt-BR": [
        "Atendimento direto a usuários finais com foco em clareza, agilidade e postura ética.",
        "Diagnóstico de rede, manutenção preventiva de estações de trabalho e suporte a sistemas internos.",
        "Apoio ao controle patrimonial e padronização de ambientes de trabalho.",
      ],
      en: [
        "Direct end-user technical assistance centered on clarity, speed, and professional ethics.",
        "Network diagnostics, workstation maintenance, and support for internal judicial systems.",
        "IT asset inventory tracking and standardization of corporate workstation setups.",
      ],
    },
    tags: ["Jira SM", "Suporte Técnico", "Redes", "Hardware", "Gestão de Ativos"],
  },
];

export const EDUCATION: ExperienceItem[] = [
  {
    id: "unichristus-ads",
    kind: "education",
    current: true,
    role: {
      "pt-BR": "Tecnologia em Análise e Desenvolvimento de Sistemas",
      en: "Associate Degree in Systems Analysis and Development",
    },
    organization: "Universidade Christus (Unichristus)",
    location: "Fortaleza, CE — Noturno",
    period: {
      "pt-BR": "08/2023 – Previsão 12/2027",
      en: "08/2023 – Expected 12/2027",
    },
    summary: {
      "pt-BR":
        "Graduação tecnológica focada em engenharia de software, desenvolvimento web e mobile, bancos de dados relacionais, arquitetura de sistemas e resolução prática de problemas.",
      en: "Undergraduate technology degree focused on software engineering, web and mobile development, relational databases, systems architecture, and practical problem-solving.",
    },
    highlights: {
      "pt-BR": [
        "Base sólida em lógica de programação, estruturas de dados, SQL e desenvolvimento full-stack (JavaScript, Python e Java).",
        "Desenvolvimento de projetos acadêmicos aplicados como a biblioteca virtual Lexis e o app Android CheckMate.",
      ],
      en: [
        "Strong foundation in programming logic, data structures, SQL, and full-stack development (JavaScript, Python, and Java).",
        "Hands-on academic projects including the Lexis virtual library platform and the CheckMate Android app.",
      ],
    },
    tags: ["ADS", "Engenharia de Software", "SQL", "Full-Stack", "Mobile"],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "efset-c1",
    title: {
      "pt-BR": "Inglês — Nível C1 (Avançado)",
      en: "English — C1 Level (Advanced)",
    },
    issuer: "EF SET",
    year: "Certificado Oficial",
    credentialUrl: "https://cert.efset.org/a3YzSm",
  },
  {
    id: "ciee-python",
    title: {
      "pt-BR": "Programador Python",
      en: "Python Programmer",
    },
    issuer: "CIEE",
    year: "2025",
    workload: {
      "pt-BR": "50 horas",
      en: "50 hours",
    },
    credentialUrl: "https://bit.ly/40d4p7w",
  },
  {
    id: "santander-dio-java",
    title: {
      "pt-BR": "Backend com Java",
      en: "Backend with Java",
    },
    issuer: "Santander & DIO",
    year: "2024",
    workload: {
      "pt-BR": "87 horas",
      en: "87 hours",
    },
    credentialUrl: "https://dio.me/certificate/JEUNPQ87/share",
  },
  {
    id: "cubos-js",
    title: {
      "pt-BR": "Lógica de Programação com JavaScript",
      en: "Programming Logic with JavaScript",
    },
    issuer: "Cubos Academy",
    year: "2023",
    workload: {
      "pt-BR": "3 horas",
      en: "3 hours",
    },
    credentialUrl: "https://bit.ly/3y9AWRe",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "trackr-ios",
    featured: true,
    categories: ["mobile", "devops"],
    eyebrow: {
      "pt-BR": "Mobile Nativo · Finanças Pessoais",
      en: "Native Mobile · Personal Finance",
    },
    title: {
      "pt-BR": "Trackr — Gestão Financeira iOS",
      en: "Trackr — iOS Financial Management",
    },
    summary: {
      "pt-BR":
        "Aplicativo nativo para iOS projetado para o controle inteligente de compras parceladas no cartão de crédito e assinaturas recorrentes, com sincronização nativa via Google Drive e pipeline de build automatizado.",
      en: "Native iOS application engineered for smart tracking of credit card installment purchases and recurring subscriptions, featuring native Google Drive synchronization and automated CI/CD builds.",
    },
    highlights: {
      "pt-BR": [
        "Projeção clara de faturas futuras por parcela e controle de renovação de assinaturas.",
        "Sincronização transparente entre dispositivos Apple usando recursos do Google Drive.",
        "Build e verificação contínua automatizados via GitHub Actions.",
      ],
      en: [
        "Clear forecasting of upcoming credit card installments and subscription renewal schedules.",
        "Seamless cross-device Apple synchronization powered by native Google Drive capabilities.",
        "Automated continuous build and validation pipeline via GitHub Actions.",
      ],
    },
    tags: ["SwiftUI", "iOS", "Google Drive Sync", "GitHub Actions"],
    repoUrl: "https://github.com/mikhaelviniciusm/trackr",
    statusLabel: {
      "pt-BR": "Código Aberto",
      en: "Open Source",
    },
  },
  {
    id: "fiscal-multi-tenant",
    featured: true,
    categories: ["web", "devops"],
    eyebrow: {
      "pt-BR": "Sistemas Corporativos · Integração SEFAZ",
      en: "Enterprise Systems · Tax Integration",
    },
    title: {
      "pt-BR": "Sistema Fiscal Multi-Tenant (CT-e / MDF-e)",
      en: "Multi-Tenant Tax Engine (CT-e / MDF-e)",
    },
    summary: {
      "pt-BR":
        "Plataforma web self-hosted para emissão de documentos fiscais eletrônicos (CT-e e MDF-e), averbação automática de seguros e importação de XML via Distribuição DFe junto à SEFAZ, empacotada em Docker.",
      en: "Self-hosted web platform for issuing Brazilian electronic fiscal documents (CT-e and MDF-e), automated cargo insurance registration, and DFe XML retrieval from SEFAZ, containerized with Docker.",
    },
    highlights: {
      "pt-BR": [
        "Isolamento multi-tenant para múltiplas transportadoras e certificados digitais A1.",
        "Comunicação direta via XML/SOAP com os webservices da SEFAZ e rotinas de Distribuição DFe.",
        "Implantação reproduzível e portátil com Docker e Docker Compose.",
      ],
      en: [
        "Multi-tenant isolation supporting multiple carriers and A1 digital certificates.",
        "Direct XML/SOAP communication with SEFAZ webservices and DFe distribution jobs.",
        "Portable and reproducible deployment packaged via Docker and Docker Compose.",
      ],
    },
    tags: ["Docker", "Integração SEFAZ", "XML/SOAP", "Multi-tenant", "Self-Hosted"],
    statusLabel: {
      "pt-BR": "Self-Hosted · Em Homologação",
      en: "Self-Hosted · In Homologation",
    },
  },
  {
    id: "homelab-selfhosted",
    featured: true,
    categories: ["devops"],
    eyebrow: {
      "pt-BR": "Infraestrutura · Linux & Redes",
      en: "Infrastructure · Linux & Networking",
    },
    title: {
      "pt-BR": "Ecossistema HomeLab & Infraestrutura Self-Hosted",
      en: "HomeLab & Self-Hosted Infrastructure Ecosystem",
    },
    summary: {
      "pt-BR":
        "Arquitetura pessoal de serviços auto-hospedados em Linux e Oracle Cloud (OCI) com Docker Compose, Cloudflare Tunnels para exposição segura sem abertura de portas, proxy reverso e observabilidade de containers.",
      en: "Personal self-hosted services architecture running on Linux and Oracle Cloud (OCI) with Docker Compose, Cloudflare Tunnels for zero-port-forwarding exposure, reverse proxy, and container monitoring.",
    },
    highlights: {
      "pt-BR": [
        "Exposição segura de serviços internos via Cloudflare Tunnels e autenticação centralizada.",
        "Orquestração declarativa de stacks com Docker Compose, Nginx e rotinas de backup.",
      ],
      en: [
        "Zero-trust internal service exposure through Cloudflare Tunnels and centralized auth.",
        "Declarative stack orchestration using Docker Compose, Nginx, and automated backup routines.",
      ],
    },
    tags: ["Linux", "Docker", "Cloudflare Tunnel", "Segurança", "Redes"],
    statusLabel: {
      "pt-BR": "Infraestrutura Ativa",
      en: "Active Infrastructure",
    },
  },
  {
    id: "lexis-library",
    featured: false,
    categories: ["web"],
    eyebrow: {
      "pt-BR": "Web Full-Stack · Projeto Acadêmico",
      en: "Full-Stack Web · Academic Project",
    },
    title: {
      "pt-BR": "Lexis — Biblioteca Virtual",
      en: "Lexis — Virtual Library",
    },
    summary: {
      "pt-BR":
        "Plataforma web de biblioteca virtual com controle de acesso por perfis, gestão completa de acervo, relatórios analíticos integrados ao Metabase para administradores e leitor de livros para usuários.",
      en: "Virtual library web platform featuring role-based access control, catalog management, analytical dashboards via Metabase for administrators, and an integrated book reader for end users.",
    },
    highlights: {
      "pt-BR": [
        "Separação de camadas entre front-end React e API REST em Express com persistência SQLite.",
        "Painéis gerenciais e métricas de leitura conectados ao Metabase.",
      ],
      en: [
        "Clean separation between React frontend and Express REST API backed by SQLite.",
        "Administrative reports and usage metrics powered by Metabase.",
      ],
    },
    tags: ["React", "Express", "SQLite", "Metabase"],
    repoUrl: "https://github.com/orgs/lexis-books/repositories",
    statusLabel: {
      "pt-BR": "Código Aberto",
      en: "Open Source",
    },
  },
  {
    id: "checkmate-android",
    featured: false,
    categories: ["mobile"],
    eyebrow: {
      "pt-BR": "Mobile Nativo · Produtividade",
      en: "Native Mobile · Productivity",
    },
    title: {
      "pt-BR": "CheckMate — Gerenciador de Tarefas",
      en: "CheckMate — Task Manager",
    },
    summary: {
      "pt-BR":
        "Aplicativo Android nativo desenvolvido em Java com persistência local em SQLite para criação, acompanhamento de status e conclusão rápida de tarefas diárias.",
      en: "Native Android application built with Java and local SQLite persistence for creating, tracking, and completing daily tasks with minimal friction.",
    },
    highlights: {
      "pt-BR": [
        "Armazenamento local confiável com SQLite e interface objetiva em Android.",
      ],
      en: [
        "Reliable offline-first local storage via SQLite with a focused Android UI.",
      ],
    },
    tags: ["Java", "Android", "SQLite"],
    repoUrl: "https://github.com/mikhaelviniciusm/CheckMate",
    statusLabel: {
      "pt-BR": "Código Aberto",
      en: "Open Source",
    },
  },
];

export const TECH_STACK_GROUPS: TechDomainGroup[] = [
  {
    id: "mobile-frontend",
    iconKey: "mobile",
    title: {
      "pt-BR": "Desenvolvimento Mobile & Front-end",
      en: "Mobile & Front-end Development",
    },
    description: {
      "pt-BR": "Interfaces responsivas, acessíveis e aplicativos nativos centrados na experiência do usuário.",
      en: "Accessible, responsive web interfaces and native mobile apps crafted around user experience.",
    },
    items: [
      "Swift",
      "SwiftUI",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Android (Java)",
      "Figma",
    ],
  },
  {
    id: "backend-data",
    iconKey: "backend",
    title: {
      "pt-BR": "Back-end, Dados & Integrações",
      en: "Back-end, Data & Integrations",
    },
    description: {
      "pt-BR": "APIs estruturadas, persistência relacional, automação de rotinas e mensageria fiscal.",
      en: "Structured APIs, relational persistence, automated workflows, and fiscal messaging integrations.",
    },
    items: [
      "Node.js",
      "Express",
      "Python",
      "Java",
      "APIs REST / SOAP",
      "XML / JSON",
      "Integração SEFAZ",
      "SQLite",
      "MySQL / SQL",
      "Metabase",
    ],
  },
  {
    id: "devops-infra",
    iconKey: "devops",
    title: {
      "pt-BR": "DevOps, Cloud & Infraestrutura",
      en: "DevOps, Cloud & Infrastructure",
    },
    description: {
      "pt-BR": "Containerização, entregas contínuas, redes seguras e ambientes self-hosted resilientes.",
      en: "Containerization, continuous delivery pipelines, secure networking, and resilient self-hosted stacks.",
    },
    items: [
      "Docker",
      "Docker Compose",
      "Linux",
      "Git",
      "GitHub Actions (CI/CD)",
      "Cloudflare Tunnels",
      "Oracle Cloud (OCI)",
      "Nginx / Reverse Proxy",
    ],
  },
  {
    id: "enterprise-ops",
    iconKey: "enterprise",
    title: {
      "pt-BR": "Sistemas Corporativos & Operações",
      en: "Enterprise Systems & Operations",
    },
    description: {
      "pt-BR": "Sustentação de ambientes de missão crítica, análise preventiva e suporte técnico corporativo.",
      en: "Mission-critical environment operations, preventive incident analysis, and enterprise support.",
    },
    items: [
      "Monitoramento SAP",
      "Zabbix",
      "Acelerato",
      "Jira SM",
      "Operação de Ambientes Críticos",
      "Análise de Incidentes & SLA",
      "Suporte Técnico & Redes",
      "Gestão de Ativos de TI",
    ],
  },
];
