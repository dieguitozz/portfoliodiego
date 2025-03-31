"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) {
    return (
      <div 
        className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded flex items-center px-1"
        aria-label="Carregando tema"
      >
        <motion.div 
          className="w-5 h-5 bg-gray-400 dark:bg-gray-600 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-8 cursor-pointer bg-gray-200 dark:bg-gray-500 rounded flex items-center p-1 relative transition-colors duration-300"
      aria-label={`Mudar para tema ${theme === "dark" ? "claro" : "escuro"}`}
      type="button"
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-500 rounded flex items-center justify-center"
        layout
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 25,
          mass: 0.8
        }}
        role="presentation"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.div
              key="moon"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-gray-800 dark:text-white"
              aria-hidden="true"
            >
              <Moon className="w-4 h-4" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-yellow-500 dark:text-white"
              aria-hidden="true"
            >
              <Sun className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  )
}
