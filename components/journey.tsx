"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const JOURNEY_ITEMS = [
  {
    type: "achievement",
    role: "2nd Runner-Up",
    org: "AWS AI for Bharat Hackathon",
    date: "April 2026",
    description: "Built and deployed scalable generative AI solutions using AWS Bedrock and Serverless pipelines, winning 2nd runner-up nationally.",
  },
  {
    type: "achievement",
    role: "Top 5 Finalist",
    org: "Smart India Hackathon 2025 for ISRO",
    date: "Dec 2025",
    description: "Developed satellite imagery parsing microservices and parallel processing pipelines for geo-spatial classification at ISRO.",
  },
  {
    type: "experience",
    role: "Backend Developer Intern",
    org: "SAARC MASTS TECH PVT LTD",
    date: "June 2025 - Sept 2025",
    description: "Engineered telemetry microservices, refactored bottleneck endpoints to cut response latency by 35%, and optimized PostgreSQL queries.",
  },
  {
    type: "experience",
    role: "Full Stack Developer Intern",
    org: "IFIA Bharat Chapter",
    date: "Dec 2024 - Mar 2025",
    description: "Led full-stack development of the official platform, reducing page load times by 50% through SSR and automated CI/CD releases.",
  },
  {
    type: "achievement",
    role: "1st Runner Up",
    org: "Full Stack Development Hackathon @VIT Chennai",
    date: "Sept 2024",
    description: "Developed a full-stack application that helps students to find their best possible mentor for their specific needs.",
  },
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Smooth draw-down animation of vertical line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
              end: "bottom 75%",
              scrub: 0.8, // Snappy & responsive scroll tracking
            },
          }
        );
      }

      // 2. Staggered node animations
      const nodes = containerRef.current?.querySelectorAll(".timeline-node");
      if (nodes) {
        nodes.forEach((node) => {
          const cardContent = node.querySelector(".timeline-card-content");
          const dot = node.querySelector(".timeline-dot");
          const isLeft = node.classList.contains("timeline-left");

          // Animate Dot scaling up springily (independent of position coordinates)
          if (dot) {
            gsap.fromTo(
              dot,
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.5)",
                scrollTrigger: {
                  trigger: node,
                  start: "top 92%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // Animate Card with hardware-accelerated transforms (no blurs for silky smooth rendering)
          if (cardContent) {
            const isMobile = window.innerWidth < 768;
            const xOffset = isMobile ? 25 : (isLeft ? -40 : 40);
            const rotateYVal = isMobile ? 2 : (isLeft ? 8 : -8);

            gsap.fromTo(
              cardContent,
              {
                opacity: 0,
                x: xOffset,
                rotateY: rotateYVal,
                scale: 0.97,
                transformPerspective: 1000,
              },
              {
                opacity: 1,
                x: 0,
                rotateY: 0,
                scale: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: node,
                  start: "top 90%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="py-24 border-t border-white/5 bg-[#000000] relative overflow-hidden scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        
        {/* Section Header */}
        <div className="mb-16 space-y-2 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-accent">
            [ HISTORY ]
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase font-sans">
            The Journey
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative mt-12 md:mt-20">
          
          {/* Vertical central line (static base - centered using precise negative margins to avoid GSAP scale conflicts) */}
          <div className="absolute left-4 -ml-[1px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-zinc-800 pointer-events-none" />
          
          {/* Animated Glowing Gradient Line overlay (solid gradient, no thickness loss) */}
          <div
            ref={lineRef}
            className="absolute left-4 -ml-[1px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent to-brand origin-top pointer-events-none"
          />

          {/* Timeline Nodes */}
          <div className="space-y-16 md:space-y-24 relative">
            {JOURNEY_ITEMS.map((item, index) => {
              const isEven = index % 2 === 0;
              const isExperience = item.type === "experience";
              
              const themeColorClass = isExperience ? "text-brand" : "text-accent";
              const dotBorderClass = isExperience 
                ? "border-brand shadow-[0_0_8px_rgba(34,197,94,0.4)]" 
                : "border-accent shadow-[0_0_8px_rgba(239,68,68,0.4)]";
              const hoverShadowClass = isExperience 
                ? "hover:shadow-[0_0_30px_rgba(34,197,94,0.12)] hover:border-brand/30" 
                : "hover:shadow-[0_0_30px_rgba(239,68,68,0.12)] hover:border-accent/30";

              return (
                <div
                  key={index}
                  data-type={item.type}
                  className={`timeline-node group relative flex flex-col md:flex-row items-start w-full ${
                    isEven ? "timeline-left" : "timeline-right"
                  }`}
                >
                  {/* Central Node Dot (aligned perfectly with top-7, centered using negative margins to avoid GSAP conflicts) */}
                  <div className="absolute left-4 -ml-[7px] md:left-1/2 md:-ml-[7px] top-7 z-20 flex items-center justify-center h-3.5 w-3.5 pointer-events-none">
                    <div
                      className={`timeline-dot h-3.5 w-3.5 rounded-full bg-black border-2 ${dotBorderClass} pointer-events-auto`}
                    />
                  </div>

                  {/* Desktop Alternating Layout */}
                  <div className="flex flex-col md:flex-row w-full justify-between items-start">
                    
                    {/* Left Panel */}
                    <div
                      className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                        isEven ? "md:text-right md:order-1" : "md:order-3 invisible md:block pointer-events-none"
                      }`}
                    >
                      {isEven && (
                        <div className={`timeline-card-content p-6 rounded-xl bg-zinc-950/20 hover:bg-zinc-950/40 border border-white/5 ${hoverShadowClass} transition-all duration-300 text-left md:text-right relative`}>
                          <div className={`text-xs font-mono mb-2 ${themeColorClass} tracking-wider`}>
                            {item.date}
                          </div>
                          <h3 className="text-xl font-bold text-white font-sans tracking-tight mb-1">
                            {item.role}
                          </h3>
                          <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-4">
                            {item.org}
                          </div>
                          <p className="text-sm font-sans font-light text-zinc-400 leading-relaxed max-w-lg md:ml-auto">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Spacer / central alignment */}
                    <div className="hidden md:block w-[10%] order-2" />

                    {/* Right Panel */}
                    <div
                      className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                        !isEven ? "md:text-left md:order-3" : "md:order-1 invisible md:block pointer-events-none"
                      }`}
                    >
                      {!isEven && (
                        <div className={`timeline-card-content p-6 rounded-xl bg-zinc-950/20 hover:bg-zinc-950/40 border border-white/5 ${hoverShadowClass} transition-all duration-300 text-left relative`}>
                          <div className={`text-xs font-mono mb-2 ${themeColorClass} tracking-wider`}>
                            {item.date}
                          </div>
                          <h3 className="text-xl font-bold text-white font-sans tracking-tight mb-1">
                            {item.role}
                          </h3>
                          <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-4">
                            {item.org}
                          </div>
                          <p className="text-sm font-sans font-light text-zinc-400 leading-relaxed max-w-lg">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
