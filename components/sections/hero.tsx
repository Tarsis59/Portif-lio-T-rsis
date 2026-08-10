"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Spotlight } from "../ui/spotlight";

const nome = "Társis Barreto";
const cargo = "Full-Stack Developer & AI Engineer";
const bio =
  "Sou um Desenvolvedor Full-Stack especializado na criação de aplicações modernas ponta a ponta, unindo a robustez do ecossistema .NET e Node.js à dinamicidade do React, Next.js e Angular. Nos últimos anos, tenho me destacado na Engenharia de IA, integrando LLMs (OpenAI API) e frameworks como LangChain em produtos SaaS e CRMs, orquestrando agentes inteligentes e aplicando Prompt Engineering para otimizar processos de negócios.";

const FALLBACK_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'>
  <defs>
    <linearGradient id='bg' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#000b14'/><stop offset='50%' stop-color='#001829'/><stop offset='100%' stop-color='#000510'/>
    </linearGradient>
    <radialGradient id='h1' cx='30%' cy='30%' r='70%'>
      <stop offset='0%' stop-color='#09bfed' stop-opacity='0.25'/><stop offset='70%' stop-color='#09bfed' stop-opacity='0.1'/><stop offset='100%' stop-color='#09bfed' stop-opacity='0'/>
    </radialGradient>
    <radialGradient id='h2' cx='70%' cy='70%' r='60%'>
      <stop offset='0%' stop-color='#7000ff' stop-opacity='0.2'/><stop offset='70%' stop-color='#7000ff' stop-opacity='0.1'/><stop offset='100%' stop-color='#7000ff' stop-opacity='0'/>
    </radialGradient>
    <filter id='blur'><feGaussianBlur in='SourceGraphic' stdDeviation='50'/></filter>
    <linearGradient id='iconGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' stop-color='#09bfed'/><stop offset='100%' stop-color='#7000ff'/>
    </linearGradient>
  </defs>
  <rect width='100%' height='100%' fill='url(#bg)'/>
  <g filter='url(#blur)' opacity='0.8'>
    <circle cx='180' cy='180' r='140' fill='url(#h1)'/><circle cx='620' cy='320' r='160' fill='url(#h2)'/><ellipse cx='400' cy='580' rx='120' ry='90' fill='rgba(9,191,237,0.08)'/>
  </g>
  <g transform='translate(400, 400)'>
    <circle cx='0' cy='0' r='80' fill='url(#iconGrad)' opacity='0.08'/><circle cx='0' cy='0' r='60' fill='url(#iconGrad)' opacity='0.12'/>
    <g fill='url(#iconGrad)' opacity='0.7'><circle cx='0' cy='-15' r='25'/><path d='M -40 20 Q 0 60 40 20 L -40 20 Z'/></g>
  </g>
</svg>`)}`;

