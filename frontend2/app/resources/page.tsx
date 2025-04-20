import Link from "next/link"
import { ArrowLeft, BookOpen, FileText, Lightbulb, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
  const resources = [
    {
      id: "financial-literacy",
      title: "Financial Literacy Guide",
      description: "Essential knowledge for managing your finances and understanding credit",
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    },
    {
      id: "understanding-credit",
      title: "Understanding Credit Scores",
      description: "Learn how credit scores work and what factors affect your score",
      icon: <FileText className="h-6 w-6" />,
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    },
    {
      id: "building-credit",
      title: "Building Credit History",
      description: "Strategies for establishing and improving your credit profile",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30",
    },
    {
      id: "alternative-credit",
      title: "Alternative Credit Solutions",
      description: "Options for those with limited or no traditional credit history",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "from-amber-500/20 to-yellow-500/20 border-amber-500/30",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
            Educational Resources
          </h1>
          <p className="text-gray-300 mb-12 text-lg">
            Explore our collection of resources designed to help underserved populations understand credit risk and
            improve financial literacy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <Link key={resource.id} href={`/resources/${resource.id}`}>
                <div
                  className={`backdrop-blur-lg bg-gradient-to-br ${resource.color} rounded-2xl p-6 border h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/10`}
                >
                  <div className="bg-black/30 rounded-xl p-3 backdrop-blur-sm w-12 h-12 flex items-center justify-center mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-300">{resource.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
