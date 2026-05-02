"use client";

import Section from "./section";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/use-is-mobile";

const items = [
  {
    role: "Backend Developer Intern",
    org: "NIT Hamirpur",
    date: "Feb 2025 - Apr 2025",
    bullets: [
      "Built an AI-powered e-waste classification system using deep learning and machine learning, improving accuracy by 30%.",
      "Designed cost-effective data handling and API integrations, reducing project expenses by 20%.",
      "Led a team of 5 developers and streamlined workflows, boosting efficiency by 25% and delivering 2 weeks early.",
    ],
    stack: [
      "Next.js",
      "PostgreSQL",
      "TypeScript",
      "FastAPI",
      "Ollama",
      "LLMs",
      "Docker",
      "GitHub",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    org: "International Federation of Inventors' Association - Bharat Chapter",
    date: "Dec 2024 - Mar 2025",
    bullets: [
      "Led end-to-end development and deployment of the IFIA Bharat web application, cutting page load time by 50% and improving responsiveness.",
      "Engineered scalable CI/CD pipelines and optimized DNS configurations to enable fast, reliable releases.",
    ],
    stack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "NeonDB",
      "REST API",
      "Vercel",
      "GitHub",
      "Git",
      "Docker",
    ],
  },
];

export default function Experience() {
  const isMobile = useIsMobile();

  return (
    <Section id="experience" title="Experience" data-mobile-optimized>
      <div className="relative">
        {/* aligned vertical timeline */}
        <div
          className="absolute left-4 top-0 bottom-0 w-px bg-muted/40"
          aria-hidden
        />
        <ul className="space-y-6">
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: isMobile ? 0.05 : 0.4 }}
              transition={{
                duration: isMobile ? 0.05 : 0.5,
                delay: isMobile ? 0 : idx * 0.06,
              }}
              className="relative pl-12"
            >
              <span
                className="absolute left-3 top-3 h-3 w-3 rounded-full neon"
                aria-hidden
              />
              <motion.div
                className="glass rounded-xl p-5 border border-border/60 transition will-change-transform hover:-translate-y-0.5 hover:shadow-lg hover:neon"
                whileHover={isMobile ? {} : { scale: 1.02 }}
                transition={{ duration: isMobile ? 0 : 0.3 }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-lg font-medium">{item.role}</h3>
                    <p className="text-sm text-muted-foreground">{item.org}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
                <ul className="mt-3 grid gap-1.5 text-sm text-muted-foreground">
                  {item.bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Tech Stack & Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((t) => (
                      <span
                        key={t}
                        className={`text-2xs glass px-2 py-1 rounded-md border border-border/60 ${
                          isMobile ? "" : "hover:neon"
                        } transition`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