/* ── 3D Scene ── */
function SceneContent() {
  const refA = useRef<any>(null);
  const refB = useRef<any>(null);
  const refC = useRef<any>(null);
  const refParticles = useRef<any>(null);

  useFrame((state, delta) => {
    if (refA.current) {
      refA.current.rotation.y += delta * 0.45;
      refA.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.12;
    }
    if (refB.current) {
      refB.current.rotation.x += delta * 0.3;
      refB.current.rotation.y -= delta * 0.2;
      refB.current.rotation.z += delta * 0.12;
    }
    if (refC.current) {
      refC.current.rotation.y += delta * 0.35;
      refC.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.06;
    }
    if (refParticles.current) {
      refParticles.current.rotation.y += delta * 0.15;
      refParticles.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <group>
      {/* Torus Knot */}
      <mesh ref={refA} position={[0, 0.05, 0]}>
        <torusKnotGeometry args={[0.7, 0.2, 140, 18]} />
        <meshPhysicalMaterial
          color={"#09bfed"}
          metalness={0.92}
          roughness={0.1}
          emissive={"#09bfed"}
          emissiveIntensity={0.15}
          clearcoat={0.85}
          clearcoatRoughness={0.08}
          transmission={0.22}
        />
      </mesh>

      {/* Icosahedron */}
      <mesh ref={refB} position={[0, -0.05, 0]}>
        <icosahedronGeometry args={[0.45, 1]} />
        <meshStandardMaterial
          color={"#7000ff"}
          metalness={0.72}
          roughness={0.22}
          emissive={"#7000ff"}
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* Floating particles ring */}
      <group ref={refParticles}>
        {[...Array(40)].map((_, i) => {
          const angle = (i / 40) * Math.PI * 2;
          const r = 1.05 + Math.sin(i * 0.5) * 0.15;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * r, Math.sin(i * 0.3) * 0.5, Math.sin(angle) * r]}
            >
              <sphereGeometry args={[0.025, 6, 6]} />
              <meshBasicMaterial color={i % 3 === 0 ? "#09bfed" : "#7000ff"} transparent opacity={0.5} />
            </mesh>
          );
        })}
      </group>

      {/* Background sphere */}
      <mesh ref={refC} position={[1.2, 0.8, -1]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#7000ff" transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

/* ── Badge ── */
const Badge = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ scale: 1.12, y: -2, transition: { duration: 0.2 } }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] backdrop-blur-md px-3 py-1.5 text-sm font-medium border border-white/10 shadow-lg hover:border-white/20 hover:shadow-primary/10 transition-colors duration-300"
  >
    {children}
  </motion.div>
);

const BadgeReact = () => (
  <Badge delay={0.1}>
    <svg className="h-4 w-4" viewBox="0 0 256 256" fill="none">
      <circle cx="128" cy="128" r="36" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="128" cy="128" rx="68" ry="140" transform="rotate(60 128 128)" />
        <ellipse cx="128" cy="128" rx="68" ry="140" transform="rotate(-60 128 128)" />
      </g>
    </svg>
    <span className="bg-gradient-to-r from-[#61DAFB] to-[#21a0c4] bg-clip-text text-transparent font-semibold">React</span>
  </Badge>
);

const BadgeDotnet = () => (
  <Badge delay={0.2}>
    <svg className="h-4 w-4" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="4" fill="#512BD4" />
      <path d="M6 8h12v1H6V8zm0 3h12v1H6v-1zm0 3h8v1H6v-1z" fill="#fff" opacity="0.95" />
    </svg>
    <span className="bg-gradient-to-r from-[#512BD4] to-[#7a4bff] bg-clip-text text-transparent font-semibold">.NET</span>
  </Badge>
);

const BadgePython = () => (
  <Badge delay={0.3}>
    <svg className="h-4 w-4" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#1e293b" />
      <path d="M7 12c0-2 1.5-4 3-4h4v2h-4c-1 0-2 .5-2 2s1 2 2 2h4c1.5 0 3-2 3-4s-1.5-4-3-4h-4C8.5 6 7 8 7 12z" fill="#3776AB" opacity="0.9" />
      <path d="M17 12c0 2-1.5 4-3 4h-4v-2h4c1 0 2-.5 2-2s-1-2-2-2h-4c-1.5 0-3 2-3 4s1.5 4 3 4h4c1.5 0 3-2 3-4z" fill="#FFD43B" opacity="0.9" />
    </svg>
    <span className="bg-gradient-to-r from-[#3776AB] to-[#FFD43B] bg-clip-text text-transparent font-semibold">Python</span>
  </Badge>
);

