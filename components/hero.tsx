"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function Typewriter({ text, speed = 28 }: { text: string; speed?: number }) {
  const chars = Array.from(text);
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
  );
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
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
            <Button
              asChild
              className="glass border border-border/60 hover:bg-accent/10 bg-transparent"
              variant="outline"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              asChild
              variant="default"
              className="neon text-white hover:text-black neon-hover glass border border-border/60"
            >
              <a
                href="/varun-sinha-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid place-items-center"
            initial={{ rotate: -8, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="block h-72 w-72 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(56,189,248,0.25), transparent 60%), conic-gradient(from 0deg, rgba(99,102,241,0.35), rgba(56,189,248,0.35), rgba(59,130,246,0.35), rgba(99,102,241,0.35))",
                mask: "radial-gradient(closest-side, transparent 68%, black 69%)",
                WebkitMask:
                  "radial-gradient(closest-side, transparent 68%, black 69%)",
              }}
              animate={isMobile ? {} : { rotate: [0, 360] }}
              transition={
                isMobile
                  ? {}
                  : {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 18,
                      ease: "linear",
                    }
              }
            />
          </motion.div>

          <motion.div
            className="relative h-72 w-72 rounded-full overflow-hidden bg-background/40 backdrop-blur-md border border-border/60"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={isMobile ? {} : { scale: 1.02 }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.12),transparent)]"
            />
            <motion.img
              src="/varun-pic.jpg"
              alt="Portrait of Varun Sinha"
              className="h-full w-full object-cover"
              whileHover={isMobile ? {} : { scale: 1.06, rotate: 1.5 }}
              whileTap={isMobile ? {} : { scale: 1.02 }}
              transition={
                isMobile ? {} : { type: "spring", stiffness: 240, damping: 16 }
              }
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
