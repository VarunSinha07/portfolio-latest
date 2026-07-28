"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "PrakSat",
    desc: "A scalable multi-tenant air quality forecasting SaaS platform with role-based access control, credits-based API monetization, and interactive time-series dashboards.",
    href: "https://drive.google.com/file/d/1VgOs2-xuNvw_hiDEwBo4DXouJeeAfh3P/view?usp=sharing",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis"],
    img: "/projects/praksat.jpg",
    award: "SIH 2025 ISRO TOP 5 FINALIST",
    awardBadgeColor: "text-rose-400 border-rose-500/40 bg-black/85 shadow-[0_0_14px_rgba(244,63,94,0.4)]",
  },
  {
    title: "Zit",
    desc: "A terminal-based AI Git assistant built with an interactive TUI, enabling real-time debugging, workflow automation, and intelligent developer assistance.",
    href: "https://zit-aws.vercel.app/",
    tags: ["Rust", "Git", "AWS Lambda", "Amazon Bedrock"],
    img: "/projects/zit.png",
    award: "AWS AI HACKATHON 2ND RUNNER-UP",
    awardBadgeColor: "text-amber-400 border-amber-500/40 bg-black/85 shadow-[0_0_14px_rgba(245,158,11,0.4)]",
  },
  {
    title: "VyaparFlow",
    desc: "A multi-tenant SaaS platform that streamlines procurement and vendor payment workflows for Indian MSMEs with role-based approvals, invoice verification, audit logs, and secure Razorpay payment integration.",
    href: "https://vyaparflow.vercel.app/",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Tailwind CSS", "jwt", "Razorpay"],
    img: "/projects/vyaparflow.png",
  },
  {
    title: "StudentOS",
    desc: "An AI-powered productivity platform that brings task management, note-taking, study planning, and focus sessions into a desktop-like workspace designed for students.",
    href: "https://studentos-varun.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "jwt"],
    img: "/projects/studentos.png",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll(".project-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 55 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 border-t border-white/5 bg-[#000000] scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        
        {/* Section Header */}
        <div className="mb-16 space-y-2 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-accent">
            [ SELECTED PROJECTS ]
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase font-sans">
            Portfolio Works
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((proj) => (
            <a
              key={proj.title}
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group flex flex-col rounded-xl bg-zinc-950/40 border border-white/5 hover:border-brand/40 transition-all duration-300 relative overflow-hidden shadow-2xl"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-white/5">
                <Image
                  src={proj.img}
                  alt={`${proj.title} Preview`}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                {/* Monochromatic Overlay */}
                <div className="absolute inset-0 bg-black/40 mix-blend-color group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Glowing Hackathon Award Badge Float */}
                {proj.award && (
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${proj.awardBadgeColor}`}
                    >
                      <span>🏆</span>
                      <span>{proj.award}</span>
                    </span>
                  </div>
                )}

                {/* External Link Float */}
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/80 border border-white/10 text-zinc-400 group-hover:text-brand transition-colors duration-300">
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>

              {/* Text Information */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-white font-sans flex items-center justify-between">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm font-mono text-zinc-400 leading-relaxed flex-grow">
                  {proj.desc}
                </p>

                {/* Monospace tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded bg-zinc-900 border border-white/5 text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
