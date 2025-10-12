"use client"

import Section from "./section"
import { motion } from "framer-motion"
import { Brain, Binary, Workflow } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"


export default function About() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <Section id="about" title="About Me" className="scroll-mt-24">
      <div className="grid gap-8">
        <motion.div
          className="glass rounded-2xl p-6 border border-border/60"
          initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.6 }}
          transition={{ duration: isMobile ? 0.1 : 0.6 }}
        >
          <p className="text-pretty leading-relaxed text-muted-foreground">
            👋 Hi, I’m Varun Sinha, a Full Stack Developer and third-year Computer Science and Engineering student (Batch of 2027). I love building responsive, high-performance web applications that blend great design with solid engineering.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            I specialize in crafting scalable full-stack architectures, optimizing user experiences, and delivering feature-rich, impactful solutions. With a strong foundation in Data Structures and Algorithms, I enjoy solving complex challenges and continuously learning new technologies to create meaningful digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.4 }}
          transition={{ duration: isMobile ? 0.1 : 0.6 }}
          className="glass rounded-2xl p-6 border border-border/60"
        >
          <h3 className="text-lg font-semibold tracking-tight mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <SkillTile name="C++" img="/icons/cpp.jpg" />
            <SkillTile name="TypeScript" img="/icons/typescript.png" />
            <SkillTile name="JavaScript" img="/icons/javascript.png" />
            <SkillTile name="React.js" img="/icons/react.jpg" />
            <SkillTile name="HTML5" img="/icons/html.png" />
            <SkillTile name="CSS" img="/icons/css3.png" />
            <SkillTile name="Next.js" img="/icons/nextjs.png" />
            <SkillTile name="Tailwind CSS" img="/icons/tailwind.png" />
            <SkillTile name="Node.js" img="/icons/node.png" />
            <SkillTile name="Express.js" img="/icons/express.png" />
            <SkillTile name="SQL (PostgreSQL)" img="/icons/postgres.png" />
            <SkillTile name="NoSQL (MongoDB)" img="/icons/mongodb.png" />
            <SkillTile name="Object-Oriented Design" img="/icons/oop.png" />
            <SkillTile name="Data Structures" iconClass="Binary" />
            <SkillTile name="Problem Solving" iconClass="Brain" />
            <SkillTile name="Agile Methodologies" iconClass="Workflow" />
            <SkillTile name="Git (Version Control)" img="/icons/git.png" />
            <SkillTile name="Docker" img="/icons/docker.png" />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function SkillTile({
  name,
  img,
  iconClass,
}: { name: string; img?: string; iconClass?: | "Binary" | "Brain" | "Workflow" }) {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <motion.div
      className="group flex flex-col items-center gap-2"
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
      transition={{ duration: isMobile ? 0.1 : 0.35 }}
      whileHover={isMobile ? {} : { scale: 1.04, y: -2 }}
    >
      <div className="rounded-full h-16 w-16 grid place-items-center bg-background/40 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] ring-0 group-hover:ring-2 group-hover:ring-neon transition will-change-transform group-hover:-translate-y-0.5">
        {img ? (
          <Image
            src={img}
            alt={name}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
        ) : iconClass === "Binary" ? (
          <Binary className="h-6 w-6" />
        ) : iconClass === "Brain" ? (
          <Brain className="h-6 w-6" />
        ) : (
          <Workflow className="h-6 w-6" />
        )}
      </div>
      <div className="text-xs text-center text-muted-foreground">{name}</div>
    </motion.div>
  )
}
