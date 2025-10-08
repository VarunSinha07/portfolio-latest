"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

export default function CursorHalo() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const smoothX = useSpring(x, { stiffness: 200, damping: 25, mass: 0.6 })
  const smoothY = useSpring(y, { stiffness: 200, damping: 25, mass: 0.6 })

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener("pointermove", handle)
    return () => window.removeEventListener("pointermove", handle)
  }, [x, y])

  return <motion.div className="cursor-halo" style={{ x: smoothX, y: smoothY }} />
}
