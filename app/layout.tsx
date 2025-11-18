import { ClientWrapper } from "@/components/layout/ClientWrapper";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import React from "react";
import { Toaster } from "sonner";
import "./globals.css";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontOutfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Társis Barreto",
description: "Portfólio de Társis Barreto. Especialista em React, .NET, Node.js e Arquitetura Limpa. Explore meu laboratório 3D e projetos.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classes = cn(
    "min-h-screen font-sans antialiased bg-background text-foreground",
    fontInter.variable,
    fontOutfit.variable
  );

  return (
    <html lang="pt-BR" className="dark">
      <body className={classes}>
        {}
        <ClientWrapper>
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ClientWrapper>

        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
