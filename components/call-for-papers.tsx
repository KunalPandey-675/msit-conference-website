"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Upload,
  CheckCircle,
  Award,
  Download,
  Send,
  Info,
  UserCheck
} from "lucide-react"

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

  const formattingGuidelines = [
    "Authors must submit original, unpublished work that is not under review elsewhere.",
    <>
      Papers should be formatted as per the IEEE/ACM Conference&nbsp;
      <a
        href="/conference-template-a4.docx"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 underline hover:text-blue-900"
      >
        template
      </a>.
    </>,
    "Paper Length: 6–8 pages (including references, figures, and tables). Extra pages may incur an additional fee.",
    "All submissions will undergo a double-blind peer-review process.",
    "Submissions must be made through the CMT link: (insert submission link).",
  ];

  const authorGuidelines = [
    "Manuscripts must be original, unpublished, and not under consideration elsewhere.",
    <>
      Format your paper as per the official IEEE conference&nbsp;
      <a
        href="/conference-template-a4.docx"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 underline hover:text-blue-900"
      >
        template
      </a> (2-column format).
    </>,
    "Ensure inclusion of abstract, keywords, and properly formatted references.",
    "Submit your paper strictly in PDF format via the submission portal.",
    "All submissions will undergo a double-blind peer-review process.",
    // "Accepted papers will be published in the official IEEE Xplore proceedings.",
  ]

  return (
    <section id="call-for-papers" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 text-xs sm:text-sm px-3 py-1">
            Call for Papers
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Submit Your Research
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed px-4">
            We invite researchers, academicians, and industry professionals to submit their original research papers for
            presentation at NCI-TIDE 2025.
          </p>
        </div>


        {/* Paper Categories */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-12">Paper Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {paperTypes.map((type, index) => (
              <Card
                key={index}
                className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full"
              >
                <CardHeader className="text-center pb-4 sm:pb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600">
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

        {/* Guidelines Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20">
          {/* Author Guidelines */}
          <Card className="bg-gradient-to-br from-blue-50 via-white to-blue-100 border border-blue-200 shadow-xl">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-2xl sm:text-3xl text-blue-900 font-bold flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-blue-200 rounded-xl shadow-md">
                  <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 text-blue-800" />
                </div>
                Author Guidelines
              </CardTitle>
              <p className="text-sm sm:text-base text-blue-700 mt-2">
                Please adhere to the following instructions before submitting your research paper.
              </p>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-5 pt-2">
              {authorGuidelines.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-2 w-2.5 h-2.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-blue-800 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Formatting Requirements */}
          <Card className="bg-white border border-blue-200 shadow-md">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-2xl sm:text-3xl text-blue-900 font-bold flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-xl shadow-md">
                  <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-blue-700" />
                </div>
                Submission Guidlines
              </CardTitle>
              <p className="text-sm sm:text-base text-blue-700 mt-2">
                Ensure your manuscript follows these technical and layout standards.
              </p>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-5 pt-2">
              {formattingGuidelines.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-2 w-2.5 h-2.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-blue-800 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Review Process */}
        <div className="mx-auto w-full flex justify-center ">
          <Card className="bg-white border-blue-200 pr-14 shadow-lg mb-20">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-2xl sm:text-3xl text-blue-900 flex items-center gap-3">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                Review Process
              </CardTitle>

              <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 px-3 py-2 rounded flex items-center gap-2 text-sm">
                <Info className="w-5 h-5 text-yellow-600" />
                <p>
                  <strong>Note:</strong> Max 15% plagiarism allowed. Ensure originality.
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {reviewProcess.map((process, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                    {process.step}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-900 mb-1">
                      {process.title}
                    </h4>
                    <p className="text-sm sm:text-base text-blue-700 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Submission CTA */}
        <Card className="bg-gradient-to-r from-blue-900 to-purple-900 text-white border-0 shadow-2xl">
          <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 sm:p-4 bg-white/20 rounded-lg">
                <Upload className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Submit Your Paper</h3>
            </div>

            <div className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 max-w-3xl mx-auto leading-relaxed">
              <p className="mb-4">
                <span className="font-semibold text-yellow-500">Where to Submit:</span><br />

                <Button 
                  className="bg-white text-blue-900 hover:bg-blue-50 px-2 py-5 md:w-full w-[320px] text-base font-semibold"
                  onClick={() => window.open("https://cmt3.research.microsoft.com/NCITIDE2025/Submission/Index", "_blank")}
                >
                  <Send className="w-5 mr-2" />
                  <div className="flex flex-col md:flex-row gap-1">
                    <div>Submit Your Paper via</div>
                    <div><span className="text-red-400">CMT Portal</span></div>
                  </div>
                </Button>
                
              </p>
              <p>
                <span className="font-semibold text-yellow-500">How to Submit:</span><br />
                You will need a CMT account before submitting your paper. Please use the links below to create your account and learn about the submission process.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-lg mx-auto mb-6">
              <a
                href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-5 text-base font-semibold">
                  <UserCheck className="w-5 mr-2" />
                  Create CMT Account
                </Button>
              </a>
              <a
                href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-5 text-base font-semibold">
                  <FileText className="w-5 mr-2" />
                  Submission Instructions
                </Button>
              </a>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg max-w-2xl mx-auto">
              <h4 className="font-semibold text-base sm:text-lg mb-2">Important Dates</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                <div>
                  <span className="font-medium">Paper Submission Deadline (Extended):</span><br />
                  <span className="text-blue-100">October 1, 2025</span><br />
                  <span className="text-xs text-blue-200">(Originally September 15, 2025)</span>
                </div>
                <div>
                  <span className="font-medium">Notification of Acceptance:</span><br />
                  <span className="text-blue-100">September 30, 2025</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  )
}
