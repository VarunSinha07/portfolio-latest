"use client";
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

  return (
    <main className="relative min-h-screen bg-background text-foreground"
    >


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
