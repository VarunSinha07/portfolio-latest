"use client";

import Section from "./section";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import TiltCard from "./tilt-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Project = {
  title: string;
  desc: string;
  href?: string;
  tags: ("Frontend" | "Backend" | "Full Stack")[];
  img: string;
};

const projects: Project[] = [
  {
    title: "BioVerse - Biotech Startup Incubator",
    desc: "Incubation platform for biotech startups: onboarding, mentorship, and resource tracking.",
    href: "https://bio-verse.vercel.app/",
    tags: ["Full Stack"],
    img: "/projects/bioverse.png",
  },
  {
    title: "Media Nexus - Digital Asset Manager",
    desc: "Full-stack app for SRM Group to manage media assets, approvals, and publishing workflow.",
    href: "https://media-nexus.vercel.app/",
    tags: ["Full Stack"],
    img: "/projects/media-nexus-logo.png",
  },
  {
    title: "EventHub - College Event Platform",
    desc: "Hackathon project: event creation, registration, scheduling, team collab. Runner-up (TechnoVIT).",
    href: "https://go-fest.vercel.app/",
    tags: ["Backend", "Frontend", "Full Stack"],
    img: "/projects/gofest.jpeg",
  },
];

const filters = ["All", "Frontend", "Backend", "Full Stack"] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const list = useMemo(
    () =>
      projects.filter(
        (p) =>
          active === "All" ||
          p.tags.includes(active as "Frontend" | "Backend" | "Full Stack")
      ),
    [active]
  );

  return (
    <Section id="projects" title="Projects" className="scroll-mt-24">
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

      <div className="grid gap-6 md:grid-cols-2">
        {list.map((p, idx) => (
          <TiltCard key={p.title} className="rounded-2xl card-gradient-border">
        <motion.a
          href={p.href}
          target={p.href ? "_blank" : undefined}
          rel={p.href ? "noopener noreferrer" : undefined}
          className="group block overflow-hidden rounded-2xl glass border border-border/60"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: idx * 0.06 }}
        >
          <div className="relative">
            <Image
          src={p.img.startsWith('/') ? p.img : `/${p.img}.jpg`}
          alt={`${p.title} preview`}
          width={640}
          height={360}
          className="aspect-video w-full object-contain"
            />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20 gradient-brand" />
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
