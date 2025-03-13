"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp, Phone, MapPin } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t bg-background relative flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      </div>

      <div className="container py-12 md:py-16 relative">
        <div className="absolute right-8 -top-6">
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full cursor-pointer bg-red-600 text-white shadow-lg hover:bg-red-700 transition-colors"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-semibold text-xl">Diego Silva Dias</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Desenvolvedor Fullstack apaixonado por criar soluções web modernas
              e responsivas.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                aria-label="GitHub"
                className="rounded-full cursor-pointer hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 hover:scale-110"
              >
                <a
                  href="https://github.com/dieguitozz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="LinkedIn"
                className="rounded-full cursor-pointer hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 hover:scale-110"
              >
                <a
                  href="https://www.linkedin.com/in/diego-dias-757550244/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <a
                href="mailto:diegosilvasd2006@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Email"
                  className="rounded-full cursor-pointer hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#inicio"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#habilidades"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link
                  href="#projetos"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-muted-foreground hover:text-red-600 transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-muted-foreground">
                  diegosilvasd2006@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-muted-foreground">+55 (11) 95966-8131</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-muted-foreground">
                  São Paulo, SP - Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Designed and Developed by Diego Silva Dias
          </p>
          <p className="text-center text-sm text-muted-foreground">
            Developed with <span className="text-red-600">❤</span> and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