/* ── Hero ── */
export const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(FALLBACK_SVG);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [usingFallback, setUsingFallback] = useState(true);

  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch("/images/foto-perfil.png");
        if (response.ok) {
          setImgSrc("/images/foto-perfil.png");
          setUsingFallback(false);
        } else {
          setImageLoaded(true);
        }
      } catch {
        setImageLoaded(true);
      }
    };
    checkImage();
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-slate-950"
    >
      {/* Spotlights */}
      <Spotlight className="pointer-events-none -top-40 left-0 md:-top-20 md:left-60" fill="rgba(9,191,237,0.15)" />
      <Spotlight className="pointer-events-none top-10 left-full md:top-20 md:left-[80vw]" fill="rgba(112,0,255,0.1)" />
      <Spotlight className="pointer-events-none -bottom-20 right-10 md:-bottom-10 md:right-20" fill="rgba(9,191,237,0.06)" />

      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-secondary/8 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 h-40 w-40 rounded-full bg-blue-500/5 blur-2xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-30 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* LEFT — Text */}
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
              className="mb-4 text-sm font-medium tracking-widest text-primary/80 uppercase"
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
              className="mb-6 text-xl font-semibold md:text-2xl lg:text-3xl"
            >
              <span className="bg-gradient-to-r from-primary via-cyan-300 to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                {cargo}
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8 max-w-xl"
            >
              <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
                {bio}
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <a href="#projetos" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-3 text-base font-semibold shadow-2xl transition-all duration-300 hover:shadow-primary/30 sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  <span>Ver Projetos</span>
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </Button>
              </a>

              <a
                href="/images/curriculo-tarsis.pdf"
                download="Tarsis-Barreto-Curriculo.pdf"
                target="_blank"
                className="group relative inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:shadow-lg sm:w-auto"
                aria-label="Baixar currículo PDF"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Baixar CV</span>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex items-center gap-6"
            >
              <a
                href="mailto:tarsiscarvalhobarreto@gmail.com"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-4 py-2 text-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20"
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
                  className="group rounded-full p-2 text-foreground/70 transition-all duration-300 hover:text-primary hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/t%C3%A1rsis-barreto-59u59/"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-full p-2 text-foreground/70 transition-all duration-300 hover:text-primary hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — 3D Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 flex items-center justify-center lg:order-2"
          >
            <div className="relative w-full max-w-md transform-gpu">
              {/* Rotating border gradient */}
              <motion.div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_200%] opacity-70 blur-sm"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="relative rounded-2xl p-6">
                  {/* 3D Canvas */}
                  <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
                    <Canvas
                      camera={{ position: [0, 0, 3.5], fov: 50 }}
                      style={{ width: "100%", height: "100%" }}
                      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                    >
                      <color attach="background" args={["#000000"]} />
                      <ambientLight intensity={0.6} />
                      <directionalLight intensity={0.8} position={[2, 4, 5]} />
                      <pointLight intensity={0.5} position={[-3, -2, 2]} color="#09bfed" />
                      <pointLight intensity={0.3} position={[3, 2, -1]} color="#7000ff" />
                      <Suspense fallback={null}>
                        <group position={[0, -0.08, 0]}>
                          <SceneContent />
                        </group>
                        <OrbitControls
                          enableZoom={false}
                          enablePan={false}
                          autoRotate
                          autoRotateSpeed={2}
                          maxPolarAngle={Math.PI / 2}
                          minPolarAngle={Math.PI / 3}
                        />
                      </Suspense>
                    </Canvas>
                  </div>

                  {/* Photo */}
                  <div className="relative z-10 mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl">
                    {usingFallback ? (
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
                        style={{ backgroundImage: `url(${FALLBACK_SVG})` }}
                      />
                    ) : (
                      <Image
                        src={imgSrc}
                        alt="Foto de perfil de Társis Barreto"
                        fill
                        priority
                        className={`object-cover transition-all duration-700 ${
                          imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                        }`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => { setImgSrc(FALLBACK_SVG); setUsingFallback(true); setImageLoaded(true); }}
                        sizes="(max-width: 768px) 80vw, 40vw"
                      />
                    )}

                    {!imageLoaded && !usingFallback && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background to-slate-900">
                        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                      </div>
                    )}

                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/15 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
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
                    <BadgePython />
                  </motion.div>
                </div>
              </div>

              {/* Floating accent elements */}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-foreground/40">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
