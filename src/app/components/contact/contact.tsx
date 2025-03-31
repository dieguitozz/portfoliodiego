"use client"

import type React from "react"

import { Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent } from "@/app/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="contato" className="py-20 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/50" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-red-500/10 to-transparent blur-3xl" />
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-blue-500/10 to-transparent blur-3xl" />
      </div>

      <div className="container px-4 md:px-6" ref={ref}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em Contato</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Vamos conversar sobre como posso contribuir para o seu projeto
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl gap-8">
          <motion.div className="flex-column space-y-10" variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
            
            <motion.div variants={item}>
              <Card className="overflow-hidden cursor-pointer border-2 hover:border-red-600 transition-all duration-300 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <a
                    href="mailto:diegosilvasd2006@gmail.com"
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">diegosilvasd2006@gmail.com</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="overflow-hidden border-2 cursor-pointer hover:border-red-600 transition-all duration-300 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <a
                    href="https://wa.me/5511959668131?text=Olá%20Diego!%20Vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <p className="text-sm text-muted-foreground">+55 (11) 95966-8131</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="overflow-hidden border-2 cursor-pointer hover:border-red-600 transition-all duration-300 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <a
                    href="https://www.google.com/maps?q=Sao+Paulo+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Localização</h3>
                      <p className="text-sm text-muted-foreground">São Paulo, SP - Brasil</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
