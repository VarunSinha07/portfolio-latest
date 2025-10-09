"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Education from "@/components/education"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import CursorHalo from "@/components/cursor-halo"
import Navbar from "@/components/navbar"
import SocialDock from "@/components/social-dock"

export default function HomePage() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <main ref={ref} className="relative min-h-screen bg-background text-foreground">
      <CursorHalo />
      <ParticleBackground />

      <motion.div style={{ y: parallaxY }} aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 gradient-brand opacity-20 blur-3xl" />
      </motion.div>

      <Navbar />
      <SocialDock
        linkedin = "https://www.linkedin.com/in/varunsinha20/"
        github = "https://github.com/VarunSinha07"
        leetcode = "https://leetcode.com/u/varunsinha07/"
      />

      <Hero />

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 space-y-24 md:space-y-36">
        <About />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
      </div>

      <Footer />
    </main>
  )
}
