"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import TiltCard from "./tilt-card"

function Typewriter({ text, speed = 28 }: { text: string; speed?: number }) {
  const chars = Array.from(text)
  return (
    <span aria-label={text}>
      {chars.map((c, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * (speed / 1000) }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <header className="relative mx-auto w-full max-w-6xl px-4 md:px-6 pt-24 md:pt-32 pb-20">
      <div className="relative grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <motion.h1
            className="glitch text-balance font-sans text-7xl md:text-9xl font-extrabold leading-[0.95] tracking-[-0.02em]"
            data-text="Varun Sinha"
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
          >
            Varun Sinha
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Full Stack Developer | Backend Engineer | Problem Solver
          </motion.p>

          <motion.p
            className="text-pretty text-lg md:text-xl text-glow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <Typewriter text="Crafting seamless digital experiences from backend logic to frontend magic." />
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button asChild className="neon neon-hover text-color-white hover:text-black glass border border-border/60" variant="default">
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="glass border border-border/60 hover:bg-accent/10 bg-transparent"
            >
              <a href="/varun-sinha-resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </Button>
          </motion.div>
        </div>

        <TiltCard className="card-gradient-border rounded-2xl glass p-1">
          <motion.div
            className="rounded-2xl glass p-6 border border-border/60"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="aspect-square w-full rounded-xl bg-muted/10 flex items-center justify-center">
              <motion.img
                src="/varun-pic.jpg"
                alt="Portrait of Varun Sinha"
                className="h-64 w-64 rounded-full object-cover border border-border/60"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250, damping: 14 }}
              />
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </header>
  )
}
