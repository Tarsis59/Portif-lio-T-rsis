/* eslint-disable react-hooks/purity */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Cloud,
  Database,
  Globe,
  Palette,
  Rocket,
  Server,
  Smartphone,
} from "lucide-react";
import React, { useRef, useState } from "react";

import {
  SiAmazon,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { SectionHeading } from "../ui/section-heading";

// =============================================================================
// COMPONENTES DE BADGES ULTRA ANIMADOS E PERSONALIZADOS
// =============================================================================

interface AnimatedBadgeProps {
  children: React.ReactNode;
  color: string;
  delay?: number;
  icon?: React.ReactNode;
  pulseColor?: string;
  className?: string;
}

const AnimatedBadge = ({
  children,
  color,
  delay = 0,
  icon,
  pulseColor,
  className,
}: AnimatedBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "relative inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden",
        className
      )}
      style={
        {
          background: `linear-gradient(135deg, ${color}15, ${color}08)`,
        } as React.CSSProperties
      }
    >
      {/* Efeito de brilho no hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Efeito de pulso sutil */}
      {pulseColor && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{ backgroundColor: pulseColor } as React.CSSProperties}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Ícone */}
      {icon && (
        <motion.div
          animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {icon}
        </motion.div>
      )}

      {/* Texto */}
      <motion.span
        className="relative z-10 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent"
        animate={{ x: isHovered ? [0, 2, 0] : 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>

      {/* Partículas no hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 40],
                  y: [0, (Math.random() - 0.5) * 40],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                exit={{ scale: 0, opacity: 0 }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const BadgeJavaScript = () => (
  <AnimatedBadge
    color="#F7DF1E"
    delay={0.1}
    icon={<SiJavascript className="h-4 w-4 text-[#F7DF1E]" />}
    pulseColor="#F7DF1E"
  >
    JavaScript
  </AnimatedBadge>
);

const BadgeTypeScript = () => (
  <AnimatedBadge
    color="#3178C6"
    delay={0.15}
    icon={<SiTypescript className="h-4 w-4 text-[#3178C6]" />}
    pulseColor="#3178C6"
  >
    TypeScript
  </AnimatedBadge>
);

const BadgePython = () => (
  <AnimatedBadge
    color="#3776AB"
    delay={0.2}
    icon={<SiPython className="h-4 w-4 text-[#3776AB]" />}
    pulseColor="#3776AB"
  >
    Python
  </AnimatedBadge>
);

const BadgeHTML5 = () => (
  <AnimatedBadge
    color="#E34F26"
    delay={0.25}
    icon={<SiHtml5 className="h-4 w-4 text-[#E34F26]" />}
    pulseColor="#E34F26"
  >
    HTML5
  </AnimatedBadge>
);

const BadgeCSS3 = () => (
  <AnimatedBadge
    color="#1572B6"
    delay={0.3}
    icon={<SiCss3 className="h-4 w-4 text-[#1572B6]" />}
    pulseColor="#1572B6"
  >
    CSS3
  </AnimatedBadge>
);

const BadgeReact = () => (
  <AnimatedBadge
    color="#61DAFB"
    delay={0.35}
    icon={<SiReact className="h-4 w-4 text-[#61DAFB]" />}
    pulseColor="#61DAFB"
  >
    React.js
  </AnimatedBadge>
);

const BadgeReactNative = () => (
  <AnimatedBadge
    color="#61DAFB"
    delay={0.4}
    icon={<Smartphone className="h-4 w-4 text-[#61DAFB]" />}
    pulseColor="#61DAFB"
  >
    React Native
  </AnimatedBadge>
);

const BadgeNode = () => (
  <AnimatedBadge
    color="#339933"
    delay={0.45}
    icon={<SiNodedotjs className="h-4 w-4 text-[#339933]" />}
    pulseColor="#339933"
  >
    Node.js
  </AnimatedBadge>
);

const BadgeExpress = () => (
  <AnimatedBadge
    color="#000000"
    delay={0.5}
    icon={<SiExpress className="h-4 w-4 text-white" />}
    pulseColor="#000000"
  >
    Express.js
  </AnimatedBadge>
);

const BadgeNext = () => (
  <AnimatedBadge
    color="#000000"
    delay={0.55}
    icon={<SiNextdotjs className="h-4 w-4 text-white" />}
    pulseColor="#000000"
  >
    Next.js
  </AnimatedBadge>
);

const BadgeFirebase = () => (
  <AnimatedBadge
    color="#FFCA28"
    delay={0.6}
    icon={<SiFirebase className="h-4 w-4 text-[#FFCA28]" />}
    pulseColor="#FFCA28"
  >
    Firebase
  </AnimatedBadge>
);

const BadgeMongoDB = () => (
  <AnimatedBadge
    color="#47A248"
    delay={0.65}
    icon={<SiMongodb className="h-4 w-4 text-[#47A248]" />}
    pulseColor="#47A248"
  >
    MongoDB
  </AnimatedBadge>
);

const BadgeGit = () => (
  <AnimatedBadge
    color="#F05032"
    delay={0.7}
    icon={<SiGit className="h-4 w-4 text-[#F05032]" />}
    pulseColor="#F05032"
  >
    Git & GitHub
  </AnimatedBadge>
);

const BadgeVite = () => (
  <AnimatedBadge
    color="#646CFF"
    delay={0.75}
    icon={<SiVite className="h-4 w-4 text-[#646CFF]" />}
    pulseColor="#646CFF"
  >
    Vite
  </AnimatedBadge>
);

const BadgeFramer = () => (
  <AnimatedBadge
    color="#0055FF"
    delay={0.8}
    icon={<SiFramer className="h-4 w-4 text-[#0055FF]" />}
    pulseColor="#0055FF"
  >
    Framer Motion
  </AnimatedBadge>
);

const BadgeTailwind = () => (
  <AnimatedBadge
    color="#06B6D4"
    delay={0.85}
    icon={<SiTailwindcss className="h-4 w-4 text-[#06B6D4]" />}
    pulseColor="#06B6D4"
  >
    Tailwind CSS
  </AnimatedBadge>
);

const BadgeREST = () => (
  <AnimatedBadge
    color="#FF6B35"
    delay={0.9}
    icon={<Globe className="h-4 w-4 text-[#FF6B35]" />}
    pulseColor="#FF6B35"
  >
    APIs RESTful
  </AnimatedBadge>
);

// =============================================================================
// COMPONENTE DE SKELETON MELHORADO
// =============================================================================

interface SkeletonProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Skeleton = ({
  children,
  className,
  hoverEffect = false,
}: SkeletonProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !hoverEffect) return;

    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-1 w-full h-full min-h-[6rem] rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 group",
        hoverEffect && "cursor-pointer",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Efeito de brilho no mouse */}
      {hoverEffect && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
      )}

      {/* Gradiente animado de borda */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {children}
    </div>
  );
};

