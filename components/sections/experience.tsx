"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionHeading } from "../ui/section-heading";

const experienceData = [
  {
    title: "Desenvolvedor de Software",
    company: "CEPEDI",
    companyUrl: "https://www.cepedi.org.br/",
    date: "Junho 2023 - Dezembro 2024",
    description:
      "Atuei no desenvolvimento e manutenção de aplicações web, com foco em interfaces modernas, integrações e estabilidade das soluções. Trabalhei com React, Next.js, JavaScript e APIs REST, apoiando a evolução de páginas, componentes e fluxos de usuário. Participei da correção de bugs, refatoração de código e melhoria de performance em sistemas já em produção. Colaborei com times técnicos e de produto para entender requisitos, ajustar funcionalidades e manter entregas consistentes. Apoiei a organização técnica do código, garantindo estruturas mais claras, reutilizáveis e de fácil manutenção. Contribuí em rotinas de versionamento, revisão e acompanhamento de mudanças, com foco em qualidade e segurança das entregas.",
  },
  {
    title: "Desenvolvedor e Pesquisador em IA",
    company: "Projeto BAH.IA",
    companyUrl: "#",
    date: "Janeiro 2023 - Dezembro 2024",
    description:
      "Pesquisa e implementação de modelos de Inteligência Artificial, com desenvolvimento de APIs em .NET e Python para consumo de dados e integração entre sistemas. Atuação voltada à construção de soluções técnicas para processamento, integração e automação de fluxos.",
  },
  {
    title: "Engenheiro de Software",
    company: "CroSoften",
    companyUrl: "https://crosoften.com/",
    date: "Janeiro 2025",
    description:
      "Atuação em projetos com forte integração entre front-end, backend e rotinas de suporte a sistemas web. Desenvolvimento e manutenção de funcionalidades com foco em estabilidade, performance e experiência do usuário. Apoio na integração com APIs e serviços externos, incluindo fluxos automatizados e validações técnicas. Participação em melhorias contínuas de aplicações, com atenção à manutenção preventiva, organização de código e confiabilidade do sistema. Colaboração direta com a equipe na análise de problemas técnicos, correções e evolução de componentes web. Desenvolvimento de interfaces responsivas com foco em usabilidade e clareza visual Integrações entre front-end e APIs para consumo e envio de dados. Refatoração de código para manter aplicações mais leves, organizadas e escaláveis. Apoio em melhorias de performance, carregamento e experiência do usuário. Participação em fluxos de manutenção contínua e correção de problemas técnicos Integração com ferramentas digitais e apoio à evolução de aplicações web em produção.",
  },
   {
    title: "Desenvolvedor Web/Mobile e Pesquisador",
    company: "Universidade Estadual de Santa Cruz (UESC)",
    companyUrl: "https://www.uesc.br/",
    date: "Março 2022 - Presente",
    description:
      "Participação em projetos de pesquisa e desenvolvimento de software, com atuação em aplicações web, mobile e projetos acadêmicos. Trabalho com aplicação de boas práticas de arquitetura, organização de código e metodologias ágeis, apoiando a construção de soluções estáveis, escaláveis e bem estruturadas.",
  },
];

const sortedExperience = [...experienceData].reverse();

const timelineVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,

      ease: [0.22, 0.8, 0.2, 1],

      staggerChildren: 0.08,
    },
  },
};

const circleVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.42,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: [0.22, 0.8, 0.2, 1],
    },
  },
};

export const Experience = () => {
  return (
    <section id="experiencia" className="w-full max-w-4xl mx-auto py-24 px-4">
      <SectionHeading
        title="Experiência"
        subtitle="Minha jornada profissional"
      />

      {}
      <motion.div
        className="relative flex flex-col mt-12"
        variants={timelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {}
        <div className="absolute left-4 top-0 w-0.5 h-full bg-border z-0" />

        {}
        {sortedExperience.map((item, i) => (
          <motion.div
            key={item.title + i}
            className="relative pl-12 mb-10 z-10"
            variants={itemVariants}
          >
            {}
            <motion.div
              className="absolute -left-0.5 top-1 flex items-center justify-center"
              variants={circleVariants}
            >
              <div className="absolute w-8 h-8 bg-primary/30 rounded-full animate-ping" />
              <div className="relative w-4 h-4 bg-primary rounded-full border-4 border-background" />
            </motion.div>

            {}
            <motion.div variants={cardVariants}>
              <div className="p-6 bg-card border border-border rounded-xl shadow-lg hover:border-primary/50 transition-colors duration-300">
                {/* Título e Empresa */}
                <h3 className="font-outfit text-xl font-bold text-foreground">
                  {item.title}
                </h3>

                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <Briefcase className="w-4 h-4" />
                  {item.company}
                </a>

                {/* Data */}
                <div className="flex items-center gap-2 text-sm text-foreground/60 mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                {/* Descrição */}
                <p className="text-foreground/80 mt-4 text-base">
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
