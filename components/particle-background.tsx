"use client"

import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animRef = useRef<number | null>(null)
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number }[]>([])

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const count = Math.min(90, Math.floor((w * h) / 25000))
    particlesRef.current = new Array(count).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", onResize)

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const pts = particlesRef.current
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }

      // connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i],
            b = pts[j]
          const dx = a.x - b.x,
            dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < 16000) {
            const alpha = 1 - d2 / 16000
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
            grad.addColorStop(0, `oklch(0.85 0.2 205 / ${alpha})`)
            grad.addColorStop(1, `oklch(0.80 0.25 306 / ${alpha})`)
            ctx.strokeStyle = grad
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // points
      for (const p of pts) {
        ctx.fillStyle = "oklch(0.92 0.22 205 / 0.85)"
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2)
        ctx.fill()
        // glow
        ctx.shadowColor = "oklch(0.85 0.24 306 / 0.5)"
        ctx.shadowBlur = 6
      }
      ctx.shadowBlur = 0

      animRef.current = requestAnimationFrame(draw)
    }
    animRef.current = requestAnimationFrame(draw)
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return <canvas aria-hidden ref={canvasRef} className="fixed inset-0 -z-10 opacity-60" />
}