// =============================================================================
// COMPONENTES DE HEADER ESPECIALIZADOS
// =============================================================================

const TechIconsGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 p-4">
      {children}
    </div>

    {/* Efeito de partículas de fundo */}
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full"
          style={{} as React.CSSProperties}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  </div>
);

// =============================================================================
// DADOS PARA O BENTO GRID
// =============================================================================

const items = [
  {
    title: "Arquitetura Full Stack",
    description:
      "Domínio completo do desenvolvimento web moderno, desde interfaces responsivas até APIs escaláveis e deploy em produção.",
    header: (
      <Skeleton hoverEffect>
        <TechIconsGrid>
          <SiReact className="h-16 w-16 text-[#61DAFB] animate-pulse" />
          <SiNodedotjs
            className="h-16 w-16 text-[#339933] animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <SiNextdotjs
            className="h-16 w-16 text-white animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </TechIconsGrid>
      </Skeleton>
    ),
    icon: <Rocket className="h-4 w-4 text-foreground/80" />,
    className: "md:col-span-2 md:row-span-1",
    badges: (
      <div className="flex flex-wrap gap-2 mt-4">
        <BadgeJavaScript />
        <BadgeTypeScript />
        <BadgeReact />
        <BadgeNode />
        <BadgeNext />
      </div>
    ),
  },
  {
    title: "Frontend Excellence",
    description:
      "Interfaces modernas e responsivas com React, TypeScript e as melhores práticas de UX/UI. Performance otimizada e acessibilidade.",
    header: (
      <Skeleton hoverEffect>
        <TechIconsGrid>
          <SiReact className="h-12 w-12 text-[#61DAFB]" />
          <SiTypescript className="h-12 w-12 text-[#3178C6]" />
          <SiVite className="h-12 w-12 text-[#646CFF]" />
          <SiTailwindcss className="h-12 w-12 text-[#06B6D4]" />
          <SiFramer className="h-12 w-12 text-[#0055FF]" />
        </TechIconsGrid>
      </Skeleton>
    ),
    icon: <Palette className="h-4 w-4 text-foreground/80" />,
    className: "md:col-span-1",
    badges: (
      <div className="flex flex-wrap gap-2 mt-4">
        <BadgeHTML5 />
        <BadgeCSS3 />
        <BadgeReact />
        <BadgeVite />
        <BadgeTailwind />
        <BadgeFramer />
      </div>
    ),
  },
  {
    title: "Backend Powerhouse",
    description:
      "APIs RESTful e GraphQL escaláveis com Node.js, .NET e arquiteturas modernas. Foco em performance, segurança e manutenibilidade.",
    header: (
      <Skeleton hoverEffect>
        <TechIconsGrid>
          <SiNodedotjs className="h-12 w-12 text-[#339933]" />
          <SiExpress className="h-12 w-12 text-white" />
          <SiDotnet className="h-12 w-12 text-[#512BD4]" />
        </TechIconsGrid>
      </Skeleton>
    ),
    icon: <Server className="h-4 w-4 text-foreground/80" />,
    className: "md:col-span-1",
    badges: (
      <div className="flex flex-wrap gap-2 mt-4">
        <BadgeNode />
        <BadgeExpress />
        <BadgeREST />
      </div>
    ),
  },
  {
    title: "Mobile Development",
    description:
      "Aplicações mobile nativas com React Native. Experiências fluidas e performáticas para iOS e Android.",
    header: (
      <Skeleton hoverEffect>
        <TechIconsGrid>
          <div className="relative w-full h-full flex items-center justify-center">
            <Smartphone className="h-20 w-20 text-primary" />
            <motion.div
              className="absolute"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <SiReact className="h-10 w-10 text-[#61DAFB]" />
            </motion.div>
          </div>
        </TechIconsGrid>
      </Skeleton>
    ),
    icon: <Smartphone className="h-4 w-4 text-foreground/80" />,
    className: "md:col-span-1",
    badges: (
      <div className="flex flex-wrap gap-2 mt-4">
        <BadgeReactNative />
        <BadgeJavaScript />
        <BadgeTypeScript />
      </div>
    ),
  },
  {
    title: "Cloud & DevOps",
    description:
      "Infraestrutura escalável na nuvem, CI/CD automatizado, containers e monitoramento. Domínio completo do ciclo de vida.",
    header: (
      <Skeleton hoverEffect>
        <TechIconsGrid>
          <SiAmazon className="h-12 w-12 text-orange-500 animate-pulse" />
          <SiDocker
            className="h-12 w-12 text-blue-500 animate-pulse"
            style={{ animationDelay: "0.3s" }}
          />
          <SiKubernetes
            className="h-12 w-12 text-blue-400 animate-pulse"
            style={{ animationDelay: "0.6s" }}
          />
          <SiGit
            className="h-12 w-12 text-red-500 animate-pulse"
            style={{ animationDelay: "0.9s" }}
          />
        </TechIconsGrid>
      </Skeleton>
    ),
    icon: <Cloud className="h-4 w-4 text-foreground/80" />,
    className: "md:col-span-1",
    badges: (
      <div className="flex flex-wrap gap-2 mt-4">
        <BadgeGit />
      </div>
    ),
  },
  {
    title: "Databases & APIs",
    description:
      "Modelagem de dados relacional e NoSQL, APIs RESTful robustas, cache e otimização de performance em banco de dados.",
    header: (
      <Skeleton hoverEffect>
        <TechIconsGrid>
          <SiMongodb className="h-12 w-12 text-[#47A248]" />
          <SiPostgresql className="h-12 w-12 text-blue-400" />
          <SiFirebase className="h-12 w-12 text-[#FFCA28]" />
          <Database className="h-12 w-12 text-secondary" />
        </TechIconsGrid>
      </Skeleton>
    ),
    icon: <Database className="h-4 w-4 text-foreground/80" />,
    className: "md:col-span-2",
    badges: (
      <div className="flex flex-wrap gap-2 mt-4">
        <BadgeMongoDB />
        <BadgeFirebase />
        <BadgeREST />
      </div>
    ),
  },
];

