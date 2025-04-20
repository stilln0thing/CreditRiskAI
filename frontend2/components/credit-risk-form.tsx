"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, ArrowRight, RefreshCw, DollarSign, PoundSterling, Euro, JapaneseYenIcon as Yen } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { predictRisk } from "@/lib/actions"
import { ResultDisplay } from "@/components/result-display"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CreditRiskForm() {
  const [noDependents, setNoDependents] = useState(1)
  const [selfEmployed, setSelfEmployed] = useState(" No")
  const [incomeAnnum, setIncomeAnnum] = useState(9600000)
  const [loanAmount, setLoanAmount] = useState(29900000)
  const [loanTerm, setLoanTerm] = useState(12)
  const [residentialAssetsValue, setResidentialAssetsValue] = useState(2400000)
  const [commercialAssetsValue, setCommercialAssetsValue] = useState(17600000)
  const [luxuryAssetsValue, setLuxuryAssetsValue] = useState(22700000)
  const [bankAssetValue, setBankAssetValue] = useState(8000000)
  const [currency, setCurrency] = useState("₹")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ risk: string; explanation: string } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const prediction = await predictRisk({
        no_of_dependents: noDependents,
        self_employed: selfEmployed,
        income_annum: incomeAnnum,
        loan_amount: loanAmount,
        loan_term: loanTerm,
        residential_assets_value: residentialAssetsValue,
        commercial_assets_value: commercialAssetsValue,
        luxury_assets_value: luxuryAssetsValue,
        bank_asset_value: bankAssetValue,
      })

      setResult(prediction)
    } catch (err) {
      setError("Failed to get prediction. Please try again later.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setResult(null)
  }

  const getCurrencyIcon = () => {
    switch (currency) {
      case "$":
        return <DollarSign className="h-4 w-4" />
      case "£":
        return <PoundSterling className="h-4 w-4" />
      case "€":
        return <Euro className="h-4 w-4" />
      case "¥":
        return <Yen className="h-4 w-4" />
      default:
        return currency
    }
  }

  return (
    <div id="risk-form">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/5"
      >
        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
            Credit Risk Assessment
          </h2>
          <p className="text-gray-400 mb-8">
            Enter your information below to receive an AI-powered credit risk evaluation
          </p>

          <div className="mb-6 flex justify-end">
            <div className="flex items-center gap-2">
              <Label htmlFor="currency" className="text-gray-300">
                Currency:
              </Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="w-24 bg-gray-800/50 border-gray-700 text-white focus:border-emerald-500 focus:ring-emerald-500/20">
                  <SelectValue placeholder="₹" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="₹">₹ INR</SelectItem>
                  <SelectItem value="$">$ USD</SelectItem>
                  <SelectItem value="€">€ EUR</SelectItem>
                  <SelectItem value="£">£ GBP</SelectItem>
                  <SelectItem value="¥">¥ JPY</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!result ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="noDependents" className="text-gray-300">
                      Number of Dependents
                    </Label>
                    <Input
                      id="noDependents"
                      type="number"
                      value={noDependents}
                      onChange={(e) => setNoDependents(Number(e.target.value))}
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-emerald-500 focus:ring-emerald-500/20"
                      min={0}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-gray-300">Self Employed</Label>
                    <div className="flex gap-4">
                      {[
                        { value: " Yes", label: "Yes" },
                        { value: " No", label: "No" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setSelfEmployed(option.value)}
                          className={`flex-1 py-3 px-4 rounded-xl transition-all ${
                            selfEmployed === option.value
                              ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300"
                              : "bg-gray-800/50 border border-gray-700 text-gray-400 hover:bg-gray-800"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="incomeAnnum" className="text-gray-300">
                      Annual Income
                    </Label>
                    <div className="relative">
                      <Input
                        id="incomeAnnum"
                        type="number"
                        value={incomeAnnum}
                        onChange={(e) => setIncomeAnnum(Number(e.target.value))}
                        className="bg-gray-800/50 border-gray-700 text-white focus:border-emerald-500 focus:ring-emerald-500/20 pl-8"
                        min={0}
                        required
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        {getCurrencyIcon()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="loanAmount" className="text-gray-300">
                      Loan Amount
                    </Label>
                    <div className="relative">
                      <Input
                        id="loanAmount"
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="bg-gray-800/50 border-gray-700 text-white focus:border-emerald-500 focus:ring-emerald-500/20 pl-8"
                        min={0}
                        required
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        {getCurrencyIcon()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="loanTerm" className="text-gray-300">
                      Loan Term (months)
                    </Label>
                    <Input
                      id="loanTerm"
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-emerald-500 focus:ring-emerald-500/20"
                      min={1}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="residentialAssetsValue" className="text-gray-300">
                      Residential Assets Value
                    </Label>
                    <div className="relative">
                      <Input
                        id="residentialAssetsValue"
                        type="number"
                        value={residentialAssetsValue}
                        onChange={(e) => setResidentialAssetsValue(Number(e.target.value))}
                        className="bg-gray-800/50 border-gray-700 text-white focus:border-emerald-500 focus:ring-emerald-500/20 pl-8"
                        min={0}
                        required
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        {getCurrencyIcon()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="commercialAssetsValue" className="text-gray-300">
                      Commercial Assets Value
                    </Label>
                    <div className="relative">
                      <Input
                        id="commercialAssetsValue"
                        type="number"
                        value={commercialAssetsValue}
                        onChange={(e) => setCommercialAssetsValue(Number(e.target.value))}
                        className="bg-gray-800/50 border-gray-700 text-white focus:border-emerald-500 focus:ring-emerald-500/20 pl-8"
                        min={0}
                        required
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        {getCurrencyIcon()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="luxuryAssetsValue" className="text-gray-300">
                      Luxury Assets Value
                    </Label>
                    <div className="relative">
                      <Input
                        id="luxuryAssetsValue"
                        type="number"
                        value={luxuryAssetsValue}
                        onChange={(e) => setLuxuryAssetsValue(Number(e.target.value))}
                        className="bg-gray-800/50 border-gray-700 text-white focus:border-emerald-500 focus:ring-emerald-500/20 pl-8"
                        min={0}
                        required
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        {getCurrencyIcon()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="bankAssetValue" className="text-gray-300">
                      Bank Asset Value
                    </Label>
                    <div className="relative">
                      <Input
                        id="bankAssetValue"
                        type="number"
                        value={bankAssetValue}
                        onChange={(e) => setBankAssetValue(Number(e.target.value))}
                        className="bg-gray-800/50 border-gray-700 text-white focus:border-emerald-500 focus:ring-emerald-500/20 pl-8"
                        min={0}
                        required
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        {getCurrencyIcon()}
                      </span>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium py-4 px-6 rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Predict Risk with AI Reasoning
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </motion.button>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl">{error}</div>
                )}
              </motion.form>
            ) : (
              <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ResultDisplay result={result} />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={resetForm}
                  className="mt-8 w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-4 px-6 rounded-xl transition-all border border-gray-700 flex items-center justify-center"
                >
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Start New Assessment
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
