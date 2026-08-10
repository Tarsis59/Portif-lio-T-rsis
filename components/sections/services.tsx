"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Smartphone,
  Layers,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "../ui/section-heading";

const services = [
  {
    icon: Layers,
    title: "Desenvolvimento Full-Stack",
    description:
      "Aplicações web completas com React, Next.js, Angular no front e C# (.NET), Node.js, Python no back. Clean Architecture, DDD, CQRS e Microsserviços.",
    gradient: "from-blue-500 to-cyan-400",
    delay: 0,
  },
  {
    icon: Brain,
    title: "Engenharia de IA & LLMs",
    description:
      "Integração de LLMs (OpenAI, LangChain), agentes inteligentes, embeddings e Prompt Engineering em produtos SaaS. Automações inteligentes que resolvem problemas reais de negócio.",
    gradient: "from-purple-500 to-pink-400",
    delay: 0.1,
  },
  {
    icon: Cpu,
    title: "APIs & Microsserviços",
    description:
      "APIs RESTful e GraphQL escaláveis, arquiteturas orientadas a eventos (Kafka, RabbitMQ), mensageria, cache com Redis e deploy em AWS/Vercel/Render.",
    gradient: "from-emerald-500 to-teal-400",
    delay: 0.2,
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento Mobile",
    description:
      "Apps mobile nativos com React Native e Android (Kotlin, Jetpack Compose). Experiências fluidas, sincronização offline e publicação nas lojas.",
    gradient: "from-orange-500 to-yellow-400",
    delay: 0.3,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 0.8, 0.2, 1] as const },
  }),
};

export const Services: React.FC = () => {
  return (
    <motion.section
      id="servicos"
      className="w-full max-w-7xl mx-auto py-24 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px]" />
      </div>

      <SectionHeading
        title="Serviços"
        subtitle="Soluções completas para transformar ideias em produtos digitais"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-primary/[0.05]"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={service.delay}
              whileHover={{ y: -6 }}
            >
              {/* Gradient bar on top */}
              <div
                className={`absolute top-0 left-6 right-6 h-0.5 rounded-b bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 flex items-center justify-center mb-4 ring-1 ring-white/5 group-hover:ring-white/20 transition-all duration-500`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-outfit text-lg font-bold text-foreground mb-2 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary/0 group-hover:text-primary/70 transition-all duration-500">
                <span>Saiba mais</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Services;
