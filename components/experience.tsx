"use client";

import Section from "./section";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  {
    role: "Backend Developer Intern",
    org: "SAARC Masts Tech Pvt Ltd",
    date: "June 2025 - Present",
    bullets: [
      "Built REST APIsBuilding solutions for Mentor-Student Networking along with Student Progress Tracking System for universities.",
      "Implemented Dashboards for Mentors, Students and Admins with a highly intelligent system that matches students and mentors based on their specific skill sets, scores and slot availability for 1-1 interactions among others.",
    ],
    stack: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma ORM",
      "VSCode",
      "NeonDB",
      "BetterAuth",
      "Docker",
      "GitHub",
    ],
  },
  {
    role: "Backend Developer Intern",
    org: "NIT Hamirpur",
    date: "February 2025 - April 2025",
    bullets: [
      "Innovated the Waste Management domain by developing and integrating an AI powered intelligent E-Waste Management System that recognises and segregates waste by analysing images in real-time.",
    ],
    stack: [
      "Next.js",
      "PostgreSQL",
      "TypeScript",
      "FastAPI",
      "Ollama",
      "LLMs",
      "Image Recognition",
      "Real-Time Data Processing",
      "WebSockets",
      "LLaVa Ollama",
      "Docker",
      "GitHub",
    ],
  },
  {
    role: "Technical Team Member",
    org: "IIE SRMIST RMP",
    date: "November 2024 - Present",
    bullets: [
      "Making things work for startups looking for innovation, incubation and entrepreneurship the very start of their journey.",
    ],
    stack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "NeonDB",
      "FastAPI",
      "REST API",
      "Authentication & Authorisation Mechanisms",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Full-Stack Development",
      "VS Code",
      "GitHub",
      "Git",
      "Supabase",
      "Prisma ORM",
      "Better Auth",
      "Vercel",
      "Docker",
    ],
  },
];

export default function Experience() {
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
    <Section id="experience" title="Experience">
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
              initial={{ opacity: 0, y: isMobile ? 8 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: isMobile ? 0.2 : 0.4 }}
              transition={{
                duration: isMobile ? 0.3 : 0.5,
                delay: idx * (isMobile ? 0.03 : 0.06),
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
