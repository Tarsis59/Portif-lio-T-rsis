import { ClientWrapper } from "@/components/layout/ClientWrapper";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import { Toaster } from "sonner";
import "./globals.css";

const fontInter = localFont({
  src: [
    {
      path: "../fonts/inter-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/inter-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/inter-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/inter-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/inter-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/inter-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const fontOutfit = localFont({
  src: [
    {
      path: "../fonts/outfit-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/outfit-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/outfit-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/outfit-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/outfit-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Társis Barreto",
  description: "Portfólio de Társis Barreto. Especialista em React, .NET, Node.js e Arquitetura Limpa. Explore meu laboratório 3D e projetos.",
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
