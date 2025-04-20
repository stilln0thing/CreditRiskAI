import Link from "next/link"
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FinancialLiteracyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/resources">
            <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>

          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/5 mb-12">
            <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-8 md:p-12 border-b border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-black/30 rounded-xl p-3 backdrop-blur-sm">
                  <BookOpen className="h-8 w-8 text-emerald-400" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
                  Financial Literacy Guide
                </h1>
              </div>
              <p className="text-gray-300 text-lg">
                Essential knowledge for managing your finances and understanding credit, especially for underserved
                communities.
              </p>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Understanding Financial Basics</h2>
                <p className="text-gray-300 mb-4">
                  Financial literacy is the foundation of economic well-being. It encompasses the knowledge and skills
                  needed to make informed financial decisions. For underserved communities, developing these skills is
                  particularly important as it can help overcome systemic barriers to financial inclusion.
                </p>
                <p className="text-gray-300 mb-6">
                  This guide covers essential financial concepts that everyone should understand, regardless of their
                  background or current financial situation.
                </p>

                <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm border border-white/5 space-y-4">
                  <h3 className="text-xl font-medium text-white">Key Financial Concepts</h3>
                  <ul className="space-y-3">
                    {[
                      "Budgeting and expense tracking",
                      "Saving strategies for different goals",
                      "Understanding interest rates and compound interest",
                      "Different types of credit and loans",
                      "Banking services and alternatives",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Budgeting Fundamentals</h2>
                <p className="text-gray-300 mb-4">
                  A budget is a financial plan that helps you track income and expenses. Creating and maintaining a
                  budget is one of the most important steps toward financial stability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-3 text-white">Income Tracking</h3>
                    <p className="text-gray-400">
                      Record all sources of income, including wages, gig work, benefits, and any other money coming in.
                      For irregular income, calculate a monthly average based on past earnings.
                    </p>
                  </div>
                  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-3 text-white">Expense Categories</h3>
                    <p className="text-gray-400">
                      Divide expenses into fixed (rent, loan payments) and variable (food, entertainment). Prioritize
                      needs over wants when allocating your budget.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-500/20">
                  <h3 className="text-lg font-medium mb-3 text-emerald-300">The 50/30/20 Rule</h3>
                  <p className="text-gray-300 mb-4">
                    A simple budgeting approach that allocates your after-tax income as follows:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                      </div>
                      <div>
                        <span className="text-white font-medium">50% for needs:</span>
                        <span className="text-gray-300 ml-2">Housing, food, utilities, transportation</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                      </div>
                      <div>
                        <span className="text-white font-medium">30% for wants:</span>
                        <span className="text-gray-300 ml-2">Entertainment, dining out, subscriptions</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                      </div>
                      <div>
                        <span className="text-white font-medium">20% for savings/debt:</span>
                        <span className="text-gray-300 ml-2">Emergency fund, debt repayment, investments</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Building an Emergency Fund</h2>
                <p className="text-gray-300 mb-6">
                  An emergency fund is a financial safety net that can help you avoid debt when unexpected expenses
                  arise. For those with limited resources, even a small emergency fund can make a significant
                  difference.
                </p>

                <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-4">Steps to Build Your Emergency Fund</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Start small</h4>
                        <p className="text-gray-400">
                          Begin with a goal of saving ₹1,000, then work toward one month of essential expenses.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Automate savings</h4>
                        <p className="text-gray-400">
                          Set up automatic transfers to a separate savings account on payday.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Use windfalls wisely</h4>
                        <p className="text-gray-400">
                          Allocate a portion of tax refunds, bonuses, or gifts to your emergency fund.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Keep it accessible</h4>
                        <p className="text-gray-400">
                          Your emergency fund should be in an account that's easy to access but separate from your
                          everyday spending.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>

              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl p-6 border border-emerald-500/30">
                <h2 className="text-xl font-semibold mb-3 text-white">Next Steps in Your Financial Journey</h2>
                <p className="text-gray-300 mb-4">
                  Now that you understand the basics of financial literacy, explore our other resources to deepen your
                  knowledge:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/resources/understanding-credit">
                    <Button className="bg-black/30 hover:bg-black/50 text-white border border-white/10">
                      Understanding Credit Scores
                    </Button>
                  </Link>
                  <Link href="/resources/building-credit">
                    <Button className="bg-black/30 hover:bg-black/50 text-white border border-white/10">
                      Building Credit History
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
