"use client"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 bg-background/60 backdrop-blur-md border-b border-border/60"
      aria-label="Main"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        {/* left placeholder to keep spacing balanced */}
        <div aria-hidden className="w-[120px]" />
        <div className="hidden md:flex items-center gap-4 text-sm">
          <a href="#about" className="hover:neon">
            About
          </a>
          <a href="#experience" className="hover:neon">
            Experience
          </a>
          <a href="#projects" className="hover:neon">
            Projects
          </a>
          <a href="#achievements" className="hover:neon">
            Achievements
          </a>
          <a href="#education" className="hover:neon">
            Education
          </a>
          <a href="#contact" className="hover:neon">
            Contact
          </a>
        </div>
        {/* right placeholder to replace removed resume button */}
        <div aria-hidden className="w-[120px]" />
      </div>
    </motion.nav>
  )
}
