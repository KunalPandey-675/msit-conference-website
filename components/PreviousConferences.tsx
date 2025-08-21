"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

export function PreviousConferences() {
  const reports = [
    {
      title: "NCRTCES 2024 Report",
      thumbnail: "/images/NCRTCESConference.png",
      pdf: "https://www.msit.in/media/2024/12/04/ncrtces-2024.pdf",
    },
    {
      title: "ICAIA 2024 Report",
      thumbnail: "/images/ICAIAConference.jpg",
      pdf: "https://www.msit.in/media/2024/05/01/conference-report-for-website-and-college-magazine.pdf",
    },
  ]

  return (
    <section
      id="previous-conferences"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-4 sm:mb-6 text-xs sm:text-sm px-3 py-1">
            Past Conferences
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6">
            Previous Conference Reports
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed px-4">
            Explore the achievements and highlights from our past conferences.
          </p>
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reports.map((report, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-blue-900 text-lg sm:text-xl">
                  <FileText className="w-5 h-5 text-blue-600" />
                  {report.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <a
                  href={report.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-4 w-full"
                >
                  <img
                    src={report.thumbnail}
                    alt={report.title}
                    className="w-full h-64 object-contain border border-gray-200 rounded-lg shadow-sm"
                  />
                </a>
                <a
                  href={report.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  View Report
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
