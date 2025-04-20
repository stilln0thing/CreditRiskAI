import Link from "next/link"
import { ArrowLeft, TrendingUp, CheckCircle, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BuildingCreditPage() {
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

          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/5 mb-12">
            <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-8 md:p-12 border-b border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-black/30 rounded-xl p-3 backdrop-blur-sm">
                  <TrendingUp className="h-8 w-8 text-purple-400" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-200">
                  Building Credit History
                </h1>
              </div>
              <p className="text-gray-300 text-lg">
                Strategies for establishing and improving your credit profile, especially for those with limited or no
                credit history.
              </p>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Starting Your Credit Journey</h2>
                <p className="text-gray-300 mb-4">
                  Building credit from scratch can seem challenging, but with the right approach, you can establish a
                  positive credit history over time. This is especially important for individuals who have been excluded
                  from traditional financial systems.
                </p>
                <p className="text-gray-300 mb-6">
                  Here are some effective strategies to start building your credit history:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="bg-purple-500/20 rounded-full p-2 w-10 h-10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-3 text-white">Become an Authorized User</h3>
                    <p className="text-gray-400">
                      Ask a family member or trusted friend with good credit to add you as an authorized user on their
                      credit card. Their positive payment history can help boost your credit score.
                    </p>
                  </div>

                  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="bg-purple-500/20 rounded-full p-2 w-10 h-10 flex items-center justify-center mb-4">
                      <Shield className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-3 text-white">Apply for a Secured Credit Card</h3>
                    <p className="text-gray-400">
                      Secured cards require a deposit that typically becomes your credit limit. They're easier to
                      qualify for and can help establish credit history when used responsibly.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Credit-Building Best Practices</h2>
                <p className="text-gray-300 mb-6">
                  Once you have access to credit, follow these practices to build a positive credit history:
                </p>

                <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm border border-white/5 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 rounded-full p-2 w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Always Pay on Time</h3>
                      <p className="text-gray-400">
                        Payment history is the most significant factor in your credit score. Set up automatic payments
                        or reminders to ensure you never miss a due date.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 rounded-full p-2 w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <div className="text-purple-400 font-bold">%</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Keep Credit Utilization Low</h3>
                      <p className="text-gray-400">
                        Try to use less than 30% of your available credit. For example, if your credit limit is ₹10,000,
                        aim to keep your balance below ₹3,000.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 rounded-full p-2 w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <div className="text-purple-400 font-bold">+</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Diversify Your Credit Mix</h3>
                      <p className="text-gray-400">
                        Having different types of credit (credit cards, loans) can positively impact your score.
                        Consider a small personal loan or credit-builder loan once you're comfortable managing credit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 rounded-full p-2 w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <div className="text-purple-400 font-bold">!</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Limit Credit Applications</h3>
                      <p className="text-gray-400">
                        Each application can result in a hard inquiry, which may temporarily lower your score. Space out
                        applications and only apply for credit you need.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Alternative Credit-Building Options</h2>
                <p className="text-gray-300 mb-6">
                  Traditional credit-building methods aren't the only way to establish credit. Consider these
                  alternatives:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="backdrop-blur-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-3 text-white">Credit-Builder Loans</h3>
                    <p className="text-gray-400 mb-4">
                      These loans are specifically designed to help build credit. The money you borrow is held in a
                      savings account while you make payments, and is released to you once the loan is paid off.
                    </p>
                    <div className="bg-black/30 rounded-lg p-3 text-sm text-gray-300">
                      <strong className="text-purple-300">Pro tip:</strong> Look for credit-builder loans with low fees
                      and interest rates from community banks or credit unions.
                    </div>
                  </div>

                  <div className="backdrop-blur-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-3 text-white">Rent and Utility Reporting</h3>
                    <p className="text-gray-400 mb-4">
                      Some services allow you to report your rent and utility payments to credit bureaus, helping you
                      build credit through bills you already pay.
                    </p>
                    <div className="bg-black/30 rounded-lg p-3 text-sm text-gray-300">
                      <strong className="text-purple-300">Pro tip:</strong> Ask your landlord if they report rent
                      payments or consider services like Experian Boost that report utility payments.
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">Monitoring Your Progress</h2>
                <p className="text-gray-300 mb-6">
                  Tracking your credit progress is essential to ensure your efforts are paying off:
                </p>

                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                  <h3 className="text-lg font-medium text-white">Free Credit Reports</h3>
                  <p className="text-gray-400">
                    You're entitled to one free credit report annually from each of the major credit bureaus. Review
                    these reports for errors and track your progress.
                  </p>

                  <h3 className="text-lg font-medium text-white">Credit Monitoring Services</h3>
                  <p className="text-gray-400">
                    Many banks and financial apps offer free credit score monitoring. These can help you track changes
                    to your score over time.
                  </p>

                  <h3 className="text-lg font-medium text-white">Set Credit Goals</h3>
                  <p className="text-gray-400">
                    Establish specific, achievable credit goals. For example, aim to increase your score by 50 points in
                    six months or maintain perfect payment history for a year.
                  </p>
                </div>
              </section>

              <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl p-6 border border-purple-500/30">
                <h2 className="text-xl font-semibold mb-3 text-white">Continue Your Credit Journey</h2>
                <p className="text-gray-300 mb-4">
                  Building credit is a marathon, not a sprint. Explore our other resources to enhance your financial
                  knowledge:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/resources/financial-literacy">
                    <Button className="bg-black/30 hover:bg-black/50 text-white border border-white/10">
                      Financial Literacy Guide
                    </Button>
                  </Link>
                  <Link href="/resources/alternative-credit">
                    <Button className="bg-black/30 hover:bg-black/50 text-white border border-white/10">
                      Alternative Credit Solutions
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
