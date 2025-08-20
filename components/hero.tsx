"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Award, ArrowRight } from "lucide-react"
import { PublicationBenefits } from "@/components/publication-benefits"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-[6.5rem] sm:pt-20">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          {/* Conference Badge */}
          <Badge className="bg-white/20 text-white border-white/30 mb-4 sm:mb-6 text-xs sm:text-sm px-4 py-2 backdrop-blur-sm">
            National Conference 2025
          </Badge>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="block">NCI-TIDE 2025</span>
            {/* <span className="block text-3xl sm:text-4xl lg:text-6xl text-blue-200">MSIT 2025</span> */}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            National Conference on Integrating Technologies, Ideas and Disciplines for Engineering Innovation (NCI-TIDE 2025)
          </p>

          {/* Organizer */}
          <div className="mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-blue-200 mb-2">Organized by</p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
              Department of Electronics and Communication Engineering
            </p>
            <p className="text-lg sm:text-xl text-blue-200 mt-2">Maharaja Surajmal Institute of Technology, Delhi</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 max-w-md mx-auto">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              onClick={() => window.open("https://cmt3.research.microsoft.com/NCITIDE2025/Submission/Index", "_blank")}
            >
              Submit Paper
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent transition-all duration-300 transform hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              onClick={() => scrollToSection("#registration")}
            >
              Register Now
            </Button>
          </div>

          {/* Publication Benefits Scrolling Animation */}
          <PublicationBenefits />
        </div>

        {/* Conference Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Conference Dates</h3>
              <p className="text-sm sm:text-base text-blue-100">November 13-14, 2025</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Venue</h3>
              <p className="text-sm sm:text-base text-blue-100">MSIT, Delhi</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Expected Participants</h3>
              <p className="text-sm sm:text-base text-blue-100">500+ Delegates</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Publication</h3>
              {/* <p className="text-sm sm:text-base text-blue-100">IEEE Proceedings</p> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
