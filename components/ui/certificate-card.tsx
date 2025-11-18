"use client";

import { Certificate } from "@/lib/data";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(0,229,255,0.3)]">
      
      {/* Imagem do Certificado */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/20">
        {/* Placeholder visual caso a imagem não carregue ou enquanto carrega */}
        <div className="absolute inset-0 flex items-center justify-center text-white/10">
          <Award className="h-16 w-16" />
        </div>
        
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Gradiente para leitura */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {certificate.issuer}
            </span>
          </div>
          <h3 className="font-outfit text-xl font-bold text-foreground line-clamp-2">
            {certificate.title}
          </h3>
          <p className="mt-2 text-sm text-foreground/60">
            {certificate.date}
          </p>
        </div>

        {/* Botão */}
        <div className="mt-6">
          <Button 
            className="w-full group-hover:bg-primary group-hover:text-black transition-colors duration-300" 
            variant="outline" 
            asChild
          >
            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              Ver Credencial
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};