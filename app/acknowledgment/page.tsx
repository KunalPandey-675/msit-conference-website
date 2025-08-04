import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Award, Heart, Users, Globe } from "lucide-react"

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
              We extend our sincere gratitude to all those who have contributed to making NCI-TIDE-MSIT 2025 a success.
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
                <div className="text-center mb-8 sm:mb-12">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
                    CMT Acknowledgment
                  </h2>
                  <p className="text-base sm:text-lg text-blue-700 leading-relaxed">
                    The peer-review process for this conference was managed using Microsoft CMT
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 sm:p-8 mb-8 sm:mb-12">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                    <h3 className="text-xl sm:text-2xl font-semibold text-blue-900">Microsoft CMT Platform</h3>
                  </div>
                  <p className="text-sm sm:text-base text-blue-700 leading-relaxed mb-4 sm:mb-6">
                    We are grateful to Microsoft for providing the Conference Management Toolkit (CMT) platform free of charge. 
                    This comprehensive system has been instrumental in managing our peer-review process efficiently and professionally.
                  </p>
                  <div className="bg-white rounded-lg p-4 sm:p-6 border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2 sm:mb-3">CMT Services Provided:</h4>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-blue-700">
                      <li className="flex items-start gap-2">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Cloud infrastructure and hosting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Development and maintenance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Technical support and assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>All costs covered by Microsoft</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://cmt3.research.microsoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    Visit Microsoft CMT
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Acknowledgments */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
                Our Gratitude
              </h2>
              <p className="text-base sm:text-lg text-blue-700 max-w-3xl mx-auto leading-relaxed">
                We would like to express our sincere appreciation to all individuals and organizations 
                who have contributed to the success of NCI-TIDE-MSIT 2025.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Reviewers */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4">Reviewers</h3>
                  <p className="text-sm sm:text-base text-blue-700 leading-relaxed">
                    Our esteemed panel of reviewers who dedicated their time and expertise to ensure 
                    the quality and rigor of our conference proceedings.
                  </p>
                </CardContent>
              </Card>

              {/* Sponsors */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-purple-700" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">Sponsors</h3>
                  <p className="text-sm sm:text-base text-purple-700 leading-relaxed">
                    Our generous sponsors whose support has made this conference possible and 
                    enabled us to provide an exceptional experience for all participants.
                  </p>
                </CardContent>
              </Card>

              {/* Organizing Team */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-green-700" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-3 sm:mb-4">Organizing Team</h3>
                  <p className="text-sm sm:text-base text-green-700 leading-relaxed">
                    The dedicated organizing committee members whose tireless efforts and 
                    commitment have brought this conference to fruition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 