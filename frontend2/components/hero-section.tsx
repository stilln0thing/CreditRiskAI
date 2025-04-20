"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const bars = chartRef.current.querySelectorAll(".bar")
      bars.forEach((bar, index) => {
        const height = 20 + Math.random() * 80
        ;(bar as HTMLElement).style.setProperty("--height", `${height}%`)
      })
    }
  }, [])

  return (
    <div className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient with animated particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-emerald-900/20 z-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-emerald-500/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
              Credit Risk Assessment
              <span className="block mt-2">for Everyone</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Our AI-powered platform helps evaluate credit risk for individuals with limited credit history, using
              alternative data points to provide fair and accurate assessments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#risk-form"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium py-3 px-8 rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
              >
                Get Started <ArrowRight size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#info"
                className="inline-flex items-center gap-2 bg-transparent border border-emerald-500/30 text-emerald-400 font-medium py-3 px-8 rounded-full transition-all hover:bg-emerald-500/10"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] w-full max-w-[500px] mx-auto lg:ml-auto"
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10"></div>
            <div className="absolute inset-0 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-emerald-400">
                  <BarChart3 className="h-5 w-5" />
                  <span className="font-medium">Credit Risk Analytics</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="flex-1 flex items-end justify-between gap-1 pb-6" ref={chartRef}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="relative flex-1 flex flex-col items-center">
                    <div
                      className="bar w-full bg-gradient-to-t from-emerald-500 to-teal-300 rounded-t-sm opacity-80"
                      style={{
                        height: "0%",
                        animation: "rise 1.5s ease-out forwards",
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                    <div className="mt-2 text-xs text-gray-400">{i + 1}</div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs text-gray-400">Risk Score Trend</span>
                </div>
                <div className="text-xs text-gray-400">Last 12 Months</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  )
}
