"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionHeading } from "../ui/section-heading";

const experienceData = [
  {
    title: "Desenvolvedor Mobile e Web",
    company: "CEPEDI",
    companyUrl: "https://www.cepedi.org.br/",
    date: "Junho 2024 - Dezembro 2024",
    description:
      "Atuação no desenvolvimento e manutenção de aplicações web e mobile, utilizando React, React Native e Node.js para entregar soluções de alta performance.",
  },
  {
    title: "Desenvolvedor e Pesquisador em IA",
    company: "Projeto BAH.IA",
    companyUrl: "#",
    date: "Janeiro 2024 - Dezembro 2024",
    description:
      "Pesquisa e implementação de modelos de Inteligência Artificial. Desenvolvimento de APIs com .NET e Python para consumo de dados e integração de sistemas.",
  },
  {
    title: "Desenvolvedor Web/Mobile e Pesquisador",
    company: "Universidade Estadual de Santa Cruz (UESC)",
    companyUrl: "https://www.uesc.br/",
    date: "Março 2022 - Presente",
    description:
      "Participação em projetos de pesquisa e desenvolvimento de software acadêmico, aplicando arquiteturas limpas e metodologias ágeis.",
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
