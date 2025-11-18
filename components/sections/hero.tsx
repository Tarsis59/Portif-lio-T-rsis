/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import React, { Suspense, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Spotlight } from "../ui/spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";

/* Texto */
const nome = "Társis Barreto";
const cargo = "Desenvolvedor Full-Stack";
const bio =
  "Especialista em React, .NET e Node.js, focado em criar interfaces modernas, responsivas e de alta performance.";

const FALLBACK_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'>
  <defs>
    <!-- Gradiente de fundo premium -->
    <linearGradient id='bg' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#000b14' stop-opacity='1'/>
      <stop offset='50%' stop-color='#001829' stop-opacity='1'/>
      <stop offset='100%' stop-color='#000510' stop-opacity='1'/>
    </linearGradient>
    <!-- Highlight azul -->
    <radialGradient id='highlight1' cx='30%' cy='30%' r='70%'>
      <stop offset='0%' stop-color='#61DAFB' stop-opacity='0.25'/>
      <stop offset='70%' stop-color='#61DAFB' stop-opacity='0.15'/>
      <stop offset='100%' stop-color='#61DAFB' stop-opacity='0'/>
    </radialGradient>
    <!-- Highlight roxo -->
    <radialGradient id='highlight2' cx='70%' cy='70%' r='60%'>
      <stop offset='0%' stop-color='#7a4bff' stop-opacity='0.20'/>
      <stop offset='70%' stop-color='#7a4bff' stop-opacity='0.12'/>
      <stop offset='100%' stop-color='#7a4bff' stop-opacity='0'/>
    </radialGradient>
    <!-- Efeito de blur sofisticado -->
    <filter id='blur' x='-50%' y='-50%' width='200%' height='200%'>
      <feGaussianBlur in='SourceGraphic' stdDeviation='50'/>
    </filter>
    <!-- Gradiente para o ícone do usuário -->
    <linearGradient id='iconGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#00e5ff'/>
      <stop offset='100%' stop-color='#7a4bff'/>
    </linearGradient>
  </defs>
  <!-- Fundo principal -->
  <rect width='100%' height='100%' fill='url(#bg)'/>
  <!-- Elementos de background animados -->
  <g filter='url(#blur)' opacity='0.8'>
    <circle cx='180' cy='180' r='140' fill='url(#highlight1)'/>
    <circle cx='620' cy='320' r='160' fill='url(#highlight2)'/>
    <ellipse cx='400' cy='580' rx='120' ry='90' fill='rgba(0,229,255,0.1)'/>
  </g>
  <!-- Partículas sutis -->
  <g fill='rgba(255,255,255,0.05)'>
    <circle cx='120' cy='120' r='8'/>
    <circle cx='680' cy='150' r='6'/>
    <circle cx='720' cy='600' r='10'/>
    <circle cx='80' cy='650' r='7'/>
    <circle cx='650' cy='700' r='5'/>
  </g>
  <!-- Ícone do usuário central -->
  <g transform='translate(400, 400)'>
    <circle cx='0' cy='0' r='80' fill='url(#iconGradient)' opacity='0.1'/>
    <circle cx='0' cy='0' r='60' fill='url(#iconGradient)' opacity='0.15'/>
    <!-- Ícone de usuário estilizado -->
    <g fill='url(#iconGradient)' opacity='0.8'>
      <circle cx='0' cy='-15' r='25'/>
      <path d='M -40 20 Q 0 60 40 20 L -40 20 Z'/>
    </g>
  </g>
  <!-- Linhas decorativas -->
  <g stroke='rgba(0,229,255,0.1)' stroke-width='2' fill='none'>
    <path d='M 50 50 L 200 100'/>
    <path d='M 750 100 L 600 150'/>
    <path d='M 100 700 L 250 650'/>
  </g>
</svg>`)}`;

