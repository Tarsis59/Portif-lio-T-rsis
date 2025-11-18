/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Meteors } from "../ui/meteors";
import { SectionHeading } from "../ui/section-heading";
import { Textarea } from "../ui/textarea";

const EMAIL = "tarsiscarvalhobarreto@gmail.com";
const WA_LINK = "https://wa.me/5573998489747";
const WA_DISPLAY = "+55 (73) 99848-9747";
const GITHUB_LINK = "https://github.com/Tarsis59";
const LINKEDIN_LINK = "https://www.linkedin.com/in/t%C3%A1rsis-barreto-59u59/";
const INSTAGRAM_LINK = "https://www.instagram.com/tarsis.crvalho";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  message: z
    .string()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const Contact: React.FC = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      toast.success("Mensagem enviada com sucesso!");
      form.reset();
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
    }
  };

  return (
    <motion.section
      id="contato"
      className="w-full max-w-7xl mx-auto py-24 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {}
      <Meteors number={20} />

      <SectionHeading
        title="Contato"
        subtitle="Vamos criar algo incrível juntos"
      />

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {}
        <div className="space-y-6">
          <h3 className="font-outfit text-3xl font-bold text-foreground">
            Fale comigo
          </h3>

          {/* Card Email */}
          <motion.div
            className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
            whileHover={{ y: -5 }}
          >
            <h4 className="font-outfit text-xl font-semibold text-foreground">
              Email
            </h4>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 inline-flex items-center gap-2 px-0 text-primary hover:underline"
            ></a>
          </motion.div>

          {/* Card WhatsApp */}
          <motion.div
            className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
            whileHover={{ y: -5 }}
          >
            <h4 className="font-outfit text-xl font-semibold text-foreground">
              WhatsApp
            </h4>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Phone className="h-4 w-4" /> {WA_DISPLAY}
            </a>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-0 text-primary hover:underline"
            ></a>
          </motion.div>

          {/* Redes Sociais */}
          <div className="mt-6">
            <h4 className="font-outfit text-xl font-semibold text-foreground mb-4">
              Minhas Redes
            </h4>
            <div className="flex gap-4">
              <motion.a
                href={GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 transition-colors hover:text-primary"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-7 w-7" />
              </motion.a>

              <motion.a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 transition-colors hover:text-primary"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-7 w-7" />
              </motion.a>

              <motion.a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 transition-colors hover:text-primary"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-7 w-7" />
              </motion.a>
            </div>
          </div>
        </div>

        {}
        <div className="rounded-xl border border-border bg-card p-8 shadow-lg">
          <h3 className="font-outfit text-3xl font-bold text-foreground mb-6">
            Escreva uma mensagem
          </h3>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-foreground">
                Nome
              </Label>
              <Input
                id="name"
                placeholder="Digite seu nome completo"
                {...form.register("name")}
                className="mt-2 bg-background/50 border-border focus-visible:ring-primary"
              />
              {form.formState.errors.name && (
                <p className="mt-1 text-sm text-destructive">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground">
                E-mail
              </Label>
              <Input
                id="email"
                placeholder="seu.email@exemplo.com"
                {...form.register("email")}
                className="mt-2 bg-background/50 border-border focus-visible:ring-primary"
              />
              {form.formState.errors.email && (
                <p className="mt-1 text-sm text-destructive">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground">
                Mensagem
              </Label>
              <Textarea
                id="message"
                placeholder="Escreva sua mensagem aqui..."
                rows={5}
                {...form.register("message")}
                className="mt-2 bg-background/50 border-border focus-visible:ring-primary"
              />
              {form.formState.errors.message && (
                <p className="mt-1 text-sm text-destructive">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
