"use client"

import type React from "react"

import Section from "./section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // You can connect an API route later. For now, simulate success.
    setSent(true)
    setTimeout(() => setSent(false), 2500)
  }

  return (
    <Section id="contact" title="Let’s Connect" subtitle="Contact" className="scroll-mt-24">
      <motion.form
        onSubmit={onSubmit}
        className="glass rounded-2xl border border-border/60 p-6 grid gap-4 md:grid-cols-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <Input id="name" name="name" placeholder="Your name" className="glass" required />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" className="glass" required />
        </div>
        <div className="md:col-span-2 grid gap-2">
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            className="glass min-h-[140px]"
            required
          />
        </div>
        <div className="md:col-span-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-md px-3 py-2 border border-border/60 hover:neon"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-md px-3 py-2 border border-border/60 hover:neon"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              className="glass rounded-md px-3 py-2 border border-border/60 hover:neon"
            >
              Email
            </a>
          </div>
          <Button type="submit" className="neon neon-hover">
            Send Message
          </Button>
        </div>
        {sent && <p className="md:col-span-2 text-sm text-glow">Thanks! Your message has been sent.</p>}
      </motion.form>
    </Section>
  )
}
