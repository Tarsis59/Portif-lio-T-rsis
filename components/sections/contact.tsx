"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Phone, Send, Check, Loader2 } from "lucide-react";
import React, { useRef, useState } from "react";
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
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: "Társis Barreto",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSent(true);
      toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.");
      form.reset();
      setTimeout(() => setSent(false), 3000);
    } catch {
      toast.error("Erro ao enviar. Tente novamente ou me chame no WhatsApp.");
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: GITHUB_LINK,
      label: "GitHub",
      color: "hover:text-[#6e5494]",
    },
    {
      icon: Linkedin,
      href: LINKEDIN_LINK,
      label: "LinkedIn",
      color: "hover:text-[#0A66C2]",
    },
    {
      icon: Instagram,
      href: INSTAGRAM_LINK,
      label: "Instagram",
      color: "hover:text-[#E4405F]",
    },
  ];

  return (
    <motion.section
      id="contato"
      className="w-full max-w-7xl mx-auto py-24 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Meteors number={20} />

      <SectionHeading title="Contato" subtitle="Vamos criar algo incrível juntos" />

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {/* LEFT — Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-outfit text-3xl font-bold text-foreground">
            Fale comigo
          </h3>

          {/* Email Card */}
          <motion.a
            href={`mailto:${EMAIL}`}
            className="block rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.06] group"
            whileHover={{ y: -4 }}
          >
            <h4 className="font-outfit text-lg font-semibold text-foreground mb-2">
              Email
            </h4>
            <div className="flex items-center gap-2 text-primary group-hover:underline">
              <Mail className="h-4 w-4" />
              <span className="text-sm">{EMAIL}</span>
            </div>
          </motion.a>

          {/* WhatsApp Card */}
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.06] group"
            whileHover={{ y: -4 }}
          >
            <h4 className="font-outfit text-lg font-semibold text-foreground mb-2">
              WhatsApp
            </h4>
            <div className="flex items-center gap-2 text-primary group-hover:underline">
              <Phone className="h-4 w-4" />
              <span className="text-sm">{WA_DISPLAY}</span>
            </div>
          </motion.a>

          {/* Social Links */}
          <div className="pt-2">
            <h4 className="font-outfit text-lg font-semibold text-foreground mb-4">
              Minhas Redes
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-3 text-foreground/70 transition-all duration-300 ${link.color} hover:border-white/30 hover:shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Form */}
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 shadow-2xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-outfit text-2xl font-bold text-foreground mb-6">
            Escreva uma mensagem
          </h3>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-foreground/80">
                Nome
              </Label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                {...form.register("name")}
                className="mt-2 bg-background/50 border-white/10 focus-visible:ring-primary/50"
              />
              {form.formState.errors.name && (
                <p className="mt-1 text-sm text-red-400">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground/80">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu.email@exemplo.com"
                {...form.register("email")}
                className="mt-2 bg-background/50 border-white/10 focus-visible:ring-primary/50"
              />
              {form.formState.errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground/80">
                Mensagem
              </Label>
              <Textarea
                id="message"
                placeholder="Conte-me sobre seu projeto..."
                rows={5}
                {...form.register("message")}
                className="mt-2 bg-background/50 border-white/10 focus-visible:ring-primary/50 resize-none"
              />
              {form.formState.errors.message && (
                <p className="mt-1 text-sm text-red-400">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full gap-2 rounded-xl py-6 text-base font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40"
              disabled={form.formState.isSubmitting || sent}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : sent ? (
                <>
                  <Check className="h-4 w-4" />
                  Enviado!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Enviar Mensagem
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
