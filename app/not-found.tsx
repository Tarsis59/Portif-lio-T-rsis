"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/[0.04] rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Glitchy 404 */}
        <motion.h1
          className="font-outfit text-[10rem] md:text-[14rem] font-black leading-none bg-gradient-to-br from-primary via-cyan-300 to-secondary bg-clip-text text-transparent select-none"
          animate={{
            textShadow: [
              "0 0 40px rgba(9,191,237,0.3)",
              "0 0 80px rgba(112,0,255,0.2)",
              "0 0 40px rgba(9,191,237,0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          404
        </motion.h1>

        <motion.p
          className="mt-4 text-xl md:text-2xl font-semibold text-foreground/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Página não encontrada
        </motion.p>

        <motion.p
          className="mt-2 text-base text-foreground/50 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          A página que você procura não existe ou foi movida para outro endereço.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            <Home className="h-4 w-4" />
            Voltar ao Início
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-6 py-3 text-sm font-medium text-foreground/80 transition-all hover:bg-white/[0.06] hover:border-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}
