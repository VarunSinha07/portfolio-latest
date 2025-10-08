"use client"

import { motion } from "framer-motion"

type SocialDockProps = {
  linkedin?: string
  github?: string
  email?: string
  leetcode?: string
}

export default function SocialDock({
  linkedin = "https://www.linkedin.com/in/your-profile",
  github = "https://github.com/your-username",
  email = "mailto:hello@example.com",
  leetcode = "https://leetcode.com/your-username",
}: SocialDockProps) {
  const items = [
    { href: linkedin, src: "/icons/linkedin.png", alt: "LinkedIn" },
    { href: github, src: "/icons/github.png", alt: "GitHub" },
    { href: email, src: "/icons/email.png", alt: "Email" },
    { href: leetcode, src: "/icons/leetcode.png", alt: "LeetCode" },
  ]

  return (
    <>
      {/* Desktop: right-center vertical dock */}
      <motion.aside
        initial={{ x: 24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40"
        aria-label="Social links"
      >
        <div className="glass rounded-full p-3 flex flex-col gap-3 shadow-2xl border border-border/60">
          {items.map((it) => (
            <motion.a
              key={it.alt}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel={it.href.startsWith("http") ? "noreferrer" : undefined}
              className="group relative flex items-center"
              aria-label={it.alt}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* spotlight glow */}
              <span
                className="pointer-events-none absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(closest-side,rgba(56,189,248,0.45),transparent)]"
                aria-hidden
              />
              <div className="rounded-full h-12 w-12 grid place-items-center bg-background/40 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] ring-0 group-hover:ring-2 group-hover:ring-neon transition will-change-transform group-hover:-translate-y-0.5 group-hover:rotate-3">
                <img src={it.src || "/placeholder.svg"} alt={it.alt} className="h-7 w-7 rounded-full" />
              </div>
              {/* slide-out label to the left */}
              <span className="pointer-events-none absolute right-full mr-2 origin-right translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs select-none glass px-2 py-1 rounded-md border border-border/60">
                {it.alt}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.aside>

      {/* Mobile: bottom-center pill */}
      <motion.nav
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40"
        aria-label="Social links"
      >
        <div className="glass border border-border/60 rounded-full px-4 py-3 flex items-center gap-5 shadow-2xl">
          {items.map((it) => (
            <motion.a
              key={it.alt}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel={it.href.startsWith("http") ? "noreferrer" : undefined}
              className="group rounded-full p-1.5 transition"
              aria-label={it.alt}
              whileHover={{ scale: 1.08, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className="absolute inset-0 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(closest-side,rgba(56,189,248,0.35),transparent)]"
                aria-hidden
              />
              <img src={it.src || "/placeholder.svg"} alt={it.alt} className="h-7 w-7 rounded-full" />
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </>
  )
}
