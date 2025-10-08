"use client"

import type React from "react"

import { type ReactNode, useRef } from "react"

export default function TiltCard({
  children,
  className = "",
  max = 10,
}: {
  children: ReactNode
  className?: string
  max?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * -2 * max
    const ry = (px - 0.5) * 2 * max
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
  }
  const onLeave = () => {
    const el = ref.current!
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg)`
  }
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transformStyle: "preserve-3d", transition: "transform 180ms ease" }}
    >
      {children}
    </div>
  )
}
