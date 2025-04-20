"use client"

import { motion } from "framer-motion"
import { Shield, TrendingUp, Users, Lightbulb } from "lucide-react"

export function InfoSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section id="info" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
            Credit Risk Management for Underserved Communities
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Traditional credit scoring systems often overlook individuals with limited credit history. Our platform uses
            alternative data points to provide fair and accurate assessments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Users className="h-8 w-8 text-emerald-400" />,
              title: "Inclusive Assessment",
              description:
                "Our platform considers non-traditional factors that matter for those without extensive credit history.",
            },
            {
              icon: <Shield className="h-8 w-8 text-emerald-400" />,
              title: "Fair Evaluation",
              description:
                "We use AI to eliminate bias and provide equitable credit risk assessments for all individuals.",
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-emerald-400" />,
              title: "Build Credit History",
              description:
                "Learn how small financial behaviors can help you build a positive credit profile over time.",
            },
            {
              icon: <Lightbulb className="h-8 w-8 text-emerald-400" />,
              title: "Financial Education",
              description: "Access resources to understand credit risk and improve your financial literacy.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="bg-gray-800/50 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-emerald-900/30 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Why Credit Risk Matters</h3>
              <p className="text-gray-300 mb-6">
                Understanding your credit risk profile is essential for financial inclusion. It affects your ability to:
              </p>
              <ul className="space-y-3">
                {[
                  "Access loans and credit cards at fair interest rates",
                  "Secure housing through mortgage or rental applications",
                  "Qualify for business financing and entrepreneurial opportunities",
                  "Build long-term financial stability and wealth",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-purple-500/20 animate-gradient"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">78%</div>
                  <div className="text-emerald-300 font-medium">of underserved individuals</div>
                  <div className="text-gray-400 mt-2 max-w-xs mx-auto">
                    lack access to fair credit assessment, limiting their financial opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
