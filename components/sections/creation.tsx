"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { CircleUser, Code, Cpu, Shield, Workflow, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";
import VoxelRobot from "../three/VoxelRobot";
import { Button } from "../ui/button";
import { SectionHeading } from "../ui/section-heading";

const BadgeJavaScript: React.FC = () => (
  <span className="px-3 py-2 text-sm font-medium rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 hover:bg-yellow-400/20 transition-all duration-300">
    JavaScript
  </span>
);

const BadgeTypeScript: React.FC = () => (
  <span className="px-3 py-2 text-sm font-medium rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20 hover:bg-blue-400/20 transition-all duration-300">
    TypeScript
  </span>
);

const BadgeReact: React.FC = () => (
  <span className="px-3 py-2 text-sm font-medium rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-300">
    React
  </span>
);

const BadgeNode: React.FC = () => (
  <span className="px-3 py-2 text-sm font-medium rounded-full bg-green-400/10 text-green-400 border border-green-400/20 hover:bg-green-400/20 transition-all duration-300">
    Node.js
  </span>
);

const BadgeNext: React.FC = () => (
  <span className="px-3 py-2 text-sm font-medium rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
    Next.js
  </span>
);

const BadgeTailwind: React.FC = () => (
  <span className="px-3 py-2 text-sm font-medium rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all duration-300">
    Tailwind
  </span>
);

export const Creation: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projetos");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const profileData = {
    title: "Társis Barreto",
    description: (
      <ul className="space-y-4 text-base text-white/90">
        <li className="flex items-center gap-4">
          <Zap className="h-6 w-6 text-blue-400" />
          <span className="font-medium">Full-Stack Developer</span>
        </li>

        <li className="flex items-center gap-4">
          <Code className="h-6 w-6 text-green-400" />
          <span className="font-medium">2+ anos de experiência</span>
        </li>

        <li className="flex items-center gap-4">
          <Shield className="h-6 w-6 text-purple-400" />
          <span className="font-medium">Especialista em React & Node.js</span>
        </li>

        <li className="flex items-center gap-4">
          <Workflow className="h-6 w-6 text-cyan-400" />
          <span className="font-medium">Arquiteturas Escaláveis</span>
        </li>
      </ul>
    ),
    badges: (
      <div className="flex flex-wrap gap-3">
        <BadgeJavaScript />
        <BadgeTypeScript />
        <BadgeReact />
        <BadgeNode />
        <BadgeNext />
        <BadgeTailwind />
      </div>
    ),
  };

  return (
    <motion.section
      id="criacao"
      className="w-full py-24 px-4 relative overflow-hidden bg-background/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      <SectionHeading title="Sobre Mim" subtitle="Uma Breve Apresentação" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {}
        <motion.div
          className="h-[500px] lg:h-[600px] w-full relative rounded-3xl border border-primary/20 bg-black/20 backdrop-blur-sm overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,229,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,229,255,0.08) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
              maskImage:
                "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
            }}
          />

          <Canvas
            camera={{ position: [0, 0.6, 5], fov: 42 }}
            style={{ height: "100%", width: "100%" }}
          >
            {}
            <ambientLight intensity={0.6} color={"#ccffff"} />
            <directionalLight
              position={[5, 8, 5]}
              intensity={1.2}
              color={"#ffffff"}
            />
            <pointLight
              position={[2, 3, 2]}
              intensity={1.5}
              color={"#00E5FF"}
            />
            <pointLight
              position={[-3, -2, -3]}
              intensity={0.8}
              color={"#0055ff"}
            />
            <spotLight
              position={[0, 6, 2]}
              angle={0.35}
              penumbra={0.4}
              intensity={1.0}
              color={"#00E5FF"}
            />

            {}
            <group position={[0, -0.2, 0]}>
              <VoxelRobot />
            </group>

            {}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2.2}
              minPolarAngle={Math.PI / 3.6}
            />
          </Canvas>
        </motion.div>

        {}
        <motion.div
          className="flex flex-col h-full min-h-[500px] lg:min-h-[600px] rounded-3xl border border-white/10 bg-black/20 backdrop-blur-sm shadow-2xl overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="p-0 flex-1 flex flex-col">
            {}
            <div className="relative w-full h-72 md:h-96 lg:h-[550px] rounded-t-3xl overflow-hidden flex-shrink-0">
              {}
              <Image
                src="/images/foto-perfil.jpg"
                alt="Foto de perfil de Társis Barreto"
                fill
                className="object-cover"
                style={{ objectPosition: "center 23%" }}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={95}
              />
            </div>

            {}
            <div className="flex-1 p-6 bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 flex flex-col">
              {}
              <div className="text-center mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <CircleUser className="h-7 w-7 text-blue-400" />
                  <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    {profileData.title}
                  </h3>
                </div>
                <div className="w-20 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-3" />
                <p className="text-white/80 text-xl font-semibold">
                  Software Developer
                </p>
              </div>

              {/* Descrição */}
              <div className="mb-6">{profileData.description}</div>

              {}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white/90 mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-400" />
                  Tecnologias Principais
                </h4>
                {profileData.badges}
              </div>

              {}
              <div className="mt-auto pt-6 border-t border-white/10">
                <Button
                  onClick={scrollToProjects}
                  className="w-full gap-3 text-base lg:text-lg py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transform"
                >
                  <Cpu className="w-5 h-5" />
                  Explorar Projetos
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Creation;
