"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export default function Section({
  id,
  children,
  className,
  title,
}: {
  id?: string
  children: ReactNode
  className?: string
  title?: string
}) {
  return (
    <section id={id} className={className}>
      {title && (
        <div className="mb-8 space-y-2">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-pretty text-glow"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  )
}
