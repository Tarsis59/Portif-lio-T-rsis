/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  project: Project;
};

type LocalLink = {
  href: string;
  label?: string;
  icon?: React.ComponentType<any> | null;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const tags = Array.isArray((project as any).tags)
    ? ((project as any).tags as string[])
    : (project as any).tags
    ? [String((project as any).tags)]
    : ([] as string[]);

  const links = Array.isArray((project as any).links)
    ? ((project as any).links as LocalLink[])
    : (project as any).links
    ? ([project.links] as unknown as LocalLink[])
    : ([] as LocalLink[]);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50">
      {/* Imagem */}
      <div className="relative w-full aspect-video overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title ?? "Project image"}
            fill
            className="w-full h-full object-cover"
            priority={false}
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-sm text-foreground/60">No image</span>
          </div>
        )}

        {/* Overlay de Sombra */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-outfit text-2xl font-bold text-foreground">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-base text-foreground/80">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={`${tag}-${idx}`}
              className="text-xs px-2 py-1 rounded-full border border-white/6 bg-white/2"
            >
              {tag}
            </span>
          ))}
        </div>

        {}
        <div className="mt-6 flex items-center gap-4 flex-wrap">
          {links.map((link, idx) => {
            const Icon = link.icon as
              | React.ComponentType<any>
              | undefined
              | null;
            const label = link.label ?? "Abrir";
            const isDemo = label.toLowerCase() === "demo";

            const baseBtn =
              "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition";
            const demoClasses = "bg-primary text-primary-foreground";
            const outlineClasses =
              "border border-primary/50 text-primary hover:bg-primary/10";

            return (
              <a
                key={`${link.href ?? label}-${idx}`}
                href={link.href ?? "#"}
                target={link.href ? "_blank" : undefined}
                rel={link.href ? "noopener noreferrer" : undefined}
                aria-label={label}
                className={cn(baseBtn, isDemo ? demoClasses : outlineClasses)}
              >
                {Icon ? <Icon className="w-4 h-4" aria-hidden /> : null}
                <span>{label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