function SceneContent() {
  const refA = useRef<any>(null);
  const refB = useRef<any>(null);
  const refC = useRef<any>(null);

  useFrame((state, delta) => {
    if (refA.current) {
      refA.current.rotation.y += delta * 0.4;
      refA.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (refB.current) {
      refB.current.rotation.x += delta * 0.25;
      refB.current.rotation.y -= delta * 0.18;
      refB.current.rotation.z += delta * 0.1;
    }
    if (refC.current) {
      refC.current.rotation.y += delta * 0.3;
      refC.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group>
      {/* Torus Knot principal */}
      <mesh ref={refA} position={[0, 0.05, 0]}>
        <torusKnotGeometry args={[0.7, 0.2, 140, 18]} />
        <meshPhysicalMaterial
          color={"#09bfed"}
          metalness={0.9}
          roughness={0.12}
          emissive={"#09bfed"}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          transmission={0.2}
        />
      </mesh>

      {/* Icosaedro secundário */}
      <mesh ref={refB} position={[0, -0.05, 0]}>
        <icosahedronGeometry args={[0.45, 1]} />
        <meshStandardMaterial
          color={"#7a4bff"}
          metalness={0.7}
          roughness={0.25}
          emissive={"#7a4bff"}
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Esfera de fundo sutil */}
      <mesh ref={refC} position={[1.2, 0.8, -1]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#7a4bff" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

const Badge = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{
      scale: 1.12,
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" },
    }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-background/80 to-background/40 px-3 py-1.5 text-sm font-medium backdrop-blur-sm border border-white/10 shadow-lg"
  >
    {children}
  </motion.div>
);

const BadgeReact = () => (
  <Badge delay={0.1}>
    <div className="relative">
      <svg className="h-4 w-4" viewBox="0 0 256 256" fill="none" aria-hidden>
        <circle cx="128" cy="128" r="36" fill="#61DAFB" />
        <g
          stroke="#61DAFB"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse
            cx="128"
            cy="128"
            rx="68"
            ry="140"
            transform="rotate(60 128 128)"
          />
          <ellipse
            cx="128"
            cy="128"
            rx="68"
            ry="140"
            transform="rotate(-60 128 128)"
          />
        </g>
      </svg>
      <div className="absolute inset-0 animate-ping rounded-full bg-[#61DAFB] opacity-20" />
    </div>
    <span className="bg-gradient-to-r from-[#61DAFB] to-[#21a0c4] bg-clip-text text-transparent font-semibold">
      React
    </span>
  </Badge>
);

const BadgeDotnet = () => (
  <Badge delay={0.2}>
    <div className="relative">
      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
        <rect width="24" height="24" rx="4" fill="#512BD4" />
        <path
          d="M6 8h12v1H6V8zm0 3h12v1H6v-1zm0 3h8v1H6v-1z"
          fill="#fff"
          opacity="0.95"
        />
      </svg>
      <div className="absolute inset-0 animate-pulse rounded-full bg-[#512BD4] opacity-15" />
    </div>
    <span className="bg-gradient-to-r from-[#512BD4] to-[#7a4bff] bg-clip-text text-transparent font-semibold">
      .NET
    </span>
  </Badge>
);

const BadgeThree = () => (
  <Badge delay={0.3}>
    <div className="relative">
      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="9" fill="#fff" opacity="0.06" />
        <path
          d="M4 12c3-6 9-6 12 0-3 6-9 6-12 0z"
          fill="#F5F5F5"
          opacity="0.12"
        />
      </svg>
      <div className="absolute inset-0 animate-pulse rounded-full bg-white opacity-10" />
    </div>
    <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent font-semibold">
      Three.js
    </span>
  </Badge>
);

export const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>(FALLBACK_SVG);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [usingFallback, setUsingFallback] = useState(true);

  React.useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch("/images/foto-perfil.png");
        if (response.ok) {
          setImgSrc("/images/foto-perfil.png");
          setUsingFallback(false);
        } else {
          setUsingFallback(true);
          setImageLoaded(true);
        }
      } catch (error) {
        setUsingFallback(true);
        setImageLoaded(true);
      }
    };
    checkImage();
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.log("Imagem não encontrada, usando fallback SVG premium");
    setImgSrc(FALLBACK_SVG);
    setUsingFallback(true);
    setImageLoaded(true);
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-slate-950"
    >
      {/* Spotlights melhorados */}
      <Spotlight
        className="pointer-events-none -top-40 left-0 md:-top-20 md:left-60"
        fill="rgba(0,229,255,0.15)"
      />
      <Spotlight
        className="pointer-events-none top-10 left-full md:top-20 md:left-[80vw]"
        fill="rgba(112,0,255,0.12)"
      />
      <Spotlight
        className="pointer-events-none -bottom-20 right-10 md:-bottom-10 md:right-20"
        fill="rgba(0,100,255,0.08)"
      />

      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-secondary/8 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-40 w-40 rounded-full bg-blue-500/5 blur-2xl" />
      </div>

      <div className="relative z-30 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4 text-sm font-medium tracking-wide text-foreground/80 uppercase"
            >
              Olá, eu sou
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-outfit mb-4 text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {nome}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6 text-xl font-semibold text-foreground/90 md:text-2xl lg:text-3xl"
            >
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                {cargo}
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8 max-w-xl"
            >
              <TextGenerateEffect
                words={bio}
                className="text-lg leading-relaxed text-foreground/90 md:text-xl"
              />
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <a href="#projetos" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-3 text-base font-semibold shadow-2xl transition-all duration-300 hover:shadow-3xl sm:w-auto"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 20px 60px rgba(0,229,255,0.25)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(0,229,255,0.15)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span>Ver Meus Projetos</span>
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </Button>
              </a>

              <a
                href="/CV-Tarsis-Barreto.pdf"
                download
                className="group relative inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-primary/30 bg-primary/5 px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:shadow-lg sm:w-auto"
                aria-label="Baixar currículo PDF"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Baixar meu CV</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex items-center gap-6"
            >
              <a
                href="mailto:tarsissurf59mito@gmail.com"
                className="group inline-flex items-center gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm transition-all duration-300 hover:bg-foreground/10 hover:shadow-md"
                aria-label="Enviar e-mail"
              >
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Contato</span>
              </a>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Tarsis59"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-full p-2 text-foreground/80 transition-all duration-300 hover:text-primary hover:shadow-lg"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a
                  href="https://www.linkedin.com/in/t%C3%A1rsis-barreto-59u59/"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-full p-2 text-foreground/80 transition-all duration-300 hover:text-primary hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 flex items-center justify-center lg:order-2"
          >
            <div className="relative w-full max-w-md transform-gpu">
              {/* Main Card Container */}
              <div
                className="relative overflow-hidden rounded-3xl p-2 shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,229,255,0.1) 0%, rgba(112,0,255,0.08) 50%, rgba(255,255,255,0.02) 100%)",
                }}
              >
                <div className="relative rounded-2xl bg-gradient-to-br from-background/90 to-background/70 p-6 backdrop-blur-xl border border-white/10">
                  {/* 3D Canvas Background */}
                  <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
                    <Canvas
                      camera={{ position: [0, 0, 3.5], fov: 50 }}
                      style={{ width: "100%", height: "100%" }}
                      gl={{
                        antialias: true,
                        alpha: true,
                        powerPreference: "high-performance",
                      }}
                    >
                      <color attach="background" args={["#000000"]} />
                      <ambientLight intensity={0.6} />
                      <directionalLight intensity={0.8} position={[2, 4, 5]} />
                      <pointLight
                        intensity={0.5}
                        position={[-3, -2, 2]}
                        color="#61DAFB"
                      />
                      <pointLight
                        intensity={0.3}
                        position={[3, 2, -1]}
                        color="##61DAFB"
                      />

                      <Suspense fallback={null}>
                        {}
                        <group position={[0, -0.08, 0]}>
                          <SceneContent />
                        </group>
                        <OrbitControls
                          enableZoom={false}
                          enablePan={false}
                          autoRotate={true}
                          autoRotateSpeed={2}
                          maxPolarAngle={Math.PI / 2}
                          minPolarAngle={Math.PI / 3}
                        />
                      </Suspense>
                    </Canvas>
                  </div>

                  {}
                  <div className="relative z-10 mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl from-black/30 to-black/10 shadow-2xl">
                    {usingFallback ? (
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
                        style={{ backgroundImage: `url(${FALLBACK_SVG})` }}
                      />
                    ) : (
                      <Image
                        src={imgSrc}
                        alt="Foto de perfil de Társis Barreto - Desenvolvedor Full-Stack"
                        fill
                        priority
                        className={`object-cover transition-all duration-700 ${
                          imageLoaded
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                        }`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        sizes="(max-width: 768px) 80vw, 40vw"
                      />
                    )}

                    {/* Loading Skeleton - apenas se não estiver usando fallback */}
                    {!imageLoaded && !usingFallback && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-800 to-red-900">
                        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                      </div>
                    )}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-secondary/5 pointer-events-none" />
                  </div>

                  {/* Tech Badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="relative z-20 mt-6 flex flex-wrap items-center justify-center gap-3"
                  >
                    <BadgeReact />
                    <BadgeDotnet />
                    <BadgeThree />
                  </motion.div>

                  {/* Badge informativo se estiver usando fallback */}
                  {usingFallback && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-2 -right-2 z-30"
                    >
                      {/* Badge opcional para indicar que está usando fallback */}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Floating Accent Elements */}
              <div className="pointer-events-none absolute -right-6 -top-6 hidden h-32 w-32 lg:block">
                <div className="rounded-full bg-gradient-to-tr from-primary/20 to-secondary/15 blur-3xl h-full w-full" />
              </div>
              <div className="pointer-events-none absolute -bottom-4 -left-4 hidden h-24 w-24 lg:block">
                <div className="rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-2xl h-full w-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-foreground/60"
        >
          <div className="h-6 w-px bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
