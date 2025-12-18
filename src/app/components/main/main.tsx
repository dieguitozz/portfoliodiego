"use client";

import { Github } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import Diego from "../../../../public/gojo.png"
import Image from "next/image";
import { Linkedin, DownloadIcon } from "lucide-react";

export default function Main() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[860px] py-20 md:py-32 overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col justify-center space-y-6">
            <motion.div className="space-y-4" variants={item}>
              <h1 className="text-4xl font-bold tracking-tighter max-w-full sm:text-6xl xl:text-7xl/none">
                <span className="text-red-600">Olá, eu sou</span>
                <br />
                <div className="min-h-[4.5rem] sm:min-h-[5.5rem]">
                  <TypeAnimation
                    sequence={[
                      "Diego Silva Dias",
                      2000,
                      "Desenvolvedor Fullstack",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                    className="text-foreground"
                  />
                </div>
              </h1>
              <p className="max-w-[650px] text-muted-foreground md:text-xl">
                Tenho experiência com HTML, CSS, JavaScript, C#, ReactJS, MySQL.
                Gosto de estruturar projetos eficientes e aplicar em diferentes
                áreas da vida.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4"
              variants={item}
            >
              <a
                href="/diegosilvadias.pdf"
                download
                className="w-full sm:w-auto"
              >
                <Button className="bg-red-600 cursor-pointer hover:bg-red-700 group relative text-white overflow-hidden w-full sm:w-auto h-12 sm:h-auto text-base">
                  <span className="relative z-10 flex items-center">
                    <DownloadIcon className="mr-2 h-5 w-5" />
                    Baixar CV
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </a>
              <Button
                variant="outline"
                className="group relative overflow-hidden w-full sm:w-auto h-12 sm:h-auto text-base cursor-pointer"
              >
                <a
                  href="#projetos"
                  className="relative z-10 w-full flex justify-center"
                >
                  Ver Projetos
                </a>
                <span className="absolute inset-0 bg-red-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-row sm:flex-row gap-4"
              variants={item}
            >
              <Button
                variant="ghost"
                size="icon"
                aria-label="GitHub"
                className="rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 hover:scale-110 h-12 w-12 sm:h-10 sm:w-10"
              >
                <a
                  href="https://github.com/dieguitozz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                >
                  <Github className="h-6 w-6 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="LinkedIn"
                className="rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 hover:scale-110 h-12 w-12 sm:h-10 sm:w-10"
              >
                <a
                  href="https://www.linkedin.com/in/diego-dias-757550244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                >
                  <Linkedin className="h-6 w-6 sm:h-5 sm:w-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center justify-center mt-12 sm:mt-0"
            variants={item}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative mx-auto">
              {/* Gradiente apenas atrás da imagem */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-red-600 to-blue-600 opacity-75 blur-xl animate-pulse" />
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-red-600 w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
                <Image
                  src={Diego.src || "/placeholder.svg"}
                  alt="Diego Silva Dias"
                  className="object-cover"
                  width={350}
                  height={350}
                />
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-white dark:bg-gray-900 px-4 py-2 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-3">
                <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium"> Disponível </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
