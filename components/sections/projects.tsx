"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { projectData } from "@/lib/data";
import { motion } from "framer-motion";
import React from "react";
import { ProjectCard } from "../ui/project-card";
import { SectionHeading } from "../ui/section-heading";

export const Projects: React.FC = () => {
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
          subtitle="Meus principais trabalhos e estudos"
        />

        <div className="mt-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full select-none"
          >
            {}
            <CarouselContent className="-ml-4 items-stretch py-4">
              {projectData.map((project, index) => (
                <CarouselItem
                  key={`${project.title}-${index}`}
                  className="pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  {}
                  <motion.div
                    className="h-full"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {}
                    <div className="h-full p-1">
                      <ProjectCard project={project} />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all" />
            </div>
          </Carousel>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
