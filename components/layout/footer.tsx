"use client";

import { Code2, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Tarsis59",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/t%C3%A1rsis-barreto-59u59/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/tarsis.crvalho",
    label: "Instagram",
  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background/50">
      {}
      <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-1 items-center gap-6 md:grid-cols-3">
        {}
        <div className="text-center md:text-left">
          <p className="text-sm text-foreground/60"></p>
        </div>

        {}
        <div className="flex items-center justify-center gap-3">
          <div className="relative flex items-center gap-3">
            {}

            <div className="flex flex-col items-center justify-center leading-tight gap-1 text-center">
              <div className="flex items-center justify-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                <span className="font-outfit font-bold text-foreground tracking-tight">
                  TÁRSIS.DEV
                </span>
              </div>
              <span className="text-xs text-foreground/60">
                © {currentYear} Társis Barreto. Todos os direitos reservados.
              </span>
            </div>
          </div>
        </div>

        {}
        <div className="flex items-center justify-center gap-4 md:justify-end">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full p-2 text-foreground/60 transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <Icon className="h-6 w-6" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
