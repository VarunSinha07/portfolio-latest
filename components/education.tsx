"use client"

import Section from "./section"
import TiltCard from "./tilt-card"
import { motion } from "framer-motion"

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academics" className="scroll-mt-24">
      <TiltCard className="rounded-2xl card-gradient-border">
        <motion.div
          className="glass rounded-2xl p-6 border border-border/60"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-xl gradient-brand neon" aria-label="SRM Institute logo" />
            <div>
              <h3 className="text-lg font-semibold">SRM Institute of Science and Technology</h3>
              <p className="text-sm text-muted-foreground">B.Tech in Computer Science and Engineering with Specialization in Big Data Analytics</p>
            </div>
          </div>
          <div className="mt-4 grid gap-1 text-sm text-muted-foreground">
            <p>GPA: 9.78 CGPA</p>
            <p>Relevant coursework in Object Oriented Programming, Data Structures,
Database Management System, Operating Systems etc.</p>
          </div>
        </motion.div>
      </TiltCard>

      <div className="mt-6">
        <TiltCard className="rounded-2xl card-gradient-border">
          <motion.div
            className="glass rounded-2xl p-6 border border-border/60"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-muted/20 border border-border/60" aria-label="School logo" />
              <div>
                <h3 className="text-base font-semibold">Valley View School</h3>
                <p className="text-sm text-muted-foreground">Senior Secondary, Pure Science with Computer Science & English</p>
                <p className="text-sm text-muted-foreground">Percentage : 85.2 %</p>
              </div>
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </Section>
  )
}
