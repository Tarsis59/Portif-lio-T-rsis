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
    title: "Full Stack Developer",
    issuer: "Desenvolvedor.IO",
    date: "Concluído 19/08/2024",
    image: "/images/certs/DESENVOLVEDOR.IO.png",
    link: "https://desenvolvedor.io/",
  },
  {
    title: "Desenvolvimento Mobile",
    issuer: "CEPEDI",
    date: "Concluído em Dezembro de 2024",
    image: "/images/certs/CEPEDI.png",
    link: "https://www.restic36.cepedi.org.br/",
  },
  {
    title: "Python AI Backend Developer",
    issuer: "DIO",
    date: "Concluído 25/06/2024",
    image: "/images/certs/DIO.png",
    link: "https://www.dio.me/",
  },
  {
    title: "WEB Master Front-End",
    issuer: "DANKI CODE",
    date: "Concluído em Setembro de 2023",
    image: "/images/certs/DANKI.png",
    link: "https://cursos.dankicode.com/",
  },
  {
    title: "Desenvolvimento Web Full Stack Node",
    issuer: "Digital House",
    date: "Concluído em Maio de 2024",
    image: "/images/certs/DIGITAL.png",
    link: "https://www.digitalhouse.com/br",
  },
  {
    title: "React JS",
    issuer: "Rocketseat",
    date: "Concluído 28/05/2021",
    image: "/images/certs/REACT.png",
    link: "https://www.rocketseat.com.br/",
  },
  {
    title: "Node JS",
    issuer: "Rocketseat",
    date: "Concluído 23/05/2022",
    image: "/images/certs/NODE.png",
    link: "https://www.rocketseat.com.br/",
  },
    {
    title: "MINICURSOS SINFORM",
    issuer: "Sinform",
    date: "Concluído 2023/2025",
    image: "/images/certs/SINFORM.png",
    link: "/images/certs/SINFORM 2023-2025.pdf",
  },
];
