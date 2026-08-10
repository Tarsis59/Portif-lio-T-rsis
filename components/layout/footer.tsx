"use client";

import { ArrowUp, Code2, Github, Linkedin, Instagram, Heart } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/Tarsis59", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/t%C3%A1rsis-barreto-59u59/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/tarsis.crvalho", label: "Instagram" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/[0.06] bg-background/80 backdrop-blur-xl">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="font-outfit font-bold text-foreground tracking-tight text-lg">
                TÁRSIS.DEV
              </span>
            </div>
            <p className="mt-2 text-sm text-foreground/50">
              Full-Stack Developer & AI Engineer
            </p>
          </div>

          {/* Center — Copyright */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm text-foreground/40 flex items-center gap-1">
              Feito com <Heart className="h-3 w-3 text-red-400 fill-red-400" /> por Társis Barreto
            </span>
            <span className="text-xs text-foreground/30">
              &copy; {currentYear} Todos os direitos reservados.
            </span>
          </div>

          {/* Right — Social + Back to top */}
          <div className="flex items-center justify-center gap-3 md:justify-end">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full p-2 text-foreground/50 transition-all duration-300 hover:text-primary hover:bg-white/[0.05]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center rounded-full w-9 h-9 border border-white/10 bg-white/[0.03] text-foreground/50 transition-all duration-300 hover:text-primary hover:border-primary/30 hover:bg-primary/5"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
