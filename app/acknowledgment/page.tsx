import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function AcknowledgmentPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 sm:mb-6 text-xs sm:text-sm px-4 py-2 backdrop-blur-sm">
              Acknowledgments
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Acknowledgments
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-4">
              We extend our sincere gratitude to all those who have contributed to making NCI-TIDE 2025 a success.
            </p>
          </div>
        </div>
      </section>

      {/* CMT Acknowledgment Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-blue-200 shadow-lg">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-6 sm:mb-8">
                    CMT Acknowledgment
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    The peer-review process for this conference was managed using Microsoft CMT (
                    <a
                      href="https://cmt3.research.microsoft.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      https://cmt3.research.microsoft.com
                    </a>
                    ). Microsoft provided this service free of charge, covering all cloud, development, and support costs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 