"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { certificatesData } from "@/lib/data";
import { motion } from "framer-motion";
import { CertificateCard } from "../ui/certificate-card";
import { SectionHeading } from "../ui/section-heading";

export function Certificates() {
  return (
    <motion.section
      id="certificados"
      className="w-full py-24 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Certificados e Formações"
          subtitle="Minha busca contínua por conhecimento e especialização"
        />

        <div className="mt-12 relative">
          {}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full select-none"
          >
            {}
            <CarouselContent className="-ml-4 items-stretch py-4">
              {certificatesData.map((cert, index) => (
                <CarouselItem
                  key={`${cert.title}-${index}`}
                  className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  {}
                  <motion.div
                    className="h-full"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {}
                    <div className="h-full p-1">
                      <CertificateCard certificate={cert} />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {}
            {}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary" />
            </div>
          </Carousel>
        </div>
      </div>
    </motion.section>
  );
}

export default Certificates;
