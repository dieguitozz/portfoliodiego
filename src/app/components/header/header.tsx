"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Mail } from "lucide-react"
import { ThemeToggle } from "../theme-toggle"
import { Button } from "../ui/button"
import { useMobile } from "@/app/hooks/use-mobile"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("nav") && !target.closest("button")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  const navItems = [
    { href: "#inicio", label: "Início" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <motion.header
      className={`sticky top-0 z-40 w-full backdrop-blur transition-all duration-300 ${scrolled ? "bg-background/80 border-b shadow-sm" : "bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-16">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-red-600">DS</span>
          </Link>
        </motion.div>

        {isMobile ? (
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(!isOpen)
              }}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        ) : (
          <motion.div className="flex items-center gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, staggerChildren: 0.1 }}>
            <nav className="flex gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-red-600 relative group text-base"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <ThemeToggle />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
  {isOpen && isMobile && (
    <motion.div
      className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-md flex justify-center items-center"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100vh" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <nav className="container flex flex-col items-center gap-6 p-6">
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Link
              href={item.href}
              className="text-lg font-medium transition-colors hover:text-red-600 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-red-600 mr-2">0{index + 1}.</span>
              {item.label}
            </Link>
          </motion.div>
        ))}

        <motion.div
          className="mt-auto pt-6 border-t w-full flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">Entre em contato</p>
          <a href="mailto:diegosilvasd2006@gmail.com">
            <Button className="bg-red-600 hover:bg-red-700 mt-2">
              <Mail className="mr-2 h-4 w-4" /> diegosilvasd2006@gmail.com
            </Button>
          </a>
        </motion.div>
      </nav>
    </motion.div>
  )}
</AnimatePresence>

    </motion.header>
  )
}