// =============================================================================
// COMPONENTE PRINCIPAL ABOUT
// =============================================================================

export const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <motion.section
      id="sobre"
      className="w-full max-w-7xl mx-auto py-32 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      <SectionHeading
        title="Arsenal Tecnológico"
        subtitle="Domínio completo do ecossistema de desenvolvimento moderno"
      />

      {/* Tech Categories Navigation */}
      <motion.div
        className=""
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {[].map((category) => (
          <motion.button
            key={category}
            onClick={() =>
              setActiveCategory(activeCategory === category ? null : category)
            }
            className={cn(
              "px-6 py-3 rounded-xl font-semibold transition-all duration-300 border backdrop-blur-sm",
              activeCategory === category
                ? "bg-primary/20 text-primary border-primary/30 shadow-lg shadow-primary/10"
                : "bg-white/5 text-foreground/80 border-white/10 hover:bg-white/10 hover:border-white/20"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <BentoGrid className="md:auto-rows-[24rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={item.className}
          />
        ))}
      </BentoGrid>

      {/* Floating Tech Badges */}
      <motion.div
        className="mt-16 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <BadgeJavaScript />
        <BadgeTypeScript />
        <BadgePython />
        <BadgeReact />
        <BadgeNode />
        <BadgeNext />
        <BadgeMongoDB />
        <BadgeGit />
        <BadgeTailwind />
      </motion.div>
    </motion.section>
  );
};

export default About;
