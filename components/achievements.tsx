"use client"

import Section from "./section"
import { motion } from "framer-motion"

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements & Certifications" subtitle="Highlights" className="scroll-mt-24">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          className="glass rounded-2xl p-6 border border-border/60 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.03, y: -4 }}
        >
          <div className="mx-auto h-16 w-16 rounded-full gradient-brand neon" aria-hidden />
          <h3 className="mt-4 text-xl font-semibold">1st Runner Up</h3>
          <p className="text-muted-foreground">Full Stack Development Hackathon, VIT Chennai</p>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-6 border border-border/60"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.03, y: -4 }}
        >
          <h3 className="text-xl font-semibold text-center">30 Days DSA Bootcamp course</h3>
          <div className="mt-4 flex items-center justify-center">
            <span className="text-2xs glass px-3 py-1 rounded-md border border-border/60 hover:neon transition">
              Unstop
            </span>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-2xs glass px-3 py-1 rounded-md border border-border/60 hover:neon transition">
              2025
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
