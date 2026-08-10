"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, Calendar, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/section-heading";

const experienceData = [
  {
    title: "Engenheiro de software",
    company: "Universidade Estadual de Santa Cruz (UESC)",
    companyUrl: "https://www.uesc.br/",
    date: "Jan de 2023 - Dez de 2023",
    description:
      "Pesquisa e implementação de modelos de Inteligência Artificial no Projeto BAH.IA, com desenvolvimento de APIs em .NET e Python para acelerar a inclusão de IA em plataformas de educação para escolas. Desenvolvimento de APIs em .NET e Python para consumo e integração de dados entre sistemas. Construção de soluções técnicas para processamento e automação de fluxos, aplicadas a um contexto educacional real.",
  },
  {
    title: "Desenvolvimento Mobile",
    company: "CEPEDI",
    companyUrl: "https://www.cepedi.org.br/",
    date: "Jul de 2024 - Dez de 2024",
    description:
      "Atuei no projeto Restic 36 desenvolvendo aplicações mobile com React Native, do levantamento de requisitos à entrega de funcionalidades, em colaboração com equipes multidisciplinares. Interfaces responsivas e componentes reutilizáveis em React Native, com gerenciamento de estado via Redux/Zustand e Context API. Integração com APIs REST e serviços externos, incluindo autenticação de usuários e tratamento de dados. Correção de bugs e melhorias contínuas de performance e usabilidade, com organização e manutenção da base de código.",
  },
  {
    title: "Engenheiro de software",
    company: "CroSoften",
    companyUrl: "https://crosoften.com/",
    date: "Jan de 2025 - Dez de 2025",
    description:
      "Atuei em três frentes: desenvolvimento Android nativo, desenvolvimento web com Angular, e qualidade/QA, com responsabilidade também sobre CI/CD e observabilidade. Módulos Android modernos em Kotlin, com Jetpack Compose, ViewModel, LiveData/StateFlow e arquitetura MVVM. Integração de APIs RESTful e GraphQL com Retrofit/OkHttp, persistência local com Room e sincronização off-line com tratamento de conflito. Painéis administrativos e componentes reutilizáveis em Angular, com módulos lazy-loaded para otimizar tempo de inicialização. Estruturação de estratégia de testes (unitário, integração, UI/E2E) com JUnit, MockK, Espresso, Karma, Jasmine e Cypress, integrados à pipeline de CI/CD para reduzir regressões antes do deploy. Configuração de pipelines em GitLab CI, GitHub Actions e Jenkins, com monitoramento via Firebase Crashlytics, Sentry e SonarQube.",
  },
  {
    title: "AI & Software Engineer",
    company: "WiseChats",
    companyUrl: "#",
    date: "Jan de 2026 - Jul de 2026",
    description:
      "Atuei como Engenheiro de Software e IA no desenvolvimento de uma plataforma SaaS e CRM, integrando modelos de linguagem (LLMs) e automações inteligentes a fluxos de negócio reais. Desenvolvimento full-stack de funcionalidades completas em React, Next.js, TypeScript e Node.js/Python. Integração e orquestração de LLMs (OpenAI API, LangChain, embeddings, agentes de IA) para geração de respostas, automação de fluxos e otimização da experiência do usuário. Construção de componentes para captura, organização e gestão de dados de clientes, com integrações via APIs REST e webhooks. Modelagem, consulta e otimização de bancos de dados relacionais e não relacionais (PostgreSQL, MySQL, MongoDB, Redis). Participação ativa em decisões técnicas e evolução da arquitetura do sistema, com deploy em AWS, Vercel e Render via CI/CD.",
  },
];

const sortedExperience = [...experienceData].reverse();

const timelineVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 0.8, 0.2, 1], staggerChildren: 0.08 },
  },
};

const circleVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { duration: 0.42, ease: [0.34, 1.56, 0.64, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.22, 0.8, 0.2, 1] },
  },
};

export const Experience = () => {
  return (
    <section id="experiencia" className="w-full max-w-4xl mx-auto py-24 px-4">
      <SectionHeading title="Experiência" subtitle="Minha jornada profissional" />

      <motion.div
        className="relative flex flex-col mt-12"
        variants={timelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Animated timeline line */}
        <div className="absolute left-4 top-0 w-0.5 h-full z-0 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

        {sortedExperience.map((item, i) => (
          <motion.div
            key={item.company + i}
            className="relative pl-12 mb-10 z-10"
            variants={itemVariants}
          >
            {/* Circle indicator */}
            <motion.div
              className="absolute -left-0.5 top-1 flex items-center justify-center"
              variants={circleVariants}
            >
              <motion.div
                className="absolute w-8 h-8 bg-primary/20 rounded-full animate-ping"
                style={{ animationDuration: "3s" }}
              />
              <div className="relative w-4 h-4 bg-primary rounded-full border-4 border-background ring-2 ring-primary/30" />
            </motion.div>

            {/* Glass card */}
            <motion.div variants={cardVariants}>
              <div className="p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-lg hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-500 group">
                {/* Current badge */}
                {i === 0 && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-xs font-semibold text-primary mb-3">
                    <Sparkles className="h-3 w-3" />
                    Atual
                  </span>
                )}

                <h3 className="font-outfit text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>

                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-1"
                >
                  <Briefcase className="w-4 h-4" />
                  {item.company}
                </a>

                <div className="flex items-center gap-2 text-sm text-foreground/50 mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                <p className="text-foreground/75 mt-4 text-base leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
