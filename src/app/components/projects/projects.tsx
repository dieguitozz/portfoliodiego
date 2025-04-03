"use client";

import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [    
    {
      title: "Pokédex",
      description: "Uma enciclopédia virtual de todos os pokémon",
      image: "/pokedex.jpeg",
      tags: ["Next", "TypeScript", "Tailwind"],
      demoUrl: "https://dikedex.vercel.app",
      repoUrl: "https://github.com/dieguitozz/DikeDex",
    },  
    {
      title: "Barbearia Virtual",
      description: "WebSite com catálogo de cortes e sistema de agendamento.",
      image: "/landing.png",
      tags: ["React", "JavaScript", "SCSS"],
      demoUrl: "#",
      repoUrl: "https://github.com/Kaua12365/ClassicBarber",
    },    
    {
      title: "Escritório de Advocacia Virtual",
      description: "TCC desenvolvido para um escritório fictício de advocacia, com sistema de agendamento, listagem de advogados e um chat integrado.",
      image: "/dfgr.png",
      tags: ["React", "JavaScript", "SCSS", "MySQL"],
      demoUrl: "#",
      repoUrl: "https://github.com/RafaelFSaldanha/tcc-dfgr-advocacy",
    }
  ];

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
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projetos" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 dark:opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-red-500/10 to-transparent blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 mx-auto" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meus Projetos</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conheça alguns dos projetos que desenvolvi aplicando minhas habilidades
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center gap-8 flex-wrap"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
               className="w-full sm:w-96 md:w-[500px] lg:w-[650px]"
            >
              <Card className="overflow-hidden border-2 hover:border-red-600 cursor-pointer transition-all duration-300 h-full bg-background/80 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden relative">
                  <motion.div
                    className="object-cover w-full h-full transition-transform duration-700"
                    style={{
                      transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={660}
                      height={400} 
                    />
                  </motion.div>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 transition-opacity duration-300"
                    style={{
                      opacity: hoveredIndex === index ? 0.7 : 0,
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-muted/50 rounded">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="group">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      <span>Código</span>
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </span>
                    </a>
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700 group relative overflow-hidden text-white" size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" /> Visitar
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
