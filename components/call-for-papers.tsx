"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Upload, CheckCircle, Award, Download, Send } from "lucide-react"

export function CallForPapers() {
  const paperTypes = [
    {
      title: "Full Papers",
      description: "Original research work with comprehensive analysis and results",
      pages: "6-8 pages",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Short Papers",
      description: "Work-in-progress, preliminary results, or position papers",
      pages: "4-6 pages",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Review Papers",
      description: "Comprehensive survey of existing work in specific domains",
      pages: "8-10 pages",
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ]

  const submissionGuidelines = [
    "Papers must be original and not published elsewhere",
    "Follow IEEE conference paper format",
    "Include abstract, keywords, and references",
    "Submit in PDF format only",
    "All papers will undergo peer review",
    "Accepted papers will be published in IEEE proceedings",
  ]

  const reviewProcess = [
    {
      step: "1",
      title: "Initial Screening",
      description: "Papers checked for format and scope compliance",
    },
    {
      step: "2",
      title: "Peer Review",
      description: "Double-blind review by domain experts",
    },
    {
      step: "3",
      title: "Decision",
      description: "Accept/Reject notification with reviewer comments",
    },
    {
      step: "4",
      title: "Camera Ready",
      description: "Final version submission after incorporating feedback",
    },
  ]

  return (
    <section id="call-for-papers" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1">
            Call for Papers
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            Submit Your Research
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed px-4">
            We invite researchers, academicians, and industry professionals to submit their original research papers for
            presentation at NCI-TIDE-MSIT 2025.
          </p>
        </div>

        {/* Paper Types */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-8 sm:mb-12">Paper Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {paperTypes.map((type, index) => (
              <Card
                key={index}
                className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full"
              >
                <CardHeader className="text-center pb-4 sm:pb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-blue-600">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-blue-900">{type.title}</CardTitle>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs sm:text-sm">{type.pages}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm sm:text-base text-blue-700 leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Submission Guidelines and Review Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <Card className="bg-white border-blue-200 shadow-lg">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-2xl sm:text-3xl text-blue-900 flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                Submission Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {submissionGuidelines.map((guideline, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-blue-700 leading-relaxed">{guideline}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white border-blue-200 shadow-lg">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-2xl sm:text-3xl text-blue-900 flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                Review Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {reviewProcess.map((process, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">{process.title}</h4>
                    <p className="text-sm sm:text-base text-blue-700 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Submission Portal */}
        <Card className="bg-gradient-to-r from-blue-900 to-purple-900 text-white border-0 shadow-2xl">
          <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 bg-white/20 rounded-lg">
                <Upload className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Submit Your Paper</h3>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to share your research with the engineering community? Submit your paper through our online portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Paper
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent transition-all duration-300 transform hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Template
              </Button>
            </div>
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/10 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
              <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">Important Dates</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base">
                <div>
                  <span className="font-medium">Submission Deadline:</span>
                  <br />
                  <span className="text-blue-100">October 15, 2025</span>
                </div>
                <div>
                  <span className="font-medium">Notification:</span>
                  <br />
                  <span className="text-blue-100">October 30, 2025</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
