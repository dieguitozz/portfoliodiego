"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center px-1">
        <motion.div className="w-5 h-5 bg-gray-400 dark:bg-gray-600 rounded-full" />
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-8 cursor-pointer bg-gray-200 dark:bg-gray-500 rounded flex items-center p-1 relative transition-colors"
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-500 rounded-full flex items-center justify-center shadow-md"
        layout
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {theme === "dark" ? (
          <Moon className="w-4 h-4 text-white" />
        ) : (
          <Sun className="w-4 h-4 text-white" />
        )}
      </motion.div>
    </button>
  )
}
