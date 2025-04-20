"use client"

import { motion } from "framer-motion"
import { AlertCircle, CheckCircle, XCircle } from "lucide-react"
import { RiskAnalysisChart } from "@/components/risk-analysis-chart"

interface ResultDisplayProps {
  result: {
    risk: string
    explanation: string
  }
}

export function ResultDisplay({ result }: ResultDisplayProps) {
  const isLowRisk = result.risk.toLowerCase().includes("low")
  const isHighRisk = result.risk.toLowerCase().includes("high")

  const getGradient = () => {
    if (isLowRisk) return "from-emerald-500/20 to-green-500/20 border-emerald-500/30"
    if (isHighRisk) return "from-red-500/20 to-orange-500/20 border-red-500/30"
    return "from-yellow-500/20 to-amber-500/20 border-yellow-500/30"
  }

  const getIcon = () => {
    if (isLowRisk) return <CheckCircle className="h-8 w-8 text-emerald-400" />
    if (isHighRisk) return <XCircle className="h-8 w-8 text-red-400" />
    return <AlertCircle className="h-8 w-8 text-amber-400" />
  }

  const getTextColor = () => {
    if (isLowRisk) return "text-emerald-400"
    if (isHighRisk) return "text-red-400"
    return "text-amber-400"
  }

  // Generate mock data for the chart based on risk level
  const generateChartData = () => {
    if (isLowRisk) {
      return {
        income: 85,
        assets: 80,
        loanAmount: 65,
        loanTerm: 75,
        creditHistory: 90,
        paymentBehavior: 85,
      }
    } else if (isHighRisk) {
      return {
        income: 40,
        assets: 35,
        loanAmount: 85,
        loanTerm: 60,
        creditHistory: 30,
        paymentBehavior: 45,
      }
    } else {
      return {
        income: 60,
        assets: 55,
        loanAmount: 70,
        loanTerm: 65,
        creditHistory: 60,
        paymentBehavior: 65,
      }
    }
  }

  const chartData = generateChartData()

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`backdrop-blur-lg bg-gradient-to-br ${getGradient()} rounded-2xl p-6 border`}
      >
        <div className="flex items-start gap-4">
          <div className="bg-black/30 rounded-xl p-3 backdrop-blur-sm">{getIcon()}</div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Prediction Result</h3>
            <p className={`text-2xl font-bold ${getTextColor()}`}>{result.risk}</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
            AI Reasoning
          </h3>
          <div className="bg-black/30 p-5 rounded-xl border border-white/5">
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">{result.explanation}</p>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <h4 className="text-lg font-medium mb-3 text-white">What This Means For You</h4>
            <ul className="space-y-3">
              {isLowRisk ? (
                <>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-gray-300">You may qualify for better interest rates on loans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-gray-300">Consider exploring credit-building opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-gray-300">Maintain your positive financial behaviors</span>
                  </li>
                </>
              ) : isHighRisk ? (
                <>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-red-400"></div>
                    </div>
                    <span className="text-gray-300">Focus on improving your payment consistency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-red-400"></div>
                    </div>
                    <span className="text-gray-300">Consider financial counseling services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-red-400"></div>
                    </div>
                    <span className="text-gray-300">Explore microfinance options designed for credit building</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                    </div>
                    <span className="text-gray-300">Work on consistency in your financial behaviors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                    </div>
                    <span className="text-gray-300">Consider secured credit options to build your history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                    </div>
                    <span className="text-gray-300">Track your expenses to improve financial stability</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
            Risk Analysis Breakdown
          </h3>
          <div className="h-[350px] flex items-center justify-center">
            <RiskAnalysisChart data={chartData} />
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <h4 className="text-lg font-medium mb-3 text-white">Key Risk Factors</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Income to Loan Ratio</span>
                  <span
                    className={`font-medium ${isLowRisk ? "text-emerald-400" : isHighRisk ? "text-red-400" : "text-amber-400"}`}
                  >
                    {isLowRisk ? "Strong" : isHighRisk ? "Weak" : "Moderate"}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${isLowRisk ? "bg-emerald-500" : isHighRisk ? "bg-red-500" : "bg-amber-500"}`}
                    style={{ width: `${isLowRisk ? "80%" : isHighRisk ? "40%" : "60%"}` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Asset Coverage</span>
                  <span
                    className={`font-medium ${isLowRisk ? "text-emerald-400" : isHighRisk ? "text-red-400" : "text-amber-400"}`}
                  >
                    {isLowRisk ? "Excellent" : isHighRisk ? "Limited" : "Adequate"}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${isLowRisk ? "bg-emerald-500" : isHighRisk ? "bg-red-500" : "bg-amber-500"}`}
                    style={{ width: `${isLowRisk ? "85%" : isHighRisk ? "35%" : "55%"}` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Loan Term Suitability</span>
                  <span
                    className={`font-medium ${isLowRisk ? "text-emerald-400" : isHighRisk ? "text-red-400" : "text-amber-400"}`}
                  >
                    {isLowRisk ? "Optimal" : isHighRisk ? "Concerning" : "Fair"}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${isLowRisk ? "bg-emerald-500" : isHighRisk ? "bg-red-500" : "bg-amber-500"}`}
                    style={{ width: `${isLowRisk ? "75%" : isHighRisk ? "45%" : "65%"}` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
