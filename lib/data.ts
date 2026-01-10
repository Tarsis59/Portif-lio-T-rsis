import { ExternalLink, Github } from "lucide-react";
import type { ElementType } from "react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  links: {
    icon: ElementType;
    label: string;
    href: string;
  }[];
};

export const projectData: Project[] = [
  {
    title: "ULTRAFLIX",
    description:
      "Plataforma de streaming completa (SPA) construída com Catalogação, favoritos, avaliações e comentários.",
    tags: ["React", "Vite", "Firebase", "Context API", "Framer Motion"],
    imageUrl: "/images/ULTRAFLIX.png",
    links: [
      {
        icon: Github,
        label: "Código",
        href: "https://github.com/Tarsis59/ultraflix-react-project",
      },
      {
        icon: ExternalLink,
        label: "Demo",
        href: "https://ultraflix-react-project.vercel.app/",
      },
    ],
  },
  {
    title: "COFRE FORTE",
    description:
      "Aplicação Full-Stack para gerenciar assinaturas com foco em usabilidade e automações e controles financeiros.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "Framer Motion"],

    imageUrl: "/images/COFRE%20FORTE.png",
    links: [
      {
        icon: Github,
        label: "Código",
        href: "https://github.com/Tarsis59/cofre-forte",
      },
      {
        icon: ExternalLink,
        label: "Demo",
        href: "https://cofre-forte-6vip.vercel.app/",
      },
    ],
  },
  {
    title: "ZENITH",
    description:
      "Plataforma de produtividade gamificada com sistema de XP, níveis, moedas, loja de temas e conquistas.",
    tags: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind"],
    imageUrl: "/images/ZENITH.png",
    links: [
      {
        icon: Github,
        label: "Código",
        href: "https://github.com/Tarsis59/zenith-app-react",
      },
      {
        icon: ExternalLink,
        label: "Demo",
        href: "https://zenith-app-task.netlify.app/dashboard",
      },
    ],
  },
  {
    title: "ProjectHelix",
    description:
      "API de alta performance desenvolvida com arquitetura em camadas, autenticação com JWT, SignalR  e integração com PostgreSQL.",
    tags: [".NET 8", "C#", "ASP.NET Core", "PostgreSQL", "SignalR"],
    imageUrl: "/images/ProjectHelix.png",
    links: [
      {
        icon: Github,
        label: "Código",
        href: "https://github.com/Tarsis59/ProjectHelix-API",
      },
    ],
  },
];

/** Tipo de certificado */
export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
};

/** Dados dos certificados */
export const certificatesData: Certificate[] = [
  {
    title: "Projeto de Extensão BAH.IA",
    issuer: "BAH.IA",
    date: "Concluído 13/12/2024",
    image: "/images/certs/BAH.IA.png",
    link: "/images/pasts/BAH.IA.pdf",
  },
  {
    title: "Desenvolvimento Mobile",
    issuer: "CEPEDI",
    date: "Concluído em Dezembro de 2024",
    image: "/images/certs/CEPEDI.png",
    link: "/images/pasts/CEPEDI.pdf",
  },
  {
    title: "Suporte Profissional de MacBook",
    issuer: "APPLE",
    date: "Concluído 24/02/2021",
    image: "/images/certs/APPLE.png",
    link: "/images/pasts/APPLE.pdf",
  },
     {
    title: "MINICURSOS SINFORM",
    issuer: "Sinform",
    date: "Concluído 2023/2025",
    image: "/images/certs/SINFORM.png",
    link: "/images/certs/SINFORM 2023-2025.pdf",
  },
    {
    title: "Python AI Backend Developer",
    issuer: "DIO",
    date: "Concluído 25/06/2024",
    image: "/images/certs/DIO.png",
    link: "/images/pasts/dio.pdf",
  },
    {
    title: "Full Stack Developer",
    issuer: "Desenvolvedor.IO",
    date: "Concluído 19/08/2024",
    image: "/images/certs/DESENVOLVEDOR.IO.png",
    link: "/images/pasts/desenvolvedor.io.pdf",
  },
  {
    title: "Desenvolvimento Web Full Stack Node",
    issuer: "Digital House",
    date: "Concluído em Maio de 2024",
    image: "/images/certs/DIGITAL.png",
    link: "/images/pasts/digital.pdf",
  },
  {
    title: "React JS",
    issuer: "Rocketseat",
    date: "Concluído 28/05/2021",
    image: "/images/certs/REACT.png",
    link: "/images/pasts/react.pdf",
  },
];
