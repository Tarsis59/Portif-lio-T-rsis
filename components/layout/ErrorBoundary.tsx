"use client";

import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";
import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/[0.03] rounded-full blur-[100px]" />
          </div>

          <motion.div
            className="relative z-10 text-center max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mx-auto mb-6 w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center"
            >
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </motion.div>

            <h1 className="font-outfit text-2xl font-bold text-foreground mb-2">
              Algo deu errado
            </h1>
            <p className="text-foreground/60 mb-6 text-sm leading-relaxed">
              Um erro inesperado aconteceu. Tente recarregar a página.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              <RefreshCw className="h-4 w-4" />
              Recarregar
            </button>
          </motion.div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
