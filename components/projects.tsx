"use client";

import Section from "./section";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import TiltCard from "./tilt-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import useIsMobile from "@/hooks/use-is-mobile";

type Project = {
  title: string;
  desc: string;
  href?: string;
  tags: ("Frontend" | "Backend" | "Full Stack")[];
  img: string;
};

const projects: Project[] = [
  {
    title: "PrakSat",
    desc: "A scalable multi-tenant air quality forecasting SaaS platform with role-based access, credit-based API monetization, and interactive time-series dashboards.",
    href: "https://drive.google.com/file/d/1VgOs2-xuNvw_hiDEwBo4DXouJeeAfh3P/view?usp=sharing",
    tags: ["Full Stack", "Frontend", "Backend"],
    img: "/projects/praksat.jpg", 
  },
  {
    title: "Zit",
    desc: "A terminal-based AI Git assistant in Rust with an interactive TUI, enabling real-time debugging, workflow automation, and intelligent developer guidance.",
    href: "https://main.dg6ahogo2wxtk.amplifyapp.com/",
    tags: ["Backend"],
    img: "/projects/zit.png", 
  },
  {
  title: "VyaparFlow",
  desc: "A full-stack business management platform that streamlines inventory tracking, billing, and financial workflows with real-time data insights, enabling small businesses to manage operations efficiently.",
  href: "https://vyaparflow.vercel.app/",
  tags: ["Full Stack"],
  img: "/projects/vyaparflow.png",
  },
  {
    title: "IFIA Bharat",
    desc: "Developed the official website for IFIA Bharat. Implemented the full frontend and backend solution with scalable CI/CD pipelines enabling fast releases.",
    href: "https://ifiabharat.com",
    tags: ["Full Stack", "Frontend", "Backend"],
    img: "/projects/IFIA-bharat.png",
  },
];

const filters = ["All", "Frontend", "Backend", "Full Stack"] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const isMobile = useIsMobile();

  const list = useMemo(
    () =>
      projects.filter(
        (p) =>
          active === "All" ||
          p.tags.includes(active as "Frontend" | "Backend" | "Full Stack"),
      ),
    [active],
  );

  return (
    <Section
      id="projects"
      title="Projects"
      className="scroll-mt-24"
      data-mobile-optimized
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <Button
            key={f}
            size="sm"
            variant={active === f ? "default" : "outline"}
            onClick={() => setActive(f)}
            className={
              active === f
                ? "neon text-color-white hover:text-black glass border border-border/60"
                : "glass border border-border/60"
            }
          >
            {f}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2" data-mobile-optimized>
        {list.map((p, idx) => (
          <TiltCard key={p.title} className="rounded-2xl card-gradient-border">
            <motion.a
              href={p.href}
              target={p.href ? "_blank" : undefined}
              rel={p.href ? "noopener noreferrer" : undefined}
              className="group block overflow-hidden rounded-2xl glass border border-border/60"
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: isMobile ? 0.05 : 0.4 }}
              transition={{
                duration: isMobile ? 0.05 : 0.5,
                delay: isMobile ? 0 : idx * 0.06,
              }}
            >
              <div className="relative">
                <Image
                  src={p.img.startsWith("/") ? p.img : `/${p.img}.jpg`}
                  alt={`${p.title} preview`}
                  width={640}
                  height={360}
                  className="aspect-video w-full object-contain"
                />
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ${
                    isMobile ? "" : "group-hover:opacity-20"
                  } gradient-brand`}
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-2xs glass px-2 py-1 rounded-md border border-border/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.a>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}
