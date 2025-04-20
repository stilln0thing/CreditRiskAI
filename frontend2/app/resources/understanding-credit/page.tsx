import Link from "next/link"
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UnderstandingCreditPage() {
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

          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/5 mb-12">
            <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 p-8 md:p-12 border-b border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-black/30 rounded-xl p-3 backdrop-blur-sm">
                  <FileText className="h-8 w-8 text-blue-400" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-200">
                  Understanding Credit Scores
                </h1>
              </div>
              <p className="text-gray-300 text-lg">
                Learn how credit scores work and what factors affect your score, especially for those with limited
                credit history.
              </p>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">What is a Credit Score?</h2>
                <p className="text-gray-300 mb-4">
                  A credit score is a numerical expression based on an analysis of a person's credit files, representing
                  the creditworthiness of an individual. Lenders use credit scores to evaluate the probability that a
                  person will repay their debts.
                </p>
                <p className="text-gray-300 mb-6">
                  For underserved populations, understanding credit scores is crucial as it can be a key factor in
                  accessing financial services and opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="backdrop-blur-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 flex flex-col items-center text-center">
                    <div className="bg-black/30 rounded-full p-3 backdrop-blur-sm mb-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-white">Good Score</h3>
                    <p className="text-gray-300">750-900</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Excellent approval odds, best interest rates, higher credit limits
                    </p>
                  </div>
                  <div className="backdrop-blur-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-xl p-6 flex flex-col items-center text-center">
                    <div className="bg-black/30 rounded-full p-3 backdrop-blur-sm mb-3">
                      <AlertTriangle className="h-6 w-6 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-white">Fair Score</h3>
                    <p className="text-gray-300">600-749</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Good approval odds, moderate interest rates, standard credit limits
                    </p>
                  </div>
                  <div className="backdrop-blur-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6 flex flex-col items-center text-center">
                    <div className="bg-black/30 rounded-full p-3 backdrop-blur-sm mb-3">
                      <XCircle className="h-6 w-6 text-red-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-white">Poor Score</h3>
                    <p className="text-gray-300">300-599</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Limited approval odds, higher interest rates, lower credit limits
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Factors That Affect Your Credit Score</h2>
                <p className="text-gray-300 mb-6">
                  Understanding what influences your credit score can help you make better financial decisions and
                  improve your score over time.
                </p>

                <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm border border-white/5 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white">Payment History (35%)</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                    <p className="text-gray-400">
                      Your track record of paying bills on time. Late payments, defaults, and bankruptcies can
                      significantly lower your score.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white">Credit Utilization (30%)</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                    <p className="text-gray-400">
                      The amount of credit you're using compared to your credit limits. Aim to keep this below 30%.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white">Length of Credit History (15%)</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                    <p className="text-gray-400">
                      How long you've had credit accounts. Longer histories generally improve your score.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white">Credit Mix (10%)</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                    <p className="text-gray-400">
                      The variety of credit accounts you have (credit cards, loans, mortgages, etc.).
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-white">New Credit (10%)</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                    <p className="text-gray-400">
                      Recent credit applications and new accounts. Multiple applications in a short period can lower
                      your score.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                  Credit Challenges for Underserved Communities
                </h2>
                <p className="text-gray-300 mb-6">
                  Many individuals in underserved communities face unique challenges when it comes to building and
                  maintaining good credit.
                </p>

                <div className="space-y-4">
                  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-3 text-white">The Credit Invisibility Problem</h3>
                    <p className="text-gray-400">
                      Many people are "credit invisible," meaning they have no credit history with major reporting
                      agencies. This makes it difficult to qualify for traditional financial products.
                    </p>
                  </div>

                  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-3 text-white">Limited Access to Banking Services</h3>
                    <p className="text-gray-400">
                      Without access to basic banking services, it's harder to establish credit history through
                      traditional means.
                    </p>
                  </div>

                  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-lg font-medium mb-3 text-white">Predatory Lending Practices</h3>
                    <p className="text-gray-400">
                      High-interest loans and predatory lending can trap individuals in cycles of debt that damage
                      credit scores.
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30">
                <h2 className="text-xl font-semibold mb-3 text-white">Continue Your Credit Education</h2>
                <p className="text-gray-300 mb-4">
                  Now that you understand credit scores, learn how to build and improve your credit:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/resources/building-credit">
                    <Button className="bg-black/30 hover:bg-black/50 text-white border border-white/10">
                      Building Credit History
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
