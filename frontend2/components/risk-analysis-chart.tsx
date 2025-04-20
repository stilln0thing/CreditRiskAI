"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface RiskAnalysisChartProps {
  data: {
    income: number
    assets: number
    loanAmount: number
    loanTerm: number
    creditHistory: number
    paymentBehavior: number
  }
}

export function RiskAnalysisChart({ data }: RiskAnalysisChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Chart settings
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const radius = Math.min(centerX, centerY) * 0.8

    // Draw radar chart background
    const sides = 6 // Hexagon for 6 data points
    const angle = (Math.PI * 2) / sides

    // Draw background grid
    const gridLevels = 5
    for (let level = 1; level <= gridLevels; level++) {
      const levelRadius = (radius * level) / gridLevels
      ctx.beginPath()
      for (let i = 0; i < sides; i++) {
        const x = centerX + levelRadius * Math.cos(angle * i - Math.PI / 2)
        const y = centerY + levelRadius * Math.sin(angle * i - Math.PI / 2)
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.stroke()
    }

    // Draw axis lines
    for (let i = 0; i < sides; i++) {
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      const x = centerX + radius * Math.cos(angle * i - Math.PI / 2)
      const y = centerY + radius * Math.sin(angle * i - Math.PI / 2)
      ctx.lineTo(x, y)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.stroke()

      // Draw axis labels
      const labelRadius = radius + 15
      const labelX = centerX + labelRadius * Math.cos(angle * i - Math.PI / 2)
      const labelY = centerY + labelRadius * Math.sin(angle * i - Math.PI / 2)
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
      ctx.font = "12px Inter, sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      const labels = ["Income", "Assets", "Loan Amount", "Loan Term", "Credit History", "Payment Behavior"]
      ctx.fillText(labels[i], labelX, labelY)
    }

    // Draw data
    const dataPoints = [
      data.income,
      data.assets,
      data.loanAmount,
      data.loanTerm,
      data.creditHistory,
      data.paymentBehavior,
    ]

    // Draw data polygon
    ctx.beginPath()
    for (let i = 0; i < sides; i++) {
      const value = dataPoints[i] / 100 // Normalize to 0-1
      const pointRadius = radius * value
      const x = centerX + pointRadius * Math.cos(angle * i - Math.PI / 2)
      const y = centerY + pointRadius * Math.sin(angle * i - Math.PI / 2)
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
    ctx.fillStyle = "rgba(16, 185, 129, 0.2)" // Emerald color with transparency
    ctx.fill()
    ctx.strokeStyle = "rgba(16, 185, 129, 0.8)"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw data points
    for (let i = 0; i < sides; i++) {
      const value = dataPoints[i] / 100
      const pointRadius = radius * value
      const x = centerX + pointRadius * Math.cos(angle * i - Math.PI / 2)
      const y = centerY + pointRadius * Math.sin(angle * i - Math.PI / 2)

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(16, 185, 129, 1)"
      ctx.fill()
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)"
      ctx.lineWidth = 1
      ctx.stroke()
    }
  }, [data])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full h-full flex items-center justify-center"
    >
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </motion.div>
  )
}
