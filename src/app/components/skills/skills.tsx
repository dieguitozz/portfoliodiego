"use client";

import {
  BugOff,
  Github,
  Globe,
  Repeat,
  Workflow,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import ReactIcon from "../../../../public/reactjs.svg";
import HtmlIcon from "../../../../public/html.svg";
import CssIcon from "../../../../public/css.svg";
import MySqlIcon from "../../../../public/mysql.svg";
import JavascriptIcon from "../../../../public/javascript.svg";
import TypescriptIcon from "../../../../public/typescript.svg";

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    {
      name: "JavaScript",
      icon: <Image src={JavascriptIcon} alt="React" className="h-8 w-8" />,
      description:
        "Linguagem de programação para web, usada no frontend e backend.",
    },
    {
      name: "TypeScript",
      icon: <Image src={TypescriptIcon} alt="React" className="h-8 w-8" />,
      description:
        "Linguagem de programação tipada para web, usada no frontend",
    },
    {
      name: "React",
      icon: <Image src={ReactIcon} alt="React" className="h-8 w-8" />,
      description:
        "Biblioteca JavaScript para criar interfaces de usuário dinâmicas.",
    },
    {
      name: "HTML",
      icon: <Image src={HtmlIcon} alt="React" className="h-8 w-8" />,
      description:
        "Linguagem de marcação usada para estruturar páginas web.",
    },
    {
      name: "CSS",
      icon: <Image src={CssIcon} alt="React" className="h-8 w-8" />,
      description:
        "Estiliza páginas web, definindo cores, layouts e animações.",
    },
    {
      name: "MySQL",
      icon: <Image src={MySqlIcon} alt="React" className="h-8 w-8" />,
      description:
        "Banco de dados relacional popular para armazenar e gerenciar dados.",
    },
    {
      name: "GitHub",
      icon: <Github className="h-8 w-8 text-gray-700 dark:text-gray-300" />,
      description:
        "Plataforma para armazenar, versionar e colaborar em código.",
    },
  ];

  const softSkills = [
    {
      name: "Resolução de Problemas",
      icon: <BugOff className="h-8 w-8 text-red-500" />,
      description:
        "Capacidade de identificar, analisar e resolver problemas de forma eficiente.",
    },
    {
      name: "Trabalho em Equipe",
      icon: <Workflow className="h-8 w-8 text-red-500" />,
      description:
        "Colaboração efetiva com outros desenvolvedores e profissionais.",
    },
    {
      name: "Comunicação",
      icon: <Globe className="h-8 w-8 text-red-500" />,
      description:
        "Habilidade de expressar ideias técnicas de forma clara e objetiva.",
    },
    {
      name: "Aprendizado Contínuo",
      icon: <Repeat className="h-8 w-8 text-red-500" />,
      description: "Busca constante por novos conhecimentos e tecnologias.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div id="habilidades" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/50" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-red-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-blue-500/10 to-transparent blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 mx-auto" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Minhas Habilidades
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tecnologias e competências que utilizo para desenvolver soluções
              eficientes
            </p>
          </div>
        </motion.div>

        <div className="mt-16 space-y-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Habilidades Técnicas
            </h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
{technicalSkills.map((skill) => (
  <motion.div
    key={skill.name}
    variants={item}
    whileHover={{ scale: 1.03 }}
    className="flex justify-center"
  >
    <Card className="overflow-hidden border-2 hover:border-red-600 transition-all duration-300 h-full bg-background/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-muted/50">
            {skill.icon}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-2">{skill.name}</h4>
            <h5 className="text-sm text-muted-foreground">
              {skill.description}
            </h5>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Habilidades Comportamentais
            </h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center"
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="flex justify-center"
                >
                  <Card className="border-2 hover:border-red-600 transition-all duration-300 h-full bg-background/80 backdrop-blur-sm">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="p-4 rounded-full bg-muted/50 mb-4">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold mb-2">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
