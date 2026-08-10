"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { projectData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useMemo } from "react";
import { ProjectCard } from "../ui/project-card";
import { SectionHeading } from "../ui/section-heading";

const allTags = Array.from(new Set(projectData.flatMap((p) => p.tags))).sort();

export const Projects: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      activeTag ? projectData.filter((p) => p.tags.includes(activeTag)) : projectData,
    [activeTag],
  );

  return (
    <motion.section
      id="projetos"
      className="w-full py-24 px-4 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          title="Projetos"
          subtitle="Do front-end à engenharia de IA — soluções completas"
        />

        {/* Filter tags */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeTag === null
                ? "bg-primary/20 text-primary border-primary/30 shadow-lg shadow-primary/10"
                : "bg-white/[0.03] text-foreground/70 border-white/10 hover:bg-white/[0.06] hover:border-white/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Todos
          </motion.button>
          {allTags.slice(0, 8).map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTag === tag
                  ? "bg-primary/20 text-primary border-primary/30 shadow-lg shadow-primary/10"
                  : "bg-white/[0.03] text-foreground/70 border-white/10 hover:bg-white/[0.06] hover:border-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="mt-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag || "all"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full select-none"
              >
                <CarouselContent className="-ml-4 items-stretch py-4">
                  {filtered.map((project, index) => (
                    <CarouselItem
                      key={`${project.title}-${index}`}
                      className="pl-4 sm:basis-1/2 lg:basis-1/3"
                    >
                      <motion.div
                        className="h-full"
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="h-full p-1">
                          <ProjectCard project={project} />
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="hidden md:block">
                  <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all" />
                  <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all" />
                </div>
              </Carousel>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
