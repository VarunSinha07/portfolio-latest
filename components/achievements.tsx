"use client"

import Section from "./section"
import { motion } from "framer-motion"

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements & Certifications" subtitle="Highlights" className="scroll-mt-24">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          className="glass rounded-2xl p-0 border border-border/60 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
        >
          <div className="relative">
            <img src="/images/achievements/hackathon.jpg" alt="Hackathon award" className="h-44 w-full object-cover" />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold">1st Runner Up</h3>
            <p className="text-muted-foreground">Full Stack Development Hackathon, VIT Chennai</p>
            <div className="mt-4">
              <a
                href="#"
                className="text-xs glass px-3 py-1 rounded-md border border-border/60 hover:neon transition inline-block"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-0 border border-border/60 overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4 }}
        >
          <div className="relative">
            <img
              src="/images/achievements/dsa-bootcamp.jpg"
              alt="30 Days DSA Bootcamp"
              className="h-44 w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold">30 Days DSA Bootcamp course</h3>
            <div className="mt-2 flex items-center justify-center gap-2 text-muted-foreground text-xs">
              <span className="glass px-3 py-1 rounded-md border border-border/60">Unstop</span>
              <span>•</span>
              <span className="glass px-3 py-1 rounded-md border border-border/60">2025</span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-xs glass px-3 py-1 rounded-md border border-border/60 hover:neon transition inline-block"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
