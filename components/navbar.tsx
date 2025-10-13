"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden md:block sticky top-0 z-40 bg-background/60 backdrop-blur-md border-b border-border/60"
      aria-label="Main"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        <div aria-hidden className="w-[120px]" />
        <div className="hidden md:flex items-center gap-6 text-sm">
          <motion.a
            href="#about"
            className="relative px-3 py-2 rounded-lg transition-colors duration-300 hover:text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">About</span>
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
          <motion.a
            href="#experience"
            className="relative px-3 py-2 rounded-lg transition-colors duration-300 hover:text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Experience</span>
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
          <motion.a
            href="#projects"
            className="relative px-3 py-2 rounded-lg transition-colors duration-300 hover:text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Projects</span>
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
          <motion.a
            href="#achievements"
            className="relative px-3 py-2 rounded-lg transition-colors duration-300 hover:text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Achievements</span>
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
          <motion.a
            href="#education"
            className="relative px-3 py-2 rounded-lg transition-colors duration-300 hover:text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Education</span>
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        </div>
        <div aria-hidden className="w-[120px]" />
      </div>
    </motion.nav>
  );
}
