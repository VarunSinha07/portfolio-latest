"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Achievements from "@/components/achievements";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SocialDock from "@/components/social-dock";

export default function HomePage() {
  const ref = useRef<HTMLDivElement | null>(null);
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // Reduce parallax effect on mobile for better performance
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? -40 : -120]
  );

  return (
    <main
      ref={ref}
      className="relative min-h-screen bg-background text-foreground"
    >
      {!isMobile && (
        <motion.div
          style={{ y: parallaxY }}
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
        >
          <div className="absolute inset-0 gradient-brand opacity-20 blur-3xl" />
        </motion.div>
      )}
      {isMobile && (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 gradient-brand opacity-10 blur-2xl" />
        </div>
      )}

      <Navbar />
      <SocialDock
        linkedin="https://www.linkedin.com/in/varunsinha20/"
        github="https://github.com/VarunSinha07"
        leetcode="https://leetcode.com/u/varunsinha07/"
        email="mailto:varunsinha2604@gmail.com"
      />

      <Hero />

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 space-y-24 md:space-y-36">
        <About />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
      </div>

      <Footer />
    </main>
  );
}
