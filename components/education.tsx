"use client"

import Section from "./section"
import TiltCard from "./tilt-card"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Education() {
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
    <Section id="education" title="Education" className="scroll-mt-24">
      <TiltCard className="rounded-2xl card-gradient-border">
        <motion.div
          className="glass rounded-2xl p-6 border border-border/60"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.5 }}
          transition={{ duration: isMobile ? 0.1 : 0.5 }}
        >
            <div className="flex items-center gap-4">
            <Image src="/icons/srm.png" alt="SRM Institute logo" className="h-16 w-16 rounded-xl object-cover" width={64} height={64} />
            <div>
              <h3 className="text-lg font-semibold">SRM Institute of Science and Technology</h3>
              <p className="text-sm text-muted-foreground">B.Tech in Computer Science and Engineering with Specialization in Big Data Analytics</p>
            </div>
            </div>
          <div className="mt-4 grid gap-1 text-sm text-muted-foreground">
            <p>GPA: 9.77 CGPA</p>
            <p>Focus: Scalable systems, data pipelines, and full-stack engineering</p>
          </div>
        </motion.div>
      </TiltCard>

      <div className="mt-6">
        <TiltCard className="rounded-2xl card-gradient-border">
          <motion.div
            className="glass rounded-2xl p-6 border border-border/60"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <Image src="/icons/vvs.jpg" alt="School logo" className="h-12 w-12 rounded-lg object-cover" width={48} height={48} />
              <div>
              <h3 className="text-base font-semibold">Valley View School</h3>
              <p className="text-sm text-muted-foreground">
                Senior Secondary, Pure Science with Computer Science & English
              </p>
              <p className="text-sm text-muted-foreground">Percentage : 85.2 %</p>
              </div>
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </Section>
  )
}
