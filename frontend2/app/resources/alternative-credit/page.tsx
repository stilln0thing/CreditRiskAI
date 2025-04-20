import Link from "next/link"
import { ArrowLeft, Lightbulb, Smartphone, CreditCard, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AlternativeCreditPage() {
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

          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/5 mb-12">
            <div className="bg-gradient-to-r from-amber-900/50 to-yellow-900/50 p-8 md:p-12 border-b border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-black/30 rounded-xl p-3 backdrop-blur-sm">
                  <Lightbulb className="h-8 w-8 text-amber-400" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-200">
                  Alternative Credit Solutions
                </h1>
              </div>
              <p className="text-gray-300 text-lg">
                Options for those with limited or no traditional credit history to access financial services and build
                credit.
              </p>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-amber-400">Beyond Traditional Credit</h2>
                <p className="text-gray-300 mb-4">
                  Traditional credit scoring systems often overlook individuals with limited credit history, creating
                  barriers to financial inclusion. Alternative credit solutions use different data points to assess
                  creditworthiness.
                </p>
                <p className="text-gray-300 mb-6">
                  These innovative approaches can help underserved populations access financial services and build their
                  credit profiles.
                </p>

                <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm border border-white/5">
                  <h3 className="text-xl font-medium text-white mb-4">Why Alternative Credit Matters</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                        <p className="text-gray-300 font-medium">Financial Inclusion</p>
                      </div>
                      <p className="text-gray-400 pl-6">
                        Provides access to financial services for the "credit invisible" population who lack traditional
                        credit histories.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                        <p className="text-gray-300 font-medium">Economic Opportunity</p>
                      </div>
                      <p className="text-gray-400 pl-6">
                        Opens doors to loans, housing, and employment opportunities that require credit checks.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                        <p className="text-gray-300 font-medium">Fair Assessment</p>
                      </div>
                      <p className="text-gray-400 pl-6">
                        Evaluates creditworthiness based on relevant financial behaviors beyond traditional credit
                        history.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                        <p className="text-gray-300 font-medium">Building Credit</p>
                      </div>
                      <p className="text-gray-400 pl-6">
                        Creates pathways to establish traditional credit history over time.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-amber-400">Alternative Data Sources</h2>
                <p className="text-gray-300 mb-6">
                  Alternative credit assessment looks beyond traditional credit reports to evaluate financial
                  responsibility:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-amber-500/20 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                        <Smartphone className="h-5 w-5 text-amber-400" />
                      </div>
                      <h3 className="text-lg font-medium text-white">Digital Footprint</h3>
                    </div>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <span>Mobile phone payment history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <span>Digital wallet transaction patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <span>UPI payment consistency</span>
                      </li>
                    </ul>
                  </div>

                  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-amber-500/20 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-amber-400" />
                      </div>
                      <h3 className="text-lg font-medium text-white">Payment History</h3>
                    </div>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <span>Rent payment records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <span>Utility bill payment history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <span>Subscription service payments</span>
                      </li>
                    </ul>
                  </div>

                  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-amber-500/20 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                        <BarChart3 className="h-5 w-5 text-amber-400" />
                      </div>
                      <h3 className="text-lg font-medium text-white">Income & Employment</h3>
                    </div>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <span>Gig work history and earnings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <span>Income stability patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <span>Employment duration</span>
                      </li>
                    </ul>
                  </div>

                  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-amber-500/20 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                        <div className="text-amber-400 font-bold">AI</div>
                      </div>
                      <h3 className="text-lg font-medium text-white">AI-Based Assessment</h3>
                    </div>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <span>Machine learning models analyzing financial behavior</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <span>Psychometric assessments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                        <span>Behavioral patterns analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-amber-400">Alternative Credit Products</h2>
                <p className="text-gray-300 mb-6">
                  Several financial products are designed specifically for individuals with limited credit history:
                </p>

                <div className="space-y-6">
                  <div className="backdrop-blur-lg bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-medium mb-3 text-white">Microfinance Loans</h3>
                    <p className="text-gray-300 mb-4">
                      Small loans designed for individuals with limited access to traditional banking services. These
                      loans often have:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                        </div>
                        <span>Simplified application processes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                        </div>
                        <span>Alternative eligibility criteria</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                        </div>
                        <span>Reporting to credit bureaus to help build credit</span>
                      </li>
                    </ul>
                  </div>

                  <div className="backdrop-blur-lg bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-medium mb-3 text-white">
                      Community Development Financial Institutions (CDFIs)
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Financial institutions dedicated to serving communities that lack access to financing. CDFIs
                      offer:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                        </div>
                        <span>Loans based on community knowledge rather than just credit scores</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                        </div>
                        <span>Financial education and support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                        </div>
                        <span>Flexible terms designed for community needs</span>
                      </li>
                    </ul>
                  </div>

                  <div className="backdrop-blur-lg bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-medium mb-3 text-white">Fintech Solutions</h3>
                    <p className="text-gray-300 mb-4">
                      Technology-driven financial services that use alternative data for credit decisions:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                        </div>
                        <span>AI-powered lending platforms that analyze thousands of data points</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                        </div>
                        <span>
                          Mobile-first financial services accessible without traditional banking infrastructure
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                        </div>
                        <span>Digital identity verification systems that reduce barriers to financial services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl p-6 border border-amber-500/30">
                <h2 className="text-xl font-semibold mb-3 text-white">Explore More Resources</h2>
                <p className="text-gray-300 mb-4">Continue learning about financial inclusion and credit building:</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/resources/financial-literacy">
                    <Button className="bg-black/30 hover:bg-black/50 text-white border border-white/10">
                      Financial Literacy Guide
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
